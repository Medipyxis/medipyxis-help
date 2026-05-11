---
id: visit-wizard-ehr-overview
title: Visit Wizard V4 overview
module: visit-wizard-ehr
audience: [clinician]
roles: [nurse, np, md, medical_director]
type: concept
estimated_minutes: 6
last_reviewed: 2026-05-10
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-assessment
  - visit-wizard-ehr-lcd-navigator
  - visit-wizard-ehr-wound-cockpit
  - visit-wizard-ehr-work-offline
  - visit-wizard-ehr-sign-off
tags: [visit-wizard, V4, EHR, LCD, Medicare, autosave, AI-drafting, ABI]
---

# Visit Wizard V4 overview

The Visit Wizard V4 is Medipyxis's step-by-step wound care documentation flow. It guides clinicians through **14 Medicare-LCD-blocking sections** — from consent to provider attestation — enforcing documentation completeness, real-time LCD compliance, and clean billing-code generation before a note can be signed.

![Visit Wizard V4 section navigator and patient header](../../assets/visit-wizard/03_visit_wizard_overview.png)

*The Visit Wizard V4 section navigator. Each section must be completed in order; completed sections display a checkmark, and the active section is highlighted.*

---

## How the Visit Wizard fits into the workflow

The Visit Wizard opens from the **Fleet Calendar** (tap the appointment) or directly from the **Wound Cockpit**. When opened, it locks to the selected patient, wound, and date of service. All documentation entered is scoped to that encounter record.

The Visit Wizard route is `/facility/{facility_uuid}/visit-wizard-v2-page`.

