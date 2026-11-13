---
id: admin-facility-setup
title: Set up a facility in your first week
module: admin
audience: [admin]
roles: [admin, superadmin]
type: how-to
estimated_minutes: 10
last_reviewed: 2026-11-11
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

Complete these tasks during the first week after a new facility goes live so that faxes, claims, and scheduling work correctly from day one.

## Before you start

- You can open **Facilities** in the sidebar. Administrators always can.
- Have the facility's fax number, NPI, and Tax ID ready.

## Steps

### 1. Find the facility's ID

1. If you work at more than one facility, open your profile menu (top right), click **Switch Facility**, and pick the facility.
2. Look at the browser address bar — the URL reads `/facility/{uuid}/dashboard`. The `uuid` part is the facility's ID. Medipyxis support may ask for it.

![Facilities list showing FACILITY, CONTACT, STATS, STATUS, and ACTIONS columns. The active/inactive badge in the STATUS column confirms a facility is live.](../assets/facilities/list.png)
_The Facilities list at `/facilities`. Confirm your facility shows Active in the STATUS column before proceeding._

### 2. Set the fax number

1. Navigate to **Facilities** in the sidebar.
2. Click the **Edit** button on your facility's row.
3. Enter the facility's number in the **Fax Number** field.
4. Click **Save Changes**.

This number does two jobs. Faxes sent from Medipyxis for this facility go out from it, so it must be a number set up for the facility's fax service; sending is refused while it is blank. Faxes received on that number are filed to this facility.

### 3. Enter the facility NPI, Tax ID, and legal name

1. In the facility form, enter the facility **NPI Code** and **Tax Number**.
2. When you enter a 10-digit NPI, Medipyxis looks it up in the federal NPPES registry and shows a **Found in federal NPPES registry** card. Click **Use this info** to fill the **Legal / Billing Name**, address and phone from the registry, or **Dismiss** to keep what you typed.
3. If the registry cannot confirm the NPI, saving stops with "We can't confirm this NPI is a real registered provider" and a **Save anyway** button. You can still save, but double-check the number.
4. Click **Save Changes**. The **Legal / Billing Name** is the name used on claims; if it is blank, claims use the **Facility Name**.

### 4. Load your prices

1. Click **Billing Operations** in the sidebar, then **Charge Master**.
2. Add your rates in **Insurance Charges** and **Self-Pay Charges**. A claim line with no rate is priced at $0.00 and the claim cannot be sent to Stedi.
3. See [Charge Master and the $0.00 claim guard](/modules/billing/charge-master-and-zero-dollar-guard/) and [Set up billing and the Stedi clearinghouse](/admin/billing-setup/).

## Result

Your facility is Active, has a fax number, an NPI, Tax ID and legal name, and has prices loaded. Users can now be invited (see [User Management](/admin/user-management/)).

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Facility is not in the list | It was deactivated | Open the **Deactivated Facilities** tab and click **Reactivate** on its row |
| NPPES cannot confirm the NPI | Number mistyped, or NPPES registry lag | Re-check the 10-digit NPI; you can still **Save anyway** if it is correct |
| Sending a fax fails with "Facility has no fax caller ID configured" | The facility's Fax Number is blank | Complete step 2 |
| "No price on file for CPT …" when sending a claim | No rate in the Charge Master for that code | Complete step 4 |
