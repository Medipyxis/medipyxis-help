---
id: billing-overview
title: Billing Operations overview
module: billing
audience: [billing]
roles: [biller, admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing
related:
  - billing-submit-claim
  - billing-work-queue
  - billing-coding-review-drawer
  - billing-eligibility-and-verify-insurance
  - billing-diagnosis-code-validation
  - billing-charge-master-and-zero-dollar-guard
  - billing-cms-1500-and-837p-fields
  - billing-retired-cpt-guard
  - billing-claim-scrub
  - billing-stedi-actions-inbox
  - billing-ptan-and-payer-enrollment
  - billing-timely-filing
  - billing-denial-management
  - billing-era-posting
  - billing-ar-aging
tags: [billing, claims, ERA, CMS-1500, Stedi]
---

# Billing Operations overview

The **Billing Operations** module is the central surface for managing the full revenue cycle — from claim creation through payment reconciliation — within Medipyxis.

## Module layout

Navigate to `/facility/{facility_uuid}/billing`. The module opens on four tabs: Overview, Claims, Denials, and Payments. The Payments tab lists the ERAs (electronic remittance advice) received from Stedi.

- **Overview** — Recent Claims, Quick Actions, Performance Metrics (Payment Rate, Denial Rate, Days in AR), A/R Aging Breakdown, Unbilled Aging, Status Summary and Unsigned Records. Above the tabs, tiles show Total Claims, Pending Submission, Total Revenue and Outstanding AR.
- **Claims** — All claims in the facility, searchable and filterable by status, payer, date of service, and rendering provider.
- **Denials** — Denial records with their reason, category, appeal status and deadline. Payer denials are not yet added to this list automatically, so it can be empty even when a payer has denied a claim; a fix is being tracked.
- **Payments** — ERAs received from Stedi, with each one's EFT / check number and whether it matched a claim (the **Match** column).

_The Billing Operations landing page. The __Overview__ tab is active by default._

## Clearinghouse integration

Medipyxis connects to **Stedi** as the clearinghouse for electronic claim submission (837P), eligibility checks (270/271), claim acknowledgments (277CA), and remittance advice (835).

Exported means the claim was exported as a PDF or JSON file; it is not sent anywhere. A claim goes to Stedi when a biller clicks **Submit Claim** on the claim form.

Stedi pushes claim acknowledgments (277CA) and remittances (835) to Medipyxis as they happen. The Work Queue picks up the change on its next refresh (every 2 minutes while the tab is visible, or click Refresh); the Payments tab shows new ERAs when it is reloaded.

Stedi replaced ClaimMD in May 2026 — all new submissions go through Stedi. Claims created before the switch stay in the Claims list like any other claim; ClaimMD's own responses are no longer shown.

Your providers must be enrolled with each payer through Stedi before claims can flow. See [Set up billing and the Stedi clearinghouse](/admin/billing-setup/).

An Exported claim does not move on by itself. Open it and click **Submit Claim** to send it to Stedi.

## Claim status lifecycle

A claim carries one of 16 statuses: Draft, Pending, Needs Info, Needs Coding, Coding Review, Pending Review, Needs Provider, Approved, Exported, Submitted, Accepted (Legacy), Rejected, Paid, Denied, Appealed, Cancelled. The most common ones:

- **Draft** — Claim started but not yet complete.
- **Pending** — Auto-created from a completed visit, awaiting biller review.
- **Needs Info** — A required field is missing or a validation error must be resolved before the claim can advance.
- **Approved** — A biller reviewed the claim and marked it ready for export.
- **Exported** — The claim was exported as a PDF or JSON file. It has not been sent to Stedi.
- **Submitted** — Marked as submitted to the clearinghouse.
- **Rejected** — A claim acknowledgment (277CA) came back rejected. Medipyxis sets this status automatically.
- **Paid** — Someone on the billing team marked the claim paid: payment has been received and posted.
- **Denied** — The payer denied the claim and someone on the billing team set this status.
- **Appealed** — An appeal has been filed on a denied claim.
- **Cancelled** — Claim voided / cancelled.

Separately from this system lifecycle, each claim has a **Claim Status** in the [Work Queue](/modules/billing/work-queue/) (Ready, Hold, Billed, Paid, Denied, Appealed, Write-Off, and more). That manual status is the biller's working state. The Claim Status filter and the bulk action toolbar work on it.

Billing leads, coders, medical directors and admins can change the Claim Status. Users with the Biller role currently cannot: the change fails with an error. A fix is being tracked.

CMS requires that claims for Medicare beneficiaries be submitted within one year of the date of service. Pending and Needs Info claims are not in the AR Aging report, which covers submitted claims only. The Coding Review drawer shows how many days are left to file each claim, based on its payer (365 days for Medicare, 180 for Medicaid, 90 for others).

When a payer denies a claim, set the claim to Denied (and to Appealed once you file an appeal). The denial's own appeal status is tracked separately on the Denials tab — see [Denial Management](/modules/billing/denial-management/).

## Related

Auto-rendered from `related:` in frontmatter.
