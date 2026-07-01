---
id: admin-role-config
title: Configure organization roles and permissions
module: admin
audience: [admin]
roles: [admin, superadmin]
type: reference
estimated_minutes: 8
last_reviewed: 2026-06-29
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

- Access requires the `superadmin` role, or a facility-admin role (`admin`, `clinical_manager`, or `bd_manager`) for at least one facility.
- Configuration is **per organization** — you select the organization at the top of the screen.
- Changes take effect on an affected user's next page load (the configuration is cached).

## Open the screen

Navigate to **`/administrator` → Organization Role Config** (`/administrator/org-role-config`). The `/administrator` cockpit link appears in the sidebar for admin roles, outside the facility-scoped navigation.

![Organization Role Config matrix showing rows of seeded roles (admin, clinician, biller, etc.) and columns of feature permissions with checkboxes.](../assets/admin/role-config.png)
*The **Organization Role Config** matrix. Rows are roles; columns are features. A checked box means the role has access to that feature.*

## Seeded roles

Medipyxis ships ten built-in roles. They cover the most common job functions and cannot be deleted, but their permissions can be adjusted.

| Role | Primary function |
|---|---|
| `admin` | Full organization access; manages all facilities and users |
| `clinical_manager` | Oversees clinical staff; access to Fleet Calendar, Visit Wizard, Oversight Cockpit |
| `medical_director` | Clinical sign-off; access to LCD Navigator™ audit and reporting |
| `clinician` | Visit documentation; access to Visit Wizard, patient records, orders |
| `referral_coordinator` | Manages Referral Intake kanban and Fax Review Queue |
| `bd_rep` | Business Development; CRM, BD Dashboard, limited patient view |
| `bd_manager` | BD rep management; CRM, BD Dashboard, Oversight Cockpit BD metrics |
| `finance_ap` | Accounts Payable; Billing (read), Inventory Accounts Payable |
| `vendor_coordinator` | Vendor-facing inventory management; Product Catalog and inventory |
| `biller` | Billing access; Claims, Denials, Payments, and the facility Charge Master |

<Note>
Platform-level roles `superadmin` and `customersupport` (Medipyxis-internal) sit above these organization roles and are not configured here.
</Note>

## Feature permission matrix

The matrix uses checkboxes at the intersection of each role and feature. A checked box means the role can access that feature.

| Feature | Typical roles with access |
|---|---|
| Dashboard | All roles |
| Referral Intake | `referral_coordinator`, `clinician`, `clinical_manager`, `admin` |
| Patient Management | `clinician`, `clinical_manager`, `medical_director`, `admin` |
| Visit Wizard / EHR | `clinician`, `clinical_manager`, `medical_director` |
| Fleet Calendar | `clinician`, `clinical_manager`, `admin` |
| Inventory | `vendor_coordinator`, `finance_ap`, `clinical_manager`, `admin` |
| Orders & DME | `clinician`, `clinical_manager` |
| Billing | `biller`, `finance_ap`, `admin` |
| CRM | `bd_rep`, `bd_manager`, `admin` |
| Business Development | `bd_rep`, `bd_manager`, `admin` |
| Oversight Cockpit | `clinical_manager`, `medical_director`, `bd_manager`, `admin` |
| HR & Compliance | `admin`, `clinical_manager` |
| Administrator | `superadmin`, `admin` |
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

Billing roles (`biller` and related) are scoped to a specific facility — they cannot hold a global (all-facility) wildcard. Assign the billing role at the facility where the user works. The `biller` role can view and edit that facility's **Charge Master**; creating and editing claim codes and claim status remains governed by the same role configuration.

## Worked example

Scenario: give `referral_coordinator` visibility into **Billing** so coordinators can see claim status without creating or editing claims.

1. Open Organization Role Config and select the organization.
2. Find the `referral_coordinator` row and the **Billing** column and check the box.
3. Click **Save**.
4. Notify affected users that the Billing link is now visible in their sidebar. If you need finer-grained (read-only) billing access than the feature toggle provides, contact Medipyxis support.
