---
id: admin-facility-timezone
title: Set your facility timezone
module: admin
audience: [admin]
roles: [admin, superadmin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-08-28
app_route: /facilities
related:
  - admin-facility-setup
  - fleet-calendar-overview
  - patient-management-overview
tags: [setup, facility, timezone, scheduling]
prerequisites:
  - admin-facility-setup
---

Every facility in Medipyxis has one canonical timezone. That timezone is what the scheduling grid, appointment reminders, chart timestamps, and provider handoff views resolve to. Set it once during facility setup and every downstream surface follows it.

## Before you start

- You have the `admin` or `superadmin` role.
- You know which timezone the facility operates in (the physical clinic location, not the head office).
- If clinicians drive to patients across state lines, decide whether this is a **multi-timezone service area** — see below.

## Steps

1. **Open Admin → Facilities** and click the facility you want to configure. If you are creating a new facility, click **+ Add Facility**.
2. **Find the Timezone dropdown** on the facility form. Pick from the eight supported US timezones:

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

3. **Multi-timezone service area** — Check this box only if the facility routinely books visits in more than one timezone (for example, a mobile team based in El Paso, TX that also visits patients in Las Cruces, NM). When enabled, individual appointments can carry their own timezone override; when disabled, every appointment is booked in the facility timezone. Leave it unchecked for single-location clinics.
4. **Save.** The change takes effect immediately for new appointments. Existing appointments keep the timezone they were booked in.

## How the timezone is used

- **Fleet Calendar and Clinician Calendar** render every appointment slot in the facility timezone. The banner at the top of the booking modal shows which timezone is being used.
- **Appointment reminders** — the send time is calculated against the facility timezone so a patient receives a 24-hour reminder at 9:00 a.m. their local morning, not at 6:00 a.m.
- **Chart timestamps** on the patient chart and progress notes are stored in UTC but displayed in the facility timezone.
- **Signature timestamps** on signed notes show both the UTC time and the local time in the facility timezone.

## Default value

If a facility is created without a timezone (for example through the bulk uploader), Medipyxis defaults to `America/New_York` (Eastern). Change this before booking your first appointment — moving a facility timezone after appointments exist does not retro-adjust already booked slots.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Appointment shows the wrong time to the patient | Facility timezone is Eastern by default but the clinic is Pacific | Update the facility record, then reschedule affected appointments |
| Two clinicians see the same slot at different times | One is in a different timezone client-side | The calendar always renders in facility timezone — refresh the browser |
| DST shifted appointments by an hour | Facility is on `America/Phoenix` or `Pacific/Honolulu` which do not observe DST | Confirm the facility's actual timezone; switch if wrong |
| A visit in another state is booked in the wrong timezone | Multi-timezone service area is off | Enable **Multi-timezone service area**, then edit the appointment and set its per-appointment timezone |

## Related settings

Facility timezone is separate from user profile locale. Individual clinicians do not carry their own scheduling timezone — every clinician working at a facility sees that facility's timezone. This is deliberate: appointment coordinators, providers, and patients all need one shared reference.
