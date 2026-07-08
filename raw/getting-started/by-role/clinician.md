---
id: getting-started-clinician-first-hour
title: Clinician first hour
module: getting-started
audience: [clinician]
roles: [clinician, medical_director]
type: quickstart
estimated_minutes: 60
last_reviewed: 2026-07-08
app_route: /facility/{facility_uuid}/pm-clinician-dashboard
related:
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-assessment
  - fleet-calendar-my-day
tags: [onboarding, clinician, visit-wizard]
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
3. Your work autosaves continuously as you go — a dropped connection or a device switch won't lose it. (The web app is online-only; there is no separate offline mode.)

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
| 4 | **Objective Assessment** | Vital signs, height, weight, BMI, physical exam findings, labs, and diagnostic test results. |
| 5 | **Comorbidities & Risk Factors** | Comorbidities that affect healing (diabetes, PAD, immunosuppression, etc.). These feed downstream billing logic. |
| 6 | **Functional Status & ADLs** | Functional status and activities of daily living. |

### Wound documentation (Steps 7–10)

| # | Step | What you capture |
|---|---|---|
| 7 | **Wound Assessment** | Comprehensive wound assessment: type, precise anatomical location, stage, measurements (L × W × D in cm), tissue types (granulation, slough, necrotic, epithelial, eschar), and exudate. Tap the camera icon to attach the wound photo. |
| 8 | **Previous Treatment** | Prior treatments and historical measurements — establishes chronicity for billing. |
| 9 | **Treatment / Intervention** | Interventions performed today. This step captures the trigger points for the CPT and HCPCS codes that the Billing section generates. |
| 10 | **Care Plan** | Healing prognosis, healing timeline, visit frequency, medical necessity factors, and treatment plan notes. |

### Procedures, orders, meds, billing (Steps 11–14)

| # | Step | What you capture |
|---|---|---|
| 11 | **Procedures & Supplies** | Procedures performed and supplies/grafts used (scan the UIN for each unit). |
| 12 | **Orders & DME** | DME orders, lab orders, home health orders, and outbound referrals. |
| 13 | **Medication Management** | Medication updates and new prescriptions. Launch DoseSpot here for electronic prescribing. |
| 14 | **Billing** | Auto-generated CPT/HCPCS billing codes for biller review before you sign. |

### Education, audit, and sign-off (Steps 15–17)

| # | Step | What you capture |
|---|---|---|
| 15 | **Patient Education** | Education provided and the patient's response/understanding. |
| 16 | **LCD Audit & Review** | Medicare LCD compliance check for the visit. Unresolved items raise a warning to resolve before you sign. |
| 17 | **Provider Attestation** | Final review of the generated narrative and your electronic signature. |

Detailed wizard walkthrough: [Visit Wizard — complete walkthrough](../../modules/visit-wizard-ehr/start-a-visit.md).
Wound assessment specifics: [Wound assessment](../../modules/visit-wizard-ehr/wound-assessment.md).

<Compliance>
The **LCD Navigator** check runs in real time across every wound-care visit. If a required CMS criterion for the selected treatment isn't met, the badge turns amber/red and the LCD Dojo tile tells you exactly which field to fix. Unresolved items raise a warning to resolve before you **Sign & Lock** — the difference between a billable note and a denied claim.
</Compliance>

## Step 4 — Sign and finalize (10 min)

When you reach Provider Attestation:

1. **Save as draft** — if you're not ready to sign, leave the visit as a draft. The wizard autosaves continuously, so it remembers exactly where you stopped.
2. **Sign & Lock** — when the note is complete, sign and click **Sign & Lock**. If the service date doesn't match the appointment date, a prompt asks for a reason. Medipyxis generates the final **Progress Note**, writes the billing record, and deducts inventory for any tissue applied.
3. **Go to Billing** — a prompt then offers to hand the encounter to the billing team.

## Step 5 — Housekeeping (5 min)

- Before signing out, check the **Action Items** card on your dashboard. If you have pending addendums or signatures, finish them now.
- Log mileage with the **Mileage & Expenses** cockpit shortcut.

## Result

- One real Initial Evaluation signed, billing-ready, with photos, wound measurements, narrative, and an automatic LCD compliance audit.
- You know where to start every day (Patient Management → Wound Cockpit), where your calendar lives (Fleet Calendar), and where to chat your team (Team Chat).

## Next up

- [Visit Wizard — complete walkthrough](../../modules/visit-wizard-ehr/start-a-visit.md)
- [LCD Navigator — compliance guide](../../modules/visit-wizard-ehr/lcd-navigator.md)
- [Add a photo later (addendum)](../../modules/visit-wizard-ehr/sign-off.md)
