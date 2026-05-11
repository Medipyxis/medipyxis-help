---
id: fleet-calendar-create-appointment
title: Create an appointment in the Fleet Calendar
module: fleet-calendar
audience: [clinician, admin, intake]
roles: [practice_admin, super_admin, intake_coordinator, np, md, nurse]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/ops/fleet-calendar
related:
  - fleet-calendar-overview
  - fleet-calendar-route-optimization
  - referral-intake-overview
tags: [scheduling, appointment, fleet]
---

# Create an appointment in the Fleet Calendar

Book a patient visit and assign it to a provider from the Fleet Calendar's Day, Week, or Month view.

## Before you start

- The patient must have an existing referral in the **Assigned** column of Referral Intake, or be a returning patient already in the system.
- You must have a provider and a time slot in mind.

## Steps

1. **Open the Fleet Calendar.** Click **Fleet Calendar** in the sidebar — the calendar opens in Day view by default.
2. **Click + New Appointment** (top-right) or click any empty cell in a provider's swim lane.
3. **Select the Patient.** Begin typing the patient's name or date of birth in the **Patient** field. Choose the matching record from the dropdown.

   ![Create Appointment form — top half showing Patient, Appointment Type, Provider, Date, and Time Slot fields](../../assets/fleet-calendar/fleet_create_appt_top.png)

   *Top half of the Create Appointment form.*

4. **Choose an Appointment Type.** Select from the **Appointment Type** dropdown (options reflect your org's configured visit types).
5. **Assign a Provider.** Pick from the **Provider** list. Only providers active at your facility appear.
6. **Set Date and Time Slot.** Select the **Date** using the date picker, then choose an available **Time Slot** from the grid.
7. **Set Duration.** Enter the expected visit length in the **Duration** field (in minutes).
8. **Add Notes.** Use the **Notes** field for clinical context visible to the assigned clinician.

   ![Create Appointment form — bottom half showing Duration, Notes, Recurrence, and Route Notes fields](../../assets/fleet-calendar/fleet_create_appt_bottom.png)

   *Bottom half of the Create Appointment form.*

9. **Configure Recurrence (optional).** Toggle **Recurrence** on to repeat the appointment on a schedule (weekly, biweekly, or monthly). Set the end date or occurrence count.
10. **Add Route Notes (optional).** Enter access instructions, parking details, or other logistics in **Route Notes** — these appear on the driver/clinician's route card.
11. **Click Save.** The appointment appears on the calendar with **Scheduled** status.

## Result

The new appointment card displays in the assigned provider's swim lane (Day view) or on the correct date tile (Month view), color-coded as **Scheduled**. Route Notes are immediately visible in the Route panel.

<Tip>
Click the appointment card immediately after saving to attach documents (order scripts, care plans) to the visit record before the clinician departs.
</Tip>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Patient field returns no results | Patient not yet in the system | Create a referral in Referral Intake first, or add the patient manually |
| Save button is disabled | Required field empty | Check **Patient**, **Provider**, **Date**, and **Time Slot** — all are required |
| Provider not in list | Provider not active at this facility | Contact your admin to assign the provider to this facility in HR & Compliance |

## Related

Auto-rendered from `related:` in frontmatter.
