---
id: patient-management-overview
title: Patient Management — overview
module: patient-management
audience: [clinician, intake, admin]
roles: [clinician, medical_director, referral_coordinator, admin]
type: concept
estimated_minutes: 3
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/all-patients
related:
  - patient-management-zus-tefca
  - referral-intake-overview
  - visit-wizard-ehr-overview
  - fleet-calendar-overview
tags: [patients, records]
---

# Patient Management — overview

Medipyxis has two patient screens. **Patient Management** opens **My Clinical Day**: your schedule for the day, patients who need scheduling, and overdue visits. **All Patients** is the full patient list. A patient appears on All Patients as soon as you click **Create Patient** or **Approve & Create Patient** in Referral Intake — not only after the referral reaches **Assigned**.

Walkthrough: creating a patient and documenting a wound encounter end to end.

## Two routes

- **Patient Management** — opens My Clinical Day, your working schedule for the day. Open it from the **Patient Management** sidebar item.
- **All Patients** — the full directory, opened from the **All Patients** sidebar item.

## Patient cards and status

On All Patients you can filter status to **Active**, **On Hold**, **Discharged**, or **Archived**. New patients from Referral Intake are created as Active.

All Patients shows one card per patient with the patient's name, status (ACTIVE, ON HOLD, DISCHARGED, or ARCHIVED), age, number of wounds, and number of visits. The MRN is not on the card; it appears in the success message after **Create Patient** when it is available.

## Patient chart

Click **View** on a patient's card to open the chart. Use the chart for clinical work after intake; use Referral Intake to add the patient and to move the referral through the board.

## Archive, don't delete

You cannot delete a patient. Use **Archive** on the patient to retire a record. Archived patients are preserved for audit and billing reconciliation. You can restore an archived patient back to Active.
