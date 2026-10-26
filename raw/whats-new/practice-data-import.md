---
id: whats-new-practice-data-import
title: How do I move my practice's patient data into Medipyxis?
module: admin
audience: [admin]
type: whats-new
last_reviewed: 2026-10-24
tags: [whats-new, video, import, onboarding, csv, migration]
related:
  - whats-new
  - admin-practice-onboarding-csv-reference
  - admin-practice-onboarding
  - admin-data-import-export
---

# How do I move my practice's patient data into Medipyxis?

Practice Onboarding imports your patient records from your old EHR system, one spreadsheet (CSV file) at a time: patients first, then insurance, medications, allergies, conditions, emergency contacts, wounds and past visits. You see every row before it is saved, rows with problems are left out with a reason, and a results file tells you exactly what was imported.

The video has no sound, and a text description is below it. Every patient in it is a made-up test patient; staff names and emails are blurred.

## How does the import work, step by step?

*Practice Onboarding · Available now*

Video (no sound, 76 seconds): [practice-data-import.mp4](https://help.medipyxis.com/assets/videos/whats-new/practice-data-import.mp4)

Each step has its own CSV template. Upload your file, check that its columns are matched to the right Medipyxis fields, then review every row. Rows with a problem are marked in red, and you can fix them on screen or skip them. After the import, a summary shows what was imported, what was skipped and why, and a results CSV gives each new patient its Medipyxis ID.

**Why it matters:** A new practice starts with its patient list, active wounds and history already in place, without retyping them. One bad row never blocks the rest, and nothing is dropped without a reason you can see.

**Text description of this video**

- 0:00 The Practice Onboarding page (Administrator, then Practice Onboarding) lists nine import steps. Step 1, Patients, is open to start; the others are locked until patients are imported. Visit History waits for Wounds.
- 0:12 Step 1, Patients, is opened. A panel lists the providers at this facility and their Medipyxis emails, blurred in this video. Below it is the upload area.
- 0:19 Download Patients Template is clicked and the template CSV downloads. It has one column per field, with an example row.
- 0:22 A test CSV with six made-up patients is uploaded. Map Columns shows every column in the file matched to a Medipyxis field automatically: 10 of 10. Required fields are starred. Confirm Mapping is clicked.
- 0:36 Review Patients Data shows 3 valid rows and 3 errors. Row 4 has a birth date that does not exist, row 5 has no last name and row 6 has an email address that is not valid. A note explains how dates were read (month first) and asks you to check them.
- 0:47 Skip all 3 error rows is clicked. The three rows are greyed out and marked Skipped. The button now reads Import 3 Patients Records.
- 0:51 The import runs.
- 0:54 Import Complete: 3 rows sent, 2 imported, 1 skipped, 2 warnings. The skipped row was the same patient listed twice (same name and date of birth), so it was not created a second time. Needs Follow-Up lists the two new patients that had no provider email: they were imported without a provider and need one assigned.
- 1:04 Download Results CSV is clicked. The file is your original rows plus a patient_uid column with each patient's new Medipyxis ID, which the later steps use.
- 1:07 Done returns to the step list. Patients is marked Completed (2 imported, 1 skipped) with a Download results CSV link, so the file can be downloaded again later. Steps 2 to 8 are now open. Documents shows Not available yet.

## What can I import, and in what order?

For the complete column-by-column specification, accepted values, and default rules for every template below, see [Practice Data Import CSV templates and column reference](/admin/practice-onboarding-csv-reference/).

1. **Patients** (`patient_import_template.csv`): Names, dates of birth (`YYYY-MM-DD`), contact details and address, assigned provider (`provider_email`), optional prior EHR IDs (`prior_ehr_system`, `prior_ehr_mrn`, `duplicate_decision`), and optional patient consent attestation columns (`consent_on_file` and 7 supporting `consent_*` columns).
2. **Insurance**: Payer, policy and group numbers.
3. **Medications**: Current medications with dose, frequency and prescriber.
4. **Allergies**: Known allergies with severity and reaction.
5. **Comorbidities**: Medical history and conditions, with ICD-10 codes.
6. **Emergency contacts**: Name, relationship and phone number.
7. **Wounds**: Historical wounds with location, type, measurements and staging (`wounds_import_results.csv` provides `wound_uid`).
8. **Documents & Historical Wound Photos**: Clinical PDFs/TIFFs and historical wound photos, linked to `patient_uid` and optionally `wound_uid` / `wound_id`.
9. **Visit history**: Past visits, linked to the patient and wounds (`wound_uid` / `wound_id`). Comes in as read-only history.

## What is not imported?

- **Documents and wound photos are not migrated.** Scanned referrals, consent forms, other attachments and wound photos stay in your old system. Keep access to it, or an export of it, for those files.
- **Imported visits are read-only history.** You can see past visits on the patient's record, but they cannot be edited, signed or billed in Medipyxis. New visits are documented in Medipyxis as usual.

## What does the results file look like?

| first_name | last_name | date_of_birth | notes | patient_uid |
|---|---|---|---|---|
| Ada | Testimport | 1948-02-11 | Synthetic test patient | 65c47281… |
| Bram | Testimport | 03/22/1951 | Synthetic test patient | 5edb01d0… |
| Cora | Testimport | 1950-13-45 | Bad birth date on purpose | (blank) |
| Dex |  | 1949-07-04 | Missing last name on purpose | (blank) |
| Elle | Testimport | 1953-09-30 | Bad email on purpose | (blank) |
| Ada | Testimport | 1948-02-11 | Same patient listed twice | 65c47281… |

## Questions and answers about importing practice data into Medipyxis

### What can I import into Medipyxis from my old EHR?

Patients, insurance, medications, allergies, comorbidities, emergency contacts, wounds and past visit history, each from its own CSV file. Patients go first, because every other step links its rows to the patients created in step 1. Visit history goes after wounds, because past visits link to the imported wounds.

### What happens to rows with errors?

Before anything is saved, every row is checked. A row with a missing required field, a date that does not exist or an email that is not valid is marked in red with the reason. You can correct it on screen, or skip it and import the rest. Skipped rows are counted in the summary and stay in the results file without a Medipyxis ID, so you can fix them in your spreadsheet and import them later.

### Will importing the same patient twice create a duplicate?

No. A patient with the same first name, last name and date of birth as an existing patient at the facility is not created again; the row is counted as skipped and the results file gives it the existing patient's ID. This also makes it safe to re-run an import.

### What is the results CSV for?

It is your file with one column added: each patient's new Medipyxis ID (patient_uid). The insurance, medication, allergy, condition, contact and wound files use that ID to attach their rows to the right patient. The Wounds step gives the same kind of file with wound IDs for the visit history import. The latest results file can be downloaded again from the step's card at any time.

### What if a patient has no provider in the file?

The patient is still imported, without a provider, and listed under Needs Follow-Up so you can assign one. To assign providers during the import, put each provider's Medipyxis email in the provider_email column.

### Are documents and wound photos imported?

No. Documents (such as scanned referrals and consent forms) and wound photos are not migrated. The Documents step shows Not available yet. Keep access to your old system, or an export of it, for those files, and attach new documents and photos in Medipyxis from here on.

### Can I edit or bill imported visits?

No. Imported visits come in as read-only history: you can see them on the patient's record, but they are not Medipyxis visits, so they cannot be edited, signed or billed. New visits are documented in Medipyxis as usual.

### Where can I see every CSV column and how patient consent attestation works?

See [Practice Data Import CSV templates and column reference](/admin/practice-onboarding-csv-reference/) for the complete column-by-column breakdown of all 9 templates. In Step 1 (`patient_import_template.csv`), the 8 optional `consent_*` columns gate on `consent_on_file`: when blank or `no`, no consent is recorded and the other 7 columns are ignored; when `yes`, Medipyxis records an `external_attested` treatment and billing consent under the importing admin's account. Only attest `consent_on_file = yes` when your practice holds its own signed consent form for that patient — never use a nursing facility's admission paperwork.

### Who can run the import?

An organization administrator, from Administrator, then Practice Onboarding. Data is imported into the facility you are working in.
