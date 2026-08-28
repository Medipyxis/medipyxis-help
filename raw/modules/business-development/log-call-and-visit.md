---
id: business-development-log-call-and-visit
title: Log a call or in-person visit
module: business-development
audience: [bd]
roles: [bd_rep, bd_manager]
type: how-to
estimated_minutes: 3
last_reviewed: 2026-08-28
app_route: /facility/{facility_uuid}/bd-dashboard
related:
  - business-development-overview
  - crm-practice-detail
tags: [business-development, call, visit, activity, archive]
---

# Log a call or in-person visit

Record outbound calls and in-person practice visits from the Business Development dashboard so your activity history stays current in the CRM.

## Before you start

- The practice or contact must already exist in the CRM. If not, use **New Contact** first to add the record before logging activity against it.

## Log a call

1. **Open the BD dashboard.** Click **Business Development** in the sidebar.
2. **Tap Log Call** in the quick-add strip.
3. **Select the Practice.** Start typing to search your CRM — existing practices autocomplete.
4. **Select the Contact** (optional but recommended). Choose the specific physician, office manager, or coordinator you reached.
5. **Set the Call Outcome** from the dropdown (for example, whether you reached the contact, left a voicemail, or got no answer).
6. **Enter Notes.** Summarize the conversation — key topics, objections, commitments made.
7. **Set Next Steps** (optional). Add a follow-up date and action so the **Next Best Action** widget can surface a reminder.
8. **Tap Save.** The call appears in the practice's **Activity** tab in the CRM.

## Log a visit

1. **Tap New Visit** in the quick-add strip.
2. **Select the Practice.**
3. **Enter the Visit Date.** Defaults to today; adjust if logging retroactively.
4. **Add Visit Notes.** Document key talking points, materials left, and any commitments.
5. **Select the contacts you met** (optional) so individual contact engagement records stay current.
6. **Tap Save.** The visit logs to the practice's **Activity** tab and updates your dashboard metrics.

<Tip>
Prefer to talk it out? Use the **voice recording** option in the quick-add strip to capture the call or visit by voice; the recording is attached to the activity.
</Tip>

## Result

Both call and visit records are immediately visible in the CRM practice detail **Activity** tab and feed the **Next Best Action** and **AI Route Suggestions** algorithms.

<Note>
Logging activity promptly keeps your **Next Best Action** queue and **AI Route Suggestions** accurate — both recompute on demand (with a short cache), so a new call or visit is reflected almost immediately after you refresh.
</Note>

## Edit an activity

An activity you already saved stays editable from either the practice's Activity tab or the BD dashboard:

1. Open the row's **⋯** menu.
2. Click **Edit.** The composer reopens with the saved values.
3. Update fields and save. The activity keeps its original date and creator; an `edited_at` timestamp is stored for the audit trail.

## Archive an activity

Archiving hides an activity from the live feed without deleting it — useful for entries logged by mistake, duplicates, or activities that should not count toward dashboard metrics.

1. Open the row's **⋯** menu and click **Archive.**
2. A confirm dialog explains that the activity will be excluded from Next Best Action and MTD spend calculations. Confirm.
3. Toast confirms the archive. The row leaves the live view immediately.

**Undo an archive** — the same toast shows an **Undo** button for a few seconds. If you miss it, restore the row from the archived view (below).

### View archived activities

- On the practice detail Activity tab, switch the view mode from **Live** to **Archived** to list every archived activity for that practice.
- The row menu on an archived entry offers **Restore** to bring it back into the live feed.

<Warning>
Archived activities are excluded from Next Best Action, dashboard KPIs, and MTD spend rollups. They remain in the audit trail and export.
</Warning>

## Result

Both call and visit records are immediately visible in the CRM practice detail **Activity** tab and feed the **Next Best Action** and **AI Route Suggestions** algorithms.
