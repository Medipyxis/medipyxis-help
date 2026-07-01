---
id: fleet-calendar-create-appointment
title: Create an appointment in the Fleet Calendar
module: fleet-calendar
audience: [clinician, admin, intake]
roles: [admin, clinical_manager, referral_coordinator, clinician]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-07-01
app_route: /facility/{facility_uuid}/ops/fleet-calendar
related:
  - fleet-calendar-overview
  - fleet-calendar-route-optimization
  - referral-intake-overview
tags: [scheduling, appointment, fleet]
---

# Create an appointment in the Fleet Calendar

Book a patient visit and assign it to a provider from the Fleet Calendar.

## Before you start

- The patient must already exist in the system — either from a referral in Referral Intake or as a returning patient.
- You must have a provider and a time slot in mind.

## Steps

1. **Open the Fleet Calendar.** Click **Fleet Calendar** in the sidebar — the calendar opens in Day view by default.
2. **Click Create Appointment** (top of the calendar) or click an empty slot in a provider's swim lane. The **Create New Appointment** dialog opens.
3. **Select the Patient** (required). Type the patient's name or MRN in the **Patient** field and choose the matching record from the dropdown.

   ![Create New Appointment dialog — top half showing Patient, Visit Type, Place of Service, and Discipline fields](../../assets/fleet-calendar/fleet_create_appt_top.png)

   *Top half of the Create New Appointment dialog.*

4. **Choose a Visit Type.** Select from the **Visit Type** dropdown (options come from your organization's configured visit types).
5. **Set Place of Service and Discipline.** Pick the **Place of Service** (POS code) and the **Discipline** from their dropdowns.
6. **Assign a Provider / Clinician** (required). Choose from the **Provider / Clinician** list — the provider's time zone appears next to the field once selected.
7. **Set Date, Time Slot, and Duration** (all required). Pick the **Date**, choose an available **Time Slot**, and select a **Duration** from the dropdown (15, 30, 45, 60, 90, or 120 minutes).

   ![Create New Appointment dialog — bottom half showing Date, Time Slot, Duration, Notes, Recurrence, and Route Notes fields](../../assets/fleet-calendar/fleet_create_appt_bottom.png)

   *Bottom half of the Create New Appointment dialog.*

8. **Add Notes / Purpose (optional).** Use the **Notes / Purpose** field for clinical context or the reason for the visit, visible to the assigned clinician.
9. **Configure Recurrence (optional).** Set **Recurrence** to Daily, Weekly, Every 2 weeks, Monthly, or Custom to repeat the appointment. When recurrence is on, a **Recurrence End Date** is required.
10. **Add Route Notes (optional).** Enter access instructions, parking details, or other logistics in **Route Notes**. These are saved on the appointment record for the visiting clinician.
11. **Create the appointment.** Submit the form — the appointment appears on the calendar with **Scheduled** status.

## Result

The new appointment card displays in the assigned provider's swim lane (Day view) or on the correct date tile (Month view), color-coded as **Scheduled**. If you set a recurrence, the series is created through the recurrence end date.

<Tip>
Click the appointment card after saving to open its details, where you can attach documents (order scripts, care plans) to the visit record before the clinician departs.
</Tip>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Patient field returns no results | Patient not yet in the system | Create a referral in Referral Intake first, or add the patient manually |
| Cannot submit the form | A required field is empty | Check **Patient**, **Provider / Clinician**, **Date**, **Time Slot**, and **Duration** — all are required (plus **Recurrence End Date** if recurrence is on) |
| Provider not in list | Provider not active at this facility | Contact your admin to assign the provider to this facility in HR & Compliance |

## Related

Auto-rendered from `related:` in frontmatter.
