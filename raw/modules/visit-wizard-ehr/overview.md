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
tags: [visit-wizard, EHR, LCD, Medicare, autosave, customization, charting, templates]
---

# Visit Wizard overview

The Visit Wizard is Medipyxis's step-by-step wound care documentation flow. It guides clinicians through **17 sections** — from consent to provider attestation — so the note is complete, meets Medicare LCD documentation needs, and produces billing codes for review before it is signed.

For a section-by-section walkthrough, see [Walk through a visit in the Visit Wizard](/modules/visit-wizard-ehr/start-a-visit/).

---

## Where to open it

You can open a visit from:

- **Fleet Calendar** — tap the appointment, then **Start Visit** (**Resume Visit** or **Continue Visit** when documentation has already started).
- **Patient Management (My Clinical Day)** — open the scheduled visit.
- **All Patients → Appointment Management** — select the visit date, then click **Open Visit**.
- **Wound Cockpit** — choose a visit from **Pick a visit or start a new one** in the upper-right corner, then click **Open**.

When opened, the wizard is tied to the selected patient and appointment. See [How the Visit Wizard opens](/modules/visit-wizard-ehr/how-the-wizard-opens/).

---

## How it works

- **Mark as Complete** — finish each section with **Mark as Complete**. In the section navigator, completed sections are green with a checkmark, sections with a missing required item are red, and sections flagged for review are yellow.
- **Continuous autosave** — each field is saved as you complete it, so drafts survive network drops and device switches. The web app is online-only.
- **Warnings, not blocks** — most missing items raise a warning and let you continue. Before signing, a final review lists open gaps so you can resolve them or continue anyway.
- **Carry-forward** — information from earlier visits carries into sections such as Review of Systems, and **Pull Migration Data** brings forward data from a previous Medipyxis visit you choose.
- **Per-wound documentation** — interventions, care plans, procedures, and billing are documented separately for each active wound.
- **LCD support** — the [LCD Navigator](/modules/visit-wizard-ehr/lcd-navigator/) tracks Medicare LCD documentation requirements as you work, and Section 16 shows any remaining gaps.
- **Drafting help** — **Summarize prior treatments**, **Generate Procedure Note**, **Generate Draft** (care plan), and **Generate Compliance Note** create starting text from what you documented. You review and edit it; you can also keep your own procedure wording with **Use My Exact Procedure Note**.
- **Billing codes from documentation** — **Pull Codes** suggests ICD-10-CM, CPT, HCPCS, and E/M codes from your documentation for review before signing.

---

## The 17 sections

| # | Section | What it covers |
| --- | --- | --- |
| 1 | **Consent & Attestation** | Patient consent: electronic signature, signed paper consent, or verbal consent. Consent can also be collected beforehand from the patient chart. |
| 2 | **Patient Context / Demographics** | Date and place of service, clinician and supervising provider, chief complaint, and insurance (view only here — edit it on the patient's **Billing & Auth** page). |
| 2B | **Clinical History Review** | Allergies and medical history. |
| 3 | **Review of Systems** | Body-system review; carries forward from earlier visits. |
| 4 | **Objective Assessment** | Vitals, vascular and perfusion exam, edema and circumference measurements, ABI/TBI, vascular studies, HbA1c, vascular follow-up plan. |
| 5 | **Functional Status & ADLs** | Mobility, daily activities, fall risk. |
| 6 | **Comorbidities & Risk Factors** | Conditions that contribute to the wound or slow healing. |
| 7 | **Wound Assessment** | Etiology, staging, dimensions, tissue percentages, location, exudate, pain, infection signs, photos, and **Treating / Monitoring** status. See [Wound Assessment](/modules/visit-wizard-ehr/wound-assessment/). |
| 8 | **Previous Treatments** | Prior wound care, chronicity, medical necessity statement, supporting documents. |
| 9 | **Interventions & Treatments** | Interventions performed per wound, procedure note, contributing factors. |
| 10 | **Care Planning** | Per-wound follow-up interval, next visit date, treatment plan narrative. |
| 11 | **Orders & DME** | DME, labs, imaging, referrals, and home health orders, sent by fax or email. |
| 12 | **Patient Education** | Education library, care bundles, topics covered, patient understanding, next-visit goals. |
| 13 | **Procedures & Supplies** | Final review of the procedures from Section 9, missing fields, procedure and compliance notes, supplies. |
| 14 | **Current Medication** | Active prescriptions, medication status, allergies, reconciliation, **DoseSpot** e-prescribing. See [Prescribe with DoseSpot](/modules/visit-wizard-ehr/medication-dosespot/). |
| 15 | **Billing & Documentation** | Per-wound and visit-level codes, modifiers, and the CMS-1500 claim preview. |
| 16 | **LCD Audit & Review** | Documentation gaps against the applicable LCD. See [LCD Navigator](/modules/visit-wizard-ehr/lcd-navigator/). |
| 17 | **Provider Attestation** | Attestation, E/M time, final review, progress note preview, and **Sign & Lock**. See [Sign Off](/modules/visit-wizard-ehr/sign-off/). |

---

## Can I customize the charting?

Not per practice. The Visit Wizard's sections, fields, and templates are the same for every organization, so documentation follows one clinical structure.

If your practice needs a field or a change to support a clinical workflow, documentation quality, or compliance, send the request to your Medipyxis contact. Requests are reviewed, and changes that fit the clinical documentation structure can be added for everyone.

---

## Autosave and drafts

The Visit Wizard saves continuously — each field is written as you complete it — so you rarely need to save manually. A visit you leave before **Sign & Lock** stays an unsigned draft that you can resume on any device. To stop a visit you won't finish, cancel or delete the appointment — see [Stop or cancel a visit you started](/modules/visit-wizard-ehr/start-a-visit/#stop-or-cancel-a-visit-you-started).

Always review carried-forward and pulled values — they are a starting point, not a substitute for re-assessment.

---

## Sign & Lock

Section 17 records the rendering provider's attestation and electronic signature. After a final review and a preview of the progress note PDF, **Sign & Lock** finalizes the note. Later changes require an **Addendum** with a documented reason. The signed PDF is saved to the patient's **Progress Notes**, and the billing information goes to Billing Operations as a pre-filled CMS-1500 claim. See [Sign Off](/modules/visit-wizard-ehr/sign-off/).

<Compliance>
The encounter record is part of the audit trail and may be requested during a Medicare audit.
</Compliance>

---

## Offline documentation

The web Visit Wizard is online-only and saves continuously to the server. See [Document a visit offline](/modules/visit-wizard-ehr/work-offline/) for what this means for field visits.

---

## Related modules

- [Wound Cockpit](/modules/visit-wizard-ehr/wound-cockpit/) — the wound screen and between-visit hub.
- [How the Visit Wizard opens](/modules/visit-wizard-ehr/how-the-wizard-opens/) — what the wizard shows when you open a visit.
- [Note honesty guardrails](/modules/visit-wizard-ehr/note-honesty-guardrails/) — what Medipyxis will and will not add to your signed note.
- [LCD Navigator](/modules/visit-wizard-ehr/lcd-navigator/) — LCD documentation requirements as you work.
- [Sign Off](/modules/visit-wizard-ehr/sign-off/) — provider attestation, addenda, and audit log.
- [How your progress note is written](/modules/visit-wizard-ehr/progress-note/) — what the note prints, and the documentation checklist before it.
