---
id: admin-practice-onboarding-csv-reference
title: Practice Data Import CSV templates and column reference
module: admin
audience: [admin]
roles: [admin]
type: reference
estimated_minutes: 15
last_reviewed: 2026-10-24
app_route: /administrator/practice-onboarding
related:
  - admin-practice-onboarding
  - admin-data-import-export
  - admin-facility-setup
tags: [onboarding, import, csv, migration, patients, consent, insurance, wounds, visit-history]
prerequisites:
  - admin-practice-onboarding
---

# Practice Data Import CSV templates and column reference

Use this column-by-column reference when preparing spreadsheets for the **Practice Onboarding** importer at `/administrator/practice-onboarding` (**Practice Onboarding** in the Administrator sidebar). Every column name, required flag, accepted value, validation rule, and fallback default below matches the live importer and downloadable CSV templates.

For the step-by-step upload walkthrough and silent video overview, see:
- [Onboard a practice with the Practice Onboarding importer](/admin/practice-onboarding/)
- [How do I move my practice's patient data into Medipyxis? (What's new video guide)](/whats-new/practice-data-import/)

## Templates overview

Download the latest template directly from each step's **Upload** screen on `/administrator/practice-onboarding`. Templates include a UTF-8 byte-order mark (BOM) and a leading `sep=,` hint line so Microsoft Excel opens them cleanly; the importer strips `sep=,` automatically when you upload the file back.

| Step | Module | Template file name | Prerequisite | Produces ID column | Status |
|---|---|---|---|---|---|
| 1 | **Patients** | `patient_import_template.csv` | — | `patient_uid` (`patients_import_results.csv`) | Active |
| 2 | **Insurance** | `insurance_import_template.csv` | Step 1 (`patient_uid`) | — | Active |
| 3 | **Medications** | `medications_import_template.csv` | Step 1 (`patient_uid`) | — | Active |
| 4 | **Allergies** | `allergies_import_template.csv` | Step 1 (`patient_uid`) | — | Active |
| 5 | **Comorbidities** | `comorbidities_import_template.csv` | Step 1 (`patient_uid`) | — | Active |
| 6 | **Emergency Contacts** | `contacts_import_template.csv` | Step 1 (`patient_uid`) | — | Active |
| 7 | **Wounds** (read-only history) | `wounds_import_template.csv` | Step 1 (`patient_uid`) | `wound_uid` (`wounds_import_results.csv`) | Active |
| 8 | **Documents & Historical Wound Photos** | `documents_import_template.csv` | Step 1 (`patient_uid`; optional `wound_uid` / `wound_id` from Step 7) | — | Active |
| 9 | **Visit History** (read-only history) | `visit_history_import_template.csv` | Step 7 (`patient_uid`, optional `wound_uid` / `wound_id`) | — | Active |

---

## Step 1 — Patients (`patient_import_template.csv`)

The Patients template contains **22 columns** across three groups:
1. **Core demographic and provider fields** (11 columns — 3 required, 8 optional)
2. **Identity and duplicate-handling fields** (3 optional columns)
3. **Patient consent attestation fields** (`consent_*`, 8 optional columns)

### Core demographic and provider columns

