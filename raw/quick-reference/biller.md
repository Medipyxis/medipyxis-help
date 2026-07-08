---
id: qr-biller
title: Biller cheat sheet
module: getting-started
audience: [billing]
roles: [biller]
type: reference
estimated_minutes: 2
last_reviewed: 2026-07-08
app_route: /facility/{facility_uuid}/billing/work-queue
tags: [quick-reference, billing, claims, era]
---

# Biller cheat sheet

Your daily loop: work the Work Queue → submit → post ERAs → work denials. Medipyxis does the coding prep; you're the safety net.

## Claim Status glossary

The Work Queue's **Claim Status** dropdown (set by the biller) uses these values:

| Status | Meaning |
|---|---|
| **Needs Coding** / **Eligibility Needed** | Not ready to submit yet |
| **Ready** | Reviewed and ready to submit |
| **In Progress** / **Hold** / **Flag Clinical** | Working it / paused / sent back to the clinician |
| **Billed** | Submitted to the payer |
| **Paid** / **Partial Pay** | Payment posted (fully / partially) |
| **Denied** | Payer denied; work it in Denial Management |
| **Appealed** / **Corrected** | Appeal filed / claim corrected and resubmitted |
| **Patient Responsibility** / **Write-Off** / **Void** | Closed outcomes |

## Auto-coding sources of truth

| Code type | Comes from |
|---|---|
| **ICD-10** | Wound Assessment + History of Present Illness |
| **CPT/HCPCS** | Procedures & Supplies + graft UIN applied |
| **Modifiers** | Rule engine: LT/RT from wound location, 25 from E/M + procedure same day, 59 when bundling conflict |
| **Place of service** | Facility default, overridden by visit location |
| **Units** | Graft size in cm² (auto-calculated from L × W measurements) |

## Daily targets

- **Work Queue "Ready" preset cleared within 72 hours** of visit signature.
- **Zero clearinghouse rejections > 7 days old**.
- **Every unmatched ERA reconciled within 24 hours** (matched ERAs auto-post).
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
| CO-50 (not medically necessary) | Missing LCD element | Add an addendum to the visit note that resolves the LCD item |
| CO-197 (precert missing) | No auth on file | Obtain retro-auth; if denied, appeal with clinical docs |
| CO-16 (missing information) | Modifier or ID missing | Correct on the claim form (`/billing/new`) and resubmit |
| CO-29 (past timely filing) | Late submission | Check root cause; appeal only if system error |
| PR-45 (charge exceeds allowed) | Charge out of date | Update the facility **Charge Master** |

## Denial evidence

Each claim and denial keeps a full activity trail. When appealing, reference the claim number, DOS, and denial CARC — see [Denial Management](../modules/billing/denial-management.md).
