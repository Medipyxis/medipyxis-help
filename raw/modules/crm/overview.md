---
id: crm-overview
title: CRM overview
module: crm
audience: [bd, admin]
roles: [bd_rep, bd_manager, practice_admin, super_admin]
type: concept
estimated_minutes: 3
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/crm
related:
  - crm-practice-detail
  - business-development-overview
  - business-development-log-call-and-visit
tags: [CRM, practices, contacts, referrals]
---

# CRM overview

The CRM module is the central directory of referring practices and contacts. It tracks relationships, organizes outreach history, and feeds data to the Business Development dashboard.

![CRM practices list showing tabs and practice cards](../../assets/crm/practices.png)

*CRM practices list. Tabs across the top filter by relationship type or assignment.*

## Practice list tabs

Use the tabs across the top of the CRM to segment your practice list:

| Tab | Shows |
|---|---|
| **All** | Every practice in your organization's CRM. |
| **Assigned** | Practices assigned to the logged-in BD rep. |
| **Favorites** | Practices the rep has starred for quick access. |
| **PCP** | Primary care physician practices only. |
| **Home Health** | Home health agencies. |
| **Facility** | Skilled nursing facilities, hospitals, and other institutional referral sources. |
| **Archived** | Practices that are no longer active — hidden from route suggestions and searches unless this tab is selected. |

## Relationship to the Business Development module

Every call, visit, and spend entry logged from the BD dashboard writes back to the practice's activity record in the CRM. The CRM is the system of record; the BD dashboard is the action layer.

When a practice's referral volume or engagement metrics change, the **Next Best Action** and **AI Route Suggestions** widgets on the BD dashboard reflect the update starting the following morning.

## Adding practices

New practices can be added:
- Directly in the CRM using **+ New Practice** (top-right).
- Inline during referral creation in Referral Intake by clicking **+ Add new practice** in the Practice & PCP section.

Both methods create the same CRM record.

## Related

Auto-rendered from `related:` in frontmatter.
