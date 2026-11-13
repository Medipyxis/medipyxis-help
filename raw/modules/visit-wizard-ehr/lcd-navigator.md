---
id: visit-wizard-ehr-lcd-navigator
title: Use the LCD compliance status and review
module: visit-wizard-ehr
audience: [clinician]
roles: [clinician, medical_director]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-assessment
  - visit-wizard-ehr-sign-off
prerequisites:
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-assessment
tags: [LCD, Medicare, compliance, audit-review, wizard-status]
---

# Use the LCD compliance status and review

The Visit Wizard tracks Medicare Local Coverage Determination (LCD) compliance as you document. A live **LCD Compliance Status** bar at the top of the wizard summarizes how far along the encounter is, and each of the 17 steps shows its own status so you can see what still needs attention before you sign.

The bar tracks documentation progress. It does not guarantee Medicare reimbursement. Your biller and medical director are responsible for final compliance determinations.

---

## The LCD Compliance Status bar

At the top of the wizard, the status bar shows your overall progress:

- **Complete and Pending** — how many of the 17 steps are Complete and how many are still Pending (for example, "10 Complete • 7 Pending").
- **Flagged** — appears only when one or more steps are flagged, and shows how many.
- **Progress track** — a track that fills as sections are completed. Each complete step is a green segment, each flagged step is yellow, and each pending step is pink.
- **LCD badge** — one LCD badge is live in the bar's header: green (All clear), amber (with a flag count) or grey (checking). It re-checks about a second after you change the form.

---

## Per-step status

Each step shows one of five statuses:

- **Completed** (green) — the section is done.
- **Needs Attention** (red, with a red warning icon) — the section has a validation gap.
- **For Review** (yellow) — the step is flagged.
- **In Progress** (blue) — the step you have open.
- **Pending** (gray) — the section is not complete yet. This includes sections you have started.

Click a step to open it. Inside the step, **Mark as Complete** confirms the section is done; **Edit Again** reopens it.

There is no Flag button. A step shows For Review only when a saved draft already has it flagged.

---

## The 17 steps

The wizard is organized into 17 steps. The LCD compliance status reflects completion across all of them:

1. Consent & Attestation
2. Patient Context & Demographics
3. Review of Systems (ROS)
4. Objective Assessment
5. Functional Status & ADLs
6. Comorbidities & Risk Factors
7. Wound Assessment
8. Previous Treatments
9. Interventions & Treatments
10. Care Planning
11. Orders & DME
12. Patient Education
13. Procedure Supplies
14. Current Medication
15. Billing & Documentation
16. LCD Audit & Review
17. Provider Attestation

Step 14 appears as Current Medication in the step list (Medication Management in the progress-track tooltip). Step 2b, Clinical History Review, sits between Step 2 and Step 3 and is not one of the 17 tracked steps.

---

## Step 16 — LCD Audit & Review

Step 16 is the final compliance review step before attestation. It shows the coverage-policy findings for the visit: a patient-level card and a findings row for each wound. Step 16 stays pending until steps 1–15 are complete and you've reviewed the flagged items.

---

## Walk-through — resolve a step that needs attention

1. **Find the step** showing Needs Attention or Pending in the step list, or a pink segment in the progress track.
2. **Click the step** to open it.
3. **Complete the missing field**, then click **Mark as Complete**.
4. **Watch the status change** to green Completed.
5. **Continue** until the LCD Compliance Status bar shows 17 Complete and 0 Pending.
6. **Open step 16 (LCD Audit & Review)**, review the findings, then go on to step 17, **Provider Attestation**.

---

## Result

The LCD Compliance Status bar shows 17 Complete and 0 Pending. Step 16 is complete, and the encounter is ready for **Provider Attestation** in step 17. The compliance result is recorded with the encounter.

---

## Roadmap — planned LCD features

The following LCD capabilities are planned but not yet live in the current product.

- **Section badges** — an LCD badge at the top of every wizard section. Today the one badge sits in the LCD Compliance Status header.
- **Dojo tiles** — intervention guidance tiles that open when you click the badge, each linking to the section with the missing data.
- **Copy bank** — pre-written compliance statements that insert standardized language into the linked field.

When these ship, this page will be updated with the live workflow.

---

## Troubleshooting

- **A step stays red after saving.** A required field is still empty or invalid. Open the step and confirm every required field (marked with *) is filled.
- **Step 16 won't complete.** Steps 1–15 are not all complete, or a step is still flagged. Work through those steps first.