| Column (`key`) | Required | Type / Format | Accepted values & validation | Default / Fallback behavior |
|---|---|---|---|---|
| `first_name` | **Required** | Text | Non-empty patient first name. | Row is rejected on Confirm if blank. |
| `last_name` | **Required** | Text | Non-empty patient last name. | Row is rejected on Confirm if blank. |
| `date_of_birth` | **Required** | Date (`YYYY-MM-DD`) | Valid calendar date in `YYYY-MM-DD` (recommended) or `MM/DD/YYYY`. Rollover dates such as `2026-02-31` are rejected before write. | Row is rejected if blank or not a real calendar date. |
| `phone` | Optional | Text | Patient phone number (e.g., `555-123-4567`). | Stored as `null` if blank. |
| `email` | Optional | Email | Must match `name@domain.tld` if provided. | Stored as `null` if blank; invalid format triggers a validation error. |
| `address_street` | Optional | Text | Street address (e.g., `123 Main St`). | Stored as `null` if blank. |
| `address_city` | Optional | Text | City name (e.g., `Springfield`). | Stored as `null` if blank. |
| `address_state` | Optional | Text (2-letter US state) | Validated against standard 2-letter US state and territory codes (`AL`–`WY`, `DC`, `PR`, `VI`, `GU`, `AS`, `MP`), case-insensitive. | Normalized to uppercase; stored as `null` if blank. Invalid state codes are flagged on Confirm. |
| `address_zip` | Optional | Text (ZIP code) | 5-digit (`62701`) or 9-digit (`62701-1234`) US ZIP code. | Stored as `null` if blank. Invalid formats are flagged on Confirm. |
| `provider_email` | Optional | Email | Email address of an existing clinician/provider in the facility (`user_profile` / `providers`). | **Matched:** Assigns the provider and sets patient status to `ASSIGNED`. **Blank or unmatched:** Imports the patient unassigned (`status = NEW`) and adds a non-blocking *Needs Follow-Up* warning so an admin can assign a provider later. |
| `notes` | Optional | Text | Free-text onboarding or chart note (e.g., `Transferred from Dr. Adams`). | Saved to the patient's standalone `notes` table (`note_date` = import date, deduplicated by `(source, external_id)` on re-import). |

### Identity & duplicate handling (`prior_ehr_*` and `duplicate_decision`)

When migrating from another EHR, two different patients can legitimately share a first name, last name, and date of birth, or the same CSV may be uploaded more than once. Medipyxis uses three optional columns to prevent both silent wrong-person merges and accidental duplicate charts:

| Column (`key`) | Required | Type / Format | How it works |
|---|---|---|---|
| `prior_ehr_system` | Optional | Text | Name of the source EHR (for example, `DrChrono`, `PointClickCare`, `Athena`). Namespaces `prior_ehr_mrn` in `patient.external_id` as `<prior_ehr_system>:<mrn>` (lowercased, colons removed). |
| `prior_ehr_mrn` | Optional | Text | Patient's chart number or MRN in the prior EHR. Leading zeros are normalized (`001842` and `1842` match the same ID). When re-importing, a matching `prior_ehr_mrn` + `first_name` + `date_of_birth` is recognized as the same patient and counted as **Skipped (existing)** while still returning `patient_uid`. If `prior_ehr_mrn` matches an existing patient whose `first_name` or `date_of_birth` differs, the row is **blocked with an error** unless explicitly confirmed via `duplicate_decision` so a mistyped MRN never merges two different people. |
| `duplicate_decision` | Optional | UUID or `NEW` | Resolves a row held for review when `first_name + last_name + date_of_birth` matches an existing patient in the facility without a matching `prior_ehr_mrn`:
- **Enter the existing `patient_uid` UUID** (shown in the error message) to link/reuse that existing chart and backfill its `external_id`.
- **Enter `NEW`** (case-insensitive) to confirm this row is a different person with the same name and date of birth and create a separate patient record. (If the existing same-name patient was also imported without a `prior_ehr_mrn`, provide `prior_ehr_mrn` alongside `NEW` so subsequent runs can tell the two charts apart.) |

### Patient consent attestation columns (`consent_*`)

All 8 `consent_*` columns in `patient_import_template.csv` are **optional** and let an administrator record that the practice already holds a signed treatment and billing consent form on file for an incoming patient.

#### Gating rule (`consent_on_file`)

Everything gates on **`consent_on_file`**:
- If `consent_on_file` is **blank** or **`no`** (`false`, `0`, `n`), **no consent attestation is created** and the other 7 `consent_*` columns are completely ignored—even if those 7 columns contain values.
- If `consent_on_file` contains an unrecognized value (anything other than `yes`/`no`, `true`/`false`, `1`/`0`, `y`/`n`), the patient still imports, no consent is recorded, and a non-blocking warning is added to the **Needs Follow-Up** list.

