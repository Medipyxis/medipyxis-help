---
id: business-development-ai-route-suggestions
title: AI Route Suggestions
module: business-development
audience: [bd]
roles: [bd_rep, bd_manager]
type: concept
estimated_minutes: 3
last_reviewed: 2026-07-01
app_route: /facility/{facility_uuid}/bd-dashboard
related:
  - business-development-overview
  - business-development-log-call-and-visit
  - crm-overview
tags: [business-development, AI, routing, suggestions]
---

# AI Route Suggestions

The **AI Route Suggestions** widget proposes a set of practices worth visiting, prioritizing accounts most likely to yield referrals given current engagement patterns.

## How suggestions are generated

Suggestions are generated **on demand** in the app (not overnight) and cached for about 5 minutes, so a refresh reflects your latest logged activity almost immediately. The algorithm looks only at practices **assigned to you** and selects a fixed mix of seven:

| Count | Category | Badge | How it's chosen |
|---|---|---|---|
| 3 | **Declining referrals** | *Declining referrals* | Practices whose referral count this month is lower than last month (worst decline first). |
| 2 | **New practices** | *New practice* | Practices with no logged activity yet. |
| 2 | **High ROI** | *High ROI* | Practices with the highest 30-day ROI (relationship maintenance). |

If a category doesn't have enough practices to fill its slots, the remaining stops are filled by proximity (or by ROI when location isn't available), badged **Proximity-based**.

### Location

If you allow the browser's location permission, stops are ordered by a nearest-neighbor route from your current position and each shows a distance. If you deny location, suggestions still work — they're ordered by ROI instead and no distance is shown.

## Using the suggestion

1. The **AI Route Suggestions** widget on the BD dashboard shows the proposed practices, each with its reason badge.
2. Review each one — the badge and referral/ROI figures explain why it surfaced.
3. **Add a practice to Today's Route** to keep it on your list for the day. There is no single "accept the whole route" or lock step — you add the stops you want.

## Limitations

- Suggestions are based on **assigned practices** and **logged activity** only. If practices aren't assigned to you, or calls/visits aren't recorded in Medipyxis, the mix will be incomplete.
- The route uses straight-line/nearest-neighbor ordering, not real-time traffic. Use your navigation app for turn-by-turn directions.
- With location denied, the "closest first" ordering isn't available and stops fall back to ROI order.

<Note>
Because suggestions are recomputed on demand (with a short cache), logging a call or visit and refreshing updates the mix right away — you don't have to wait for an overnight run.
</Note>

## Related

Auto-rendered from `related:` in frontmatter.
