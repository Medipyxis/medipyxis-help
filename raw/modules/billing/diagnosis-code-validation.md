---
id: billing-diagnosis-code-validation
title: How Medipyxis validates ICD-10 diagnosis codes
module: billing
audience: [billing]
roles: [biller, admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-11-18
app_route: /facility/{facility_uuid}/billing/new
tags: [billing, ICD-10, diagnosis, validation, CDC, FY2026, SVC004A]
---

# How Medipyxis validates ICD-10 diagnosis codes

Medipyxis checks every diagnosis code on a claim against the list of billable codes in the official FY2026 ICD-10-CM code set. A code is either a billable code on that list or it is not. This page explains what the check does, what each message means, and what to do.

---

## In plain terms

A claim is the bill Medipyxis prepares for a patient's insurance company (the payer) after a visit. Each claim lists one or more diagnosis codes, which are short ICD-10 codes that record why the patient was seen. This page is for anyone who creates or reviews claims, including people who do not work in billing every day. You do not need to know the codes by heart. Medipyxis checks each one for you and shows a message when something needs your attention.

---

## Where to find the claim screen

The check runs on the claim screen. There are two ways to get there:

1. **To start a new claim:** in the left menu, select **Billing Operations**. On the **Billing Review & Management** page, select the green **New Claim** button at the top right.
2. **To open a claim that already exists:** in the claim's Coding Review drawer, select **Edit in Full Form**.

Either way, you land on the claim screen. The validation panel beside the claim is where the messages on this page appear.

---

## What the check does

When you open a claim with **New Claim**, or with **Edit in Full Form** from the Coding Review drawer, the validation panel beside the claim checks each ICD-10 diagnosis code in two ways:

- **Is it written as a code?** This catches typing slips such as a stray space or a missing dot.
- **Is it billable?** The code must be a billable code in the FY2026 ICD-10-CM code set. Category codes that have more specific codes beneath them are not billable.

| **Result** | **What the panel shows** | **What it means** |
| --- | --- | --- |
| Billable code | No message. | The code is a billable code in the FY2026 code set. |
| Not written as a code | Warning: *"M79.60 5" is not a valid ICD-10 code — check for a stray space or a missing dot (e.g. M79.605, L97.412).* | The entry has a typing slip. Correct it. |
| Not billable | Warning: *Diagnosis code "L98.4" was not found in the FY2026 ICD-10-CM billable set — check for a typo, or choose a more specific code (parent/category codes are not billable).* | Either a typo, or a real category code that is not billable on its own (for example L98.4, I83.0, or E11.62). The payer is likely to deny the claim as it stands. |
| Check unavailable | Notice: *ICD-10 billability check unavailable — diagnosis codes were not verified against the billable code set.* | Medipyxis couldn't load the code set, so the billability check was skipped. The notice makes sure a clean panel is never mistaken for a checked one. |

On a claim, these messages are warnings. You can still save and submit, but a code that is not billable is likely to be denied by the payer.

**Warning:** On a prior authorization, a code that is not billable stops the save. The form shows the same *not found in the FY2026 ICD-10-CM billable set* message — correct the code, then save. If the code set can't be loaded, this check is skipped and the save goes ahead.

---

## Where the code list comes from

The list holds every billable code in the FY2026 ICD-10-CM release published by CMS and the CDC. Category codes that are not billable are left out. Codes such as S81.812A, T81.31XA, and L24.A0, which use letters after the dot, are valid billable codes and pass the check.

---

## What to do when you see a warning

1. **Read the code back.** A warning means a typo (E11.09 when you meant E11.9) or a category code (L98.4 when the documentation supports a specific code such as L98.499).
2. **Enter the full code.** Billable ICD-10-CM codes are the specific 3- to 7-character forms. Categories such as L98.4 and I83.0 are not billable.
3. **Check the official ICD-10-CM listing** if the code looks right and the warning still shows.
4. **Tell your practice administrator** if a code on the official FY2026 listing still shows the warning.

---

## What this check does not do

- **It does not check payer coverage.** A billable code can still be denied under a payer's coverage policy (LCD or NCD). That is a separate check.
- **It does not check which diagnosis supports which procedure.** Diagnosis pointers on procedure lines are reviewed separately — see the Coding Review drawer.
- **It never reports "not billable" because the code list failed to load.** If the list can't load, the check is skipped and the panel says so.

---

## Troubleshooting

| **Symptom** | **Likely cause** | **What to do** |
| --- | --- | --- |
| Warning on a code that looks right (for example L24.A0 or T81.31XA) | The code may be missing from the code list, or mistyped | Confirm it on the official FY2026 ICD-10-CM listing and report it to your admin. |
| Warning on L98.4, I83.0, E11.62, or a similar category code | Category codes are not billable | Choose the specific code the documentation supports (for example L98.499, I83.019, or E11.628). |
| *ICD-10 billability check unavailable* | Medipyxis couldn't load the code list | Reload the page. If it keeps happening, tell your admin. |
| A prior authorization won't save | A diagnosis code on it is not billable | Read the message, correct the code, and save again. |
