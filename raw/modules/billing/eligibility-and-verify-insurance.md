---
id: billing-eligibility-and-verify-insurance
title: Verify insurance eligibility (270/271)
module: billing
audience: [billing, admin]
roles: [biller, admin, medical_assistant]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-10-29
app_route: /patients/{patient_id}/insurance
related:
  - billing-overview
  - billing-work-queue
  - billing-submit-claim
  - billing-diagnosis-code-validation
tags: [billing, eligibility, 270, 271, Stedi, EB01, coverage-active]
---

Eligibility verification is how you confirm — before the visit — that a patient's coverage is active for the service you plan to bill. Medipyxis sends a 270 request to Stedi, the payer answers with a 271, and Medipyxis writes both the verdict and the raw response back to the patient's insurance record. This page walks through how to run a verification and how to read the result.

## Before you start

- You have the biller, medical assistant, or admin role.
- The patient has an insurance row with member ID, DOB, and payer ID mapped to a Stedi trading partner.
- The rendering provider is enrolled with the payer through Stedi.

---

## Run a verification

1. Open the patient chart → **Insurance**.
2. Click **Verify** on the insurance row you want to check. Medipyxis sends a 270 request with service type 30 (Health Benefit Plan Coverage).
3. Wait for the row's status pill to update: **Verified**, **Failed**, or **Timeout**.
4. Click **View Verification Response** to open the raw 271 in a modal — the full payer response, formatted for reading.

You can re-verify at any time. The most recent attempt wins on the record — including a fresh **Failed** or **Timeout**, which correctly replaces a stale **Verified**.

---

## What the status pill means

The verdict is derived from two pieces of the 271:

- **Plan status** — the payer's own statement of whether coverage is active. Medipyxis checks whether any plan status the payer returns says "active". This is the authoritative "is coverage active today" signal.
- **Benefits** — the benefits table (deductible, copay, coinsurance, out-of-pocket), shown for reading.

| Verification Status | Meaning |
|---|---|
| **Verified** | Stedi returned a response AND the payer reports at least one active plan. The raw 271 is saved so you can open it. |
| **Failed** | Stedi returned a response but no active plan (terminated, cancelled, ineligible), OR any other error that is not a timeout. |
| **Timeout** | Stedi timed out. An earlier verification is preserved — a connection failure does not erase a prior real verification. |

---

## What Medipyxis writes back to the row

On every 270/271 round trip, Medipyxis saves:

| Item | Value |
|---|---|
| Verification status | **Verified** · **Failed** · **Timeout** |
| Last verified | Date and time of this attempt. |
| Raw 271 response | Saved only when the payer reports **active** coverage. |
| Copay, deductible, deductible met, coinsurance %, out-of-pocket max, out-of-pocket met | Read from the payer's benefits. |
| Notes | Summary — plan name, payer, and any error text. |

The raw 271 is saved only when coverage is active, so the response view never shows an inactive or terminated plan as active coverage.

---

## How the benefits are parsed (EB01)

Medipyxis reads the X12 271 **EB01** code letter (not the free-text benefit name) to identify what each benefit line means:

| EB01 | Meaning | Where it lands |
|---|---|---|
| `A` | Coinsurance percentage | Coinsurance % |
| `B` | Co-Payment amount | Copay |
| `C` | Deductible | Deductible (or Deductible met if the entry is a "remaining"/"met"/"used" variant) |
| `G` | Out-of-Pocket Stop-Loss | Out-of-pocket max (or Out-of-pocket met for the remaining variant) |

Within a benefit type, entries are ranked: individual coverage outranks family, in-network outranks out-of-network, and service type 30 outranks others. The highest-ranked line wins.

When the payer sends a Co-Payment (EB01 `B`) line, that is always the copay Medipyxis uses. Other copay-like text from a non-standard payer cannot override it.

---

## Result

A verified row unblocks pre-service checks in the Work Queue, feeds copay/deductible into the biller-facing claim summary, and preserves the exact 271 for audit. Re-verify before the DOS if the last check is stale — the row records the date and time of every attempt so you can tell.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **View Verification Response** disabled | No 271 response is saved on the row. | Click **Verify** again to run a fresh 270. |
| Status stuck at **Timeout** | Stedi timed out; existing verification is preserved on purpose. | Retry after a minute. If it keeps timing out, the payer's endpoint is slow — try later. |
| Status flips **Verified → Failed** on re-verify | Coverage really did lapse, OR the member ID / DOB is mistyped. | Compare the row's notes to the raw 271. If the payer says "member not found", correct the demographics and re-verify. |
| Copay is `$0.00` but the payer's card shows a copay | The 271 either had no Co-Payment (EB01 `B`) line or listed only family coverage. | Open **View Verification Response** and read the benefits — Medipyxis shows what the payer actually returned. |
| Row shows **Verified** but claim submission still fails on eligibility | The 270 checks base coverage, not payer enrollment through Stedi. | Contact your practice administrator — the provider may need to complete Stedi enrollment for that payer. |
