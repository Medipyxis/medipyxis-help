---
id: referral-intake-fax-queue-review
title: Review the Fax Queue
module: referral-intake
audience: [intake]
roles: [intake_coordinator, referral_coordinator]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/fax-review-queue
related:
  - referral-intake-overview
  - referral-intake-new-referral
  - more-fax-overview
tags: [fax, OCR, SLA, intake]
---

# Review the Fax Review Queue

Inbound faxes are reviewed on the **Fax Review Queue** page. Open it with **Fax Queue** on the Patient Intake board header, from the **Fax Review Queue** tile under **Fax Center** in the sidebar, or by pressing ⌘K (Windows: Ctrl+K) and typing "fax review queue". It is not a kanban column.

## When to use this page

- You have inbound faxes to review and turn into patients.
- You clicked **Fax Queue** from Referral Intake, or opened the **Fax Review Queue** tile under Fax Center.

## Columns

- **Received** — when the fax arrived.
- **Patient Info** — what was extracted about the patient, when available.
- **File Name** — the fax file.
- **Document Type** — the fax's subject line, or "Fax Document" when the fax has no subject.
- **Priority** — STAT, Emergent, Urgent, or Routine (a filter on this queue — the Add New Patient form uses Routine, Urgent, or Emergent, and does not include STAT).
- **Status** — the fax's review status, shown in lower case (for example, pending or approved).
- **Confidence** — how confident extraction was for this fax.
- **SLA** — an SLA indicator for the row. A "SLA Breached" summary also appears at the top of the queue.
- **Actions** — the **View** button for that fax.

## Steps

- Open the **Fax Review Queue**.
- Use the status, priority, and review filters if you need to narrow the list. The Status filter offers **Pending**, **Processing**, **Ready for Review**, **Approved**, **Auto Created**, **Rejected**, and **Failed**.
- Click **View** in the row's Actions column to open the fax. View is unavailable while the fax is still processing. The document is on one side; the extracted fields are on the other.
- Edit anything that is wrong, then **Save Changes** if you are not ready to create the patient yet.
- When the extraction is right, click **Approve & Create Patient**. That creates the patient and a referral in **New Referrals**, the same outcome as **Create Patient** on the manual form.
- If the fax should not become a patient, click **Reject**.

You can also check **Send digital consent form via SMS upon approval** on the fax review screen when a phone number is available.

## Result

Approved faxes become patients. You will find the new card in the **New Referrals** column on the Patient Intake board. There is no **Convert to Referral**, **Mark Duplicate**, or **Open Referral** button on this page, and there is no separate "Create patient" chip after insurance is verified.
