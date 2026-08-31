---
id: visit-wizard-ehr-how-the-wizard-opens
title: How the Visit Wizard opens (route-on-arrival)
module: visit-wizard-ehr
audience: [clinician, clinical_manager, admin]
roles: [clinician, medical_director, clinical_manager, admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-08-31
app_route: /facility/{facility_uuid}/visit-wizard
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-cockpit
  - visit-wizard-ehr-sign-off
tags: [visit-wizard, route-on-arrival, resume-draft, signed-note, duplicate-note-guard]
---

The Visit Wizard opens from three surfaces — Fleet Calendar, Wound Cockpit, and Patient Chart — and every one of them now routes through the **same resolver**. What the wizard shows on arrival depends on what already exists for that patient and appointment. This article explains the three cases and what to do in each.

## Before you start

- You are a `clinician`, `medical_director`, or `clinical_manager` at a facility that uses the wound-care wizard.
- You are opening a visit from Fleet Calendar, the Wound Cockpit, or the Patient Chart's Appointments card.

---

## One resolver, three surfaces

Before mid-2026, the three surfaces built the wizard URL differently and only Fleet Calendar carried the full set of parameters. The other two dropped fields the wizard needs to recall a draft by identifier, which forced it into a fallback that hydrated the form at about 20% of the correct values.

Since the unification, every entry point calls the same helper. It looks up the appointment's visit type and any existing `visit_data_v2` row for that patient + appointment, then hands the wizard the exact parameters it needs. The route is `/visit-wizard` with these query parameters:

- `patientId` — the patient the wizard should load.
- `appointmentId` — the Fleet Calendar appointment the visit is scoped to.
- `visitTypeKey` — the canonical visit type (e.g. `wound_followup`, `wound_initial`), resolved from the appointment's assigned visit type.
- `visitAction=resume` — set only when a live draft exists for this appointment.
- `visitId`, `woundId` — set only when resuming a draft; keyed to the recall column, not the row's UUID.

## Case 1 — No visit yet: fresh start

If no `visit_data_v2` row exists for this patient and appointment, the wizard opens on **Section 1** with the visit type pre-selected from the appointment and the patient/wound context carried in. This is the normal path for a scheduled appointment you are walking into for the first time.

The wizard writes its draft row on first save. Nothing is stored until you complete a field.

## Case 2 — A live draft exists: resume in place

If there is an active draft for this appointment, the resolver adds `visitAction=resume`, plus the draft's `visitId` and `woundId`, to the wizard URL. The wizard uses the unambiguous "resume by visit_id" path — it does not fall back on prefill cascades — and re-opens the section navigator with your prior work intact. Continuous autosave means the last field you completed on your other device or in your other tab is already saved.

The database enforces one active draft per appointment through a partial unique index, so you cannot accidentally split a visit across two draft rows.

## Case 3 — The appointment already has a signed note

If the appointment already carries a finalized (signed and locked) note, the resolver **sees it** and reports that fact to the caller. This is the change that landed in mid-August 2026: before that, the resolver filtered to drafts only, was blind to signed rows, and would let the wizard start a brand-new row on top of an already-signed appointment — signing that new row is what produced the one appointment out of ~29,000 that carried two finalized notes.

<Warning>
Today, on an appointment that is already signed, the wizard still opens on a fresh row. The resolver reports the finalized note but the wizard has not yet been wired to route you to a view/addendum flow instead. Until that wiring lands, **do not sign a second note on an appointment that already carries a signed note** — use Addendum on the existing note. See [Sign Off](./sign-off.md) for the addendum flow.
</Warning>

The database intentionally permits one finalized row **per wound** on the same appointment, so documenting a second wound separately on the same visit is legitimate and will not be blocked. What is not legitimate — and what the resolver was rewritten to make visible — is a second finalized note on the same wound for the same encounter.

---

## What this means for you

| You open the wizard on… | The wizard shows | What to do |
|---|---|---|
| An appointment with no visit yet | Section 1, prefilled from the patient and wound context | Document normally. |
| An appointment with a live draft | The section you left off on, with all prior fields loaded | Continue where you left off. |
| An appointment with a signed note on this wound | A fresh Section 1 | Close the wizard. Open the signed note from Progress Notes or the Wound Cockpit timeline and use **Add Addendum** if you need to correct or amend. |
| An appointment with a signed note on a *different* wound | A fresh Section 1, ready to document the new wound | Document the second wound; both notes will co-exist on the appointment by design. |

---

## Where the resolver runs

The resolver is a single utility (`openVisitWizard`) called by:

- **Fleet Calendar** — Appointment Details modal, **Start Visit** button.
- **Wound Cockpit** — the inline appointment picker on each wound's cockpit page.
- **Patient Chart** — the Appointment Management card's **Open Visit** button.

Any new entry point to the wizard is expected to call the same helper. That guarantees the wizard's recall behavior stays predictable no matter where the clinician came from.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Wizard opens on a blank Section 1 for a visit you already started | Resolver could not reach the visit lookup (transient network) — it fails **open**, never blocks | Close the wizard and re-open from the same surface; if the draft is truly missing, contact your admin. |
| Wizard opens on the wrong wound | Draft on this appointment is tied to a different wound | Use the Wound picker in Section 7 to switch, or start the visit from the correct wound's cockpit. |
| **Start Visit** takes you to the Primary Care Cockpit, not the wizard | Fleet Calendar specialty routing sent a primary-care patient to the PCP flow | Confirm the patient's assigned service line; wound-care patients route into the wizard. |
| Wizard opens fresh when the appointment already has a signed note | Documented above — the resolver sees the signed note but the wizard has not yet been wired to redirect | Do not sign a second note; use the addendum flow on the existing note. |

## Related

Auto-rendered from `related:` in frontmatter.
