---
id: visit-wizard-ehr-start-a-visit
title: Walk through a visit in the Visit Wizard
module: visit-wizard-ehr
audience: [clinician]
roles: [clinician, medical_director]
type: how-to
estimated_minutes: 20
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-wound-cockpit
  - visit-wizard-ehr-wound-assessment
  - visit-wizard-ehr-lcd-navigator
  - visit-wizard-ehr-sign-off
  - visit-wizard-ehr-medication-dosespot
prerequisites:
  - visit-wizard-ehr-overview
tags: [visit-wizard, cancel-visit, consent, pull-migration-data, DoseSpot, procedures-supplies, billing, sign-and-lock]
---

# Walk through a visit in the Visit Wizard

Open the visit, work through the Visit Wizard's 17 sections, and finish with **Sign & Lock**. To stop a visit you already started and do not intend to finish, cancel or delete the appointment — see [Stop or cancel a visit you started](#stop-or-cancel-a-visit-you-started).

## Before you start

- **Have a way into the visit.** You can open it from any of these:
  - **Fleet Calendar** — open the scheduled appointment.
  - **Patient Management (My Clinical Day)** — open the scheduled visit.
  - **All Patients → Appointment Management** — select the visit date, then click **Open Visit**.
  - **Wound Cockpit** — use **Pick a visit or start a new one** in the upper-right corner.
- **Turn on location services** on your device. GPS access is required for geofence verification on in-person visits.
- **For a follow-up visit, review the wound's last visit first.** Open the **Wound Cockpit**, select the wound case, click **Details**, and review the overview of the most recent visit. See [Wound Cockpit](./wound-cockpit.md).

Each section has a **Mark as Complete** button. In the section navigator, completed sections are green with a checkmark; sections that still need documentation or review are red.

---

## 1. Open the wizard

### From the Fleet Calendar

1. Tap the appointment tile. A popover shows the patient's name, appointment type, date, and time.
2. Click **Start Visit** at the bottom of the popover. The Visit Wizard opens for that patient and appointment.

### From the Wound Cockpit

1. Open the patient's **Wound Cockpit**.
2. In the upper-right corner, open the dropdown **Pick a visit or start a new one**.
3. Select the scheduled visit, or choose to start a new one.
4. Click **Open**. The Visit Wizard opens, ready to begin or resume documentation.

---

## 2. Pull Migration Data (top toolbar)

**Pull Migration Data** carries forward information documented at the patient's previous Medipyxis visits, so you don't re-enter it.

1. Click **Pull Migration Data** in the wizard's top toolbar.
2. A window lists the patient's previous visits by date, with a summary of the sections that contain data.
3. Pick the most recent or most relevant visit and click **Pull this visit**.

Pull Migration Data only uses visits documented in Medipyxis. It does not import records from another EHR.

<Tip>
Pulled data is a starting point, not a re-assessment. Review every pulled value against the patient in front of you before you sign.
</Tip>

---

## 3. Section 1 — Consent & Attestation

Use this section to obtain, record, or review the patient's consent for wound care services. The consent form covers:

- **General consent for treatment** — wound care evaluation, treatment, and procedures.
- **HIPAA notice of privacy practices.**
- **Wound photography and imaging consent.**
- **Insurance assignment of benefits.**
- **Financial responsibility.**
- **Telehealth consent**, when the visit is virtual.

Give the patient time to read the consent before they sign or authorize it.

Consent can also be captured before the visit, from the patient's chart — see [Capture consent from the patient chart](#capture-consent-from-the-patient-chart) below.

### Capture consent in the Visit Wizard

1. Review the patient's existing consent, if there is one, and decide whether a new consent is needed for this encounter.
2. Choose how to capture it:
   - **Electronic signature** — open the consent form, hand the patient your device to review it, and have them sign on screen. Confirm and save.
   - **Signed paper consent** — record the paper consent, upload the signed document, and save.
   - **Verbal consent** — complete the documentation steps and save.
3. Open the signed document, when there is one, to check it was recorded correctly.
4. Click **Mark as Complete**.

