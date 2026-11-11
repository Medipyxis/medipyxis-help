---
id: visit-wizard-ehr-overview
title: Visit Wizard overview
module: visit-wizard-ehr
audience: [clinician]
roles: [clinician, medical_director]
type: concept
estimated_minutes: 6
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-how-the-wizard-opens
  - visit-wizard-ehr-note-honesty-guardrails
  - visit-wizard-ehr-progress-note
  - visit-wizard-ehr-wound-assessment
  - visit-wizard-ehr-lcd-navigator
  - visit-wizard-ehr-wound-cockpit
  - visit-wizard-ehr-work-offline
  - visit-wizard-ehr-sign-off
  - visit-wizard-ehr-medication-dosespot
tags: [visit-wizard, EHR, LCD, Medicare, autosave, AI-drafting, ABI]
---

# Visit Wizard overview

The Visit Wizard is Medipyxis's step-by-step wound care documentation flow. It guides clinicians through **17 sections** — from consent to provider attestation — supporting documentation completeness, real-time LCD compliance, and clean billing-code generation before a note is signed.

---

## How the Visit Wizard fits into the workflow

The Visit Wizard opens from the **Fleet Calendar** (tap the appointment, then **Start Visit**), from the **Wound Cockpit**, or from the Patient Chart's Appointment Management card. All three behave the same way, so a live draft is resumed no matter which surface you came from. See [How the Visit Wizard opens](/modules/visit-wizard-ehr/how-the-wizard-opens/) for the route-on-arrival behavior.

When opened, the wizard loads the selected patient and appointment. You can still correct the date of service in Section 2. Start Visit on the Fleet Calendar opens the Visit Wizard for the appointment.

---

## How the Visit Wizard is structured

The Visit Wizard uses **17 sections** that mirror the structure auditors expect. Notable behaviors:

- **Continuous autosave** — each field is saved as you complete it, so drafts survive network drops and device switches. There is no separate offline mode in the web app.
- **Warn-and-proceed** — sections with incomplete fields show what is missing and let you continue; nothing stops documentation. If the service date does not match the appointment date, a Date check prompt at Sign & Lock asks you to switch to the appointment date or keep your date and give a reason.
- **Clinical history carry-forward** — comorbidities, allergies, prior treatments, and historic measurements pre-populate from the prior visit. A **Pull Migration Data** panel (**Find Prior Visits**) lists prior visits for this patient that were not auto-loaded, and lets you pull one into this visit.
- **LCD Navigator ambient badge** — real-time Medicare compliance status at the top of the wizard. See [LCD Navigator](/modules/visit-wizard-ehr/lcd-navigator/).
- **ABI documentation for compression** — the wizard flags a compression order that lacks a documented ankle-brachial index.
- **AI-assisted drafting** — generate section text from structured data, with guardrails.
- **Medical necessity in your own words** — the note prints the necessity narrative you wrote, and prompts you for one when it is missing. It is not generated for you. See [How your progress note is written](/modules/visit-wizard-ehr/progress-note/).
- **Pull Codes** — fills in billing codes from the documentation using a deterministic mapper. There is no AI code fallback.
- **LCD checks as you work** — the ambient badge re-checks the visit about a second after you stop typing, and saving re-runs the wound-level LCD audit shown in the Wound Cockpit.

---

## The 17 sections

Sections are numbered as the wizard shows them. Step 2b sits between Step 2 and Step 3.

- **1 Consent & Attestation** — reads the patient's consent record: consent to treatment and to bill (the signed consent includes a telehealth paragraph), HIPAA notice acknowledgment, photo consent, and the patient's e-signature.
- **2 Patient Context & Demographics** — date of service, place of service, provider, facility, Chief Complaint and Running HPI. Insurance is shown here; the **secondary payer is read-only**. Edit insurance on the patient's Billing & Auth page.
- **2b Clinical History Review** — allergies and medications are reviewed here.
- **3 Review of Systems (ROS)** — body-system checklist; carries forward from prior visit.
- **4 Objective Assessment** — vitals: **BP**, **HR**, **Temp**, **SpO₂**, **Respirations**, **Weight**, **Height**, **BMI**.
- **5 Functional Status & ADLs** — mobility level and activities of daily living (ADLs).
- **6 Comorbidities & Risk Factors** — diabetes, PAD, CVI, CHF, chronic kidney disease, smoking status and other healing risk factors. Feeds the billing engine.
- **7 Wound Assessment** — each wound carries a **Treating / Monitoring** status. See [Wound Assessment](/modules/visit-wizard-ehr/wound-assessment/).
- **8 Previous Treatments** — prior interventions (offloading, compression, debridement history, prior grafts).
- **9 Interventions & Treatments** — debridement type, dressing selection, ultrasonic therapy (MIST / Arobella), AI-assisted draft available. **Generate Procedure Note** is here.
- **10 Care Planning** — treatment goals progress, follow-up interval and Next Visit Date.
- **11 Orders & DME** — clinical orders and DME. DME is a vendor-fulfilled order. There is **no product picker** here; clinicians order and the item is fulfilled downstream.
- **12 Patient Education** — education topics covered, handouts from the Education Library, patient understanding, and next-visit education goals.
- **13 Procedure Supplies** — graft SKU + UIN and quantities. You can enter wastage units; they are recorded for inventory audit only and are not billed.
- **14 Current Medication** — medications and **DoseSpot** e-prescribing (pharmacy selection and prescription handled in the DoseSpot modal).
- **15 Billing & Documentation** — E/M level, modifiers, POS code, medical necessity narrative. **Pull Codes** fills in billing codes from the documentation. Staging codes here opens the documentation checklist. See [How your progress note is written](/modules/visit-wizard-ehr/progress-note/).
- **16 LCD Audit & Review** — LCD Navigator final review. See [LCD Navigator](/modules/visit-wizard-ehr/lcd-navigator/).
- **17 Provider Attestation** — ESIGN/UETA/CMS/HIPAA attestation and **Sign & Lock**. See [Sign Off](/modules/visit-wizard-ehr/sign-off/).

