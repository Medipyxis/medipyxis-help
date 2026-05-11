---
id: visit-wizard-ehr-wound-cockpit
title: Wound Cockpit overview
module: visit-wizard-ehr
audience: [clinician, case_manager]
roles: [nurse, np, md, medical_director, case_manager]
type: concept
estimated_minutes: 6
last_reviewed: 2026-05-10
app_route: /facility/{facility_uuid}/wound-cockpit/{wound_uuid}
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-assessment
  - visit-wizard-ehr-lcd-navigator
tags: [wound-cockpit, where-this-wound-is-at, case-manager-readiness, wound-timeline, IVR, protocol-engine]
---

# Wound Cockpit overview

The Wound Cockpit is the per-wound hub for everything that happens between visits. It sits in front of the Visit Wizard V4: when a clinician taps **Start Visit** for a wound care patient, Fleet Calendar's specialty routing lands them here first, not directly in the wizard.

The cockpit answers four questions at a glance:

1. Where is this wound right now?
2. Is it ready for case manager review?
3. Where is it on its protocol?
4. What happened on prior visits?

## Before you start

- You are working from the patient chart of a wound care patient.
- The wound record exists. New wounds are created during intake or via the **Add wound** flow in the mobile app.
- For follow-up visits, the prior visit's data carries forward into the next encounter — see [Visit Wizard V4 overview](./overview.md).

---

## "Where this wound is at" panel

The header panel summarizes the wound in one view:

| Field | What it shows |
|---|---|
| **Etiology + Stage** | Current etiology (DFU, VLU, pressure injury, etc.) and stage. |
| **Anatomic location** | Precise editable location, e.g. `Right lateral malleolus`. |
| **Latest measurements** | Length, Width, Depth from the most recent visit. |
| **% area change** | Computed against the prior measurement. Color-coded: improving, static, worsening. |
| **Tissue composition** | Granulation / Slough / Eschar / Epithelial, summing to 100%. |
| **Days in care** | Days since the wound was opened in Medipyxis. |
| **Last visit** | Date and provider of the most recent encounter. |
| **Status flags** | Compression in place · NPWT in place · Offloading in place · Awaiting IVR · etc. |

Use this panel as your pre-visit briefing — it is the same data that carries forward into the wizard.

---

## Case-Manager Readiness

The **Case-Manager Readiness** button runs a checklist that determines whether the wound is ready to hand off to a case manager for review (utilization management, IVR approval, advanced therapy authorization).

The engine evaluates:

- 4-week conservative care documented.
- Failed prior therapies listed.
- Recent measurements on file.
- Tissue percentages summed correctly.
- Comorbidities current.
- Medical Necessity Statement present.
- Photo on file within the last visit window.

Each check returns **Ready**, **Needs Attention**, or **Blocking**. Click any non-green check to jump to the section where the missing data belongs. When all checks are green, the **Mark Ready for Case Manager** action is enabled.

<Compliance>
Case Manager Readiness does not approve advanced therapy on its own. It signals the wound is documentation-complete for case manager review and is the prerequisite gate for IVR submission.
</Compliance>

---

## Protocol progression

If the wound is enrolled in a Medipyxis Protocol Engine treatment protocol, the cockpit shows a **Protocol progression timeline** with:

- The current stage (for example, *Conservative care → NPWT → Advanced therapy*).
- Days at the current stage.
- The criteria for stage progression.
- An indicator if the wound is overdue for the next protocol decision.

Protocol status is also read by the IVR Readiness Modal: protocols inform the recommended IVR product and quantities. For the full protocol model, see the Protocol Engine admin guide.

---

## Wound Timeline (merged Visit Log)

The Wound Timeline is the merged view of all wound events — visits, IVR requests, IVR approvals, tissue applications, photo captures, write-offs, addenda. Each event shows:

- Date and provider.
- Event type with a status badge.
- A short summary line.
- A link to the underlying record (visit note, IVR, tissue log entry, etc.).

This replaces the older Visit Log as a single chronological feed.

---

## IVR Readiness Modal

When a wound is ready for an IVR (Insurance Verification Request) for advanced therapy, click **Request IVR**. The IVR Readiness Modal opens with:

1. **Pre-IVR checklist** — the same readiness checks as Case-Manager Readiness, plus product-specific items.
2. **Auto-populated fields** — payer, plan, diagnosis codes (stage-aware), prior conservative care summary, planned product and quantity (from the protocol).
3. **Manual fields** — anything the auto-populate could not resolve, highlighted for completion.

Submit the IVR from the modal. The IVR moves through the verification flow; on **approval**, the system auto-creates the supply order, links it to the receiving record, and updates inventory allocation.

<Note>
IVR auto-populate uses wound, comorbidity, and protocol data. Always review the auto-populated payer and quantities before submitting — payer-specific quirks may require manual override.
</Note>

---

## Starting and continuing visits from the cockpit

The cockpit's primary CTA is **Start Visit** (or **Continue Visit** if a draft exists for today).

- **Start Visit** opens the Visit Wizard V4 with this wound pre-selected in section 7.
- **Continue Visit** opens the wizard at the last unsaved section. Drafts auto-save every 3 minutes and per-section through an edge function — see [Visit Wizard V4 overview](./overview.md).

For initial evaluations, the wizard automatically picks the **Initial** visit type and prompts for full clinical history; for follow-ups, the **Follow-up** type is preselected and clinical history carries forward.

---

## Cockpit roles and permissions

| Role | What they can do in the cockpit |
|---|---|
| `nurse` · `np` · `md` | Read everything; start visits; run Case-Manager Readiness; submit IVR. |
| `case_manager` | Read everything; mark wounds reviewed; cannot start visits. |
| `medical_director` | Read everything; review attested notes; cannot edit signed encounters. |
| `practice_admin` | Read everything in their facility. |

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **Start Visit** is disabled | A signed visit already exists for today, or another clinician has the draft open | Reload the cockpit; if another draft exists, contact the listed owner. |
| Case-Manager Readiness stays red after fixes | Most recent visit was not saved | Confirm the section navigator in the wizard shows checkmarks; complete any pending sections. |
| Protocol timeline is missing | Wound is not enrolled in a protocol | Enroll the wound in the appropriate protocol via the Protocol Engine admin tools. |
| IVR modal auto-populated the wrong payer | Patient has multiple coverages on file | Open the patient's Insurance card and confirm primary coverage; re-open the IVR modal. |
| Wound Timeline missing a recent event | Event is still syncing from offline outbox | See [Work Offline](./work-offline.md); pending sync items show in the top banner. |

## Related

Auto-rendered from `related:` in frontmatter.
