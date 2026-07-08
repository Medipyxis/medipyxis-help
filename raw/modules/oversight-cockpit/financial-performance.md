---
id: oversight-cockpit-financial-performance
title: Financial Performance section reference
module: oversight-cockpit
audience: [admin, billing]
roles: [admin, medical_director, biller]
type: reference
estimated_minutes: 4
last_reviewed: 2026-07-08
app_route: /facility/{facility_uuid}/analytics
related:
  - oversight-cockpit-overview
tags: [analytics, financial, revenue, geography, heat-map]
---

# Financial Performance section reference

Financial performance in the Oversight Cockpit is shown as **Revenue by Zip** — a geographic view of insurance payments received, so you can see where your revenue is concentrated. Select **Revenue by Zip** in the heat map's metric selector.

![Revenue by Zip heat map](../../assets/oversight/financial.png)

*Revenue by Zip. Each ZIP code is drawn as a bubble; size and color scale with dollars received.*

## What the map shows

Each bubble represents one ZIP code, sized and colored (green → red) by the insurance payments received there over the selected period. Hover a bubble to see its detail.

The status strip reports, for the selected window:

| Metric | Meaning |
|---|---|
| **Dollars received** | Total insurance payments posted for the period. |
| **Patients** | Number of patients contributing to that revenue. |
| **Claims** | Number of paid claims represented. |
| **Pending claims** | Claims not yet paid (excluded from the received total). |
| **Ungeocoded** | Claims that couldn't be mapped because their address didn't resolve. |

## Date range

Use the date-range selector to scope the view: **Last 30 days**, **90 days**, **180 days**, **this year**, or **year-to-date**. The map and the status strip both update to the selected window.

<Note>
Revenue by Zip reflects **insurance payments received** (ERA-posted). Pending claims and payments that haven't posted yet are not counted in the received total; they appear in the pending tally. For claim-level revenue-cycle reporting (charges, collections, AR), use the **Reports Center** in Billing — see [AR Aging and Reports Center](../billing/ar-aging.md).
</Note>

## Related

Auto-rendered from `related:` in frontmatter.