---

## Autosave and drafts

The Visit Wizard saves continuously — each field is written as you complete it — so you rarely need to save manually. Draft visits appear on the **Fleet Calendar** with a draft status and can be resumed on any device.

---

## Clinical history carry-forward

When you open a follow-up visit, the wizard pre-populates from the prior visit: Review of Systems, Comorbidities, Allergies, Previous treatments, Historic measurements (used to compute % area change), and the care plan. The **Pull Migration Data** panel lists prior visits for this patient that were not auto-loaded, and lets you pull one into this visit.

Always review pre-populated values — carry-forward is a starting point, not a substitute for re-assessment.

---

## LCD Navigator (ambient)

The LCD badge sits in the LCD Compliance Status header at the top of the wizard:

- **Green** — all checks pass.
- **Amber** — at least one item to review.
- **Grey** — still checking.

The badge never turns red and never blocks Sign & Lock. Click the badge to run the compliance check on demand. Full guide: [LCD Navigator](/modules/visit-wizard-ehr/lcd-navigator/).

---

## AI-assisted drafting

Several sections expose an **AI-assisted draft** button. The model drafts a clinical narrative from the structured data you have entered. Read the draft and edit anything inaccurate. You acknowledge the **AI Disclaimer** once, and again whenever a new version is published. It appears after you sign in, not per visit.

Anything left in an AI draft becomes part of your signed note, so review it carefully before attestation. The progress note itself prints only what you documented: where a field is blank it says "Not documented." rather than supplying a sentence. See [How your progress note is written](/modules/visit-wizard-ehr/progress-note/).

---

## Procedure Supplies

The Procedure Supplies section records the products, quantities and box UID/UIN used. You can enter wastage units; they are recorded for inventory audit only and are not billed. **Generate Procedure Note** is in Interventions & Treatments. Inventory is deducted and a **tissue log** entry is written when you press **Continue to Review**.

---

## Provider Attestation and Sign & Lock

The final section captures the rendering provider's electronic signature under the ESIGN Act, UETA, CMS, and HIPAA disclosure standards. Complete the visit with **Sign & Lock**; a **Go to Billing** prompt then appears. After sign-off, the note is locked and changes require an **Addendum** with a documented reason. See [Sign Off](/modules/visit-wizard-ehr/sign-off/).

---

## Offline documentation

The web Visit Wizard is online-only and saves continuously to the server; there is no Work Offline toggle. See [Document a visit offline](/modules/visit-wizard-ehr/work-offline/) for what this means for field visits.

---

## Related modules

- [Wound Cockpit](/modules/visit-wizard-ehr/wound-cockpit/) — the canonical wound screen and between-visit hub.
- [How the Visit Wizard opens](/modules/visit-wizard-ehr/how-the-wizard-opens/) — route-on-arrival: draft resume, fresh start, and the signed-visit screen.
- [Note honesty guardrails](/modules/visit-wizard-ehr/note-honesty-guardrails/) — what Medipyxis will and will not add to your signed note.
- [LCD Navigator](/modules/visit-wizard-ehr/lcd-navigator/) — the LCD Compliance Status bar, badge, and step 16 review.
- [Sign Off](/modules/visit-wizard-ehr/sign-off/) — provider attestation and addenda.
- [How your progress note is written](/modules/visit-wizard-ehr/progress-note/) — what the note prints, and the documentation checklist before it.
- [Document a visit offline](/modules/visit-wizard-ehr/work-offline/) — how offline field visits are handled.
