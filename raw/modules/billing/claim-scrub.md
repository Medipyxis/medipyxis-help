---
id: billing-claim-scrub
title: The claim scrubber
module: billing
audience: [billing, admin, clinical]
roles: [biller, admin, provider]
type: reference
estimated_minutes: 8
last_reviewed: 2026-09-01
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

The claim scrubber is Medipyxis's pre-submission red-flag layer for wound-care claims. It runs on every auto-drafted claim, appends its findings to the claim's `biller_notes`, and shows them in the [Coding Review drawer](./coding-review-drawer.md). It never blocks submission — it is guidance for the biller to check before the claim leaves.

The scrubber is deliberately advisory. Medipyxis lost eighty-four thousand dollars in June 2026 to hard-blocking LCD rules that fired on claims that should have gone out; the scrubber is the architecture that replaced it. Nothing here throws, nothing gates submission, nothing sets `status=needs_provider`.

## What it checks

Five rules, wound-care specific, sourced from published CMS/AMA/NCCI policy where possible. Each rule is labeled either **DEFENSIBLE** (cites a live CMS/MLN URL a biller can open right now) or **SHADOW** (a Medipyxis policy call that could be defensible with additional sourcing but currently lacks a single primary URL). Shadow rules are labeled so the biller knows to double-check before quoting the reason to a payer.

### R1 — Deleted HCPCS C5271–C5278 (DEFENSIBLE)

**Fires when:** any of the C5271–C5278 codes appear on the claim with a date of service on or after **2026-01-01**.

**Why:** these eight application-of-skin-substitute C-codes were deleted effective January 1, 2026 in the CY2026 OPPS final rule. A claim still carrying them submits structurally but the payer rejects for invalid procedure code. Replace with the current 15271–15278 CPT ladder or the payer-specific alternative.

**Source:** CY2026 OPPS Final Rule (CMS-1809-FC).

### R2 — JW/JZ modifier on non-BLA skin substitute (DEFENSIBLE)

**Fires when:** the claim carries a CTP HCPCS (Q4xxx range) with a JW or JZ modifier attached.

**Why:** JW (drug amount discarded) and JZ (zero amount discarded) are single-use vial modifiers restricted to biologics licensed under a BLA. Skin substitutes are regulated as tissue products under 21 CFR 1271, not BLA drugs. Attaching JW or JZ to a Q-coded skin substitute is a payer-defined mismatch that draws a hard reject.

**Source:** CMS MM11856 (JW modifier policy) and MLN Matters SE20015.

### R3 — WISeR prior auth missing (DEFENSIBLE, multi-gate)

**Fires when:** the claim has a CTP HCPCS, patient state is one of `NJ / OH / OK / TX`, and DOS is on or after **2026-01-15**.

**Why:** the WISeR (Wound care Investigational Skin substitute Enhanced Review) Model requires prior authorization for skin substitute applications in these four states as of 2026-01-15. A claim without a WISeR UTN on Box 23 draws an automatic hold.

The rule ladders through the visit's `visit_authorization` in a defined priority (G1 no auth linked → G2 expired / G5 not yet valid → G6 product mismatch → G4 not-active-status → G3 exhausted) and emits distinct advisory codes for each shape:

- `wiser_pa_missing` — no auth attached, or the attached auth is expired, exhausted, denied, or outside its validity window.
- `wiser_pa_product_mismatch` — an auth is attached but its approved Q-codes don't include the code being billed.
- `wiser_utn_missing` — an auth exists and is valid, but the UTN is not present on the claim's Box 23 field.

**Source:** CMS WISeR Model announcement (Medicare Innovation Center, 2025).

### R4 — MAC state mismatch on CTP (SHADOW)

**Fires when:** the claim carries a CTP HCPCS and the patient's state differs from the facility's state.

