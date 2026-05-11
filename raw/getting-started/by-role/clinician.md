---
id: getting-started-clinician-first-hour
title: Clinician first hour
module: getting-started
audience: [clinician]
roles: [nurse, np, md, ma]
type: quickstart
estimated_minutes: 60
last_reviewed: 2026-05-10
app_route: /facility/{facility_uuid}/pm-clinician-dashboard
related:
  - visit-wizard-start-a-visit
  - visit-wizard-wound-assessment
  - visit-wizard-work-offline
  - fleet-calendar-my-day
tags: [onboarding, clinician, nurse, visit-wizard]
---

# Clinician first hour

By the end of this hour you will have logged in, reviewed your day, opened a patient, completed a full Initial Evaluation visit through all 17 wizard steps with wound assessment and photos, and signed it off. You can do this on your laptop or your issued tablet.

## Before you start

- Your practice admin has assigned you to at least one facility and one role.
- You have at least one scheduled visit for today (if not, your admin can assign one from **Fleet Calendar**).
- If you're on a tablet, install the Medipyxis Clinician mobile app from your admin's MDM link.

## Step 1 — See your day (5 min)

1. After logging in, click **Patient Management** in the sidebar.
2. The **Clinician Dashboard** shows today's visits, grouped by stop. Each card shows patient name, address, last wound status, and a route-position badge.
3. Click a visit card to open the **Wound Cockpit** for that patient before you drive.

<Tip>
Open **Fleet Calendar** (week view) once per Monday to preview the whole week — it makes routing faster on Tuesday.
</Tip>

## Step 2 — Start a new visit from the Wound Cockpit (2 min)

1. From the Wound Cockpit, click the **+ Initial Evaluation** button (top-right of the cockpit chrome).
2. The **Visit Wizard** opens as a multi-step form. Use the left sidebar inside the wizard to jump between sections; the active section is highlighted.
3. If you're offline, a yellow **Offline** banner appears across the top — keep going. Everything saves locally and syncs when you reconnect.

<Warning>
The Wizard button may show a loading error in some environments. If this occurs, contact your Medipyxis administrator — visits can be entered via the data-entry fallback path until the error clears.
</Warning>

## Step 3 — Move through the 17 wizard steps (35 min)

The wizard captures every field Medicare LCD policy needs to make the visit billable. Don't skip anything the wizard flags with a red dot.

### Patient context (Steps 1–6)

| # | Step | What you capture |
|---|---|---|
| 1 | **Patient Consent** | Digital or manual consent capture for today's visit. |
| 2 | **Visit Setup** | Date of Service (DOS), Place of Service (POS), assigned provider, home health involvement, other facility involvement, and reason for visit. |
| 3 | **ROS / Subjective** | Review of Systems and subjective assessment. Voice-intake is available — speak the note and Medipyxis structures it for you. |
| 4 | **Vitals & Physical Exam** | Vital signs, height, weight, BMI, physical exam findings, labs, and diagnostic test results. |
| 5 | **Functional Status & ADLs** | Functional status and activities of daily living. |
| 6 | **Comorbidities & Risk Factors** | Comorbidities that affect healing (diabetes, PAD, immunosuppression, etc.). These feed downstream billing logic. |

### Wound documentation (Steps 7–10)

| # | Step | What you capture |
|---|---|---|
| 7 | **Wound Assessment** | Comprehensive wound assessment: type, precise anatomical location, stage, measurements (L × W × D in cm), tissue types (granulation, slough, eschar), and exudate. Tap the camera icon to attach the wound photo. |
| 8 | **Prehistoric Wound Data** | Four-week historical measurement series and previous treatments — establishes chronicity for billing. |
| 9 | **Interventions & Treatments** | Interventions performed today. This step captures the trigger points for the CPT and HCPCS codes that Step 15 will generate. |
| 10 | **Care Plan** | Healing prognosis, healing timeline, visit frequency, medical necessity factors, and treatment plan notes. |

### Orders, education, and notes (Steps 11–14)

| # | Step | What you capture |
|---|---|---|
| 11 | **Orders** | DME orders, lab orders, supplies, home health orders, and outbound referrals. |
| 12 | **Patient Education** | Education provided and the patient's response/understanding. |
| 13 | **Procedure Note** | Procedure note for every procedure performed during the visit. |
| 14 | **Medications** | Medication updates and new prescriptions. From here you can launch DoseSpot for electronic prescribing. |

### Coding, audit, and sign-off (Steps 15–17)

| # | Step | What you capture |
|---|---|---|
| 15 | **Billing Codes** | Auto-generated CPT/HCPCS billing codes for biller review before you sign the progress note. |
| 16 | **LCD Audit** | Medicare LCD compliance check for the visit. Any failed criterion blocks sign-off — fix it before continuing. |
| 17 | **Provider Attestation & Signature** | Final review of the generated narrative and your electronic signature. |

Detailed wizard walkthrough: [Visit Wizard V4 — complete walkthrough](../../modules/visit-wizard-ehr/start-a-visit.md).
Wound assessment specifics: [Wound assessment](../../modules/visit-wizard-ehr/wound-assessment.md).

<Compliance>
The **LCD Navigator V2** check runs in real time across every wound-care visit. If a required CMS criterion for the selected treatment isn't met, the badge turns red, the wizard blocks sign-off, and the LCD Dojo tile tells you exactly which field to fix. This is the difference between a billable note and a denied claim.
</Compliance>

## Step 4 — Send the note and finalize (10 min)

After Step 17 is complete, three save-state actions appear at the bottom of the wizard:

1. **Send via fax or email** — the button at the bottom lets providers fax or email the signed notes immediately after signing.
2. **Save as draft** — if you're not ready to complete and sign, save the visit as a draft. The wizard remembers exactly where you stopped and your inputs are persisted (autosave still runs every 3 minutes).
3. **Save wound case** — when you're ready to finalize, click **Save wound case** at the bottom-right. Medipyxis generates the final **Progress Note** in the Progress Note section of the patient dashboard, writes the billing record, and deducts inventory for any tissue applied.

## Step 5 — Housekeeping (5 min)

- Before signing out, check the **Action Items** card on your dashboard. If you have pending addendums, signatures, or sync retries from offline visits, finish them now.
- Log mileage with the **Mileage & Expenses** cockpit shortcut.

## Result

- One real Initial Evaluation signed, billing-ready, with photos, wound measurements, narrative, and an automatic LCD compliance audit.
- You know where to start every day (Patient Management → Wound Cockpit), where your calendar lives (Fleet Calendar), and where to chat your team (Team Chat).

## Next up

- [Visit Wizard V4 — complete walkthrough](../../modules/visit-wizard-ehr/start-a-visit.md)
- [LCD Navigator V2 — compliance guide](../../modules/visit-wizard-ehr/lcd-navigator.md)
- [Work offline](../../modules/visit-wizard-ehr/work-offline.md)
- [Add a photo later (addendum)](../../modules/visit-wizard-ehr/sign-off.md)
