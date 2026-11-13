---
id: visit-wizard-ehr-sign-off
title: Sign off on a visit with Provider Attestation (step 17)
module: visit-wizard-ehr
audience: [clinician]
roles: [clinician, medical_director]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-11-13
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-lcd-navigator
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-aprn-credential
  - visit-wizard-ehr-signature-timestamp
  - visit-wizard-ehr-progress-note
prerequisites:
  - visit-wizard-ehr-lcd-navigator
tags: [attestation, e-signature, sign-and-lock, E/M-time, progress-note-preview, sign-off, addendum, provider]
---

# Sign off on a visit with Provider Attestation (step 17)

Complete step 17 of the Visit Wizard: attest and sign, record E/M time if you code by time, review any remaining gaps, preview the progress note, and finish with **Sign & Lock**. Use an addendum for any correction after signing.

## Before you start

- All 17 steps of the Visit Wizard are complete, including the LCD Navigator™ checklist (step 16).
- You are the rendering provider — a clinician with a provider profession title (NP, PA, MD, DO) or a medical director. Support staff cannot complete Provider Attestation.
- You have confirmed that all clinical documentation reflects the actual care provided during this encounter.

<Compliance>
Under CMS documentation requirements, the rendering provider — not a scribe or co-signing clinician alone — must attest to the accuracy and completeness of the encounter note. Verify your organization's co-signature policy before delegating attestation.
</Compliance>

## Steps

### 1. Complete the attestation

1. Open **Step 17 — Provider Attestation** in the Visit Wizard.
2. Check the provider information that fills in automatically: your full name and **NPI**.
3. Select your **Professional Title**.
4. Read the attestation statement, which confirms the documentation is accurate and complete.
5. Check the **Provider Attestation Acknowledgment** box.
6. Select the electronic signature option to sign.

Your electronic signature is your attestation that the assessment, treatments, procedures, and findings in the note reflect the care you provided.

### 2. Enter Total E/M Time (when applicable)

If you are choosing the E/M level by total time rather than medical decision-making, enter **Total E/M Time (Minutes)**: the qualifying time you personally spent on the date of service. This can include reviewing records, evaluating the patient and wound, educating the patient or caregiver, coordinating care, planning treatment, and documenting.

Exclude time spent performing separately billed procedures. Entering time supports time-based coding; it does not by itself make an E/M service separately billable.

### 3. Finish the section

1. Confirm your professional title, signature, acknowledgment, and E/M time.
2. Click **Complete Provider Attestation**.
3. Click **Mark as Complete**. Step 17 shows as completed.

### 4. Run the final review

1. In the section navigator, check that every section that applies is marked complete.
2. Click **Continue Review**. Medipyxis checks the documentation and lists any remaining gaps in a window.
3. For each gap, choose:
   - **Resolve This** — go to the section, complete or correct it, then click **Continue Review** again.
   - **Continue Anyway** — proceed when you have decided the open items don't prevent finalizing, for example when follow-up is planned for the next visit.

**Continue Anyway** does not make the documentation meet medical necessity, billing, or LCD requirements. You decide whether a gap must be fixed before signing.

### 5. Preview the progress note

The **Wound Care Progress Note Preview** shows the note as a PDF, exactly as it will be finalized. Check the patient and encounter details, chief complaint and history, review of systems and objective assessment, wound findings and measurements, previous treatments and medical necessity, interventions and procedure notes, the treatment plan, education and medications, billing documentation, and your attestation.

If anything needs correcting, go back to that section before you sign.

### 6. Sign & Lock

1. Click **Continue**.
2. Review the final signing options.
3. Click **Sign & Lock**.

The signed note becomes the finalized clinical record for the visit.

---

## Result

The note is signed and locked. Medipyxis generates the finalized wound care progress note PDF and saves it to the patient's record — open the patient's chart, go to **Progress Notes**, and open the visit to view it. The visit's billing information goes to Billing Operations as a pre-filled CMS-1500 claim for your biller to review.

