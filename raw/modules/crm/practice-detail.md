---
id: crm-practice-detail
title: Work with a practice detail record
module: crm
audience: [bd, admin]
roles: [bd_rep, bd_manager, admin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/crm
related:
  - crm-overview
  - business-development-log-call-and-visit
tags: [CRM, practice, activity, contacts]
---

# Work with a practice detail record

View a practice's profile and contacts, review its activity history, and log new activity from the practice detail page.

## Before you start

- The practice must already exist in the CRM. Create it with **Add New Practice** if it does not.

## Steps

### Open the practice record

1. **Go to the CRM.** Click **CRM** in the sidebar.
2. **Find the practice.** Use the search bar or a tab (**Assigned**, **PCP**, and so on).
3. **Click the practice** to open its detail page.

### Navigate the detail tabs

The practice detail page has these tabs:

| Tab | Contents |
|---|---|
| **Overview** | The practice's address, phone, email and fax, month-to-date spend, the practice contact, and **Additional Contacts**. |
| **Activity** | The calls, visits, voice notes, spend and notes logged for the practice, with filters by type and an **Archived** filter. |
| **Docs** | Documents uploaded for the practice. You can view, send or delete a document, or upload a new one. |
| **Providers**, **Residents**, **Clinical Notes** | Shown only when the practice is a Skilled Nursing Facility or Assisted Living Facility. |

### Log activity from the practice record

1. **Use the Call, Visit and Note buttons** at the top of the page to log an interaction for this practice. Call opens the call form, Visit the visit form, and Note a note. On a contact, the phone, email and text buttons open your phone, email or messaging app.
2. **Complete the form and save.** The entry appears in the **Activity** tab.

### Manage contacts

1. **Click Add** next to **Additional Contacts** on the **Overview** tab.
2. Fill in **Full Name** (required), **Job Title**, **Phone**, **Email**, **Contact Type** and **Notes**, tick **Set as primary contact** if needed, then click **Add Contact**.

### Archive a practice

1. In the CRM list, open the **⋮** menu on the practice card and choose **Archive**. Archived practices move to the **Archived** tab and are left out of AI Route Suggestions.

## Result

Changes show in the CRM straight away. The BD dashboard's suggestions pick them up the next time they are worked out: AI Route Suggestions keeps results for up to 5 minutes, and nothing waits for an overnight run.

Archiving a practice does not delete its activity history or contacts. To unarchive it, open the **Archived** tab, open the practice card's **⋮** menu, and choose **Restore**.

## Related

Auto-rendered from `related:` in frontmatter.
