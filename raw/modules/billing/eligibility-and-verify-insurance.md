---
id: billing-eligibility-and-verify-insurance
title: Verify insurance eligibility (270/271)
module: billing
audience: [billing, admin]
roles: [biller, admin, medical_assistant]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-08-31
app_route: /patients/{patient_id}/insurance
related:
  - billing-overview
  - billing-work-queue
  - billing-submit-claim
  - billing-diagnosis-code-validation
tags: [billing, eligibility, 270, 271, Stedi, EB01, coverage-active]
---

Eligibility verification is how you confirm — before the visit — that a patient's coverage is active for the service you plan to bill. Medipyxis sends a 270 request to Stedi, the payer answers with a 271, and Medipyxis writes both the verdict and the raw response back to the patient's insurance record. This page walks through how to run a verification, how to read the result, and what changed on 2026-08-04.

## Before you start

- You have the `biller`, `medical_assistant`, or `admin` role.
- The patient has an insurance row with member ID, DOB, and payer ID mapped to a Stedi trading partner.
- The rendering provider is enrolled with the payer through Stedi.

---

## Run a verification

1. Open the patient chart → **Insurance**.
2. Click **Verify** on the insurance row you want to check. The button posts a 270 through the `verify-insurance` edge function with service type `30` (Health Benefit Plan Coverage).
3. Wait for the row's status pill to update: **Verified**, **Failed**, or **Timeout**.
4. Click **View Verification Response** to open the raw 271 in a modal — the full payer response, formatted for reading.

You can re-verify at any time. The most recent attempt wins on the record — including a fresh **Failed** or **Timeout**, which correctly replaces a stale **Verified**.

---

## What the status pill means

The verdict is derived from two pieces of the 271:

- **`planStatus[].status`** — the payer's own coverage-active flag. Medipyxis checks whether any planStatus entry contains "active" (case-insensitive). This is the authoritative "is coverage active today" signal.
- **`benefitsInformation[]`** — the benefits table (deductible, copay, coinsurance, out-of-pocket) parsed for display.

| Verification Status | Meaning |
|---|---|
| **Verified** | Stedi returned HTTP 200 AND at least one `planStatus.status` contains "active". The legacy `verified` boolean is set to `true` and the raw 271 is stored in `eligibility_response`. |
| **Failed** | Stedi returned HTTP 200 but no active plan (terminated, cancelled, ineligible), OR any non-timeout error. The `verified` boolean is set to `false`. |
| **Timeout** | Stedi timed out. Existing `verified` state is preserved — a transport failure does not destroy a prior real verification. |

<Note>
Before the 2026-08-04 fix, the server path never wrote `eligibility_response` on success and never kept the legacy `verified` boolean in step with `verification_status`. Two things followed: **View Verification Response** was unreachable for the only rows that had a real 271, and a failed re-verify left a permanent conflict between the two signals. Both are fixed. If you have historical rows from before that date with **Verified** status but no viewable response, re-run **Verify** to populate it.
</Note>

---

## What Medipyxis writes back to the row

On every 270/271 round trip, `verify-insurance` writes:

| Column | Value |
|---|---|
| `verification_status` | `verified` · `failed` · `timeout` |
| `verified` (legacy boolean) | Set only on HTTP-200 responses. Preserved through timeouts. |
| `last_verified_date` | Timestamp of this attempt. |
| `verification_method` | `stedi_270_271`. |
| `eligibility_response` | Raw 271 JSON — written only when the payer reports **active** coverage (see the note below). |
| `copay_amount`, `deductible_amount`, `deductible_met`, `coinsurance_percentage`, `out_of_pocket_max`, `out_of_pocket_met` | Parsed from `benefitsInformation`. |
| `notes` | Human summary — plan name, payer, and any error text. |

The raw 271 is stored only on active coverage on purpose: the frontend modal falls back to a canonical "Active Coverage" layout when it doesn't recognize the stored shape, so persisting an inactive/terminated response there would fabricate active coverage on screen for a reader who did not open the raw JSON.

---

## How the benefits are parsed (EB01)

Medipyxis reads the X12 271 **EB01** code letter (not the free-text `name`) to identify what each benefit line means:

| EB01 | Meaning | Where it lands |
|---|---|---|
| `A` | Coinsurance percentage | `coinsurance_percentage` (from `benefitPercent`) |
| `B` | Co-Payment amount | `copay_amount` |
| `C` | Deductible | `deductible_amount` (or `deductible_met` if the entry is a "remaining"/"met"/"used" variant) |
| `G` | Out-of-Pocket Stop-Loss | `out_of_pocket_max` (or `out_of_pocket_met` for the remaining variant) |

Within a benefit type, entries are scored: individual coverage (`coverageLevelCode='IND'`) outranks family, in-network (`inPlanNetworkIndicatorCode='Y'`) outranks out-of-network, and service type `30` outranks others. The highest-scoring line wins.

Copay is the one place with a safety belt: once ANY `EB01='B'` line has been seen, the name-fallback and `EB01='A'+amount` paths may not overwrite it. That prevents a stray "Copay" text field from a non-standard payer clobbering the authoritative Co-Payment code.

---

## Result

A verified row unblocks pre-service checks in the Work Queue, feeds copay/deductible into the biller-facing claim summary, and preserves the exact 271 for audit. Re-verify before the DOS if the last check is stale — the row stamps `last_verified_date` on every attempt so you can tell.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **View Verification Response** disabled | The row has `verification_status='verified'` but no `eligibility_response` (historical row from before 2026-08-04). | Click **Verify** again to run a fresh 270 — the response will be stored this time. |
| Status stuck at **Timeout** | Stedi timed out; existing verification is preserved on purpose. | Retry after a minute. If it keeps timing out, the payer's endpoint is slow — try later. |
| Status flips **Verified → Failed** on re-verify | Coverage really did lapse, OR the member ID / DOB is mistyped. | Compare the row's `notes` field to the raw 271. If the payer says "member not found", correct the demographics and re-verify. |
| Copay is `$0.00` but the payer's card shows a copay | The 271 either omitted `EB01='B'` or listed only family coverage. | Open **View Verification Response** and read `benefitsInformation` — the parser writes what the payer actually returned. |
| Row shows **Verified** but claim submission still fails on eligibility | The 270 checks base coverage, not payer enrollment through Stedi. | Contact your practice administrator — the provider may need to complete Stedi enrollment for that payer. |
