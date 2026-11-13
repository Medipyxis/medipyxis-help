---
id: getting-started-billing-first-hour
title: Billing / RCM first hour
module: getting-started
audience: [billing]
roles: [biller]
type: quickstart
estimated_minutes: 45
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing/work-queue
related:
  - billing-work-queue
  - billing-submit-claim
  - billing-denial-management
  - billing-era-posting
tags: [onboarding, billing, claims]
---

# Billing / RCM first hour

By the end of this hour you will know the Billing Work Queue, have reviewed and submitted a claim, checked posted ERA payments, and know where denials live. Medipyxis drafts the claim from the signed visit; you review and submit it.

## Before you start

- Your role can open **Billing Operations**.
- Your providers are enrolled with their payers through Stedi (**Billing Operations → Payer Enrollment**). See [Set up billing and the Stedi clearinghouse](/admin/billing-setup/).
- There's at least one signed visit waiting to be billed.

## The billing loop in Medipyxis

`Signed visit → claim drafted for review → you review and click Submit Claim → Stedi sends it to the payer → acknowledgment (accepted or rejected) → ERA payment posts to the claim's ledger`

## Step 1 — Tour the Work Queue (5 min)

1. Click **Billing Operations** in the sidebar, then **Work Queue**.
2. The Work Queue has one row per encounter, showing Visit Status, Note Status, Billing Readiness and, once a claim exists, a **Claim Status**. Use the **Ready** / **Pending Doc** / **Pending Sig** presets and the filters to focus your day. See [Work the Billing Work Queue](/modules/billing/work-queue/).

Users with the Biller role currently cannot change the Claim Status: the change fails with an error. A fix is being tracked. Until then, ask an admin or billing lead to set it.

## Step 2 — Review and submit a claim (15 min)

1. Find an encounter that's **Ready**. Click **Edit** to open the claim form, or **Review** for the Coding Review drawer.
2. Check the patient, payer, diagnosis codes and procedure lines, and correct anything flagged.
3. Click **Submit Claim** when it is clean — it goes to the payer through Stedi.

Detail: [Submit a claim](/modules/billing/submit-claim/)

## Step 3 — Review posted ERAs (10 min)

1. Open the **Payments** tab, or the **ERA / EOB** page.
2. ERAs (835) arrive automatically from Stedi — there is no file to upload and no sync button. Matched lines post to the claim's ledger automatically. Posting does not change the claim's status.
3. On the ERA / EOB page, match any **Unmatched** line with **Match to claim**. See [ERA posting](/modules/billing/era-posting/).

## Step 4 — Work denials (10 min)

1. Open the **Denials** tab in Billing Operations. Each denial record carries a reason, an appeal status and a deadline.
2. Payer denials that arrive on an ERA are not added to the Denials tab automatically yet; a fix is being tracked. Work those from the claim.

Detail: [Denial Management](/modules/billing/denial-management/)

## Step 5 — Find a claim fast (5 min)

On the **Claims** tab, search and filter by status, payer, date of service, and rendering provider. (⌘K / Ctrl+K jumps to pages by name; it does not search claims.)

## Result

- You've submitted at least one clean claim.
- You've checked how ERA payments post.
- You know where denials live and how to work them.

## Next up

- [Billing: Denial Management deep dive](/modules/billing/denial-management/)
- [Work the Billing Work Queue](/modules/billing/work-queue/)
- [Quick reference: biller daily](/quick-reference/biller/)
