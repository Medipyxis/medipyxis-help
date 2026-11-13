---
id: hr-compliance-new-employee
title: Add a new employee
module: hr-compliance
audience: [admin]
roles: [admin, clinical_manager]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/hr
related:
  - hr-compliance-overview
  - hr-compliance-credential-tracker
tags: [HR, onboarding, employee, access]
---

# Add a new employee

Create a user account and set up access from a single **Create New User** form. Provider fields appear automatically when you pick a role that can see patients.

## Before you start

- You have the employee's legal name, email, and phone number.
- You know which role they will hold and which facility (or facilities) they will work at.
- For providers, you have their credentialing details (NPI, license, DEA, taxonomy) on hand.

## Steps

1. **Open HR & Compliance.** Click **HR & Compliance** in the sidebar.
2. **Click New Employee Onboarding.** The **Create New User** form opens as a single page — there is no multi-step wizard.

![New Employee form — basic information](../../assets/hr/new-employee.png)

_The Create New User form. Provider fields appear when a clinical role is selected._

1. **Fill in Personal Information:** **First Name**, **Middle Initial**, **Last Name**, **Job Title**, **Gender**, **Email Address**, **Phone Number**, **Date of Birth**, **Preferred Language** and **Timezone**. Email, phone and time zone are required.
2. **Choose the Role** under **Role & Assignment**: Administrator, Clinical Manager, Medical Director, Clinician, Referral Coordinator, Business Development Representative, Business Development Manager, Finance/Accounts Payable, Vendor Coordinator, or Biller.
3. **Assign facilities.** Under **Facility Assignment** (required), select one or more facilities. The employee's access is scoped to the facilities you assign. Optionally pick a **Manager**, and set the **Status**.
4. **Complete the provider fields (clinical roles only).** For Administrator, Clinical Manager, Medical Director and Clinician, more fields appear:
  - **Profession Title** (NP / APRN, PA, MD, DO, DPM, RN, LPN, LVN), **Print Name**, **Initials**, and **NPI Number** for titles that need one
  - **Contact Information** (address) and **Primary Service Location**
  - **Speciality**, **Speciality Code**, **Group NPI**, **UPIN**, **State License**
  - **DEA Number** with **DEA Active Date** and **DEA Termination Date**
  - **Tax ID**, **Tax ID Type**, **Organization Type**, **Taxonomy Code**, **Billing Facility Name**, **Network Affiliation**
  - **Is Resident** / **Is Care Manager** toggles, and a **Provider Signature**

5. **Onboarding & Training.** Set the **Onboarding Date** and **Training Status** (Not Started, In Progress, Completed). **Welcome Call Completed** is on by default; turn it off if the call has not happened yet.
6. **Click Create User.** The account is created with a role at each facility you assigned, and Medipyxis emails the new user a welcome message with a link to set their password.

## Result

The new employee appears in **Facility Users** for each assigned facility, with the role you selected. Track licenses and certifications in the [Credential Tracker](/modules/hr-compliance/credential-tracker/), and assign staff training in **Training Materials**.

If the welcome email cannot be sent, Medipyxis says so after the user is created; use **Resend welcome email** on **Facility Users**.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| “A user with email … already exists.” | The person already has an account | Do not create a second account; ask your administrator to give the existing user access to this facility |
| Save fails | A required field is empty or invalid | Fix the field named in the message — provider roles require the extra credentialing fields |
| Provider fields don't appear | A non-clinical role is selected | Provider fields are hidden for Referral Coordinator, Business Development, Finance/Accounts Payable, Vendor Coordinator and Biller roles |

## Related

Auto-rendered from `related:` in frontmatter.
