---
id: fleet-calendar-overview
title: Fleet Calendar overview
module: fleet-calendar
audience: [clinician, admin]
roles: [admin, clinical_manager, clinician]
type: concept
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/ops/fleet-calendar
related:
  - fleet-calendar-create-appointment
  - fleet-calendar-my-day
  - referral-intake-overview
tags: [scheduling, routing, fleet, calendar]
---

# Fleet Calendar overview

The Fleet Calendar is the multi-provider scheduling and routing screen. It shows the appointments at your facility, with one column per provider for the chosen day.

![Fleet Calendar in Day view, showing a column for each provider with color-coded appointment cards](../../assets/fleet-calendar/fleet_calendar_day.png)

_Fleet Calendar — Day view. Each column is one provider; appointment cards are tinted by status._

## Views

| View | What it shows |
|---|---|
| **Day** | One column per provider for a single date. Best for daily dispatch. |
| **Week** | Seven days, Sunday to Saturday, with the appointments on each day. With exactly one provider selected in the provider filter, you can drag a visit to another day. |
| **Month** | A tile per day with the number of appointments. Best for spotting busy days. |

Switch views with the **Day / Week / Month** buttons in the toolbar. The calendar opens in Day view. Use the **All Providers** filter in the toolbar to show only some providers; your choice is remembered for the facility.

## Appointment status colors

Each appointment card shows its status and is tinted with that status's color. The status list is the same for every clinic. The common statuses are:

| Status | Meaning |
|---|---|
| **Scheduled** | Booked, not yet started. |
| **Seen** | The patient was seen, but the note has not been started. |
| **Progress Note In Progress** | The provider has opened the Visit Wizard and the note is being written. |
| **Draft Saved** | The note was saved as a draft but not signed. |
| **Under Review** | Waiting on documentation or review after the visit. |
| **Visit Completed** | The note is signed and the visit is complete. |
| **Rescheduled** | Moved to a new appointment. |
| **Canceled** | The appointment was canceled. |
| **No Show** | The patient was a no-show. |
| **Not Seen** | The visit did not happen; a reason is recorded. |

## Who you can book

The **Patient** search when you create an appointment lists the patients at your facility, so a patient from a referral can be booked once they are in Medipyxis. The appointment form does not copy anything from the referral; choose the visit type and provider yourself.

## Start Visit opens the Visit Wizard

Click an appointment to open **Appointment Details**, then click **Start Visit** (it reads **Continue Visit** or **Resume Visit** when a note is already in progress). The [Visit Wizard](/modules/visit-wizard-ehr/overview/) opens for that patient and appointment, whatever the patient's specialty.

The **View Map** button opens the **Route Map**, which starts on today's date; pick another date on the map page.

## Month view

![Fleet Calendar month view with day-tile appointment counts](../../assets/fleet-calendar/fleet_calendar_month.png)

_Month view — click any date tile to open that day in Day view._

## Related

Auto-rendered from `related:` in frontmatter.
