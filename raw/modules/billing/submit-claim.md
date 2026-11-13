---
id: billing-submit-claim
title: Submit a claim
module: billing
audience: [billing]
roles: [biller, admin]
type: how-to
estimated_minutes: 10
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing/new
related:
  - billing-overview
  - billing-work-queue
  - billing-coding-review-drawer
  - billing-eligibility-and-verify-insurance
  - billing-diagnosis-code-validation
  - billing-charge-master-and-zero-dollar-guard
  - billing-cms-1500-and-837p-fields
  - billing-retired-cpt-guard
  - billing-claim-scrub
  - billing-stedi-actions-inbox
  - billing-ptan-and-payer-enrollment
  - billing-timely-filing
  - billing-era-posting
  - billing-denial-management
prerequisites:
  - billing-overview
tags: [billing, CMS-1500, claims, submission, 837P]
---

# Submit a claim

Walk through the **New Claim** form to create and submit a CMS-1500-based claim to the payer via the Stedi clearinghouse (837P JSON).

## Before you start

- The patient visit has been completed and signed by the rendering provider.
- You have the patient's insurance information (payer, member ID, group number).
- Diagnosis (ICD-10) and procedure (CPT/HCPCS) codes are confirmed.
- You have the biller role, or admin.

## CMS-1500 sections in the New Claim form

The form is laid out in the CMS-1500 sections. What each one holds:

- **Section 1: Carrier information** — Payer Name, Payer ID and Insured's ID Number. There is no insurance-type selector.
- **Section 2: Patient demographics** — Patient's Name as one field (Last, First, Middle), Patient's Date of Birth and Patient's Sex.
- **Section 4 & 7: Insured information** — Insured's Name as one field (Last, First, Middle), and Insured's Address: street, city, state, ZIP code.
- **Section 5: Patient address** — Patient's Address: street, city, state, ZIP code.
- **Section 6 & 8: Relationship & status** — Patient Relationship to Insured (Self · Spouse · Child · Other), plus Employment Status and Marital Status selectors, filled from the patient record.
- **Section 10: Condition related to** — Checkboxes: Employment (current or previous) · Auto Accident (with state) · Other Accident.
- **Box 17: Referring Provider** — Referring Provider Name and NPI, auto-filled from the patient's referring physician on record.
- **Section 21: Diagnosis codes** — ICD-10 codes A through L (up to 12).
- **Section 24: Service lines & charges** — For each line: 24A Date of Service (one date per line), 24B Place of Service, 24D Procedures/CPT Code and one Modifier, 24E Diagnosis Pointer, 24F Charges and 24G Units.
- **24H–24J** — Under **Show Additional Charge Fields (24H–24J)**. On the first line these boxes are not saved; on added lines, 24H EPSDT and 24J Rendering NPI are saved.
- **Section 25-30: Billing information** — Tax ID Number (EIN or SSN), Patient Account # (auto-filled from the patient's MRN), Accept Assignment, Total Charge and Balance Due. There is no Amount Paid field.
- **31. Rendering Provider** — Provider Name, Taxonomy and Rendering Provider NPI.
- **32. Facility** — The service facility's address, plus its name and 32a NPI when the place of service is a facility.
- **33. Billing Provider** — Provider Name, address, Phone, Taxonomy and Billing Provider NPI.

## Steps

- **Open the claim form.** Navigate to `/facility/{facility_uuid}/billing/new` — the **New Claim** form opens as a full page. (Billers also reach it by clicking **Edit** on a claim in the [Work Queue](/modules/billing/work-queue/).)
- **Select the patient.** The picker searches by name or MRN and lists only patients with a visit that has a completed, signed progress note. Selecting a patient fills §2 name, date of birth and sex, §4 Insured Name, §5 Patient Address, §7 Insured Address, §10 Condition Related To, §17 Referring Provider, §26 Patient Account Number and §27 Accept Assignment from the patient record.
- **Complete Section 1.** Enter or confirm the Payer Name, Payer ID and Insured's ID Number.
- **Verify §4 through §8.** Confirm the insured name and address match the insurance card. Correct any discrepancies before proceeding — payer rejections for demographic mismatches are common.
- **Set §6 — Patient Relationship.** If the patient is the subscriber, select **Self**. For dependents, select **Spouse**, **Child**, or **Other**.
- **Confirm §17 — Referring Provider.** Correct the name and NPI if the referral is different for this claim.
- **Complete §10 — Condition Related To.** Leave all boxes unchecked for standard illness/injury.
- **Enter §21 — Diagnosis Codes.** Add up to 12 ICD-10 codes using the code search. The first code entered becomes pointer **A** and is required. Additional codes (B–L) are optional.
- **Add service lines — §24A through §24J.** Click **+ Add Charge** for each additional procedure. For each line, enter the date of service, the procedure code and modifier, the diagnosis pointer(s) from the codes in §21, the charge and the units. The **Place of Service** code is auto-derived from the visit's service location; override it if needed.
- **Reorder if needed.** CPT codes in **Billing codes & procedures** can be dragged to reorder; after a move, Box 24 is filled again from the new order.
- **Complete §25 through §33.** These fields are generally auto-populated from your facility and provider configuration. Verify the Tax ID is correct for the billing entity, confirm Accept Assignment matches your payer contract, and confirm the facility and billing provider addresses and NPIs match your payer enrollment. §28 Total Charge is read-only and adds up every Section 24 line. §30 Balance Due is entered by hand. The rendering provider's NPI is filled in Box 31 (Rendering Provider NPI). Added service lines can override it in 24J Rendering NPI.
- **Save or submit the claim.** Click **Save Changes** to save without submitting, or **Submit Claim** to send it to the payer through Stedi. A confirmation prompt appears before either action completes.

_The top of the claim form._

_The middle of the claim form, including the diagnosis code grid._

_The lower part of the claim form, from the service lines to the billing provider._

_A service line with its charge, units and modifier._

The rendering provider NPI in §24J must match the NPI on file with the payer. Submitting with a group NPI in §24J instead of the individual NPI is a common rejection cause for Medicare claims.

## Result

Saving a new claim stores it as a draft; saving an existing claim keeps its status. **Submit Claim** sends it to Stedi; it becomes **Submitted** when Stedi accepts it, or **Rejected** when Stedi rejects it. The claim appears in the [Work Queue](/modules/billing/work-queue/) tied to its encounter, where you can track and set its Claim Status.

Claims are generated automatically from a completed visit and appear in the Work Queue — you do not need to create them manually. Use the claim form for claims that need to be entered or corrected outside the normal visit workflow (e.g., corrected claims, late charges), reached via **Edit** in the Work Queue or `/billing/new`.

## Troubleshooting

- **Submit Claim disabled or errors** — One or more required fields missing or invalid. Scroll through the form — required fields are outlined in red.
- **Payer rejects claim for NPI mismatch** — Group NPI used in §24J instead of individual NPI. Update the rendering provider's NPI in HR & Compliance, then resubmit.
- **§28 Total Charge calculates as zero** — No service lines added, or charge amounts left blank. Add at least one §24 line with a non-zero charge.
- **Claim stays at Exported** — Exporting a PDF or JSON does not send the claim. Open it and click **Submit Claim**. If Stedi refuses it for enrollment, check **Payer Enrollment** (Quick Actions) and confirm the provider's enrollment is ACTIVE.

## Related

Auto-rendered from `related:` in frontmatter.
