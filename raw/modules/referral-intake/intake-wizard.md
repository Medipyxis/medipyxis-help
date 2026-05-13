---
id: referral-intake-intake-wizard
title: Intake Wizard V3 Walkthrough
module: referral-intake
audience: [office_staff, admin]
roles: [office_staff, practice_admin, super_admin]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-05-12
app_route: /facility/{facility_uuid}/referrals/intake
related:
  - referral-intake-overview
  - patient-management-overview
  - fleet-calendar-overview
  - admin-billing-setup
prerequisites:
  - referral-intake-overview
tags: [intake, referral, patient-onboarding, eligibility, stedi]
---

# Intake Wizard V3 Walkthrough

Convert a referral card into a complete patient record ready for scheduling using Intake Wizard V3.

## Before you start

- You have the `office_staff`, `practice_admin`, or `super_admin` role.
- A referral exists in the **Referral Intake** board in the `New` or `Triaged` column.
- You have the patient's insurance card, date of birth, and a way to verify identity (driver's license, Medicare card, or in-person ID).
- For Medicare patients, you have the patient's MBI (Medicare Beneficiary Identifier) ready.

## Open the Wizard from a Referral Card

1. Navigate to **Referral Intake** from the sidebar.
2. Locate the referral card in the `New` or `Triaged` column.
3. Click the card to open the side drawer.
4. Click **Start Intake** at the top of the drawer.

The wizard opens in a full-screen step-by-step view. Any data already captured on the referral card (referring provider, reason for referral, fax-OCR'd demographics) pre-fills the matching fields.

<Note>If the patient already exists in Medipyxis, the wizard offers a **Merge with existing patient** option in step 1. Use it to avoid duplicates.</Note>

## Step 1 — Patient Identity

Verify and complete:

- Legal first and last name
- Date of birth
- Sex assigned at birth (used for Medicare eligibility) and gender identity (separate field)
- Preferred name and pronouns
- Primary phone, email, and preferred contact method
- Home address, validated against USPS for delivery and routing

<Compliance>HIPAA requires identity verification before any PHI is saved. The wizard prompts you to confirm at least one identity check (photo ID, insurance card, or verbal verification with date of birth and address). Your acknowledgment is recorded in the audit log.</Compliance>

## Step 2 — Insurance

Capture primary and, if applicable, secondary coverage:

- Payer (search the payer directory or add manually if the payer is unlisted)
- Member ID — for Medicare patients this is the **MBI**, an 11-character alphanumeric identifier
- Group number
- Plan effective date
- Subscriber relationship to patient

After saving the insurance entry, click **Check Eligibility**. Medipyxis runs a real-time eligibility request through the Stedi clearinghouse. The response usually returns within ten seconds and includes:

- Coverage status (`Active`, `Inactive`, `Termed`)
- Deductible remaining
- Co-insurance and copay
- Prior authorization requirements for skin substitutes, NPWT, or compression
- A list of active plan benefits relevant to wound care

<Warning>If eligibility returns `Inactive` or `Termed`, do not proceed to scheduling without confirming coverage. Contact the patient to capture current insurance, or flag the card as `Self-Pay` after documented patient consent.</Warning>

If the patient has secondary coverage, repeat the process under **Add Secondary Insurance**.

## Step 3 — Referring Provider

Confirm the referring provider's:

- Name and credentials
- NPI (auto-validated against the NPI Registry)
- Practice
- Fax and phone for return communication

If the referring provider is new, click **Add Provider** to create a CRM entry that will be available for future referrals.

## Step 4 — Wound Details

Capture what is known about the wound at referral. Fields are optional at this stage; missing data can be completed at the first visit.

- Etiology (`Venous`, `Arterial`, `Diabetic`, `Pressure`, `Surgical Dehiscence`, `Traumatic`, `Other`)
- Anatomical location, picked from the body-map control
- Stage or depth, if known
- Approximate dimensions (length, width, depth in cm)
- Duration — how long the wound has been present
- Prior treatments tried

## Step 5 — Allergies and History

Capture:

- Drug, food, and environmental allergies with reaction type
- Active problems (free-text or ICD-10 search)
- Current medications — free-text at intake, reconciled in the first visit via eRx

## Step 6 — Reason for Referral

Confirm the free-text reason for referral pulled from the referral card. Edit if needed for clarity. This statement becomes the chief complaint on the first visit note.

## Step 7 — Specialty Routing

Select the care specialty that will drive scheduling and visit type:

- **Wound Care** — routes to the **Wound Cockpit** and **Visit Wizard V4** at first visit.
- **Primary Care** — routes to the **PCP Cockpit** and **PCP Visit Wizard** at first visit.

<Note>Patients can carry both specialties. If this patient will see both a wound provider and a PCP, select the primary specialty here and add the secondary specialty after intake from the patient record.</Note>

## Save as Draft or Publish

You have two options at the final step:

- **Save Draft** — preserves all entered data. The referral card stays in `Triaged` and can be resumed later. Drafts autosave at every step and survive tab closure.
- **Publish Patient Record** — creates the patient in Patient Management, moves the referral card to `Assigned`, and unlocks scheduling on Fleet Calendar.

## Result

After you click **Publish Patient Record**:

- The patient is searchable in **Patient Management** with full demographics, insurance, allergies, and the referral-captured wound.
- The referral card moves to the `Assigned` column on the Referral Intake board.
- The patient is eligible to be scheduled from **Fleet Calendar**, including same-day scheduling if the practice's horizon allows.
- An entry is added to the patient's audit log recording the intake author and timestamp.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Eligibility check returns an error or times out | The payer's eligibility service is offline, or the member ID is mistyped | Re-check the member ID against the insurance card. If correct, retry the check in five minutes. Persistent failures should be reported to your practice admin. |
| The wizard will not let you publish | One or more required fields (legal name, DOB, primary insurance) are missing | Look for red field borders in each step. The step header shows a count of remaining required fields. |
| Duplicate patient warning appears | A patient with matching name and DOB already exists | Click **Merge with existing patient** to link the referral to the existing record, or click **Continue as new** if you have confirmed this is a different person. |
| MBI is rejected as invalid | The MBI is 11 characters with a specific letter/number pattern; a typo violates the pattern | Re-enter from the patient's red, white, and blue Medicare card. The letters `S`, `L`, `O`, `I`, `B`, and `Z` are not used in MBIs. |
| Referring provider NPI returns "not found" | The NPI is mistyped or the provider is registered under a different name | Search by name and state in the NPI lookup field. If still not found, manually add the provider and ask your practice admin to verify. |
