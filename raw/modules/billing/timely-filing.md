---
id: billing-timely-filing
title: Timely filing windows
module: billing
audience: [billing, admin]
roles: [biller, admin]
type: reference
estimated_minutes: 5
last_reviewed: 2026-09-01
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

The badge shows up in the [Coding Review drawer](./coding-review-drawer.md) on every unsubmitted claim. Colors escalate as the window closes.

## The windows

Medipyxis derives the filing window from the payer name on the claim's insurance plan. Four rules, matched against the payer name case-insensitively:

| Payer name contains | Filing window |
|---|---|
| `medicare` | 365 days |
| `medicaid` | 180 days |
| `tricare` | 365 days |
| `champva` | 365 days |
| anything else (commercial) | 90 days |

The default of **90 days** is the safe floor for commercial payers. Many commercials allow 180 or 365 — but the safe assumption absent contract knowledge is 90, because that is the shortest window in wide use (Aetna, Cigna, some BCBS plans). If your facility has a commercial contract that specifies a longer window, the badge will read shorter than the true deadline; there is no harm in that, only in the opposite.

The lookup is a pure string match on the payer name — there is no per-payer table today. This is deliberate: it is stable, auditable, and matches what CMS publishes for the government payers. When a commercial contract needs a specific window, the biller can override on submission.

## What the badge shows

On any unsubmitted claim in the Coding Review drawer, the timely-filing badge shows one of five states derived from `daysRemaining = deadlineDays - daysSinceDos`:

| Severity | Trigger | What it says |
|---|---|---|
| **Green** | `daysRemaining >= 60` | `Nd to file` (N is the count remaining) |
| **Yellow** | `30 <= daysRemaining < 60` | `Nd to file` |
| **Red** | `14 <= daysRemaining < 30` | `Nd to file` |
| **Critical** | `daysRemaining < 14` | `Nd to file` (still counting down) |
| **Past deadline** | `daysRemaining <= 0` | `Nd PAST DEADLINE` |

The badge appears next to the claim's DOS in the drawer header, so it is impossible to miss when reviewing coding.

## How the days are counted

The math is intentionally simple:

- `daysSinceDos` = today (midnight UTC) minus DOS (midnight UTC), floored to whole days.
- `daysRemaining` = `deadlineDays` (from the payer table above) minus `daysSinceDos`.

Timezones do not enter. The DOS on the claim is a `YYYY-MM-DD` value (a Postgres DATE), so it is a calendar day, not an instant. "Today" is likewise the calendar day in UTC. Two consequences:

- **A claim submitted late-night in São Paulo on day 89 lands as day 89 in UTC too** (São Paulo is UTC-3, so 11 PM local is 2 AM UTC the next day, but the calculation uses whole days floored so a same-day submission is always same-day). No off-by-one at day boundaries.
- **The badge does not account for the claim's actual submission time.** It calculates from DOS to today. Once the claim is submitted, the badge is no longer relevant — the Work Queue tracks submission-date-based aging (see [AR aging](./ar-aging.md)).

## Working a critical or past-deadline claim

**Critical (< 14 days remaining):**
1. Open the claim in Coding Review.
2. Verify the coding — this is your last review before the deadline.
3. Submit immediately. Do not batch with routine claims.
4. Watch the [Stedi Actions Inbox](./stedi-actions-inbox.md) for the 999/277CA response. If the file rejects, you may not have time to fix and resubmit.

**Past deadline:**
Medipyxis does not block submission of a past-deadline claim — the badge is guidance, not a gate. Submit anyway if:
- The commercial payer allows longer than 90 days by contract (the internal default is safe-floor; your contract may be more generous).
- The payer has published a deadline exception (natural disaster, retroactive coverage change, corrected claim allowed within X days of original).
- You have documentation supporting a timely-filing appeal (proof of earlier submission, payer error).

For a Medicare 365-day claim past deadline: the CMS-1500 has no appeal path. Do not submit. Write off in [AR aging](./ar-aging.md) with the timely-filing reason code.

## Which claims to prioritize

The Work Queue can be sorted by DOS ascending — oldest first — which surfaces the claims closest to their deadline at the top. Combined with the badge in Coding Review, this gives a clear "what to work today" ordering:

1. Any commercial claim past 60 days from DOS (approaching 90-day floor).
2. Any Medicaid claim past 150 days from DOS.
3. Everything else, DOS ascending.

Medicare and TRICARE at 365 days rarely surface as critical unless the claim has been sitting in review for months.

## Common gotchas

<Note>
**Payer name contains "Medicare Advantage"** — this matches the `medicare` rule and gets 365 days. Medicare Advantage plans (Part C) are commercial products administered by private carriers, and many carry commercial-shorter filing windows (90 or 180 days). If your facility bills MA plans, verify the contract window and treat the badge as advisory only.
</Note>

<Note>
**Payer name unusual or blank** — a claim with no payer name on the insurance plan falls to the 90-day default. This is safe but pessimistic. Fix the insurance plan to give the badge accurate information.
</Note>

<Note>
**DOS in the future** — the badge shows `daysRemaining > deadlineDays`. Not a defect; the claim is just being coded early. The badge will normalize once DOS passes.
</Note>

## Related

Auto-rendered from `related:` in frontmatter.
