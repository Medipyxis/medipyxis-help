---
id: oversight-cockpit-overview
title: Oversight Cockpit overview
module: oversight-cockpit
audience: [admin]
roles: [admin, medical_director, clinical_manager]
type: concept
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/analytics
related:
  - oversight-cockpit-financial-performance
tags: [analytics, oversight, heat-map, geography, revenue]
---

# Oversight Cockpit overview

The **Oversight Cockpit** item in the sidebar opens the **Analytics & Tools Cockpit**, a page of tiles for administrators and managers. Access is gated by the **Oversight Cockpit** feature permission.

![Oversight Cockpit heat map](../../assets/oversight/hub.png)

_The Heat Map. A metric selector chooses what the map plots._

## Tiles

| Tile | What it shows |
|---|---|
| **Heat Map** | Your patients, clinicians and billing on a map. See [Heat Map](#heat-map) below. |
| **Operations KPIs** | Patients per day, billing per provider, cancelled and rescheduled visits, referral sources, and CPT / procedure codes, for a date range you choose. Users who can see every facility can switch the page to **All facilities**. |
| **Referral Network Health** | Referral patterns, conversion rates and network performance, for This Week, This Month or This Quarter. |
| **Download data** | Referrals received in a date range, with every visit and wound assessment for those patients, as one Excel file. A Read Me tab defines every column and status. |
| **Clinician Workload Balancer** | Clinician capacity across territories, with **Export Report**. When a facility is selected, this tile currently opens a page-not-found screen. |
| **Platform Admin & Settings** | For administrators only. It shows "Feature coming soon" and has no working settings yet. |

## Heat Map

A **Metric** selector at the top of the Heat Map switches what the map shows. Two views are live today:

| View | What it plots |
|---|---|
| **Patients vs Employees** | Active patients as red clusters, and where clinicians live as blue pins. A status strip shows how many active patients and employees are mapped. Use it to spot coverage gaps and balance territories. |
| **Billed by zip** | Dollars billed on claims sent to payers, grouped by the patient's ZIP code and drawn as bubbles. See [Financial Performance](/modules/oversight-cockpit/financial-performance/). |

Additional metric options appear in the selector marked as coming soon: **Drive-time dead zones** and **Clinician workload**. They cannot be selected yet.

## Date range

The **Billed by zip** view has a date-range selector: Last 30d, Last 90d (the default), Last 180d, Last year, and YTD.

The map depends on map coordinates stored on each record. Patients and employees without coordinates are not plotted; the status strip shows how many were left out.

## Related

Auto-rendered from `related:` in frontmatter.
