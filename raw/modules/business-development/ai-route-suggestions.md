---
id: business-development-ai-route-suggestions
title: AI Route Suggestions
module: business-development
audience: [bd]
roles: [bd_rep, bd_manager]
type: concept
estimated_minutes: 3
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/bd-dashboard
related:
  - business-development-overview
  - business-development-log-call-and-visit
  - crm-overview
tags: [business-development, AI, routing, suggestions]
---

# AI Route Suggestions

The **AI Route Suggestions** panel on the Business Development dashboard proposes up to seven practices worth visiting today. Despite the name, it does not use an AI model: it applies a fixed set of rules to referral counts, activity and 30-day ROI.

## How suggestions are generated

Suggestions are worked out in the app when the dashboard loads, and kept for about 5 minutes. They draw from practices that have a BD rep assigned: a BD rep sees their own practices, and an administrator sees all assigned practices or the rep picked in the BD rep filter. The rules pick a mix of up to seven:

| Count | Category | Badge | How it's chosen |
|---|---|---|---|
| 3 | **Declining referrals** | _Declining referrals_ | Practices with fewer referrals this month than last month (worst decline first). |
| 2 | **New practices** | _New practice_ | Practices with no logged activity yet. |
| 2 | **High ROI** | _High ROI_ | Practices with a 30-day ROI over $5,000, highest first. |

If a category doesn't have enough practices to fill its slots, the remaining places are filled by proximity (or by ROI when your location isn't available), badged **Proximity-based**.

### Location

If you allow the browser's location permission, the practices are put in nearest-next order from your current position and each shows a distance. If you deny location, suggestions still work, but they are not reordered by distance and no distance is shown.

## Using the suggestion

1. Open the **AI Route Suggestions** panel on the BD dashboard to see the proposed practices, each with its reason badge.
2. Review each one — the badge explains why it surfaced.
3. Click **Add** to put a practice on **Today's Route**. The button changes to **Added**. There is no single "accept the whole route" step — you add the stops you want.

If no practices are assigned to you, the panel says **No Practices Assigned** and offers **Go to CRM**.

## Limitations

- Suggestions use only **assigned practices** and the activity and referrals recorded in Medipyxis. If practices aren't assigned, or calls and visits aren't logged, the mix will be incomplete.
- At most 50 assigned practices are considered each time.
- Distances are straight-line, not driving distance, and ignore traffic. Use your navigation app for directions.

There is no overnight run: suggestions are recalculated in the app, with only a 5-minute cache. Reloading the page clears that cache, so the mix reflects calls, visits and referrals logged since.

## Related

Auto-rendered from `related:` in frontmatter.
