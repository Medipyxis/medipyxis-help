---
id: billing-charge-master-and-zero-dollar-guard
title: Charge Master and the $0.00 claim guard
module: billing
audience: [billing, admin]
roles: [biller, admin]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing/charge-master
related:
  - billing-overview
  - billing-work-queue
  - billing-submit-claim
  - billing-coding-review-drawer
tags: [billing, charge-master, pricing, zero-dollar, 837P, Stedi, CPT, HCPCS]
---

The Charge Master is where you set the price for every procedure your facility bills. Medipyxis will not send a claim to Stedi for `$0.00` — not one line at $0, not a claim total at $0, no escape hatch. This page shows how to set prices, how the check before sending reads them, and what the biller sees when a price is missing.

## Before you start

- You have access to Billing Operations.
- Your facility is active and you know which CPT/HCPCS codes you bill.
- If you use different rates for insurance vs. self-pay, you have both lists ready.

---

## Open the Charge Master

Navigate to `/facility/{facility_uuid}/billing/charge-master`. The page opens with three tabs:

| Tab | What it holds |
|---|---|
| **Insurance Charges** | The per-unit price used when a claim is priced against an insurance payer. |
| **Self-Pay Charges** | The per-unit price used when the patient is self-pay. |
| **Templates** | Named superbill templates that group codes from the facility's superbill code list. |

Each rate is per-unit, per-code, per-facility.

---

## How pricing flows into a claim

When a claim is drafted from a visit, Medipyxis looks up the Charge Master price for each procedure line:

1. It matches the row by facility + CPT/HCPCS + insurance vs. self-pay context.
2. It multiplies the per-unit rate by the units on the line.
3. It writes the resulting charge onto the 837P service line before submission.

If a line has no row in the Charge Master, the price is `$0.00` — and the check before sending rejects the whole claim.

---

## The $0.00 guard

Two rules stop a `$0.00` claim from being sent to Stedi:

**1. No line may have a `$0.00` charge.** Every service line on the 837P must carry a positive dollar amount. If any line is `$0.00`, submission is refused with a message that names the code:

> Claim cannot be submitted — No price on file for CPT 97597 at [facility] — add it in Charge Master.

**2. The claim total must exceed `$0.00`.** Even if every line individually passes some future relaxation of rule 1, the aggregate total is asserted separately:

> Claim total is $0.00 — nothing is being billed. Add charges in Charge Master.

Both rules run **before** the claim reaches Stedi. Nothing at Stedi ever sees a $0 line. There is no "legitimate $0 line" escape hatch — a claim asking a payer for $0 is always a defect, and it is one this system exists to catch.

This guard exists because, checked on 2026-08-26 just before go-live, all 85 service lines on production carried no charge in a form the claim builder could read, so every line defaulted to $0.

The guard runs on every electronic submission to Stedi, including **Submit to Stedi** and a submission a biller makes on the practice's behalf. The manual paths — **Mark as Submitted**, **Fix & Resubmit** and **Send Fax** — do not run the $0.00 guard today. They run the coding check only (unit limits and place of service), so a claim with a $0 line can still be faxed or marked submitted. A fix is being tracked.

Until then, confirm every line has a price before you fax a claim or mark it submitted.

---

## The rejection message, made readable

Until 2026-08-27, the biller-facing rejection was mangled by the submit UI — the same message was printed twice, wrapped in JSON brackets, and titled "Stedi Submission Failed" even though the rejection was pre-flight (Stedi never saw it). It read:

> Stedi Submission Failed — Claim is missing required field(s): No price on file for CPT 97597 at [facility] — add it in Charge Master.: ["No price on file for CPT 97597 at [facility] — add it in Charge Master."]

That was wrong three ways: duplicated message body, wrong prefix ("missing required field(s)" sent billers hunting for a blank box instead of Charge Master), and wrong blame (a pre-flight rejection never reached Stedi). It now reads:

> Claim Not Submitted — No price on file for CPT 97597 at [facility] — add it in Charge Master.

Multiple missing codes are listed one per line, and the toast stays visible for 12 seconds because a multi-line list takes longer to read.

---

## Steps — add a missing price

1. From the rejection toast, note the CPT/HCPCS code.
2. Open **Charge Master** for the facility → **Insurance Charges** (or **Self-Pay Charges** if the patient has no active insurance on file).
3. Click **Add Charge** → enter the CPT/HCPCS code → enter the per-unit dollar amount → **Create**.
4. Return to the claim in **New Claim** and select the visit again: lines with no charge are priced from the Charge Master.
5. If you work the claim in the **Coding Review** drawer instead, note that the drawer shows the charge saved on the claim and does not re-read the Charge Master. Type the per-unit price into the line's charge box and click **Save**.
6. Submit.

---

## Templates

The **Templates** tab groups the facility's superbill codes into named templates for the billing code picker. A superbill code can carry a default charge that the picker offers; automatic claim pricing comes from **Insurance Charges** and **Self-Pay Charges**.

---

## Result

Every claim sent to Stedi has a positive charge on every line and a positive total. Any missing price surfaces before the claim is sent, in the biller's words, naming each code that lacks a rate. After the biller adds the price and puts it on the line (select the visit again in New Claim, or type it into the line), the next attempt goes through.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| "No price on file for CPT XXXXX" on every claim for a new facility | The facility was set up without a Charge Master. | Add rates in **Insurance Charges** and **Self-Pay Charges**. |
| Rate is set but the claim still rejects with $0.00 | The rate is in the other tab. A patient with active insurance on file is priced from **Insurance Charges**; a patient with none is priced from **Self-Pay Charges**. | Add the rate in the matching tab. |
| Rate is set correctly but the line still shows $0.00 in the drawer | The claim was drafted before you added the rate, and the drawer shows the charge saved on the claim. | Type the price into the line and click **Save**, or open **Edit in Full Form** and select the visit again. |
| Toast title says "Stedi Submission Failed" | You are on an older client build. | Refresh the page to pick up the corrected title ("Claim Not Submitted"). |
| A biller wants to submit a legitimately $0 line (e.g. no-charge follow-up) | There is no escape hatch — by design. | Do not bill it. Set the claim to **Hold**, **Write-Off** or **Void** in the Work Queue, or contact the payer. |
