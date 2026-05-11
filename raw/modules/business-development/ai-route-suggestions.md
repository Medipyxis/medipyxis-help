---
id: business-development-ai-route-suggestions
title: AI Route Suggestions
module: business-development
audience: [bd]
roles: [bd_rep, bd_manager]
type: concept
estimated_minutes: 3
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/bd-dashboard
related:
  - business-development-overview
  - business-development-log-call-and-visit
  - crm-overview
tags: [business-development, AI, routing, suggestions]
---

# AI Route Suggestions

The **AI Route Suggestions** widget proposes a daily visit sequence for each BD rep, prioritizing practices most likely to yield new referrals given current engagement patterns.

## How suggestions are generated

The model runs nightly and considers three primary signals:

| Signal | What it measures |
|---|---|
| **Last-contact recency** | Days since the last logged call or in-person visit to each practice. Practices that have not been contacted recently receive higher priority. |
| **Referral pipeline volume** | Number of referrals attributed to the practice over the trailing 90 days. High-volume practices with a recent drop in referrals are flagged. |
| **Spend and engagement trend** | Whether BD spend associated with the practice correlates with referral conversion. Practices where spend is rising but conversions are flat are prioritized for a relationship check. |

The model then applies geographic clustering — grouping high-priority practices by proximity — to produce a route sequence that maximizes coverage within a standard working day.

## Using the suggestion

1. The **AI Route Suggestions** widget on the BD dashboard displays the proposed stop list each morning.
2. Review each stop. Tap any row to see the reasoning summary (e.g., "Last visited 21 days ago — referral count down 30%").
3. Tap **Accept Route** to copy the sequence to **Today's Route**, or edit individual stops before accepting.
4. Once accepted, **Today's Route** locks in for tracking purposes.

## Limitations

- Suggestions are based on logged activity only. If calls or visits are not recorded in Medipyxis, the model has incomplete data and may surface lower-priority stops.
- The model does not account for real-time traffic. Use your navigation app for turn-by-turn directions.
- New practices added to the CRM today appear in suggestions starting the following morning.

<Note>
If a high-priority practice consistently appears in suggestions but never converts referrals, flag the account for your BD manager review using the **Next Best Action** escalation option.
</Note>

## Related

Auto-rendered from `related:` in frontmatter.