### Capture consent from the patient chart

You can collect consent before the visit without opening the Visit Wizard.

1. Click **All Patients** in the left menu, find the patient, and click **View** on their card.
2. On the **Clinical Overview** tab, find the **Consent** section. It shows the current consent and its date.
3. Choose a method:
   - **Re-sign** — the patient reviews and signs electronically on your device.
   - **Record a paper consent** — document and upload a consent the patient already signed on paper.
   - **Send Consent SMS** — confirm the patient's mobile number and send a link they open on their phone to review and sign. Check the Consent section afterwards to confirm it was received.
   - **Verbal by phone** — record consent given over the phone.
4. Click **Open signed document** to view the recorded consent.

<Warning>
Record verbal consent only where your organization's policies and the law allow it for that treatment. General wound care consent does not replace separate informed consent that some advanced or invasive procedures require.
</Warning>

---

## 4. Section 2 — Patient Context / Demographics

1. **Select the Visit Type:** Initial, Follow-up, Post-op, or Re-eval.
2. **Enter the Chief Complaint** — a brief summary of the reason for the visit (for example, "Evaluation and treatment of right heel diabetic foot ulcer").
3. **Review insurance.** Coverage is shown for reference and the secondary payer is read-only. Make insurance changes on the patient's **Insurance** tab, not in the wizard.
4. Click **Mark as Complete**.

Allergies are reviewed in the next section, **2B — Clinical History Review**, together with the patient's medical history.

---

## 5. Sections 3–6 — Clinical baseline

These sections record the patient's baseline: review of systems, objective findings, functional status, and the conditions that affect wound healing. They support the treatment plan and the medical necessity documentation that Medicare LCDs ask for.

| Section | What to document |
|---|---|
| **3. Review of Systems** | The body-system review with relevant symptoms and findings. Update anything carried forward from earlier visits. |
| **4. Objective Assessment** | Vital signs, vascular and perfusion exam, edema, ankle and calf circumference, ABI/TBI, vascular ultrasound results, HbA1c when applicable, and the vascular follow-up plan. |
| **5. Functional Status & ADLs** | Mobility, ambulation, independence with daily activities, fall risk, and limitations that affect wound care. |
| **6. Comorbidities & Risk Factors** | Conditions that contribute to the wound or slow healing — for example diabetes, peripheral arterial disease, chronic venous insufficiency, heart failure, lymphedema, nutritional deficiencies, and smoking status. |

### What Section 4 — Objective Assessment covers

1. **Vital signs** — blood pressure, heart rate, temperature, respiratory rate, oxygen saturation, height, weight, and BMI.
2. **Vascular and perfusion exam** — peripheral pulses, perfusion, and signs of arterial or venous insufficiency.
3. **Edema** — the affected limb and location, severity, and pitting or non-pitting. Measure **ankle and calf circumference** for a baseline and repeat it at follow-ups to track the response to treatment such as compression.
4. **ABI / TBI** — enter results from earlier vascular studies or from measurements taken at the visit. Use them to decide whether compression is appropriate.
5. **Vascular ultrasound and duplex results** — venous or arterial duplex findings, reflux, obstruction, or peripheral arterial disease.
6. **Vascular management and follow-up plan** — choose all that apply and add details:
   - Referral ordered
   - Already under vascular care
   - Further assessment planned
   - Intervention completed
   - Referral or intervention deferred (clinical judgement)
   - Patient declined, or an access barrier — use this when the patient chose not to proceed or could not access care. For a clinical decision that intervention is inappropriate, use "deferred".
7. **HbA1c** — for patients with diabetes, the most recent result, as part of assessing glycemic control.

<Note>
ABI/TBI results belong in Section 4 — Objective Assessment, not in Section 8 — Previous Treatments. Completing these fields supports LCD documentation but does not by itself meet every LCD requirement; check the criteria for the wound type, treatment, and your Medicare Administrative Contractor.
</Note>

Mark each section complete once it is documented.

---

## 6. Section 7 — Wound Assessment

