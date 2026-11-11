---
id: billing-diagnosis-code-validation
title: How Medipyxis validates ICD-10 diagnosis codes
module: billing
audience: [billing]
roles: [biller, admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-08-31
app_route: /facility/{facility_uuid}/billing/new
related:
  - billing-overview
  - billing-work-queue
  - billing-coding-review-drawer
  - billing-submit-claim
tags: [billing, ICD-10, diagnosis, validation, CDC, FY2026, SVC004A]
---

Medipyxis checks every diagnosis code on a claim against the official CDC ICD-10-CM billable catalog for FY2026 — not against a pattern. That means a code either exists as a billable leaf in the catalog or it does not. This page explains what that check does, what the warning means, and where the catalog comes from.

## What the check does

When you open a claim in **New Claim** or **Edit in Full Form**, the **ClaimValidationPanel** on the right runs a set of pre-flight checks. One of those checks — internally called `SVC004A` — tests each ICD-10 code on the claim for **membership in the billable catalog**.

The catalog is loaded once when the page opens, from an edge function that returns the full `public.icd10_codes` table. For FY2026 that table holds **74,719 rows** — every billable, leaf-level ICD-10-CM code the CDC publishes. Parent categories and non-billable stems are excluded on purpose.

Codes fall into three outcomes:

| Outcome | What the panel shows | What it means |
|---|---|---|
| **In the catalog** | No warning. | The code exists as a billable leaf. Safe to submit. |
| **Not in the catalog** | Yellow warning: *Diagnosis code "L98.4" was not found in the FY2026 ICD-10-CM billable set — check for a typo, or choose a more specific code (parent/category codes are not billable).* | Either a typo, or a real ICD-10 stem that is not a billable leaf (parents like `L98.4`, `I83.0`, `E11.62`). The payer will deny the claim if you submit as-is. |
| **Catalog unavailable** | Blue disclosure: *ICD-10 billable-code check unavailable.* | The catalog failed to load. The check is skipped, not spoofed — the panel says so, so you never mistake a clean panel for a verified one. |

The warning is advisory, not blocking. You can still save and submit, but a code that is not in the billable catalog will be denied by the payer.

---

## Why this replaced the old regex

Before 2026-08-25, Medipyxis validated ICD-10 codes with a format regex: `/^[A-Z]\d{2}(\.\d{1,4})?$/`. That regex assumed digits-only after the dot and in positions 2–3, which is wrong for large parts of real ICD-10-CM.

Measured against the clean FY2026 catalog, the regex rejects **51,428 of 74,719 codes — 68.8% of all valid ICD-10-CM**. On live production claims it flagged 15 codes; 14 were perfectly valid (`S81.812A`, `S51.812D`, `T81.31XA`, `L24.A0` …). The 15th, `L98.A22`, was the right stem but a non-billable parent that the payer would deny — right code, wrong reason.

Catalog membership answers both questions in one test: format AND billability. It only works because migration `20260824120000` reconciled the `icd10_codes` table to the CDC billable leaf set on 2026-08-24 — before that reconciliation, membership alone would have passed non-billable parents like `L98.4`.

<Note>
The same defect existed one surface over, in **EditAuthorizationModal**, where the regex pushed rejections into `errors` instead of `warnings`. That path BLOCKED the save — a biller trying to record an authorization for a valid code was silently stopped. Both surfaces now use the same catalog membership check, and both now warn rather than block.
</Note>

---

## Where the catalog comes from

The `icd10_codes` table is seeded from the CDC's official FY2026 ICD-10-CM release — the `icd10cm_codes_2026.txt` file the CDC publishes on `www.cms.gov`. Only billable leaves land in the table; parent categories are filtered out during seeding.

An edge function (`icd10-billable-codes`) hands the table to the frontend in paginated batches and proves completeness against an exact row count. If the count and the returned rows disagree — for example because a Supabase `max_rows` cap silently truncated the response — the edge function returns HTTP 500 rather than hand back a partial catalog. A partial catalog would flag every real diagnosis as "not billable"; strictly worse than the regex it replaces.

---

## What to do when you see the warning

1. **Read the code back.** Yellow means either a typo (`E11.09` when you meant `E11.9`) or a non-billable stem (`L98.4` when you should use `L98.499`).
2. **Type the code fully.** ICD-10-CM leaves are the specific 4-, 5-, 6-, or 7-character forms. Parents like `L98.4` and `I83.0` are categories, not billable codes.
3. **Search in the code picker.** The picker only surfaces catalog leaves — starting from the picker instead of typing rules out most typos.
4. **Confirm against the CDC listing** if the code looks right and the warning still fires. Bring it to your practice administrator — the migration that seeded the table may need a top-up if the CDC publishes an addendum.

---

## What this check does NOT do

- **It does not check payer-specific coverage.** A billable ICD-10 leaf can still be denied under a payer's LCD/NCD. That is a separate check.
- **It does not check the ICD-10 ↔ CPT pair.** The diagnosis pointer on each procedure line is validated separately (see [Coding Review drawer](./coding-review-drawer.md)).
- **It is fail-open, disclosed.** If the catalog cannot load, the SVC004A check is skipped and the panel says so. It does not manufacture "not billable" from a failed fetch.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Warning on a code that looks right (e.g. `L24.A0`, `T81.31XA`) | Alpha characters in positions 5–7 are correct ICD-10-CM syntax the old regex rejected. | If the new check still warns, the code may actually be missing from the seeded catalog. Confirm on the CDC listing and report to your admin. |
| Warning on `L98.4`, `I83.0`, `E11.62`, or similar 3–5 character stems | These are parent categories, not billable leaves. | Choose a more specific child code (`L98.499`, `I83.019`, `E11.628`). |
| Blue disclosure "ICD-10 billable-code check unavailable" | The `icd10-billable-codes` edge function failed to return a complete catalog. | Reload the page. If it persists, tell your admin — the edge function may be returning a truncated response and needs investigation. |
| EditAuthorizationModal used to block a save on a valid code | Old regex was in `errors`, not `warnings`. | Fixed since 2026-08-25. If you still see a hard block, refresh the browser to pick up the latest client. |
