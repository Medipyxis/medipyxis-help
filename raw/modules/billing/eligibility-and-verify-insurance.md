---
id: billing-eligibility-and-verify-insurance
title: Verify insurance eligibility (270/271)
module: billing
audience: [billing, admin]
roles: [biller, admin, medical_assistant]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-11-11
app_route: /patients/{patient_id}/insurance
related:
  - billing-overview
  - billing-work-queue
  - billing-submit-claim
  - billing-diagnosis-code-validation
tags: [billing, eligibility, 270, 271, Stedi, EB01, coverage-active]
---

Eligibility verification is how you confirm — before the visit — that a patient's coverage is active for the service you plan to bill. Medipyxis sends a 270 request to Stedi, the payer answers with a 271, and Medipyxis writes the verdict back to the patient's insurance record — plus the raw 271 when coverage is active. This page walks through how to run a verification and how to read the result.

## Before you start

- You have a billing role (biller, billing lead, coder, third-party biller), a clinical role (clinician, provider, clinical manager, medical director), or admin.
- The patient has an insurance row with member ID, DOB, and payer ID mapped to a Stedi trading partner.

---

## Run a verification

1. Open the patient's overview → **Billing & Auth**.
2. On the insurance row you want to check, click the shield icon (tooltip: **Verify insurance coverage**). Medipyxis sends a 270 request with service type 30 (Health Benefit Plan Coverage).
3. Wait for the row's status pill to update: **Verified**, **Failed**, **Pending**, **Pending Approval**, **Manual Required**, or **Expired** (a timed-out check shows **Expired** unless the row was already verified).
4. Click **View Response** to open the saved 271 in a modal. The button appears only on verified rows that were checked through Stedi.

You can re-verify at any time. A payer answer always replaces the previous result, including an inactive answer replacing an old **Verified**. A timeout records the attempt but keeps an earlier verification.

---

## What the status pill means

The verdict is derived from two pieces of the 271:

- **Plan status** — the payer's own statement of whether coverage is active. Medipyxis checks whether any plan status the payer returns says "active". This is the authoritative "is coverage active today" signal.
- **Benefits** — the benefits table (deductible, copay, coinsurance, out-of-pocket), shown for reading.

| Verification Status | Meaning |
|---|---|
| **Verified** | Stedi returned a response AND the payer reports at least one active plan. The raw 271 is saved so you can open it. |
| **Failed** | Stedi returned a response but no active plan (terminated, cancelled, ineligible), OR any other error that is not a timeout. |
| **Timeout** (the pill shows **Expired**) | Stedi timed out. An earlier verification is preserved — a connection failure does not erase a prior real verification. |

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

A verified row keeps the exact 271 so you can open it with **View Response**. Re-verify before the DOS if the last check is stale — the row records the date and time of every attempt so you can tell.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| No **View Response** button | The row is not verified, or was verified manually. | Run the check again. |
| Notes say "Verification timed out. Retry later." | Stedi timed out; an earlier verification is kept on purpose. | Retry after a minute. If it keeps timing out, the payer's endpoint is slow — try later. |
| Status flips **Verified → Failed** on re-verify | Coverage really did lapse, OR the member ID / DOB is mistyped. | Compare the row's notes to the raw 271. If the payer says "member not found", correct the demographics and re-verify. |
| Copay is blank or old but the payer's card shows a copay | The 271 had no Co-Payment (EB01 `B`) line. | Open **View Response** and read the benefits — Medipyxis shows what the payer actually returned. |
| Row shows **Verified** but claim submission still fails on eligibility | The 270 checks base coverage, not payer enrollment through Stedi. | Contact your practice administrator — the provider may need to complete Stedi enrollment for that payer. |
