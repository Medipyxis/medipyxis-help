---
id: billing-cms-1500-and-837p-fields
title: CMS-1500 and 837P fields
module: billing
audience: [billing, admin]
roles: [biller, admin]
type: reference
estimated_minutes: 8
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing/new
related:
  - billing-overview
  - billing-submit-claim
  - billing-charge-master-and-zero-dollar-guard
  - billing-diagnosis-code-validation
  - billing-eligibility-and-verify-insurance
tags: [billing, CMS-1500, 837P, Stedi, X12, DMG03, diagnosis-pointer]
---

Medipyxis submits claims electronically: a claim sent to Stedi goes as an 837P transaction, and every 837P is the same information carried by the paper CMS-1500. A claim can also be faxed as a CMS-1500 or marked submitted by hand. This page is the cross-walk: what the paper form calls each field, what the 837P calls it, and what on the saved claim Medipyxis fills it from.

Use this page when a payer rejects a claim citing a specific element name (`DMG03`, `HI01-01`, `SV107`) and you need to trace it back to something you can fix in the app.

## The field map

Every row is a real field on a Medipyxis claim, in the order it appears on the CMS-1500 form.

| CMS-1500 item | 837P location | Medipyxis source | Notes |
|---|---|---|---|
| Item 1a — Insured's ID | 2010BA `NM109` (subscriber member ID) | The member ID on the patient's insurance, as saved on the claim | A blank or placeholder member ID is refused before the claim reaches Stedi. |
| Item 2 — Patient name | 2010BA `NM103/NM104` | The patient name saved on the claim | "Last, First" splits on the comma; otherwise the first word is the first name and the rest is the last name. Hyphenated last names stay whole. |
| Item 3 — Patient DOB and sex | 2010BA `DMG02` (DOB), `DMG03` (sex) | The patient's date of birth and sex | DOB is written `YYYYMMDD` on the wire. See "The DMG03 rule" below. |
| Item 5 — Patient address | 2010BA `N3/N4` | The patient's address | Required by most payers even when the patient is the subscriber. |
| Item 11 — Insured's group number | 2000B `SBR03` | The insurance group number saved on the claim | Optional at the transaction level; some payers reject when absent. |
| Item 17 — Referring provider | 2310A `NM1*DN` | The referring provider name and NPI entered on the claim | Sent only when the claim carries a referring provider name or NPI. |
| Item 21 — Diagnosis codes | 2300 `HI` (health-care code information) | The claim's diagnosis codes | First code is qualified `ABK` (principal), the rest `ABF`. Decimals are stripped for X12: `L97.421` becomes `L97421`. |
| Item 24A — Date(s) of service | 2400 `DTP*472` per line | The visit's date of service | One date per line; date ranges are not sent. |
| Item 24B — Place of service | 2300 `CLM05-1` | The place of service on the claim | Never defaulted: a claim with no place of service is refused before it reaches Stedi. |
| Item 24D — Procedure and modifiers | 2400 `SV101-2` (CPT/HCPCS), `SV101-3..6` (modifiers) | Each line's code and modifiers | One line per code. |
| Item 24E — Diagnosis pointer | 2400 `SV107` | The pointers typed on each line (Box 24E), up to four | When a line has no usable pointer, it points at diagnosis 1. See "The diagnosis-pointer rule" below. |
| Item 24F — Charges | 2400 `SV102` (`lineItemChargeAmount`) | The line's charge on the claim. In the claim editor this is the Charge Master per-unit price × units. | Sent as saved. A line without a positive charge is refused before it reaches Stedi. See [Charge Master and the $0.00 claim guard](/modules/billing/charge-master-and-zero-dollar-guard/). |
| Item 24G — Units | 2400 `SV104` (`serviceUnitCount`) | Each line's unit count | A missing unit count is sent as 1. |
| Item 25 — Federal Tax ID | 2010AA `REF*EI` | The facility's tax ID | Sent as stored. The facility record only accepts exactly nine digits with no dashes. |
| Item 28 — Total charge | 2300 `CLM02` (`claimChargeAmount`) | Sum of all line charges | Also gated against zero — see below. |
| Item 32 — Service facility | 2310C `NM1*77` + `N3/N4` | The service location recorded for the visit, or the patient's home for POS 12 | Sent only when the place of service names a facility or the home and that address differs from the billing provider's. |
| Item 33 — Billing provider | 2010AA `NM1*85` + `N3/N4` | The facility's name and address on file | The location's own address, not a separate pay-to address. |
| Item 33a — Billing NPI | 2010AA `NM109` | The NPI on the facility record | Group NPI, not the rendering clinician's. |
| Rendering provider | 2310B `NM1*82` | The rendering provider's NPI and name | Emitted at claim level; a line with a different rendering NPI also carries its own (Loop 2420A). Omitted when it equals the billing NPI (X12 RFI #1531/#1989). |

