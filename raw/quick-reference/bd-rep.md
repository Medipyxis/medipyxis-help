---
id: qr-bd-rep
title: BD rep cheat sheet
module: getting-started
audience: [bd]
roles: [bd_rep]
type: reference
estimated_minutes: 2
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/bd-dashboard
tags: [quick-reference, bd, roi]
---

# BD rep cheat sheet

Your loop: cover your practices, log every touch, let Medipyxis attribute ROI back to you.

## What gets tracked automatically

- **Referrals received** from every practice you own.
- **Visits completed** and **revenue** tied to those referrals.
- **Your activities** (visits, calls, emails, CME).
- **Cost to serve** (activity time × your loaded cost).

## What you must do manually

| Task | Cadence | Where |
|---|---|---|
| Log every practice touch | Same day | **CRM → practice → Activity → Log** |
| Update practice contact info | As needed | **CRM → practice → Overview → Edit** |
| Record new contacts | When met | **CRM → practice → Contacts → + Add** |
| Flag at-risk practices | Weekly | Activity → pick type **At risk** |

## KPIs to watch

| KPI | Where | Target |
|---|---|---|
| Referrals this month | **BD Dashboard** | ↑ vs last month |
| Conversion rate | **BD Dashboard** | > 80% |
| Cost per converted referral | **BD Dashboard** | < $150 |
| Inactive practices | **BD → Practices → filter: no activity 30d** | Investigate |

## Shortcuts

| Task | Shortcut |
|---|---|
| Log an activity quickly | Practice detail → `L` |
| Find a practice | `⌘K` + practice name |
| Open today's plan | `G` then `T` |

## Round-robin referrals

When a new practice sends a referral before you've claimed it, the round-robin assigns it based on your territory. Check the **Unattributed** queue weekly on **BD → Dashboard** to claim any that routed incorrectly.

## How ROI is calculated

```
Net ROI per practice =
  (sum of paid claims for visits originated by this practice)
  − (sum of your activity cost for this practice)
  − (sum of rep spend budget allocated to this practice)
```

Time horizon is rolling 12 months. Ask your manager to adjust loaded cost rates in **Admin → BD Settings**.
