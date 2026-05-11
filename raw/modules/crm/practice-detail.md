---
id: crm-practice-detail
title: Work with a practice detail record
module: crm
audience: [bd, admin]
roles: [bd_rep, bd_manager, practice_admin, super_admin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/crm
related:
  - crm-overview
  - business-development-log-call-and-visit
tags: [CRM, practice, activity, contacts]
---

# Work with a practice detail record

View and update a practice's profile, review engagement history, and log new activity directly from the practice detail panel.

## Before you start

- The practice must already exist in the CRM. Create it with **+ New Practice** if it does not.

## Steps

### Open the practice record

1. **Go to the CRM.** Click **CRM** in the sidebar.
2. **Find the practice.** Use the search bar or filter by tab (**Assigned**, **PCP**, etc.).
3. **Click the practice name** to open the detail panel.

### Navigate the detail tabs

The practice detail panel has three tabs:

| Tab | Contents |
|---|---|
| **Overview** | Practice name, specialty, address, phone, fax, NPI, assigned BD rep, and all linked contacts. |
| **Activity** | Chronological log of calls, visits, and notes — with date, rep name, outcome, and notes for each entry. |
| **Docs** | Uploaded files associated with the practice (referral agreements, contracts, marketing collateral). |

### Log activity from the practice record

4. **Use the quick-action buttons** at the top of the detail panel:
   - **Call** — opens the call log form with the practice pre-filled.
   - **Visit** — opens the in-person visit form with the practice pre-filled.
   - **Note** — opens a free-text note field for internal observations that do not fit a call or visit entry.
5. **Complete the form** and click **Save**. The entry appears immediately in the **Activity** tab.

### Manage contacts

6. **Click + Add Contact** in the **Overview** tab to add a physician, office manager, or referral coordinator to this practice.
7. Fill in **First Name**, **Last Name**, **Role**, **Phone**, and **Email**, then click **Save Contact**.

### Archive a practice

8. **Click the Actions menu** (⋯ top-right of the detail panel) and select **Archive**. Archived practices move to the **Archived** tab and are excluded from BD route suggestions.

## Result

Changes to the practice record are reflected immediately in the CRM list and in the BD dashboard's **Next Best Action** and **AI Route Suggestions** widgets the following morning.

<Warning>
Archiving a practice does not delete its activity history or associated contacts. You can unarchive a practice at any time from the **Archived** tab.
</Warning>

## Related

Auto-rendered from `related:` in frontmatter.
