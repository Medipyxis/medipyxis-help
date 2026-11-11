---
id: admin-facility-timezone
title: Set your facility timezone
module: admin
audience: [admin]
roles: [admin, superadmin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facilities
related:
  - admin-facility-setup
  - fleet-calendar-overview
  - patient-management-overview
tags: [setup, facility, timezone, scheduling]
prerequisites:
  - admin-facility-setup
---

Every facility in Medipyxis has one timezone. New appointments are booked in it, and the scheduling screens show times in it. Set it when the facility is set up and check it before you book the first appointment.

## Before you start

- You can open **Facilities** in the sidebar.
- You know which timezone the facility operates in (where the clinic sees patients, not the head office).

## Steps

1. **Open Facilities** in the sidebar, find the facility, and click its **Edit** button. (New locations are added by Medipyxis support; see [Set up an organization with multiple locations](/admin/multi-location-setup/).)
2. **Find the Timezone dropdown** on the facility form. It is required. Pick one of the eight US timezones:

| Value | Label in dropdown |
|---|---|
| `America/New_York` | Eastern (ET) |
| `America/Chicago` | Central (CT) |
| `America/Denver` | Mountain (MT) |
| `America/Phoenix` | Arizona (no DST) |
| `America/Los_Angeles` | Pacific (PT) |
| `America/Anchorage` | Alaska (AKT) |
| `Pacific/Honolulu` | Hawaii (HST) |
| `America/Puerto_Rico` | Atlantic (AST) |

3. **Leave Multi-timezone service area unticked.** The box is saved with the facility, but booking does not use it yet: every appointment is booked in the facility timezone either way.
4. **Click Save Changes.**

## How the timezone is used

- **Booking an appointment** — the time you enter is read in the facility timezone. The badge next to **Time** in the booking window shows which timezone that is.
- **Calendars** — the clinician calendar and appointment lists show times in the facility timezone.
- **Patient appointment reminders** — these go out only at facilities where Medipyxis has switched patient appointment alerts on. The reminder is due about 24 hours before the visit, and messages due between 9 p.m. and 8 a.m. in the facility timezone wait until the morning.
- **Signature timestamps** on signed notes are not in the facility timezone. They print in the timezone of the device that makes the PDF, with the zone abbreviation. See [How the signature timestamp prints on a signed note](/modules/visit-wizard-ehr/signature-timestamp/).

## Default value

A new facility form starts on Eastern and switches to the main timezone of the state you pick, until you choose a timezone yourself. If a facility has no timezone saved, booking falls back to Eastern (`America/New_York`).

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Appointment times are off by a whole number of hours | The facility is on the wrong timezone (for example Eastern for a Pacific clinic) | Fix the facility's timezone, then check the affected appointments |
| Times shifted by an hour at a daylight-saving change | The facility is on Arizona or Hawaii, which do not observe daylight saving time, or should be | Confirm the facility's actual timezone; switch if wrong |
| A visit in another state is booked in the wrong timezone | Booking always uses the facility timezone; per-appointment timezones are not available | Enter the time as it reads in the facility timezone |
