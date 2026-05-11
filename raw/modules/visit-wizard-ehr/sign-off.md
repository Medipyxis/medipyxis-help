---
id: visit-wizard-ehr-sign-off
title: Sign off on a visit with Provider Attestation (step 17)
module: visit-wizard-ehr
audience: [clinician]
roles: [np, md, medical_director]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-lcd-navigator
  - visit-wizard-ehr-start-a-visit
prerequisites:
  - visit-wizard-ehr-lcd-navigator
tags: [attestation, e-signature, ESIGN, UETA, CMS, HIPAA, sign-off, addendum, provider]
---

# Sign off on a visit with Provider Attestation (step 17)

Complete step 17 of the Visit Wizard by reading the attestation statement, applying your electronic signature, and locking the encounter note; use the Addendum process for any corrections after signing.

## Before you start

- All 17 steps of the Visit Wizard are complete, including the LCD Navigator™ checklist (step 16).
- You are logged in with an `np`, `md`, or `medical_director` role. Nurses and other roles cannot complete Provider Attestation.
- You have confirmed that all clinical documentation reflects the actual care provided during this encounter.

<Compliance>
Under CMS documentation requirements, the rendering provider — not a scribe or co-signing clinician alone — must attest to the accuracy and completeness of the encounter note. Verify your organization's co-signature policy before delegating attestation.
</Compliance>

## Steps

### Review and sign

1. **Reach step 17.** Complete all 16 preceding steps. Click **Provider Attestation** in the step navigator or click **Next** from step 16.

   ![Provider Attestation screen — top section showing the attestation statement and legal disclosure](../../assets/visit-wizard/15_provider_attestation_top.png)

   *The top of the Provider Attestation screen. The attestation statement and legal disclosure appear before the signature field.*

2. **Read the attestation statement.** The statement reads in full:

   > "I, the rendering provider, attest that the information contained in this encounter note is accurate and complete to the best of my knowledge and that the services documented were medically necessary and performed as described."

3. **Read the legal disclosure.** The disclosure references:

   - **ESIGN Act** (Electronic Signatures in Global and National Commerce Act)
   - **UETA** (Uniform Electronic Transactions Act)
   - **CMS** documentation and signature requirements
   - **HIPAA** privacy and security standards

   Scroll to the bottom of the disclosure to activate the signature field.

   ![Provider Attestation screen — bottom section showing the e-signature pad and Submit button](../../assets/visit-wizard/14_provider_attestation_bottom.png)

   *The e-signature area. Sign with a stylus, finger, or mouse. The **Submit Attestation** button activates only after a signature is drawn.*

4. **Apply your electronic signature.** Draw your signature in the signature pad. To clear and redraw, click **Clear**.

5. **Click Submit Attestation.** Medipyxis locks the encounter note, records the date/time stamp and your user identity, and updates the appointment status on the **Fleet Calendar** to `Visit Completed`.

   ![Consent and attestation confirmation screen showing the locked note status](../../assets/visit-wizard/13_consent_attestation.png)

   *Confirmation that the attestation is recorded and the note is locked. The encounter is now read-only.*

---

## Result

The encounter note is locked and marked `Visit Completed`. The signed note is available in the patient's chart and, depending on your billing workflow, is queued for claim generation in the **Billing & Documentation** module. The rendering provider's name, credential, signature, and timestamp appear on the note header.

<Note>
If your facility uses a co-signature workflow (for example, an NP supervised by an MD), the note may enter a `Pending Co-Signature` state. The supervising provider receives an in-app notification and must also complete their attestation step.
</Note>

---

## Adding an addendum after signing

Once a note is signed, the encounter is read-only. To correct or add information, use the **Addendum** process.

1. **Open the locked encounter** from the patient chart or Fleet Calendar.
2. **Click Addendum** in the top action bar.
3. **Select an addendum reason** from the dropdown. Common reasons include:
   - Correction to clinical documentation
   - Additional findings documented after the visit
   - Billing code correction (coordinate with your biller)
4. **Enter the addendum text.** Describe what changed and why. Do not delete or re-state the original note — the addendum appears as a dated attachment below the original signed note.
5. **Click Save Addendum.** The addendum is appended to the encounter record with your name, credential, and a new timestamp.

<Warning>
Addendum content is permanently appended to the encounter record and is visible in audit logs. Do not use the Addendum field to alter the clinical meaning of a note after the fact without a legitimate clinical or administrative reason.
</Warning>

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **Submit Attestation** button disabled | Signature pad is empty | Draw your signature in the pad before submitting |
| **Provider Attestation** step is not accessible | Your role (`nurse`) does not have attestation permission | Ask the rendering provider to sign in and complete step 17 |
| Appointment still shows `Draft Saved` after signing | Browser did not sync the status update | Refresh the Fleet Calendar |
| Addendum reason dropdown is empty | Organization has not configured addendum reasons | Contact your administrator to configure addendum reason codes |
| **Addendum** button not visible | Encounter note is not yet signed (still in draft) | Complete Provider Attestation first |

## Related

Auto-rendered from `related:` in frontmatter.
