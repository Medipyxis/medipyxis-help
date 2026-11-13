---
id: billing-retired-cpt-guard
title: Retired CPT guard
module: billing
audience: [billing, admin, clinical]
roles: [biller, admin, provider]
type: reference
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing
related:
  - billing-overview
  - billing-submit-claim
  - billing-coding-review-drawer
  - billing-cms-1500-and-837p-fields
tags: [billing, CPT, coding, retired-codes, 99343, E/M]
---

The AMA retires or replaces CPT codes every January. Medipyxis handles retired codes with a deliberate split: the system never suggests or recommends a retired code, but still recognizes one on a signed historical note so old records resolve correctly. This page documents the split, names the codes it currently covers, and explains why the split is the shape it is.

## The rule

For any CPT code that has been retired by the AMA:

- The code is **removed from the coded suggestion list and the E/M recommender**. The E/M recommender never emits it. The auto-coder never returns it. The claim code picker lists the facility's superbill codes and does not block retired codes, so keep them out of the facility's superbill list.
- The code is **kept in the code table Medipyxis uses to read notes**. If a note was signed carrying that code — before it was retired, or before the recognition set was updated — the note still resolves to the correct MDM level and correct description when a biller opens it.

The one-sentence version: **recognize history, never offer it going forward.**

## Codes currently under the guard

### CPT 99343 — retired 2023-01-01

`99343` was the moderate-MDM new-patient home-visit code. The AMA deleted it effective January 1, 2023 as part of the E/M home-visit collapse: the pre-2023 five-rung ladder (`99341/99342/99343/99344/99345`) was compressed to four rungs, with `99344` promoted to the moderate slot and `99345` remaining the high-complexity code.

The corrected 2023 ladder for **new patient, home visit** (POS 12/13/14/16):

| CPT | MDM level |
|---|---|
| 99341 | straightforward |
| 99342 | low |
| 99344 | moderate |
| 99345 | high |

Established-patient home visits (`99347/99348/99349/99350`) were not affected by the 2023 change.

How Medipyxis handles `99343` today:

- **Not blocked** in the claim code picker — the picker lists your facility's superbill codes (**Charge Master → Templates**), so keep 99343 out of that list.
- **Removed** from the E/M recommender — new-patient home moderate now returns `99344`.
- **Excluded** from the time warning — when documented minutes fall short of the billed code, the warning names a code those minutes meet, picked only from recommended codes, so never `99343`. The warning does not change the code.
- **Removed** from the coded suggestion list — the code is not offered as a suggestion.
- **Kept** in the shared visit-code table Medipyxis uses to read notes. A note billed with `99343` shows "New patient, home visit, moderate MDM (CPT retired 2023-01-01)".

The change shipped on 2026-08-25 ("stop emitting CPT 99343, retired by the AMA on 2023-01-01").

## Why not just delete it everywhere

The obvious move is to strip the retired code from every table. The reason we don't:

**Production still holds signed notes billed with `99343`.** If Medipyxis stopped recognizing the code, it would stop trusting the stored value and substitute a different CPT when the note is re-rendered. That is a documentation-integrity failure: the note-of-record and the platform's rendering of the note-of-record would disagree.

The recognition-vs-recommendation split is the whole point. History is read as it was. Anything going forward is offered only from the current ladder.

## When the AMA retires a code

1. Confirm the effective date and the replacement (if any) against the AMA CPT descriptor list or an authoritative summary (AAPC's deleted-codes page is the fastest secondary source).
2. Remove the code from your facility's superbill codes in **Charge Master → Templates**. The claim code picker lists those codes and does not block retired ones.
3. Ask Medipyxis support to stop the code being suggested or recommended. Do not ask for it to be deleted outright: notes already signed with it must keep resolving correctly.

## What the biller sees

- **Adding a code to a claim.** The code picker lists the facility's superbill codes and does not check for retired codes. Keep retired codes out of the facility's superbill list.
- **Opening a historical claim.** The claim renders with the retired code intact. The MDM level and description come from the visit-code table. A small "(CPT retired YYYY-MM-DD)" trailer is appended to the description so the biller isn't confused about why the code looks unusual.
- **Auto-coding a new visit.** The E/M recommender never emits a retired code. The time warning never suggests one. The auto-coder never returns one.
