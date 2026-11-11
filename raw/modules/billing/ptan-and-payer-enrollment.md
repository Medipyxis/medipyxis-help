---
id: billing-ptan-and-payer-enrollment
title: PTAN and payer enrollment
module: billing
audience: [billing, admin]
roles: [biller, admin]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing/enrollment
related:
  - billing-overview
  - billing-submit-claim
  - billing-stedi-actions-inbox
  - billing-cms-1500-and-837p-fields
  - admin-billing-setup
tags: [billing, PTAN, Medicare, enrollment, Stedi, payer, NPI]
---

Before Medipyxis can submit claims through Stedi for a payer, three things must be true: your provider must be enrolled with that payer, that enrollment must be registered with Stedi, and — for Medicare — your PTAN must be on the enrollment record. This page covers what PTAN is, when it is required, how to enter it, and how enrollments flow through the platform.

Open the enrollment page at **Billing → Enrollment**. Route: `/facility/{facility_uuid}/billing/enrollment`.

## What PTAN is

**PTAN** stands for Provider Transaction Access Number. It is the Medicare-issued identifier that ties a provider's NPI to a specific MAC (Medicare Administrative Contractor) jurisdiction. Every Medicare-enrolled provider has one — it is assigned when Medicare approves the CMS-855 enrollment application.

Three practical things about PTAN:

- **PTAN is a Medicare identifier.** Commercial payers, Medicaid, TRICARE and ChampVA do not use it. Medipyxis does not limit it to Medicare: any payer whose PTAN box is filled on the Enrollment page receives it.
- **PTAN is MAC-specific.** A provider practicing across MAC jurisdictions (rare in wound care, but not impossible) has one PTAN per jurisdiction. Medipyxis keeps one group PTAN on the location and can store a different PTAN for each payer enrollment.
- **PTAN is not the same as NPI.** NPI is national and payer-agnostic; PTAN is Medicare-specific and MAC-scoped. Both go on the enrollment. Both need to match what Medicare has on file.

## How Medipyxis stores it

The location keeps one group PTAN; each payer enrollment also stores the PTAN it was sent with. It is entered by an admin on the Enrollment page (`/billing/enrollment`) — the PTAN field on the provider block. Also validates format (4–10 alphanumeric characters, or blank).

The Enrollment page is the only place to enter a PTAN. It fills the location's PTAN only when none is saved; it never replaces a saved one.

Format rule: PTAN must be 4–10 letters or numbers, or left blank. The field validator names this explicitly when you save something outside the range. Enter what CMS gave you exactly, uppercase, no spaces or dashes.

## When PTAN gets used

The PTAN is sent to Stedi on the enrollment for each payer whose PTAN box is filled, and is saved on that enrollment record.

**PTAN is not sent on individual 837P claims.** The claim wire carries NPI (Item 33a) and tax ID (Item 25); PTAN lives on the enrollment metadata that Stedi and the MAC use to route the claim. Do not look for it in the 837P payload — it is not there by design.

## Enrolling with a payer

The Enrollment page walks through one submission at a time. The full form:

**Provider block**

- Organization / Provider Name (must match what the payer has on file)
- NPI (10 digits)
- Tax ID (EIN; dashes and spaces are stripped)
- Provider PTAN (4–10 letters or numbers, optional)
- Provider address (line 1, city, state, ZIP)

**Contact block**

- Contact name
- Contact email
- Contact phone

**Payer + transaction selection**

- Payer(s) — searchable list pulled from Stedi's payer catalog
- Transaction type(s): **Professional Claims (837P)**, **Eligibility (270/271)**, and **ERA / Remittance (835)**. Claims and Eligibility are checked by default; ERA is off by default because enrolling ERA with Stedi stops ERA delivery through any other clearinghouse.

Every checked transaction type creates one enrollment record. Enrolling one provider with three payers for two transaction types produces six enrollment records.

Submit sends the whole batch to Stedi. Stedi returns a per-(payer, transaction) status: some may land as `active` immediately (auto-approve payers), some as `pending` (Stedi is contacting the payer), some as `error` with a rejection reason.

**The Current Enrollments panel refreshes after submit** so you see what actually landed without a page reload.

## What can come back

Three shapes of response, all visible on the results panel and in the [Stedi Actions Inbox](/modules/billing/stedi-actions-inbox/):

- **Active** — Stedi confirms the enrollment. Claims for that (payer, transaction) can flow through immediately.
- **Pending** — Stedi is processing. This can take from minutes (auto-approve commercials) to weeks (Medicare, some Medicaid states). While pending, submitting a claim for that payer will fail with a routing error at Stedi.
- **Error** — Stedi refused the enrollment request. The error message is verbatim from Stedi. Common causes: NPI/PTAN mismatch with what Medicare has, provider not yet CMS-855-enrolled, payer requires manual paperwork before Stedi can register it.

Enrollment errors also land in the [Stedi Actions Inbox](/modules/billing/stedi-actions-inbox/) as `enrollment.rejected` events, with the full context and the recommended next step.

## Common gotchas

**PTAN entered with a hyphen or space.** The Enrollment page removes them; the remaining letters and numbers must be 4–10 characters. CMS-issued PTANs are alphanumeric — some appear on paper with a leading zero or an alpha prefix (e.g. `12345`, `A1234`, `PA1234`). Enter the exact string CMS gave, no formatting.

**NPI/PTAN mismatch with Medicare.** A common enrollment reject. Medicare compares the submitted NPI + PTAN pair against its records; if either doesn't match what CMS has (e.g. provider re-credentialed and got a new PTAN), the enrollment fails. Fix: verify both values on the CMS PECOS portal, enter the correct PTAN in that payer's PTAN box on the Enrollment page, and resubmit.

**"Enrollment pending" for weeks.** For Medicare, this is expected — MAC processing can take 4–8 weeks. Do not resubmit; open the Stedi Actions Inbox and check for `enrollment.task.assigned` events. Stedi sometimes needs a form signed manually before Medicare will finalize.

**Wrong tax ID shape.** Medipyxis strips dashes and spaces before sending, so `12-3456789` and `123456789` are the same. It does not check the digit count — count the digits before you submit.

## What to do before you submit

1. Confirm the provider is CMS-855-enrolled (Medicare) or credentialed with the payer (commercial) _before_ touching the Enrollment page. Medipyxis registers enrollments with Stedi; it does not enroll providers with payers.
2. Have PTAN, NPI, tax ID, and legal provider name in front of you. Any mismatch reject is expensive to unwind.
3. Enroll Professional Claims and Eligibility the first time. Add ERA / Remittance only when this practice is ready to receive ERAs through Stedi instead of another clearinghouse.
4. After submit, watch the Current Enrollments panel and the Stedi Actions Inbox for the first hour. Auto-approve payers respond fast; errors show up fast too.
