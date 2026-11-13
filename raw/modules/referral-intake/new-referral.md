---
id: referral-intake-new-referral
title: Create a new referral
module: referral-intake
audience: [intake]
roles: [intake_coordinator, referral_coordinator]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/referrals
related:
  - referral-intake-overview
  - referral-intake-fax-queue-review
tags: [referrals, new]
---

# Add a new patient from Referral Intake

Use this flow when you add a patient by hand — a phone call, an email, or a paper referral. Inbound faxes are handled in the [Fax Review Queue](/modules/referral-intake/fax-queue-review/) instead, where the action is **Approve & Create Patient**.

## Before you start

- You know the patient's first name, last name, and date of birth. Those three fields are always required. If you add insurance where the subscriber is not the patient, **Subscriber Date of Birth** is required too, and a subscriber name that does not match the patient needs a **Subscriber Relationship**.
- Have the referring practice and insurance information if you have them. You can save the patient without them and add them later.

## Steps

- **Open Referral Intake.** Click **Referral Intake** in the sidebar. The board heading is **Patient Intake**. You can also press ⌘K (Windows: Ctrl+K), type “referral”, and choose **Referral Intake** to open the board.
- **Click Add New Referral** in the top-right (alongside **Fax Queue** and **Fleet Calendar**).
- The form heading is **Add New Patient**. Work through the sections below, then click **Create Patient** at the bottom. If you are offline, the same button reads **Save Offline**.

## What the form contains

Sections appear in this order. **First Name**, **Last Name**, and **Date of Birth** are always required. The form itself restates that at the bottom: “Required fields: First Name, Last Name, Date of Birth.”

- **Care Type** — **Wound Care** or **Primary Care**. Helper text: “Select the type of care this patient is being referred for.”
- **Patient Demographics** — **First Name**, **Middle Initial**, **Last Name**, **Date of Birth**, **Sex** (Male, Female, Other), **Marital Status**, **Employment Status**, **Primary Phone Number**, **Secondary Phone Number**, **Email Address**.
- **Address Information** — **Street Address**, **Lives at** (a practice / facility the patient lives at), **City**, **State**, **ZIP Code**. Phone and address are optional — leave them blank if the patient has no personal phone or street address (common for SNF/ALF residents).
- **Referring Information Practice & Physician** — **Referral Source** (search CRM practices), **Add New Practice**, **Referring Individual**, **Date Referral Sent**, **Referral Entry Date**, **Referral ID**, practice phone and fax, **Referring Physician** and **Referring Physician NPI**, **Assigned BD Rep**.
- **Patient's Primary Care Physician** — **PCP Practice**, **PCP Physician**, phone, fax, and **PCP Physician NPI**.
- **Insurance Information** — Click **Add Insurance** for each payer. Fields: **Insurance Provider**, **Policy Number / Member Number**, **Group Number** (optional), **Subscriber First Name**, **Subscriber Last Name**, **Payer ID**, **Subscriber Relationship** (Self, Spouse, Child, Other). Use **Verify** (or **Verify again**) to run eligibility. You can add more than one insurance row.
- **Urgency** — **Referral Reason**, and **Urgency Level**: **Routine**, **Urgent**, or **Emergent**.
- **Condition & Accident Information For Billing** — Optional checkboxes: **Related to Employment**, **Related to Auto Accident**, **Related to Other Accident**, plus **Auto Accident State** when that box is checked. Under **Billing Preferences**: **Accept Assignment of Benefits**.
- **Insurance Verification Summary** — A recap of the insurance rows you added, if any.

At the bottom you can also check **Send digital consent form via SMS upon approval**, or click **Send Consent SMS** if a primary phone number is entered. **Cancel** leaves the form without saving.

## Result

Clicking **Create Patient** creates the patient record immediately (status Active) and a referral in the **New Referrals** column. A success message reads “Referral created successfully!” and includes the MRN when one is assigned. After a short pause you are taken back to the Patient Intake board. The detail panel does not open by itself — click the new card if you want to add documents or notes.

The card does not move to **Financial** automatically when insurance is present, and the patient does not wait for an **Assigned** status before appearing in All Patients.

## Troubleshooting

- **You cannot create the patient** — First Name, Last Name, or Date of Birth is empty. Complete those three fields. The form lists any that are still missing.
- **“Subscriber Date of Birth is required…”** — An insurance row has a subscriber who is not the patient and no subscriber date of birth. Enter **Subscriber Date of Birth** in the Insurance section, or set **Subscriber Relationship** to Self if the subscriber is the patient.
- **“Please enter a valid phone number”** — A phone was entered in a format the form does not accept. Use (xxx) xxx-xxxx, or leave the field blank if the patient has no personal phone.
- **The button reads Save Offline** — The browser is offline. You can save the referral offline and finish it when you reconnect.
