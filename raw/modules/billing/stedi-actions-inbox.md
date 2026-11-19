---
id: billing-stedi-actions-inbox
title: Stedi Actions Inbox
module: billing
audience: [billing, admin]
roles: [biller, admin]
type: how-to
estimated_minutes: 3
last_reviewed: 2026-11-18
app_route: /facility/{facility_uuid}/billing/stedi-actions
tags: [billing, Stedi, webhooks, 999, 277CA, 271, 835, enrollment, action-inbox]
---

# Stedi Actions Inbox

The Stedi Actions inbox collects events Stedi sends back about your claims and enrollments: file failures, payer responses, and enrollment updates. Each event is one row you can assign, note, resolve, or dismiss.

Open it at **Billing → Stedi Actions**.

---

## What lands here

Events are filtered to your facility. There are four event types:

| **Event type** | **What it means** |
| --- | --- |
| file.failed | Stedi rejected a submitted claim file; it did not reach the payer. Fix the claim and resubmit. |
| transaction.processed | A payer response came back, for example an acknowledgement, a claim status response, or a remittance. |
| enrollment.rejected | A payer refused an enrollment request sent from the Payer Enrollment page. |
| enrollment.task.assigned | Stedi opened a task on a payer enrollment, often a form the payer needs signed. |

---

## The four statuses

- **Open** — new and unassigned. The list shows Open events by default.
- **In Progress** — assigned to someone.
- **Resolved** — the underlying issue is fixed.
- **Dismissed** — not actionable, such as a duplicate or informational response.

---

## Find events

Filter by **Status**, **Event Type**, **Payer** (**All payers** by default), and **Assigned To** (All, Assigned to me, or Unassigned), or use **Search**. The list shows **Event**, **Payer / Patient**, **Reason**, **Received**, **Status**, and **Assigned To**. Click **Refresh** to reload.

---

## Reading an event

For events tied to a claim or an enrollment, **Open →** takes you to the claim or the Payer Enrollment page. Click **View** to expand an event. The **Event Detail** panel shows what Medipyxis linked it to (patient, claim, payer, or enrollment), the affected claims for file failures, a timeline, and a **Raw Payload** section with the original message from Stedi.

---

## Actions

The expanded panel has four actions:

| **Action** | **What it does** |
| --- | --- |
| **Assign** | Opens **Assign Action**. Search for a user by name or email. The event moves to **In Progress**. |
| **Note** | Adds a note without changing the status. Notes are added to the event's history. |
| **Resolve** | Marks the event **Resolved**. A resolution note is required. Records who resolved it and when. |
| **Dismiss** | Marks the event **Dismissed** after you confirm. Records who dismissed it and when. No note is asked for, so add a **Note** first if the reason matters. |

To act on several events at once, select them and use the bar above the list: **Assign to me**, **Unassign**, **Resolve**, **Dismiss**, or **Clear**. **Unassign** returns an event to **Open**. A bulk resolve records the note "Bulk resolved".

**Tip:** Resolution notes are your audit trail. When a payer later asks why a rejection was not worked, the note is the answer.

---

## Events that arrive without a facility

Occasionally an event arrives without a facility link, and no one at your facility can see it. If you expect a response that does not appear, ask Medipyxis support. They can attach it to your facility.

---

## How this connects to the Work Queue

The inbox is the event log; the Work Queue is the claim view. When a payer response updates a claim, the claim's status changes and the event stays here as the record of what arrived and when. Work the claim from the Work Queue or the claim page. Use the inbox to read the exact response, or for events not tied to a claim, such as enrollment tasks and file failures.

---

## Common failure patterns

- **file.failed** — the claim file was malformed before it reached the payer, usually a missing required field. Open the claim, check CMS-1500 and 837P fields, and resubmit.
- **Payer reject on a claim status response** — the file was valid but the payer refused the claim. The reason code says why, for example subscriber not found or patient not found. Fix the field on the claim and resubmit.
- **enrollment.rejected with "Provider not enrolled with payer"** — the provider must enroll directly with the payer (often through CAQH or the payer's portal) before Stedi can register the enrollment.

---

## What to bring to a Stedi support ticket

Copy these from the expanded event: the event type, the time it was received, and the **Raw Payload**.
