---
id: fleet-calendar-my-day
title: Manage your day as a clinician
module: fleet-calendar
audience: [clinician]
roles: [np, md, nurse]
type: how-to
estimated_minutes: 3
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/ops/fleet-calendar
related:
  - fleet-calendar-overview
  - fleet-calendar-route-optimization
tags: [fleet, clinician, routing, scheduling]
---

# Manage your day as a clinician

View only your assigned stops for the day, navigate to your next patient, and log delays without leaving the Medipyxis mobile or desktop app.

## Before you start

- Your administrator has sent you a route for today. (If no route appears, contact your scheduler.)
- You are logged in as yourself — My Day filters to your assignments only.

## Steps

### View your stops

1. **Open the Fleet Calendar.** The view defaults to **Day** and automatically filters to your provider lane when you log in as a clinician.
2. **Check the stop list.** Your appointments appear in sequenced order in the Route panel on the right. Each stop card shows the patient name, address, scheduled time, appointment type, and any **Route Notes** left by the scheduler.

### Navigate to your next stop

3. **Tap the stop card** for the upcoming appointment. The stop card expands to show the full patient address and any access notes.
4. **Tap Drive To.** This opens the address in your device's default navigation app (Google Maps, Apple Maps, or Waze depending on OS settings).

### Log a delay

5. **If you are running late**, tap **Log Delay** on the active stop card.
6. **Enter the estimated delay** in minutes and an optional reason (traffic, extended visit, etc.).
7. **Tap Submit.** The scheduler sees a delay flag on the appointment card in their Calendar view and can communicate with subsequent patients as needed.

## Result

Your stop cards update in real time as you mark visits started, completed, or delayed. Completed visits show the **Visit Completed** status badge so the scheduler can confirm progress throughout the day.

<Tip>
Launch the Visit Wizard directly from a stop card by tapping **Start Visit**. Fleet Calendar uses **specialty routing**: wound care patients land in the [Wound Cockpit](../visit-wizard-ehr/wound-cockpit.md) first, primary care patients land in the PCP Cockpit. The patient and appointment data pre-populate so you do not have to search.
</Tip>

<Warning>
Do not mark a visit **Seen** until you are physically on site. The system logs a GPS timestamp at status change for compliance records.
</Warning>

## Related

Auto-rendered from `related:` in frontmatter.
