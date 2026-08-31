---
id: billing-cms-1500-and-837p-fields
title: CMS-1500 and 837P fields
module: billing
audience: [billing, admin]
roles: [biller, admin]
type: reference
estimated_minutes: 8
last_reviewed: 2026-08-31
app_route: /facility/{facility_uuid}/billing/new
related:
  - billing-overview
  - billing-submit-claim
  - billing-charge-master-and-zero-dollar-guard
  - billing-diagnosis-code-validation
  - billing-eligibility-and-verify-insurance
tags: [billing, CMS-1500, 837P, Stedi, X12, DMG03, diagnosis-pointer]
---

Medipyxis submits electronically. Every claim leaves the system as an 837P transaction to Stedi, and every 837P is the same information carried by the paper CMS-1500. This page is the cross-walk: what the biller sees on the claim view, what the paper form calls it, what the 837P calls it, and which table Medipyxis reads to fill it in.

Use this page when a payer rejects a claim citing a specific element name (`DMG03`, `HI01-01`, `SV107`) and you need to trace it back to something you can fix in the app.

## The field map

Every row is a real field on a Medipyxis claim, in the order it appears on the CMS-1500 form.

| CMS-1500 item | 837P location | Medipyxis source | Notes |
|---|---|---|---|
| Item 1a — Insured's ID | 2010BA `NM109` (subscriber member ID) | `insurance_plan.member_id` | Blank rejects at the payer, not at Stedi. |
| Item 2 — Patient name | 2010BA `NM103/NM104` | `patient.first_name`, `patient.last_name` | Splits on the last space; hyphenated last names stay whole. |
| Item 3 — Patient DOB and sex | 2010BA `DMG02` (DOB), `DMG03` (sex) | `patient.dob`, `patient.gender` | DOB is written `YYYYMMDD` on the wire. See "The DMG03 rule" below. |
| Item 5 — Patient address | 2010BA `N3/N4` | `patient.address_*` | Required by most payers even when the patient is the subscriber. |
| Item 11 — Insured's group number | 2000B `SBR03` | `insurance_plan.group_number` or `group_id` | Optional at the transaction level; some payers reject when absent. |
| Item 17 — Referring provider | 2310A `NM1*DN` | Not sent from wound-care visits. | Present in the schema, absent from the wound-care submit path. |
| Item 21 — Diagnosis codes | 2300 `HI` (health-care code information) | `claims.diagnosis_codes[]` | First code is qualified `ABK` (principal), the rest `ABF`. Decimals are stripped for X12: `L97.421` becomes `L97421`. |
| Item 24A — Date(s) of service | 2400 `DTP*472` per line | `claims.date_of_service` | Single-DOS today; the field exists per line so a future range would flow through untouched. |
| Item 24B — Place of service | 2300 `CLM05-1` | Derived POS code | Wound-care visits derive to 11 (office) or 12 (home) depending on the facility. |
| Item 24D — Procedure and modifiers | 2400 `SV101-2` (CPT/HCPCS), `SV101-3..6` (modifiers) | `claim_lines.code`, `claim_lines.modifier` | One line per code. HCPCS Q-codes come from tissue log entries; CPT codes come from the visit's procedure list. |
| Item 24E — Diagnosis pointer | 2400 `SV107` (`compositeDiagnosisCodePointers`) | Current: `['1']` for every line | See "The diagnosis-pointer rule" below. |
| Item 24F — Charges | 2400 `SV102` (`lineItemChargeAmount`) | `facility_charge_master.charge_amount` × `units` | A line without a positive charge cannot leave the system. See [Charge Master and the $0.00 claim guard](./charge-master-and-zero-dollar-guard.md). |
| Item 24G — Units | 2400 `SV104` (`serviceUnitCount`) | `claim_lines.units` | One unit per line for E/M and debridement; multi-unit for grafting is line-specific. |
| Item 25 — Federal Tax ID | 2010AA `REF*EI` | `facility.tax_id` (normalized) | Dashes and whitespace are stripped before the payload leaves — the wire wants nine digits and nothing else. |
| Item 28 — Total charge | 2300 `CLM02` (`claimChargeAmount`) | Sum of all line charges × units | Also gated against zero — see below. |
| Item 32 — Service facility | 2310C `NM1*77` + `N3/N4` | `facility.name`, `facility.address_*` | Populated for every claim. |
| Item 33 — Billing provider | 2010AA `NM1*85` + `N3/N4` | `facility_billing_settings.pay_to_*` | The pay-to address, not the service address. |
| Item 33a — Billing NPI | 2010AA `NM109` | `facility.npi` or `facility_billing_settings.billing_npi` | Group NPI, not the rendering clinician's. |
| Rendering provider | 2310B `NM1*82` | `provider.npi`, `provider.full_name` | Emitted at the claim level, not per line — one clinician per visit is the wound-care norm. Omitted when it equals the billing NPI (X12 RFI #1531/#1989). |

The full 837P builder is `backend/supabase/functions/submit-claim/index.ts`. `_shared/claimRequiredFields.ts` runs the pre-flight check that catches most of the misses documented above before a payload ever reaches Stedi.

## The DMG03 rule

`DMG03` is the wire code for administrative sex on the subscriber loop. X12 restricts the field to three values: `M`, `F`, `U`. Medipyxis stores four: `M`, `F`, `Other`, and null (unknown).

The mapping (`backend/supabase/functions/_shared/gender.ts` — `toX12Gender`):

| Stored value | DMG03 wire value |
|---|---|
| `M` or `Male` | `M` |
| `F` or `Female` | `F` |
| `Other` | `U` |
| null / unknown | `U` |

Two consequences of this mapping worth knowing:

- **`Other` and unknown both become `U` on the wire.** The 837P transaction has no "blank" for a required field on an individual subscriber, so declined-to-answer and does-not-identify collapse into the same code. The stored value stays as you entered it; only the outbound wire value is collapsed.
- **Claim-status inquiries (276/277) refuse `U`.** The status transaction accepts only `M` or `F`. When Medipyxis pulls status on a claim submitted with `U`, the gender field is omitted from the 276 rather than forced to a wrong value. Some payers respond `AAA*Y*72` (subscriber/insured not found); that failure is a payer limitation, not a Medipyxis defect, and the underlying claim is unaffected.

## The diagnosis-pointer rule

`SV107` on each service line tells the payer which of the claim's diagnosis codes (`HI01`..`HI12`) that line is billed against. On the CMS-1500 it is Item 24E, and it accepts up to four pointers per line — for example, `1,2,4` means "this line is medically justified by the first, second, and fourth diagnosis on this claim".

**Medipyxis today points every service line at diagnosis position 1 only** (`compositeDiagnosisCodePointers: { diagnosisCodePointers: ['1'] }`). This works because wound-care claims almost always carry the wound's underlying condition as the principal diagnosis, and every line on the visit relates back to it.

<Warning>
When a visit legitimately splits between two different wounds or two different underlying diagnoses, the current single-pointer emission may under-justify the secondary line. Payers rarely deny for this alone, but a documented case (Explanation of Benefits calling out lack of medical necessity on a specific line) is worth flagging to Damon so per-line pointing can be prioritized.
</Warning>

## The service-date rule

`DTP*472` on the CMS-1500 is one item (24A) per line, and Medipyxis emits the visit's date of service on every line — same value, per-line placement. Two things to know:

- **`YYYYMMDD` on the wire.** The claims table stores `YYYY-MM-DD`; the transform strips the dashes right before submission.
- **The 837P spec allows a date range** (`DTP*472*RD8*YYYYMMDD-YYYYMMDD`) — a single episode of care over two days. Wound-care visits are single-day encounters, so Medipyxis never emits a range. If a payer asks for a range, that's a separate conversation with the payer, not a claim change.

## What the pre-flight actually catches

Before a payload reaches Stedi, `_shared/claimRequiredFields.ts` refuses to submit a claim missing any of the following:

- Payer trading-partner service ID (2010BB `NM109` — the payer routing key)
- Billing NPI (Item 33a)
- Subscriber member ID (Item 1a)
- Subscriber DOB (Item 3)
- Principal diagnosis (Item 21, first position)
- At least one service line
- On every service line: a procedure code (Item 24D), a positive charge amount (Item 24F — see the [zero-dollar guard](./charge-master-and-zero-dollar-guard.md)), and a units count > 0 (Item 24G)

Anything else — modifiers, group number, referring provider — is optional at the transaction level even when a payer needs it, so those rejects come back from the payer, not from the pre-flight.

## When a payer rejects citing an element name

The payer's rejection message names the element with its X12 code. The table above is the fastest way from that code to the app screen where you fix it:

- Element on the subscriber loop (`NM1**IL*...`, `DMG*...`, `N3/N4`) → check the patient's Insurance tab, then the patient's demographics.
- Element on the billing loop (`NM1*85*...`, `REF*EI*...`) → check the facility's Billing Settings.
- Element on the claim (`CLM*...`, `HI*...`) → check the coding review drawer for that claim.
- Element on a service line (`SV1*...`) → open the claim, expand the line, check its code, modifier, and charge.

If the payer names an element that isn't in the table above, that field is either optional in the 837P (and the payer is enforcing its own rule) or is on a loop Medipyxis doesn't emit. Send the raw payer message to Damon — the transform is small enough to trace a full round trip in one sitting.

## Related

Auto-rendered from `related:` in frontmatter.
