---
id: visit-wizard-ehr-start-a-visit
title: Walk through a visit in the Visit Wizard V4
module: visit-wizard-ehr
audience: [clinician]
roles: [nurse, np, md]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-05-10
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-wound-cockpit
  - visit-wizard-ehr-wound-assessment
  - visit-wizard-ehr-lcd-navigator
  - visit-wizard-ehr-work-offline
  - visit-wizard-ehr-sign-off
prerequisites:
  - visit-wizard-ehr-overview
tags: [visit-wizard, V4, autosave, ABI, AI-drafting, procedure-supplies]
---

# Walk through a visit in the Visit Wizard V4

Open the Visit Wizard V4 from the Fleet Calendar or the Wound Cockpit, confirm the patient context, and work the 14 Medicare-LCD-blocking sections end-to-end. This guide covers the full happy path, plus the new V4 behaviors: 3-minute autosave, clinical history carry-forward, the LCD ambient badge, the ABI gate, unified Procedure & Supplies, AI-assisted drafting, and Medical Necessity Statement.

## Before you start

- Your appointment is in `Scheduled` status on the **Fleet Calendar**, or you opened the wound from the **Wound Cockpit**.
- Your device has location services enabled (required for the GPS geofence on in-person visits).
- For follow-up visits, review the Wound Cockpit "Where this wound is at" panel so you know what carries forward — see [Wound Cockpit](./wound-cockpit.md).
- If you may lose connectivity, review [Work Offline](./work-offline.md) before opening the wizard.

---

## 1. Open the wizard

### From the Fleet Calendar

1. **Navigate to Fleet Calendar.** Click **Fleet Calendar** in the sidebar. The calendar opens in Day view by default, with swim lanes per provider.

   ![Fleet Calendar patient header showing the scheduled appointment](../../assets/visit-wizard/01_patient_header.png)

   *The patient header card on the Fleet Calendar appointment tile.*

2. **Tap the appointment tile.** A detail popover appears with the patient name, appointment type, date, and time.

3. **Click Start Visit.** Specialty routing sends wound care patients to the **Wound Cockpit** and primary care patients to the **PCP Cockpit**.

### From the Wound Cockpit

1. From the patient chart, open the **Wound Cockpit** for the wound you intend to treat.
2. Click **Start Visit** (or **Continue Visit** if a draft exists). The Visit Wizard opens to section 1 — or to the last unsaved section if you are resuming a draft.

The **Visit Timer** starts automatically and appears in the top toolbar, alongside the **LCD ambient badge**.

   ![Wound Cockpit view accessible from the patient tile](../../assets/visit-wizard/02_wound_cockpit.png)

   *The Wound Cockpit panel — pre-visit snapshot of the active wound.*

---

## 2. Section 1 — Consent & Attestation

1. **Present the HIPAA notice to the patient.** The full HIPAA privacy notice is displayed on screen.
2. **Toggle Telehealth Consent** if the visit is being conducted via telehealth.
3. **Collect patient e-signature.** Hand the device to the patient or use the signature pad. Click **Confirm Signature**.
4. Click **Next**.

---

## 3. Section 2 — Patient Context

1. **Select the Visit Type.** Choose `Initial`, `Follow-up`, `Post-op`, or `Re-eval`.
2. **Enter the Reason for Visit.** Type a brief clinical summary (for example, "Evaluation and treatment of right heel diabetic foot ulcer").
3. **Review the Allergies card.** Allergies pre-populate from prior visits and sync with DoseSpot. Add or update if anything changed since the last visit.
4. Click **Next**.

   ![Visit Wizard section list — top half](../../assets/visit-wizard/05_visit_wizard_steps_top.png)

   *Section navigator. The active section is highlighted; completed sections show a checkmark.*

---

## 4. Sections 3–6 — Clinical baseline

| Section | What to enter |
|---|---|
| **3. Review of Systems** | 14-system checklist. Pre-populated from the prior visit; review each system and update as needed. |
| **4. Objective Assessment** | Vitals: BP, HR, Temp, SpO₂, Respirations, Weight, Height, BMI. |
| **5. Functional Status & ADLs** | Ambulation, ADL independence, fall risk. |
| **6. Comorbidities** | DM, PAD, CVI, CHF, lymphedema, smoking status. These feed the billing AI and the stage-aware ICD-10 resolver. |

Each section saves to the server when you click **Next**. The autosave timestamp updates and the LCD ambient badge refreshes.

---

## 5. Section 7 — Wound Assessment

1. **Confirm wound etiology and staging.** Stage drives the ICD-10 selection downstream.
2. **Measure today.** Enter **Length (cm)**, **Width (cm)**, and **Depth (cm)**. Photo upload is required if your facility policy mandates it.
3. **Set tissue percentages by wound.** Granulation / Slough / Eschar / Epithelial percentages must sum to 100%.
4. **Confirm the precise anatomical location.** The location field is editable — pick from the dropdown or type the specific area (for example, `Right lateral malleolus`).
5. Document exudate, pain, and infection signs.
6. Click **Next**.

   See [Wound Assessment](./wound-assessment.md) for the full reference.

---

## 6. Section 8 — Historic Measurements + Previous Treatments

This merged view replaces the prior two separate sections. It shows the prior measurements alongside prior interventions so you can decide on the next step in one screen.

1. Review historic measurements; % area change is computed automatically against today's measurement.
2. Add or update prior treatments — offloading, compression, debridement history, prior grafts (use **Scan UIN** for the last graft applied).
3. **ABI gate.** If you intend to order compression at any stage of this visit, the wizard requires an **ankle-brachial index** value before compression can be selected. Enter the most recent ABI, or order one before proceeding.

   <Warning>
   Compression therapy without a documented ABI is a top LCD denial reason. The ABI gate blocks the order, not just the documentation — you cannot advance to a compression intervention until the value is on file.
   </Warning>