Fleet Calendar uses **specialty routing**: clicking **Start Visit** sends wound care patients to the Wound Cockpit and primary care patients to the [PCP Cockpit](#related-modules), based on the care specialty selected at intake.

---

## What changed in V4

V4 replaces the prior 17-step flow with **14 Medicare-LCD-blocking sections** that mirror the structure auditors expect. Notable changes:

- **3-minute autosave** plus per-section save through an edge function — drafts survive browser crashes and network drops.
- **Clinical history carry-forward** — comorbidities, allergies, prior treatments, and historic measurements pre-populate from the prior visit.
- **LCD Navigator V2 ambient badge** — real-time Medicare compliance status, always visible at the top of the wizard. See [LCD Navigator](./lcd-navigator.md).
- **Procedure & Supplies unified** — a single source of truth replaces the older procedure-and-supplies split.
- **ABI gate for compression** — compression therapy cannot be selected until an ankle-brachial index value is documented.
- **AI-assisted drafting** — generate section text from structured data, with guardrails and a one-time AI Disclaimer acknowledgment.
- **Medical Necessity Statement** — auto-generated narrative tied to LCD requirements.
- **Deterministic CPT autocode** with **AI fallback** when the deterministic engine returns zero rows.
- **LCD audit on save** — every save runs a compliance audit that updates the ambient badge.
- **PDF generation with retry + Sentry** — failed PDFs retry automatically and surface a clear error if the retry fails.

---

## The 14 sections

| # | Section | Key fields / notes |
|---|---|---|
| 1 | **Consent & Attestation** | HIPAA notice, telehealth consent toggle, patient e-signature. |
| 2 | **Patient Context** | Reason for visit, visit type (`Initial` · `Follow-up` · `Post-op` · `Re-eval`), allergies card (synced with DoseSpot). |
| 3 | **Review of Systems** | 14 body-system checklist; carries forward from prior visit. |
| 4 | **Objective Assessment** | Vitals: **BP**, **HR**, **Temp**, **SpO₂**, **Respirations**, **Weight**, **Height**, **BMI**. |
| 5 | **Functional Status & ADLs** | Ambulation, ADL independence, fall risk. |
| 6 | **Comorbidities** | DM, PAD, CVI, CHF, lymphedema, smoking status. Feeds the billing AI and stage-aware ICD-10 resolver. |
| 7 | **Wound Assessment** | Etiology, staging, dimensions, **tissue percentages by wound**, **precise anatomical location** (editable), exudate, pain, infection signs, photo upload. See [Wound Assessment](./wound-assessment.md). |
| 8 | **Historic Measurements + Previous Treatments** *(merged)* | Combined view of prior measurements and prior interventions (offloading, compression, debridement history, prior grafts with UIN lookup). **ABI gate** activates here for any compression order. |
| 9 | **Interventions & Treatments** | Debridement type (`sharp` · `mechanical` · `enzymatic` · `autolytic`), dressing selection, AI-assisted draft available. |
| 10 | **Care Planning** | Goals, frequency, next-visit interval, plan-of-care dates. |
| 11 | **Orders, DME & Patient Education** | Scripts, DME, handout selection, teach-back (`Y/N`). |
| 12 | **Procedure & Supplies** *(unified)* | Graft SKU + UIN scanner, wastage calculation, **Generate Procedure Note**, auto-mapped to billing codes. |
| 13 | **Billing & Documentation** | Deterministic CPT autocode with AI fallback, E/M level, modifiers (`25`, `59`, `KX`, `JW`, `JZ`), POS code, **Medical Necessity Statement**, **BillingLine provenance** (deterministic vs. AI). |
| 14 | **LCD Audit & Provider Attestation** | LCD Navigator V2 final review — see [LCD Navigator](./lcd-navigator.md) — followed by ESIGN/UETA/CMS/HIPAA attestation. See [Sign Off](./sign-off.md). |

<Note>
Section numbering reflects the new V4 structure. Some training material may still reference the older 17-step flow — the section content is equivalent, but the grouping is tighter and the LCD audit is now ambient throughout, not only at the end.
</Note>

---

## Autosave and section drafts

The Visit Wizard auto-saves your work every **3 minutes**, and **each section saves independently through an edge function** as you advance. A timestamp confirms when the last save occurred. Draft visits appear on the **Fleet Calendar** with the status `Draft Saved`.

<Warning>
Closing the browser tab without saving may lose changes made since the last 3-minute autosave cycle. If you are about to navigate away mid-section, click **Save Draft** in the top toolbar first.
</Warning>

---

## Clinical history carry-forward

When you open a follow-up visit, V4 pre-populates the following from the prior visit:

- Review of Systems answers
- Comorbidities
- Allergies (synced with DoseSpot)
- Previous treatments
- Historic measurements (used to compute % area change)
- Care plan and next-visit interval

Always review pre-populated values — carry-forward is a starting point, not a substitute for re-assessment.

---

## LCD Navigator V2 (ambient)

The LCD ambient badge is visible at the top of every section. It refreshes on every save and tells you, in real time, whether the current encounter is on track to pass Medicare LCD review.

- **Green** — all checks pass.
- **Amber** — at least one item needs clinician action.
- **Red** — blocking item; the encounter cannot be signed until resolved.

Click the badge to open **Dojo tiles** with intervention guidance. Expand the drawer for the **copy bank** of 21 pre-written compliance statements for NPWT, Compression, and Offloading. Full guide: [LCD Navigator](./lcd-navigator.md).

---

## AI-assisted drafting

Several sections — notably **Wound Assessment**, **Interventions & Treatments**, and **Care Planning** — expose an **AI-assisted draft** button. The model drafts a clinical narrative from the structured data you have entered. You must:

1. Read the draft.
2. Edit anything that is not accurate.
3. Accept it on the **AI Disclaimer** prompt the first time you use AI drafting in a visit.

<Warning>
The AI Disclaimer must be acknowledged on each new encounter. Anything left in an AI draft becomes part of your signed note — review carefully before attestation.
</Warning>

---

## Procedure & Supplies (unified)

The unified Procedure & Supplies section is the single source of truth for what was done and what was used. From this section you can:

- Add procedures from a structured list.
- Scan UINs or enter graft SKUs and quantities; wastage is calculated automatically.
- Click **Generate Procedure Note** for a one-click procedure narrative.
- Review the per-intervention surface — anything documented here flows directly into the billing codes engine.

Inventory is deducted and a **tissue log** entry is written on save. Tissue logs feed the **chain of custody** and the billing **tissue-log ↔ claim drift validator**.

---

## On save — what fires automatically

Every save runs a deterministic pipeline:

| Trigger | Result |
|---|---|
| Section save | Edge function persists section draft, autosave timestamp updates, LCD audit refreshes. |
| Save full visit | Progress Note generated (with AI guardrails); **Medical Necessity Statement** generated. |
| Save full visit | Deterministic CPT autocode runs; if zero codes return, **AI fallback** engages. |
| Save full visit | **LCD audit** fires; ambient badge updates. |
| Procedure documented | **Tissue log** written; inventory deducted. |
| Visit signed | PDF generated with **retry + Sentry** error capture. |

---

## Visit Timer and GPS geofence

When the Visit Wizard opens for an in-person visit, the **Visit Timer** starts automatically. Medipyxis enforces a **25-minute GPS geofence**: the device must remain within 25 miles of the scheduled service address for the duration of in-person CPT codes. If the device leaves the geofence, the system logs the event and displays a warning banner.

<Compliance>
CMS requires that the rendering provider be physically present at the place of service for in-person procedure codes. The GPS geofence log is part of the encounter record and may be requested during a Medicare audit.
</Compliance>

---

## Work Offline

The **Work Offline** toggle (top toolbar) lets clinicians document in areas without a reliable internet connection — for example, during a home visit. Completed sections sync automatically when connectivity is restored. See [Work Offline](./work-offline.md).

---

## Provider Attestation

The final section captures the rendering provider's electronic signature under the ESIGN Act, UETA, CMS, and HIPAA disclosure standards. Only users with the `md`, `np`, or `medical_director` role may attest. After attestation, the note is locked; changes require an **Addendum** with a documented reason. See [Sign Off](./sign-off.md).

---

## Related modules

- [Wound Cockpit](./wound-cockpit.md) — the pre-visit and between-visit hub for each wound.
- [LCD Navigator V2](./lcd-navigator.md) — ambient compliance badge, Dojo tiles, and copy bank.
- [Sign Off](./sign-off.md) — provider attestation, addenda, and audit log.
- [Work Offline](./work-offline.md) — offline document and sync behavior.

## Related

Auto-rendered from `related:` in frontmatter.
