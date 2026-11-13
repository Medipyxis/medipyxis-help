---
id: visit-wizard-ehr-aprn-credential
title: APRN as a signature credential
module: visit-wizard-ehr
audience: [clinician, admin]
roles: [clinician, medical_director, admin]
type: reference
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-sign-off
  - visit-wizard-ehr-note-honesty-guardrails
  - visit-wizard-ehr-signature-timestamp
tags: [attestation, APRN, NP, credential, provider, sign-off, mid-level]
---

APRN is a first-class credential in the Provider Attestation dropdown as of August 28, 2026. This page explains what changed, who is affected, and how to make sure your saved credential prints correctly on the signature line.

## What changed

The Provider Attestation dropdown used to offer a single combined option labeled "NP / APRN (Nurse Practitioner)". Whatever label you saw, the value stored on the note was always `NP`. An APRN who signed a note printed and faxed to a Home Health agency showed up as `NP` on the signature line — the credential the state licence actually reads was not selectable.

Two options now appear separately:

- **APRN** — Advanced Practice Registered Nurse
- **NP (Nurse Practitioner)**

Pick the one your state licence uses. There is no interaction with billing eligibility or supervision rules — both codes were already accepted by the underlying compliance policy (the NPWT supervision rule accepts `APRN` alongside `NP`, `PA`, `MD`, `DO`, `PA-C`, `RN`, `LPN`, `PT`, `DPM`) and the billing advisory has always classified APRN as a billable mid-level.

## Who this matters for

Nurse practitioners whose state licence, board certification, or NPI registry entry reads APRN — including all NPs licensed in states where the board issues the credential as APRN (Oklahoma, Texas, Georgia, Illinois, and others). If your saved provider profile displays `Clinician`, `Wound Care Specialist`, or another job title in the credential slot, keep reading — those values silently blank the signature line and need to be corrected once.

## How to set your credential

Step 17 fills the credential from your provider record when it holds a recognised code. You can change it for the visit in the Professional Title dropdown.

Check it on every visit. The demographics editor in the wizard writes the job-title field into the same field that holds the credential, so the saved value can change.

1. Open the visit in the Visit Wizard.
2. Complete steps 1-16 as usual.
3. In step 17, open the **Professional Title** dropdown.
4. Select **APRN** (or the credential your state licence issues).
5. Click **Complete Provider Attestation**, then **Sign & Lock** in the review window.

The value that prints on the PDF signature line is the value you pick here.

The credential prints on the progress note. Claims (CMS-1500 and 837P) carry the provider's name and NPI, not the credential.

## What still needs cleanup

**Provider profile defaults.** The credential field on your provider profile is not the source of truth for the note. If HR has stored `Clinician` or another job title there, the wizard rejects it silently (it looks nothing like a real credential code, so it can never leak onto the signature line) and the credential field on the attestation is blank when you open step 17. Pick your credential from the dropdown each time until HR updates the profile.

**The physician co-sign dropdown is a different list.** The list that decides who may co-sign a supervised note — used only in the Physician Sign-Off screen — is deliberately narrower: `MD`, `DO`, `DPM`, `NP`, `PA`. It answers a permission question ("may this person co-sign?"), not a display question ("what credential prints on the signature line?"). Adding APRN there without a policy decision would silently expand the set of clinicians who can co-sign supervision visits.

If APRN is missing from your dropdown, your build is behind the August 28 release. Ask your admin to confirm the deploy. The change is in production as of that date.
