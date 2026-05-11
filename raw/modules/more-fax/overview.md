---
id: more-fax-overview
title: More (Fax) overview
module: more-fax
audience: [intake, admin]
roles: [intake_coordinator, practice_admin, super_admin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/more
related:
  - more-fax-send-fax
  - referral-intake-fax-queue-review
tags: [fax, outbound, inbound, review-queue]
---

# More (Fax) overview

The **More** section provides a dedicated interface for managing all outbound and inbound fax activity — a complement to the automated fax ingestion that flows through Referral Intake.

![Fax Review Queue with incoming fax rows](../../assets/more-fax/review-queue.png)

*Fax Review Queue — incoming faxes awaiting review or routing.*

## Three sections

| Section | Purpose |
|---|---|
| **Send Fax Logs** | History of all outbound faxes sent by your facility — date, recipient number, document name, page count, and delivery status. |
| **Received Fax Logs** | History of all inbound faxes received — date, sender number, page count, and whether the fax was auto-processed or required manual review. |
| **Fax Review Queue** | Inbound faxes that could not be automatically matched to a patient or referral. These require a staff member to review, route, or dismiss. |

## Using the Fax Review Queue

Faxes appear in the Fax Review Queue when OCR confidence is below the auto-routing threshold or no matching patient record is found. For each queued fax:

1. **Click the row** to open the fax document in the preview pane.
2. **Review the content.** The panel shows the OCR-extracted text alongside the original document image.
3. **Take action:**
   - **Link to Referral** — associates the fax with an existing referral card in Referral Intake.
   - **Create Referral** — opens the New Referral form with OCR data pre-populated.
   - **Dismiss** — marks the fax as reviewed and non-actionable; it moves to Received Fax Logs.

<Note>
The Fax Review Queue in More (Fax) and the **Fax Queue** column in Referral Intake serve different purposes. The Referral Intake Fax Queue column shows auto-created referral cards awaiting coordinator review; the More (Fax) Fax Review Queue shows raw inbound faxes that could not be automatically processed. See [Fax Queue Review](../referral-intake/fax-queue-review.md) for the Referral Intake workflow.
</Note>

## Searching logs

Both Send and Received Fax Logs support filtering by:
- **Date range** (date picker)
- **Fax number** (sender or recipient)
- **Status** (for outbound: Sent, Failed, Pending; for inbound: Processed, Queued)

## Related

Auto-rendered from `related:` in frontmatter.
