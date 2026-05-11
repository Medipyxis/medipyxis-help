---
id: admin-data-import-export
title: Import and export data
module: admin
audience: [admin]
roles: [practice_admin, super_admin]
type: how-to
estimated_minutes: 10
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/hr
related:
  - admin-index
  - admin-user-management
  - admin-facility-setup
tags: [import, export, bulk-upload, ZusHealth, API, referrals, claims]
prerequisites:
  - admin-facility-setup
updated_for_ticket: MED-818
---

# Import and export data

Bring staff records in via bulk CSV, sync patient data from ZusHealth, export referral and claim records, and issue API keys for partner integrations.

## Before you start

- You need `practice_admin` or `super_admin` role.
- For ZusHealth sync, your ZusHealth organization ID is required (provided in the ZusHealth admin console).
- For API key issuance, confirm the partner's technical contact and intended use case before generating a key.

## Bulk Employee Upload

Use this workflow when onboarding 20 or more employees, or when migrating users from another system.

1. Navigate to **HR & Compliance → Bulk Employee Upload**.
2. Click **Download CSV Template** to get the current schema.
3. Populate the template. Required columns:

| Column | Required | Notes |
|---|---|---|
| `first_name` | Yes | |
| `last_name` | Yes | |
| `email` | Yes | Must be unique per organization |
| `role` | Yes | Must match a role name in Organization Role Config exactly |
| `assigned_clinician_id` | No | Required if role is `bd_rep` |
| `phone` | No | 10-digit, no formatting |
| `facility_uuid` | No | If blank, user is assigned to the uploading facility |

4. Upload the completed CSV. The system runs a validation pass and displays errors (duplicate email, unknown role name, malformed UUID) in a preview table.
5. Fix any flagged rows, re-upload, and click **Confirm Upload**.
6. Users receive invite emails within five minutes.

<Note>
Rows that pass validation are imported even if others fail. You can upload a corrected partial file for the failed rows after fixing them.
</Note>

## ZusHealth patient data sync

Medipyxis integrates with ZusHealth to pull longitudinal patient health records (medication history, prior diagnoses, prior facility encounters) into the patient chart.

This integration was implemented per tickets MED-720 and MED-818.

1. Navigate to **HR & Compliance → Organization Security Settings → Integrations**.
2. Locate the **ZusHealth** tile and click **Configure**.
3. Enter your **ZusHealth Organization ID**.
4. Toggle **Auto-Sync on Patient Create** to on if you want ZusHealth data pulled automatically when a new patient record is created via Referral Intake.
5. Click **Save**.

Manual sync: Open any patient record → **Documents** tab → **Sync ZusHealth** button. The sync pulls the latest records from ZusHealth's FHIR endpoint.

<Note>
ZusHealth sync is subject to the data sharing agreement between your organization and ZusHealth. Medipyxis does not modify or delete records sourced from ZusHealth; they appear as read-only in the patient chart.
</Note>

## Export referrals

1. Navigate to **Referral Intake**.
2. Click the **Export** button (top-right of the kanban or list view).
3. Select date range, status filter, and format (`CSV` or `XLSX`).
4. Click **Download**. The file contains all non-PHI referral metadata (referral ID, status, payer, dates). PHI columns are included only if your role has patient-level access.

## Export claims

1. Navigate to **Billing → Claims**.
2. Apply any filters (date range, payer, status).
3. Click **Export CSV**.
4. The export includes claim ID, DOS, CPT codes, charges, payments, and current status. ERA remittance detail is not included — use the Payments tab for ERA exports.

## API keys for partner integrations

Medipyxis exposes a REST API for EMR bridges, analytics platforms, and referral management tools.

1. Navigate to **HR & Compliance → Organization Security Settings → API Keys**.
2. Click **Generate New Key**.
3. Name the key with the partner and use case (e.g., `athenahealth-referral-bridge`).
4. Set an **Expiry** (maximum 365 days; keys must be manually rotated).
5. Click **Generate**. Copy the key immediately — it is shown only once.
6. Share the key with the partner's technical contact via a secure channel (not Team Chat or email).

<Warning>
API keys grant access at the permission level of the role assigned to them. Use the most restrictive role that satisfies the integration's needs. Revoke keys immediately if a partner relationship ends.
</Warning>

## Result

Your staff are imported, ZusHealth sync is active, and your billing and referral teams can self-serve CSV exports. Partner integrations have scoped API keys with defined expiry dates.
