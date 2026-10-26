---
id: admin-practice-onboarding
title: Onboard a practice with the Practice Onboarding importer
module: admin
audience: [admin]
roles: [admin]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-10-24
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

Bring an incoming practice's patients and chart data into Medipyxis with the **Practice Onboarding** importer — a guided, 9-step CSV pipeline in the Administrator area (`/administrator/practice-onboarding`). Each step is an **upload → map → confirm → import** flow, and steps unlock in dependency order.

> **Need the exact CSV columns and validation rules?** See [Practice Data Import CSV templates and column reference](/admin/practice-onboarding-csv-reference/) for the complete column-by-column breakdown of all 9 templates, including the `prior_ehr_*` duplicate-handling fields and the 8 `consent_*` patient consent attestation columns.

## Before you start

- You need the `admin` role and an active facility selected.
- Export the incoming practice's data as CSV files — one file per domain (patients, insurance, medications, allergies, comorbidities, emergency contacts, wounds, and visit history). Each step provides a downloadable CSV template on its upload screen.
- Format all dates as `YYYY-MM-DD` (recommended) so regional spreadsheet settings never mix `MM/DD/YYYY` and `DD/MM/YYYY` in the same file. Calendar rollover dates such as `2026-02-31` are rejected before write.

## The 9 import steps

Steps unlock as their prerequisites complete. **Patients** is always first because every downstream step links records to the patients you imported via `patient_uid`.

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

## Steps

1. In the sidebar, go to **Administrator → Practice Onboarding** (`/administrator/practice-onboarding`).
2. Review the **Overall Progress** bar and click **Start** (or **Import More**) on **1. Patients**.
3. **Upload** — Download `patient_import_template.csv` if needed, then drag-and-drop or select your CSV file.
   - To carry over prior EHR chart numbers and prevent duplicate charts on re-import, fill in `prior_ehr_system` and `prior_ehr_mrn` (and use `duplicate_decision` with an existing `patient_uid` or `NEW` if two patients share the same name and date of birth).
   - To attest that your practice already holds its **own** signed treatment and billing consent form for a patient, set `consent_on_file` to `yes` and optionally fill in `consent_signed_on`, `consent_signer_capacity` (`patient`, `poa`, or `surrogate`), `consent_signer_name`, `consent_witnessed`, `consent_location`, `consent_photo`, and `consent_npp_acknowledged`. If `consent_on_file` is blank or `no`, no consent is recorded and the other 7 `consent_*` columns are ignored. Never use a nursing facility's admission paperwork for `consent_on_file = yes`.
4. **Map Columns** — Match each column from your CSV to the corresponding Medipyxis field. Columns that match the template header names are mapped automatically.
5. **Confirm** — Inspect the parsed rows, check the blue date-interpretation preflight banner, and fix any validation errors inline (or skip invalid rows) before importing.
6. **Results & `patient_uid` download** — Review the counts of **Imported**, **Skipped (existing)**, **Warnings (`Needs Follow-Up`)**, and **Errors**. Click **Download Results CSV** to save `patients_import_results.csv` containing each patient's generated `patient_uid`.
   - You can also re-download `patients_import_results.csv` (and Step 7's `wounds_import_results.csv`) anytime later directly from the completed **Patients** or **Wounds** step card on `/administrator/practice-onboarding` (**Download results CSV**), even after clicking **Done** or switching devices.
7. Click **Back to Overview** (or **Done**) and repeat the flow for steps 2–9 as each step unlocks. Re-uploading a file is idempotent: existing records are counted as **Skipped** without creating duplicates.

<Note type="tip">
Start with **Patients** and import it cleanly before the dependent steps — every other record type links to `patient_uid`. Import **Step 7 — Wounds** before **Step 8 — Documents & Historical Wound Photos** and **Step 9 — Visit History** so wound photos, wound-linked documents, and historical visits can attach to `wound_uid` (or `wound_id`).
</Note>

## Result

The practice's patients, coverage, clinical history, wounds, and prior visits are in Medipyxis, ready for scheduling and documentation. Prior EHR documents and historical wound photos imported in Step 8 are stored in private buckets (`patient-documents` and `wound-images`) and tagged as historical records (`prior_ehr_record = true`), and imported wounds (Step 7) and visits (Step 9) are read-only history (`wound_import_history` and `visit_import_history`): they can be seen on the patient's record for clinical context but cannot be edited, signed, or billed. Import batches are tracked per facility so you can review what was loaded.

- **Column-by-column specification:** [Practice Data Import CSV templates and column reference](/admin/practice-onboarding-csv-reference/)
- **See it on screen:** [How do I move my practice's patient data into Medipyxis?](/whats-new/practice-data-import/) (a short silent video with a text description)

## Related

Auto-rendered from `related:` in frontmatter.
