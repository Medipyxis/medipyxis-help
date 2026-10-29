---
id: billing-stedi-actions-inbox
title: Stedi Actions Inbox
module: billing
audience: [billing, admin]
roles: [biller, admin]
type: how-to
estimated_minutes: 10
last_reviewed: 2026-10-29
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

The Stedi Actions Inbox is where every webhook from Stedi lands: file failures, transaction responses, enrollment updates. It is a triage surface — one row per event, with assignment, notes, resolve, and dismiss — so nothing that comes back from the clearinghouse gets lost between submission and the work queue.

Open it at **Billing → Stedi Actions**.

## What lands here

Every event Stedi sends via webhook is recorded and shown, filtered to your facility. There are four event types:

| Event type | What it means |
|---|---|
| `file.failed` | Stedi rejected the submitted 837P outright — the file did not reach the payer. Fix the payload and resubmit. |
| `transaction.processed` | A payer response came back for a claim you submitted. Includes 999 (acknowledgement), 277CA (payer receipt/reject), 271 (eligibility response), 835 (remittance advice). |
| `enrollment.rejected` | A payer refused an enrollment request submitted through the Enrollment page. Includes the rejection reason. |
| `enrollment.task.assigned` | Stedi opened a manual task on a payer enrollment (typically a form the payer needs signed). |

The event type and its payload come from Stedi verbatim. Medipyxis stores the event, resolves it to your facility, links it to the affected claim or enrollment when it can, and puts it in this queue.

## The four statuses

Every row starts in **Open**. You move it through the four statuses using the buttons on the row:

- **Open** — new, unassigned or unread.
- **In Progress** — someone assigned it to themselves or added a note. The row is being worked.
- **Resolved** — the underlying issue is fixed (claim was corrected and resubmitted, enrollment was re-requested, ERA was posted).
- **Dismissed** — the event is not actionable (test file, duplicate webhook, informational-only response).

Filters at the top let you scope by status, event type, payer, and assignee. Default view is Open across all types.

## Reading a row

Each row expands to show the enrichment Medipyxis added on top of the raw Stedi payload:

- **Claim link** — when the event references a submitted claim, the row shows the patient name, the claim's local status, and the payer name. Click through to open the claim detail.
- **Enrollment link** — when the event references an enrollment, the row shows the payer, the transaction type (professional claim submission, eligibility, claim status, remittance), and the current status.
- **Affected claims count** — for `file.failed` events, how many claims were in the rejected file.
- **Raw payload** — the original Stedi webhook body, unmodified, for reference or to send back to Stedi support.

## The five actions

Right side of every row:

| Action | What it does | Who can do it |
|---|---|---|
| **Assign** | Puts the row in your name. Sets status to **In Progress**. Others still see it — assignment is not exclusive. | Any biller. |
| **Unassign** | Removes the assignment. Returns the row to **Open** if no note or resolution is on it. | The assignee or admin. |
| **Note** | Adds a comment on the row without changing status. Notes are stacked chronologically and stamped with author + time. | Any biller. |
| **Resolve** | Marks the row **Resolved** with a resolution note. Records who resolved it and when. | Any biller. |
| **Dismiss** | Marks the row **Dismissed** with a reason. Same audit shape as resolve. | Any biller. |

Resolve and Dismiss both take a required note. That note is the audit trail — three months from now, when a payer asks why a specific 277CA rejection wasn't worked, the resolution note is the answer.

## Events that arrive without a facility

Occasionally an event arrives from Stedi without a facility link. When that happens, no biller sees it in their facility's view. If you expect an event (for example, a payer response for a claim you submitted) and it does not appear, ask Medipyxis support — they can attach it to your facility so your billers see it.

## How this connects to the work queue

The Actions Inbox is the raw event log; the [Work queue](./work-queue.md) is the claim-centric view. When a `transaction.processed` event carries a 277CA rejection for a claim, both surfaces move in lockstep:

- The claim's Stedi status updates from submitted to the payer's specific state (accepted, rejected on the 277CA, paid, etc.).
- The claim appears in the Work Queue under the appropriate bucket ("Needs biller attention" for a rejection, "Paid" when an 835 arrives).
- The event stays in the Actions Inbox as the audit record of when the response arrived and what it said.

Work the claim in the Work Queue. Use the Actions Inbox when the biller needs to see the exact 277CA reason code or the raw 835 for reconciliation, or when the event is not tied to a claim at all (enrollment tasks, file failures).

## Common failure patterns

<Note>
**File.failed with "structural validation error"** — the 837P payload was malformed before it reached the payer. Almost always a missing required field the pre-flight didn't catch. Open the claim, check the fields called out in [CMS-1500 and 837P fields](./cms-1500-and-837p-fields.md), resubmit.
</Note>

<Note>
**277CA with a payer-specific reject code** — the file was well-formed but the payer refused it. The reason code (from the `AAA` segment) tells you why: `AAA*Y*72` is subscriber-not-found, `AAA*Y*73` is patient-not-found, `AAA*Y*79` is transaction-not-supported. Fix the referenced field on the claim and resubmit.
</Note>

<Note>
**Enrollment.rejected with "Provider not enrolled with payer"** — the provider needs to enroll directly with the payer (typically via CAQH or the payer's portal) before Stedi can register the enrollment on your side. This is not something Medipyxis can fix — it is a step that happens outside the system.
</Note>

## What to bring to a Stedi support ticket

If an event needs escalation to Stedi, copy these from the expanded row:

1. The event ID (top of the expanded panel).
2. The event type (from the row).
3. The timestamp when the event was created.
4. The raw payload (there is a copy button in the expanded view).

Stedi support looks these up by event ID. Anything else you share is context; those four items are the lookup key.

## Related

Auto-rendered from `related:` in frontmatter.
