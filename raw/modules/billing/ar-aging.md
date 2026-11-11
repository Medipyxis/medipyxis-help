---
id: billing-ar-aging
title: AR Aging and Reports Center reference
module: billing
audience: [billing]
roles: [biller, admin]
type: reference
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing
related:
  - billing-overview
  - billing-work-queue
  - billing-denial-management
  - billing-era-posting
tags: [billing, AR aging, reports, analytics, net collection rate, days in AR]
---

# AR Aging and Reports Center reference

Reference for the AR aging buckets used across the Billing module and the reports available in the Reports Center.

## AR Aging buckets

Aging buckets measure the number of days since the claim was submitted, for submitted claims (status Submitted, Accepted or partial payment) that still carry a balance. Claims that have not been submitted are not in any bucket.

They appear on the **A/R Aging** page (Billing Operations → **Quick Actions** → **A/R Aging**) and in the **A/R Aging Breakdown** card on the Overview tab. The **Account Receivable** report in the Reports Center shows each claim's **Aging Days** instead of buckets.

(Note: the [Work Queue](/modules/billing/work-queue/)'s **Claim Age** filter uses its own buckets measured from the claim's submission date — Not Submitted, 0–30, 31–60, 61–90, and 90+.)

Bucket boundaries: 0–30 (0 to 30 days), 31–60 (31 to 60 days), 61–90 (61 to 90 days), 91–120 (91 to 120 days), 120+ (121+ days).

Work the oldest buckets first, and follow up with the payer on any claim that has had no response for more than 30 days.

_The A/R Aging page. The Top Payers by Outstanding Balance table breaks the outstanding balance down by payer, with columns Current, 31-60, 61-90 and Over 90; the Aging Bucket Breakdown table above it shows all five buckets for the facility._

## Timely filing and old claims

Medicare requires claims to be filed within one year (365 days) of the date of service. State Medicaid programs and commercial payers often have shorter timely-filing windows — commonly 90 to 180 days. Most contracts have 90-day timely-filing limits.

A claim in the 120+ bucket was submitted more than 120 days ago and is still unpaid. Before you resubmit or correct it, check its timely-filing window; the Coding Review drawer shows the days left to file.

## Reports Center

The Reports Center generates operational billing reports. Navigate to `/facility/{facility_uuid}/billing/reports-center`.

_The Reports Center. Choose a report type, set filters, run the report to preview it, then export to CSV._

## Available report types

- **Patient Visit Reports** — Visits/encounters over a period.
- **Claims Reports** — Claims and their status across the period.
- **Insurance Payment Reports** — Payments received from payers.
- **Patient Payment Reports** — Payments received from patients.
- **Account Receivable Reports** — Outstanding balances (AR) by payer/period.
- **Patient List Reports** — Patient roster for the selected criteria.
- **Patient Balance Reports** — Outstanding patient balances.
- **Charges Reports** — Charges billed over the period.

## Running a report

- **Choose a report type** from the selector.
- **Set the filters** (date range, payer, and other criteria in the filters panel).
- **Click Run report.** The results preview in a table below.
- **Export to CSV** to download the report for external distribution.

Reports run **on demand** against current data — there is no overnight batch, so a report reflects the data at the moment you run it.

## Related

Auto-rendered from `related:` in frontmatter.
