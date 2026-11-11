---
id: billing-diagnosis-code-validation
title: How Medipyxis validates ICD-10 diagnosis codes
module: billing
audience: [billing]
roles: [biller, admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing/new
related:
  - billing-overview
  - billing-work-queue
  - billing-coding-review-drawer
  - billing-submit-claim
tags: [billing, ICD-10, diagnosis, validation, CDC, FY2026, SVC004A]
---

Medipyxis checks every diagnosis code on a claim in two steps: a loose ICD-10 shape check, then membership in the CDC ICD-10-CM FY2026 billable catalog. This page explains what that check does, what the warning means, and where the catalog comes from.

## What the check does

When you open a claim in **New Claim** or **Edit in Full Form**, the validation panel on the right runs a set of pre-flight checks. One of those checks tests each ICD-10 code on the claim for **membership in the billable catalog**.

The catalog is loaded once when the page opens, in full, from the Medipyxis ICD-10 code list. For FY2026 that list holds **74,719 codes** — every billable, leaf-level ICD-10-CM code the CDC publishes. Parent categories and non-billable stems are excluded on purpose.

Codes fall into three outcomes:

| Outcome | What the panel shows | What it means |
|---|---|---|
| **In the catalog** | No warning. | The code exists as a billable leaf. Safe to submit. |
| **Not in the catalog** | Yellow warning: _Diagnosis code "L98.4" was not found in the FY2026 ICD-10-CM billable set — check for a typo, or choose a more specific code (parent/category codes are not billable)._ | Either a typo, or a real ICD-10 stem that is not a billable leaf (parents like `L98.4`, `I83.0`, `E11.62`). The payer will deny the claim if you submit as-is. |
| **Catalog unavailable** | A gray note under the panel heading: _ICD-10 billability check unavailable — diagnosis codes were not verified against the billable code set._ | The catalog failed to load. The check is skipped, not spoofed — the panel says so, so you never mistake a clean panel for a verified one. |

The warning is advisory, not blocking. You can still save and submit, but a code that is not in the billable catalog will be denied by the payer.

---

## Why this replaced the old regex

Before 2026-08-25, Medipyxis validated ICD-10 codes with a format regex: `/^[A-Z]\d{2}(\.\d{1,4})?$/`. That regex assumed digits-only after the dot and in positions 2–3, which is wrong for large parts of real ICD-10-CM.

Measured against the clean FY2026 catalog, the regex rejects **51,428 of 74,719 codes — 68.8% of all valid ICD-10-CM**. On live production claims it flagged 15 codes; 14 were perfectly valid (`S81.812A`, `S51.812D`, `T81.31XA`, `L24.A0` …). The 15th, `L98.A22`, was the right stem but a non-billable parent that the payer would deny — right code, wrong reason.

Catalog membership answers billability in one test. It only works because the ICD-10 code list was reconciled to the CDC billable leaf set on 2026-08-24 — before that reconciliation, membership alone would have passed non-billable parents like `L98.4`.

The **Edit Authorization** dialog used the same regex. It now uses the same catalog check, so valid codes like `S81.812A` are no longer rejected. A code that is not in the billable catalog still blocks the authorization save there (it is a warning only on the claim). If the catalog cannot load, the dialog skips the check.

---

## Where the catalog comes from

The ICD-10 code list is seeded from the CDC's official FY2026 ICD-10-CM release — the `icd10cm_codes_2026.txt` file. Only billable leaves land in the list; parent categories are filtered out during seeding.

Medipyxis sends the list to your browser in batches and checks it against an exact count. If the count and the returned codes disagree, the load fails rather than hand back a partial catalog. A partial catalog would flag every real diagnosis as "not billable"; strictly worse than the regex it replaces.

---

## What to do when you see the warning

1. **Read the code back.** Yellow means either a typo (`E11.09` when you meant `E11.9`) or a non-billable stem (`L98.4` when you should use `L98.499`).
2. **Type the code fully.** ICD-10-CM leaves are the specific 4-, 5-, 6-, or 7-character forms. Parents like `L98.4` and `I83.0` are categories, not billable codes.
3. **Search in the code picker.** The picker only surfaces catalog leaves — starting from the picker instead of typing rules out most typos.
4. **Confirm against the CDC listing** if the code looks right and the warning still fires. Bring it to your practice administrator — the code list may need a top-up if the CDC publishes an addendum.

---

## What this check does NOT do

- **It does not check payer-specific coverage.** A billable ICD-10 leaf can still be denied under a payer's LCD/NCD.
- **It does not check the ICD-10 ↔ CPT pair.** The diagnosis pointer on each procedure line is checked separately in the same validation panel.
- **It is fail-open, disclosed.** If the catalog cannot load, the billable-catalog check is skipped and the panel says so. It does not manufacture "not billable" from a failed fetch.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Warning on a code that looks right (e.g. `L24.A0`, `T81.31XA`) | Alpha characters in positions 5–7 are correct ICD-10-CM syntax the old regex rejected. | If the new check still warns, the code may actually be missing from the seeded catalog. Confirm on the CDC listing and report to your admin. |
| Warning on `L98.4`, `I83.0`, `E11.62`, or similar 3–5 character stems | These are parent categories, not billable leaves. | Choose a more specific child code (`L98.499`, `I83.019`, `E11.628`). |
| Gray note "ICD-10 billability check unavailable" | The catalog failed to load completely. | Reload the page. If it persists, tell your admin. |
| **Edit Authorization** blocks the save on a diagnosis code | The code is not in the billable catalog. (Valid codes such as `S81.812A` are no longer blocked.) | Choose a billable child code. |