1. **Confirm wound etiology and staging.** Stage drives the ICD-10 selection downstream.
2. **Set the wound's Treating / Monitoring status.** A wound marked **Monitoring** carries a yellow pill and relaxes some required fields for that visit; flip it back to **Treating** at any time.
3. **Measure today.** Enter **Length (cm)**, **Width (cm)**, and **Depth (cm)**. Photo upload is required if your facility policy mandates it.
4. **Set tissue percentages by wound.** Granulation / Slough / Necrotic / Epithelial / Eschar must sum to 100%.
5. **Confirm the precise anatomical location.** The location field is editable — pick from the dropdown or type the specific area (for example, `Right lateral malleolus`).
6. Document exudate, pain, and infection signs.
7. Click **Mark as Complete**.

See [Wound Assessment](./wound-assessment.md) for the full reference.

---

## 7. Section 8 — Previous Treatments

This section records the wound care the patient has already had. It is the history that supports medical necessity for advanced wound therapies.

1. **Add previous treatments.** Click **Add previous treatments** and record offloading, compression, debridement, earlier skin substitute applications, and other conservative care — including treatment from outside providers.
2. **Document chronicity.** Record how long the wound has been present (for example, at least four weeks) and the standard-of-care treatments already tried.
3. **Write the medical necessity statement.** Click **Summarize prior treatments** for a starting draft, or type it in the **Medical Necessity Note** field. Explain why advanced treatment is indicated, including how the patient responded to earlier treatment.
4. **Attach supporting documents**, such as earlier medical records or referral letters, when you have them.
5. Click **Mark as Complete**.

---

## 8. Section 9 — Interventions & Treatments

Document every wound-specific intervention performed at this visit. What you enter here builds the procedure note and feeds billing.

### Document each intervention

1. **Select the wound.** In **Wound-Specific Documentation**, use the wound dropdown if the patient has more than one active wound. Document each wound separately, and finish one wound before switching to the next.
2. **Add an intervention.** Under **Conservative Treatments Performed Today**, click **Add Your First Intervention** (or **Add Intervention**) and choose what you did. The list covers debridement (sharp, enzymatic, mechanical, autolytic, chemical), negative pressure wound therapy (NPWT), topical antimicrobials, wound irrigation, advanced dressings, offloading and pressure relief, compression therapy, infection management, nutritional support and other adjuncts, patient and caregiver education, graft and skin substitute application, molecular therapy, and ultrasonic therapy (for example MIST or Arobella).

3. **Complete the intervention's fields.** Each intervention has its own required fields. They flow into the procedure note, and billable procedures are linked to their CPT code for review in Billing & Documentation. Click **Done** to save.
4. Repeat for each intervention on the same wound.

### Generate the procedure note

1. In **Interventions Performed Today**, click **Generate Procedure Note**.
2. Review the narrative for accuracy against the care you actually provided.

To use your own wording instead, enter it in the intervention's **Notes** field and check **Use My Exact Procedure Note**. Your note is kept exactly as written and is not regenerated.

### Address contributing factors

In **Contributing Factors**, set a status for each factor — Nutrition, Infection, Glucose control, Perfusion, and Other underlying conditions:

| Status | What to document |
|---|---|
| **Addressed** | The factor was assessed or managed at this visit. Optionally note what you did or recommended. |
| **Pending / Follow-Up Required** | The assessment, intervention, or follow-up that is planned. |
| **Not Applicable** | A brief reason the factor does not apply. |

Click **Mark as Complete** when every intervention and contributing factor is documented.

<Note>
Selecting a procedure does not mean it meets every billing requirement. You remain responsible for reviewing all procedure documentation before you sign.
</Note>

---

## 9. Section 10 — Care Planning

Each active wound needs its own care plan.

