---
id: visit-wizard-ehr-aprn-credential
title: APRN as a signature credential
module: visit-wizard-ehr
audience: [clinician, admin]
roles: [clinician, medical_director, admin]
type: reference
estimated_minutes: 2
last_reviewed: 2026-11-18
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-sign-off
  - visit-wizard-ehr-note-honesty-guardrails
  - visit-wizard-ehr-signature-timestamp
tags: [attestation, APRN, NP, credential, provider, sign-off, mid-level]
---

# APRN as a signature credential

APRN and NP are separate choices in the **Professional Title** list in Provider Attestation (step 17). This page explains which one to pick, where the title fills in from, and where it prints.

---

## Choose APRN or NP

The **Professional Title** list in step 17 shows these as two separate options:

- **APRN (Advanced Practice Registered Nurse)**
- **NP (Nurse Practitioner)**

Pick the one your licence uses. Medipyxis treats both as billable provider titles.

---

## Who this matters for

Nurse practitioners whose state licence, board certification, or NPI registry entry reads APRN. Some state boards issue the credential as APRN rather than NP.

---

## Where the title comes from

When you open step 17, **Provider Name**, **Professional Title**, and **NPI Number** fill in from the provider record. If the visit's clinician has no NPI on file, the supervising provider's details fill in instead.

- If the provider record holds a recognised title (APRN, NP, PA, MD, DO, DPM, RN, LPN, or LVN), that title fills in.
- If the provider record holds a job title instead, such as *Clinician* or *Wound Care Specialist*, the **Professional Title** is left blank so a job title never prints on your signature line. Pick your title from the list.

Ask your admin to update your provider record so the right title fills in next time.

---

## Set your title on a visit

1. Open the visit in the Visit Wizard and go to **Provider Attestation** (step 17).
2. Check **Professional Title**. If it is blank, it shows *Select credentials*.
3. Select **APRN (Advanced Practice Registered Nurse)**, or the title your licence uses.
4. Complete the attestation and sign the note.

**Tip:** If your title fills in as NP but your licence reads APRN, change it to APRN before you sign, and ask your admin to update your provider record.

---

## Where the title prints

The signature line on the signed progress note prints your name followed by the title you chose in step 17.

Electronic claims identify the rendering provider by name and NPI. The professional title is not sent on the electronic claim.

---

## The physician co-sign list is separate

The **Physician Sign-Off** screen has its own list of co-signer titles: **MD**, **DO**, **DPM**, **NP / APRN (Nurse Practitioner)**, and **PA**. That list records who co-signed a supervised visit. It does not change the title that prints on your own signature line.

**Note:** If APRN is missing from the Professional Title list, contact Medipyxis support.
