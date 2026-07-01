---
id: hr-compliance-new-employee
title: Add a new employee
module: hr-compliance
audience: [admin]
roles: [admin, clinical_manager]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-07-01
app_route: /facility/{facility_uuid}/hr
related:
  - hr-compliance-overview
  - hr-compliance-credential-tracker
tags: [HR, onboarding, employee, access]
---

# Add a new employee

Create a user account and set up access from a single New Employee form. Provider-specific fields appear automatically when you assign a clinical role.

## Before you start

- You have the employee's legal name, email, and phone number.
- You know which role they will hold and which facility (or facilities) they will work at.
- For providers, you have their credentialing details (NPI, license, DEA, taxonomy) on hand.

## Steps

1. **Open HR & Compliance.** Click **HR & Compliance** in the sidebar.
2. **Click New Employee Onboarding**, then start a new employee. The form opens as a single page — there is no multi-step wizard.

   ![New Employee form — basic information](../../assets/hr/new-employee.png)

   *The New Employee form. Provider fields appear when a clinical role is selected.*

3. **Fill in Basic Info:**
   - **First Name**, **Last Name**, **Email**, **Phone**
   - **Job Title**, **Role**, **Manager**
   - **Status**, **Date of Birth**, **Onboarding Date**
   - **Preferred Language**, **Timezone**
   - **NPI** (for providers)
4. **Assign facilities.** Select one or more facilities under **Facility** — the employee's access is scoped to the facilities you assign, and you can assign several at once.
5. **Choose the Role.** Pick from the real role set: `admin`, `clinical_manager`, `medical_director`, `clinician`, `referral_coordinator`, `bd_rep`, `bd_manager`, `finance_ap`, or `vendor_coordinator`.
6. **Complete Provider Details (providers/clinicians only).** When the role is a clinical one, additional fields appear:
   - **Profession Title** (NP, PA, MD, DO, DPM, RN, LPN, LVN), **Print Name**, **Initials**
   - Mailing **Address**, **Primary Service Location**, **Specialty** and **Specialty Code**
   - **Group NPI**, **UPIN**, **State License**, **DEA Number** with active/termination dates
   - **Tax ID** and type, **Taxonomy Code**, **Organization Type**, **Billing Facility Name**, **Network Affiliation**
   - **Is Resident** / **Is Care Manager** toggles, and a **Signature** upload
7. **Mark onboarding items.** Toggle **Welcome Call Completed** once the initial onboarding call has been made.
8. **Save.** The account is created (via the admin user-creation service) with a `user_facility_role` for each facility you assigned.

## Result

The new employee appears in **Facility Users** for each assigned facility, with the role you selected. Assign any required license/certification tracking separately in the [Credential Tracker](./credential-tracker.md), and assign training in **Education Bundle Management**.

<Note>
Education bundles are assigned in **Education Bundle Management**, not on the new-employee form. There is no automated pre-start welcome email — use the **Welcome Call Completed** toggle to record onboarding contact.
</Note>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Email already in use | The person already has an account at another facility | Use **Facility Users** to add the existing user to this facility instead of creating a new record |
| Save fails | A required field is empty or invalid | Review highlighted fields — provider roles require the additional credentialing fields |
| Provider fields don't appear | A non-clinical role is selected | Provider Details show only for clinical roles (clinician / medical_director) |

## Related

Auto-rendered from `related:` in frontmatter.
