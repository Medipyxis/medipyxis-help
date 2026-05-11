---
id: more-fax-send-fax
title: Compose and send an outbound fax
module: more-fax
audience: [intake, admin]
roles: [intake_coordinator, practice_admin, super_admin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/more
related:
  - more-fax-overview
  - referral-intake-overview
tags: [fax, outbound, send, delivery]
---

# Compose and send an outbound fax

Send a fax directly from Medipyxis and track its delivery status from the Send Fax Logs.

## Before you start

- You have the recipient's fax number.
- The document you want to fax is either stored in Medipyxis (attached to a referral or patient record) or available as a PDF on your device.

## Steps

1. **Open More (Fax).** Click **More** in the sidebar — the Fax section loads by default.
2. **Click + New Fax** (top-right of the Send Fax Logs section).
3. **Enter the recipient fax number.** Type or paste the 10-digit number. Include area code; do not use dashes or parentheses.
4. **Select or upload the document.**
   - **From Medipyxis:** Click **Browse Documents** to search documents attached to referrals or patient records. Select the file from the results list.
   - **From your device:** Click **Upload File** and select a PDF (maximum 25 MB, 100 pages).
5. **Add a cover sheet (optional).** Toggle **Include Cover Sheet** on. Fill in:
   - **To:** Recipient name and organization.
   - **From:** Your name and facility (pre-populated from your profile).
   - **Re:** Subject line.
   - **Notes:** Free-text message body on the cover sheet.
6. **Review the page count.** The page count shown includes the cover sheet if you toggled it on. Confirm it matches expectations before sending.
7. **Click Send Fax.** The system queues the fax immediately.

## Result

The fax appears in **Send Fax Logs** with **Pending** status. Medipyxis polls for delivery confirmation and updates the status to:

| Status | Meaning |
|---|---|
| **Sent** | Fax delivered successfully and confirmed by the receiving machine. |
| **Failed** | Delivery failed after retry attempts. The log entry shows the failure reason (busy, no answer, invalid number). |
| **Pending** | Fax is queued or in transmission. |

## Track delivery

8. **Open Send Fax Logs** and locate your fax row.
9. **Click the row** to see the detailed status: timestamp of each transmission attempt, error codes (if any), and the recipient number dialed.
10. **If status is Failed:** Click **Retry** to resend, or **Edit** to correct the fax number before retrying.

<Warning>
Verify the recipient fax number before sending. Misdirected faxes containing patient information are a HIPAA breach. Double-check the number against the practice record in the CRM or the referral's Practice & PCP section.
</Warning>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Fax status stuck on Pending for > 30 minutes | Carrier delay or recipient machine busy | Wait 10 more minutes, then click Retry |
| Upload fails | File exceeds 25 MB or is not PDF format | Compress or convert the file before uploading |
| Send button disabled | No document selected | Select or upload a document before clicking Send Fax |

## Related

Auto-rendered from `related:` in frontmatter.
