---
id: qr-biller
title: Biller cheat sheet
module: getting-started
audience: [billing]
roles: [biller]
type: reference
estimated_minutes: 2
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/billing
tags: [quick-reference, billing, claims, era]
---

# Biller cheat sheet

Your daily loop: audit unbilled → submit → post ERAs → work denials. Medipyxis does the coding prep; you're the safety net.

## Claim status glossary

| Status | Meaning |
|---|---|
| **Unbilled** | Visit signed, not yet reviewed |
| **Ready to Submit** | Passed rule engine, awaiting your click |
| **In Clearinghouse** | Submitted, awaiting 277 response |
| **Accepted** | Clearinghouse accepted |
| **Rejected** | Clearinghouse rejected (fix and resubmit) |
| **Paid** | ERA posted |
| **Denied** | Payer denied; in Denial Management |
| **Appealed** | You submitted an appeal |
| **Written off** | Closed, zero expected revenue |

## Auto-coding sources of truth

| Code type | Comes from |
|---|---|
| **ICD-10** | Wound Assessment + History of Present Illness |
| **CPT/HCPCS** | Procedures & Supplies + graft UIN applied |
| **Modifiers** | Rule engine: LT/RT from wound location, 25 from E/M + procedure same day, 59 when bundling conflict |
| **Place of service** | Facility default, overridden by visit location |
| **Units** | Graft size in cm² (auto-calculated from L × W measurements) |

## Daily targets

- **Unbilled queue cleared within 72 hours** of visit signature.
- **Zero clearinghouse rejections > 7 days old**.
- **Every ERA posted within 24 hours** of receipt.
- **Every denial triaged within 48 hours**.

## Speed tips

| Task | Shortcut |
|---|---|
| Jump to a claim | `⌘K` + claim number |
| Copy a fixed claim for resubmit | Claim detail → `⌘D` |
| Open ERA quickly | `G` then `E` |
| Add a note to a claim | `N` on claim detail |

## Denial reason playbook

| CARC / RARC | Likely root cause | Fix |
|---|---|---|
| CO-50 (not medically necessary) | Missing LCD element | Check `policy_evaluations` for the failed rule → addendum to visit note |
| CO-197 (precert missing) | No auth on file | **Authorization Requests** → retro-auth; if denied, appeal with clinical docs |
| CO-16 (missing information) | Modifier or ID missing | Rule engine flags on correction; resubmit |
| CO-29 (past timely filing) | Late submission | Check root cause; appeal only if system error |
| PR-45 (charge exceeds allowed) | Fee schedule out of date | **Admin → Client Fee Schedule** |

## Audit trail

Every claim has an **Audit Trail** tab showing every rule evaluation. For any denial appeal, export this tab to PDF — it's your evidence the claim was submitted correctly.
