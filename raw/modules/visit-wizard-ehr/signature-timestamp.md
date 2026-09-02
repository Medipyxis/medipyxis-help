---
id: visit-wizard-ehr-signature-timestamp
title: How the signature timestamp prints on a signed note
module: visit-wizard-ehr
audience: [clinician, admin, billing]
roles: [clinician, medical_director, admin, biller]
type: reference
estimated_minutes: 5
last_reviewed: 2026-09-01
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-sign-off
  - visit-wizard-ehr-aprn-credential
  - visit-wizard-ehr-note-honesty-guardrails
tags: [attestation, signature, timestamp, timezone, note, PDF, addendum]
---

The Provider Attestation block on every signed progress note prints when the note was signed and in which timezone. This page explains what the printed value means, why it may not match your local clock exactly, and what changed on August 27, 2026.

## What the signature line prints

For a signed note, the timestamp line reads:

```
Aug 25, 2026, 11:07 PM EDT
```

Three parts, all load-bearing:

- **The date** — the calendar day of signing, not the date of service. When the two differ, the signing day is what prints, and that difference is a normal and expected part of the record.
- **The time** — hour and minute, no seconds.
- **The timezone abbreviation** — `EDT`, `PDT`, `CST`, whatever the printing device's clock is set to. The abbreviation is always printed. If you regenerate the same note from a different computer set to a different zone, you will get a different reading of the same instant, and the two abbreviations will both be truthful descriptions of the same moment.

For an unsigned note, the line reads:

```
Not recorded
```

That value is a legal statement about the record, not a placeholder. The note has never been signed.

## What changed on August 27, 2026

The Provider Attestation timestamp used to print in two indefensible shapes on the note PDF:

- **Raw UTC.** The stored value is an ISO-8601 instant with millisecond precision and a trailing `Z`. It printed unformatted onto a document that was faxed to Home Health agencies. Because the calendar day was read in UTC, an evening signature in the eastern United States printed as the **following** day. This affected 24% of signed prod notes (18 of 74).
- **False "same day" fallback.** When the signature timestamp column was empty — which was true for 99% of finalized notes (7,619 of 7,693) — the note printed `${date_of_service} (same day)`, asserting that the note had been signed on the date of service. Where that assertion could be checked against a real `signed_at`, it was false for 53 of 74 signed notes (71.6%).

Both defects are fixed. The write path was already correct; this was a render-only fix. No stored data changed.

## Why device timezone, not facility timezone

Every facility record carries a `timezone` column, and the obvious choice would be to render every signature in the facility's zone so that the printed string does not depend on who clicked download. The choice was made against it — for one specific reason that outweighs the consistency benefit.

The `facility.timezone` column defaults to `America/New_York` and is set at facility creation. Nothing forces it to stay correct if a facility relocates or if the initial value was never reviewed. In production, four facilities have the wrong zone stored — including At Home Wound Care, an Oklahoma facility whose configuration still reads Eastern. Those four facilities hold 29 of 74 signed notes (39%). Rendering from the facility zone would print a confident wrong zone onto a legal document — worse than printing an unlovely one that the reader can interpret.

The device clock is chosen because it needs no supporting data to be right. The zone abbreviation is what makes the choice safe: every printed copy is a self-describing statement about the same instant. Two copies with different abbreviations still describe the same moment; the reader can reconstruct one from the other.

## What this means when you compare two copies of the same note

Occasionally a note is downloaded twice from two different devices set to two different zones. In production, 3 of 74 signed notes fall in a window where two US timezones disagree on the calendar day. Both copies are correct. Both are legally defensible. The zone abbreviation is how you tell they describe the same instant — line up the two strings, apply the offset, they match.

If a Home Health agency, auditor, or payer questions why two copies of the same signed note carry different times, the answer is:

- Both were generated from the same immutable stored instant.
- Each was rendered in the timezone of the device that requested the download.
- The zone abbreviation on each is the correct description of that reading.

There is nothing to reconcile in the underlying data.

## What was deleted

The PDF renderer used to have a legacy fallback path that stamped `new Date()` — today's date on the machine running the render — as the signature date whenever the stored `signed_at` was missing. It ran precisely when the primary renderer had thrown. That fallback fabricated a signature date onto an unsigned clinical record. Deleted. There is no path today that prints a synthesized signature date; if the note is unsigned, the line reads `Not recorded`.

<Note>The signature timestamp is written when the provider clicks Sign in step 17 of the Visit Wizard. If you sign a note and the timestamp does not appear on the PDF, check that the note is actually signed — a locked note is not the same as a signed note. See the Provider Attestation reference for the exact behavior.</Note>

## Related

Auto-rendered from `related:` in frontmatter.
