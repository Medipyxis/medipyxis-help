---
id: visit-wizard-ehr-how-the-wizard-opens
title: How the Visit Wizard opens
module: visit-wizard-ehr
audience: [clinician, clinical_manager, admin]
roles: [clinician, medical_director, clinical_manager, admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-11-13
app_route: /facility/{facility_uuid}/visit-wizard
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-cockpit
  - visit-wizard-ehr-sign-off
tags: [visit-wizard, resume-draft, signed-note, addendum, signed-visit]
---

# How the Visit Wizard opens

The Visit Wizard opens from three places — Fleet Calendar, the Wound Cockpit, and the Patient Chart — and all three behave the same way. What you see depends on what already exists for that patient and appointment. This article explains the three cases and what to do in each.

## Before you start

- You are a clinician or clinical manager at a facility that uses the wound-care Visit Wizard.
- You are opening a visit from Fleet Calendar, the Wound Cockpit, or the Patient Chart's **Appointment Management** tile.

## Same behavior from every surface

Whichever place you start from, Medipyxis looks up the appointment's visit type and any visit that already exists for that patient and appointment. The wizard then opens on the right patient and appointment, with the visit type taken from the appointment, and resumes a draft if one exists.

## Case 1 — No visit yet: fresh start

If no visit exists yet for this patient and appointment, the wizard opens at the start, with the visit type taken from the appointment and the patient and wound context carried in. This is the normal path for a scheduled appointment you are walking into for the first time. Your draft saves automatically as you document.

## Case 2 — A draft exists: resume in place

If a draft already exists for this appointment, the wizard resumes that draft with your earlier work in place. Each section's header shows its status, such as **Completed** or **Needs Attention**, so you can see what's left. Because the wizard saves as you go, work you entered on another device or in another tab is already there.

An appointment has only one active draft, so a visit cannot be split across two drafts by accident.

A visit that reached the review screen but was never signed is still a draft. It opens as itself so you can finish it.

## Case 3 — The visit is already signed

If the appointment's visit is already signed, the wizard does not open. Instead you see **This visit is signed and locked**. You can review the signed note, but it can't be edited or signed again.

An appointment has one signed note. From this screen:

- **Review signed note** — open the signed note, read-only.
- **Add an addendum** — correct or add to the signed note.
- **Add a wound by addendum** — document a wound you assessed at this visit that isn't in the signed note. Don't start a new visit for it.
- **Back to patient chart** — leave without changes.

If an unsigned copy of the visit was also started, the screen says so. That copy is kept as it is and can't be signed. Put anything it holds that isn't in the signed note into an addendum.

## What this means for you

| You open the wizard on… | You see | What to do |
| --- | --- | --- |
| An appointment with no visit yet | The start of the wizard, with patient and wound context carried in | Document normally. |
| An appointment with a draft | Your draft, with all earlier entries loaded | Continue where you left off. |
| An appointment whose visit is signed | **This visit is signed and locked** | Review the note, or use **Add an addendum** or **Add a wound by addendum**. |

## Where you can open the wizard

- **Fleet Calendar** — the appointment's details window, **Start Visit** button (**Resume Visit** or **Continue Visit** when documentation has already started).
- **Wound Cockpit** — the visit picker on the wound's cockpit page.
- **Patient Chart** — the **Appointment Management** tile's **Open visit** button.

## Troubleshooting

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| The wizard opens at the start for a visit you already started | A temporary network problem stopped Medipyxis finding your draft. The wizard opens rather than blocking you. | Close the wizard and open it again from the same place. If the draft is still missing, contact your admin. |
| The wizard shows the wrong wound | The draft for this appointment is on a different wound | Switch wounds with the wound picker in the Wound Assessment section, or start the visit from the correct wound's cockpit. |
| You see **This visit is signed and locked** but need to document more | The appointment's visit is already signed | Use **Add an addendum**, or **Add a wound by addendum** for a wound missing from the note. |
