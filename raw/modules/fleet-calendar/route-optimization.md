---
id: fleet-calendar-route-optimization
title: Review provider routes and export reports
module: fleet-calendar
audience: [admin, clinician]
roles: [admin, clinical_manager, clinician]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/ops/fleet-calendar
related:
  - fleet-calendar-overview
  - fleet-calendar-create-appointment
  - fleet-calendar-my-day
tags: [routing, fleet, scheduling, map, reports]
---

# Review provider routes and export reports

See each provider's stops for a day laid out on a map, review drive distance and utilization, and export scheduling reports as CSV. Medipyxis presents route information for review — it does not reorder stops for you or send routes to devices.

## Before you start

- Appointments are scheduled for the target date.
- For map and distance figures, each patient needs a map location on record (a patient who lives at a facility uses that facility's location), and each clinician needs a home (base) address on their profile.

## Review a provider's route

1. **Open the Fleet Calendar** in **Day** view and navigate to the target date. The routes panel is shown only in Day view.
2. **Open the routes panel.** Click **Routes** on the right-hand edge of the calendar. The **Route Information** panel opens. For each provider with visits that day, it shows:

| Field | What it shows |
|---|---|
| **Provider** | The clinician the route belongs to, with their title. |
| **Visits** | Number of visits scheduled that day (canceled and no-show visits are not counted). |
| **Distance** | Driving distance in miles, from the clinician's base address through the visits in time order and back. |
| **Est. Drive** | Estimated driving time for that route. |
| **Utilization** | Booked visit minutes as a percentage of an 8-hour day, shown with a bar. |

The route always follows the scheduled times. To change the order, change appointment times on the calendar. If some visits have no map location, the provider's card says how many were left out of the distance. If the clinician has no base address, Distance and Est. Drive show **N/A**.

## View the route on a map

1. **Click View Map.** The **Route Map** opens on today's date; change the date there if needed. It shows each provider's stops as numbered pins and draws the route between them.
2. **Review the geography.** Use the map to sanity-check the day's sequence and spot backtracking. To change the order, adjust the appointment times back on the calendar.

## Export a report

1. **Open Reports & Export.** Click **Reports & Export** above the calendar (click **Show** to expand it).
2. **Choose a report preset** — for example **By provider per month**, **By date of service**, a single status, or **Billing-ready**.
3. **Click Export CSV** to download the report for scheduling review, payroll, or utilization analysis.

## Result

You have reviewed each provider's stops, distance, and utilization for the day on the map, and exported the scheduling data you need as CSV.

The routes panel and Route Map are for review and reporting. Medipyxis does not reorder stops automatically or send a route to a clinician's device — clinicians see their assigned visits on the calendar. See [Manage your day as a clinician](/modules/fleet-calendar/my-day/).

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Stop missing from the map | The patient has no map location on record | Check the patient's address; for a facility resident, check the facility's address |
| Distance / drive time shows N/A | The clinician has no base address on file | An administrator adds the clinician's home address on their profile under HR & Compliance, picking it from the suggestions so the location is saved |
| Map does not load | A content blocker is stopping the map service | Allow content from `api.mapbox.com` |

## Related

Auto-rendered from `related:` in frontmatter.
