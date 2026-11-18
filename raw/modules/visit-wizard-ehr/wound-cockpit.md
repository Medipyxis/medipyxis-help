---
id: visit-wizard-ehr-wound-cockpit
title: Wound Cockpit overview
module: visit-wizard-ehr
audience: [clinician, clinical_manager]
roles: [clinician, medical_director, clinical_manager]
type: concept
estimated_minutes: 5
last_reviewed: 2026-11-13
app_route: /facility/{facility_uuid}/patients/{patient_uuid}/wound-cockpit
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-how-the-wizard-opens
  - visit-wizard-ehr-wound-assessment
  - visit-wizard-ehr-lcd-navigator
tags: [wound-cockpit, wound-cases, IVR-status, IVR-readiness]
---

# Wound Cockpit overview

The Wound Cockpit is the patient-level wound management page in Medipyxis. It lists every wound case for the selected patient on one screen so you can see status, compliance, and measurements at a glance, review a wound's last visit, and start or resume a visit.

---

## Before you start

- You are viewing the chart of a wound care patient.
- The patient has at least one wound record (created during intake or via the Add Wound flow).

---

## Page layout

Open the Wound Cockpit from the patient chart. The page shows:

### Patient summary banner

Three cards at the top give immediate clinical context:

- **Active Meds** — count of active medications, with a short list.
- **Known Allergies** — known allergy count.
- **Today's Vitals** — shows blood pressure (BP) and A1C. On this page these currently read N/A even when vitals were recorded, so check the patient's latest visit note for vitals.

### Metric counters

Six counters summarize the patient's wound caseload:

- **Cases** — all wound cases.
- **Open** — open wounds.
- **Eligible** — wounds that are graft eligible.
- **Overdue** — wounds with an overdue visit.
- **IVR** — wounds that need an Insurance Verification Request.
- **In Protocol** — protocol enrollments for the patient.

### Top actions

- **Pick a visit or start a new one** — open a scheduled visit, resume one in progress, or start a visit by picking a calendar slot. See [Start or resume a visit](#start-or-resume-a-visit).
- **Archived Wounds** — view wounds that have been archived.
- **Advanced Filters** — filter the case list.
- **Export Data** — export the current case list.

---

## Wound case cards

Each wound appears as a card showing:

| Element | What it shows |
| --- | --- |
| **Location and wound type** | The wound's anatomic location and its wound type. |
| **Short ID** | The first part of the wound's record ID, to tell similar wounds apart. |
| **Status pills** | The wound's status (for example, *Active*) and its IVR status, shown as *IVR:*  followed by the status — for example *IVR: Not Ready*, *IVR: Pending*, or *IVR: Approved*. The most recent wound also shows *Latest*. |
| **LCD Navigator panel** | Once the wound has been checked against the coverage policy, an expandable panel shows where the wound stands and the top next steps. |
| **Photo** | A thumbnail if a photo is on file, with the count. |
| **Metrics grid** | Created date, number of visits, Length, Width, Depth, and Area (cm²). |
| **Latest Progress Notes** | The latest progress note, if any. |
| **IVR readiness button** | Names the wound's next IVR step and opens the IVR readiness check. |
| **Actions** | **Details**, **Intake**, and an overflow menu (including **Archive Wound Case**). |

---

## Start or resume a visit

Use the visit picker in the upper-right corner of the Wound Cockpit:

1. Click the dropdown **Pick a visit or start a new one**.
2. Select the scheduled visit, or choose **+ Start visit — pick a calendar slot…** to book and start a new one.
3. Click **Open**. The Visit Wizard opens, ready to begin or resume documentation.

A visit already in progress is marked in the list — pick it to continue where you left off instead of starting a new visit. If the visit belongs to another clinician, Medipyxis asks you to confirm before opening it. Drafts autosave continuously. See [Walk through a visit in the Visit Wizard](/modules/visit-wizard-ehr/start-a-visit/).

---

## Review a wound's last visit

Before a follow-up visit, review where the wound stands:

1. Find the wound case card for the wound.
2. Click **Details**.
3. Review the overview of the most recent visit — the wound's status and documented progress.

Do this for each wound you will treat, so you know what carries forward into the new visit.

---

## IVR status and readiness

The *IVR:* pill on each card shows the wound's current IVR status. Until the wound has been checked against a coverage policy, it reads *IVR: Not Ready*. After a check, it shows the result — for example *Ready*, *Needs Documentation*, *Approaching Limit*, or *Coverage Not Assessed*. Once an Insurance Verification Request is under way, it shows the request's status, for example *Pending*, *Approved*, or *Rejected*. The check runs again after a visit for the wound is documented. Click the card's IVR readiness button to see what the wound still needs.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| No wounds appear on the page | The patient has no wound records | Create a wound during intake or via the Add Wound flow. |
| A wound is missing from the list | The wound was archived | Open **Archived Wounds**. |
| The visit you expected isn't in **Pick a visit or start a new one** | The visit isn't on the schedule | Choose **+ Start visit — pick a calendar slot…** to book it, then open it. |
| The pill shows *IVR: Not Ready* | The wound hasn't been checked against a coverage policy yet | Click the IVR readiness button to see what's missing. Document the wound at its next visit; the check runs after the visit. |