#### Clinical and compliance rule (practice's own consent only)

Setting `consent_on_file = yes` writes a `patient_consents` record (`collection_method = 'external_attested'`, `text_version = 'external'`, `status = 'current'`, `consent_to_treatment = true`, `consent_to_bill = true`) attested under the **signed-in administrator's user account** (`obtained_by_user_id`).

- **Only set `consent_on_file = yes` when your practice holds its own signed treatment and billing consent form** for that patient (signed by the patient or their legal POA / healthcare surrogate).
- **Never use a skilled nursing facility's (SNF) admission paperwork** to satisfy `consent_on_file = yes`, and **never list facility staff as the signer**. Nursing facility admission packets authorize the facility, not an independent wound-care practice, and facility staff cannot legally consent on a resident's behalf.
- If a patient already has a `current` consent record in Medipyxis, re-importing with `consent_on_file = yes` leaves the existing consent untouched and logs a non-blocking warning.

#### All 8 `consent_*` columns and defaults

| Column (`key`) | Required | Accepted values | Behavior & exact default when `consent_on_file = yes` |
|---|---|---|---|
| `consent_on_file` | Optional | `yes` / `no` (also accepts `true` / `false`, `1` / `0`, `y` / `n`, case-insensitive) | **Master gate.** When blank or `no`, no consent row is created and all other `consent_*` columns are ignored. When `yes`, records an `external_attested` treatment + billing consent. |
| `consent_signed_on` | Optional | Date (`YYYY-MM-DD` or `MM/DD/YYYY`) | Stored in `external_signed_on` (`YYYY-MM-DD`) and sets `signed_at` to `YYYY-MM-DDT00:00:00Z`. **Default if blank or unreadable:** `external_signed_on = null` and `signed_at` defaults to the import timestamp (`now`). An unreadable date logs a warning on the Confirm screen and never blocks the patient import. |
| `consent_signer_capacity` | Optional | `patient`, `poa`, or `surrogate` (case-insensitive) | Indicates who signed the form (`patient`, legal power of attorney `poa`, or healthcare `surrogate`). **Default if blank or any other value:** `patient` (unrecognized values also log a *Needs Follow-Up* warning). |
| `consent_signer_name` | Optional | Text (full name of signer) | Stored in `signer_name`. Required in practice workflows when `consent_signer_capacity` is `poa` or `surrogate`. **Default if blank:** `<first_name> <last_name>` from the same CSV row. |
| `consent_witnessed` | Optional | `yes` / `no` (`true` / `false`, `1` / `0`, `y` / `n`) | Stored in `external_witnessed`. **Default if blank:** `null` (not recorded). `yes` stores `true`; `no` stores `false`. |
| `consent_location` | Optional | Text (where the signed form is kept, e.g., `Paper chart`, `DrChrono archive`) | Stored in `external_document_location`. **Default if blank:** `practice records (onboarding import)`. |
| `consent_photo` | Optional | `yes` / `no` (`true` / `false`, `1` / `0`, `y` / `n`) | Clinical wound photography consent (`consent_to_photo`). **Default if blank or `no`:** `false` (photography consent is **off** unless explicitly attested `yes`). |
| `consent_npp_acknowledged` | Optional | `yes` / `no` (`true` / `false`, `1` / `0`, `y` / `n`) | HIPAA Notice of Privacy Practices acknowledgement (`npp_acknowledged`). **Default if blank or `no`:** `false` (off unless explicitly attested `yes`). |

---

## Persistent `patient_uid` download & idempotent re-imports

### Downloading `patient_uid` (and `wound_uid`) mappings anytime

Steps 2 through 9 link every row back to a patient using `patient_uid` (the Medipyxis UUID generated in Step 1), and Steps 8 and 9 optionally link historical wound photos, wound-specific documents, and visits to wounds using `wound_uid` / `wound_id` (generated in Step 7). You can download those IDs in two places:

