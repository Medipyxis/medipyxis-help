---
id: visit-wizard-ehr-medication-dosespot
title: Prescribe with DoseSpot (e-prescribing)
module: visit-wizard-ehr
audience: [clinician]
roles: [clinician, medical_director]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-07-10
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
tags: [medications, DoseSpot, eRx, e-prescribing, EPCS]
---

# Prescribe with DoseSpot (e-prescribing)

Medipyxis uses **DoseSpot** for electronic prescribing. You prescribe from the **Medication Management** section (section 13) of the Visit Wizard; controlled substances require a one-time **EPCS** setup on your account.

## One-time setup (EPCS)

Before you can e-prescribe — especially controlled substances — your DoseSpot connection must be set up:

1. On your **Dashboard**, find the **Electronic Prescribing Setup** card.
2. If the connection is healthy, a green pill confirms your credentials and **EPCS** (controlled-substance) status.
3. If credentials are missing or expired, click **Configure** / **Set Up ePrescribing** (and **Complete EPCS Setup** for controlled substances). DoseSpot opens in an in-app frame to finish enrollment.

## Prescribe during a visit

1. In the Visit Wizard, open **Medication Management** (section 13).
2. Launch **DoseSpot** to open the prescribing console for the current patient.
3. Search the medication, choose the pharmacy, set sig/quantity/refills, and send the prescription. Controlled substances route through the EPCS flow.
4. Medications reconcile across the chart (pre-charting, the wizard, and Meds & Orders stay in sync).

<Note>
"eRx" throughout Medipyxis means DoseSpot. Prescriptions are sent through DoseSpot's console; Medipyxis routes the calls through a server-side proxy, so you prescribe without leaving the visit.
</Note>

## Related

Auto-rendered from `related:` in frontmatter.
