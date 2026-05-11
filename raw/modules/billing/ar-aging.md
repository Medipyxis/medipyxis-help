---
id: billing-ar-aging
title: AR Aging and Reports Center reference
module: billing
audience: [billing]
roles: [biller, practice_admin, super_admin]
type: reference
estimated_minutes: 4
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/billing
related:
  - billing-overview
  - billing-work-queue
  - billing-denial-management
  - billing-era-posting
tags: [billing, AR aging, reports, analytics, net collection rate, days in AR]
---

# AR Aging and Reports Center reference

Reference for the five AR Aging buckets used across the Billing module and the eight reports available in the Reports Center.

## AR Aging buckets

Aging buckets measure the number of days elapsed since the date of service for unpaid claims. They appear in the **Work Queue** filter, the **AR Aging** report, and the **Overview** tab KPIs.

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

The Reports Center provides eight pre-built reports for analyzing billing performance. Access it from the **Overview** tab by clicking **Reports Center**, or navigate directly to `/facility/{facility_uuid}/billing/reports`.

![Reports Center showing the eight available report tiles](../../assets/billing/billing_11_reports_center.png)
*The Reports Center landing page. Each tile opens a drill-down report with configurable date range and payer filters.*

### Available reports

| Report | What it measures | Primary use |
|---|---|---|
| **Productivity** | Claims created, approved, and submitted per biller per period | Assess biller throughput and workload balance |
| **AR Aging** | Outstanding balance by aging bucket, broken down by payer and rendering provider | Identify where revenue is stalled in the revenue cycle |
| **Denial Reasons** | Denial volume and dollar amount grouped by CARC code and payer | Spot systemic coding or authorization issues upstream |
| **Payer Mix** | Distribution of submitted charges and payments by payer | Understand revenue concentration and contract performance |
| **Net Collection Rate** | Payments received divided by net charges (charges minus contractual adjustments) | Measure overall revenue cycle effectiveness |
| **Days in AR** | Average number of days from date of service to payment, by payer and period | Benchmark payer responsiveness and internal processing speed |
| **Rendering Provider Performance** | Claims, charges, collections, and denial rate by rendering provider | Support provider-level performance conversations and audits |
| **Procedure Mix** | Distribution of billed CPT/HCPCS codes by volume and charge amount | Identify coding patterns and revenue opportunities by procedure type |

### Report navigation

Each report supports:

- **Date range selector** — filter by custom date range, current month, quarter, or year-to-date.
- **Payer filter** — narrow to one or more payers.
- **Export** — download the report as a CSV or PDF for external distribution.
- **Drill-down** — click any cell or bar to filter to the underlying claim records.

<Note>
Reports reflect data as of the last nightly aggregation run (typically 2:00 AM local time). Payments posted earlier the same day may not appear until the following morning.
</Note>

<Tip>
Run the **Denial Reasons** report after completing a batch of appeals to confirm that your appeal success rate is reflected in the updated denial totals for the period.
</Tip>

## Related

Auto-rendered from `related:` in frontmatter.