1. **Immediately after an import finishes:** Click **Download Results CSV** in the blue banner on the Results screen to download `patients_import_results.csv` or `wounds_import_results.csv`.
2. **Anytime later on `/administrator/practice-onboarding`:** Completed **Step 1 — Patients** and **Step 7 — Wounds** cards display a persistent **Download results CSV** action (rebuilt server-side via `batch_results` from the saved batch mapping). This lets you re-download `patient_uid` and `wound_uid` mappings even after clicking **Done**, refreshing the browser, or signing in from another computer.
   - `patients_import_results.csv` columns: `csv_row`, `first_name`, `last_name`, `date_of_birth`, `patient_uid`
   - `wounds_import_results.csv` columns: `csv_row`, `patient_uid`, `wound_location`, `wound_type`, `first_seen_date`, `wound_uid`

### How re-importing works (`Skipped (existing)` and batch statuses)

Every active step in the Practice Onboarding importer is **idempotent**:

- **Natural-key deduplication:** If you re-upload the same CSV (or a superset CSV containing previously imported rows alongside new rows), Medipyxis checks whether each record already exists for that patient/facility:
  - **Step 1 (Patients):** Matches on `(facility_id, external_id)` + `first_name` + `date_of_birth`, or explicit `duplicate_decision = <patient_uid>`, or an already-imported identical `(first_name, last_name, date_of_birth)` when `external_id` is blank on both.
  - **Step 2 (Insurance):** Matches on `(patient_id, insurance_provider, policy_number)` (case-insensitive).
  - **Step 3 (Medications):** Matches on `(patient_id, name)` (case-insensitive).
  - **Step 4 (Allergies):** Matches on `(patient_id, allergen_name)` (case-insensitive).
  - **Step 5 (Comorbidities):** Merges and deduplicates condition strings (case-insensitive) into `patient.conditions[]`.
  - **Step 6 (Emergency Contacts):** Matches on `(patient_id, contact_name, phone_number)` (case-insensitive).
  - **Step 7 (Wounds):** Matches on `(patient_id, wound_location, wound_type, first_seen_date)` in `wound_import_history`.
  - **Step 8 (Documents & Historical Wound Photos):** Deduplicates by SHA-256 content hash (`external_id = po_<sha256>`) in `public.documents` and `wound_import_history.photo_urls`.
  - **Step 9 (Visit History):** Matches on `(patient_id, service_date, visit_number, provider_name, visit_summary)` in `visit_import_history`.
- **`Skipped (existing)` count & UID return:** Rows that already exist are not duplicated; they increment the **Skipped** counter (`skipped_count`). For Step 1 (Patients) and Step 7 (Wounds), skipped existing rows **still return their existing `patient_uid` or `wound_uid`** in the results CSV so you never lose your ID mapping.
- **Step card progress & batch status:**
  - Each step card shows cumulative imported rows across all batches plus the latest run breakdown: `<N> imported total · last run: X imported, Y skipped, Z errors`.
  - **Complete (`completed`):** All importable rows were imported or skipped with `0` errors.
  - **Completed with errors (`Import Completed with Errors`):** At least 1 row was imported or skipped, and 1 or more rows had errors. Good rows are committed immediately; you can fix only the failed rows and re-upload without duplicating the rows that succeeded.
  - **Failed (`failed`):** Recorded only when `success_count = 0`, `skipped_count = 0`, and `error_count > 0` (no rows could be imported at all).

---

## Steps 2–9 column-by-column reference tables

### Step 2 — Insurance (`insurance_import_template.csv`)

Creates patient coverage records in `patient_insurances` with `coverage_order = 1` (primary) and `is_active = true`.