<Note>
If your facility uses a co-signature workflow (for example, an NP supervised by an MD), the note may enter a `Pending Co-Signature` state. The supervising provider receives an in-app notification and must also complete their attestation step.
</Note>

---

## Add an addendum to a signed note

A signed note can't be edited. To correct it or add information, add an addendum. You start the addendum from the signed visit, and it is saved with the wound's notes.

1. Open the signed visit from the patient chart's **Appointment Management** card (**Open visit**), from the appointment's details window in **Fleet Calendar**, or from the visit picker in the **Wound Cockpit**.
2. The screen **This visit is signed and locked** appears. Click **Add an addendum**.

   ![The "This visit is signed and locked" screen with the Add an addendum, Add a wound by addendum, Review signed note, and Back to patient chart buttons](../../assets/visit-wizard/21_signed_and_locked.png)

   *The **This visit is signed and locked** screen.*

3. The **Add Addendum to Progress Note** form opens. In **Addendum Note**, enter the additional documentation.
4. In **Select Progress Note**, check that the right signed note is selected. Each note shows the visit date, who signed it and when, and the wounds on the visit. A banner confirms the visit date the addendum will be attached to.
5. Choose the **Type of Addendum**: **Correction**, **Clarification**, **Late entry**, **Fabrication remediation**, or **Other**. This is required by CMS.
6. In **Reason**, briefly explain why you are adding the addendum (at least 10 characters).

   ![Top of the Add Addendum to Progress Note form, showing the Addendum Note field and the Attach Files area](../../assets/visit-wizard/22_addendum_form_top.png)

   *The top of the **Add Addendum to Progress Note** form.*

   ![Middle of the Add Addendum to Progress Note form, showing the Select Progress Note dropdown, the banner confirming the visit date, the Type of Addendum dropdown, and the Reason field](../../assets/visit-wizard/24_addendum_form_middle.png)

   *Select Progress Note, Type of Addendum, and Reason.*

7. Sign in **Provider Signature** with your mouse or finger. Click **Clear** to start over.
8. In **Electronic Signature by**, enter the signer's full name. **Signed Date** is filled in with today's date.
9. Click **Submit Addendum**.

   ![Bottom of the Add Addendum to Progress Note form, showing the Provider Signature pad with a Clear button, the Electronic Signature by and Signed Date fields, and the Submit Addendum button](../../assets/visit-wizard/23_addendum_form_signature.png)

   *The signature fields and **Submit Addendum**.*

You can't attach files to an addendum. Only the text is saved.

### Where to find an addendum

Addendums are listed under **Progress Note Addendums** on the wound's page: open the **Wound Cockpit**, then **Wound Detail**, the **Timeline** tab, and **Notes**.

### Add a wound you missed

To document a wound you assessed at this visit that isn't in the signed note, click **Add a wound by addendum** on the **This visit is signed and locked** screen. Don't start a new visit for it.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **Complete Provider Attestation** doesn't finish the step | Professional title, acknowledgment, or signature is missing | Select your title, check the acknowledgment, and sign |
| A window lists documentation gaps after **Continue Review** | Sections still have missing or incomplete items | Click **Resolve This** for each, or **Continue Anyway** if you have decided they don't prevent finalizing |
| **Provider Attestation** step is not accessible | Your account is not a rendering provider | Ask the rendering provider to sign in and complete step 17 |
| Appointment still shows `Draft Saved` after signing | Browser did not sync the status update | Refresh the Fleet Calendar |
| **Submit Addendum** is grayed out | A required field is empty, or **Reason** is shorter than 10 characters | Complete **Addendum Note**, **Select Progress Note**, **Type of Addendum**, **Reason**, **Provider Signature**, and **Electronic Signature by** |
| The Visit Wizard opens instead of "This visit is signed and locked" | The visit is not signed yet (still a draft) | Complete Provider Attestation and **Sign & Lock** first |

## Related

Auto-rendered from `related:` in frontmatter.