1. **Select the wound** in **Wound-Specific Care Planning**. Finish one wound's plan before moving to the next.
2. **Set the Follow-Up Interval** (for example, weekly). The **Next Visit Date** fills in automatically — check it matches the schedule you intend.
3. **Write the Treatment Plan Narrative.** As applicable, cover the wound care regimen and dressing changes, interventions done today and planned next, healing progress and goals, management of contributing factors, care coordination (referrals, studies, home health or caregiver instructions), and the follow-up plan. Make clear what was done today versus what is planned. You can:
   - **Dictate** — click the microphone in the upper-right corner of the field.
   - **Generate Draft** — create a draft from the visit's documentation, then edit it.
   - **Type it** directly in the field.
4. Click **Mark as Complete**.

A generated draft does not replace your clinical judgement — review and edit it before you sign.

---

## 10. Section 11 — Orders & DME

Create and send orders for DME and wound care supplies, labs, imaging, specialist referrals, and home health. Orders go to the recipient by fax or email.

1. **Choose the order type** from the tabs:
   - **DME** — equipment, wound care supplies, and dressings.
   - **Labs** — laboratory tests.
   - **Imaging** — diagnostic imaging.
   - **Referrals** — specialists and other providers.
   - **Home Health** — orders, wound care instructions, and skilled nursing plans for the patient's home health agency.
2. **Select the recipient.** In **Select Recipient**, search for the vendor, specialist, facility, or agency. If a home health agency is missing, click **Add home health agency**. Recipients come from your CRM, which also fills in their name, contact, fax number, and email.
3. **Complete the order form** for that order type, and check the recipient's details.
4. **Send it.** Choose **Send via Fax** or **Send via Email**, confirm, and check the transmission status to make sure it was sent.
5. Use **Show Previous Orders** to review earlier orders, then click **Mark as Complete**.

Sending a DME order starts the request with the vendor; the vendor or agency handles fulfillment and delivery.

---

## 11. Section 12 — Patient Education

The **Patient Education Management** area has three tabs: **Assigned Materials**, **Education Library**, and **Care Bundles**.

1. **Find materials.** In **Education Library**, search or filter by category and language, and click **Preview** to read a material. Select materials to assign them to the patient.
2. **Use a care bundle.** In **Care Bundles**, pick a bundle that fits the patient's condition (for example, *Diabetic Wound Care and Prevention*, *Arterial Ulcer Care*, *General Wound Care Basics*, *Infection Warning Signs*, *Caregiver Education and Instructions*, or *Activity Guidelines*). **Preview** it, then **Print Bundle** as a take-home handout and/or **Assign Bundle** to the patient.
3. **Document what you taught.** Complete **Education Topics Covered Today**. Type it or use **Voice Intake**. Assigning a material does not replace documenting what you actually discussed.
4. **Document understanding.** In **Patient Understanding Assessment**, record how well the patient or caregiver understood — for example, whether they explained it back in their own words or demonstrated the technique, and any barriers to learning.
5. **Set Next Visit Education Goals** — what to reinforce at the next visit.
6. Mark the section complete. It then shows **Patient Education Completed**; click **Edit Again** to make changes.

---

## 12. Section 13 — Procedures & Supplies

This section is the final review of the procedures you documented in Section 9 before they go into the progress note and billing. You review and complete them here; you don't re-enter them.

1. **Review the procedure entries.** **Wound-Specific Procedure Documentation** shows the active wound; **Procedure Entries** lists the interventions from Section 9 with their supplies. Review each wound separately.
2. **Check for missing fields.** In **Procedure Documentation & Supplies**, choose a procedure under **Select Intervention Performed Today**. Details sync from Section 9 automatically (shown by the **Auto-Sync** indicator). Review any alerts about missing documentation — for sharp debridement, for example, tissue level, area debrided (cm²), hemostasis method, complications, and the compliance narrative. A recommendation such as an after-treatment photo may also appear.
3. **Complete the procedure details.** Open **Review Procedure Documentation**. It carries in the wound assessment (Section 7) and the intervention details (Section 9). Confirm the **Procedure Summary** and fill in any missing fields — for sharp debridement: the deepest **Tissue Level** removed, **Area (cm²)**, **Hemostasis Method**, and **Complications** (or None).
4. **Review the procedure note.** **Procedure Note (Auto-generated)** carries the narrative from Section 9. Edit it, or add detail with **Voice Intake**. If you used **Use My Exact Procedure Note** in Section 9, your wording is carried forward as written.
5. **Optional — Compliance narrative.** Click **Generate Compliance Note** for an additional structured narrative, and review it. You can leave this blank if your procedure note already documents the procedure fully.
6. Review the supplies, check **I have reviewed the procedure documentation** where shown, and click **Mark as Complete**.

