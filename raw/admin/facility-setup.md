---
id: admin-facility-setup
title: Set up a facility in your first week
module: admin
audience: [admin]
roles: [practice_admin, super_admin]
type: how-to
estimated_minutes: 10
last_reviewed: 2026-04-24
app_route: /facilities
related:
  - admin-index
  - admin-user-management
  - admin-billing-setup
  - referral-intake-setup
tags: [setup, facility, onboarding, SLA, superbill]
prerequisites:
  - admin-index
---

# Set up a facility in your first week

Complete these tasks during the first week after a new facility goes live so that referrals, billing, and scheduling work correctly from day one.

## Before you start

- You need the `practice_admin` or `super_admin` role.
- Locate your Supabase tenant credentials (sent by your Medipyxis implementation contact).
- Have the facility's main fax number, business hours, and NPI ready.

## Steps

### 1. Confirm the facility UUID

1. Open the **Organization Selector** in the top-left header and select the facility.
2. Look at the browser address bar — the URL reads `/facility/{uuid}/dashboard`. Copy the `uuid` segment.
3. Share this UUID with any integration partners or API consumers; it is the stable identifier for this facility across all Medipyxis APIs.

![Facilities list showing FACILITY, CONTACT, STATS, STATUS, and ACTIONS columns. The active/inactive badge in the STATUS column confirms a facility is live.](../assets/facilities/list.png)
*The **Facilities** list at `/facilities`. Confirm your facility shows **Active** in the STATUS column before proceeding.*

### 2. Set the fax number

1. Navigate to **Facilities** in the sidebar.
2. Click **Actions → Edit** next to your facility.
3. Enter the 10-digit fax number in the **Fax Number** field (no dashes or spaces required).
4. Click **Save**.

<Note>
The fax number entered here is the outbound caller ID shown to referring practices. Inbound faxes are routed via the More (Fax) module; this field does not change inbound routing.
</Note>

### 3. Verify your Supabase tenant

1. From the same facility edit panel, locate the **Supabase Tenant ID** field.
2. Paste the tenant identifier from your implementation credentials.
3. Click **Verify** — a green checkmark confirms the connection. A red error means the tenant string is malformed or the credentials have expired; contact support.

### 4. Set business hours

1. In the facility edit panel, expand **Business Hours**.
2. Toggle each day on or off and set **Open** and **Close** times in 30-minute increments.
3. Business hours affect the SLA breach timer displayed on the **Fax Review Queue** and the **Referral Intake** kanban.
4. Click **Save**.

### 5. Set intake SLAs

1. Navigate to **Referral Intake** settings (accessible from the **Referral Intake** module → **Settings** gear icon, or see the [Referral Intake Setup](../modules/referral-intake/setup.md) guide).
2. Set the **New Referral SLA** (hours from fax receipt to first touch) and the **Financial Clearance SLA** (hours from financial column entry to clearance decision).
3. These thresholds drive the red SLA Breach Timer shown on each referral card.

### 6. Set superbill defaults

1. Navigate to **Billing → Superbill Config**.
2. Under the **Templates** tab, select or create the default template for this facility.
3. Confirm the **Default Rendering Provider** dropdown is set to the correct NPI for this facility. This NPI populates CMS-1500 §24J automatically on every new claim.
4. See [Billing Setup](./billing-setup.md) for full Code Library and Fee Schedule configuration.

## Result

Your facility is Active, has a verified fax number and Supabase tenant, enforces business-hour SLAs on Referral Intake, and auto-populates a default rendering provider on new claims. Users can now be invited (see [User Management](./user-management.md)).

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Facility shows **Inactive** in the list | Not yet activated by Medipyxis support | Contact your implementation contact |
| Supabase **Verify** returns an error | Expired or incorrect tenant string | Re-copy from the credentials email; avoid trailing spaces |
| SLA timer never turns red | Business hours not saved, or SLA set to 0 | Re-check business hours and SLA fields |
| Default rendering provider blank on new claims | Field not set in Superbill Config | Complete Step 6 |
