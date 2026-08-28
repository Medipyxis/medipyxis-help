---
id: hr-compliance-announcements
title: Post and manage announcements
module: hr-compliance
audience: [admin, clinician, bd, biller, intake]
roles: [admin, hr_admin, clinical_manager]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-08-28
app_route: /hr-announcement-composer
related:
  - hr-compliance-overview
  - team-chat-overview
tags: [HR, announcements, compliance, kudos, comms]
---

Announcements broadcast a message to your team on their dashboard and in the announcements reader. Use them for compliance notices, HR policy updates, culture shout-outs, and operational reminders that need to reach a specific set of roles.

## Before you start

- You need the `admin`, `hr_admin`, or `clinical_manager` role to post announcements.
- Every user in the target audience can read announcements, discuss them inline, and react — no additional grant is required.

## Categories

Pick the category that matches your intent. The reader page color-codes each one so recipients scan them fast.

| Category | Use for |
|---|---|
| **Compliance** | Policy changes, mandatory acknowledgements, regulatory updates |
| **HR** | Benefits, PTO, onboarding, org changes |
| **Culture** | Team celebrations, values reminders, org-wide morale |
| **Operations** | Workflow changes, downtime notices, process updates |
| **Events** | All-hands, offsites, training sessions |
| **Kudos** | Peer recognition — visible to everyone by default |

## Compose an announcement

1. **Open the composer.** From HR & Compliance, click **Announcements → New announcement**. The direct route is `/hr-announcement-composer`.
2. **Pick the Category.** This drives the color badge on the reader page.
3. **Write the Title and Body.** Keep the title short and specific — the reader page shows titles in a scannable list.
4. **Pick the audience.**
   - **All team** — every user with access to the current facility.
   - **Specific roles** — check one or more roles. The composer shows the live count of users each role would reach.
   - **Territories** — narrow further to a territory (BD reps, home health regions).
5. **Attach files** if needed. Drag PDFs or documents into the attachments zone. Attachments are stored per announcement and appear inline on the reader page.
6. **Add a link** (optional). Paste a URL — the reader shows it as a call-to-action button below the body.
7. **Pick delivery timing.**
   - **Immediate** — posts as soon as you save.
   - **Scheduled** — pick a date and time in your local timezone. The system stores it in UTC and releases it at that moment.
8. **Save.** Immediate announcements appear on every recipient's dashboard right away. Scheduled announcements move to the pending queue until their release time.

## Kudos

Kudos are a lightweight subset of announcements meant for peer recognition. Any user can post a Kudos from the inline composer on the announcements reader page — you do not need admin rights. Kudos always go to all team members and are pinned in the reader for a shorter window.

## Reader page

- Every user opens **Announcements** from the top nav or the dashboard tile to see their queue.
- Announcements land in reverse-chronological order, color-coded by category.
- Clicking one opens the detail view with body, attachments, and an inline **Discussion** thread — the thread is a scoped team-chat conversation, so replies and reactions live under the announcement instead of cluttering the main chat.
- Kudos appear pinned at the top when active.

## Edit or retract

Composers and admins can reopen an announcement from the composer's edit mode:

1. On the reader page, click your announcement, then **⋯ → Edit**.
2. Update fields; save. Recipients see the revised body on their next reader refresh.
3. To retract, open **⋯ → Delete**. The announcement disappears from the reader; a delete audit row is kept for compliance.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Recipients don't see the announcement | Wrong roles selected or user has no facility grant | Recheck target roles; confirm the recipient has access to this facility |
| Scheduled announcement did not fire | Scheduled time was in the past when saved | Reschedule to a future time and save again |
| Attachment won't upload | File over 25 MB or unsupported type | Split the file or convert to PDF; retry |
| Kudos not showing in reader | Facility's Kudos rotation window elapsed | Kudos rotate off the pin after 7 days; still findable via search |
