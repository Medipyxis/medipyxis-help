---
id: patient-management-zus-tefca
title: Sync patient history with ZusHealth (TEFCA)
module: patient-management
audience: [clinician, admin]
roles: [clinician, medical_director, referral_coordinator, admin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-07-10
app_route: /facility/{facility_uuid}/all-patients
related:
  - patient-management-overview
  - visit-wizard-ehr-overview
tags: [ZusHealth, TEFCA, patient history, interoperability, pre-charting, provenance]
---

# Sync patient history with ZusHealth (TEFCA)

Pull a patient's external health record into Medipyxis from **ZusHealth**, and contribute your visits back to the national record automatically. This is how Medipyxis participates in nationwide interoperability (TEFCA).

## What ZusHealth brings in

The importer pulls the patient's external history and maps it into the chart:

- Allergies
- Medications
- Lab results
- Surgeries / procedures
- Vaccinations
- Conditions / problems

Imported data appears in the patient chart's **ZusHealth** section with **provenance indicators** on each row (so you can tell externally-sourced data from data entered in Medipyxis) and a **last-sync pill** (green / yellow / red) showing how current the sync is.

## Pull a patient's history

1. Open the patient's chart, or start **Pre-Charting** for a visit.
2. Click **Pull** (the ZusHealth import). The importer fetches the latest external record and maps allergies, medications, labs, surgeries, vaccinations, and conditions into the chart.
3. Review the imported rows. Provenance badges mark what came from ZusHealth; the last-sync pill shows the sync time.

<Note>
Always review imported data before relying on it clinically — external records can be incomplete or out of date. Provenance badges are there so you can see the source of each item at a glance.
</Note>

## Automatic visit contribution (TEFCA)

When you **finalize a visit** (Sign & Lock), Medipyxis contributes the visit back to the patient's external record via ZusHealth / TEFCA automatically — there is no extra step. This keeps the patient's nationwide record current with the care you delivered.

## Related

Auto-rendered from `related:` in frontmatter.
