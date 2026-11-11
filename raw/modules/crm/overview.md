---
id: crm-overview
title: CRM overview
module: crm
audience: [bd, admin]
roles: [bd_rep, bd_manager, admin]
type: concept
estimated_minutes: 3
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/crm
related:
  - crm-practice-detail
  - business-development-overview
  - business-development-log-call-and-visit
tags: [CRM, practices, contacts, referrals]
---

# CRM overview

The CRM module is the directory of referring practices and contacts. It tracks relationships, keeps the outreach history logged from the Business Development dashboard, and feeds the BD dashboard's suggestions.

A **Practices / Vendors** toggle switches the directory between referring **practices** and the **vendors** hub. On the Vendors side, **Add Vendor** registers a vendor, and you can enable it at specific clinics; practices and vendors are managed as separate lists.

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/8bJ02pgQcZE"
          title="Built-In CRM for Wound Care Practices: Manage Vendors, Reps & Referral Sources"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
</div>
<span class="video-caption">Built-in CRM tour: managing vendors, reps, and referral sources without external tools.</span>

![CRM practices list showing tabs and practice cards](../../assets/crm/practices.png)

_CRM practices list. Tabs across the top filter by practice type or assignment._

## Practice list tabs

Use the tabs across the top of the CRM to segment your practice list:

| Tab | Shows |
|---|---|
| **All** | Every practice that is not archived. |
| **Assigned** | Practices that have a BD rep assigned. A practice assigned to you shows a **Me** badge. |
| **Favorites** | Practices you have starred. |
| **PCP** | Practices marked as primary care. |
| **Home Health** | Home health agencies. |
| **Facility** | Practices marked as facilities. |
| **Archived** | Archived practices. Archived practices are left out of the other tabs and of AI Route Suggestions. |

You can also filter by BD rep, grade, specialty, status and whether a practice has contacts, and use the **Total Practices**, **Overdue** and **No Contact** counters.

## Relationship to the Business Development module

Calls, visits, spend and voice notes logged from the BD dashboard are saved against the practice and show in the practice's **Activity** tab in the CRM.

The BD dashboard's **AI Route Suggestions** are recalculated in the app with a 5-minute cache, and **Next Best Action** is worked out when the dashboard loads — neither waits for an overnight batch.

## Adding practices

New practices can be added:

- In the CRM, with the **Add New Practice** button.
- While creating a referral in Referral Intake, with **Add New Practice**.

Both open the same **Add New Practice** form and create the same CRM record.

## Archive or restore a practice

Open the **⋮** menu on a practice card and choose **Archive**. The practice moves to the **Archived** tab; its activity history and contacts are kept. To bring it back, open the same menu on the archived practice and choose **Restore**.

## Related

Auto-rendered from `related:` in frontmatter.