**Why:** Medicare skin substitute coverage is set by LCD, and LCDs are MAC-jurisdiction-scoped. When patient state and facility state fall under different MACs, the more restrictive LCD may govern — or the claim may be routed to the wrong MAC and rejected for jurisdictional mismatch. This is a Medipyxis policy call (`SHADOW`); we surface it as `info` severity, not `warning`, and expect the biller to verify against the specific payer.

**Source:** Medipyxis internal policy. Not a published CMS rule; the surfacing is a heuristic.

### R5 — Debridement + CTP bundled same DOS (DEFENSIBLE)

**Fires when:** a debridement CPT (11042–11047) and a CTP application (15271–15278 or 15275–15278) appear on the same DOS.

**Why:** the 2026 NCCI Policy Manual bundles these code pairs when performed on the same date of service — the debridement is considered inclusive of the application. Billing both draws an NCCI edit reject.

**Source:** NCCI Policy Manual for Medicare Services, Chapter III, effective 2026.

## What it never checks

The scrubber operates at the claim level: CPT codes, HCPCS codes, modifiers, patient state, DOS, and the visit's authorization snapshot. It does not read:

- **Wound-level clinical data.** Wound size, tissue type, exposed structures, healing progression — none of it. Those live in the note and are checked by the LCD Navigator on the clinical side (guidance-only there too).
- **`public.policy_rules` in prod.** Every rule in the scrubber is inline in `claimScrub.ts` with its own source tag. The seeded policy_rules table is used only during code review as a citation reference; the runtime never queries it.

The reason is architectural: the scrubber has to run identically in test, demo, and prod without a database dependency, and it has to fail closed if a citation goes stale. Inline rules with hard-coded sources are the pattern that survived the LCD Navigator rollback.

## Where the results show up

Every scrubber finding is appended to the claim's `biller_notes` field with a fixed format:

```
⚠️ SCRUB: <code> — <human message> [source: <URL> · verified <YYYY-MM-DD>]
```

The Coding Review drawer renders these as a list at the top of the drawer, above the coding grid. Each finding shows:

- The rule code (`deleted_hcpcs_c5271_c5278`, `wiser_pa_missing`, etc.) for quick reference.
- The human message explaining what fired and what to check.
- The source URL and last-verified date for defensible rules; blank for shadow rules.
- Severity — `warning` (yellow) or `info` (blue).

The biller decides. Submit as-is if the reason is understood, correct the claim first if the finding is real.

## The four prime directives

The scrubber's design is governed by four rules that come from the RCM Assassin skill and the June 2026 LCD Navigator retrospective:

**PD-1 — Guidance-only, never hard-block.** All returns are advisory strings. Nothing throws, nothing gates submission, nothing sets `status=needs_provider`.

**PD-2 — Never invent codes, rates, or policies.** Every rule cites a defensible source or is labeled `SHADOW`. Shadow rules exist so a biller knows the platform's opinion but also knows to verify before quoting the reason to a payer.

**PD-3 — Cite live URLs with `last_verified`.** Each defensible warning carries the source URL and the date it was last verified. Stale citations get re-verified when the source date is more than 90 days old.

**PD-4 — Truth over optimism.** If a precondition can't be evaluated (missing state, missing DOS, missing auth), the rule silently skips rather than fabricating a verdict. Better to say nothing than to say the wrong thing.

## What it does not replace

The scrubber runs **after** the claim is auto-drafted and **before** it is submitted. It complements, does not replace:

- **The zero-dollar guard** — money-boundary refusal, not advisory. See [Charge Master and the $0.00 claim guard](./charge-master-and-zero-dollar-guard.md).
- **The required-fields pre-flight** — refuses to submit a claim missing structural 837P fields. See [CMS-1500 and 837P fields](./cms-1500-and-837p-fields.md).
- **The Coding Review drawer's manual review** — the biller reads the note, verifies the codes, and clicks Submit. Human in the loop. See [Coding Review drawer](./coding-review-drawer.md).

The scrubber makes the biller faster; it does not replace the biller.

## Related

Auto-rendered from `related:` in frontmatter.
