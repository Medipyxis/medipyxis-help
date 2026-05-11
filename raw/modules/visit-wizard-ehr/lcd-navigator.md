---
id: visit-wizard-ehr-lcd-navigator
title: Use the LCD Navigator V2 (ambient badge, Dojo tiles, copy bank)
module: visit-wizard-ehr
audience: [clinician]
roles: [nurse, np, md, medical_director]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-05-10
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-assessment
  - visit-wizard-ehr-sign-off
prerequisites:
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-assessment
tags: [LCD, V2, Medicare, compliance, ambient-badge, Dojo, copy-bank, NPWT, compression, offloading]
---

# Use the LCD Navigator V2

The LCD Navigator V2 is Medipyxis's embedded Medicare Local Coverage Determination guardrail. Unlike V1, which ran only at the final audit step, V2 is **ambient**: a real-time badge sits at the top of the Visit Wizard, refreshes on every save, and gives clinicians actionable guidance throughout the encounter — not just at sign-off.

## Before you start

- You are inside the Visit Wizard V4 for an active encounter.
- You understand the LCD Navigator cross-references documentation in real time against Medicare LCD requirements. It does not replace clinical judgment or your medical director's compliance review.

<Compliance>
A green LCD ambient badge means the documented data meets the Navigator's rule set. It does not guarantee Medicare reimbursement. Your organization's biller and medical director are responsible for final compliance determinations.
</Compliance>

---

## The ambient badge

The LCD ambient badge appears at the top of every section in the Visit Wizard. It refreshes on every section save (manual or autosave) and shows one of three states:

| Color | Meaning | What to do |
|---|---|---|
| **Green** | All Navigator checks pass. | Continue documenting. |
| **Amber** | One or more items need clinician action; the encounter can still be edited. | Click the badge to open the Dojo. |
| **Red** | A blocking item is missing or invalid. The encounter cannot be attested until resolved. | Click the badge, follow the link back to the offending section, fix it. |

![LCD ambient badge with auto-populated checklist items](../../assets/visit-wizard/09_lcd_audit_review.png)

*The LCD Navigator V2 panel — items auto-populated from prior sections are pre-checked; items requiring action are highlighted in amber.*

---

## Dojo tiles — intervention guidance

Click the ambient badge to open the **Dojo**. The Dojo presents one tile per Navigator item that needs attention. Each tile shows:

- The Medicare LCD requirement at stake.
- The wizard section where the missing or invalid data lives.
- A **Go to section** link that jumps you to the exact field.
- For items that can be resolved by inserting standardized language, a **Copy** button that pulls from the copy bank.

The Dojo refreshes as you resolve items. Items move from amber to green in real time once the underlying data passes the check.

![LCD Dojo tiles and the full checklist](../../assets/visit-wizard/10_lcd_audit_checklist.png)

*The Dojo with the full Navigator checklist; green items are satisfied by existing documentation, amber items require clinician action.*

---

## The copy bank (21 rules)

Expand the Dojo drawer to access the **copy bank**: 21 pre-written compliance statements that satisfy specific LCD rules across three intervention families:

| Family | Rules covered |
|---|---|
| **NPWT (Negative Pressure Wound Therapy)** | Indication, conservative-care prerequisite, wound bed status, duration limits, weekly assessment language, discontinuation criteria. |
| **Compression** | ABI documentation requirement, etiology confirmation (CVI vs. arterial), graduated compression rationale, contraindication review. |
| **Offloading** | Anatomic location justification, prior failed offloading, plantar pressure rationale, total-contact cast indications, footwear plan. |

To use the copy bank:

1. Click the badge to open the Dojo.
2. Find the tile for the item you want to satisfy.
3. Click **Copy** — the statement is inserted into the appropriate field in the linked section.
4. **Edit the inserted text to match your patient and your clinical reasoning.** The copy bank gives you a compliant starting point; it is not a substitute for individualized documentation.

