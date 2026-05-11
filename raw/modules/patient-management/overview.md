---
id: patient-management-overview
title: Patient Management — overview
module: patient-management
audience: [clinician, intake, admin]
roles: [nurse, np, md, intake_coordinator, practice_admin]
type: concept
estimated_minutes: 3
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/all-patients
related:
  - referral-intake-overview
  - visit-wizard-overview
  - fleet-calendar-overview
tags: [patients, records]
---

# Patient Management — overview

Patient Management is your single-pane roster for every active and archived patient at the current facility. Patients land here once a referral graduates from **Assigned** in Referral Intake.

## Two routes

- **Patient Management** — the working list a clinician uses daily. Filtered to patients you have a visit or follow-up with.
- **All Patients** — the admin-level roster with archived and non-active records.

## List columns

| Column | Notes |
|---|---|
| **Name / DOB** | Click to open the chart |
| **MRN** | Medipyxis-generated; unique per organization |
| **Status** | Active · On Hold · Archived · Deceased |
| **Primary Clinician** | Editable by admin |
| **Next Visit** | Pulled from Fleet Calendar |
| **Last Visit** | Most recent signed note date |
| **Open Actions** | Count of pending items (LCD check, IVR renewal, pending signature) |

## Patient chart

Clicking a patient opens the chart with tabs:

- **Summary** — demographics, active wounds, allergies, active medications, care team.
- **Wounds** — the wound cockpit. One card per active wound with the last measurement trend line. Entry point for the Visit Wizard.
- **Visits** — historical visit notes, sortable by date and provider.
- **Documents** — uploaded PDFs, consent forms, prior records.
- **Medications** — DoseSpot integration for e-prescribing and reconciliation.
- **Orders & DME** — open and historical orders.
- **Billing** — claim history with links into Billing Operations.
- **Activity** — immutable audit trail.

## Archive, don't delete

Since the MED-1692 update, deleting a patient is disallowed. Use **Archive** on the patient header to retire a record. Archived patients are excluded from scheduling (MED-1695) but preserved for audit and billing reconciliation.

## Related

- [Referral Intake → Assigned drops here](../referral-intake/status-transitions.md)
- [Starting a visit](../visit-wizard-ehr/start-a-visit.md)
