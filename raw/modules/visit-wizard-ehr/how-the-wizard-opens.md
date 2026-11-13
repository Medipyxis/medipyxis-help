---
id: visit-wizard-ehr-how-the-wizard-opens
title: How the Visit Wizard opens (route-on-arrival)
module: visit-wizard-ehr
audience: [clinician, clinical_manager, admin]
roles: [clinician, medical_director, clinical_manager, admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/visit-wizard
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-cockpit
  - visit-wizard-ehr-sign-off
tags: [visit-wizard, route-on-arrival, resume-draft, signed-note, duplicate-note-guard]
---

The Visit Wizard opens from three surfaces — Fleet Calendar, Wound Cockpit, and Patient Chart — and all three behave the same way. What the wizard shows on arrival depends on what already exists for that patient and appointment. This article explains the three cases and what to do in each.

## Before you start

- You have access to All Patients. The Visit Wizard uses the same access.
- You are opening a visit from Fleet Calendar, the Wound Cockpit, or the Patient Chart's Appointment Management card.

---

## Same behavior from every surface

Whichever surface you start from, Medipyxis looks up the appointment's visit type and any existing visit for that patient and appointment. The wizard then opens on the right patient and appointment, with the visit type taken from the appointment, and resumes a live draft if one exists.

## Case 1 — No visit yet: fresh start

If no visit exists yet for this patient and appointment, the wizard opens with all sections collapsed, the visit type taken from the appointment, and the patient's carried-forward data pre-filled. Open Step 1 to begin. This is the normal path for a scheduled appointment you are walking into for the first time.

The wizard creates the draft on first save. Autosave runs about a second after you change a field.

## Case 2 — A live draft exists: resume in place

If there is an active draft for this appointment, the wizard resumes that exact draft with your prior work intact. Continuous autosave means the last field you completed on your other device or in your other tab is already saved.

Medipyxis allows only one active draft per appointment, so you cannot accidentally split a visit across two drafts.

## Case 3 — The appointment already has a signed note

If the appointment already has a signed note, the wizard does not open. You see "This visit is signed and locked" with **Review signed note**, **Add an addendum**, **Add a wound by addendum**, and **Back to patient chart**. Any change goes on the signed note as an addendum.

An appointment holds one signed note. To document another wound you assessed at that visit, open the appointment and use **Add a wound by addendum** on the signed note. A second visit on the same appointment is refused.

Do not try to sign a second note on an appointment that already has a signed note. Use an addendum on the existing note. See [Sign Off](/modules/visit-wizard-ehr/sign-off/) for the addendum flow.

---

## What this means for you

- **An appointment with no visit yet.** The wizard opens with all sections collapsed and the patient's carried-forward data pre-filled. Document normally.
- **An appointment with a live draft.** The wizard opens your draft with all prior fields loaded. Continue where you left off.
- **An appointment with a signed note.** You see the "This visit is signed and locked" screen. Use **Add an addendum** to correct or amend, or **Add a wound by addendum** to document another wound from that visit.

---

## Where you can open the wizard

- **Fleet Calendar** — Appointment Details modal, **Start Visit** button.
- **Wound Cockpit** — the inline appointment picker at the top of the patient's Wound Cockpit page.
- **Patient Chart** — the Appointment Management card's **Open visit** button.

---

## Troubleshooting

- **The wizard opens empty for a visit you already started.** A temporary network problem prevented the draft lookup. The wizard opens rather than blocking you. Close the wizard and re-open it from the same surface. If the draft is truly missing, contact your admin.
- **The wizard opens on the wrong wound.** Use the Wound picker in Step 7 to switch, or start the visit from the correct wound's cockpit.
