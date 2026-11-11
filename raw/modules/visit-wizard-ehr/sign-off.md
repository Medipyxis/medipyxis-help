---
id: visit-wizard-ehr-sign-off
title: Sign off on a visit with Provider Attestation (step 17)
module: visit-wizard-ehr
audience: [clinician]
roles: [clinician, medical_director]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-11-11
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

## Adding an addendum after signing

Once a note is signed, the encounter is read-only. To correct or add information, use the **Addendum** process.

1. **Open the locked encounter** from the patient chart or Fleet Calendar.
2. **Click Addendum** in the top action bar.
3. **Select an addendum reason** from the dropdown. The list covers three kinds of correction:

   - **Clinical corrections** — a correction to clinical documentation, or additional findings documented after the visit.
   - **Billing corrections** — a billing code correction, which you should coordinate with your biller.
   - **Corrections to written-in language** — reasons that name a specific kind of sentence in a signed note that you did not write, for example *Procedure tolerance was a template default* or *LCD citation was wrong (cited policy does not govern this service)*. Use these when a signed note contains a sentence you did not write.

   Pick the reason that names what you are correcting. A reviewer reads the reason alongside the addendum text, so a precise reason is worth more than a general one.
4. **Enter the addendum text.** Describe what changed and why. Do not delete or re-state the original note — the addendum appears as a dated attachment below the original signed note.
5. **Click Save Addendum.** The addendum is appended to the encounter record with your name, credential, and a new timestamp.

<Warning>
Addendum content is permanently appended to the encounter record and is visible in audit logs. Do not use the Addendum field to alter the clinical meaning of a note after the fact without a legitimate clinical or administrative reason.
</Warning>

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **Complete Provider Attestation** doesn't finish the step | Professional title, acknowledgment, or signature is missing | Select your title, check the acknowledgment, and sign |
| A window lists documentation gaps after **Continue Review** | Sections still have missing or incomplete items | Click **Resolve This** for each, or **Continue Anyway** if you have decided they don't prevent finalizing |
| **Provider Attestation** step is not accessible | Your account is not a rendering provider | Ask the rendering provider to sign in and complete step 17 |
| Appointment still shows `Draft Saved` after signing | Browser did not sync the status update | Refresh the Fleet Calendar |
| Addendum reason dropdown is empty | Organization has not configured addendum reasons | Contact your administrator to configure addendum reason codes |
| **Addendum** button not visible | Encounter note is not yet signed (still in draft) | Complete Provider Attestation first |

## Related

Auto-rendered from `related:` in frontmatter.