4. Click **Next**.

---

## 7. Section 9 — Interventions & Treatments

1. **Select debridement type** if performed: `sharp`, `mechanical`, `enzymatic`, or `autolytic`.
2. **Choose dressing(s)** from the catalog.
3. **AI-assisted draft.** Click **AI draft** to generate a narrative from the structured data you just entered. Edit the text — anything left in the draft becomes part of your signed note.

   <Note>
   The first time you use AI drafting in a visit, you will be asked to acknowledge the **AI Disclaimer**. The disclaimer documents that the AI output is a draft only and that the rendering provider is responsible for the final content.
   </Note>

4. Click **Next**.

---

## 8. Section 10 — Care Planning

1. Enter goals, visit frequency, and the **next-visit interval**.
2. Set plan-of-care dates — these satisfy LCD checklist item **Plan-of-care dates**.
3. Click **Next**.

---

## 9. Section 11 — Orders, DME & Patient Education

1. Add scripts and DME orders. eRx scripts route through DoseSpot — see the eRx module.
2. Select patient education handouts.
3. Toggle **Teach-back documented** (`Y` / `N`).
4. Click **Next**.

---

## 10. Section 12 — Procedure & Supplies (unified)

This is the single source of truth for procedures and supplies.

1. **Add procedures** from the structured list.
2. **Scan UINs or enter graft SKUs and quantities.** Wastage is calculated automatically and shown on the line item.
3. Click **Generate Procedure Note** for a one-click procedure narrative; review and edit.
4. Confirm the per-intervention surface — every item here flows into the billing codes engine.

   ![Section navigator — lower half](../../assets/visit-wizard/04_visit_wizard_steps_bottom.png)

   *The lower portion of the section navigator.*

5. Click **Next**.

On save, a **tissue log** entry is written and inventory is deducted automatically.

---

## 11. Section 13 — Billing & Documentation

1. Review the **Medical Necessity Statement**. It is auto-generated from sections 2, 6, 7, 8, and 12. Edit anything that doesn't match what you did.
2. Review the **CPT autocode** output. The deterministic engine runs first; if it returns zero rows, the **AI fallback** engages and the BillingLine provenance shows `AI` for the relevant lines.
3. Verify E/M level, modifiers (`25`, `59`, `KX`, `JW`, `JZ`), and **POS code**.
4. **Read the BillingLine provenance panel.** Each line shows `Deterministic` or `AI`. Spot-check AI-sourced lines before continuing.
5. Click **Next**.

   <Compliance>
   AI fallback fires when no deterministic rule matched. Billers will see the same provenance in the Work Queue and may request corrections — verify any `AI` line is supported by your documentation before attestation.
   </Compliance>

---

## 12. Section 14 — LCD Audit & Provider Attestation

1. The **LCD ambient badge** must be **green** at this point. If amber or red items remain, the Navigator shows links back to the section where the missing data must be entered. See [LCD Navigator](./lcd-navigator.md).

   ![LCD Audit & Review screen](../../assets/visit-wizard/09_lcd_audit_review.png)

   *Step 14 opens the LCD Navigator V2 final review. Items requiring action are highlighted in amber.*

2. Resolve any remaining amber items by jumping to the linked section, fixing the data, and returning.
3. Once all items are green, complete **Provider Attestation**: read the attestation sentence, sign on the signature pad, and click **Attest & Sign**.

The note is now locked. PDF generation runs in the background with retry + Sentry error capture — see [Sign Off](./sign-off.md) for what to do if PDF fails.

---

## Saving and resuming

- **Autosave** runs every 3 minutes. The top-bar timestamp confirms the last save.
- **Save Draft** (top toolbar) writes the current section immediately and closes the wizard. The appointment moves to `Draft Saved` on the Fleet Calendar.
- **Resume** by tapping the same appointment tile (or opening the Wound Cockpit and clicking **Continue Visit**). You land on the last unsaved section.

<Tip>
If you switch to offline mode mid-visit, autosave continues to the local outbox. Once you regain connectivity the outbox sync engine pushes pending sections in order — see [Work Offline](./work-offline.md).
</Tip>

---

## Result

You completed all 14 sections, the LCD ambient badge is green, the Medical Necessity Statement and billing codes are reviewed, and the rendering provider has attested. The encounter is locked, the PDF is generated, the tissue log and inventory are updated, and the claim is queued for the Billing Work Queue's **New Claims gate**.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **Start Visit** button is grayed out | Appointment is in `Canceled` or `No Show` status | Update the appointment status to `Scheduled` before starting. |
| Visit Timer shows "GPS unavailable" | Location services are disabled on the device | Enable location permissions for the browser or the Medipyxis app in device settings. |
| Wizard opens but shows the wrong patient | Tapped the wrong appointment tile | Click **Save Draft** if prompted, then reopen from the correct tile. |
| Compression option is disabled in section 9 | **ABI gate** — no ABI value on file | Enter ABI in section 8 (Historic Measurements + Previous Treatments) or order one. |
| LCD ambient badge stays amber after a save | One or more checklist items still need data | Click the badge to open the Navigator; follow the jump-back link to the offending section. |
| BillingLine shows `AI` for unexpected lines | Deterministic engine returned zero rows for that scenario | Verify the line is supported by your documentation; correct in section 12 or 13. |
| PDF generation fails after attestation | Transient downstream error | The system retries automatically; if still failing, the Sentry event ID is shown — share it with support. See [Sign Off](./sign-off.md). |

## Related

Auto-rendered from `related:` in frontmatter.
