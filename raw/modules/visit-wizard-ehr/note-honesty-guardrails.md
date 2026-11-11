---
id: visit-wizard-ehr-note-honesty-guardrails
title: Note honesty guardrails
module: visit-wizard-ehr
audience: [clinician, medical_director, clinical_manager, billing_admin]
roles: [clinician, medical_director, clinical_manager, admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-08-31
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-sign-off
  - visit-wizard-ehr-wound-assessment
  - billing-diagnosis-code-validation
  - visit-wizard-ehr-aprn-credential
  - visit-wizard-ehr-signature-timestamp
tags: [note-honesty, audit-defensibility, comorbidity, debridement, fabrication-guard, ICD-10]
---

Medipyxis progress notes must document what the clinician actually observed and did — nothing more. Two guardrails landed the week of August 25, 2026 that remove long-standing places where the renderer was quietly filling clinical fields the clinician had not documented. If a Medicare reviewer reads one of your notes, everything on the page is now traceable back to something you entered.

## Before you start

- You document wound-care visits in the Visit Wizard.
- Your facility's compliance or billing team wants to know how the notes protect against fabrication findings.

---

## Guardrail 1 — No synthesized post-debridement measurement

**What used to happen.** On any visit with debridement, the renderer set the post-debridement wound area equal to the pre-debridement area and printed both, labeled as if they were separate measurements taken at separate times:

```
Wound area — pre  (auto: baseline)    12 cm²
Wound area — post (auto: this visit)  12 cm²
```

The wizard has never captured a post-debridement area anywhere in the flow, so the "post" row was a measurement that never happened, appearing on every debridement, on every note. Identical pre/post pairs on repeat visits are exactly the pattern a reviewer reads as fabricated measurement data — and identical **by construction** meant no clinician error could ever produce anything different.

**What the note does now.** The renderer emits the pre-debridement area only when it was documented, and prints **"Not measured"** for the post-debridement row rather than echoing a number that was never taken. The misleading `(auto: baseline)` / `(auto: this visit)` qualifiers are gone. The **"post > pre"** clinical safety check (which could never fire while the two values were forced equal) can now fire for real once a real post-debridement measurement is ever captured.

**What this means for your workflow.** No change to how you document. If you did not take a post-debridement measurement, the note will not claim you did.

## Guardrail 2 — No invented comorbidity type or stage

**What used to happen.** Where a clinician had documented that a patient carried a condition but had not specified its subtype, the note renderer filled the blank with a concrete clinical value:

- Diabetes without a documented type → **"Type 2"**.
- Kidney disease without a documented stage → **"Stage 3"**.
- Malnutrition without a documented type → **"Protein-Calorie"**.

Each of those subtypes is **ICD-10-determinative**: it picks E11 vs E10, N18.1 through N18.6, and E43 vs E44 respectively. A coder reading the note had no way to tell whether the subtype came from the record or from a default.

**What the note does now.** When the qualifier is not documented, the renderer emits the condition alone — "diabetes mellitus", "Chronic kidney disease", "Malnutrition" — with no invented type or stage. The signed note now says only what you actually said.

**What this means for your workflow.** If the subtype matters for coding, document it. When you leave it blank, the note will not silently pick one. The [diagnosis-code validation drawer](../billing/diagnosis-code-validation.md) flags the corresponding ICD-10 gap so the coder is not left guessing.

<Warning>
A signed note that carries an undocumented "Type 2" or "Stage 3" gives a payer a reason to deny — and, on audit, gives the reviewer a fabrication finding. If a subtype is clinically true, put it in the record; if it is unknown, leave it blank and the note will report it as unspecified.
</Warning>

---

## What "note honesty" means in Medipyxis

Both guardrails share one rule: **the printed note may never state a clinical fact that was not entered by the clinician.** That includes:

- Measurements — pre-treatment, post-treatment, and derived numbers must all trace back to a captured value, or the note prints "Not measured."
- Comorbidity types and stages — printed only when documented.
- Consent language, face-to-face certification, scale-marker paragraphs, and debridement judgment — the five other sites the audit gate enumerates as fabrication-risk. These are covered by the addendum flow: if any of them is corrected after signing, the addendum's **nature of amendment** must be recorded as `fabrication_remediation` with the tag naming the specific site.
- Charge lines — protected by the [zero-dollar charge guard](../billing/charge-master-and-zero-dollar-guard.md) so nothing bills at $0.00 rate by accident.

---

## What still needs your attention

Guardrails remove **silent** fabrication. They do not replace clinician review:

- Read every AI-drafted section before signing — anything left in it becomes part of the signed note.
- If a subtype (diabetes type, CKD stage, malnutrition type) matters for the case, document it in the wizard rather than relying on the coder to guess.
- If you notice a signed note that carries a value you did not enter, do **not** re-sign a corrected wizard visit — open the note from Progress Notes and use **Add Addendum**. The addendum will carry the correction, the amendment reason, and your signature, and it is what a Medicare reviewer expects to see.

## Related

Auto-rendered from `related:` in frontmatter.
