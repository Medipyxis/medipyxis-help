---
id: billing-overview
title: Billing Operations overview
module: billing
audience: [billing]
roles: [biller, admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-07-01
app_route: /facility/{facility_uuid}/billing
related:
  - billing-submit-claim
  - billing-work-queue
  - billing-denial-management
  - billing-era-posting
  - billing-ar-aging
tags: [billing, claims, ERA, CMS-1500, Stedi]
---

# Billing Operations overview

The **Billing Operations** module is the central surface for managing the full revenue cycle — from claim creation through payment reconciliation — within Medipyxis.

## Module layout

Navigate to `/facility/{facility_uuid}/billing`. The module opens on four tabs:

| Tab | What it shows |
|---|---|
| **Overview** | High-level KPIs: total billed, pending claims, denial rate, and recent payment activity for the current period. |
| **Claims** | All claims in the facility, searchable and filterable by status, payer, date of service, and rendering provider. |
| **Denials** | Claims that have been denied, along with their denial appeal status and next action. |
| **Payments (ERA)** | Electronic Remittance Advice records received from the clearinghouse, matched against posted claims. |

![Billing Operations landing page showing the four tabs and KPI summary](../../assets/billing/billing_01_landing.png)
*The Billing Operations landing page. The **Overview** tab is active by default.*

## Clearinghouse integration

Medipyxis connects to **Stedi** as the clearinghouse for electronic claim submission (837P), eligibility checks (270/271), claim status (276/277), and remittance advice (835). Claims that reach **Exported** status are sent to Stedi automatically; status updates flow back into the Work Queue and the **Payments (ERA)** tab in real time, without polling. Stedi replaced ClaimMD in May 2026 — historical ClaimMD claims remain visible for reference, but all new submissions go through Stedi.

<Note>
Your providers must be enrolled with each payer through Stedi before claims can flow. See [Set up billing and the Stedi clearinghouse](../../admin/billing-setup.md). Contact your practice administrator if claims are not advancing past **Exported**.
</Note>

## Claim status lifecycle

Every claim moves through a defined sequence of statuses. Understanding this lifecycle helps you prioritize work and identify bottlenecks.

| Status | Meaning |
|---|---|
| **Draft** | Claim started but not yet complete. |
| **Pending** | Auto-created from a completed visit, awaiting biller review. |
| **Needs Info** | A required field is missing or a validation error must be resolved before the claim can advance. |
| **Approved** | A biller reviewed the claim and marked it ready for export. |
| **Exported** | The claim has been exported / sent to Stedi. |
| **Submitted** | Marked as submitted to the clearinghouse. |
| **Paid** | The payer adjudicated the claim and an ERA has been received and posted. |
| **Denied** | The payer denied the claim — it enters the Denials workflow. |
| **Appealed** | An appeal has been filed on a denied claim. |
| **Cancelled** | Claim voided / cancelled. |

<Note>
Separately from this system lifecycle, billers set a **Claim Status** on each claim in the [Work Queue](./work-queue.md) (Ready, Hold, Billed, Paid, Denied, Appealed, Write-Off, and more). That manual status is the biller's working state and is what most of the queue's filters and bulk actions operate on.
</Note>

<Compliance>
CMS requires that claims for Medicare beneficiaries be submitted within one year of the date of service. Claims that remain in **Pending** or **Needs Info** beyond your organization's internal filing deadline will be flagged in the AR Aging report.
</Compliance>

A claim can enter the **Denials** workflow at any point after submission if the payer returns a denial. The claim moves to **Denied** (and to **Appealed** if you file an appeal), while the denial's own appeal status tracks separately — see [Denial Management](./denial-management.md).

## Related

Auto-rendered from `related:` in frontmatter.
