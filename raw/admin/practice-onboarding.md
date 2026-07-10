---
id: admin-practice-onboarding
title: Onboard a practice with the Practice Onboarding importer
module: admin
audience: [admin]
roles: [admin]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-07-10
app_route: /administrator/practice-onboarding
related:
  - admin-data-import-export
  - admin-facility-setup
tags: [admin, onboarding, import, CSV, migration, patients, charts]
---

# Onboard a practice with the Practice Onboarding importer

Bring an incoming practice's patients and chart data into Medipyxis with the **Practice Onboarding** importer — a guided, 9-step CSV pipeline in the Administrator area (`/administrator/practice-onboarding`). Each step is a **upload → map → confirm → import** flow, and steps unlock in dependency order.

## Before you start

- You have the `admin` role and access to the **Administrator** area.
- You have the source data as CSVs (exported from the prior EMR or spreadsheets).
- You're working in the correct facility — imports are scoped to the facility you're in.

## The 9 import steps

Steps unlock as their prerequisites complete. **Patients** is always first because everything else attaches to a patient; **Visit History** comes last because it depends on wounds.

| # | Step | Unlocks after |
|---|---|---|
| 1 | **Patients** | (always available) |
| 2 | **Insurance** | Patients |
| 3 | **Medications** | Patients |
| 4 | **Allergies** | Patients |
| 5 | **Comorbidities** | Patients |
| 6 | **Emergency Contacts** | Patients |
| 7 | **Documents** | Patients |
| 8 | **Wounds** | Patients |
| 9 | **Visit History** | Wounds |

## Import a step

1. Open **Administrator → Practice Onboarding**.
2. Click a step card to expand its import module.
3. **Upload** the CSV for that step.
4. **Map** the CSV columns to Medipyxis fields (the mapper flags required fields and unmatched columns).
5. **Confirm** the preview — the importer shows what will be created and any row-level errors.
6. **Import.** The batch runs and the step is marked complete, unlocking dependent steps.

<Note>
Start with **Patients** and import it cleanly before the dependent steps — every other record type links to a patient. Import **Wounds** before **Visit History** so visits can attach to the right wound.
</Note>

## Result

The practice's patients, coverage, clinical history, documents, wounds, and prior visits are in Medipyxis, ready for scheduling and documentation. Import batches are tracked per facility so you can review what was loaded.

## Related

Auto-rendered from `related:` in frontmatter.
