---
id: billing-retired-cpt-guard
title: Retired CPT guard
module: billing
audience: [billing, admin, clinical]
roles: [biller, admin, provider]
type: reference
estimated_minutes: 5
last_reviewed: 2026-08-31
app_route: /facility/{facility_uuid}/billing
related:
  - billing-overview
  - billing-submit-claim
  - billing-coding-review-drawer
  - billing-cms-1500-and-837p-fields
tags: [billing, CPT, coding, retired-codes, 99343, E/M]
---

The AMA retires or replaces CPT codes every January. Medipyxis handles retired codes with a deliberate split: the coder can never pick one from a dropdown or receive one as a suggestion, but the system will still recognize a retired code on a signed historical note so old records resolve correctly. This page documents the split, names the codes it currently covers, and explains why the split is the shape it is.

## The rule

For any CPT code that has been retired by the AMA:

- The code is **removed from every dropdown, suggestion, and recommender**. Coders cannot select it. The E/M recommender never emits it. The auto-coder never returns it.
- The code is **kept in the recognition tables**. If a note was signed carrying that code — before it was retired, or before the recognition set was updated — the note still resolves to the correct MDM level and correct description when a biller opens it.

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

Where `99343` currently lives in the repo:

- **Removed** from the coder dropdown (`frontend/src/utils/dropdownOptions.ts`) — the E/M home-visit block skips 99343 explicitly.
- **Removed** from the E/M recommender (`s13_emLevel.ts`) — new-patient home moderate now returns `99344`.
- **Removed** from the downcode suggestion (`s13_emLevel.ts` W9 gate) — a note billed too high for its documented time is downcoded to `99344`, not `99343`.
- **Removed** from the deterministic coding service (`medicalCodingService.ts`) — the code is not offered as a suggestion.
- **Kept** in the recognition set (`s11_codingLedger.ts` `EM_CODES_NEW_HOME`, `s13_emLevel.ts` `NEW_PATIENT_CODES` / `TIME_THRESHOLDS` / `EM_MDM_LABELS`). A biller opening a historical note billed with `99343` sees "New patient, home visit, moderate MDM (CPT retired 2023-01-01)".

The guard-relevant commit is `0f880abfc`, "stop emitting CPT 99343, retired by the AMA on 2023-01-01" (Aug 25, 2026).

## Why not just delete it everywhere

The obvious move is to strip the retired code from every table. The reason we don't:

**Production carried three real notes billed with `99343` between 2026-07-04 and 2026-07-21**, before the code was removed from the recommender. Those notes are signed clinical records tied to submitted claims. If the recognition set drops the code, `mapEMLevel` stops trusting the stored value and silently substitutes a different CPT when the note is re-rendered — for example, the coding review drawer could show `99349` next to a note that was signed and billed with `99343`. That is a documentation-integrity failure: the note-of-record and the platform's rendering of the note-of-record would disagree.

The recognition-vs-recommendation split is the whole point. History is read as it was. Anything going forward is offered only from the current ladder.

## When the AMA retires a code

The workflow, whenever a code is retired or replaced:

1. Confirm the effective date and the replacement (if any) against the AMA CPT descriptor list or an authoritative summary (AAPC's deleted-codes page is the fastest secondary source).
2. Remove the code from the dropdowns (`frontend/src/utils/dropdownOptions.ts`).
3. Remove the code from the recommender surface — for E/M codes, that is `frontend/src/services/perfectNote/s13_emLevel.ts` (the "NEW_*" and "ESTABLISHED_*" maps that get read by `recommendEMCode`), plus the downcode suggestions in the W9 gate.
4. Remove the code from the deterministic coding service (`frontend/src/services/procedureBillingService.ts`) if it is offered there.
5. **Do not remove** the code from the recognition sets — `EM_CODES_*`, `EM_MDM_LEVEL`, `EM_MDM_LABELS`, `EM_DESCRIPTIONS`, `TIME_THRESHOLDS`, `NEW_PATIENT_CODES`, `ESTABLISHED_PATIENT_CODES`. Add a comment naming the retirement date so the intent is legible to the next developer to read the file.
6. Verify: run the s11 and s13 tests. Pull a live note billed with the retired code (if one exists) and confirm it still renders the correct MDM level and description.

## What the biller sees

- **Adding a code to a claim.** The dropdown skips retired codes. If a coder types the retired code directly, the field validates against the current ladder and rejects with a message naming the current equivalent.
- **Opening a historical claim.** The claim renders with the retired code intact. The MDM level and description come from the recognition set. A small "(CPT retired YYYY-MM-DD)" trailer is appended to the description so the biller isn't confused about why the code looks unusual.
- **Auto-coding a new visit.** The E/M recommender never emits a retired code. The W9 downcode gate never suggests one. The auto-coder never returns one.

## Related

Auto-rendered from `related:` in frontmatter.
