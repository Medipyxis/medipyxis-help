---
id: getting-started-clinician-first-hour
title: Clinician first hour
module: getting-started
audience: [clinician]
roles: [clinician, medical_director]
type: quickstart
estimated_minutes: 60
last_reviewed: 2026-10-29
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
## Step 3 — Move through the 17 wizard steps (35 min)

The wizard captures every field Medicare LCD policy needs to make the visit billable. Don't skip anything the wizard flags with a red dot.

### Patient context (Steps 1–6, plus 2B)

| # | Step | What you capture |
|---|---|---|
| 1 | **Consent & Attestation** | Patient consent: electronic signature, signed paper consent, or verbal consent. Consent can also be collected beforehand from the patient chart. |
| 2 | **Patient Context & Demographics** | Date and place of service, clinician and supervising provider, chief complaint, and insurance (view only here — edit it on the patient's **Billing & Auth** page). |
| 2B | **Clinical History Review** | Allergies and medical history. |
| 3 | **Review of Systems** | Body-system review; carries forward from earlier visits. |
| 4 | **Objective Assessment** | Vitals, vascular and perfusion exam, edema and circumference measurements, ABI/TBI, vascular studies, HbA1c, vascular follow-up plan. |
| 5 | **Functional Status & ADLs** | Mobility level and assistive devices, daily activities (ADLs), and how the wound limits activity, work, and social life. |
| 6 | **Comorbidities & Risk Factors** | Conditions that contribute to the wound or slow healing. |

### Wound documentation (Steps 7–10)

| # | Step | What you capture |
|---|---|---|
| 7 | **Wound Assessment** | Etiology, staging, dimensions, tissue percentages, location, exudate, pain, infection signs, photos, and **Treating / Monitoring** status. |
| 8 | **Previous Treatments** | Prior treatments with their dates, duration in weeks, and outcome; medical necessity statement; supporting documents. |
| 9 | **Interventions & Treatments** | Interventions performed per wound, procedure note, contributing factors. |
| 10 | **Care Planning** | Per-wound follow-up interval, next visit date, treatment plan narrative. |

### Orders, education, supplies, medication (Steps 11–14)

| # | Step | What you capture |
|---|---|---|
| 11 | **Orders & DME** | DME, labs, imaging, referrals, and home health orders, sent by fax or email. |
| 12 | **Patient Education** | Education library, care bundles, topics covered, patient understanding, next-visit goals. |
| 13 | **Procedure Supplies** | Final review of the procedures from Step 9, missing fields, procedure and compliance notes, supplies. For a graft, enter the unit's UIN in **Box UID/UIN**. |
| 14 | **Current Medication** | Active prescriptions, medication status, allergies, reconciliation, **DoseSpot** e-prescribing. |

### Billing, audit, and sign-off (Steps 15–17)

| # | Step | What you capture |
|---|---|---|
| 15 | **Billing & Documentation** | Per-wound and visit-level codes, modifiers, and the CMS-1500 claim preview. |
| 16 | **LCD Audit & Review** | Documentation gaps against the applicable LCD. |
| 17 | **Provider Attestation** | Attestation, provider title and NPI, and total E/M time. Then **Continue to Review** at the bottom of the wizard starts the final review, the progress note preview, and **Sign & Lock**. |

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
