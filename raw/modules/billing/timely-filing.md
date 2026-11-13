---
id: billing-timely-filing
title: Timely filing windows
module: billing
audience: [billing, admin]
roles: [biller, admin]
type: reference
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing/coding-review
related:
  - billing-overview
  - billing-work-queue
  - billing-coding-review-drawer
  - billing-submit-claim
  - billing-denial-management
tags: [billing, timely-filing, deadline, Medicare, Medicaid, TRICARE]
---

Every payer has a hard deadline between the date of service and the date a claim must be filed. Miss it and the payer denies for timely filing — a hard denial with almost no appeal path. Medipyxis rolls the deadline per claim by payer, shows how many days remain, and marks the claim critical before it slips.

The badge shows up in the [Coding Review drawer](/modules/billing/coding-review-drawer/) on every unsubmitted claim. Colors escalate as the window closes.

## The windows

Medipyxis derives the filing window from the payer name on the claim. A row with no claim yet gets the 90-day default. Four rules, matched against the payer name case-insensitively:

- Payer name contains **medicare** — 365 days
- Payer name contains **medicaid** — 180 days
- Payer name contains **tricare** — 365 days
- Payer name contains **champva** — 365 days
- Anything else (commercial) — 90 days

The default of **90 days** is the safe floor for commercial payers. Many commercials allow 180 or 365 — but the safe assumption absent contract knowledge is 90, because that is the shortest window in wide use (Aetna, Cigna, some BCBS plans). If your facility has a commercial contract that specifies a longer window, the badge will read shorter than the true deadline; there is no harm in that, only in the opposite.

The lookup is a pure string match on the payer name — there is no per-payer table today. There is no override: the badge always uses these rules. When a contract allows a longer window, treat the badge as advisory.

## What the badge shows

The badge works from the days remaining: the filing window minus the days since the date of service. It shows one of five states:

- **Green** — 60 or more days remaining. Reads "Nd to file" (N is the count remaining).
- **Yellow** — 30 to 59 days remaining. Reads "Nd to file".
- **Red** — 14 to 29 days remaining. Reads "Nd to file".
- **Critical** — fewer than 14 days remaining. Reads "Nd to file" (still counting down).
- **Past deadline** — 0 or fewer days remaining. Reads "Nd PAST DEADLINE".

The badge appears next to the claim's DOS in the drawer header, so it is impossible to miss when reviewing coding.

## How the days are counted

Days since the date of service = today (midnight UTC) minus the DOS (midnight UTC), floored to whole days.

The DOS in the drawer is the UTC calendar day of the appointment's start time, and "today" is the UTC calendar day. An appointment late in the evening in US time zones can show the next day as its DOS. So the badge can count one day fewer than the calendar day of the visit.

The badge does not account for the claim's actual submission time. It calculates from DOS to today. Once the claim is submitted, the Work Queue tracks submission-date-based aging (see [AR aging](/modules/billing/ar-aging/)).

## Working a critical or past-deadline claim

**Critical (fewer than 14 days remaining):**

- Open the claim in Coding Review.
- Verify the coding — this is your last review before the deadline.
- Submit immediately. Do not batch with routine claims.
- Watch the [Stedi Actions Inbox](/modules/billing/stedi-actions-inbox/) for a 277CA rejection. If the claim rejects, you may not have time to fix and resubmit.

**Past deadline:** Medipyxis does not block submission of a past-deadline claim — the badge is guidance, not a gate. Submit anyway if the commercial payer allows longer than 90 days by contract, the payer has published a deadline exception, or you have documentation supporting a timely-filing appeal.

## Which claims to prioritize

The Work Queue lists rows oldest DOS first. Combined with the badge, that gives a "what to work today" order:

- Any commercial claim past 60 days from DOS (approaching the 90-day floor).
- Any Medicaid claim past 150 days from DOS.
- Everything else, oldest DOS first.

Medicare and TRICARE at 365 days rarely surface as critical unless the claim has been sitting in review for months.

## Common gotchas

- **Payer name contains "Medicare Advantage"** — this matches the medicare rule and gets 365 days. Medicare Advantage plans (Part C) are commercial products administered by private carriers, and many carry commercial-shorter filing windows (90 or 180 days). If your facility bills MA plans, verify the contract window and treat the badge as advisory only.
- **Payer name unusual or blank** — a claim with no payer name, or a row with no claim yet, falls to the 90-day default. Fix the payer on the claim to give the badge accurate information.
- **DOS in the future** — the badge shows more days remaining than the filing window. Not a defect; the claim is just being coded early. The badge will normalize once DOS passes.

## Related

Auto-rendered from `related:` in frontmatter.
