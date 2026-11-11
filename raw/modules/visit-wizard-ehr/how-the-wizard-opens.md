---
id: visit-wizard-ehr-how-the-wizard-opens
title: How the Visit Wizard opens (route-on-arrival)
module: visit-wizard-ehr
audience: [clinician, clinical_manager, admin]
roles: [clinician, medical_director, clinical_manager, admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-10-29
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

- You are a clinician, medical director, or clinical manager at a facility that uses the wound-care wizard.
- You are opening a visit from Fleet Calendar, the Wound Cockpit, or the Patient Chart's Appointments card.

---

## Same behavior from every surface

Whichever surface you start from, Medipyxis looks up the appointment's visit type and any existing visit for that patient and appointment. The wizard then opens on the right patient and appointment, with the visit type taken from the appointment, and resumes a live draft if one exists.

## Case 1 — No visit yet: fresh start

If no visit exists yet for this patient and appointment, the wizard opens on **Section 1** with the visit type pre-selected from the appointment and the patient/wound context carried in. This is the normal path for a scheduled appointment you are walking into for the first time.

The wizard creates the draft on first save. Nothing is stored until you complete a field.

## Case 2 — A live draft exists: resume in place

If there is an active draft for this appointment, the wizard resumes that exact draft and re-opens the section navigator with your prior work intact. Continuous autosave means the last field you completed on your other device or in your other tab is already saved.

Medipyxis allows only one active draft per appointment, so you cannot accidentally split a visit across two drafts.

## Case 3 — The appointment already has a signed note

If the appointment already carries a finalized (signed and locked) note on this wound, the wizard opens on a fresh Section 1.

<Warning>
**Do not sign a second note on an appointment that already carries a signed note for the same wound** — use Addendum on the existing note. See [Sign Off](./sign-off.md) for the addendum flow.
</Warning>

Medipyxis permits one finalized note **per wound** on the same appointment, so documenting a second wound separately on the same visit is legitimate and will not be blocked. What is not legitimate is a second finalized note on the same wound for the same encounter.

---

## What this means for you

| You open the wizard on… | The wizard shows | What to do |
|---|---|---|
| An appointment with no visit yet | Section 1, prefilled from the patient and wound context | Document normally. |
| An appointment with a live draft | The section you left off on, with all prior fields loaded | Continue where you left off. |
| An appointment with a signed note on this wound | A fresh Section 1 | Close the wizard. Open the signed note from Progress Notes or the Wound Cockpit timeline and use **Add Addendum** if you need to correct or amend. |
| An appointment with a signed note on a *different* wound | A fresh Section 1, ready to document the new wound | Document the second wound; both notes will co-exist on the appointment by design. |

---

## Where you can open the wizard

- **Fleet Calendar** — Appointment Details modal, **Start Visit** button.
- **Wound Cockpit** — the inline appointment picker on each wound's cockpit page.
- **Patient Chart** — the Appointment Management card's **Open Visit** button.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Wizard opens on a blank Section 1 for a visit you already started | A temporary network problem prevented the draft lookup — the wizard opens rather than blocking you | Close the wizard and re-open from the same surface; if the draft is truly missing, contact your admin. |
| Wizard opens on the wrong wound | Draft on this appointment is tied to a different wound | Use the Wound picker in Section 7 to switch, or start the visit from the correct wound's cockpit. |
| **Start Visit** takes you to the Primary Care Cockpit, not the wizard | Fleet Calendar specialty routing sent a primary-care patient to the PCP flow | Confirm the patient's assigned service line; wound-care patients route into the wizard. |
| Wizard opens fresh when the appointment already has a signed note | The wizard does not redirect you to the signed note — see Case 3 above | Do not sign a second note; use the addendum flow on the existing note. |

## Related

Auto-rendered from `related:` in frontmatter.
