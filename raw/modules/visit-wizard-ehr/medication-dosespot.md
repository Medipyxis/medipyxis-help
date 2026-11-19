---
id: visit-wizard-ehr-medication-dosespot
title: Prescribe with DoseSpot (e-prescribing)
module: visit-wizard-ehr
audience: [clinician]
roles: [clinician, medical_director]
type: how-to
estimated_minutes: 2
last_reviewed: 2026-11-18
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
tags: [medications, DoseSpot, eRx, e-prescribing, EPCS]
---

# Prescribe with DoseSpot (e-prescribing)

Medipyxis uses DoseSpot for electronic prescribing. You prescribe from the Current Medication section (step 14) of the Visit Wizard. Prescribing controlled substances needs a one-time EPCS setup on your account.

---

## One-time setup (EPCS)

Before you can e-prescribe — especially controlled substances — your DoseSpot account must be set up:

1. On your **Dashboard**, find the **Electronic Prescribing Setup** card.
2. Check the two statuses. **ePrescribing** shows *Active* or *Setup needed*. **EPCS** (controlled substances) shows *Active* in green, or *Setup required* / *Not configured*.
3. If setup is needed, click **Set Up ePrescribing** — and **Complete EPCS Setup** for controlled substances. Setup opens in a window inside Medipyxis.

Your facility also needs DoseSpot set up. If it isn't, the medication section tells you to contact your admin.

---

## Prescribe during a visit

1. In the Visit Wizard, open **Current Medication** (step 14). The section is called *Medication Management* in the LCD Compliance Status card.
2. Review the patient's allergies and active medications, and record this visit's medication changes.
3. Under **Pharmacy Order**, choose DoseSpot as the method and click **Open DoseSpot**. DoseSpot opens inside Medipyxis for the current patient. Only providers can send prescriptions; other staff can prepare the order.
4. In DoseSpot, search the medication, choose the pharmacy, set directions, quantity, and refills, and send. Controlled substances go through the EPCS steps.

To bring prescriptions sent in DoseSpot back into the visit, click **Refresh from DoseSpot** in the active prescriptions list.

**Note:** "eRx" throughout Medipyxis means DoseSpot. DoseSpot opens inside Medipyxis, so you prescribe without leaving the visit.
