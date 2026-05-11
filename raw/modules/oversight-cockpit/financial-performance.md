---
id: oversight-cockpit-financial-performance
title: Financial Performance section reference
module: oversight-cockpit
audience: [admin, billing]
roles: [practice_admin, super_admin, biller]
type: reference
estimated_minutes: 4
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/analytics
related:
  - oversight-cockpit-overview
tags: [analytics, financial, revenue, collections, billing, KPI]
---

# Financial Performance section reference

The **Financial Performance** section of the Oversight Cockpit provides period-over-period revenue and collections analytics without requiring a separate billing export.

![Financial Performance section showing charts and metric cards](../../assets/oversight/financial.png)

*Financial Performance section. Metric cards run across the top; trend charts below.*

## Metric cards

| Metric | Description |
|---|---|
| **Gross Charges** | Sum of billed charges for the selected period before any payer adjustments. |
| **Net Collections** | Dollars actually received (payments posted via ERA) in the period. |
| **Collection Rate** | Net Collections ÷ Adjusted Charges × 100. Measures how effectively claims are paid after contractual write-offs. |
| **Denial Rate** | Percentage of submitted claims returned with a denial status. Includes both initial denials and denied appeals. |
| **Avg Days in AR** | Average number of days from date of service to date of payment across all paid claims in the period. |
| **Write-offs** | Total dollar amount written off (contractual adjustments + bad debt) in the period. |

## Filters and date ranges

Use the filter bar at the top of the section to segment data:

| Filter | Options |
|---|---|
| **Period** | This Month · Last Month · Quarter to Date · Year to Date · Custom Range. |
| **Facility** | Single facility or All Facilities (org-level roll-up). |
| **Payer** | All Payers or a specific payer from your contract list. |
| **Provider** | All Providers or a specific rendering provider. |

Filters are cumulative — apply multiple filters to narrow the view.

## Trend chart

The trend chart plots **Gross Charges** and **Net Collections** as dual time-series lines across the selected period. Hover over any data point to see the exact value and the corresponding date range.

A dashed **Benchmark** line, where configured by your billing administrator, shows the expected collection target for comparison.

## Payer mix breakdown

Below the trend chart, the **Payer Mix** table shows the split of charges by payer category (Medicare, Medicaid, Commercial, Self-Pay) for the selected period. This view complements the full Payer Mix report in the Billing Operations module.

## Exporting data

Click **Export** (top-right of the section) to download the current view as a CSV. The export respects all active filters and includes row-level detail (one row per claim) rather than summary totals.

<Note>
Financial Performance data in the Oversight Cockpit reflects ERA-posted payments. Payments entered manually in Billing Operations may have a 15-minute delay before appearing here.
</Note>

## Related

Auto-rendered from `related:` in frontmatter.
