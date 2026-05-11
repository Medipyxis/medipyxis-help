---
id: fleet-calendar-route-optimization
title: Optimize and send a provider route
module: fleet-calendar
audience: [admin, clinician]
roles: [practice_admin, super_admin, np, md, nurse]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/ops/fleet-calendar
related:
  - fleet-calendar-overview
  - fleet-calendar-create-appointment
  - fleet-calendar-my-day
tags: [routing, fleet, scheduling, map]
---

# Optimize and send a provider route

Arrange a provider's stops into the most efficient order for a given day, preview the route on a map, and push the final sequence to the clinician's device.

## Before you start

- At least two appointments must be scheduled for the provider on the target date.
- All appointments must have a patient address on record — the system cannot route stops without a geocodable address.

## Steps

1. **Open the Fleet Calendar** in **Day** view and navigate to the target date.
2. **Select a provider's swim lane.** Click the provider's name on the left rail to focus that lane, or leave all lanes visible to manage multiple providers.
3. **Open the Route panel.** Click **Route** (top-right panel toggle). A ranked stop list appears, one row per appointment, ordered by current scheduled time.
4. **Reorder stops.** Drag and drop stop rows within the Route panel to adjust the sequence. The estimated total drive time recalculates automatically after each move.
5. **View on map.** Click **View Map** to open the full-screen map overlay showing the route polyline, stop pins numbered in sequence, and estimated segment durations.
6. **Confirm the route.** Close the map overlay and verify the stop list is in the intended order.
7. **Send route to driver/clinician.** Click **Send Route** at the bottom of the Route panel. The clinician receives a push notification with the ordered stop list and turn-by-turn navigation link.

## Result

The Route panel displays a **Sent** indicator with a timestamp. The clinician's **My Day** view updates to reflect the confirmed sequence.

<Note>
The Route panel performs distance-based ordering, not turn-by-turn optimization. For complex multi-city routes, review the map before sending to confirm the order makes geographic sense.
</Note>

<Warning>
Reordering stops does not change appointment times on the calendar. If you need to adjust scheduled times, update each appointment individually after finalizing the route order.
</Warning>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Stop missing from Route panel | Appointment address not geocoded | Open the appointment, verify the patient address, and save |
| Send Route button is greyed out | No stops in Route panel | Confirm at least two appointments exist for this provider and date |
| Map does not load | Browser pop-up blocker | Allow pop-ups from your Medipyxis domain |

## Related

Auto-rendered from `related:` in frontmatter.