Medipyxis builds the 837P from the claim as saved. A required-fields check runs before a payload reaches Stedi; "What the pre-flight actually catches" below lists what it refuses.

## The DMG03 rule

`DMG03` is the wire code for administrative sex on the subscriber loop. X12 restricts the field to three values: `M`, `F`, `U`. Medipyxis stores four: `M`, `F`, `Other`, and null (unknown).

The mapping:

| Stored value | DMG03 wire value |
|---|---|
| `M` or `Male` | `M` |
| `F` or `Female` | `F` |
| `Other` | `U` |
| null / unknown | `U` |

Two consequences of this mapping worth knowing:

- **`Other` and unknown both become `U` on the wire.** The 837P transaction has no "blank" for a required field on an individual subscriber, so declined-to-answer and does-not-identify collapse into the same code. The stored value stays as you entered it; only the outbound wire value is collapsed.
- **No 276 claim-status inquiries.** Medipyxis does not send 276 claim-status inquiries; claim status comes back from Stedi as 277CA acknowledgments.

## The diagnosis-pointer rule

`SV107` on each service line tells the payer which of the claim's diagnosis codes (`HI01`..`HI12`) that line is billed against. On the CMS-1500 it is Item 24E, and it accepts up to four pointers per line — for example, `1,2,4` means "this line is medically justified by the first, second, and fourth diagnosis on this claim".

**Medipyxis sends the pointers typed on each line (up to four); a line with no usable pointer points at diagnosis 1.**

When a visit treats two wounds or two underlying diagnoses, point each line at the diagnoses that justify it.

## The service-date rule

`DTP*472` on the CMS-1500 is one item (24A) per line, and Medipyxis emits the visit's date of service on every line — same value, per-line placement. Two things to know:

- **`YYYYMMDD` on the wire.** Dates are stored as `YYYY-MM-DD`; the transform strips the dashes right before submission.
- **The 837P spec allows a date range** (`DTP*472*RD8*YYYYMMDD-YYYYMMDD`) — a single episode of care over two days. Wound-care visits are single-day encounters, so Medipyxis never emits a range. If a payer asks for a range, that's a separate conversation with the payer, not a claim change.

## What the pre-flight actually catches

Before a payload reaches Stedi, Medipyxis refuses to submit a claim missing any of the following:

- Payer trading-partner service ID (2010BB `NM109` — the payer routing key)
- Billing NPI (Item 33a)
- Subscriber member ID (Item 1a)
- Subscriber last name (Item 2)
- Principal diagnosis (Item 21, first position)
- At least one service line
- On every service line: a positive charge amount (Item 24F — see the [zero-dollar guard](/modules/billing/charge-master-and-zero-dollar-guard/))

A missing date of birth is not caught before Stedi. Lines without a procedure code are left off the claim, and a missing unit count is sent as 1.

Anything else — modifiers, group number, referring provider — is optional at the transaction level even when a payer needs it, so those rejects come back from the payer, not from the pre-flight.

## When a payer rejects citing an element name

The payer's rejection message names the element with its X12 code. The table above is the fastest way from that code to the app screen where you fix it:

- Element on the subscriber loop (`NM1**IL*...`, `DMG*...`, `N3/N4`) → check the patient's insurance, then the patient's demographics.
- Element on the billing loop (`NM1*85*...`, `REF*EI*...`) → check the NPI and tax ID on the facility record.
- Element on the claim (`CLM*...`, `HI*...`) → check the coding review drawer for that claim.
- Element on a service line (`SV1*...`) → open the claim and check that line's code, modifiers, and charge.

If the payer names an element that isn't in the table above, send the raw payer message to Medipyxis support.
