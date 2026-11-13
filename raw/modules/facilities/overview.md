---
id: facilities-overview
title: Facilities reference
module: facilities
audience: [admin]
roles: [admin]
type: reference
estimated_minutes: 3
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/facilities
related:
  - hr-compliance-overview
  - admin-role-config
tags: [facilities, admin, management]
---

# Facilities reference

The Facilities module (**Facility Management**) lists the facilities in your organization and lets you add, edit, deactivate and reactivate them.

![Facilities list showing columns FACILITY, CONTACT, STATS, STATUS, and ACTIONS](../../assets/facilities/list.png)

_Facilities list. Each row represents one facility location._

## List columns

| Column | Contents |
|---|---|
| **FACILITY** | Facility name, NPI and address. |
| **CONTACT** | The facility's phone, email and fax, or “No contact”. |
| **STATS** | Counts of users, patients and inventory items for the facility. |
| **STATUS** | **Active** or **Inactive**. |
| **ACTIONS** | Buttons to open the facility's page, view details, edit, and deactivate or reactivate. |

Above the list, counters show active and inactive facilities and total patients. The **Active Facilities** and **Deactivated Facilities** tabs switch between the two lists, and **Search facilities** filters them.

## Active vs. inactive

| State | Effect |
|---|---|
| **Active** | The facility appears in users' facility lists, so people assigned to it can work in it. |
| **Inactive** | The facility no longer appears in anyone's facility list. Its data is kept. A user assigned only to that facility has no facility to work in until they are given another one. |

## How to deactivate a facility

1. **Open the Facilities module** from the sidebar.
2. **Find the facility** on the **Active Facilities** tab. Use the search box if needed.
3. **Click Deactivate** in the row's actions. There is no confirmation step: the facility is deactivated straight away and moves to **Deactivated Facilities**.

To reactivate, open **Deactivated Facilities** and click **Reactivate** on the row.

Before you deactivate a facility, make sure anyone who works only there has been given access to another facility.

## Editing facility details

Click **Edit** in the row's actions to update the facility name, legal / billing name, NPI, tax number, phone, email, fax, address and time zone. Click **Add Facility** to create a new one. Your organization has a location limit; when it is reached, **Add Facility** is disabled.

## Related

Auto-rendered from `related:` in frontmatter.
