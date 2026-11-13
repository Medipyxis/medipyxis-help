---
id: admin-practice-onboarding
title: Onboard a practice with the Practice Onboarding importer
module: admin
audience: [admin]
roles: [admin]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-11-11
app_route: /administrator/practice-onboarding
related:
  - admin-practice-onboarding-csv-reference
  - admin-data-import-export
  - admin-facility-setup
tags: [onboarding, import, csv, migration, patients, consent, setup]
prerequisites:
  - admin-facility-setup
---

# Onboard a practice with the Practice Onboarding importer

Bring an incoming practice's patients and chart data into Medipyxis with the **Practice Onboarding** importer — a guided, 9-step CSV import in the Administrator area (`/administrator/practice-onboarding`). Each step runs **Upload → Map Columns → Confirm → Import → Results**, and steps unlock in dependency order.

**Need the exact CSV columns and validation rules?** See [Practice Data Import CSV templates and column reference](/admin/practice-onboarding-csv-reference/) for the column-by-column breakdown of all 9 templates, including the `prior_ehr_*` duplicate-handling columns and the 8 `consent_*` patient consent columns.

## Before you start

- You need the admin role (the **Practice Onboarding** card on the Administrator cockpit is shown to admins), with the facility you are importing into selected.
- Export the incoming practice's data as CSV files — one file per step. Each step's upload screen has a download button for its CSV template.
- Format all dates as `YYYY-MM-DD` (recommended) so regional spreadsheet settings never mix `MM/DD/YYYY` and `DD/MM/YYYY` in the same file. Dates that do not exist, such as `2026-02-31`, are rejected.

## The 9 import steps

Steps unlock as their prerequisites complete. **Patients** is always first because every later step links its rows to the patients you imported with `patient_uid`.

| Step | Imports | Unlocks after | Produces ID |
|---|---|---|---|
| 1 | **Patients** (`patient_import_template.csv`) | — (start here) | `patient_uid` |
| 2 | **Insurance** (`insurance_import_template.csv`) | Patients | — |
| 3 | **Medications** (`medications_import_template.csv`) | Patients | — |
| 4 | **Allergies** (`allergies_import_template.csv`) | Patients | — |
| 5 | **Comorbidities** (`comorbidities_import_template.csv`) | Patients | — |
| 6 | **Emergency Contacts** (`contacts_import_template.csv`) | Patients | — |
| 7 | **Wounds** (`wounds_import_template.csv` — read-only history) | Patients | `wound_uid` |
| 8 | **Documents & Historical Wound Photos** (`documents_import_template.csv`) | Patients (and Step 7 Wounds when linking `wound_uid` / `wound_id`) | — |
| 9 | **Visit History** (`visit_history_import_template.csv` — read-only history) | Wounds | — |

## Import a step

1. Click **Administrator** in the sidebar, then the **Practice Onboarding** card. A bar shows how many of the 9 steps are completed.
2. Click the **Patients** step card to open it. Locked steps show **Locked** and cannot be opened yet.
3. **Upload** — Click **Download Patients Template** if you need the template, then drag-and-drop or select your CSV file.
  - To carry over prior EHR chart numbers and prevent duplicate charts on re-import, fill in `prior_ehr_system` and `prior_ehr_mrn` (and use `duplicate_decision` with an existing `patient_uid` or `NEW` if two patients share the same name and date of birth).
  - To attest that your practice already holds its **own** signed treatment and billing consent form for a patient, set `consent_on_file` to `yes` and optionally fill in `consent_signed_on`, `consent_signer_capacity` (`patient`, `poa`, or `surrogate`), `consent_signer_name`, `consent_witnessed`, `consent_location`, `consent_photo`, and `consent_npp_acknowledged`. If `consent_on_file` is blank or `no`, no consent is recorded. Never use a nursing facility's admission paperwork for `consent_on_file = yes`.

4. **Map Columns** — Match each column in your CSV to a Medipyxis field. Columns are matched automatically first; adjust any that are wrong.
5. **Confirm** — Check the parsed rows and the blue banner that shows how each date column was read. Fix errors inline, or skip rows, before importing.
6. **Results** — Review the counts: **Imported**, **Errors**, **Skipped (Reused)** (rows that matched an existing record and reused it) and **Warnings**, with a **Needs Follow-Up** list. For Patients, click **Download Results CSV** to save `patients_import_results.csv` with each patient's `patient_uid`.
  - You can download the results again later from the completed **Patients** or **Wounds** step card (**Download results CSV**), even after clicking **Done** or switching devices. Imports run before this download was added have no saved results.

7. Click **Done** and repeat for steps 2–9 as each one unlocks. Uploading the same file again does not create duplicates: rows that match existing records are reused and counted as skipped.

Start with **Patients** and import it cleanly before the other steps — every other record type links to `patient_uid`. Import **Step 7 — Wounds** before **Step 8 — Documents & Historical Wound Photos** and **Step 9 — Visit History** so wound photos, wound-linked documents, and historical visits can attach to `wound_uid` (or `wound_id`).

You can also import a whole vendor export (all tables at once) from the **Import a vendor export (all tables at once)** section at the top of the page.

## Result

The practice's patients, coverage, clinical history, wounds, documents and prior visits are in Medipyxis, ready for scheduling and documentation. Documents and historical wound photos are stored privately with the patient. Imported wounds and visits are kept as history, separate from visits documented in Medipyxis, and show on the patient's Wound Cockpit and timeline. Each import is recorded per facility, so each step card shows what was loaded.

**Column-by-column specification:** [Practice Data Import CSV templates and column reference](/admin/practice-onboarding-csv-reference/)

**See it on screen:** [How do I move my practice's patient data into Medipyxis?](/whats-new/practice-data-import/) (a short silent video with a text description)

## Related
