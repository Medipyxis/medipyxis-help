---
id: admin-role-config
title: Configure organization roles and permissions
module: admin
audience: [admin]
roles: [admin, superadmin]
type: reference
estimated_minutes: 8
last_reviewed: 2026-10-29
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

The **Organization Role Config** screen is where you control what each role can see and do across your Medipyxis organization.

## Before you start

- Access requires a facility-admin role (admin, clinical manager, or BD manager) for at least one facility, or Medipyxis platform-level access.
- Configuration is **per organization** — you select the organization at the top of the screen.
- Changes take effect on an affected user's next page load.

## Open the screen

Open the **Administrator** cockpit, then choose **Organization Role Config**. The Administrator cockpit link appears in the sidebar for admin roles, outside the facility-scoped navigation.

![Organization Role Config matrix showing rows of seeded roles (admin, clinician, biller, etc.) and columns of feature permissions with checkboxes.](../assets/admin/role-config.png)
*The **Organization Role Config** matrix. Rows are roles; columns are features. A checked box means the role has access to that feature.*

## Seeded roles

Medipyxis ships ten built-in roles. They cover the most common job functions and cannot be deleted, but their permissions can be adjusted.

| Role | Primary function |
|---|---|
| Admin | Full organization access; manages all facilities and users |
| Clinical manager | Oversees clinical staff; access to Fleet Calendar, Visit Wizard, Oversight Cockpit |
| Medical director | Clinical sign-off; access to LCD Navigator™ audit and reporting |
| Clinician | Visit documentation; access to Visit Wizard, patient records, orders |
| Referral coordinator | Manages Referral Intake kanban and Fax Review Queue |
| BD rep | Business Development; CRM, BD Dashboard, limited patient view |
| BD manager | BD rep management; CRM, BD Dashboard, Oversight Cockpit BD metrics |
| Finance (AP) | Accounts Payable; Billing (read), Inventory Accounts Payable |
| Vendor coordinator | Vendor-facing inventory management; Product Catalog and inventory |
| Biller | Billing access; Claims, Denials, Payments, and the facility Charge Master |

<Note>
Platform-level roles used internally by Medipyxis staff sit above these organization roles and are not configured here.
</Note>

## Feature permission matrix

The matrix uses checkboxes at the intersection of each role and feature. A checked box means the role can access that feature.

| Feature | Typical roles with access |
|---|---|
| Dashboard | All roles |
| Referral Intake | Referral coordinator, clinician, clinical manager, admin |
| Patient Management | Clinician, clinical manager, medical director, admin |
| Visit Wizard / EHR | Clinician, clinical manager, medical director |
| Fleet Calendar | Clinician, clinical manager, admin |
| Inventory | Vendor coordinator, finance (AP), clinical manager, admin |
| Orders & DME | Clinician, clinical manager |
| Billing | Biller, finance (AP), admin |
| CRM | BD rep, BD manager, admin |
| Business Development | BD rep, BD manager, admin |
| Oversight Cockpit | Clinical manager, medical director, BD manager, admin |
| HR & Compliance | Admin, clinical manager |
| Administrator | Admin |
| Team Chat | All roles |

<Note>
This matrix shows typical defaults. Your organization may have customized these — always verify the live checkboxes in Organization Role Config rather than relying on the table above.
</Note>

## Set a permission

1. Open **Organization Role Config** and select the **organization** from the dropdown at the top.
2. Find the role row and feature column you want to change.
3. **Check or uncheck** the box.
4. Click **Save**. A confirmation toast appears; the change applies to affected users on their next page load.

<Warning>
Removing a feature from a role hides that sidebar link for every user with that role on their next load. Communicate permission changes to affected staff in advance.
</Warning>

## Billing roles are facility-scoped

Billing roles (biller and related) are scoped to a specific facility — they cannot be assigned across all facilities at once. Assign the billing role at the facility where the user works. The biller role can view and edit that facility's **Charge Master**; creating and editing claim codes and claim status remains governed by the same role configuration.

## Worked example

Scenario: give referral coordinators visibility into **Billing** so they can see claim status without creating or editing claims.

1. Open Organization Role Config and select the organization.
2. Find the referral coordinator row and the **Billing** column and check the box.
3. Click **Save**.
4. Notify affected users that the Billing link is now visible in their sidebar. If you need finer-grained (read-only) billing access than the feature toggle provides, contact Medipyxis support.
