---
id: visit-wizard-ehr-medication-dosespot
title: Prescribe with DoseSpot (e-prescribing)
module: visit-wizard-ehr
audience: [clinician]
roles: [clinician, medical_director]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
tags: [medications, DoseSpot, eRx, e-prescribing, EPCS]
---

# Prescribe with DoseSpot (e-prescribing)

Medipyxis uses **DoseSpot** for electronic prescribing. You prescribe from the **Current Medication** step (Step 14) of the Visit Wizard. Controlled substances require a one-time **EPCS** setup on your account.

## One-time setup (EPCS)

Before you can e-prescribe, especially controlled substances, your DoseSpot connection must be set up:

1. On your **Dashboard**, find the **Electronic Prescribing Setup** card.
2. If the connection is healthy, a green pill confirms your credentials and **EPCS** (controlled-substance) status.
3. If ePrescribing is not active yet, click **Set Up ePrescribing**. Click **Complete EPCS Setup** for controlled substances. DoseSpot opens in an in-app frame to finish enrollment.

## Prescribe during a visit

1. In the Visit Wizard, open **Current Medication** (Step 14).
2. Choose **DoseSpot** as the **Delivery Method**.
3. Click **Open DoseSpot** to open the prescribing console for the current patient. Only providers can do this. Other users see **Prepare Order (Provider Required)**.
4. Complete and send the prescription in the DoseSpot console. Controlled substances route through the EPCS flow.
5. Medications reconcile across the chart. What you enter in the wizard (Clinical History Review and Current Medication) and on the Meds & Orders page is one shared medication list.

Prescriptions are sent through DoseSpot's console, which opens inside Medipyxis, so you prescribe without leaving the visit. Where Medipyxis says eRx, it means DoseSpot.
