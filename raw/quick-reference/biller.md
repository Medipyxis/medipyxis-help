---
id: qr-biller
title: Biller cheat sheet
module: getting-started
audience: [billing]
roles: [biller]
type: reference
estimated_minutes: 2
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing/work-queue
tags: [quick-reference, billing, claims, era]
---

# Biller cheat sheet

Your daily loop: work the Work Queue, submit claims, match the ERA lines that did not post automatically, and work denials. Clinicians fill codes with Pull Codes in the Visit Wizard; you review them before the claim goes out.

## Claim Status values

The Work Queue's **Claim Status** is a working status set on the claim by the billing team. Its values are: Eligibility Needed · Ready · In Progress · Flag Clinical · Hold · Billed · Paid · Denied · Appealed · Corrected · Partial Pay · Patient Responsibility · Write-Off · Void · Needs Coding.

Users with the **Biller** role currently cannot change the Claim Status, from the row or with bulk actions: the change fails with an error. A fix is being tracked. Until then, ask a billing lead or admin to set it.

## Where the codes come from

- In the Visit Wizard's billing step, **Pull Codes** fills billing codes from the documentation with a rule-based mapper. There is no AI code fallback.
- The clinician reviews and edits every line, and checks the E/M level, modifiers (25, 59, KX, JW, JZ) and place of service code.
- Open **Review** on a Work Queue row to check the codes in the Coding Review drawer before submitting.

## Daily targets

- **Work Queue "Ready" preset cleared within 72 hours** of visit signature.
- **Zero clearinghouse rejections older than 7 days**.
- **Every unmatched ERA line matched within 24 hours**. Matched ERA lines post automatically.
- **Every denial triaged within 48 hours**.

## Speed tips

| Task | Shortcut |
|---|---|
| Go to a page (Billing Operations, ERA/EOB, A/R Aging) | `⌘K` / `Ctrl+K` (Quick Jump), then type the page name |
| Save in the Coding Review drawer | `⌘S` / `Ctrl+S` |
| Save and go to the next claim in the Coding Review drawer | `⌘↵` / `Ctrl+Enter` |
| See only claims ready to bill | Work Queue → **Ready** preset |

## Denial reason playbook

| CARC / RARC | Likely root cause | Fix |
|---|---|---|
| CO-50 (not medically necessary) | Missing LCD element | Have the provider add an addendum to the signed note that documents the missing LCD item, then appeal |
| CO-197 (precertification / authorization absent) | No auth on file | Obtain retro-auth; if denied, appeal with clinical docs |
| CO-16 (missing information) | Modifier or ID missing | Correct the claim and resubmit |
| CO-29 (time limit for filing has expired) | Late submission | Check root cause; appeal only if system error |
| CO-45 (charge exceeds fee schedule) | Contractual adjustment | Usually nothing to fix: the difference is written off under your contract |

## Denial records

Track appeals on the **Denials** tab of Billing Operations. A denial record shows its current appeal status and the notes billers add; earlier statuses are not kept, so note each change. Medipyxis does not yet create denial records from payer denials automatically. See [Denial Management](/modules/billing/denial-management/).

When appealing, reference the claim number, date of service and denial CARC.