<Warning>
Inserted copy must reflect the specific patient. Identical copy across patients can be flagged by Medicare auditors as templated documentation. Always personalize.
</Warning>

---

## The 14 Navigator checks

The Navigator evaluates documentation against the following items. Most are satisfied automatically when the underlying wizard section is complete.

| # | Checklist Item | How it is satisfied |
|---|---|---|
| 1 | **Medical Necessity Statement** | Auto-generated in section 13 (Billing & Documentation) from comorbidities, etiology, and procedure. |
| 2 | **4-week conservative care documented** | Documented in section 8 (Historic Measurements + Previous Treatments). |
| 3 | **Dimensions measured today** | Length, Width, Depth entered in section 7 (Wound Assessment). |
| 4 | **Failed prior therapies listed** | Documented in section 8. |
| 5 | **Appropriate HCPCS/CPT** | CPT codes generated in section 13. |
| 6 | **NCCI PTP + MUE edits pass** | Auto-checked against CMS edit tables for the selected CPT/modifier set. |
| 7 | **Modifier validity** | Modifiers (`25`, `59`, `KX`, `JW`, `JZ`) validated against CPT in section 13. |
| 8 | **POS match** | Place of Service in section 13 matches the facility type on record. |
| 9 | **Signature present** | Confirmed when Provider Attestation completes. Shows pending until then. |
| 10 | **Plan-of-care dates** | Next-visit interval and goal dates entered in section 10. |
| 11 | **ABI documented (compression cases)** | ABI entered in section 8 — the ABI gate enforces this before compression is selectable. |
| 12 | **Tissue percentages sum to 100** | Granulation / Slough / Eschar / Epithelial entered in section 7. |
| 13 | **Precise anatomical location** | Editable location field set in section 7. |
| 14 | **AI Disclaimer acknowledged (if AI used)** | Acknowledged on first AI draft per encounter. |

---

## Walk-through — resolving an amber item

1. **See the amber badge.** It sits at the top of the wizard regardless of which section is open.
2. **Click the badge.** The Dojo opens with one tile per outstanding item.
3. **Click Go to section** on the relevant tile. The wizard jumps to the exact field.
4. **Enter the missing data.** Save the section.
5. **Watch the badge refresh.** The item flips from amber to green; the Dojo updates.
6. **Continue documenting** — or, if all items are now green, proceed to section 14 (LCD Audit & Provider Attestation).

---

## Result

The LCD ambient badge is green, the Dojo shows no outstanding items, and the encounter is ready for **Provider Attestation** in section 14. The Navigator result — including which items were auto-satisfied, which required manual confirmation, and which used copy bank insertions — is recorded in the encounter audit log and is available to medical directors and billers for review.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Badge stays amber after saving the offending section | Section did not save (offline outbox pending, or validation failed) | Confirm the section navigator shows a checkmark; if offline, sync via [Work Offline](./work-offline.md). |
| Item 3 (**Dimensions measured today**) not pre-checked | Measurements were not saved in section 7 | Return to section 7, enter Length, Width, Depth, save. |
| Item 6 (**NCCI/MUE**) flagged red | A CPT/modifier combination triggers a CMS edit | Adjust the CPT or modifier in section 13 per your biller's guidance. |
| Item 8 (**POS match**) flagged | Place of Service does not match the patient's service location type | Correct the POS code in section 13 or contact your billing team. |
| Item 11 (**ABI documented**) flagged red | Compression is documented without an ABI on file | Enter ABI in section 8 — the ABI gate also blocks the compression order itself. |
| Copy bank inserted but item stays amber | The copy was inserted but the section was not saved | Save the section that received the inserted text. |
| **Attest & Sign** disabled with all items green | Item 9 (**Signature present**) is always pending pre-attestation | Sign on the attestation pad — item 9 resolves automatically as the signature lands. |

## Related

Auto-rendered from `related:` in frontmatter.
