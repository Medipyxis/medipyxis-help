---
id: qr-practice-admin
title: Practice admin cheat sheet
module: getting-started
audience: [admin]
roles: [practice_admin, super_admin]
type: quickstart
estimated_minutes: 3
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/dashboard
tags: [quick-reference, admin, daily, onboarding]
related:
  - qr-biller
  - qr-nurse-daily
  - qr-intake-coordinator
  - release-notes-2026-04
---

# Practice admin cheat sheet

One page. Everything you own across a typical day, week, and month.

## Start of day

| Task | Where | Shortcut |
|---|---|---|
| Check action items and SLA breach alerts | **Dashboard** → right panel → **Action Items** | — |
| Review fax queue age (target: zero > 24 h) | **More (Fax)** → **Fax Review Queue** | — |
| Verify all providers are marked **On Duty** | **Fleet Calendar** → day view → provider swim lanes | — |
| Switch facility context | Header → facility name pill → select facility | — |

<Tip>
Use `⌘K` / `Ctrl+K` (Quick Jump) to navigate to any patient, visit, page, or facility without touching the sidebar.
</Tip>

## Daily tasks

| Task | Where |
|---|---|
| Approve pending referral assignments | **Referral Intake** → **Ready for Assignment** column |
| Confirm no appointments on archived patients | **Fleet Calendar** → check for **Archived** patient badge |
| Review credential expirations due this week | **HR & Compliance** → **Credential Tracker** |
| Check for unanswered Team Chat pings | **Team Chat** → **Conversations** |
| Monitor IVR queue — flag any stalled requests | **Inventory Management** → **IVR Tracking** |

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `⌘K` / `Ctrl+K` | Quick Jump — patient, visit, facility, page |
| `⌘/` / `Ctrl+/` | Help for the current page |
| `⌘S` / `Ctrl+S` | Save draft on any editable form |

## SLA targets to monitor

| Metric | Target | Where |
|---|---|---|
| Fax queue age | Zero faxes > 24 h | **More (Fax)** → **Fax Review Queue** → **SLA Breach Timer** column |
| Referral-to-schedule time | < 24 h from referral created | **Referral Intake** → kanban → **Ready for Assignment** |
| Unbilled claims | Cleared within 72 h of visit signature | **Billing** → **Claims** → filter **Status: Unbilled** |
| ERA posting | Posted within 24 h of receipt | **Billing** → **Payments (ERA)** |
| Credential expiry notices | Actioned same day | **HR & Compliance** → **Credential Tracker** |

## Weekly tasks

| Task | Where |
|---|---|
| Run the **Denial Reasons** report | **Billing** → **Reports Center** → **Denial Reasons** |
| Run the **AR Aging** report; flag 61–90+ buckets | **Billing** → **Reports Center** → **AR Aging** |
| Check **Referral Network Health** for drop-offs | **Oversight Cockpit** → **Referral Network Health** |
| Review **Clinician Workload Balancer** for overload | **Oversight Cockpit** → **Clinician Workload Balancer** |
| Audit inactive practices (no activity > 30 d) | **CRM** → **Practices** → filter **No activity 30d** |
| Verify inventory PAR levels are current | **Inventory Management** → **Main Inventory** |

## Monthly tasks

| Task | Where |
|---|---|
| Review **Financial Performance** KPIs vs. target | **Oversight Cockpit** → **Financial Performance** |
| Export **Productivity** and **Payer Mix** reports | **Billing** → **Reports Center** |
| Check **Documentation & Compliance** score | **Oversight Cockpit** → **Documentation & Compliance** |
| Archive or close non-admit referrals | **Referral Intake** → **Non-Admit** column → **Archive** |
| Validate facility user roster is current | **HR & Compliance** → **Facility Users** |

## Inviting and onboarding new users

1. Go to **HR & Compliance** → **New Employee Onboarding**.
2. Complete the three-step stepper: **Personal Info** → **Role & Assignment** → **Onboarding & Training**.
3. Assign one or more facilities in **Role & Assignment** (multi-facility selection is supported).
4. The employee receives an invitation email with a one-time setup link.
5. After setup, verify their permissions in **Administrator** → **Organization Role Config**.

<Warning>
The **Administrator → Organization Role Config** matrix controls what each role can see and do across all modules. Test a new role in the demo environment before applying it to production users.
</Warning>

## Facility switching

- The current facility context appears as a pill in the app header.
- Click the pill to open the facility selector; search by name or scroll.
- All module data (patients, referrals, calendar, billing) scopes to the selected facility.
- Practice admins with org-level access can toggle **All Patients → All Facilities** to view cross-facility patient lists without switching context.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Provider not appearing in Fleet Calendar | Provider not marked **On Duty** or facility mismatch | **HR & Compliance → Facility Users** — confirm facility assignment |
| Referral stuck in **Info Needed** | Missing demographic or insurance field | Open referral → **Details** tab → fill flagged field |
| Claim in **Needs Info** status | Missing modifier or diagnosis pointer | **Billing → Claims** → open claim → follow rule-engine flag |
| Credential expiry banner on Dashboard | Credential nearing expiry | **HR & Compliance → Credential Tracker** → upload renewal |
| Archived patient appeared in scheduling | Legacy appointment predating the archive fix | Cancel appointment; confirm patient is archived in **All Patients** |
