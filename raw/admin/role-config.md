---
id: admin-role-config
title: Configure organization roles and permissions
module: admin
audience: [admin]
roles: [practice_admin, super_admin]
type: reference
estimated_minutes: 8
last_reviewed: 2026-04-24
app_route: /administrator
related:
  - admin-index
  - admin-user-management
  - admin-security-and-compliance
tags: [roles, permissions, RBAC, admin]
prerequisites:
  - admin-index
---

# Configure organization roles and permissions

The **Organization Role Config** screen at `/administrator` is the single source of truth for what every role can see and do across your entire Medipyxis organization.

## Before you start

- Only `super_admin` and `practice_admin` accounts can access `/administrator`.
- Changes are organization-wide and immediate — they affect all facilities simultaneously.
- Plan permission changes during off-peak hours when staff are least likely to be mid-workflow.

## The Role Config screen

![Organization Role Config matrix showing rows of seeded roles (admin, clinician, biller, etc.) and columns of module permissions with toggle switches.](../assets/admin/role-config.png)
*The **Organization Role Config** matrix at `/administrator`. Rows are roles; columns are modules. Filled toggles indicate the role has access.*

Navigate to `/administrator` (the link appears in the sidebar for admin roles, outside the facility-scoped navigation).

## Seeded roles

Medipyxis ships ten built-in roles. They cover the most common job functions and cannot be deleted, but their permissions can be adjusted.

| Role | Primary function |
|---|---|
| `admin` | Full organization access; manages all facilities and users |
| `clinical_manager` | Oversees clinical staff; access to Fleet Calendar, Visit Wizard, Oversight Cockpit |
| `medical_director` | Clinical sign-off; access to LCD Navigator™ audit queue and reporting |
| `clinician` | Visit documentation; access to Visit Wizard, patient records, orders |
| `referral_coordinator` | Manages Referral Intake kanban and Fax Review Queue |
| `bd_rep` | Business Development; CRM, BD Dashboard, limited patient view |
| `bd_manager` | BD rep management; CRM, BD Dashboard, Oversight Cockpit BD metrics |
| `finance_ap` | Accounts Payable; Billing (read), Inventory Accounts Payable |
| `vendor_coordinator` | Vendor-facing inventory management; Product Catalog, IVR Tracking |
| `biller` | Full Billing access; Claims, Denials, Payments, Superbill Config |

## Module permission matrix

The matrix uses toggle switches at the intersection of each role and module. A filled toggle means the role can access that module in the sidebar.

| Module | Typical roles with access |
|---|---|
| Dashboard | All roles |
| Referral Intake | `referral_coordinator`, `clinician`, `clinical_manager`, `admin` |
| Patient Management | `clinician`, `clinical_manager`, `medical_director`, `admin` |
| Visit Wizard / EHR | `clinician`, `np`, `md`, `clinical_manager` |
| Fleet Calendar | `clinician`, `clinical_manager`, `admin` |
| Inventory | `vendor_coordinator`, `finance_ap`, `clinical_manager`, `admin` |
| Orders & DME | `clinician`, `clinical_manager` |
| Billing | `biller`, `finance_ap`, `admin` |
| CRM | `bd_rep`, `bd_manager`, `admin` |
| Business Development | `bd_rep`, `bd_manager`, `admin` |
| Oversight Cockpit | `clinical_manager`, `medical_director`, `bd_manager`, `admin` |
| HR & Compliance | `practice_admin`, `super_admin` |
| Administrator | `super_admin`, `practice_admin` |
| Team Chat | All roles |

<Note>
This matrix shows defaults. Your organization may have already customized these — always verify the live toggles in `/administrator` rather than relying on the table above.
</Note>

## Toggle a permission

1. Navigate to `/administrator`.
2. Locate the role row and module column you want to change.
3. Click the toggle. It flips state immediately — there is no separate Save button.
4. Verify by opening a browser tab in an incognito window logged in as a user with that role. The sidebar change is visible on their next page load.

## Clone a role to create a custom variant

When a seeded role is close but not quite right, clone it rather than modifying the seeded role itself. This preserves the original as a baseline.

1. In the Role Config matrix, hover over the role row you want to copy.
2. Click **Clone Role** (appears on hover at the right end of the row).
3. Enter a name for the new role (e.g., `senior_bd_rep`).
4. The clone inherits all permissions from the source role. Adjust toggles as needed.
5. The new role is immediately available in **HR & Compliance → Facility Users** role dropdowns.

## Understanding blast radius

Before changing a permission, assess how many users are affected:

1. In the Role Config matrix, click the role name to open a side panel.
2. The panel shows **Users with this role** — a count and a list by facility.
3. If the count is high, consider creating a cloned sub-role for the subset of users who need the new permission, rather than changing the shared role.

<Warning>
Removing a module permission from a role will immediately hide that sidebar link for every user with that role. Any unsaved work they have open in that module will be lost when the page refreshes.
</Warning>

## How to walk through a permission change end-to-end

Scenario: You want to give `referral_coordinator` read access to **Billing** so coordinators can see claim status without creating or editing claims.

1. Navigate to `/administrator`.
2. Find the `referral_coordinator` row and the **Billing** column.
3. Click the toggle to enable it.
4. In the Billing module's own settings (visible once access is on), confirm the role has read-only mode enforced — contact Medipyxis support if granular sub-module permissions are needed.
5. Notify affected users that the Billing link is now visible in their sidebar.
