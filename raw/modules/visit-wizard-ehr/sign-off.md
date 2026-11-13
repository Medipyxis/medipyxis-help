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
tags: [attestation, e-signature, sign-and-lock, E/M-time, progress-note-preview, sign-off, addendum, add-an-addendum, find-signed-visit, provider]
---

# Sign off on a visit with Provider Attestation (step 17)

Complete step 17 of the Visit Wizard: attest and sign, record E/M time if you code by time, review any remaining gaps, preview the progress note, and finish with **Sign & Lock**. Use an addendum for any correction after signing.

## Before you start

- All 17 steps of the Visit Wizard are complete, including the LCD Navigator™ checklist (step 16).
- You are the provider named in step 17 — the visit's clinician, or the supervising provider when the clinician has no NPI on file. When staff finish a visit the provider handed off to them, step 17 is view only for staff.
- You have confirmed that all clinical documentation reflects the actual care provided during this encounter.

<Compliance>
Under CMS documentation requirements, the rendering provider — not a scribe or co-signing clinician alone — must attest to the accuracy and completeness of the encounter note. Verify your organization's co-signature policy before delegating attestation.
</Compliance>

## Steps

### 1. Complete the attestation

1. Open **Provider Attestation** (step 17) in the Visit Wizard.
2. Check the provider details that fill in from the visit: **Provider Name**, **Professional Title**, and **NPI Number**. If the visit's clinician has no NPI on file, the supervising provider's details fill in instead. Correct anything that is wrong. The NPI must be 10 digits.
3. Read the attestation statement: *"I attest that this documentation is accurate, complete, and compliant with LCD and payer documentation requirements."*
4. Check the **Provider Attestation** box.
5. Check the **Electronic Signature Preview**. Your signature line is built from your name, title, and NPI.

Your electronic signature is your attestation that the assessment, treatments, procedures, and findings in the note reflect the care you provided.

### 2. Enter total E/M time (when applicable)

If you are choosing the E/M level by total time rather than medical decision-making, enter **Total E/M time (minutes)**: the qualifying time you personally spent on the date of service. This can include reviewing records, evaluating the patient and wound, educating the patient or caregiver, coordinating care, planning treatment, and documenting.

Exclude time spent performing separately billed procedures. Entering time supports time-based coding; it does not by itself make an E/M service separately billable.

### 3. Finish the section

1. Confirm your name, title, NPI, the attestation box, and E/M time.
2. Click **Complete Provider Attestation**. The section shows *Attestation recorded — press Sign & Lock to finish*. The visit is not signed yet.
3. Click **Mark as Complete**. Step 17 shows as completed.

### 4. Run the final review

1. In the section navigator, check that every section that applies is marked complete.
2. Click **Continue to Review**. If documentation gaps remain, a **Documentation gaps** window lists them. Each row has a button that takes you to the item — or, for an item you can answer in a sentence, opens a box to answer it.
3. When you are done with the list, choose:
   - **Resolve** — close the window, fix the items, then click **Continue to Review** again.
   - **Continue anyway** — proceed when you have decided the open items don't prevent finalizing, for example when follow-up is planned for the next visit. You are asked to confirm. If an item affects what can be billed, you also tick a box confirming you understand.

**Continue anyway** does not make the documentation meet medical necessity, billing, or LCD requirements. You decide whether a gap must be fixed before signing.

### 5. Preview the progress note

The **Preview — Review Before Signing** screen shows the note as a PDF, exactly as it will be filed. Check the patient and encounter details, chief complaint and history, review of systems and objective assessment, wound findings and measurements, previous treatments and medical necessity, interventions and procedure notes, the treatment plan, education and medications, billing documentation, and your attestation.

If the screen asks you to confirm that text carried in from an earlier visit still applies, confirm it before you continue. If anything needs correcting, click **← Go Back** and fix it in its section before you sign.

### 6. Sign & Lock

1. Click **Looks Good, Continue →**.
2. In the review window, check the wound assessments and patient information.
3. Click **Sign & Lock**.

If you are signed in as someone other than the provider named in step 17, a window says *You are not the provider in the attestation*. Choose **Go back and update provider**, or **Sign as shown anyway** if the note should be signed under the provider shown.

The signed note becomes the finalized clinical record for the visit.

---

## Result

The note is signed and locked. Medipyxis saves the finalized wound care progress note PDF to the patient's record — open the patient's chart, go to **Progress Notes**, and open the visit to view it. The visit's billing information goes to Billing Operations as a pre-filled CMS-1500 claim for your biller to review.

