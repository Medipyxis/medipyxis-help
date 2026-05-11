---
id: visit-wizard-ehr-wound-assessment
title: Complete the Wound Assessment (section 7)
module: visit-wizard-ehr
audience: [clinician]
roles: [nurse, np, md]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-lcd-navigator
  - visit-wizard-ehr-sign-off
prerequisites:
  - visit-wizard-ehr-start-a-visit
tags: [wound-assessment, EHR, measurements, tissue, exudate, LCD, Medicare, photo]
---

# Complete the Wound Assessment (section 7)

Document all active wounds in section 7 of the Visit Wizard V4, capturing anatomy, measurements, **tissue percentages by wound**, **precise anatomical location**, exudate, pain, and photos needed for Medicare LCD compliance and longitudinal wound tracking.

<Note>
In V4 the merged section 8 (Historic Measurements + Previous Treatments) is where the **ABI gate** triggers — if you intend to order compression, ABI must be on file before you can advance. See [Visit Wizard V4 overview](./overview.md).
</Note>

## Before you start

- You have completed steps 1–6 of the Visit Wizard for this encounter.
- You have a ruler or wound measurement tool available for length, width, and depth.
- A camera-enabled device is ready if photo upload is required by your facility protocol.

## Steps

### Open Wound Assessment

1. **Reach step 7.** Complete steps 1–6 in sequence. The step navigator highlights **Wound Assessment** when you arrive.

   ![Wound assessment selection screen showing existing wounds and an Add Wound button](../../assets/visit-wizard/16_wound_assessment_selection.png)

   *Step 7 opens with a list of wounds carried forward from the patient's chart. Click a wound to assess it or click **Add Wound** to document a new one.*

2. **Select the wound or add a new one.** Click an existing wound to open its assessment form, or click **Add Wound** if this is a new wound.

### Complete the wound assessment form

3. **Fill in identification and location fields.**

   | Field | Details |
   |---|---|
   | **Wound #** | Auto-assigned; read-only for existing wounds |
   | **Anatomic Location** | Editable, precise anatomic site (for example, `Right lateral malleolus`). The location field is now editable per-wound in V4. |
   | **Laterality** | `L` (Left) · `R` (Right) · `B` (Bilateral) |
   | **Onset Date** | Calendar picker |
   | **Duration (weeks)** | Auto-calculated from Onset Date; editable |

   ![Wound assessment form — top section showing location, etiology, and staging fields](../../assets/visit-wizard/17_wound_assessment_form.png)

   *The top section of the wound assessment form. Required fields are marked with an asterisk.*

   ![Wound assessment overview showing the full form layout before data entry](../../assets/visit-wizard/18_wound_assessment_top.png)

   *The wound assessment form in its initial state, before fields are populated.*

4. **Select Etiology.** Choose one value:

   | Value | Description |
   |---|---|
   | `DFU` | Diabetic Foot Ulcer |
   | `VLU` | Venous Leg Ulcer |
   | `PU` | Pressure Ulcer |
   | `Arterial` | Arterial insufficiency ulcer |
   | `Mixed` | Mixed arterial-venous etiology |
   | `Surgical` | Post-surgical wound |
   | `Traumatic` | Traumatic wound |
   | `Other` | Other — requires free-text clarification |

5. **Select Stage / Classification.** Choose the classification system appropriate to the wound type:

   | Value | Notes |
   |---|---|
   | `Wagner` scale | For diabetic foot ulcers (Wagner 0–5) |
   | `Stage I` | Non-blanchable erythema of intact skin |
   | `Stage II` | Partial thickness skin loss |
   | `Stage III` | Full thickness skin loss |
   | `Stage IV` | Full thickness tissue loss |
   | `Unstageable` | Obscured base — cannot determine depth |
   | `DTI` | Deep Tissue Injury — suspected |

6. **Enter measurements.**

   | Field | Unit | Notes |
   |---|---|---|
   | **Length (cm)** | centimeters | Greatest dimension |
   | **Width (cm)** | centimeters | Perpendicular to length |
   | **Depth (cm)** | centimeters | Deepest point |
   | **Area cm²** | square centimeters | Auto-calculated as Length × Width |

   Record **Tunneling** depth (cm) and direction, and **Undermining** using o'clock position and centimeters from the wound edge if present.

   ![Wound pain, notes, and lower assessment fields](../../assets/visit-wizard/19_wound_pain_notes.png)

   *The mid-section of the form showing tunneling, undermining, periwound condition, wound edges, and pain scale.*

