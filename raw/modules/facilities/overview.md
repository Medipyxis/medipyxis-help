---
id: facilities-overview
title: Facilities reference
module: facilities
audience: [admin]
roles: [practice_admin, super_admin]
type: reference
estimated_minutes: 3
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/facilities
related:
  - hr-compliance-overview
  - admin-role-config
tags: [facilities, admin, management]
---

# Facilities reference

The Facilities module lists every facility registered under your organization and provides controls to activate, deactivate, and manage each location.

![Facilities list showing columns FACILITY, CONTACT, STATS, STATUS, and ACTIONS](../../assets/facilities/list.png)

*Facilities list. Each row represents one facility location.*

## List columns

| Column | Contents |
|---|---|
| **FACILITY** | Facility name and address. Clicking the name opens the facility detail panel. |
| **CONTACT** | Primary contact name and phone number for the facility. |
| **STATS** | Aggregate counts for the facility: active providers, total patients, and visits in the current month. |
| **STATUS** | **Active** (facility is operational and visible across all modules) or **Inactive** (facility is hidden from scheduling, routing, and user assignment). |
| **ACTIONS** | Context menu (⋯) with options: Edit, Deactivate / Reactivate, View Users. |

## Active vs. inactive

| State | Effect |
|---|---|
| **Active** | Facility appears in provider assignment, Fleet Calendar routing, and patient assignment. Users can be assigned to it. |
| **Inactive** | Facility is hidden from all operational dropdowns. Existing data is preserved but no new activity can be logged against it. Users assigned only to this facility lose login access until reassigned. |

Demo environment counts: **28 total · 11 active · 17 inactive**.

## How to deactivate a facility

1. **Open the Facilities module** from the sidebar.
2. **Locate the facility** in the list. Use the search bar to filter by name or city if needed.
3. **Click the Actions menu** (⋯) in the row.
4. **Select Deactivate.** A confirmation dialog explains the downstream effects (users, scheduling, routing).
5. **Confirm.** The **STATUS** column updates to **Inactive** immediately.

To reactivate, repeat the steps and select **Reactivate** from the Actions menu.

<Warning>
Deactivating a facility immediately prevents any providers assigned exclusively to that facility from logging in. Reassign affected users in HR & Compliance → Facility Users before deactivating.
</Warning>

## Editing facility details

Click **Edit** from the Actions menu to update the facility name, address, NPI, contact, or billing information. Changes take effect immediately across all modules.

## Related

Auto-rendered from `related:` in frontmatter.
