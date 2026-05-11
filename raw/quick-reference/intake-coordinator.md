---
id: qr-intake-coordinator
title: Intake coordinator cheat sheet
module: getting-started
audience: [intake]
roles: [intake_coordinator]
type: reference
estimated_minutes: 2
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/referrals
tags: [quick-reference, intake, fax, ocr]
---

# Intake coordinator cheat sheet

Your daily loop: process faxes → verify insurance → hand off to scheduling. Target: every new referral scheduled within 24 hours.

## Fax queue rules

| Status chip | What it means | What you do |
|---|---|---|
| **New** | OCR extracted, awaiting your review | Open it |
| **Needs correction** | OCR confidence < 80% on one field | Fix the flagged field |
| **Ready for insurance** | You approved fields | Click **Run eligibility** |
| **Insurance pending** | Waiting on payer | Wait — SLA is 10 min |
| **Insurance verified** | Eligibility returned | Click **Create patient** |
| **Patient created** | Done from your side | BD rep auto-attributes |
| **Duplicate** | Matches an existing patient | Merge or archive |

## Daily targets

- **Zero faxes older than 24 hours** in the queue.
- **100% of new referrals** with insurance verified.
- **< 2% duplicate rate** after dedupe.

## Speed tips

| Task | Shortcut |
|---|---|
| Open next fax in queue | `N` |
| Approve all OCR fields | `A` |
| Reject + archive | `Shift+X` |
| Open patient in new tab | `⌘-click` on name |
| Find referral by patient name | `⌘K`, type name |

## Who gets what

| Referral source | Auto-routes to |
|---|---|
| Known SNF / home health partner | Assigned clinician per round-robin rules |
| New practice | Hold for BD rep attribution |
| Self-referral / patient call | **Unattributed** bucket — ping BD manager |

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Insurance eligibility timeout | Payer portal down | Retry after 15 min; escalate to billing after 2 failures |
| OCR missed a field | Handwritten or skewed fax | Manually type; submit correction to retrain model |
| Duplicate patient blocked | Existing patient with same DOB + last name | Use **Merge** on the duplicate screen |
| No provider available | All staff at capacity | Ping ops manager in **Team Chat** |
