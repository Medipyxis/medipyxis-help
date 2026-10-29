---
id: visit-wizard-ehr-signature-timestamp
title: How the signature timestamp prints on a signed note
module: visit-wizard-ehr
audience: [clinician, admin, billing]
roles: [clinician, medical_director, admin, biller]
type: reference
estimated_minutes: 5
last_reviewed: 2026-10-29
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-sign-off
  - visit-wizard-ehr-aprn-credential
  - visit-wizard-ehr-note-honesty-guardrails
tags: [attestation, signature, timestamp, timezone, note, PDF, addendum]
---

The Provider Attestation block on every signed progress note prints when the note was signed and in which timezone. This page explains what the printed value means and why it may not match your local clock exactly.

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

That value is a legal statement about the record, not a placeholder. The note has never been signed. Medipyxis never prints a substitute signature date on an unsigned note.

## Why device timezone, not facility timezone

The timestamp prints in the timezone of the device that generates the PDF, not in the facility's timezone.

The device clock is chosen because it needs no supporting data to be right. The zone abbreviation is what makes the choice safe: every printed copy is a self-describing statement about the same instant. Two copies with different abbreviations still describe the same moment; the reader can reconstruct one from the other.

## What this means when you compare two copies of the same note

Occasionally a note is downloaded twice from two different devices set to two different zones. Near midnight, two US timezones can disagree on the calendar day. Both copies are correct. Both are legally defensible. The zone abbreviation is how you tell they describe the same instant — line up the two strings, apply the offset, they match.

If a Home Health agency, auditor, or payer questions why two copies of the same signed note carry different times, the answer is:

- Both were generated from the same immutable stored instant.
- Each was rendered in the timezone of the device that requested the download.
- The zone abbreviation on each is the correct description of that reading.

There is nothing to reconcile in the underlying data.

<Note>The signature timestamp is written when the provider clicks Sign in step 17 of the Visit Wizard. If you sign a note and the timestamp does not appear on the PDF, check that the note is actually signed — a locked note is not the same as a signed note. See the Provider Attestation reference for the exact behavior.</Note>

## Related

Auto-rendered from `related:` in frontmatter.
