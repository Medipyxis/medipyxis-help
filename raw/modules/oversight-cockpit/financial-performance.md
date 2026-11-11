---
id: oversight-cockpit-financial-performance
title: Financial Performance section reference
module: oversight-cockpit
audience: [admin, billing]
roles: [admin, medical_director, biller]
type: reference
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/analytics
related:
  - oversight-cockpit-overview
tags: [analytics, financial, revenue, geography, heat-map]
---

# Financial Performance section reference

Financial performance in the Oversight Cockpit is the **Billed by zip** view of the Heat Map: dollars billed on claims sent to payers, grouped by the patient's ZIP code, so you can see where your billing is concentrated. It does not show payments received. To open it, click the **Heat Map** tile in the Oversight Cockpit and select **Billed by zip** in the Metric selector.

![Billed by zip heat map](../../assets/oversight/financial.png)

_Billed by zip. Each ZIP code is drawn as a bubble; size and color scale with dollars billed._

## What the map shows

Each bubble is one ZIP code. Size and color scale with the dollars billed there in the selected period, from small green (low billed zip) to large red (top billed zip). Click a bubble to see its billed total, city, and how many patients and claims it covers.

A claim counts as sent once it has a submission date. Cancelled claims are left out.

The status strip reports, for the selected window:

| Item | Meaning |
|---|---|
| **billed** | Total dollars billed on the sent claims shown on the map. |
| **zips** | Number of ZIP codes on the map. |
| **patients** | Number of patients on those claims. |
| **sent claims** | Number of sent claims shown on the map. |
| **Not sent yet** | Dollars and number of claims not yet sent to a payer. They are not mapped. Shown only when there are some. |
| **claims missing zip/coords** | Sent claims whose patient has no ZIP code or map coordinates, so they could not be placed. Shown only when there are some. |

The strip also says "Payments received are not shown: payment posting isn't connected yet."

## Date range

Use the date-range selector to scope the view by date of service: **Last 30d**, **Last 90d** (the default), **Last 180d**, **Last year**, or **YTD**. The map and the status strip both update to the selected window.

For claim-level reporting (claims, insurance payments, accounts receivable, charges), use the **Reports Center** in Billing — see [AR Aging and Reports Center](/modules/billing/ar-aging/).

## Related

Auto-rendered from `related:` in frontmatter.
