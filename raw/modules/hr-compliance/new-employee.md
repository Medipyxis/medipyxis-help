---
id: hr-compliance-new-employee
title: Add a new employee
module: hr-compliance
audience: [admin]
roles: [practice_admin, super_admin]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/hr
related:
  - hr-compliance-overview
  - hr-compliance-credential-tracker
tags: [HR, onboarding, employee, access]
---

# Add a new employee

Use the New Employee Onboarding wizard to create an account, set role permissions, and assign required training for a new hire.

## Before you start

- You have the employee's legal name, email address, and phone number.
- You know which facility they will be assigned to and which role they will hold.
- You have reviewed your organization's credentialing requirements for the role.

## Steps

The wizard has three sequential steps. You must complete each step before advancing.

### Step 1 — Personal Info

1. **Open HR & Compliance.** Click **HR & Compliance** in the sidebar.
2. **Click New Employee Onboarding.**
3. **Click + New Employee.**

   ![New Employee Onboarding form — Personal Info step](../../assets/hr/new-employee.png)

   *Step 1 of the New Employee wizard — Personal Info.*

4. **Enter personal details:** First Name, Last Name, Date of Birth, Phone, Email, and Home Address.
5. **Upload a photo** (optional). Appears on the employee's profile card and provider lists.
6. **Click Next** to advance to Step 2.

### Step 2 — Role & Assignment

7. **Select the Role.** Choose from the seeded role list: `clinician`, `intake_coordinator`, `biller`, `bd_rep`, `bd_manager`, `medical_director`, or others configured by your organization.
8. **Assign Facility.** Select the facility (or multiple facilities) this employee will work at. Access is scoped to assigned facilities only.
9. **Set Start Date.** This determines when the account becomes active.
10. **Click Next.**

### Step 3 — Onboarding & Training

11. **Assign Education Bundles.** Select one or more training bundles from the list. Required bundles for the selected role may be pre-checked based on your org's configuration.
12. **Set Training Due Date.** Enter the deadline by which all assigned bundles must be completed.
13. **Add Credential Requirements** (optional). If the role requires license or cert tracking, add the credential types now — they appear immediately in the Credential Tracker.
14. **Click Save & Send Invite.** Medipyxis sends the employee a welcome email with a link to set their password and access their assigned training.

## Result

The new employee record appears in **Facility Users** with **Pending Activation** status until they complete sign-up. Their education bundle assignments appear in **Education Bundle Management** and their credentials in **Credential Tracker**.

<Warning>
Do not share the welcome email link. It contains a single-use token. If the link expires (72 hours), resend it from the employee's record in Facility Users.
</Warning>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Email already in use | Employee has an account at another facility | Use **Facility Users** → **Assign to Facility** instead of creating a new employee |
| Next button disabled | Required field missing | Review red-highlighted fields on the current step |
| Invite not received | Spam filter | Ask employee to check their junk/spam folder; resend from Facility Users |

## Related

Auto-rendered from `related:` in frontmatter.
