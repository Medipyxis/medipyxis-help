---
id: admin-user-management
title: Invite users and manage facility access
module: admin
audience: [admin]
roles: [admin, superadmin]
type: how-to
estimated_minutes: 7
last_reviewed: 2026-06-29
app_route: /facility/{facility_uuid}/hr
related:
  - admin-index
  - admin-role-config
  - admin-facility-setup
  - admin-data-import-export
tags: [users, roles, onboarding, HR, bulk-upload]
prerequisites:
  - admin-index
  - admin-role-config
---

# Invite users and manage facility access

Add new staff to a facility, assign the correct role, and — for larger cohorts — run a bulk upload.

## Before you start

- You need the `admin` or `superadmin` role.
- Roles must already be configured in **Organization Role Config** before you assign them. See [Role Config](./role-config.md).
- For bulk upload, prepare a CSV using the template described in [Data Import & Export](./data-import-export.md).

## Add a user

1. Select the correct facility in the **Organization Selector**.
2. Navigate to **HR & Compliance** in the sidebar.
3. Open **New Employee Onboarding** (to create a new user) or **Facility Users** (to manage existing access).
4. In the Create/Edit User form, complete the fields:

   | Field | Notes |
   |---|---|
   | First Name, Last Name, Email | Required; email must be unique per organization |
   | Phone, Date of Birth, Home Address | Optional |
   | Role | From the roles seeded in Organization Role Config |
   | Facility Assignment | Multi-select — a user can be assigned to more than one facility in a single save |
   | Training Status | Not Started / In Progress / Completed |

5. For clinical roles (clinician and provider profession titles such as NP, PA, MD, DO, RN), additional **provider fields** appear — Profession Title, NPI, and related credential fields. These are hidden for non-clinical roles.
6. **Save.** The user is created across all assigned facilities and receives an invite email to set their password.

![HR & Compliance hub showing Announcements, Credential Tracker, Activity Logs, New Employee Onboarding, Bulk Employee Upload, Facility Users, Pharmacy Management, Education Bundle Management, and Training Materials tiles.](../assets/hr/hub.png)
*The **HR & Compliance** hub. Use **Facility Users** to manage access for existing staff, and **New Employee Onboarding** to create a new user.*

## Assign or change a role after invite

1. Navigate to **HR & Compliance → Facility Users**.
2. Find the user by name or email using the search field.
3. Click **Edit** next to their row.
4. Change the **Role** dropdown and click **Save**.

<Warning>
Changing a role takes effect on the user's next page load. If you demote a user from `admin`, they lose access to HR & Compliance and Administrator screens.
</Warning>

## Bulk Employee Upload

When onboarding a large cohort, use Bulk Employee Upload rather than inviting users one by one.

1. Navigate to **HR & Compliance → Bulk Employee Upload**.
2. Download the **CSV Template** from the upload panel.
3. Populate the template. Recognized columns include `first name`, `last name`, `email`, `role` (required), plus optional `phone`, `facility assignment`, and provider fields (`provider_first_name`, `provider_last_name`, `provider_print_name`, `provider_initials`). Multiple facilities can be assigned in one create.
4. Upload the completed CSV.
5. The system previews a validation table — review any rows flagged (typically duplicate email or unknown role).
6. Confirm the upload.

See [Data Import & Export](./data-import-export.md) for the full column spec.

## Result

New users appear in **Facility Users**. Once they set their password, their status becomes active. If a user does not accept, resend the invite from their row.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Role dropdown is empty | No roles configured yet | Complete [Role Config](./role-config.md) first |
| Invite email not received | Email landed in spam, or typo in address | Check spam; resend or correct the email via **Edit** |
| "Email already in use" on create | User already exists in the organization | Add the existing user to the facility instead of creating a new record |
| Provider fields (NPI) not showing | Role is not a clinical role | Set a clinical role first; the provider fields then appear |
