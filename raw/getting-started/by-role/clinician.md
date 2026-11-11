---
id: getting-started-clinician-first-hour
title: Clinician first hour
module: getting-started
audience: [clinician]
roles: [clinician, medical_director]
type: quickstart
estimated_minutes: 60
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/pm-clinician-dashboard
related:
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-assessment
  - fleet-calendar-my-day
tags: [onboarding, clinician, visit-wizard]
---

# Clinician first hour

By the end of this hour you will have seen your day, opened a visit, worked through the Visit Wizard (Steps 1 to 17, plus Step 2b) with wound measurements and photos, and signed the note.

## Before you start

- Your admin has given you access to at least one facility and a role.
- You have at least one visit scheduled for today. If not, ask your scheduler or admin to book one on the **Fleet Calendar**.

## Step 1 — See your day (5 min)

1. After you sign in, click **Patient Management** in the sidebar. It opens **My Clinical Day**: your schedule for the day, patients who need scheduling, and overdue visits.
2. Open **Fleet Calendar** and use the **All Providers** filter to show only your own column. Each appointment card shows the patient, the time, and the status.
3. To look at a patient's wounds before you go, open the **Wound Cockpit** from the patient's chart.

Tip: switch the Fleet Calendar to week view at the start of the week to see what is coming.

## Step 2 — Open the visit (2 min)

1. On the Fleet Calendar, click the appointment, then **Start Visit**. Or, in the patient's Wound Cockpit, pick the appointment in the visit picker and click **Open**.
2. The **Visit Wizard** opens with your saved work loaded and all sections collapsed. Open a section from the list; completed sections show a checkmark.
3. Your work saves automatically as you go, so a dropped connection or a device switch won't lose it. (The web app is online-only; there is no separate offline mode.)

See [How the Visit Wizard opens](/modules/visit-wizard-ehr/how-the-wizard-opens/).

## Step 3 — Work through the wizard (35 min)

The wizard has Steps 1 to 17, plus Step 2b (Clinical History Review) between Steps 2 and 3. Sections with missing fields show what is missing and let you continue; nothing stops documentation.

### Patient context (Steps 1–6 and 2b)

| # | Step | What you capture |
|---|---|---|
| 1 | **Consent & Attestation** | Shows the consent on file. If none is on file, use Capture consent, Record signed paper, or Record verbal consent. A missing consent does not stop you. |
| 2 | **Patient Context & Demographics** | The Chief Complaint (you can dictate it with Voice). The visit type comes from the appointment. Insurance is shown for reference only. |
| 2b | **Clinical History Review** | Allergies, surgical, family and social history, current medications, problems and immunizations. |
| 3 | **Review of Systems (ROS)** | Body-system checklist, filled in from the prior visit. Voice intake is available. |
| 4 | **Objective Assessment** | Vitals: BP, HR, Temp, SpO₂, Respirations, Weight, Height, BMI. Record the ankle-brachial index (ABI) here. |
| 5 | **Functional Status & ADLs** | Ambulation and independence in activities of daily living. |
| 6 | **Comorbidities & Risk Factors** | Diabetes, PAD, CVI, CHF, smoking status and other risk factors. |

### Wound documentation (Steps 7–10)

| # | Step | What you capture |
|---|---|---|
| 7 | **Wound Assessment** | Etiology and stage, Treating or Monitoring status, Length, Width and Depth (cm), tissue percentages (granulation, slough, necrotic, epithelial, eschar), exudate, pain and signs of infection. A wound photo is recommended for every wound you are treating; it does not stop you from finishing. |
| 8 | **Previous Treatments** | Prior offloading, compression, debridement and grafts, and the Medical Necessity Statement. |
| 9 | **Interventions & Treatments** | Debridement type, dressings, and ultrasonic therapy. Generate Procedure Note drafts a procedure narrative for you to review. |
| 10 | **Care Planning** | Treatment goals, the Follow-up Interval and the Next Visit Date. Generate Draft gives an AI draft of the plan to accept, edit or discard. |

### Orders, education, supplies, meds, billing (Steps 11–15)

| # | Step | What you capture |
|---|---|---|
| 11 | **Orders & DME** | Clinical orders and DME. DME is fulfilled by a vendor; there is no product picker here. |
| 12 | **Patient Education** | Handouts, Education Topics Covered Today, and the Patient Understanding Assessment. |
| 13 | **Procedure Supplies** | The Box UID/UIN, lot and quantity for grafts and supplies, and any units wasted. |
| 14 | **Current Medication** | Medications, and prescribing through DoseSpot. |
| 15 | **Billing & Documentation** | Click Pull Codes to fill billing codes from your documentation (rule-based, no AI). Check the E/M level, modifiers and place of service. |

### Audit and sign-off (Steps 16–17)

| # | Step | What you capture |
|---|---|---|
| 16 | **LCD Audit & Review** | The coverage-policy findings for the visit: a patient-level card and a row for each wound. Findings link back to the section where data is missing. |
| 17 | **Provider Attestation** | Your typed electronic signature: name, credentials and NPI. |

Detailed walkthrough: [Walk through a visit in the Visit Wizard](/modules/visit-wizard-ehr/start-a-visit/). Wound assessment specifics: [Wound assessment](/modules/visit-wizard-ehr/wound-assessment/).

The LCD badge at the top of the wizard re-checks the visit about a second after each change. Green means all checks pass, amber means at least one item to review, and grey means it is still checking. It never turns red and never blocks Sign & Lock. Click it to run the check on demand. See [LCD Navigator](/modules/visit-wizard-ehr/lcd-navigator/).

## Step 4 — Sign and finalize (10 min)

1. **Not ready to sign?** Leave the wizard. The visit stays an unsigned draft with your work saved. Reopen the same appointment to continue.
2. **Attest.** In Step 17, confirm your name, credentials and NPI, tick the attestation box, and click **Complete Provider Attestation**.
3. **Review and sign.** Click **Continue to Review**, check the note preview, then click **Sign & Lock**. If the service date doesn't match the appointment date, a prompt asks you to switch to the appointment date or give a reason. Inventory for the supplies you entered is deducted when you click Continue to Review.
4. **After signing.** The note is locked and filed, and a claim is drafted for the billing team to review. A **Go to Billing** prompt appears. Any later change needs an addendum.

## Step 5 — Housekeeping (5 min)

- Before you finish, check the Fleet Calendar. Signed visits show **Visit Completed**; a visit still showing **Progress Note In Progress** has not been signed.
- Mileage & Expenses is not switched on yet: its page is marked "Coming Soon!". Skip it.

## Result

- One visit signed and locked, with wound measurements, photos, and an LCD compliance check.
- You know where to start every day (Patient Management and the Fleet Calendar), where a patient's wounds live (the Wound Cockpit), and where to chat with your team (Team Chat).

## Next up

- [Walk through a visit in the Visit Wizard](/modules/visit-wizard-ehr/start-a-visit/)
- [LCD Navigator — compliance guide](/modules/visit-wizard-ehr/lcd-navigator/)
- [Sign off and add an addendum](/modules/visit-wizard-ehr/sign-off/)
