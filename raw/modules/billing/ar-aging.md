---
id: billing-ar-aging
title: AR Aging and Reports Center reference
module: billing
audience: [billing]
roles: [biller, admin]
type: reference
estimated_minutes: 4
last_reviewed: 2026-07-01
app_route: /facility/{facility_uuid}/billing
related:
  - billing-overview
  - billing-work-queue
  - billing-denial-management
  - billing-era-posting
tags: [billing, AR aging, reports, analytics, net collection rate, days in AR]
---

# AR Aging and Reports Center reference

Reference for the AR aging buckets used across the Billing module and the reports available in the Reports Center.

## AR Aging buckets

Aging buckets measure the number of days elapsed since the date of service for unpaid claims. They appear in the **Account Receivable** report and related AR views. (Note: the [Work Queue](./work-queue.md)'s **Claim Age** filter uses its own buckets measured from the claim's submission date — Not Submitted, 0–30, 31–60, 61–90, and 90+.)

| Aging Bucket | Days Since Date of Service | Typical Priority |
|---|---|---|
| **0–30** | 0 to 30 days | Monitor — within standard payer processing time |
| **31–60** | 31 to 60 days | Review — follow up if no ERA received |
| **61–90** | 61 to 90 days | Escalate — contact payer; most contracts have 90-day timely-filing limits |
| **91–120** | 91 to 120 days | High priority — approaching or past many timely-filing limits |
| **120+** | 121+ days | Critical — verify timely-filing status before submitting; write-off review may be required |

![AR Aging view showing outstanding balances distributed across aging buckets by payer](../../assets/billing/billing_10_ar_aging.png)
*The AR Aging view. Each column represents one aging bucket; rows break down the outstanding balance by payer. Use this view to identify which payers have the highest concentration of aged balances.*

<Compliance>
Medicare requires claims to be filed within one year (365 days) of the date of service. State Medicaid programs and commercial payers often have shorter timely-filing windows — commonly 90 to 180 days. Any claim in the **120+** bucket must be reviewed against the applicable payer contract before submission.
</Compliance>

## Reports Center

The Reports Center generates operational billing reports. Navigate to `/facility/{facility_uuid}/billing/reports-center`.

![Reports Center — choose a report type, set filters, then run and export](../../assets/billing/billing_11_reports_center.png)
*The Reports Center. Choose a report type, set filters, run the report to preview it, then export to CSV.*

### Available report types

| Report | What it covers |
|---|---|
| **Patient Visit Reports** | Visits/encounters over a period. |
| **Claims Reports** | Claims and their status across the period. |
| **Insurance Payment Reports** | Payments received from payers. |
| **Patient Payment Reports** | Payments received from patients. |
| **Account Receivable Reports** | Outstanding balances (AR) by payer/period. |
| **Patient List Reports** | Patient roster for the selected criteria. |
| **Patient Balance Reports** | Outstanding patient balances. |
| **Charges Reports** | Charges billed over the period. |

### Running a report

1. **Choose a report type** from the selector.
2. **Set the filters** (date range, payer, and other criteria in the filters panel).
3. **Click Run report.** The results preview in a table below.
4. **Export to CSV** to download the report for external distribution.

Reports run **on demand** against current data — there is no overnight batch, so a report reflects the data at the moment you run it.

## Related

Auto-rendered from `related:` in frontmatter.
