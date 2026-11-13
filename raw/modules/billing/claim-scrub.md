---
id: billing-claim-scrub
title: The claim scrubber
module: billing
audience: [billing, admin, clinical]
roles: [biller, admin, provider]
type: reference
estimated_minutes: 8
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing/coding-review
related:
  - billing-overview
  - billing-submit-claim
  - billing-coding-review-drawer
  - billing-cms-1500-and-837p-fields
  - billing-charge-master-and-zero-dollar-guard
  - billing-denial-management
tags: [billing, claim-scrub, LCD, NCCI, WISeR, CTP, JW, JZ, guidance-only]
---

The claim scrubber is Medipyxis's pre-submission red-flag layer for wound-care claims. It runs on every auto-drafted claim and appends its findings to the claim's biller notes. The [Coding Review drawer](/modules/billing/coding-review-drawer/) does not display them. It never blocks submission — it is guidance for the biller to check before the claim leaves.

The scrubber is deliberately advisory. Medipyxis lost eighty-four thousand dollars in June 2026 to hard-blocking LCD rules that fired on claims that should have gone out; the scrubber is the architecture that replaced it. Nothing here throws an error, nothing gates submission, and nothing sends the claim back to the provider.

## What it checks

Five rules, wound-care specific, sourced from published CMS/AMA/NCCI policy where possible. Each rule is labeled either **DEFENSIBLE** (cites a live CMS/MLN URL a biller can open right now) or **SHADOW** (a Medipyxis policy call that could be defensible with additional sourcing but currently lacks a single primary URL). Shadow rules are labeled so the biller knows to double-check before quoting the reason to a payer.

### R1 — Deleted HCPCS C5271–C5278 (DEFENSIBLE)

**Fires when:** any of the C5271–C5278 codes appear on the claim with a date of service on or after **2026-01-01**.

**Why:** these eight application-of-skin-substitute C-codes were deleted effective January 1, 2026. A claim still carrying them submits structurally but the payer rejects for invalid procedure code. Replace with the current 15271–15278 CPT ladder or the payer-specific alternative.

**Source cited by the product:** CY2026 PFS / OPPS Final Rule (CMS-1832-F).

### R2 — JW/JZ modifier on non-BLA skin substitute (DEFENSIBLE)

**Fires when:** the claim carries a skin substitute application CPT (15271–15278) with a JW or JZ modifier, for a date of service on or after 2026-01-01.

**Why:** under the CY2026 payment rules, the JW and JZ modifiers do not apply to skin substitutes billed as incident-to supplies; only the applied amount is billable. Biologicals licensed under a BLA are excluded. The scrubber cannot tell a BLA product from the claim alone, so check the product type before you dismiss the warning.

**Source cited by the product:** CY2026 PFS / OPPS Final Rule (CMS-1832-F).

### R3 — WISeR prior auth missing (DEFENSIBLE, multi-gate)

**Fires when:** the claim has a skin substitute application CPT (15271–15278), patient state is one of `NJ / OH / OK / TX`, and DOS is on or after **2026-01-15**.

**Why:** the WISeR (Wasteful and Inappropriate Service Reduction) Model requires prior authorization for skin substitute applications in these four states for dates of service on or after 2026-01-15. The scrubber warns that a claim without the WISeR UTN in Box 23 (837P Loop 2300 REF*G1) will be denied with CO-197 + RARC N210.

The rule ladders through the authorization linked to the visit in a defined priority (G1 no auth linked → G2 expired / G5 not yet valid → G6 product mismatch → G4 not-active-status → G3 exhausted) and emits distinct advisory codes for each shape:

- `wiser_pa_missing` — no auth attached, or the attached auth is expired, exhausted, denied, or outside its validity window.
- `wiser_pa_product_mismatch` — an auth is attached but its approved Q-codes don't include the code being billed.
- `wiser_utn_missing` — an auth exists and is valid, but the UTN is not present on the claim's Box 23 field.

**Source:** CMS WISeR Model announcement (Medicare Innovation Center, 2025).

### R4 — MAC state mismatch on CTP (SHADOW)

**Fires when:** the claim carries a skin substitute application CPT (15271–15278) and the patient's state differs from the facility's state.

**Why:** Medicare skin substitute coverage is set by LCD, and LCDs are MAC-jurisdiction-scoped. When patient state and facility state fall under different MACs, the more restrictive LCD may govern — or the claim may be routed to the wrong MAC and rejected for jurisdictional mismatch. This is a Medipyxis policy call (`SHADOW`); we surface it as `info` severity, not `warning`, and expect the biller to verify against the specific payer.

**Source:** Medipyxis internal policy. Not a published CMS rule; the surfacing is a heuristic.

### R5 — Debridement + CTP bundled same DOS (DEFENSIBLE)

**Fires when:** a debridement code (11042–11047 or 97597) and a skin substitute application CPT (15271–15278) are on the same claim, for a date of service on or after 2026-01-01.

**Why:** under the CY2026 NCCI change, debridement on the same wound on the same day is bundled into the skin substitute application. Remove the debridement code unless a distinct wound is documented and modifier 59 (or XS) is on the debridement line.

**Source cited by the product:** CY2026 PFS / OPPS Final Rule (CMS-1832-F), NCCI change.

## What it never checks

The scrubber operates at the claim level: CPT codes, HCPCS codes, modifiers, patient state, DOS, and the visit's authorization snapshot. It does not read:

- **Wound-level clinical data.** Wound size, tissue type, exposed structures, healing progression — none of it. Those live in the note.
- **The rules database.** Every scrubber rule is built into the product with its own source; the scrubber never queries the stored policy rules.

The scrubber runs identically in test, demo and prod without a database dependency. Citation freshness is a fixed date stamp, re-verified by hand.

## Where the results show up

Every finding is appended to the claim's biller notes as:

`[CLAIM SCRUB:<code>:<DEFENSIBLE|SHADOW>] <message> (Source: <citation> — <URL> Last verified: <YYYY-MM-DD>. Guidance only, not enforced.)`

The Coding Review drawer does not show scrubber findings, and the claim's Biller Notes panel lists a separate set of notes.

## The four prime directives

The scrubber's design is governed by four rules:

**PD-1 — Guidance-only, never hard-block.** All returns are advisory strings. Nothing throws an error, nothing gates submission, and nothing sends the claim back to the provider.

**PD-2 — Never invent codes, rates, or policies.** Every rule cites a defensible source or is labeled `SHADOW`. Shadow rules exist so a biller knows the platform's opinion but also knows to verify before quoting the reason to a payer.

**PD-3 — Cite live URLs with a last-verified date.** Each defensible warning carries the source URL and the date it was last verified (currently 2026-07-11). Re-verification is a manual step.

**PD-4 — Truth over optimism.** If the state or date of service is missing or malformed, the rule silently skips rather than fabricating a verdict. A missing authorization is not skipped: it is the `wiser_pa_missing` finding.

## What it does not replace

The scrubber runs **after** the claim is auto-drafted and **before** it is submitted. It complements, does not replace:

- **The zero-dollar guard** — money-boundary refusal, not advisory. See [Charge Master and the $0.00 claim guard](/modules/billing/charge-master-and-zero-dollar-guard/).
- **The required-fields pre-flight** — refuses to submit a claim missing structural 837P fields. See [CMS-1500 and 837P fields](/modules/billing/cms-1500-and-837p-fields/).
- **The Coding Review drawer's manual review** — the biller reads the note and verifies the codes; the claim is submitted from the full claim form. Human in the loop. See [Coding Review drawer](/modules/billing/coding-review-drawer/).

The scrubber makes the biller faster; it does not replace the biller.
