---
id: release-notes-index
title: Release notes
module: getting-started
audience: [clinician, intake, admin, billing, bd, vendor]
type: concept
last_reviewed: 2026-04-24
tags: [release-notes]
related:
  - release-notes-2026-04
  - release-notes-2026-03
  - release-notes-2026-02
  - release-notes-2026-01
---

# Release notes

This section documents every user-facing change shipped to Medipyxis. Notes are published roughly once per calendar month, aligned to the last major deploy of that month.

## What is covered

Each release note lists changes grouped by module — for example, Fleet Calendar, Referral Intake, Visit Wizard, Billing, HR & Compliance, and Vendor Portal. Each item includes:

- A one-line description of what changed or what was fixed.
- The Jira ticket key in parentheses, for traceability.
- A module heading so you can scan for changes relevant to your role.

Maintenance-only releases (infrastructure upgrades, dependency bumps, back-end data migrations with no visible UI change) are acknowledged with a brief note rather than a full item list.

## Cadence

Medipyxis ships on a rolling-deploy model. Release notes are consolidated monthly. A new note file is published within five business days of the last deploy of each month.

## Available release notes

| Release | Date range | Summary |
|---|---|---|
| [April 2026](./2026-04.md) | 2026-04-01 – 2026-04-24 | Fleet Calendar drag fix, ZusHealth integration, Wound Care Progress Notes, Bi-directional Med Reconciliation, MolecuLight DX, Referral Network Health, and 20+ additional fixes. |
| [March 2026](./2026-03.md) | 2026-03-01 – 2026-03-31 | Maintenance-only release. |
| [February 2026](./2026-02.md) | 2026-02-01 – 2026-02-28 | Maintenance-only release. |
| [January 2026](./2026-01.md) | 2026-01-01 – 2026-01-31 | Maintenance-only release. |

## How to read a change entry

```
- **Module — Short description.** Longer explanation of the fix or feature. (MED-XXXX)
```

Entries marked with a ticket key are traceable to a resolved Jira issue. Contact your implementation manager if you need the full ticket context for a compliance audit.

<Note>
Release notes describe shipped behavior. If you are on a version earlier than the note date, some items may not yet be available in your environment. Check **Admin → About** for your current app version.
</Note>