<Note>
If your practice requires a physician co-signature, use the optional **Physician Sign-Off** section below Provider Attestation. It shows *Co-sign Requested* when the visit was flagged for co-signature when it was scheduled. It is optional and never blocks saving or signing.
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
5. Choose the **Type of Addendum**: **Correction**, **Clarification**, **Late entry**, or **Other**. This is required by CMS.
6. In **Reason**, briefly explain why you are adding the addendum (at least 10 characters).

   ![Top of the Add Addendum to Progress Note form, showing the Addendum Note field and the Attach Files area](../../assets/visit-wizard/22_addendum_form_top.png)

   *The top of the **Add Addendum to Progress Note** form.*

   ![Middle of the Add Addendum to Progress Note form, showing the Select Progress Note dropdown, the banner confirming the visit date, the Type of Addendum dropdown, and the Reason field](../../assets/visit-wizard/24_addendum_form_middle.png)

   *Select Progress Note, Type of Addendum, and Reason.*

7. Sign in **Provider Signature** with your mouse or finger. Click **Clear** to start over.
8. In **Electronic Signature by**, enter the signer's full name. **Signed Date** is filled in with today's date.
9. Click **Submit Addendum**. A message confirms *Addendum filed and PDF generated.*

   ![Bottom of the Add Addendum to Progress Note form, showing the Provider Signature pad with a Clear button, the Electronic Signature by and Signed Date fields, and the Submit Addendum button](../../assets/visit-wizard/23_addendum_form_signature.png)

   *The signature fields and **Submit Addendum**.*

You can't attach files to an addendum. Only the text is saved. The addendum prints on its own page after the signed note.

### Other ways to find a signed visit

**From the patient's chart (visits from the past year):**

1. Click **All Patients** in the left menu, find the patient, and click **View**.
2. Click the **Appointment Management** tile.
3. Click the **Past** filter. A signed visit has a **Signed** badge and shows *visit note attached*.
4. Click **Open visit** on that row. The screen shows *This visit is signed and locked*.

**From the Fleet Calendar (when you know the visit date):**

1. Click **Fleet Calendar** in the left menu and go to the date of the visit. The calendar shows one day at a time.
2. Click the patient's appointment tile, then click **Start Visit** at the bottom of the window. Because the visit is signed, the *This visit is signed and locked* screen opens instead of the wizard.

**From the wound's page (any date):**

1. In the patient's chart, click the **Wound Cockpit** tile.
2. On the wound's card, click **Details**.
3. Click the **Timeline** tab, find the visit by its date, and click **Addendum** on that visit. The addendum form opens with that visit's signed note selected.

If the screen says *The signed note couldn't be loaded here*, the **Add an addendum** button isn't shown. Open the note from the patient's **Progress Notes**, and add the addendum from the wound's page as described above.

Anyone whose role can open patient charts sees **Add an addendum** on a signed visit and can file an addendum for notes at their own facility.

### Where to find an addendum

Addendums are listed under **Progress Note Addendums** on the wound's page: open the **Wound Cockpit**, then **Wound Detail**, the **Timeline** tab, and **Notes**.

### Add a wound you missed

To document a wound you assessed at this visit that isn't in the signed note, click **Add a wound by addendum** on the **This visit is signed and locked** screen. Don't start a new visit for it.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| **Complete Provider Attestation** doesn't finish the step | Provider name, title, NPI, or the attestation box is missing, or the NPI isn't 10 digits | Fill in the missing details and check the **Provider Attestation** box |
| A **Documentation gaps** window opens after **Continue to Review** | Sections still have missing or incomplete items | Use each row's button to fix the item, or choose **Continue anyway** if you have decided they don't prevent finalizing |
| *You are not the provider in the attestation* appears at Sign & Lock | Step 17 names a different provider from the person signed in | Click **Go back and update provider**, or ask the provider named in step 17 to sign in and sign |
| Step 17 is view only | You are finishing a visit the provider handed off to you | The provider completes step 17 |
| Appointment still shows Draft Saved after signing | The calendar has not refreshed | Refresh the Fleet Calendar |
| **Submit Addendum** is grayed out | A required field is empty, or **Reason** is shorter than 10 characters | Complete **Addendum Note**, **Select Progress Note**, **Type of Addendum**, **Reason**, **Provider Signature**, and **Electronic Signature by** |
| **Add an addendum** is not available | The note is not signed yet, or the signed note couldn't be loaded on that screen | Finish the visit with **Sign & Lock** first. If it is signed, open the wound's page from the **Wound Cockpit**, click **Details**, then **Timeline**, and click **Addendum** on the visit |
| The signed visit isn't on the Fleet Calendar | The calendar shows one day at a time | Open the patient's chart, click **Appointment Management**, and use the **Past** filter |
| The Visit Wizard opens instead of "This visit is signed and locked" | The visit is not signed yet (still a draft) | Complete Provider Attestation and **Sign & Lock** first |