Some fields are recommended rather than required and won't stop you finishing the visit. Address any gaps needed for an accurate record, coding, and billing.

---

## 13. Section 14 — Current Medication / Medication Management

1. **Review Active Prescriptions.** Prescriptions sent through DoseSpot appear here once they sync; click **Refresh** if a new one hasn't appeared yet (it can take a few minutes). Check them before adding medications to avoid duplicates.
2. **Select the Medication Status** for this visit:
   - **Patient takes no medications, and none are needed for this visit**, or
   - **All medications reviewed in facility EMR for this current visit** — when the facility manages the medication list in its own EMR. This is recorded in the progress note with your name and the date, and you can still document changes or prescribe.
3. **Review Patient Allergies** before prescribing. Allergies come from the patient's medical history. To add or change one, update it in the patient's chart.
4. **Reconcile Active Medications (from chart).** Mark what was discontinued or changed, and add anything missing.
5. **Add or prescribe:**
   - **Add a medication manually** to document it in the patient's record (name, dose, route, frequency).
   - **Prescribe electronically** through the built-in DoseSpot workflow: choose the medication, enter the prescription details and refills, select the patient's pharmacy, review, and send. See [Prescribe with DoseSpot](./medication-dosespot.md).
6. **Review Changes This Visit and Pharmacy Order**, including any pending or queued pharmacy orders.
7. Click **Mark as Complete** if the section isn't already complete.

<Warning>
Adding a medication manually records it in the chart. It does not send a prescription to a pharmacy — only the DoseSpot workflow does that.
</Warning>

---

## 14. Section 15 — Billing & Documentation

This section builds the visit's billing codes from your documentation so you can review them before signing. After you sign, the billing information goes to Billing Operations as a pre-filled CMS-1500 claim.

1. **Pull the codes.** In **Billing — Per-Wound Review**, click **Pull Codes**. Medipyxis uses your clinical history, comorbidities, wound assessment, interventions, and procedure documentation to suggest ICD-10-CM, CPT, HCPCS, and E/M codes.
2. **Review each wound's codes.** Select the wound and check that the procedure codes match what was documented (procedure type, location, tissue depth, area) and that the diagnoses are supported. Click **Add manually** for a missing code, or **Mark: No procedure** if none was billable. Click **Codes Reviewed**.
3. **Review visit-level codes.** In **Visit-Level Codes**, check the E/M code against medical decision-making or qualifying total time (excluding time spent on separately billed procedures) and any visit-level supplies. Click **Add manually** or **Mark: No visit-level codes** as needed, then **Codes Reviewed**.
4. **Verify diagnoses and modifiers.** Confirm the primary wound diagnosis reflects etiology, location, laterality, and severity or stage, and that each additional diagnosis is supported. Add or correct modifiers as the payer requires — a separately identifiable E/M on the same day as a procedure may need modifier 25.
5. **Check the Claim Preview.** It shows **Box 21 — Diagnoses** and **Box 24 — Service Lines** as they will appear on the CMS-1500. If something is wrong, fix the documentation in its section, then click **Regenerate** or **Regenerate all**.
6. Click **Mark as Complete**.

Automated coding supports you and your biller; it does not replace coding review or payer requirements.

---

## 15. Section 16 — LCD Audit & Review

This section checks your documentation against the applicable Medicare Local Coverage Determination (LCD) and shows any gaps before you finalize the visit. The [LCD Navigator](./lcd-navigator.md) tracks the same requirements as you work through the wizard.

