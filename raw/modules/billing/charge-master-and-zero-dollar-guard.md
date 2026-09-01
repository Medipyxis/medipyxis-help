---
id: billing-charge-master-and-zero-dollar-guard
title: Charge Master and the $0.00 claim guard
module: billing
audience: [billing, admin]
roles: [biller, admin]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-08-31
app_route: /facility/{facility_uuid}/billing/charge-master
related:
  - billing-overview
  - billing-work-queue
  - billing-submit-claim
  - billing-coding-review-drawer
tags: [billing, charge-master, pricing, zero-dollar, 837P, Stedi, CPT, HCPCS]
---

The Charge Master is where you set the price for every procedure your facility bills. Medipyxis will not let a claim leave the system for `$0.00` — not one line at $0, not a claim total at $0, no escape hatch. This page shows how to set prices, how the pre-flight guard reads them, and what the biller sees when a price is missing.

## Before you start

- You have the `biller` or `admin` role.
- Your facility is active and you know which CPT/HCPCS codes you bill.
- If you use different rates for insurance vs. self-pay, you have both lists ready.

---

## Open the Charge Master

Navigate to `/facility/{facility_uuid}/billing/charge-master`. The page opens with three tabs:

| Tab | What it holds |
|---|---|
| **Insurance Charges** | The per-unit price used when a claim is priced against an insurance payer. |
| **Self-Pay Charges** | The per-unit price used when the patient is self-pay. |
| **Templates** | Superbill templates (fixed CPT/HCPCS/ICD-10 code lists) you attach to visit types. |

Each rate is per-unit, per-code, per-facility. Add a code, set the amount, save.

---

## How pricing flows into a claim

When a claim is drafted from a visit, `priceClaimLine` reads `facility_charge_master` for each procedure line:

1. It matches the row by facility + CPT/HCPCS + insurance vs. self-pay context.
2. It multiplies the per-unit rate by the units on the line.
3. It writes the resulting charge onto the 837P service line before submission.

If a line has no row in the Charge Master, the price is `$0.00` — and the pre-flight guard rejects the whole claim.

---

## The $0.00 guard

Two rules stop a `$0.00` claim from ever reaching a payer, and both are named requirements from April Alfaro (2026-08-27):

**1. No line may have a `$0.00` charge.** Every service line on the 837P must carry a positive dollar amount. If any line is `$0.00`, submission is refused with a message that names the code:

> Claim cannot be submitted — No price on file for CPT 97597 at At Home Wound Care, PLLC — add it in Charge Master.

**2. The claim total must exceed `$0.00`.** Even if every line individually passes some future relaxation of rule 1, the aggregate total is asserted separately:

> Claim total is $0.00 — nothing is being billed. Add charges in Charge Master.

Both rules run **before** the claim reaches Stedi. Nothing at Stedi ever sees a $0 line. There is no "legitimate $0 line" escape hatch — a claim asking a payer for $0 is always a defect, and it is one this system exists to catch.

<Note>
This guard exists because on 2026-08-27, right before go-live, the biller-facing pricing path was reading the wrong dollar-amount key on the service line: the 837P builder wrote `charge_amount`, the reader looked for `lineItemChargeAmount`, and every claim went through with $0 lines. The whole prod set — 1,134 claims — priced at $0. The guard is now permanent, on both the electronic path AND the manual paths (Mark as Submitted, Fix & Resubmit, Send Fax).
</Note>

---

## The rejection message, made readable

Until 2026-08-27, the biller-facing rejection was mangled by the submit UI — the same message was printed twice, wrapped in JSON brackets, and titled "Stedi Submission Failed" even though the rejection was pre-flight (Stedi never saw it). It read:

> Stedi Submission Failed — Claim is missing required field(s): No price on file for CPT 97597 at At Home Wound Care, PLLC — add it in Charge Master.: ["No price on file for CPT 97597 at At Home Wound Care, PLLC — add it in Charge Master."]

That was wrong three ways: duplicated message body, wrong prefix ("missing required field(s)" sent billers hunting for a blank box instead of Charge Master), and wrong blame (a pre-flight rejection never reached Stedi). It now reads:

> Claim Not Submitted — Claim cannot be submitted — No price on file for CPT 97597 at At Home Wound Care, PLLC — add it in Charge Master.

Multiple missing codes are listed one per line, and the toast stays visible for 12 seconds because a multi-line list takes longer to read.

---

## Steps — add a missing price

1. From the rejection toast, note the CPT/HCPCS code.
2. Open **Charge Master** for the facility → **Insurance Charges** (or **Self-Pay Charges** if the patient is self-pay).
3. Click **Add code** → enter the CPT/HCPCS → enter the per-unit dollar amount → **Save**.
4. Return to the claim in **New Claim** or the **Coding Review** drawer.
5. Refresh the claim (or click **Save & Next** and come back). The price now hydrates onto the line, and the Expected Total is a real number.
6. Submit.

---

## Templates

The **Templates** tab is not a pricing surface — it holds superbill templates: fixed lists of CPT/HCPCS/ICD-10 codes you attach to visit types so a clinician sees the right code menu on the wizard. Templates carry no dollar amounts; those still come from **Insurance Charges** and **Self-Pay Charges**.

---

## Result

Every claim leaving the facility has a positive charge on every line and a positive total. Any missing price surfaces immediately, in the biller's words, on the exact line that lacks a rate. When a biller adds the price, the same claim goes through on the next attempt with no code changes needed.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| "No price on file for CPT XXXXX" on every claim for a new facility | The facility was set up without a Charge Master. | Add rates in **Insurance Charges** and **Self-Pay Charges**. |
| Rate is set but the claim still rejects with $0.00 | The rate exists in the wrong tab (self-pay vs. insurance) for this patient. | Confirm the patient's payment method on the claim; add the rate in the matching tab. |
| Rate is set correctly but the line still shows $0.00 in the drawer | The claim was drafted before you added the rate. | Re-open the claim; the Expected Total re-hydrates from Charge Master on load. Or open **Edit in Full Form** and save once. |
| Toast title says "Stedi Submission Failed" | You are on an older client build. | Refresh the page to pick up the corrected title ("Claim Not Submitted"). |
| A biller wants to submit a legitimately $0 line (e.g. no-charge follow-up) | There is no escape hatch — by design. | Do not attempt to bypass the guard. Book the encounter as non-billable in the Work Queue instead, or contact the payer directly. |
