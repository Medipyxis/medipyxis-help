---
id: billing-denial-management
title: Manage claim denials and appeals
module: billing
audience: [billing]
roles: [biller, admin]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing
related:
  - billing-overview
  - billing-work-queue
  - billing-ar-aging
  - billing-era-posting
tags: [billing, denials, appeals, AR]
---

# Manage claim denials and appeals

Track an appeal on a denial record in the **Denials** tab of Billing Operations, and close the record when the payer makes a final decision.

## Before you start

- You can open Billing (your account needs the Billing Operations feature).
- You have the denial reason code and remittance advice from the payer or ERA.

## Where denial records come from

Medipyxis does not yet create a denial record when a payer denies a claim, so the Denials list can be empty even when you have denials to work. A fix is being tracked.

A denied or $0 ERA line shows on the ERA / EOB page as "Denied / $0, nothing to post". To track the claim itself, set its status to **Denied** (and to **Appealed** once you file an appeal).

## The Denials tab

Open **Billing Operations** and click the **Denials** tab. The **Denial Management** card lists denial records with the columns Patient, Claim #, Denial Reason, Category, Appeal Status, Deadline and Actions.

- The list shows the newest denial first. Use the **Appeal status filter** to find items that have not been actioned.
- **Export CSV** downloads the rows that match the filter.
- The eye icon (**View / update denial**) opens the **Denial / Appeal Workflow** panel.
- On a row whose status is Not Started or Not Appealed, the send icon (**Mark appeal submitted**) sets the status to Appeal Submitted in one click.

_The Denials tab. The Appeal Status column shows the current stage for each denial._

## Appeal status values

Every denial record carries an appeal status. These are the values Medipyxis tracks: Not Started, Needs Review, In Research, Pending Documentation, Pending Provider Input, Ready to Appeal, Appeal Submitted, Under Payer Review, Additional Info Requested, Appeal Accepted, Appeal Denied.

- **Claim Corrected and Resubmitted** — The claim was corrected and resubmitted rather than formally appealed.
- **Closed – No Further Action** — Denial closed; nothing further to do.
- **Closed – Written Off** — Denial marked as written off (this status does not post a write-off to the ledger).
- **Not Appealed (legacy)** and **Appeal Approved (legacy)** are older values still shown in the list; use Appeal Accepted or a Closed status for new work.

## Steps — work a denial

- **Open the record.** Click the eye icon (View / update denial) to open the Denial / Appeal Workflow panel. It shows the claim number, the appeal status and a timestamped notes history. The denial reason is in the list's Denial Reason column.
- **Set status to Needs Review.** This signals to other billers that the denial is being worked. Pick the status under **Appeal status** and click **Save**.
- **Determine the root cause** — for example missing documentation, medical necessity, a duplicate claim, timely filing, a coding error or a missing authorization — and set the status that matches your next step (for example Pending Documentation or Pending Provider Input).
- **Gather supporting documentation:** the payer's denial EOB/ERA detail, clinical notes supporting medical necessity, and any payer-specific appeal form. Denial records hold text notes only, so keep the files with your appeal package and note where they are.
- **Write the appeal narrative in the notes.** Type in the **Notes** box and click **Add note**.
- **Submit the appeal to the payer** through the payer's channel (portal, fax, or mail). Set status to Appeal Submitted (or use the Mark appeal submitted button on the row) and write the submission date in the notes.

Medicare first-level redeterminations must be filed within 120 days of the initial denial; second-level reconsiderations within 180 days. Medipyxis does not currently auto-calculate appeal deadlines.

## Steps — track to resolution

- Approved → set Appeal Accepted. The payment posts to the claim's ledger when the payer's ERA arrives.
- Accepted for review → Appeal Accepted. Denied → Appeal Denied. Corrected instead of appealed → Claim Corrected and Resubmitted.
- Resolved, nothing more to do → **Closed – No Further Action**.

## Result

The denial record shows its current appeal status and the notes billers have added. Earlier statuses are not kept, so note each change.

Closed denials stay in the list. Filter by a Closed status to find them, or by another status to hide them.

Review the **Claims Reports** in the [Reports Center](/modules/billing/ar-aging/) periodically to spot systemic issues.

## Troubleshooting

- **Denial not in the Denials view** — Medipyxis does not create denial records from ERAs. A denied or $0 ERA line shows on the ERA / EOB page as "Denied / $0, nothing to post".
- **Saving the appeal status shows an error** — Your account may not be allowed to update denial records. Ask your administrator to verify your role permissions.

## Related

Auto-rendered from `related:` in frontmatter.
