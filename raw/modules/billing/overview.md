---
id: billing-overview
title: Billing Operations overview
module: billing
audience: [billing]
roles: [biller, practice_admin, super_admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/billing
related:
  - billing-submit-claim
  - billing-work-queue
  - billing-denial-management
  - billing-era-posting
  - billing-ar-aging
tags: [billing, claims, ERA, CMS-1500, claim.md]
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

Medipyxis connects to **claim.md** as the clearinghouse for both outbound 837P electronic claim submission and inbound ERA (835) auto-posting. Claims that have reached **Exported** status are transmitted to claim.md automatically; responses flow back into the **Payments (ERA)** tab without manual intervention.

<Note>
Your organization must have claim.md credentials configured under **Superbill Config** before claims can be submitted electronically. Contact your practice administrator if claims are not advancing past **Exported**.
</Note>

## Claim status lifecycle

Every claim moves through a defined sequence of statuses. Understanding this lifecycle helps you prioritize work and identify bottlenecks.

| Status | Meaning |
|---|---|
| **Pending** | Claim has been created from a completed visit but has not yet been reviewed or approved. |
| **Needs Info** | A required field is missing or a validation error must be resolved before the claim can advance. |
| **Approved** | A biller or supervisor has reviewed the claim and marked it ready for submission. |
| **Exported** | The claim file has been generated and transmitted to claim.md. |
| **Submitted** | claim.md has confirmed receipt and forwarded the claim to the payer. |
| **Paid** | The payer has adjudicated the claim and an ERA has been received and posted. |

<Compliance>
CMS requires that claims for Medicare beneficiaries be submitted within one year of the date of service. Claims that remain in **Pending** or **Needs Info** beyond your organization's internal filing deadline will be flagged in the AR Aging report.
</Compliance>

A claim can also enter the **Denials** workflow at any point after **Submitted** if the payer returns a denial code. The original claim status remains **Submitted** while the denial appeal tracks separately.

## Related

Auto-rendered from `related:` in frontmatter.
