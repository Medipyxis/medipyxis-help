---
id: admin-role-config
title: Configure organization roles and permissions
module: admin
audience: [admin]
roles: [admin, superadmin]
type: reference
estimated_minutes: 8
last_reviewed: 2026-11-11
app_route: /administrator/org-role-config
related:
  - admin-index
  - admin-user-management
  - admin-security-and-compliance
tags: [roles, permissions, RBAC, admin]
prerequisites:
  - admin-index
---

# Configure organization roles and permissions

The **Organization Role Config** screen is where you choose which features each role can open across your organization.

## Before you start

- The screen opens for the admin, clinical manager and BD manager roles (on at least one facility) and for Medipyxis staff. Its card on the **Administrator** cockpit is shown only to admins.
- Settings are per organization. If you manage one organization, it is chosen for you; Medipyxis staff pick the organization from a list at the top.

## Open the screen

Click **Administrator** in the sidebar, then choose the **Organization Role Config** card.

![Organization Role Config matrix showing rows of seeded roles (admin, clinician, biller, etc.) and columns of feature permissions with checkboxes.](../assets/admin/role-config.png)
_The Organization Role Config matrix. Rows are roles; columns are features. A checked box means the role has access to that feature._

## Roles

The matrix has one row for each of the ten roles. You cannot add or delete roles here; you change what each one can open. The row names and the names on the user form are:

| Row in the matrix | Role on the user form |
|---|---|
| admin | Administrator |
| clinical manager | Clinical Manager |
| medical director | Medical Director |
| clinician | Clinician |
| referral coordinator | Referral Coordinator |
| bd rep | Business Development Representative |
| bd manager | Business Development Manager |
| finance ap | Finance/Accounts Payable |
| vendor coordinator | Vendor Coordinator |
| biller | Biller |

The admin role can open every feature whatever its boxes say. Unticking a box on the admin row has no effect.

## Feature columns

There are 14 feature columns: HR & Compliance, Business Development, CRM, Team Chat, Referral Intake, Patient Management, All Patients, Fleet Calendar, Inventory, Oversight Cockpit, Facilities, Orders & DME, Billing Operations, and More. Billing access is the **Billing Operations** column. **More** controls the **Fax Center** link.

The Dashboard is not a column: everyone can open it.

Two sidebar links follow a different box from their page. The **CRM** link shows for roles with **Business Development**, but the CRM page checks the **CRM** box. The **Team Chat** link shows for roles with **HR & Compliance**, but the Team Chat page checks the **Team Chat** box. To give a role CRM or Team Chat, tick both boxes.

If the clinician, clinical manager, referral coordinator, BD rep or BD manager row has no boxes ticked at all, Medipyxis gives that role a built-in starting set of features instead of none.

## Set a permission

1. Open **Organization Role Config**.
2. Find the role row and feature column you want to change.
3. Tick or untick the box.
4. Click **Save Changes**. A "Role configuration saved successfully" message confirms it.

Removing a feature from a role hides that sidebar link for everyone with that role. Tell affected staff before you change it.

## Billing roles are facility-scoped

The biller role works only at the facilities where it is assigned. A biller can view and edit that facility's **Charge Master** and post payments. A biller cannot change claim codes or the **Claim Status**; a fix is being tracked for the Claim Status. Until then, ask an admin to set it.

## Worked example

Scenario: give referral coordinators access to **Billing Operations**.

1. Open Organization Role Config.
2. Find the **referral coordinator** row and the **Billing Operations** column, and tick the box.
3. Click **Save Changes**.

Tell the affected users that the **Billing Operations** link is now in their sidebar. If you need finer-grained (read-only) billing access than the feature box provides, contact Medipyxis support.
