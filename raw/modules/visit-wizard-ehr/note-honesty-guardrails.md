---
id: visit-wizard-ehr-note-honesty-guardrails
title: Note honesty guardrails
module: visit-wizard-ehr
audience: [clinician, medical_director, clinical_manager, billing_admin]
roles: [clinician, medical_director, clinical_manager, admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-11-11
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-sign-off
  - visit-wizard-ehr-wound-assessment
  - billing-diagnosis-code-validation
  - visit-wizard-ehr-aprn-credential
  - visit-wizard-ehr-signature-timestamp
tags: [note-honesty, audit-defensibility, comorbidity, debridement, fabrication-guard, ICD-10]
---

This page covers two places where the progress note used to fill in clinical details you had not entered: the post-debridement wound area, and the type or stage of a condition. In both places the note now prints only what you documented.

One gap remains, in the note's diagnosis codes. It is described under [Condition type or stage](#condition-type-or-stage). For the rest of the printed note, see [How your progress note is written](/modules/visit-wizard-ehr/progress-note/).

## Before you start

- You document wound-care visits in the Visit Wizard.
- Compliance or billing staff can use this page to see what a signed note will and will not contain.

---

## Post-debridement wound area

If you recorded a pre-debridement wound area, that number prints. If you did not record a post-debridement area, the note prints **Not measured** for the post-debridement row. The note does not copy the pre-debridement area into the post-debridement row.

There is no change to how you document the visit. If you did not take a post-debridement measurement, the note will not claim that you did.

---

## Condition type or stage

If you recorded that a patient has a condition but you did not specify its type or stage, the comorbidity list in the note names the condition only — for example, “Diabetes mellitus”, “Chronic kidney disease”, or “Malnutrition”. It does not add a type or stage that you did not enter.

**Check the diagnosis codes before you sign.** The diagnosis codes suggested by **Pull Codes** can still be type-specific when you left the type blank. For example, diabetes with a foot or leg wound is suggested as a Type 2 code, malnutrition as moderate protein-calorie malnutrition, and kidney disease with a wound includes end-stage renal disease. If you keep a suggested code, it prints in the note’s diagnosis table (**Diagnosis with ICD-10 Codes**, or the Plan of Care summary in the provider version of the note). Remove any code that does not match what you documented. A fix is being tracked.

If the type or stage matters for coding, document it in the Visit Wizard. Medipyxis does not currently flag a missing diabetes type, kidney disease stage, or malnutrition type.

---

## What the note will print

In the two places this page covers, the printed note states a clinical fact only when you entered it.

- **Debridement wound area** — the pre-debridement and post-debridement rows print a number only when you recorded it. Otherwise the row prints “Not measured”.
- **Condition types and stages in the comorbidity list** — printed only when you documented them. Diagnosis codes you keep from Pull Codes are the exception described above.

If you later need to correct a signed note, use an addendum and record the nature of the amendment.

---

## What still needs your attention

These rules do not replace clinician review:

- Read the note before you sign. Anything in the signed note is yours.
- If a measurement or a type/stage is clinically true, enter it in the Visit Wizard so it can print.
- Review the diagnosis codes and remove any that state a type or stage you did not document.

---