| Column (`key`) | Required | Type / Format | Accepted values & validation | Default / Fallback behavior |
|---|---|---|---|---|
| `patient_uid` | **Required** | UUID | Valid UUID from Step 1 `patients_import_results.csv` belonging to a patient in the active facility. | Row is rejected if missing, not a UUID, or not found in the facility. |
| `insurance_provider` | **Required** | Text | Payer / insurance company name (e.g., `BlueCross BlueShield`, `Medicare`). | Row is rejected if blank. |
| `policy_number` | **Required** | Text | Policy or subscriber ID number (e.g., `BCBS-998877`). | Row is rejected if blank. |
| `group_number` | Optional | Text | Plan group number (e.g., `GRP-001`). | Stored as `null` if blank. |
| `member_id` | Optional | Text | Member ID if distinct from `policy_number`. | Stored as `null` if blank. |
| `effective_date` | Optional | Date (`YYYY-MM-DD`) | Coverage effective start date (`YYYY-MM-DD` or `MM/DD/YYYY`). | Stored as `null` if blank. |
| `subscriber_name` | Optional | Text | Full name of the policy subscriber (e.g., `Jane Doe`). | Stored as `null` if blank. |
| `subscriber_dob` | Optional | Date (`YYYY-MM-DD`) | Subscriber's date of birth (`YYYY-MM-DD` or `MM/DD/YYYY`). | Stored as `null` if blank. |
| `subscriber_relationship` | Optional | Text | Relationship of the patient to the subscriber (e.g., `Self`, `Spouse`, `Child`). | Stored as `null` if blank (downstream billing readers treat `null` as `Self`). |

### Step 3 — Medications (`medications_import_template.csv`)

Creates records in `patient_medications` with `source = 'imported'`.

| Column (`key`) | Required | Type / Format | Accepted values & validation | Default / Fallback behavior |
|---|---|---|---|---|
| `patient_uid` | **Required** | UUID | Valid `patient_uid` in the active facility. | Row is rejected if invalid or not found. |
| `name` | **Required** | Text | Medication name (e.g., `Metformin`). | Row is rejected if blank. |
| `dosage` | Optional | Text | Strength / dose (e.g., `500mg`). | Stored as `null` if blank. |
| `frequency` | Optional | Text | Dosing schedule (e.g., `Twice daily`, `BID`). | Stored as `null` if blank. |
| `route` | Optional | Text | Administration route (e.g., `Oral`, `Topical`, `IV`). | Stored as `null` if blank. |
| `prescribing_physician` | Optional | Text | Prescriber name (e.g., `Dr. Smith`). | Stored as `null` if blank. |
| `start_date` | Optional | Date (`YYYY-MM-DD`) | Date medication was started/prescribed. | Populates both `start_date` and `date_prescribed`; `null` if blank. |
| `status` | Optional | Text | `active`, `discontinued` (aliases: `stopped`, `inactive`, `d/c`, `dc`), or `held` (aliases: `hold`, `on_hold`). | Defaults to `active` if blank. Unrecognized values default to `active` and log a non-blocking warning. |

### Step 4 — Allergies (`allergies_import_template.csv`)

Creates records in `patient_allergies` with `source = 'imported'`.

| Column (`key`) | Required | Type / Format | Accepted values & validation | Default / Fallback behavior |
|---|---|---|---|---|
| `patient_uid` | **Required** | UUID | Valid `patient_uid` in the active facility. | Row is rejected if invalid or not found. |
| `allergen_name` | **Required** | Text | Allergen name (e.g., `Penicillin`, `Latex`). | Row is rejected if blank. |
| `allergy_type` | Optional | Text | `medication`, `food`, `environmental`, `latex`, `insect`, `other`, or `nkda` (case-insensitive). | Defaults to `other` if blank. Unrecognized values default to `other` with a warning. |
| `severity` | **Required** | Text | `mild` (aliases: `low`, `minor`), `moderate`, `severe`, `life_threatening` (aliases: `life-threatening`, `life threatening`, `high`, `critical`, `anaphylaxis`), or `none`. | Required on the Confirm screen; if an unrecognized value reaches the backend, it defaults to `moderate` with a warning. |
| `reaction_description` | Optional | Text | Description of the reaction (e.g., `Hives and swelling`, `Anaphylaxis`). | Stored as `null` if blank. |
| `status` | Optional | Text | `active`, `inactive`, `resolved`, `unknown`, or `not_applicable` (alias: `n/a`). | Defaults to `active` if blank (or `active` with a warning if unrecognized). |

