---
id: visit-wizard-ehr-sign-off
title: Sign off on a visit with Provider Attestation (step 17)
module: visit-wizard-ehr
audience: [clinician]
roles: [clinician, medical_director]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-11-12
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

## Add an addendum after signing

Once a note is signed, the visit is read-only. Every change is made with an addendum, which you file from the wound's page.

### 1. Find the signed visit

**From the patient's chart (visits from the past year):**

1. Click **All Patients** in the left menu, find the patient, and click **View**.
2. Click the **Appointment Management** tile.
3. Click the **Past** filter. A signed visit has a **Signed** badge and shows *visit note attached*.
4. Click **Open visit** on that row. The screen shows *This visit is signed and locked*.

![A patient's chart with the Appointment Management panel open on the Past filter. The 10/22/26 Initial Evaluation row has a green Signed badge, the label visit note attached, and an Open visit link.](../../assets/visit-wizard/21_addendum_signed_visit_list.png)

*Past visits in Appointment Management. A signed visit shows the Signed badge.*

**From the Fleet Calendar (when you know the visit date):**

1. Click **Fleet Calendar** in the left menu and go to the date of the visit. The calendar shows one day at a time.
2. Click the patient's appointment tile, then click **Start Visit** at the bottom of the window. Because the visit is signed, the *This visit is signed and locked* screen opens instead of the wizard.

**From the wound's page (any date):**

1. In the patient's chart, click the **Wound Cockpit** tile.
2. On the wound's card, click **Details**.
3. Click the **Timeline** tab, find the visit by its date, and click **Addendum** on that visit. The addendum form opens with that visit's signed note selected.

### 2. Open the addendum form

On the *This visit is signed and locked* screen, click **Add an addendum**. It is the first button under the message, next to **Add a wound by addendum**, **Review signed note**, and **Back to patient chart**.

![A Wound Care Visit marked Signed & Locked. The message This visit is signed and locked appears above four buttons: Add an addendum, Add a wound by addendum, Review signed note, and Back to patient chart.](../../assets/visit-wizard/22_addendum_signed_locked_screen.png)

*Opening a signed visit shows this screen instead of the wizard.*

The wound's page opens on **Timeline → Notes**, with the **Add Addendum to Progress Note** form at the top and the signed note already chosen under **Select Progress Note**.

If the screen says *The signed note couldn't be loaded here*, the button isn't shown. Open the note from the patient's **Progress Notes**, and add the addendum from the wound's page as described above.

Anyone whose role can open patient charts sees **Add an addendum** on a signed visit and can file an addendum for notes at their own facility.

### 3. Fill in and submit the addendum

![The Add Addendum to Progress Note form. The Addendum Note box is empty, a notice says file attachments are not supported yet, and the signed 10/22/2026 Sacrum visit note is already chosen under Select Progress Note. Below are Type of Addendum, Reason, Provider Signature, Electronic Signature by, and Signed Date.](../../assets/visit-wizard/23_addendum_form.png)

*The addendum form opens with the signed note already selected.*

1. **Addendum Note** — describe what changed and why. Do not re-state the original note; it stays as signed.
2. **Select Progress Note** — check that it shows the note you are amending.
3. **Type of Addendum** — pick the addendum type that fits, such as *Correction*, *Clarification*, *Late entry*, or *Other*.
4. **Reason** — enter at least 10 characters.
5. Sign in the **Provider Signature** box.
6. Enter the signer's full name in **Electronic Signature by**, and check the **Signed Date**.
7. Click **Submit Addendum**. A message confirms *Addendum filed and PDF generated.*

Pick the type and reason that name what you are correcting. A reviewer reads them alongside the addendum text, so a precise reason is worth more than a general one. The addendum prints on its own page after the signed note.

Attaching files to an addendum: **Not switched on yet**. The form shows **Attach Files (Optional)**, but files are not saved with the addendum.

<Warning>
Addendum content is permanently appended to the encounter record and is visible in audit logs. Do not use an addendum to alter the clinical meaning of a note after the fact without a legitimate clinical or administrative reason.
</Warning>

---

## Troubleshooting

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| **Complete Provider Attestation** doesn't finish the step | Provider name, title, NPI, or the attestation box is missing, or the NPI isn't 10 digits | Fill in the missing details and check the **Provider Attestation** box |
| A **Documentation gaps** window opens after **Continue to Review** | Sections still have missing or incomplete items | Use each row's button to fix the item, or choose **Continue anyway** if you have decided they don't prevent finalizing |
| *You are not the provider in the attestation* appears at Sign & Lock | Step 17 names a different provider from the person signed in | Click **Go back and update provider**, or ask the provider named in step 17 to sign in and sign |
| Step 17 is view only | You are finishing a visit the provider handed off to you | The provider completes step 17 |
| Appointment still shows Draft Saved after signing | The calendar has not refreshed | Refresh the Fleet Calendar |
| **Add an addendum** is not available | The note is not signed yet, or the signed note couldn't be loaded on that screen | Finish the visit with **Sign & Lock** first. If it is signed, open the wound's page from the **Wound Cockpit**, click **Details**, then **Timeline**, and click **Addendum** on the visit |
| The signed visit isn't on the Fleet Calendar | The calendar shows one day at a time | Open the patient's chart, click **Appointment Management**, and use the **Past** filter |
