---
id: oversight-cockpit-overview
title: Oversight Cockpit overview
module: oversight-cockpit
audience: [admin]
roles: [practice_admin, super_admin]
type: concept
estimated_minutes: 4
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/analytics
related:
  - oversight-cockpit-financial-performance
tags: [analytics, oversight, KPI, financial, clinical, compliance]
---

# Oversight Cockpit overview

The Oversight Cockpit is the executive analytics surface in Medipyxis. It consolidates operational, financial, and clinical performance data into a single screen for administrators and medical directors.

![Oversight Cockpit hub showing KPI strip and six section tiles](../../assets/oversight/hub.png)

*Oversight Cockpit hub. The KPI strip runs across the top; six analytics sections tile the main canvas.*

## Top KPIs

Four headline metrics appear in the KPI strip at the top of every Oversight Cockpit screen:

| KPI | Description |
|---|---|
| **Avg Utilization** | Average percentage of scheduled appointment slots filled across all providers for the current period. |
| **Referral Conversion** | Percentage of referrals in Referral Intake that progressed from **New Referrals** to **Assigned** status. |
| **Documentation Score** | Percentage of completed visits that passed all Visit Wizard required fields and LCD Navigator™ checks without manual overrides. |
| **YTD Net Revenue** | Year-to-date net collections after payer adjustments and write-offs. |

## Six sections

| Section | What it shows |
|---|---|
| **Patient Location Heat Map** | Geographic density of your patient population. Useful for identifying underserved coverage zones and informing BD route planning. |
| **Referral Network Health** | Referral volume trend by source practice, conversion rates, and average time-in-stage across the Referral Intake kanban. |
| **Clinician Workload Balancer** | Per-clinician visit counts, travel time, documentation completion rate, and open-appointment gaps for the selected period. |
| **Financial Performance** | Revenue, collections, denial rate, and payer mix broken down by period and facility. See [Financial Performance](./financial-performance.md) for a deeper reference. |
| **Documentation & Compliance** | Documentation Score drill-down by clinician and visit type; LCD Navigator™ override rates; unsigned note aging. |
| **Clinical Outcomes Analysis** | Wound healing rates, average wound area reduction per visit, re-hospitalization rates, and goal-attainment metrics. |

## Related

Auto-rendered from `related:` in frontmatter.
