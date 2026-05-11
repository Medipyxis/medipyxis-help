---
id: admin-user-management
title: Invite users and manage facility access
module: admin
audience: [admin]
roles: [practice_admin, super_admin]
type: how-to
estimated_minutes: 7
last_reviewed: 2026-04-24
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

Add new staff to a facility, assign the correct role, and — for practices onboarding 20 or more employees at once — run a bulk upload.

## Before you start

- You need `practice_admin` or `super_admin` role.
- Roles must already be configured at `/administrator` before you assign them. See [Role Config](./role-config.md).
- For bulk upload, prepare a CSV using the template described in [Data Import & Export](./data-import-export.md).

## Invite a single user

1. Select the correct facility in the **Organization Selector**.
2. Navigate to **HR & Compliance** in the sidebar.
3. Click **Facility Users**.
4. Click **Invite User**.
5. Enter the user's **Email**, **First Name**, and **Last Name**.
6. Select their **Role** from the dropdown. Available roles are those seeded in **Organization Role Config** (see [Role Config](./role-config.md)).
7. If the role is `bd_rep`, set the **Assigned Clinician** field — this links the rep's activity to a specific clinician's territory for BD reporting.
8. Click **Send Invite**. The user receives an email with a magic link valid for 48 hours.

![HR & Compliance hub showing Announcements, Credential Tracker, Activity Logs, New Employee Onboarding, Bulk Employee Upload, Facility Users, Pharmacy Management, and Education Bundle Management tiles.](../assets/hr/hub.png)
*The **HR & Compliance** hub. Use **Facility Users** to manage access for existing staff, and **New Employee Onboarding** for full onboarding workflows.*

## Complete the New Employee stepper (optional)

For employees who also need an onboarding record — credentials, training completions, and documents — use the full stepper instead of the quick invite:

1. From **HR & Compliance**, click **New Employee Onboarding**.
2. Complete the three-step stepper:

![New Employee Onboarding form open to the Personal Info step, showing fields for name, email, phone, and address.](../assets/hr/new-employee.png)
*Step 1 of 3: **Personal Info**. Fill all required fields before advancing.*

   | Step | Fields |
   |---|---|
   | **Personal Info** | First Name, Last Name, Email, Phone, Address |
   | **Role & Assignment** | Role, Assigned Facility, Assigned Clinician (BD reps only) |
   | **Onboarding & Training** | Required credentials, Education Bundle assignment |

3. Click **Submit** on the final step. The system creates the user account and sends the invite simultaneously.

## Assign or change a role after invite

1. Navigate to **HR & Compliance → Facility Users**.
2. Find the user by name or email using the search field.
3. Click **Edit** next to their row.
4. Change the **Role** dropdown and click **Save**.

<Warning>
Changing a role takes effect immediately. If you demote a user from `practice_admin`, they lose access to HR & Compliance and Administrator screens on their next page load.
</Warning>

## Bulk Employee Upload (20+ users)

When onboarding a large cohort, use Bulk Employee Upload rather than inviting users one by one.

1. Navigate to **HR & Compliance → Bulk Employee Upload**.
2. Download the **CSV Template** from the upload panel.
3. Populate the template. Required columns: `first_name`, `last_name`, `email`, `role`. Optional: `assigned_clinician_id`, `phone`.
4. Upload the completed CSV.
5. The system previews a validation table — review any rows flagged in red (typically duplicate email or unknown role name).
6. Click **Confirm Upload**. Invite emails go out in batches; all users receive their magic link within five minutes.

See [Data Import & Export](./data-import-export.md) for the full column spec and a downloadable sample file.

## Result

Invited users appear in **Facility Users** with status `Invite Pending`. Once they set their password, status changes to `Active`. Users who do not accept within 48 hours need a resent invite — click **Resend** next to their row.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Role dropdown is empty | No roles configured yet | Complete [Role Config](./role-config.md) first |
| Invite email not received | Email landed in spam, or typo in address | Check spam; click **Resend** or correct the email via **Edit** |
| Bulk upload validation fails on all rows | Wrong CSV template version | Re-download the template from the current upload panel |
| BD rep's Assigned Clinician field is missing | Role was not set to `bd_rep` | Set the role first, then the field appears |
