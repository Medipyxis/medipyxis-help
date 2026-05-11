---
id: getting-started-billing-first-hour
title: Billing / RCM first hour
module: getting-started
audience: [billing]
roles: [biller]
type: quickstart
estimated_minutes: 45
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/billing
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

## Step 1 — Tour the Billing workspace (5 min)

1. Click **Billing Operations** in the sidebar.
2. You see work queues: **Unbilled**, **Ready to Submit**, **In Clearinghouse**, **Denied**, **Paid**. The count chip on each is live.
3. The right-side panel shows **Activity** (recent status changes across claims you have open).

## Step 2 — Audit an unbilled claim (15 min)

1. Click **Unbilled**. Every row is a signed visit waiting for claim review.
2. Open any row. You see a CMS-1500 preview with:
   - **Patient** (from the patient record)
   - **Payer** (from insurance verification)
   - **Diagnosis codes** (ICD-10, suggested by the visit note)
   - **Procedure lines** (CPT/HCPCS, auto-derived from procedures documented)
   - **Modifiers** (LT/RT, 25, 59 — auto-applied where appropriate)
3. Your job: **audit**, not rebuild. The green checkmarks mean coding passed the Billing & Compliance Brain rule engine. Red flags mean a rule failed — click to see which one.
4. Click **Submit to clearinghouse** when clean.

Detail: [Submit a claim](../../modules/billing/submit-claim.md)

<Compliance>
Every rule that passes or fails is logged in `policy_evaluations` with the exact rule id, predicate, and result. You can pull that audit trail for any claim under the **Audit Trail** tab — invaluable for denial appeals.
</Compliance>

## Step 3 — Post an ERA (10 min)

1. Open **Billing Operations → ERA Posting**.
2. Upload or auto-receive an 835 ERA file. Medipyxis parses it and shows payment amount, adjustment codes, and claim-level match.
3. Click **Post** on matched rows. Unmatched rows (the payer couldn't find the claim) stay until you reconcile.

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
- [Billing: Authorization requests](../../modules/billing/work-queue.md)
- [Quick reference: biller daily](../../quick-reference/biller.md)
