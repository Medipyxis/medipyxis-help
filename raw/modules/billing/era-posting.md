---
id: billing-era-posting
title: Post and reconcile ERAs from Stedi
module: billing
audience: [billing]
roles: [biller, admin, superadmin]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing
related:
  - billing-overview
  - billing-denial-management
  - billing-ar-aging
  - billing-submit-claim
tags: [billing, ERA, payments, reconciliation, Stedi, 835]
---

# Post and reconcile ERAs from Stedi

Review the ERAs (electronic remittance advice, 835) that Stedi delivers, check what posted automatically, and match the payment lines that did not.

## Before you start

- Claims have been submitted through Stedi (status **Submitted**).
- You have the biller, admin, or superadmin role.

## How ERA auto-posting works

When a payer issues an 835 ERA, Stedi delivers it to Medipyxis automatically over a webhook — there is **no sync button to press and no polling step**.

Medipyxis lands the ERA and links each payment line to the claim that was sent with the same patient control number. A line is linked only when exactly one claim matches. Medipyxis posts the matched payments without manual intervention.

Posting puts the payment and adjustments on the claim's A/R ledger. It does not change the claim's status.

ERA lines that match none of our claims show **Unmatched** in the ERA's line detail and wait for a biller to match them on the **ERA / EOB** page.

## Steps — review posted ERAs

- **Open the Payments tab.** Go to `/facility/{facility_uuid}/billing` and click **Payments**. To match lines, use the ERA / EOB page (`/facility/{facility_uuid}/era-eob`), linked from the Billing overview.
- **Review the ERA list.** Each row is one 835 ERA delivered by Stedi. Each row shows EFT / Check #, Payer, Method, Payment Date, Deposit, Claims and Status.
- **Read the Status.** Status — Posted (every line posted, or nothing to post), Partially posted (some lines still need a biller), or Received, not posted (no line done yet).
- **Open an ERA.** Click any ERA row to open the line detail. Check the Claim # of each line (hover to see the number it was sent as and the payer's claim number). The Billed, Paid, Adjustment and Patient Owes amounts match the payer's EOB.
- **Check the adjustments.** Contractual Adjustments (CO codes) and Patient Responsibility (PR codes) amounts are correctly recorded. Adjustment group codes are reported as CO, PR, OA, or PI.
- **Confirm the posting on the claim.** Open the claim and check its ledger: the ERA payment appears with its check/EFT number and amount. The claim's status is not changed by the ERA.

You can download the remittance PDF from any ERA row in the Payments tab with the download button (**Download ERA as PDF**).

## Steps — match unmatched lines

- **Find the unmatched lines.** Open the ERA on the ERA / EOB page and look for lines marked Unmatched in the Match column.
- **Identify the correct claim.** For each unmatched line, note the payer's claim number, patient name, date of service, and procedure code. Search the Claims tab for a claim matching those details.
- **Open the match dialog.** On the ERA / EOB page, open the ERA and click **Match to claim** on the unmatched line. Search by claim number or patient and choose the claim. The dialog, **Match this payment to a claim**, lists any differences in patient, date of service, amount or payer.
- **Match and post.** Tick the confirmation and, if the dialog lists differences, type the claim number. Click **Match and post**. The payment and adjustments post to that claim's ledger in the same step; the claim's status does not change.
- **Document the discrepancy.** If the paid amount differs from the billed charge by more than the expected contractual adjustment, record the variance outside the ERA screen (there is no notes field on an ERA) and flag it for supervisor review.

Never post an ERA payment to the wrong claim in order to clear an unmatched item. If you cannot identify the correct claim, escalate to your supervisor.

If a payer's ERAs keep arriving unmatched, the payment's patient control number matches none of our claims (or more than one). Ask your administrator to check how those claims were submitted.

## Zero-pay and denied lines

Some ERA lines will show a **Paid Amount** of $0.00 with a Claim Adjustment Reason Code (CARC). These represent denials or full contractual write-offs returned via ERA.

The line's Status shows the 835 claim status: Processed as primary (or secondary, tertiary), Denied, Reversal, or Pricing only — no payment. A processed line can still pay $0; read the Paid column.

Denied and $0 lines show "Denied / $0, nothing to post" in the Posting column of the ERA / EOB page. Medipyxis does not create a denial record from them; work the denial from the claim. A fix that adds these denials to the Denials tab is being tracked.

## Result

Every line is posted or has nothing to post, and each ERA's status reads Posted.

## Troubleshooting

- **No ERAs appearing in the tab** — ERA delivery is automatic from Stedi; if none appear, contact your administrator to verify the Stedi webhook configuration.
- **Claim status remains Submitted after the ERA posted** — Expected: ERA posting does not change the claim status. Check the claim's ledger for the payment.
- **Match and post is disabled** — No claim chosen, or not yet confirmed. Pick the claim, tick the confirmation, and type the claim number if the dialog lists differences.
- **Paid amount does not match contract** — Payer underpayment or fee schedule discrepancy. Escalate to your billing supervisor with the ERA's check number and line.

## Related

Auto-rendered from `related:` in frontmatter.
