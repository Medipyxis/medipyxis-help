---
id: visit-wizard-ehr-note-honesty-guardrails
title: Note honesty guardrails
module: visit-wizard-ehr
audience: [clinician, medical_director, clinical_manager, billing_admin]
roles: [clinician, medical_director, clinical_manager, admin]
type: concept
estimated_minutes: 3
last_reviewed: 2026-11-18
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-sign-off
  - visit-wizard-ehr-wound-assessment
  - visit-wizard-ehr-aprn-credential
  - visit-wizard-ehr-signature-timestamp
tags: [note-honesty, audit-defensibility, comorbidity, debridement, fabrication-guard, ICD-10]
---

# Note honesty guardrails

Your progress note prints only what you documented in the Visit Wizard. Where you did not enter a value, the note says so. It does not fill in clinical details for you.

This page covers wound area on debridement visits and condition type or stage. For the rest of the printed note, see How your progress note is written.

---

## Before you start

- You document wound-care visits in the Visit Wizard.
- Compliance or billing staff can use this page to see what a signed note will and will not contain.

---

## Wound area on a debridement visit

The debridement table on the note has two wound-area rows:

- **Wound area - pre-debridement** shows the wound area recorded at this visit. If the wound was not measured at this visit, the row prints **Not measured**.
- **Wound area - post-debridement** prints **Not measured**. The Visit Wizard does not have a field for a measurement taken after debridement, and the note never copies the pre-debridement area into this row.

There is no change to how you document the visit.

---

## Condition type or stage

If you recorded that a patient has a condition but did not specify its type or stage, the note names the condition only — for example, “Diabetes mellitus”, “Chronic kidney disease”, or “Malnutrition”. It does not add a type or stage that you did not enter.

If the type or stage matters for coding, document it in the Visit Wizard.

**Check the codes that Pull Codes adds.** **Pull Codes** suggests diagnosis codes from the conditions recorded on the visit. Before you submit, check each code against what was documented:

- Diabetes with no type documented gets **E11.9** (Type 2 diabetes mellitus without complications). This follows the standard coding rule: when the type of diabetes is not documented, the default is Type 2. Medipyxis does not warn you that the type was left blank.
- **Gestational Diabetes** and **Prediabetes** also get E11.9. Replace it with the correct code.
- Diabetes with a wound on the foot, toe, heel, ankle or metatarsal gets **E11.621** (Type 2 diabetes mellitus with foot ulcer), and diabetes with a wound on the leg, shin or calf gets **E11.622** (Type 2 diabetes mellitus with other skin ulcer).
- Kidney disease with a wound gets both **N18.9** (chronic kidney disease, unspecified) and **N18.6** (end stage renal disease), even when end stage renal disease was not documented.
- Malnutrition with a wound gets **E44.0** (moderate protein-calorie malnutrition), even when the severity was not documented.

---

## What the note will print

One rule covers these cases: the printed note states a clinical fact only when you entered it.

- **Wound measurements** print only when recorded at this visit. Otherwise the note says the wound was not measured at this visit, and change from baseline is not calculated.
- **Condition types and stages** print only when you documented them.

A signed note keeps the wording it had when it was signed.

If you later need to correct a signed note, add an addendum and choose its type, for example **Correction**, **Clarification**, or **Late entry**.

---

## What still needs your attention

These rules do not replace clinician review:

- Read the note before you sign. Anything in the signed note is yours.
- If a measurement or a type or stage is clinically true, enter it in the Visit Wizard so it can print.
