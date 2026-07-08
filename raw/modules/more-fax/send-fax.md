---
id: more-fax-send-fax
title: Compose and send an outbound fax
module: more-fax
audience: [intake, admin]
roles: [referral_coordinator, clinician, admin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-07-08
app_route: /facility/{facility_uuid}/fax-logs
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

1. **Open the Fax Center** (`/fax-logs`).
2. **Click New Fax** (top-right).
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

The fax appears in the **Fax Center** with **pending** status. The fax service updates the status as it progresses:

| Status | Meaning |
|---|---|
| **pending** / **sending** | Queued or in transmission. |
| **sent** / **delivered** | Transmitted and confirmed by the fax service. |
| **failed** | Delivery failed after retry attempts; the log shows the failure reason. |
| **cancelled** | You cancelled the fax before it sent. |

## Track delivery

8. **Open the Fax Center** and locate your fax row.
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