### Step 5 — Medical History / Comorbidities (`comorbidities_import_template.csv`)

Appends deduplicated condition names to the `conditions` array on the `patient` record (`patient.conditions`). Include **one condition per row**; multiple rows for the same `patient_uid` are grouped together automatically.

| Column (`key`) | Required | Type / Format | Accepted values & validation | Default / Fallback behavior |
|---|---|---|---|---|
| `patient_uid` | **Required** | UUID | Valid `patient_uid` in the active facility. | Row is rejected if invalid or not found. |
| `condition` | **Required** | Text | Condition or diagnosis name (e.g., `Type 2 Diabetes`, `Peripheral Vascular Disease`, `Hypertension`). | Row is rejected if blank. Duplicate conditions already on the patient chart (case-insensitive) are skipped idempotently. |

### Step 6 — Emergency Contacts (`contacts_import_template.csv`)

Creates records in `patient_emergency_contacts`.

| Column (`key`) | Required | Type / Format | Accepted values & validation | Default / Fallback behavior |
|---|---|---|---|---|
| `patient_uid` | **Required** | UUID | Valid `patient_uid` in the active facility. | Row is rejected if invalid or not found. |
| `contact_name` | **Required** | Text | Emergency contact's full name (e.g., `John Doe`). | Row is rejected if blank. |
| `relationship` | Optional | Text | Relationship to the patient (e.g., `Spouse`, `Daughter`, `POA`). | Stored as `null` if blank. |
| `phone_number` | Optional | Text | Contact phone number (e.g., `555-987-6543`). | Stored as `null` if blank. |
| `email` | Optional | Email | Contact email address (`name@domain.tld`). | Stored as `null` if blank; invalid format is flagged on Confirm. |
| `is_primary` | Optional | Boolean | `true` / `false`, `yes` / `no`, `1` / `0` (case-insensitive). | Defaults to `false` if blank. |

### Step 7 — Wounds (`wounds_import_template.csv`), Step 8 — Documents & Historical Wound Photos (`documents_import_template.csv`), & Step 9 — Visit History (`visit_history_import_template.csv`)

> **Read-only clinical history:** Imported wounds (Step 7), historical wound photos and prior-EHR documents (Step 8), and imported visits (Step 9) are stored in dedicated **read-only history tables and private buckets** (`wound_import_history`, `visit_import_history`, `patient-documents`, and `wound-images`). Clinicians can view them on the patient's chart for historical context, but imported history records **cannot be edited, signed, or billed** as active Medipyxis visits. To document and bill a new encounter in Medipyxis, start a new visit on the patient's active chart.

#### Step 7 — Wounds (`wounds_import_template.csv`)

Produces `wound_uid` in `wounds_import_results.csv` so Step 8 (**Documents & Historical Wound Photos**) and Step 9 (**Visit History**) can link historical wound photos, wound-specific documents, and historical visits to specific historical wounds.

