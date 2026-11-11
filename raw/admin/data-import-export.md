---
id: admin-data-import-export
title: Import and export data
module: admin
audience: [admin]
roles: [admin, superadmin]
type: how-to
estimated_minutes: 10
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/hr
related:
  - admin-index
  - admin-practice-onboarding
  - admin-practice-onboarding-csv-reference
  - admin-user-management
  - admin-facility-setup
tags: [import, export, bulk-upload, ZusHealth, Practice Onboarding, referrals, claims]
prerequisites:
  - admin-facility-setup
---

# Import and export data

Bring patient records in with the Practice Onboarding importer, see ZusHealth records in the patient chart, and export billing data.

## Before you start

- Practice Onboarding is on the **Administrator** cockpit. Its card is shown to admins.
- For a full practice migration (patients, insurance, medications, wounds, visit history), use **Practice Onboarding**, described below.

## Staff: Bulk Employee Upload is turned off

The **Bulk Employee Upload** tile on the HR & Compliance hub opens a message that bulk upload is temporarily disabled. Add staff one at a time with **New Employee Onboarding** — see [Invite users and manage facility access](/admin/user-management/).

## Practice Onboarding (patient and chart import)

To migrate a practice's patients and clinical history, use the **Practice Onboarding** importer.

1. Click **Administrator** in the sidebar, then the **Practice Onboarding** card.
2. Work through the nine steps in order: **Patients** first; then **Insurance**, **Medications**, **Allergies**, **Comorbidities**, **Emergency Contacts**, **Wounds**, and **Documents & Historical Wound Photos**; and finally **Visit History**.
3. A step stays locked until the step it depends on is complete: most steps need **Patients**, and **Visit History** needs **Wounds**.

A patient imported as a transfer from another EHR shows an "Established Patient — Transferring from …" banner on their first visit in Medipyxis. See [Onboard a practice with the Practice Onboarding importer](/admin/practice-onboarding/) for the full walkthrough.

## ZusHealth patient data

Medipyxis connects to ZusHealth to bring outside patient records (allergies, medications, lab results, surgeries, vaccinations and conditions) into the patient chart, and to send finished visits back.

- **Pulling data in:** open the patient's chart, or Pre-Charting for a visit, and click **Pull from Zus Health**. It is not on an admin settings page. A last-sync pill shows how current the data is, and rows show a **Zus** or **Manual** source badge.
- **Sending visits out:** when a visit is finalized with **Sign & Lock**, Medipyxis sends it to ZusHealth automatically — no extra step for the clinician. This happens only for patients linked to ZusHealth, at facilities connected to ZusHealth.

Review imported records before relying on them clinically. See [Sync patient history with ZusHealth (TEFCA)](/modules/patient-management/zus-tefca/).

## Export billing data

- **Work Queue:** in **Billing Operations → Work Queue**, apply your filters and click **Export CSV** to download the filtered rows.
- **Claims:** on the **Claims** tab, select claims and click **Export PDF** or **Export JSON**. Exporting marks those claims **Exported**; it does not send them to the payer.
- **Denials:** on the **Denials** tab, **Export CSV** downloads the filtered denials.
- **ERAs:** on the **Payments** tab, use the download button on an ERA row (**Download ERA as PDF**).

Referral Intake has no export.

## Result

Your patients are imported, ZusHealth data reaches the chart with finished visits sent back automatically, and your billing team can download what it needs.
