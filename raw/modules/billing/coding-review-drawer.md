---
id: billing-coding-review-drawer
title: Review coding with the Coding Review drawer
module: billing
audience: [billing]
roles: [biller, admin]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing/work-queue
related:
  - billing-work-queue
  - billing-submit-claim
  - billing-overview
  - billing-diagnosis-code-validation
  - billing-charge-master-and-zero-dollar-guard
  - billing-cms-1500-and-837p-fields
  - billing-retired-cpt-guard
  - billing-claim-scrub
  - billing-timely-filing
tags: [billing, coding-review, drawer, soft-block, override, CPT, ICD-10]
---

Coding Review is where you verify that the codes on a claim match the note that supports them, without leaving the Work Queue. It opens as a right-side drawer with the clinical summary on the left and the billing codes on the right.

## Before you start

- You have access to Billing Operations.
- A claim exists on the encounter — the drawer is reachable only when the row has a claim.
- You can read the progress note that the drawer surfaces alongside the codes.

---

## Open it

From `/facility/{facility_uuid}/billing/work-queue`, click **Review** on any row that has a claim. The drawer slides in from the right. Use **← / →** at the top to move to the previous or next claim in the current queue without closing the drawer.

The header shows the patient, DOS, payer, rendering clinician, and a timely-filing badge (`Nd to file` or `Nd PAST DEADLINE`). If the visit is not signed, a red banner across the top says so.

---

## What the two panels show

The drawer is a two-column layout.

**Left — Clinical Summary.** Read-only cards pulled from the progress note that supports this claim:

- **Wound Assessment** (section 7)
- **Procedures & Supplies** (section 11)
- **Objective Assessment** (section 4)
- **Provider Attestation** (section 17)
- **View Full Note** opens the PDF in a new tab.

Coding Review now resolves the correct note for a claim across three ID namespaces, not just one — so notes that used to render as "no note" now appear. Before the fix, the drawer could find only 60 of 461 clinical notes on production; for the other 401 (about 87%) the coder saw no note. After the fix, coverage on the reachable set jumped from 60 to 174 of 461.

**Right — Billing Codes.** Editable:

- **Place of Service** (two-digit code, e.g. `12`)
- **Billing Codes** (procedures with modifiers, units and charges, plus the claim's ICD-10 diagnoses; on save every procedure line points to all listed diagnoses)
- **Expected Total** rolls up automatically from the line charges
- **Claim Status** inline dropdown mirrors the Work Queue value

---

## Validation warnings and errors

Above the two panels, two banners surface issues on the current claim:

| Banner | Meaning | What it does |
|---|---|---|
| **Red — error** | Procedure or supply codes with no ICD-10 diagnosis on the claim (a guaranteed denial). | Fix it before submitting; **Save** stays available. |
| **Yellow — warnings** | An E/M code billed with procedures but no modifier 25, a line with a $0.00 charge, or a skin substitute without the KX modifier. | Advisory only; **Save** stays available. |

Fix red items in the drawer or in **Edit in Full Form**. Yellow items are worth resolving but do not block save.

---

## Steps — work one claim

1. Read the **Wound Assessment** and **Procedures & Supplies** on the left. Confirm the encounter matches the codes on the right.
2. Set **Place of Service** if the wrong value is on the claim (`12` for home, `11` for office, etc.).
3. Adjust the code list on the right — add or remove procedures and diagnoses, correct modifiers and units.
4. Check **Expected Total** — that number is what the payer will see. If it is `$0.00`, the claim will be refused when sent to Stedi. Type the per-unit price into the line's charge box; the drawer does not re-read **Charge Master**.
5. Set **Claim Status** if it changed (`Ready`, `Hold`, `Flag Clinical`, `Needs Coding`, etc.).
6. Click **Save**, or **Save & Next** (Ctrl+Enter) to move to the next claim in one keystroke.
7. Add a **Biller Note** if the team needs context on what you changed. Notes save separately from codes.

---

## Actions on the toolbar

| Button | What it does |
|---|---|
| **Save** | Persists code, diagnosis and POS changes to the claim. Enabled only when you have edited something. |
| **Save & Next** (Ctrl+Enter) | Saves and jumps to the next queue row without closing the drawer. |
| **Flag for Clinical** | Marks the claim's status as **Flag Clinical** and sends the row back to the clinical team for review. |
| **Edit in Full Form** | Opens `/billing/new?editClaimId=…` — the same claim, expanded into the full submit page. Use it for changes the drawer does not cover (subscriber block, insurance sequence, service dates). |
| **Close** | Closes the drawer. Unsaved edits are discarded. |

---

## Coding-fact findings and recorded overrides

Coding-fact findings (MUE 0 codes, place-of-service restrictions, MUE unit caps) never stop **Submit to Stedi**; they are logged as warnings and are not shown to the biller on that path.

On **Mark as Submitted**, **Fix & Resubmit** and **Send Fax**, a confirm dialog lists every finding before you proceed:

1. You either fix the codes and try again, or click **OK** in the confirm dialog (for a fax it asks "Fax it anyway? Your confirmation will be recorded on the claim.").
2. If you confirm, a row is written to the claim's history with the method (manual / resubmit / fax), the codes overridden, and who confirmed.

CMS MUE values carry known errors that MACs correct out-of-band, non-Medicare payers do not adopt them uniformly, and a Place of Service can be legitimately unusual. That is why coding-fact findings are soft, not hard — an override that is named and logged is worth more than a block that gets walked around off-system.

---

## Result

At the end of a Coding Review session, the claim's codes match the note, the Expected Total is a real number, and the status is set. The row in the Work Queue reflects the new codes on refresh (every 2 minutes, or **Refresh** to force). See [Submit a claim](/modules/billing/submit-claim/) for the next step.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Left panel says "No signed note found for this visit." or "No visit data — claim was created manually" | No signed note could be matched to the claim, or the claim was created manually. | Open **View Full Note** if the button is enabled; otherwise open the chart. |
| "VISIT NOT SIGNED" banner | The progress note is a draft or in-progress. | Ask the provider to sign the note. Use **Notify** on the Work Queue row. |
| Red error about a missing diagnosis | Procedure codes are on the claim with no ICD-10 code. | Add the diagnosis; on save every line points to it. |
| Expected Total is `$0.00` | The line has no charge. | Add the price in **Charge Master** for future claims, type it into this line's charge box, then **Save**. See [Charge Master and the $0 claim guard](/modules/billing/charge-master-and-zero-dollar-guard/). |
| Save button disabled | You have not edited anything, or the claim row failed to load. | Reopen the drawer, or use **Edit in Full Form**. |
