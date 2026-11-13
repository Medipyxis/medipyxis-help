---
id: billing-stedi-actions-inbox
title: Stedi Actions Inbox
module: billing
audience: [billing, admin]
roles: [biller, admin]
type: how-to
estimated_minutes: 10
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing/stedi-actions
related:
  - billing-overview
  - billing-work-queue
  - billing-submit-claim
  - billing-cms-1500-and-837p-fields
  - billing-denial-management
  - billing-era-posting
tags: [billing, Stedi, webhooks, 999, 277CA, 271, 835, enrollment, action-inbox]
---

The Stedi Actions Inbox shows Stedi webhooks that need a biller's eye: 277CA claim rejections and 835 remittance (ERA) notices. It is a triage surface — one row per event, with assignment, notes, resolve, and dismiss.

Open it at **Billing → Stedi Actions**.

## What lands here

Every Stedi webhook is recorded. The inbox shows the ones Medipyxis marks as needing attention, filtered to your facility.

The **Event Type** filter lists four types (File Failed, Transaction Processed, Enrollment Rejected, Enrollment Task). At this release only Transaction Processed rows are created:

- **Transaction Processed** — a 277CA that rejected a claim you submitted, or an 835 remittance (ERA) notice.

File-failure and enrollment events from Stedi are recorded but do not appear in the inbox at this release. A fix is being tracked.

Medipyxis stores the event, resolves it to your facility, links it to the affected claim or enrollment when it can, and puts it in this queue.

## The four statuses

Every row starts in **Open**. You move it through the four statuses using the buttons on the row:

- **Open** — new, unassigned or unread.
- **In Progress** — someone assigned it. The row is being worked.
- **Resolved** — the underlying issue is fixed.
- **Dismissed** — the event is not actionable.

Filters at the top let you scope by status, event type, payer, and assignee. Default view is Open across all types.

## Reading a row

Each row expands to show the enrichment Medipyxis added on top of the raw Stedi payload:

- **Claim link** — when the event references a submitted claim, the row shows the patient name, the claim's local status, and the payer name. Click through to open the claim detail.
- **Raw payload** — the original Stedi webhook body, unmodified, for reference or to send back to Stedi support.

## The five actions

Anyone with access to your facility's billing can Assign, Unassign, Note, Resolve and Dismiss. Unassign is in the bar that appears when you tick rows.

- **Assign** — Puts the row in your name. Sets status to **In Progress**. Others still see it — assignment is not exclusive.
- **Unassign** — Removes the assignment and returns the row to Open.
- **Note** — Adds a comment on the row without changing status. Notes are stacked in order and stamped with the time (not the author).
- **Resolve** — Marks the row **Resolved** with a resolution note. Records who resolved it and when.
- **Dismiss** — Marks the row Dismissed and records who dismissed it and when. No reason is asked for; add a Note first if you want one on record.

Resolve requires a note. Dismiss does not. Resolving replaces the row's earlier notes with the resolution note.

## Events that arrive without a facility

Occasionally an event arrives from Stedi without a facility link. When that happens, no biller sees it in their facility's view. If you expect an event (for example, a payer response for a claim you submitted) and it does not appear, ask Medipyxis support — they can attach it to your facility so your billers see it.

## How this connects to the work queue

The Actions Inbox is the event log; the [Work queue](/modules/billing/work-queue/) is the claim-centric view.

- When a 277CA arrives for a claim, the claim's status moves from submitted to accepted or rejected.
- A rejected claim shows status rejected in billing; an 835 posts its payment to the claim's ledger.
- The event stays in the Actions Inbox as the audit record of when the response arrived and what it said.

Use the Actions Inbox when you need the exact 277CA reason (the **Reason** column) or the raw payload.

## Common failure patterns

- **277CA rejection** — the Reason column shows the 277CA status as category:status code (for example A7 with its status code). Fix the field the code names on the claim and resubmit.
- **Stedi file failures** do not appear in the inbox at this release; check the claim's submission result on the claim page.
- **Enrollment rejections** do not appear in the inbox at this release; check the Enrollment page.

## What to bring to a Stedi support ticket

If an event needs escalation to Stedi, copy the event's id from the raw payload, the received time (**Webhook received**), and the raw payload itself. The raw payload: open **Raw Payload** in the expanded row and select the text to copy it.

Stedi support looks these up by event ID.

## Related

Auto-rendered from `related:` in frontmatter.
