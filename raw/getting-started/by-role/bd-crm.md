---
id: getting-started-bd-first-hour
title: BD / CRM first hour
module: getting-started
audience: [bd]
roles: [bd_rep, bd_manager]
type: quickstart
estimated_minutes: 45
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/bd-dashboard
related:
  - bd-manage-reps
  - bd-rep-coaching
  - crm-practice-detail
  - crm-log-activity
tags: [onboarding, bd, crm, roi]
---

# BD / CRM first hour

By the end of this hour you will have your rep list configured, logged a practice visit, and learned how to read the ROI report that ties referral sources to revenue.

## Before you start

- Your admin has added you with a `bd_rep` or `bd_manager` role.
- You have a list of your assigned practices (or the CSV is ready to upload).

## Step 1 — Set up your rep profile (5 min)

1. Open **Business Development** in the sidebar.
2. Click your avatar → **My BD Profile**. Set your territory, target-visit cadence, and monthly goal.

## Step 2 — Load your practices (15 min)

1. **BD → Practices** (or **CRM**, same underlying data — CRM is the detail view, BD is the dashboard).
2. Click **+ Add practice** for one-offs, or **Bulk Import** for a CSV.
3. For each practice, confirm: NPI, address, phone, primary contact, and (critically) **referral source category** — Medicare, Medicare Advantage, commercial, SNF, home health.

<Tip>
Medipyxis ties every referral it receives to a practice. If your referral sources aren't loaded yet, incoming faxes will land in an **Unattributed** bucket until you match them.
</Tip>

## Step 3 — Log your first activity (5 min)

1. Open a practice from the list → **Activity** tab.
2. Click **+ Log activity**. Pick type: *Visit*, *Call*, *Email*, *Lunch*, *CME event*.
3. Add notes and any follow-up date. The activity shows up on your manager's **Rep Coaching** view.

## Step 4 — Read your ROI (10 min)

1. **BD → Dashboard** (`bd-dashboard`). Four key KPIs at the top:
   - **Referrals received** (this month vs. last)
   - **Referrals converted to visit** (%)
   - **Revenue attributed** (from visits + claims tied to each practice)
   - **Cost to serve** (your rep spend + time)
2. Click any practice in the list to see a per-practice ROI waterfall — referrals in, visits completed, revenue out, rep spend in.

## Step 5 — Manager view (5 min, managers only)

1. **BD → Manager Dashboard**. See your team's rollup.
2. **BD → Rep Coaching**. For each rep: visits logged, practices covered, 30-day activity trend, ROI of their book.

## Result

- Your rep record is live.
- Your practices are loaded and every incoming referral will be attributed automatically.
- You've seen revenue-per-practice for the first time.

## Next up

- [CRM: practice detail deep dive](../../modules/crm/practice-detail.md)
- [BD: round-robin referral assignment](../../modules/business-development/ai-route-suggestions.md)
