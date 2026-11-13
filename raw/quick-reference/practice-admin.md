---
id: qr-practice-admin
title: Practice admin cheat sheet
module: getting-started
audience: [admin]
roles: [admin]
type: quickstart
estimated_minutes: 3
last_reviewed: 2026-11-11
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

| Task | Where |
|---|---|
| Review incoming faxes waiting for review (target: none older than 24 h) | **Fax Center** → **Fax Review Queue** (watch the **SLA** column and the "SLA Breached" summary) |
| Check today's schedule by provider | **Fleet Calendar** → Day view → provider swim lanes |
| Switch facility | Header → **Switch Facility** → search or pick a facility |

Use `⌘K` / `Ctrl+K` (Quick Jump) to go to any page or feature without touching the sidebar.

## Daily tasks

| Task | Where |
|---|---|
| Assign providers to new patients | **Referral Intake** → **Ready for Assignment** column → **Assign** |
| Review credential expirations due this week | **HR & Compliance** → **Credential Tracker** |
| Check for unanswered Team Chat messages | **Team Chat** → **Conversations** |
| Monitor IVRs — follow up on any still Pending | **Inventory Management** → **IVR Tracking** |

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `⌘K` / `Ctrl+K` | Quick Jump — search pages, features or actions |

## SLA targets to monitor

| Metric | Target | Where |
|---|---|---|
| Fax queue age | Zero faxes > 24 h | **Fax Center** → **Fax Review Queue** → **SLA** column |
| Referral-to-schedule time | < 24 h from referral created | **Referral Intake** → **Ready for Assignment** column |
| Unbilled encounters | Cleared within 72 h of visit signature | **Billing Operations** → **Work Queue** → **Ready** preset |
| ERA posting | Matched lines post automatically; match unmatched lines within 24 h | **ERA / EOB** page (`/era-eob`), linked from the Billing overview |
| Credential expiry notices | Actioned same day | **HR & Compliance** → **Credential Tracker** |

## Weekly tasks

| Task | Where |
|---|---|
| Run the **Claims** report | **Billing Operations** → **Reports Center** → **Claims Reports** |
| Run the **Account Receivable** report; flag aged balances | **Billing Operations** → **Reports Center** → **Account Receivable Reports** |
| Scan the **Heat Map** (patients vs. clinicians) | **Oversight Cockpit** → **Heat Map** → **Patients vs Employees** |
| Review practices that need attention | **CRM** → status filter (**Follow-up Due**, **Cold**) |
| Check PAR levels on conservative care products | **Inventory Management** → **Product Catalog** (red **Par Level Reached** icon) |

## Monthly tasks

| Task | Where |
|---|---|
| Review billing geography (**Billed by zip**) | **Oversight Cockpit** → **Heat Map** → **Billed by zip** |
| Export billing reports (Claims, Insurance Payment, Charges) | **Billing Operations** → **Reports Center** |
| Clear out patients who will not be admitted | **Referral Intake** → **Non-Admit** column → **Archive patient** on the card |
| Validate the facility user roster | **HR & Compliance** → **Facility Users** |

## Inviting and onboarding new users

1. Go to **HR & Compliance** → **New Employee Onboarding**. The **Create New User** form is a single page.
2. Choose the role under **Role & Assignment**, and pick one or more facilities under **Facility Assignment**.
3. Click **Create User**. See [Add a new employee](/modules/hr-compliance/new-employee/).
4. Check which features the role can open in **Administrator** → **Organization Role Config**.

Organization Role Config turns features on or off for each role in your organization, so a change there applies to everyone with that role. It does not assign roles to people.

## Facility switching

- Click **Switch Facility** in the app header to open the facility list; search by name or scroll.
- Pages show data for the facility you have selected.
- Admins who can see patients across the organization can filter **All Patients** by facility, including **All Facilities**, without switching.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Provider not appearing in Fleet Calendar | Not assigned to this facility | **HR & Compliance → Facility Users** — confirm the provider is listed for this facility |
| Referral stuck in **Info Needed** | Missing demographic or insurance details | Open the card → **Details** tab → complete the missing information, then drag the card on |
| Claim in **Needs Info** status | A required field is missing or a validation error must be resolved | **Billing Operations → Claims** → open the claim and fix the field |
| Credential nearing expiry | Renewal not yet recorded | **HR & Compliance → Credential Tracker** |
| An archived patient still has an appointment | It was booked before the patient was archived (archived patients cannot be booked) | Cancel the appointment |
