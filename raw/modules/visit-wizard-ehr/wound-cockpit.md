---
id: visit-wizard-ehr-wound-cockpit
title: Wound Cockpit overview
module: visit-wizard-ehr
audience: [clinician, clinical_manager]
roles: [clinician, medical_director, clinical_manager]
type: concept
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/wound-cockpit/{wound_uuid}
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-how-the-wizard-opens
  - visit-wizard-ehr-wound-assessment
  - visit-wizard-ehr-lcd-navigator
tags: [wound-cockpit, wound-cases, compliance-pills, IVR-status]
---

# Wound Cockpit overview

The Wound Cockpit is the patient-level wound management page in Medipyxis. It lists every wound case for the selected patient on one screen so you can see status, IVR readiness, and measurements at a glance, and start or continue a visit for the patient.

---

## Before you start

- You are viewing the chart of a wound care patient.
- The patient has at least one wound record (created during intake or via the Add Wound flow).

---

## Page layout

Open the Wound Cockpit from the patient chart. The page shows:

**Patient summary banner**

Three cards at the top give immediate clinical context:

- **Medications** — count of active medications, with a short list.
- **Allergies** — known allergy count.
- **Vitals** — today's vitals (for example, blood pressure and A1C) where recorded.

**Metric counters**

Six counters summarize the patient's wound caseload:

- **Cases**
- **Open**
- **Eligible** (graft eligible)
- **Overdue**
- **IVR** (IVR required)
- **In Protocol**

**Top actions**

- **Archived Wounds** — view wounds that have been archived.
- **Advanced Filters** — filter the case list.
- **Export Data** — export the current case list.
- **Visit picker** — choose a visit to open, or start a new one. See below.

---

## Wound case cards

Each wound appears as a card showing:

- **Location and etiology** — the wound's anatomic location and etiology badge.
- **Wound ID** — the internal wound record ID.
- **Status pills** — **Active**, plus IVR readiness (**IVR: Not Ready** until an IVR status is recorded).
- **Flags** — a card may also show **Visit Overdue** or **IVR Action Required**.
- **Photo** — a thumbnail if a photo is on file, with the count.
- **Metrics grid** — Created date, number of visits, Length, Width, Depth, and Area (cm²).
- **Progress notes** — the latest progress note, if any.
- **Actions** — the IVR readiness button, **Details**, **Intake**, a **More actions** menu (**Archive Wound Case**), and **Order More** once IVR is approved.

---

## Starting or continuing a visit

To start or continue a visit, use the picker at the top of the page. Choose a scheduled visit (an open note is marked "note in progress") or **+ Start visit — pick a calendar slot…**, then click **Open**.

**Open** is disabled until you choose a visit in the picker.

If a draft already exists for today, continue from the existing draft instead of starting a new one. Drafts autosave continuously. Each field is saved as you complete it. See [Visit Wizard overview](/modules/visit-wizard-ehr/overview/).

---

## IVR readiness

Each card has an IVR readiness button whose label and colour reflect the wound's coverage check. Click it to open the readiness check and see what the check still needs.

IVR shows Not Ready until an IVR status is recorded for the wound.

---

## Roles and permissions

Anyone with access to All Patients can open the Wound Cockpit and use all of its actions. The page does not change by role.

---

## Troubleshooting

- **No wounds appear on the page.** The patient has no wound records. Create a wound during intake or via the Add Wound flow.
- **Open is disabled.** Choose a visit in the picker first.
- **You need to work on an archived wound.** Open **Archived Wounds** and click **Unarchive**.
- **IVR shows Not Ready.** No IVR status is recorded for the wound yet. Click the IVR readiness button on the card to see what the coverage check still needs.
