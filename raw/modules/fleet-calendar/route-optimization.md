---
id: fleet-calendar-route-optimization
title: Review provider routes and export reports
module: fleet-calendar
audience: [admin, clinician]
roles: [admin, clinical_manager, clinician]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-07-08
app_route: /facility/{facility_uuid}/ops/fleet-calendar
related:
  - fleet-calendar-overview
  - fleet-calendar-create-appointment
  - fleet-calendar-my-day
tags: [routing, fleet, scheduling, map, reports]
---

# Review provider routes and export reports

See each provider's stops for a day laid out on a map, review drive distance and utilization, and export scheduling reports as CSV. Medipyxis presents route information for review — it does not auto-sequence stops or push routes to devices.

## Before you start

- Appointments are scheduled for the target date.
- For map and distance figures, appointments need a geocodable patient address on record.

## Review a provider's route

1. **Open the Fleet Calendar** in **Day** view and navigate to the target date.
2. **Open the Routes panel.** Click **Routes** (top-right panel toggle). For each provider with visits that day, the panel shows:

   | Field | What it shows |
   |---|---|
   | **Provider** | The clinician the route belongs to. |
   | **Visits** | Number of stops scheduled that day. |
   | **Distance** | Total driving distance across the stops, in miles. |
   | **Est. drive time** | Estimated driving time for the route. |
   | **Utilization** | Percentage of the working day used, shown as a bar. |

   Stops are listed in **scheduled-time order**. The panel is read-only — reorder a day by changing individual appointment times on the calendar.

## View the route on a map

3. **Click View Map.** The **Fleet Map** opens, showing each provider's stops as numbered pins in scheduled order with the connecting route drawn between them.
4. **Review the geography.** Use the map to sanity-check the day's sequence and spot backtracking. To change the order, adjust the appointment times back on the calendar.

## Export a report

5. **Open the Reports panel** from the Fleet Calendar.
6. **Choose a report preset** — for example, by provider per month or by date of service.
7. **Export to CSV.** Click the export action to download the report for scheduling review, payroll, or utilization analysis.

## Result

You have reviewed each provider's stops, distance, and utilization for the day on the map, and exported the scheduling data you need as CSV.

<Note>
The Routes panel and Fleet Map are for review and reporting. Medipyxis does not currently re-optimize stop order automatically or send a route to a clinician's device — clinicians see their assigned visits on their own calendar. See [Manage your day as a clinician](./my-day.md).
</Note>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Stop missing from the map | Appointment address not geocoded | Open the appointment, verify the patient address, and save |
| Distance / drive time blank | One or more stops lack a geocodable address | Add complete addresses to the affected appointments |
| Map does not load | Browser pop-up or content blocker | Allow content from your Medipyxis domain |

## Related

Auto-rendered from `related:` in frontmatter.
