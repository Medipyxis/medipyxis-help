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

- **Medications** — count of active medications, with a short list.
- **Allergies** — known allergy count.
- **Vitals** — today's vitals (for example, blood pressure and A1C) where recorded.

### Metric counters

Five counters summarize the patient's wound caseload:

- **Total Cases**
- **Open Wounds**
- **Graft Eligible**
- **Overdue Visits**
- **IVR Required**

### Top actions

- **Archived Wounds** — view wounds that have been archived.
- **Advanced Filters** — filter the case list.
- **Export Data** — export the current case list.
- **Add Visit** — start a new encounter (also available on each wound card).

---

## Wound case cards

Each wound appears as a card showing:

| Element | What it shows |
|---|---|
| **Location & etiology** | The wound's anatomic location and etiology badge (for example, `venous_ulcer`, `pressure_injury`, `diabetic_foot`). |
| **Wound ID** | The internal wound record ID. |
| **Status pills** | `Active`, plus IVR readiness (`IVR: Not Ready` or `IVR Available`). |
| **Photo** | A thumbnail if a photo is on file, with the count. |
| **Compliance pills** | `Graft Eligible`, `IVR Available`, and `LCD: Compliant` — the current compliance and eligibility status. |
| **Metrics grid** | Created date, number of visits, Length, Width, Depth, and Area (cm²). |
| **Progress notes** | The latest progress note, if any. |
| **Actions** | **Add Visit**, **Details**, **Intake**, and an overflow menu. |

---

## Start or resume a visit

Use the **Visit Selector** in the upper-right corner of the Wound Cockpit:

1. Click the dropdown **Pick a visit or start a new one**.
2. Select the scheduled visit, or choose to start a new one.
3. Click **Open**. The Visit Wizard opens, ready to begin or resume documentation.

If a draft already exists, pick it in the Visit Selector to continue where you left off instead of starting a new visit. Drafts autosave continuously. See [Walk through a visit in the Visit Wizard](./start-a-visit.md).

---

## Review a wound's last visit

Before a follow-up visit, review where the wound stands:

1. Find the wound case card for the wound.
2. Click **Details**.
3. Review the overview of the most recent visit — the wound's status and documented progress.

Do this for each wound you will treat, so you know what carries forward into the new visit.

---

## Compliance and IVR status pills

The colored pills on each card summarize readiness at a glance:

- **LCD: Compliant** (green) — the wound's documentation meets the LCD compliance checks.
- **Graft Eligible** (purple) — the wound qualifies for graft/advanced therapy consideration.
- **IVR Available** (green) / **IVR: Not Ready** (gray) — whether the wound is ready for an Insurance Verification Request for advanced therapy.

A wound that is not IVR-ready shows `IVR: Not Ready` and `IVR Not Available` on the card's status bar. Resolve the outstanding documentation (measurements, tissue percentages, prior-treatment history) to advance IVR readiness.

---

## Roles and permissions

| Role | What they can do |
|---|---|
| Clinician | View wounds and compliance status; start visits. |
| Clinical manager | View wounds and compliance status. |
| Medical director | View wounds and compliance status; review attested notes. |
| Admin | View everything in their facility. |

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| No wounds appear on the page | The patient has no wound records | Create a wound during intake or via the Add Wound flow. |
| **Add Visit** is disabled | A visit is already in progress for today, or the wound is archived | Check for an existing draft; or restore the wound from Archived Wounds. |
| **LCD: Compliant** pill is missing | Wound documentation is incomplete | Complete the Wound Assessment (step 7) measurements and tissue percentages, then save. |
| IVR shows "Not Ready" | Required readiness data is missing | Complete measurements, tissue composition, and prior-treatment history; the pill updates on save. |

## Related

Auto-rendered from `related:` in frontmatter.