7. **Document tissue composition.** The five fields must sum to exactly 100%.

   | Tissue Type | Field | Acceptable range |
   |---|---|---|
   | Granulation | **Granulation %** | 0–100 |
   | Slough | **Slough %** | 0–100 |
   | Necrotic | **Necrotic %** | 0–100 |
   | Epithelial | **Epithelial %** | 0–100 |
   | Eschar | **Eschar %** | 0–100 |

   ![Tissue composition fields showing the five percentage inputs](../../assets/visit-wizard/20_tissue_assessment_fields.png)

   *Tissue composition entry. The running total indicator turns red if the sum exceeds or falls below 100%.*

   <Warning>
   The **Next** button remains disabled until the five tissue percentages sum to exactly 100. Adjust each value until the total reads 100%.
   </Warning>

8. **Select Exudate Amount and Type.**

   | Field | Options |
   |---|---|
   | **Exudate Amount** | `None` · `Scant` · `Small` · `Moderate` · `Large` · `Copious` |
   | **Exudate Type** | `Serous` · `Serosanguineous` · `Sanguineous` · `Purulent` |

9. **Record Odor.** Toggle **Odor** to `Y` or `N`.

10. **Select Periwound condition.**

    | Value | Clinical meaning |
    |---|---|
    | `Intact` | No periwound changes |
    | `Macerated` | Softening from prolonged moisture |
    | `Erythematous` | Redness around wound margins |
    | `Callus` | Hyperkeratotic periwound tissue |
    | `Hyperpigmented` | Post-inflammatory darkening |

11. **Select Wound Edges.**

    | Value |
    |---|
    | `Attached` |
    | `Epibole` |
    | `Rolled` |

12. **Rate Pain.** Drag the slider or type a number for **Pain 0–10** (0 = no pain, 10 = worst imaginable pain).

13. **Complete the Infection Signs checklist.** Check all that apply from the infection indicators list (erythema, warmth, swelling, purulent drainage, malodor, increased pain, fever, lymphangitis, cellulitis). Leave unchecked if absent.

14. **Upload a photo.** Click **Photo Upload**, then select a photo from the device camera or library. At least one photo per wound per visit is recommended by most facility protocols.

    <Compliance>
    Many Medicare LCDs require photographic documentation at each visit for advanced biological therapy (graft) coverage. Confirm your facility's protocol and upload the photo before leaving the patient's location.
    </Compliance>

15. **Click Save Wound.** The wound record saves and you return to the wound list. Repeat steps 2–14 for each additional wound.

16. **Click Next** to advance to step 8, **Previous Treatments**, once all wounds are documented.

---

## Validation

If any required field is missing or tissue percentages do not sum to 100, the wizard displays inline validation errors.

![Wound assessment validation errors highlighting incomplete required fields](../../assets/visit-wizard/08_wound_assessment_validation.png)

*Validation state: red outlines indicate fields that must be resolved before advancing.*

---

## Result

Each wound has a saved assessment record with measurements, tissue composition, exudate, pain score, infection status, and at least one photo. On save, the **LCD audit** fires automatically and refreshes the [LCD ambient badge](./lcd-navigator.md) — items like **Dimensions measured today**, **Tissue percentages sum to 100**, and **Precise anatomical location** flip from amber to green as soon as the data is on file.

<Tip>
If you document more than one wound, use the wound thumbnail strip at the top of step 7 to switch between wounds without losing your place in the form.
</Tip>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **Next** button disabled | Tissue composition does not sum to 100% | Check the running total indicator and adjust percentages |
| **Next** button disabled | Required field missing | Scroll up — missing fields are outlined in red |
| Photo upload fails | File size exceeds 10 MB or unsupported format | Reduce image size or use JPEG/PNG format |
| Area cm² not updating | Length or Width field is empty | Enter both **Length (cm)** and **Width (cm)** values |

## Related

Auto-rendered from `related:` in frontmatter.
