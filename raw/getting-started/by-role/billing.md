---
id: getting-started-billing-first-hour
title: Billing / RCM first hour
module: getting-started
audience: [billing]
roles: [biller]
type: quickstart
estimated_minutes: 45
last_reviewed: 2026-07-08
app_route: /facility/{facility_uuid}/billing/work-queue
related:
  - billing-work-queue
  - billing-submit-claim
  - billing-denial-management
  - billing-era-posting
tags: [onboarding, billing, claims]
---

# Billing / RCM first hour

By the end of this hour you will understand the billing work queue, submit your first claim, post an ERA payment, and know where denials live. Medipyxis does the coding prep; you audit and submit.

## Before you start

- Your admin has added you with a `biller` role.
- Clearinghouse credentials are configured (**Billing Operations → Clearinghouse Config**).
- There's at least one signed visit sitting in the unbilled queue (create a test visit if not).

## The billing loop in Medipyxis

```
Signed visit
    ↓
Unbilled queue  ← you audit, not build
    ↓
Submit to clearinghouse
    ↓
Clearinghouse response (accepted / rejected)
    ↓
Payer response (paid / denied / partial)
    ↓
ERA posting  →  denials routed to Denial Management
```

## Step 1 — Tour the Work Queue (5 min)

1. Click **Billing → Work Queue** in the sidebar.
2. The Work Queue is a calendar-synced readiness board — one row per encounter — showing Visit Status, Note Status, Billing Readiness, and (once a claim exists) a **Claim Status**. Use the **Ready** / **Pending Doc** / **Pending Sig** presets and the filters to focus your day. See [Work the Billing Work Queue](../../modules/billing/work-queue.md).

## Step 2 — Review and submit a claim (15 min)

1. Find an encounter that's **Ready for Billing**. Click **Edit** to open the claim form (`/billing/new`), or **Review** for the coding drawer.
2. On the claim form you see a CMS-1500 layout with:
   - **Patient** (from the patient record)
   - **Payer** (from insurance)
   - **Diagnosis codes** (ICD-10, from the visit note)
   - **Procedure lines** (CPT/HCPCS, auto-derived from documented procedures; drag to reorder)
   - **Modifiers** (25, 59, KX, etc. where appropriate)
3. Your job is to **audit**, not rebuild. Correct anything flagged.
4. Click **Submit Claim** when clean — it goes to the payer through Stedi.

Detail: [Submit a claim](../../modules/billing/submit-claim.md)

## Step 3 — Review posted ERAs (10 min)

1. Open the **ERA / Payments** view (`/era-eob`).
2. ERAs (835) arrive automatically from Stedi over a webhook — there is no file to upload and no sync button. Matched lines auto-post and advance claims to **Paid**.
3. Reconcile any **Unmatched** lines by matching them to the correct claim. See [ERA posting](../../modules/billing/era-posting.md).

## Step 4 — Work denials (10 min)

1. Open **Denial Management**. Denials are grouped by denial reason (CARC/RARC).
2. For each denial, Medipyxis shows the original claim, the rule evaluation from submission, and a suggested next action (corrected claim, appeal, write-off).
3. Take an action. Everything is timestamped and added to the claim's activity feed.

Detail: [Denial Management](../../modules/billing/denial-management.md)

## Step 5 — Find a claim fast (5 min)

- Press ⌘K / Ctrl+K from anywhere. Type a patient name, claim number, or visit date. Medipyxis ranks billing-related matches at the top when you're in the Billing workspace.

## Result

- You've submitted at least one clean claim.
- You've posted at least one ERA line.
- You know where denials live and how to work them.

## Next up

- [Billing: Denial Management deep dive](../../modules/billing/denial-management.md)
- [Work the Billing Work Queue](../../modules/billing/work-queue.md)
- [Quick reference: biller daily](../../quick-reference/biller.md)
