---
id: billing-eligibility-and-verify-insurance
title: Verify insurance eligibility (270/271)
module: billing
audience: [billing, admin]
roles: [biller, admin, medical_assistant]
type: how-to
estimated_minutes: 3
last_reviewed: 2026-11-18
app_route: /patients/{patient_id}/insurance
tags: [billing, eligibility, 270, 271, Stedi, EB01, coverage-active]
---

# Verify insurance eligibility (270/271)

Eligibility verification confirms, before the visit, that a patient's coverage is active. Medipyxis sends an eligibility request (270) to the payer through Stedi, reads the response (271), and saves the result on the patient's insurance plan.

---

## Before you start

- The patient has an insurance plan with a member ID, date of birth, and a payer that Stedi recognizes.
- The rendering provider is enrolled for Eligibility (270/271) with the payer. See PTAN and payer enrollment.

---

## Run a verification

1. Click on the patient’s chart and then click on the patient's **Billing and Auth** tile.
2. Click **Verify** on the insurance plan you want to check. Medipyxis asks the payer about general health benefit plan coverage.
3. Wait for the plan's status to update.
4. On a verified plan, click **View Response** to read the payer's full response.

You can verify again at any time. The latest attempt sets the plan's status.

---

## What the result means

| **Result** | **Meaning** |
| --- | --- |
| **Verified** | The payer reports active coverage. The full response is saved so you can open it. |
| **Failed** | The payer reports no active coverage (terminated, cancelled, or ineligible), or the check returned an error. |
| **Timed out** | Stedi did not answer in time. Any response saved from an earlier check is kept. The notes read *Verification timed out. Retry later.* |

A plan that has not been checked yet shows **Pending Verification**.

---

## What Medipyxis saves

| **Item** | **Value** |
| --- | --- |
| Verification status | Verified, Failed, or timed out |
| Last verified | Date and time of this attempt |
| Payer response | Saved only when the payer reports active coverage |
| Copay, deductible, deductible met, coinsurance %, out-of-pocket max, out-of-pocket met | Read from the payer's benefits |
| Notes | A summary, such as *Active coverage verified.* with the network status and copay, or *Verification failed:* with the error |

Because the response is saved only for active coverage, **View Response** appears only on verified plans and never shows an inactive plan as covered.

---

## How benefits are read

Medipyxis reads the payer's coded benefit type, not the free-text label, to fill in copay, coinsurance, deductible, and out-of-pocket amounts. When a payer sends several values for the same benefit, it prefers individual over family coverage, in-network over out-of-network, and general plan coverage over other service types. A payer's copay line always sets the copay.

---

## Automatic re-checks

Your facility can also re-check eligibility automatically each day. A background re-check never turns a verified plan into Failed because Stedi was unavailable. Only the payer's own answer changes the result.

---

## Troubleshooting

| **Symptom** | **Likely cause** | **What to do** |
| --- | --- | --- |
| No **View Response** button | The plan is not verified, or it was verified manually. | Click **Verify** to run a fresh check. |
| The check timed out | Stedi or the payer was slow to respond. | Retry after a minute. If it keeps timing out, try later. |
| Status changes from Verified to Failed | Coverage lapsed, or the member ID or date of birth is wrong. | Read the notes. If the payer says the member was not found, correct the details and verify again. |
| Copay is $0.00 but the card shows a copay | The payer sent no copay line, or only family coverage. | Open **View Response** and read the benefits the payer returned. |
| Verified, but claims still fail | Eligibility checks coverage, not the provider's claim enrollment. | Confirm the provider is enrolled for Professional Claims (837P) with that payer. |
