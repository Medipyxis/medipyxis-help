---
id: referral-intake-fax-queue-review
title: Review the Fax Queue
module: referral-intake
audience: [intake]
roles: [intake_coordinator, referral_coordinator]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/fax-review-queue
related:
  - referral-intake-overview
  - referral-intake-new-referral
  - more-fax-overview
tags: [fax, OCR, SLA, intake]
---

# Review the Fax Queue

Faxes arrive from the clearinghouse as PDFs. Medipyxis OCR parses each page, attempts to auto-create a referral, and drops low-confidence pages into the **Fax Review Queue** for a human.

![Fax Review Queue](../../assets/referral-intake/fax-review-queue.png)

## When to use this page

- A fax shows up in **Fax Queue** on the Referral Intake kanban.
- The Dashboard shows a "Fax SLA breach" tile.
- You opened `/fax-review-queue` directly.

## Columns

| Column | Meaning |
|---|---|
| **Received At** | Timestamp from the clearinghouse. |
| **From** | Sender TIN or CallerID. Labeled if the practice is already in your CRM. |
| **Pages** | Click to preview the original PDF. |
| **OCR Confidence %** | >85 % = auto-created; 60–85 % = Needs Review; <60 % = Manual Only. |
| **Auto-Created Referral** | ✓ means a draft already lives in **New Referrals**. |
| **SLA Breach Timer** | Counts down from your facility's intake SLA. Red at breach. |
| **Assigned To** | Coordinator claimed the page. |
| **Status** | Pending · Reviewing · Converted · Rejected · Duplicate. |

## Steps

1. **Sort by SLA Breach Timer** so breached pages are at top.
2. **Click a row.** The fax PDF opens on the left; the OCR-extracted fields appear on the right.
3. **Accept, Correct, or Reject each field.** Green check = OCR was right; pencil icon = edit; red X = missing/unreadable.
4. **If Auto-Created Referral is ✓:** click **Open Referral** to jump to the draft and finish triage there.
5. **If not auto-created:** click **Convert to Referral**. A pre-filled **New Referral** form opens with every accepted field already populated.
6. **If this is a duplicate fax:** click **Mark Duplicate** and link to the existing referral.
7. **If this is junk (marketing, wrong number):** click **Reject** and pick a reason from the list.

## Result

Accepted pages exit the queue. Your name stays on the audit log — hover the row in any kanban column to see who processed which fax.

<Warning>
Never reject a page without reading at least the first clinical sentence. Legitimate one-page STAT referrals sometimes arrive on letterhead the OCR can't fingerprint.
</Warning>

## Related

- [Create a new referral (manual)](./new-referral.md)
- [More → Fax (send/received logs)](../more-fax/overview.md)
