---
id: fleet-calendar-create-appointment
title: Create an appointment in the Fleet Calendar
module: fleet-calendar
audience: [clinician, admin, intake]
roles: [admin, clinical_manager, referral_coordinator, clinician]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-11-11
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

- The patient must already be in Medipyxis at your facility — for example from a referral in Referral Intake, or as a returning patient.
- You must have a provider and a time slot in mind.

## Steps

1. **Open the Fleet Calendar.** Click **Fleet Calendar** in the sidebar — the calendar opens in Day view.
2. **Click Create Appointment** in the toolbar, or hover over an empty hour in a provider's column and click **+ Create Appointment** (this fills in that provider, the day and the hour). The **Create New Appointment** dialog opens.
3. **Select the Patient** (required). Type the patient's name or MRN in the **Patient** field and choose the matching record from the dropdown.

![Create New Appointment dialog — top half showing Patient, Visit Type, Place of Service, and Discipline fields](../../assets/fleet-calendar/fleet_create_appt_top.png)

_Top half of the Create New Appointment dialog._

1. **Choose a Visit Type.** Select from the **Visit Type** dropdown.
2. **Set Place of Service and Discipline.** Pick the **Place of Service** (POS code) and the **Discipline** from their dropdowns.
3. **Assign a Provider / Clinician** (required). Choose from the **Provider / Clinician** list. The facility's time zone is shown next to the field; the date and time you pick are in that time zone.
4. **Set Date, Time Slot, and Duration.** Pick the **Date**, choose a **Time Slot**, and select a **Duration** (15, 30, 45, 60, 90, or 120 minutes).

![Create New Appointment dialog — bottom half showing Date, Time Slot, Duration, Notes, Recurrence, and Route Notes fields](../../assets/fleet-calendar/fleet_create_appt_bottom.png)

_Bottom half of the Create New Appointment dialog._

1. **Add Notes / Purpose (optional).** Use the **Notes / Purpose** field for the reason for the visit. It is saved as the appointment's purpose and shows in **Appointment Details**.
2. **Configure Recurrence (optional).** Set **Recurrence** to Daily, Weekly, Every 2 weeks, Monthly, or Custom to repeat the appointment. When recurrence is on, a **Recurrence End Date** is required.
3. **Route Notes.** The **Route Notes** box on this dialog is not saved with a new appointment. To record access instructions, parking or gate details, open the appointment after you create it, click **Edit Appointment**, and fill in **Route Notes** there.
4. **Click Create Appointment.** The appointment is created with **Scheduled** status and the calendar moves to the appointment's date.

If the patient already has an appointment that day with the same provider, Medipyxis stops and asks you to edit the existing one. If the patient has an appointment that day with another provider, or the provider already has an overlapping appointment, Medipyxis asks you to confirm before it books.

## Result

The new appointment card appears in the assigned provider's column (Day view), tinted for **Scheduled**. If you set a recurrence, repeat appointments are created up to the recurrence end date, at most 52 in one series.

Click the appointment card after saving to open **Appointment Details**, where you can review it or click **Edit Appointment** to change it.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Patient field returns no results | The patient is not in Medipyxis at this facility | Add the patient first, for example through a referral in Referral Intake |
| Create Appointment is greyed out | No patient or no provider chosen, or recurrence is on without an end date | Choose a **Patient** and a **Provider / Clinician**, and set a **Recurrence End Date** if recurrence is on |
| Provider not in list | The person has no active role at this facility | Ask your administrator to add them to this facility |

## Change or cancel an appointment

After you create an appointment you can change or cancel it from **Appointment Details**.

- **Edit.** Click **Edit Appointment** to change the date, time, duration, purpose, notes or route notes.
- **Cancel.** Click **Cancel Appt** and confirm “Cancel this appointment?”
- **Mark as Rescheduled.** Click **Rescheduled**. Saving it requires you to select the replacement appointment.
- **Move on the Fleet Calendar.** In Day view, drag a visit to another provider's column to reassign it. In Week view with one provider selected, drag a visit to another day; the app confirms with a “Rescheduled to …” message.

The outcome buttons are not shown once an appointment is Canceled, No Show, Rescheduled or Not Seen. A per-row Reschedule action on the appointment management card is not available yet.

## Related

Auto-rendered from `related:` in frontmatter.