1. **Review the coverage context** at the top. If no local policy applies, it shows **General Medicare standard applies**.
2. **Check the Wound Context** carried from Section 7 (dimensions, area, tissue, tunneling, undermining). A warning lists any missing fields.
3. **Review Per-Wound Findings** — for each wound, gaps such as prior standard of care, current and baseline measurements, management of contributing factors, vascular assessment, and the rationale for advanced therapy.
4. **Fix the gaps in their own sections**, then come back to re-check:
   - Measurements → Section 7 — Wound Assessment
   - Prior conservative care or medical necessity → Section 8 — Previous Treatments
   - Treatment details or contributing factors → Section 9 — Interventions & Treatments
   - ABI/TBI, vascular findings, or edema → Section 4 — Objective Assessment
   - Comorbidities and risk factors → Section 6 — Comorbidities & Risk Factors
5. When the findings are reviewed, continue to Section 17.

The findings here are read-only — correct the information in the section it comes from. A completed audit does not guarantee coverage, prior authorization, or payment.

---

## 16. Section 17 — Provider Attestation and Sign & Lock

1. **Complete the attestation.** Your name and NPI fill in automatically. Select your **Professional Title**, read the attestation statement, check the acknowledgment, and apply your electronic signature.
2. **Enter Total E/M Time (Minutes)** if you are coding the E/M level by time. Include only qualifying time you personally spent on the date of service, and exclude time spent on separately billed procedures.
3. Click **Complete Provider Attestation**, then **Mark as Complete**.
4. **Run the final review.** Check the section navigator, then click **Continue Review**. If documentation gaps remain, a window lists them:
   - **Resolve This** takes you to the section to fix it; click **Continue Review** again afterwards.
   - **Continue Anyway** proceeds when you have decided the open items don't prevent finalizing. It does not make the documentation meet billing or LCD requirements.
5. **Review the Wound Care Progress Note Preview** — the PDF exactly as it will be finalized. If something needs correcting, go back to that section before signing.
6. Click **Continue**, then **Sign & Lock**.

Once signed, the note is the finalized record for the visit; later changes need an addendum. See [Sign Off](./sign-off.md).

---

## Stop or cancel a visit you started

If you leave the Visit Wizard before **Sign & Lock**, the visit stays saved as an unsigned draft.

If you won't complete the visit, update the appointment so it isn't left as an unfinished draft:

1. Open the patient's appointment card.
2. Select **Cancel Appointment** or **Delete Appointment**, as appropriate.
3. Enter the reason for canceling the visit.
4. If the patient was not seen, mark the appointment **Not Seen** and choose the reason, such as *Patient Unavailable* or *Patient Refused*.

Closing the wizard on its own does not cancel the visit.

---

## Saving and resuming

- **Continuous autosave** — each field is saved as you complete it, so drafts survive network drops and device switches. The web wizard is online-only.
- **Resume** from the same appointment on the Fleet Calendar, or from the Wound Cockpit's **Pick a visit or start a new one** dropdown. You pick up where you left off, on any device.

---

## Result

All 17 sections are complete, the codes and LCD findings are reviewed, and the visit is signed and locked. The finalized progress note PDF is in the patient's **Progress Notes**, and the billing information is in Billing Operations as a pre-filled CMS-1500 claim for your biller.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **Start Visit** is grayed out | The appointment is Canceled or No Show | Update the appointment status before starting. |
| Wizard opens on the wrong patient | You opened the wrong appointment | Close the wizard and open the correct appointment. |
| The visit still shows as an unfinished draft | The wizard was closed, but the appointment wasn't updated | Cancel or delete the appointment, or mark it Not Seen — see [Stop or cancel a visit you started](#stop-or-cancel-a-visit-you-started). |
| A new prescription isn't in Active Prescriptions | It hasn't synced from DoseSpot yet | Wait a few minutes and click **Refresh**. |
| Section 16 flags a gap | Documentation is missing in an earlier section | Fix it in the section listed, then return to Section 16. |
| PDF generation fails after Sign & Lock | Temporary error | The system retries automatically. If it still fails, an error ID is shown — share it with support. See [Sign Off](./sign-off.md). |

## Related

Auto-rendered from `related:` in frontmatter.
