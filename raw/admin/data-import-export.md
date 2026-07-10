---
id: admin-data-import-export
title: Import and export data
module: admin
audience: [admin]
roles: [admin, superadmin]
type: how-to
estimated_minutes: 10
last_reviewed: 2026-06-29
app_route: /facility/{facility_uuid}/hr
related:
  - admin-index
  - admin-practice-onboarding
  - admin-user-management
  - admin-facility-setup
tags: [import, export, bulk-upload, ZusHealth, Practice Onboarding, referrals, claims]
prerequisites:
  - admin-facility-setup
---

# Import and export data

Bring staff and patient records in via bulk upload and the Practice Onboarding pipeline, review ZusHealth patient data in the chart, and export referral and claim records.

## Before you start

- You need the `admin` or `superadmin` role.
- For a full practice migration (patients, insurance, medications, wounds, visit history), use the **Practice Onboarding** pipeline described below.

## Bulk Employee Upload

Use this workflow when onboarding many employees at once, or when migrating users from another system.

1. Navigate to **HR & Compliance → Bulk Employee Upload**.
2. Click **Download CSV Template** to get the current schema.
3. Populate the template. Recognized columns include:

| Column | Required | Notes |
|---|---|---|
| `first name` | Yes | |
| `last name` | Yes | |
| `email` | Yes | Must be unique per organization |
| `role` | Yes | Must match a role in Organization Role Config |
| `phone` | No | 10-digit, no formatting |
| `facility assignment` | No | Facility ID; if blank, user is assigned to the uploading facility |
| `provider_first_name`, `provider_last_name`, `provider_print_name`, `provider_initials` | No | Provider identity fields, used for clinical roles |

4. Upload the completed CSV. The system runs a validation pass and displays errors (duplicate email, unknown role, malformed value) in a preview.
5. Fix any flagged rows, re-upload, and confirm.

<Note>
Rows that pass validation are imported even if others fail. You can upload a corrected partial file for the failed rows after fixing them.
</Note>

## Practice Onboarding (patient & chart import)

To migrate an entire practice's patients and clinical history, use the **Practice Onboarding** admin hub.

1. Navigate to **`/administrator` → Practice Onboarding**.
2. Work through the guided, step-dependent import pipeline: **Patients** first, then **Insurance, Medications, Allergies, Comorbidities, Emergency Contacts, Documents, and Wounds**, and finally **Visit History**.
3. Each step has its own import module; later steps unlock once their prerequisite (usually Patients) has imported successfully.

<Note>
Practice Onboarding is the supported path for bulk patient/chart migration (including from other EMRs). Imported patients are flagged so their first visit shows a migration-context banner in the Visit Wizard.
</Note>

## ZusHealth patient data

Medipyxis integrates with ZusHealth to bring longitudinal patient records (medications, allergies, labs, prior surgeries, vaccinations, conditions) into the patient chart, and to contribute finalized visits back to the patient's external record (TEFCA).

- **Pulling data in:** ZusHealth data is retrieved from the **patient chart / pre-charting** using the **Pull** button — not from an admin settings page. Imported items show a **last-sync pill** and per-row **provenance badges** indicating their source and date, and appear read-only in the chart.
- **Contributing data out:** when a visit is finalized, Medipyxis automatically contributes it back to the patient's external health record via ZusHealth/TEFCA — no extra step for the clinician.

<Note>
ZusHealth sync is subject to the data-sharing agreement between your organization and ZusHealth. Medipyxis does not modify or delete records sourced from ZusHealth.
</Note>

## Export referrals

1. Navigate to **Referral Intake**.
2. Click the **Export** button.
3. Select date range, status filter, and format.
4. Download the file. PHI columns are included only if your role has patient-level access.

## Export claims and payments

1. Navigate to **Billing**.
2. Apply any filters (date range, payer, status) in the Claims or Work Queue view.
3. Use the **Export CSV** action to download the filtered set.
4. For remittance detail, export from the **Payments (ERA)** tab.

## Result

Your staff and patients are imported, ZusHealth data flows into the chart with visits contributed back automatically, and your billing and referral teams can self-serve CSV exports.
