---
id: admin-facility-setup
title: Set up a facility in your first week
module: admin
audience: [admin]
roles: [admin, superadmin]
type: how-to
estimated_minutes: 10
last_reviewed: 2026-06-29
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

- You need the `admin` or `superadmin` role.
- Have the facility's main fax number, business hours, NPI, and Tax ID ready.

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

### 3. Enter the facility NPI, Tax ID, and legal name

1. In the facility edit panel, enter the facility **NPI** and **Tax ID**. Both are format-validated as you type.
2. When you enter a valid 10-digit NPI, Medipyxis performs an **NPPES lookup** and offers to auto-fill the facility's **legal name**, address, and taxonomy from the CMS registry. Accept or decline the suggested values.
3. If NPPES cannot confirm the NPI, a **Save anyway?** prompt appears — you can still save, but double-check the number.
4. Click **Save**. The facility **legal name** is what appears on payer-facing claim output.

### 4. Set business hours

1. In the facility edit panel, expand **Business Hours**.
2. Toggle each day on or off and set **Open** and **Close** times in 30-minute increments.
3. Business hours affect the SLA breach timer displayed on the **Fax Review Queue** and the **Referral Intake** kanban.
4. Click **Save**.

### 5. Set intake SLAs

1. Navigate to **Referral Intake** settings (accessible from the **Referral Intake** module → **Settings** gear icon, or see the [Referral Intake Setup](../modules/referral-intake/setup.md) guide).
2. Set the **New Referral SLA** (hours from fax receipt to first touch) and the **Financial Clearance SLA** (hours from financial column entry to clearance decision).
3. These thresholds drive the red SLA Breach Timer shown on each referral card.

### 6. Set billing defaults

1. Navigate to **Billing → Charge Master**.
2. Confirm the facility's charge rates and, under the **Templates** tab, the default superbill template for this facility.
3. Confirm the correct **Default Rendering Provider** NPI for this facility so it populates CMS-1500 §24J automatically on every new claim.
4. See [Billing Setup](./billing-setup.md) for full Charge Master and clearinghouse configuration.

## Result

Your facility is Active, has a fax number, a validated NPI/Tax ID and legal name, enforces business-hour SLAs on Referral Intake, and auto-populates a default rendering provider on new claims. Users can now be invited (see [User Management](./user-management.md)).

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Facility shows **Inactive** in the list | Not yet activated by Medipyxis support | Contact your implementation contact |
| NPPES cannot confirm the NPI | Number mistyped, or NPPES registry lag | Re-check the 10-digit NPI; you can still **Save anyway** if it is correct |
| SLA timer never turns red | Business hours not saved, or SLA set to 0 | Re-check business hours and SLA fields |
| Default rendering provider blank on new claims | Field not set in Charge Master / facility config | Complete Step 6 |
