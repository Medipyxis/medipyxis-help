---
id: billing-ptan-and-payer-enrollment
title: PTAN and payer enrollment
module: billing
audience: [billing, admin]
roles: [biller, admin]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-09-01
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

- **PTAN is Medicare-only.** Commercial payers, Medicaid, TRICARE, ChampVA — none of them use PTAN. The field is optional at the transaction level and is only checked by Medicare intermediaries.
- **PTAN is MAC-specific.** A provider practicing across MAC jurisdictions (rare in wound care, but not impossible) has one PTAN per jurisdiction. Medipyxis stores one PTAN per facility today, which matches the wound-care norm (a facility bills one MAC).
- **PTAN is not the same as NPI.** NPI is national and payer-agnostic; PTAN is Medicare-specific and MAC-scoped. Both go on the enrollment. Both need to match what Medicare has on file.

## How Medipyxis stores it

PTAN lives in `facility_billing_settings.ptan`. It is entered by an admin in one of two places:

- **On the Enrollment page** (`/billing/enrollment`) — the PTAN field on the provider block. Also validates format (4–10 alphanumeric characters, or blank).
- **On Admin → Billing Setup** — same underlying field, different surface. Either place updates the same row.

Format rule: PTAN must be 4–10 letters or numbers, or left blank. The field validator names this explicitly when you save something outside the range. Enter what CMS gave you exactly, uppercase, no spaces or dashes.

## When PTAN gets used

PTAN is sent on Medicare enrollment requests to Stedi as `provider_ptan`. It travels with the enrollment record and is written to `stedi_enrollments` when the enrollment lands. From that point on, Stedi routes Medicare claims for that provider using the enrollment record, so the PTAN is on file where it needs to be.

**PTAN is not sent on individual 837P claims.** The claim wire carries NPI (Item 33a) and tax ID (Item 25); PTAN lives on the enrollment metadata that Stedi and the MAC use to route the claim. Do not look for it in the 837P payload — it is not there by design.

## Enrolling with a payer

The Enrollment page walks through one submission at a time. The full form:

**Provider block**
- Provider name (must match what the payer has on file)
- NPI (10 digits)
- Tax ID (SSN or EIN, 9 digits, dashes are stripped)
- PTAN (Medicare only, 4–10 alphanumeric)
- Provider address (line 1, city, state, ZIP)

**Contact block**
- Contact name
- Contact email
- Contact phone

**Payer + transaction selection**
- Payer(s) — searchable list pulled from Stedi's payer catalog
- Transaction type(s) — check the ones you want registered:
  - `professional_claim_submission` (837P — required to submit claims)
  - `eligibility` (270/271 — required to verify insurance)
  - `claim_status` (276/277 — required to check status)
  - `remittance` (835 — required to receive ERAs)

Every checked transaction type creates one enrollment record. Enrolling one provider with three payers for two transaction types produces six enrollment records.

Submit sends the whole batch to Stedi via the `request-provider-enrollment` edge function. Stedi returns a per-(payer, transaction) status: some may land as `active` immediately (auto-approve payers), some as `pending` (Stedi is contacting the payer), some as `error` with a rejection reason.

**The Current Enrollments panel below the form refreshes after submit** so you see what actually landed without a page reload.

## What can come back

Three shapes of response, all visible on the results panel and in the [Stedi Actions Inbox](./stedi-actions-inbox.md):

- **Active** — Stedi confirms the enrollment. Claims for that (payer, transaction) can flow through immediately.
- **Pending** — Stedi is processing. This can take from minutes (auto-approve commercials) to weeks (Medicare, some Medicaid states). While pending, submitting a claim for that payer will fail with a routing error at Stedi.
- **Error** — Stedi refused the enrollment request. The error message is verbatim from Stedi. Common causes: NPI/PTAN mismatch with what Medicare has, provider not yet CMS-855-enrolled, payer requires manual paperwork before Stedi can register it.

Enrollment errors also land in the [Stedi Actions Inbox](./stedi-actions-inbox.md) as `enrollment.rejected` events, with the full context and the recommended next step.

## Common gotchas

<Note>
**PTAN entered with a hyphen or space.** The validator rejects anything outside `[A-Za-z0-9]{4,10}`. CMS-issued PTANs are alphanumeric — some appear on paper with a leading zero or an alpha prefix (e.g. `12345`, `A1234`, `PA1234`). Enter the exact string CMS gave, no formatting.
</Note>

<Note>
**NPI/PTAN mismatch with Medicare.** The most common enrollment reject. Medicare compares the submitted NPI + PTAN pair against its internal registry; if either doesn't match what CMS has (e.g. provider re-credentialed and got a new PTAN but the old one is still in the facility record), the enrollment fails. Fix: verify both values on the CMS PECOS portal, update in Medipyxis, resubmit.
</Note>

<Note>
**"Enrollment pending" for weeks.** For Medicare, this is expected — MAC processing can legitimately take 4–8 weeks. Do not resubmit; open the Stedi Actions Inbox and check for `enrollment.task.assigned` events. Stedi sometimes needs a form signed manually before Medicare will finalize.
</Note>

<Note>
**Wrong tax ID shape.** The field accepts SSN or EIN. Both are 9 digits after normalization. Medipyxis strips dashes and whitespace before sending, so `12-3456789` and `123456789` both work — but `12-345678` (8 digits) fails. Verify count.
</Note>

## What to do before you submit

1. Confirm the provider is CMS-855-enrolled (Medicare) or credentialed with the payer (commercial) *before* touching the Enrollment page. Medipyxis registers enrollments with Stedi; it does not enroll providers with payers.
2. Have PTAN, NPI, tax ID, and legal provider name in front of you. Any mismatch reject is expensive to unwind.
3. Enroll all four transaction types the first time — submission, eligibility, claim status, remittance. Missing one now means coming back later when the biller can't run a 270 and the whole thing has to go through Stedi's queue again.
4. After submit, watch the Current Enrollments panel and the Stedi Actions Inbox for the first hour. Auto-approve payers respond fast; errors show up fast too.

## Related

Auto-rendered from `related:` in frontmatter.