| Column (`key`) | Required | Type / Format | Accepted values & validation | Default / Fallback behavior |
|---|---|---|---|---|
| `patient_uid` | **Required** | UUID | Valid `patient_uid` in the active facility. | Row is rejected if invalid or not found. |
| `wound_location` | **Required** | Text | Anatomical wound location (e.g., `Left lower extremity, medial malleolus`). | Row is rejected if blank. |
| `wound_type` | Optional | Text | Wound classification (e.g., `Venous ulcer`, `Diabetic foot ulcer`, `Pressure injury`). | Stored as `null` if blank. |
| `wound_etiology` | Optional | Text | Underlying etiology (e.g., `Chronic venous insufficiency`). | Stored as `null` if blank. |
| `wound_status` | Optional | Text | Status in prior EHR (e.g., `active`, `healed`, `improving`). | Defaults to `active` if blank. |
| `length_cm` | Optional | Number (decimal) | Length in centimeters using a period decimal (e.g., `3.2`). Must be `>= 0`. | Stored as `null` if blank; non-numeric or negative values fail validation. |
| `width_cm` | Optional | Number (decimal) | Width in centimeters (e.g., `2.1`). Must be `>= 0`. | Stored as `null` if blank; non-numeric or negative values fail validation. |
| `depth_cm` | Optional | Number (decimal) | Depth in centimeters (e.g., `0.4`). Must be `>= 0`. | Stored as `null` if blank; non-numeric or negative values fail validation. |
| `first_seen_date` | Optional | Date (`YYYY-MM-DD`) | Date the wound was first documented (`YYYY-MM-DD` or `MM/DD/YYYY`). | Stored as `null` if blank. |
| `prior_treatments` | Optional | Text (comma- or semicolon-separated) | List of prior treatments (e.g., `Compression therapy, Foam dressing`). Split on `,` or `;` into a `text[]` array. | Stored as `null` if blank. |
| `diagnosis_codes` | Optional | Text (comma- or semicolon-separated) | ICD-10 codes associated with the wound (e.g., `I87.2, L97.429`). Split on `,` or `;` into a `text[]` array. | Stored as `null` if blank. |
| `notes` | Optional | Text | Free-text wound summary or prior treatment note. | Saved to `treatment_notes` on `wound_import_history` (`null` if blank). |

#### Step 8 — Documents & Historical Wound Photos (`documents_import_template.csv`)

Uploads local clinical documents (`.pdf`, `.jpg`, `.jpeg`, `.png`, `.heic`, `.tif`, `.tiff`) and historical wound photographs (`.jpg`, `.jpeg`, `.png`, `.heic`) into private HIPAA-compliant storage buckets using a two-phase signed-upload + SHA-256 commit flow. Image files with a `wound_uid` (or `wound_id`) attach to `wound_import_history.photo_urls`, while PDFs/TIFFs (with or without `wound_uid` / `wound_id`) commit to `patient-documents` and `public.documents` (`prior_ehr_record = true`).

| Column (`key`) | Required | Type / Format | Accepted values & validation | Default / Fallback behavior |
|---|---|---|---|---|
| `patient_uid` | **Required** | UUID | Valid `patient_uid` from Step 1 (`patient_id` is also accepted as a column header alias). | Row is rejected if invalid or not found. |
| `file_name` | **Required** | Text | Exact filename of an attached local file (e.g., `referral_jane_doe.pdf` or `left_heel_2025-10-12.jpg`). | Rows with no matching attached local file are skipped with a warning and never create broken-link records. |
| `document_type` | Optional | Text | `Lab Results`, `Referral`, `Insurance Card`, `Signed Consent`, `Prior Progress Note`, `Imaging / Vascular Study`, `Wound Photo`, or `Other`. | Defaults to `Prior EHR Record` if blank. |
| `document_date` | Optional | Date (`YYYY-MM-DD`) | Date of the original document or photo (`YYYY-MM-DD` or `MM/DD/YYYY`). | Defaults to import date if blank. |
| `wound_uid` (or `wound_id`) | Optional (Required for Wound Photos) | UUID | Valid `wound_uid` from Step 7's `wounds_import_results.csv` (`wound_id` is also accepted). Links a historical wound photo (`.jpg`/`.png`/`.heic`) or a wound-specific document (`.pdf`/`.tiff`) to a historical wound in `wound_import_history`. | Verified against `wound_import_history` for that patient and facility. |
| `prior_ehr_system` | Optional | Text | Source EHR name (e.g., `PointClickCare`, `NetHealth`, `Athena`). | Recorded in `notes` on `public.documents`. |

