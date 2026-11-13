---
id: more-fax-send-fax
title: Compose and send an outbound fax
module: more-fax
audience: [intake, admin]
roles: [referral_coordinator, clinician, admin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/more/send-fax-logs
related:
  - more-fax-overview
  - referral-intake-overview
tags: [fax, outbound, send, delivery]
---

# Compose and send an outbound fax

Send a fax from Medipyxis and track its delivery in **Outgoing Fax Logs**.

## Before you start

- You have the recipient's fax number: a 10-digit US number.
- The documents are on your device (PDF, JPG, PNG, DOC or DOCX), or on the patient's chart in Medipyxis.

## Steps

1. **Open Outgoing Fax Logs.** Click **Fax Center** in the sidebar, then the **Outgoing Fax Logs** tile.
2. **Click New Fax** (top-right).
3. **Enter the recipient under To.** Type the fax number, or pick a number your clinic has faxed before. Spaces, dashes and brackets are fine. To fax the same documents to more people, click **Add another recipient** (up to 10). Each recipient gets their own fax and cover page.
4. **Check From.** It shows your clinic's fax number and cannot be changed here.
5. **Attach files.** Under **Attach Files**, click to upload or drag and drop. Each file can be up to 25 MB, and one fax up to 50 MB in total.
6. **Add chart documents (optional).** Search for the **Patient** by name or MRN. Then tick documents under **Include other documents from the patient's chart**. Signed progress notes are listed as **Progress note**. One fax can carry up to 10 documents.
7. **Add notes (optional).** Type up to 500 characters in **Notes**. They print on the cover page.
8. **Click Send Now.**

Medipyxis adds a cover page to every fax. It uses your clinic's **Fax Settings** (logo, practice name, return numbers) and lists the documents in the fax.

**Send Later** is shown but cannot be used yet: scheduled faxing is marked as coming soon.

## Result

A message confirms "Fax submitted. Delivery shows in Fax Logs." The fax appears in **Outgoing Fax Logs**, and its status changes as the fax service reports back:

| Status | Meaning |
|---|---|
| **Pending** / **Sending** | Queued or being sent. |
| **Sent** / **Delivered** | The fax went through. |
| **Failed** | The fax did not go through. Hover over the status to see the error. |
| **Cancelled** | Someone cancelled the fax before it was sent. |

If you faxed several recipients and some could not be sent, the New Fax window stays open and shows what happened under each number.

## Track delivery

1. **Open Outgoing Fax Logs** and find your fax.
2. **Click the row** (or **View audit history** in the Actions column) to open its audit history: each action on the fax, with its time and who did it.
3. **If the status is Failed,** click **Retry** to send it again (up to 3 retries). To fix a wrong number, send a new fax.

Check the recipient fax number before you send. A fax with patient information sent to the wrong number is a HIPAA breach. Compare the number with the practice record in CRM.

## Fax a signed progress note

You can fax a signed progress note in two ways.

1. **From the patient chart.** Open the patient’s **Progress Notes** and use **Send to Fax**. Medipyxis sends the Clinical Progress Note (without the billing sections), plus any addenda, not the stored billing copy.
2. **From Fax Center.** Click **New Fax**, pick the **Patient**, then choose chart documents. Progress notes appear as **Progress note**.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Fax still Pending after 30 minutes | The fax service has not reported back yet | Wait. A pending fax can be cancelled; Retry appears only once a fax has failed. |
| A file is refused | Not PDF, JPG, PNG, DOC or DOCX; over 25 MB; over 50 MB in total; or more than 10 documents | Convert or shrink the file, or split the documents into two faxes |
| "Attach a file or pick a document from the chart before sending." | No document attached | Attach a file or tick a chart document, then click Send Now |
| "Enter a 10-digit US fax number." | The number is not a 10-digit US number | Correct the number |

## Related

Auto-rendered from `related:` in frontmatter.
