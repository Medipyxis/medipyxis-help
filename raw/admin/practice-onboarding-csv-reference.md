---
id: admin-practice-onboarding-csv-reference
title: Practice Data Import CSV templates and column reference
module: admin
audience: [admin]
roles: [admin]
type: reference
estimated_minutes: 15
last_reviewed: 2026-11-11
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

Use this column-by-column reference when preparing spreadsheets for the **Practice Onboarding** importer at `/administrator/practice-onboarding` (the **Practice Onboarding** card on the Administrator cockpit).

For the step-by-step upload walkthrough and the silent video overview, see [Onboard a practice with the Practice Onboarding importer](/admin/practice-onboarding/) and [How do I move my practice's patient data into Medipyxis?](/whats-new/practice-data-import/)

## Templates overview

Download each template from its step's **Upload** screen. Templates start with a byte-order mark and a `sep=,` line so Microsoft Excel opens them cleanly; the importer removes both when you upload the file back.

| Step | Module | Template file name | Needs | Produces ID column |
|---|---|---|---|---|
| 1 | **Patients** | `patient_import_template.csv` | — | `patient_uid` |
| 2 | **Insurance** | `insurance_import_template.csv` | Step 1 | — |
| 3 | **Medications** | `medications_import_template.csv` | Step 1 | — |
| 4 | **Allergies** | `allergies_import_template.csv` | Step 1 | — |
| 5 | **Comorbidities** | `comorbidities_import_template.csv` | Step 1 | — |
| 6 | **Emergency Contacts** | `contacts_import_template.csv` | Step 1 | — |
| 7 | **Wounds** | `wounds_import_template.csv` | Step 1 | `wound_uid` |
| 8 | **Documents & Historical Wound Photos** | `documents_import_template.csv` | Step 1 (Step 7 if you link a wound) | — |
| 9 | **Visit History** | `visit_history_import_template.csv` | Step 7 | — |

Every row in steps 2–9 needs a `patient_uid` from Step 1 for a patient in the facility you are importing into.

## Step 1 — Patients

The Patients template has **22 columns**: 11 demographic and provider columns (3 required), 3 identity columns, and 8 consent columns.

### Demographic and provider columns

| Column | Required | What to enter |
|---|---|---|
| `first_name` | **Required** | Patient first name. |
| `last_name` | **Required** | Patient last name. |
| `date_of_birth` | **Required** | A real date, `YYYY-MM-DD` (recommended) or `MM/DD/YYYY`. |
| `phone` | Optional | Patient phone number. |
| `email` | Optional | Must look like `name@domain.tld`. |
| `address_street` | Optional | Street address. |
| `address_city` | Optional | City. |
| `address_state` | Optional | A 2-letter US state code (for example `IL`). |
| `address_zip` | Optional | 5 digits or ZIP+4 (for example `62704` or `62704-1234`). |
| `provider_email` | Optional | Email of an existing provider. If it matches, the patient is assigned to that provider. If it is blank or matches no one, the patient is imported without a provider and listed under **Needs Follow-Up**. |
| `notes` | Optional | Free-text note saved on the patient. |

### Identity and duplicate handling

Two different patients can share a name and date of birth, and the same file may be uploaded more than once. Three optional columns keep charts apart:

| Column | How it works |
|---|---|
| `prior_ehr_system` | Name of the source EHR (for example `DrChrono`). |
| `prior_ehr_mrn` | The patient's chart number in the prior EHR. Case and leading zeros are ignored (`001842` and `1842` match). On re-import, a row whose chart number, first name and date of birth match an existing patient reuses that patient and returns its `patient_uid`. If the chart number matches but the first name or date of birth differs, the row is held for review and not imported. |
| `duplicate_decision` | For a row held because its name and date of birth match an existing patient with no matching chart number: enter that patient's `patient_uid` (shown in the message) if it is the same person, or `NEW` if it is a different person. `NEW` needs a `prior_ehr_mrn` on the row. |

### Consent columns (`consent_*`)

All 8 consent columns are optional. They let the person running the import record that the practice already holds its own signed treatment and billing consent for a patient.

- `consent_on_file` — the gate. Only `yes`, `true`, `1` or `y` records a consent. Blank, `no` or anything else records nothing, and the other 7 columns are ignored.
- `consent_signed_on` — the signing date (`YYYY-MM-DD` or `MM/DD/YYYY`). A date that cannot be read is dropped, never guessed.
- `consent_signer_capacity` — `patient`, `poa` or `surrogate`.
- `consent_signer_name`, `consent_witnessed` (yes/no), `consent_location` (where the signed form is kept), `consent_photo` (consent allows photographs, yes/no), `consent_npp_acknowledged` (privacy notice acknowledged, yes/no).

The consent is recorded under the account of the person running the import. If the patient already has a current consent in Medipyxis, it is left as it is and a warning is shown.

Only set `consent_on_file` to yes when your practice holds its **own** signed consent form, signed by the patient or their legal POA or healthcare surrogate. Never use a nursing facility's admission paperwork, and never list facility staff as the signer: facility admission packets authorize the facility, not your practice.

## Results files and re-imports

### Getting the `patient_uid` and `wound_uid` values

- **Right after an import:** click **Download Results CSV** on the Results screen. The file is your uploaded CSV with the new ID column added.
- **Any time later:** the completed **Patients** and **Wounds** step cards have **Download results CSV**, which works after clicking **Done**, refreshing, or signing in elsewhere. Its columns are `csv_row`, `first_name`, `last_name`, `date_of_birth`, `prior_ehr_mrn`, `patient_uid` for Patients, and `csv_row`, `patient_uid`, `wound_location`, `wound_type`, `first_seen_date`, `wound_uid` for Wounds.

### How re-importing works

Uploading the same file again, or a larger file that includes rows already imported, does not create duplicates. A row that matches a record already imported for the same patient is reused and counted under **Skipped (Reused)**. For Patients and Wounds, reused rows still get their existing ID in the results file.

- **Insurance** matches on payer and policy number.
- **Medications** match on name, dosage, route and frequency, so two strengths of the same drug both import.
- **Allergies** match on allergen.
- **Comorbidities** are merged into the patient's condition list without repeats.
- **Emergency Contacts** match on contact name and phone number.
- **Wounds** match on location, type and first-seen date.
- **Visit History** matches on service date, visit number and wounds (or, without a visit number, also on provider and summary).

Each step card shows _N imported total · last run: X imported, Y skipped, Z errors_. A run with errors still keeps its good rows, so you can fix and re-upload only the failed ones. A run where nothing was imported or reused and every row failed is marked failed.

## Steps 2–9 columns

### Step 2 — Insurance

| Column | Required | What to enter |
|---|---|---|
| `patient_uid` | **Required** | From the Patients results file. |
| `insurance_provider` | **Required** | Payer name (for example `Medicare`). |
| `policy_number` | **Required** | Policy or subscriber ID. |
| `group_number` | Optional | Plan group number. |
| `member_id` | Optional | Member ID if different from the policy number. |
| `effective_date` | Optional | Coverage start date. |
| `subscriber_name` | Optional | Policy holder's full name. |
| `subscriber_dob` | Optional | Policy holder's date of birth. |
| `subscriber_relationship` | Optional | Patient's relationship to the policy holder (for example `Self`, `Spouse`). Left blank if blank; billing treats blank as Self. |

Imported coverage is saved as active.

### Step 3 — Medications

| Column | Required | What to enter |
|---|---|---|
| `patient_uid` | **Required** | From the Patients results file. |
| `name` | **Required** | Medication name. |
| `dosage`, `frequency`, `route`, `prescribing_physician` | Optional | As written in the prior EHR. |
| `start_date` | Optional | Date started; also shown as the prescribed date. |
| `status` | Optional | `active`, `discontinued` (also `stopped`, `inactive`, `d/c`, `dc`), `held` (also `hold`, `on_hold`), `completed` or `unknown`. Blank means active; anything else is saved as active with a warning. |

### Step 4 — Allergies

| Column | Required | What to enter |
|---|---|---|
| `patient_uid` | **Required** | From the Patients results file. |
| `allergen_name` | **Required** | Allergen (for example `Penicillin`). |
| `allergy_type` | Optional | `medication`, `food`, `environmental`, `latex`, `insect`, `other` or `nkda`. Blank or anything else is saved as `other` (with a warning if it was not blank). |
| `severity` | **Required** | `mild`, `moderate`, `severe` or `life_threatening` (`life-threatening` and `life threatening` also work). Any other value is an error on the Confirm screen. |
| `reaction_description` | Optional | What happens (for example `Hives`). |
| `status` | Optional | `active`, `inactive`, `resolved`, `unknown` or `not_applicable`. Blank or anything else is saved as active. |

### Step 5 — Comorbidities

| Column | Required | What to enter |
|---|---|---|
| `patient_uid` | **Required** | From the Patients results file. |
| `condition` | **Required** | One condition per row (for example `Type 2 Diabetes`). Several rows for one patient are grouped. |

### Step 6 — Emergency Contacts

| Column | Required | What to enter |
|---|---|---|
| `patient_uid` | **Required** | From the Patients results file. |
| `contact_name` | **Required** | Contact's full name. |
| `relationship`, `phone_number` | Optional | For example `Spouse`, `555-987-6543`. |
| `email` | Optional | Must look like `name@domain.tld`. |
| `is_primary` | Optional | `true`/`false`, `yes`/`no`, `1`/`0`, `y`/`n`. Blank means no. If the patient already has a primary contact, the new one is saved as not primary, with a warning. |

### Step 7 — Wounds

| Column | Required | What to enter |
|---|---|---|
| `patient_uid` | **Required** | From the Patients results file. |
| `wound_location` | **Required** | Anatomical location. |
| `wound_type`, `wound_etiology` | Optional | As recorded in the prior EHR. |
| `wound_status` | Optional | Status in the prior EHR. Blank means `active`. |
| `length_cm`, `width_cm`, `depth_cm` | Optional | Numbers, with a period for decimals (`3.2`, not `3,2`). |
| `first_seen_date` | Optional | Date the wound was first seen. |
| `prior_treatments`, `diagnosis_codes`, `source_system`, `notes` | Optional | Free text. |

Imported wounds are history: they appear on the patient's Wound Cockpit for context and are kept separate from wounds documented in Medipyxis.

### Step 8 — Documents & Historical Wound Photos

This step uploads the files themselves as well as the CSV: attach each source file so it is stored privately before its row is saved.

| Column | Required | What to enter |
|---|---|---|
| `patient_uid` | **Required** | From the Patients results file. |
| `file_name` | **Required** | Name of the attached file. |
| `document_type` | **Required** | The kind of document. |
| `document_date` | Optional | Date of the document. |
| `wound_uid` | Optional | Links a photo or document to a wound from Step 7 (`wound_id` is also accepted). |
| `prior_ehr_system` | Optional | Source EHR. |

### Step 9 — Visit History

| Column | Required | What to enter |
|---|---|---|
| `patient_uid` | **Required** | From the Patients results file. |
| `service_date` | **Required** | Date of the visit. |
| `wound_uid` | Optional | One or more wound IDs from Step 7, separated by commas. |
| `visit_number` | Optional | A number. |
| `provider_name`, `visit_summary` | Optional | Free text. |

Imported visits are history: they appear on the patient's timeline and are separate from visits documented in Medipyxis. To document and bill a new encounter, start a new visit.

## Date, number and CSV formatting checklist

- **Use `YYYY-MM-DD` for dates.** Slash dates are accepted. A date like `15/06/2026` is clearly day-first and is converted; a date where both numbers are 12 or less, such as `03/04/2026`, is read as US month-first (`MM/DD/YYYY`) and the Confirm screen warns you to check it.
- **Dates that do not exist are rejected** (for example `2026-02-31`, or `2026-02-29` in a non-leap year) with an "Invalid calendar date" message, rather than rolling into the next month.
- **Use a period for decimals** in wound measurements.
- **Wrap text that contains commas in double quotes** (for example `"Left lower extremity, medial malleolus"`) so the commas do not shift the columns.
- **Keep the template header row.** Matching column names are mapped automatically on the **Map Columns** step.

## Related