#### Step 9 — Visit History (`visit_history_import_template.csv`)

Creates read-only historical encounter summaries in `visit_import_history`.

| Column (`key`) | Required | Type / Format | Accepted values & validation | Default / Fallback behavior |
|---|---|---|---|---|
| `patient_uid` | **Required** | UUID | Valid `patient_uid` in the active facility. | Row is rejected if invalid or not found. |
| `wound_uid` (or `wound_id`) | Optional | UUID (or comma/semicolon-separated UUIDs) | One or more `wound_uid` values from Step 7's `wounds_import_results.csv` (stored in `wound_import_ids[]`). | Stored as `null` if blank. Any non-UUID token is dropped with a non-blocking warning so the visit row still imports. |
| `service_date` | **Required** | Date (`YYYY-MM-DD`) | Date of the historical visit (`YYYY-MM-DD` or `MM/DD/YYYY`). | Row is rejected if blank or invalid. |
| `visit_number` | Optional | Integer | Sequential visit number from the prior EHR (e.g., `1`, `2`). Must be a positive whole number. | Stored as `null` if blank; non-integer values are dropped with a warning on the backend or flagged on Confirm. |
| `provider_name` | Optional | Text | Name of the clinician who performed the historical visit (e.g., `Dr. Jane Smith`). | Stored as `null` if blank. |
| `visit_summary` | Optional | Text | Free-text clinical summary of the historical visit. | Stored as `null` if blank. |

---

## Date, number & CSV formatting checklist

Before uploading any CSV into the Practice Onboarding importer, verify the following formatting rules:

1. **Format all dates as ISO `YYYY-MM-DD` (recommended):**
   - Always prefer `YYYY-MM-DD` (for example, `2026-06-15`) across `date_of_birth`, `consent_signed_on`, `effective_date`, `subscriber_dob`, `start_date`, `first_seen_date`, and `service_date`.
   - **Avoid mixing `MM/DD/YYYY` and `DD/MM/YYYY` in the same file:** Opening a CSV in Microsoft Excel under different regional settings can silently rewrite some cells as `MM/DD/YYYY` and others as `DD/MM/YYYY`. While the Confirm screen inspects every date column and converts unambiguous slash dates (`15/06/2026` vs `06/15/2026`), ambiguous dates where both numbers are `12` or below (such as `03/04/2026`) default to US month-first (`MM/DD/YYYY`) and raise an amber warning banner on the Confirm screen. Because a transposed `date_of_birth` breaks payer eligibility and claim submission, format date columns as `YYYY-MM-DD` text before saving.
2. **Impossible calendar / rollover dates are rejected before write:**
   - Both the Confirm screen validator and the backend importer check exact calendar month lengths and leap years. Rollover dates that do not exist on the calendar—such as `2026-02-31`, `2026-02-29` (non-leap year), or `2026-04-31`—are rejected with `Invalid calendar date` rather than rolling into the following month.
3. **Use a period (`.`) for decimal numbers:**
   - Wound dimensions (`length_cm`, `width_cm`, `depth_cm`) must use a period decimal (`3.2`, not `3,2`) and must be zero or greater.
4. **Wrap fields containing commas in double quotes:**
   - Any free-text cell that contains commas—such as `wound_location` (`"Left lower extremity, medial malleolus"`), `prior_treatments` (`"Compression therapy, Foam dressing"`), `diagnosis_codes` (`"I87.2, L97.429"`), or `notes`—must be enclosed in standard CSV double quotes (`"..."`) so commas inside a field do not shift subsequent columns.
5. **Leave the template header row intact:**
   - Keep the exact lowercase snake_case column names on the header row so the **Map Columns** step auto-matches every field with 100% confidence. (If a downloaded template starts with Excel's `sep=,` hint line above the header row, you can leave it as-is—Medipyxis strips `sep=,` automatically on upload.)

## Related

Auto-rendered from `related:` in frontmatter.
