---
id: billing-coding-review-drawer
title: Review coding with the Coding Review drawer
module: billing
audience: [billing]
roles: [biller, admin]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-08-31
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

Coding Review is where you verify that the codes on a claim match the note that supports them, without leaving the Work Queue. It opens as a right-side drawer with the clinical summary on the left, the billing codes on the right, and every override attributed and logged.

## Before you start

- You have the `biller` role, or `admin`.
- A claim exists on the encounter — the drawer is reachable only when the row has a claim.
- You can read the progress note that the drawer surfaces alongside the codes.

---

## Open it

From `/facility/{facility_uuid}/billing/work-queue`, click **Review** on any row that has a claim. The drawer slides in from the right. Use **← / →** at the top to move to the previous or next claim in the current queue without closing the drawer.

The header shows the patient, DOS, payer, rendering clinician, and a timely-filing badge (`Nd to file` or `Nd PAST DEADLINE`). If the visit is not signed, a red banner across the top says so — the claim cannot be submitted until the provider signs.

---

## What the two panels show

The drawer is a two-column layout.

**Left — Clinical Summary.** Read-only cards pulled from the progress note that supports this claim:

- **Wound Assessment** (section 7)
- **Procedures & Supplies** (section 11)
- **Objective Assessment** (section 4)
- **Provider Attestation** (section 17)
- **View Full Note** opens the PDF in a new tab.

Coding Review now resolves the correct note for a claim across three ID namespaces, not just one — so notes that used to render as "no note" now appear. Before the fix, ~87% of claims had no note surface in the drawer even when a signed note existed; after the fix, coverage on the reachable set jumped from 60 to 174 of 461 clinical notes on production.

**Right — Billing Codes.** Editable:

- **Place of Service** (two-digit code, e.g. `12`)
- **Billing Codes** (procedures with modifiers, units, and diagnoses; each procedure line carries its own diagnosis pointers)
- **Expected Total** rolls up automatically from the line charges
- **Claim Status** inline dropdown mirrors the Work Queue value

---

## Validation warnings and errors

Above the two panels, two banners surface issues on the current claim:

| Banner | Meaning | What it does |
|---|---|---|
| **Red — validation errors** | The claim payload is structurally broken (missing subscriber, missing service line, etc.). | Submission is blocked until you fix them. |
| **Yellow — warnings** | Codes look inconsistent with the visit (diagnosis not linked to a line, modifier missing, out-of-range units). | Advisory only; save and submit are still available. |

Fix red items in the drawer or in **Edit in Full Form**. Yellow items are worth resolving but do not block save.

---

## Steps — work one claim

1. Read the **Wound Assessment** and **Procedures & Supplies** on the left. Confirm the encounter matches the codes on the right.
2. Set **Place of Service** if the wrong value is on the claim (`12` for home, `11` for office, etc.).
3. Adjust the code list on the right — add or remove procedures, correct modifiers, correct units, and edit the diagnosis links on each line.
4. Check **Expected Total** — that number is what the payer will see. If it is `$0.00`, the claim will fail to submit; add prices in **Charge Master** first.
5. Set **Claim Status** if it changed (`Ready`, `Hold`, `Flag Clinical`, `Needs Coding`, etc.).
6. Click **Save**, or **Save & Next** (Ctrl+Enter) to move to the next claim in one keystroke.
7. Add a **Biller Note** if the team needs context on what you changed. Notes save separately from codes.

---

## Actions on the toolbar

| Button | What it does |
|---|---|
| **Save** | Persists code, POS, and diagnosis-pointer changes to the claim. Enabled only when you have edited something. |
| **Save & Next** (Ctrl+Enter) | Saves and jumps to the next queue row without closing the drawer. |
| **Flag for Clinical** | Marks the claim's status as **Flag Clinical** and sends the row back to the clinical team for review. |
| **Edit in Full Form** | Opens `/billing/new?editClaimId=…` — the same claim, expanded into the full submit page. Use it for changes the drawer does not cover (subscriber block, insurance sequence, service dates). |
| **Close** | Closes the drawer. Unsaved edits are discarded. |

---

## Coding-fact overrides are soft blocks, and they are recorded

When a code triggers a coding-fact finding — MUE unit ceilings, unusual Place of Service, mutually exclusive procedures — the submitter **does not silently accept it**, and it also **does not refuse outright**. Instead:

1. Submit stops, and a modal names every finding in the biller's words ("CPT 97597 units exceed CMS MUE of 3 per DOS").
2. You either fix the codes and try again, or confirm the override — "Submit it anyway".
3. If you confirm, the submission proceeds AND a row is written to `claim_status_history` with the method (electronic / manual / fax / resubmit), the codes overridden, and who overrode them.

The same check now runs on all four submission paths — **Submit to Stedi**, **Mark as Submitted**, **Fix & Resubmit**, and **Send Fax** — so a biller cannot walk around the electronic gate by faxing the claim off-system. Every override reads back as an attributed decision on the claim, not a silent bypass.

<Note>
CMS MUE values carry known errors that MACs correct out-of-band, non-Medicare payers do not adopt them uniformly, and a Place of Service can be legitimately unusual. That is why coding-fact findings are soft, not hard — an override that is named and logged is worth more than a block that gets walked around off-system.
</Note>

---

## Result

At the end of a Coding Review session, the claim's codes match the note, the Expected Total is a real number, the status is set, and every override is attributed. The row in the Work Queue reflects the new codes on refresh (every 2 minutes, or **Refresh** to force). Any confirmed override reads back on the claim's history — see [Submit a claim](./submit-claim.md).

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Left panel says "No note" | The claim was created manually, or the note lives in a namespace outside the three tiers (rare after the Aug-26 fix). | Open **View Full Note** if the button is enabled; otherwise open the chart. |
| "VISIT NOT SIGNED" banner | The progress note is a draft or in-progress. | The provider must sign the note before the claim can be submitted. Use **Notify** on the Work Queue row. |
| Yellow warning about diagnosis pointers | A procedure line has no diagnosis linked, or points to a diagnosis you removed. | Reassign the pointer on the line — every line must point to at least one active diagnosis. |
| Expected Total is `$0.00` | The line has no price in `facility_charge_master`. | Open **Charge Master** for the facility and add the price. See [Charge Master and the $0 claim guard](./charge-master-and-zero-dollar-guard.md). |
| Save button disabled | You have not edited anything, or the claim row failed to load. | Reopen the drawer, or use **Edit in Full Form**. |
