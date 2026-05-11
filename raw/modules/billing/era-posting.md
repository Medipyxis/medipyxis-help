---
id: billing-era-posting
title: Post and reconcile ERAs from claim.md
module: billing
audience: [billing]
roles: [biller, practice_admin, super_admin]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/billing
related:
  - billing-overview
  - billing-denial-management
  - billing-ar-aging
  - billing-submit-claim
tags: [billing, ERA, payments, reconciliation, claim.md, 835]
---

# Post and reconcile ERAs from claim.md

Review inbound Electronic Remittance Advice (ERA) files received from claim.md, confirm auto-posting results, and reconcile unmatched payments to their corresponding claims.

## Before you start

- Claims have been submitted through claim.md (status **Submitted**).
- Your facility's claim.md credentials are configured under **Superbill Config**.
- You have the `biller`, `practice_admin`, or `super_admin` role.

## How ERA auto-posting works

When claim.md receives an 835 ERA file from a payer, it forwards it to Medipyxis automatically. Medipyxis matches each ERA payment line to an existing claim using the claim number and date of service, then posts the payment without manual intervention. Successfully matched and posted ERAs advance the corresponding claim to **Paid** status.

ERA records that cannot be automatically matched — for example, because the payer's claim number differs from the Medipyxis claim number — appear in the **Payments (ERA)** tab with a status of **Unmatched** and require manual reconciliation.

## Steps — review auto-posted ERAs

1. **Open the Payments (ERA) tab.** Navigate to `/facility/{facility_uuid}/billing` and click **Payments (ERA)**.

   ![Payments (ERA) tab showing a list of ERA batches with match status](../../assets/billing/billing_04_payments_era_tab.png)
   *The **Payments (ERA)** tab. Each row represents one 835 ERA batch received from claim.md. The **Match Status** column indicates whether lines were auto-posted or require attention.*

2. **Review the ERA batch list.** Each row shows:
   - **Payer** — the insurance carrier that issued the ERA.
   - **ERA Date** — the date claim.md received the 835 file.
   - **Total Paid** — the sum of all payment lines in the batch.
   - **Matched Lines** — the number of lines auto-posted to claims.
   - **Unmatched Lines** — the number of lines requiring manual reconciliation.
   - **Status** — **Posted** (all lines matched), **Partial** (some lines unmatched), or **Unmatched** (no lines matched).

3. **Open a batch to verify auto-posting.** Click any ERA row to expand the line-level detail. For each line, confirm:
   - The **Claim #** links to the correct claim.
   - The **Allowed Amount** and **Paid Amount** match the payer's EOB.
   - **Contractual Adjustments** (CO codes) and **Patient Responsibility** amounts are correctly recorded.

4. **Confirm posted claims.** In the **Claims** tab, verify that claims referenced by the ERA now show status **Paid**. The claim detail should display the payment date, check/EFT number, and paid amount from the ERA.

## Steps — manually reconcile unmatched ERAs

5. **Filter to Unmatched lines.** Within the ERA batch detail, select the **Unmatched** tab or filter by **Match Status: Unmatched**.

6. **Identify the correct claim.** For each unmatched line, note the payer's claim number, patient name, date of service, and procedure code. Search the **Claims** tab for a claim matching those details.

7. **Link the ERA line to the claim.** In the unmatched ERA line row, click **Match Manually**. Use the search dialog to find and select the correct claim.

8. **Post the payment.** After matching, click **Post Payment**. The system applies the allowed amount, adjustments, and patient responsibility to the selected claim and advances it to **Paid**.

9. **Document the discrepancy.** If the ERA paid amount differs from the billed charge by more than the expected contractual adjustment, add a note in the **Reconciliation Notes** field explaining the variance. Flag for supervisor review if the underpayment appears to be a payer error.

<Note>
ERA files from claim.md are retained in the **Payments (ERA)** tab for 7 years to support audit and reprocessing needs. You can download the raw 835 file from any ERA batch row using the **Download 835** action.
</Note>

## Steps — address zero-pay and denial ERAs

10. **Identify zero-pay lines.** Some ERA lines will show a **Paid Amount** of $0.00 with a Claim Adjustment Reason Code (CARC). These represent denials or full contractual write-offs returned via ERA.

11. **Create a denial record.** For zero-pay lines with a denial CARC, click **Create Denial** in the ERA line row. Medipyxis creates a linked denial record in the **Denials** tab pre-populated with the denial reason code. Proceed with the appeal workflow as described in [Denial Management](./denial-management.md).

## Result

All ERA lines are either **Posted** to a matched claim or linked to a denial record. The **Payments (ERA)** tab shows no rows in **Partial** or **Unmatched** status. Posted claims reflect accurate **Paid Amount** and **Contractual Adjustment** values for AR reporting.

<Warning>
Never post an ERA payment to the wrong claim in order to clear an unmatched item. Misposting creates incorrect AR balances and may trigger compliance issues. If you cannot identify the correct claim, escalate to your supervisor.
</Warning>

<Tip>
If the same payer consistently produces unmatched ERAs, the root cause is often a payer-assigned claim number that differs from the Medipyxis claim number. Ask your administrator to review the claim.md payer configuration for that carrier.
</Tip>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| No ERAs appearing in the tab | claim.md credentials not configured or ERA delivery not enabled | Contact your administrator to verify credentials under **Superbill Config** |
| Claim status remains **Submitted** after ERA posted | ERA batch not yet processed | Allow up to 24 hours; check claim.md portal for ERA delivery confirmation |
| **Post Payment** button disabled on manual match | Claim is in **Pending** or **Needs Info** status | Resolve the claim's outstanding issues before posting the ERA |
| Paid amount does not match contract | Payer underpayment or fee schedule discrepancy | Document in **Reconciliation Notes** and escalate to your billing supervisor |

## Related

Auto-rendered from `related:` in frontmatter.
