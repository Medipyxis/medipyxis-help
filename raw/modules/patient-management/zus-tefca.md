---
id: patient-management-zus-tefca
title: Sync patient history with ZusHealth (TEFCA)
module: patient-management
audience: [clinician, admin]
roles: [clinician, medical_director, referral_coordinator, admin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/all-patients
related:
  - patient-management-overview
  - visit-wizard-ehr-overview
tags: [ZusHealth, TEFCA, patient history, interoperability, pre-charting, provenance]
---

# Sync patient history with ZusHealth (TEFCA)

Pull a patient's external health record into Medipyxis from **ZusHealth**, and send your signed visits back to ZusHealth automatically.

## What ZusHealth brings in

The importer pulls the patient's external history and maps it into the chart:

- Allergies
- Medications
- Lab results
- Surgeries / procedures
- Vaccinations
- Conditions / problems

Imported data appears in the patient chart's **ZusHealth** section with a **last-sync pill** (green / yellow / red) showing how current the sync is.

Medications, allergies, lab results, surgeries, and vaccinations show a source badge on each row: **Zus** for imported rows, **Manual** for rows entered in Medipyxis. Conditions currently show **Manual** on every row, including conditions imported from ZusHealth.

## Pull a patient's history

- Open the patient's chart, or start **Pre-Charting** for a visit.
- Click **Pull** (the ZusHealth import). The importer fetches the latest external record and maps allergies, medications, labs, surgeries, vaccinations, and conditions into the chart.
- Review the imported rows. Source badges mark what came from ZusHealth (except on conditions, see above); the last-sync pill shows the sync time.

Always review imported data before relying on it clinically — external records can be incomplete or out of date.

## Automatic visit contribution

When you **finalize a visit** (Sign & Lock), Medipyxis sends the visit to ZusHealth automatically — there is no extra step. This happens only for patients who are linked to ZusHealth, at facilities that are connected to ZusHealth.
