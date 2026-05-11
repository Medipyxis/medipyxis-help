---
id: inventory-amniotic-biologics-conservative
title: Specialty catalog tiles — Amniotic, Biologics, and Conservative Care
module: inventory
audience: [clinician, admin]
roles: [vendor_coordinator, nurse, practice_admin]
type: concept
estimated_minutes: 4
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/inventory-management
related:
  - inventory-overview
  - inventory-product-catalog
  - inventory-main-inventory
  - inventory-ivr-tracking
prerequisites:
  - inventory-overview
  - inventory-product-catalog
tags: [inventory, amniotic, biologics, matrix, conservative care, graft, receiving, UIN, HCPCS, lot]
---

# Specialty catalog tiles — Amniotic, Biologics, and Conservative Care

Understand the three product-category tiles in the Inventory Management hub, what distinguishes each category, and how receiving a shipment through each tile generates UINs in Main Inventory.

![The Amniotic / Advance Treatment section showing a table of received amniotic products with lot numbers, tissue IDs, expiration dates, and UINs.](../../assets/inventory/amniotic_section.png)

*Amniotic / Advance Treatment tile — active units listed with UIN, lot, tissue ID, and expiration date.*

## Why categories are separated

Medipyxis separates inventory into three categories because each product class has different regulatory, billing, and clinical-documentation requirements. Keeping them in distinct tiles makes it faster to locate the right product during a visit and ensures the system enforces the correct validation rules at receiving time.

## Amniotic / Advance Treatment

**Amniotic / Advance Treatment** covers amniotic membrane allografts and similarly classified advance-treatment wound products. These products are typically sourced from tissue banks and are subject to tissue-tracking requirements under FDA 21 CFR Part 1271.

**What the receiving workflow captures:**

| Field | Notes |
|---|---|
| Tissue ID | Donor tissue identifier assigned by the tissue bank. Required for traceability. |
| Lot # | Manufacturer lot number, validated against the product's **LOT SUFFIX** in the Product Catalog. |
| Expiration Date | Printed on the package label. The system blocks use of expired units at the Visit Wizard. |
| Size | Graft dimensions (e.g., `2×3 cm`). |
| HCPCS | Pulled automatically from the Product Catalog entry; editable at receiving if the shipment packing list differs. |

![The Amniotic receiving form showing fields for Tissue ID, Lot Number, Expiration Date, Size, and HCPCS with a Receive button.](../../assets/inventory/amniotic_receiving.png)

*Amniotic receiving form. Each unit entered here generates one UIN in Main Inventory.*

<Compliance>
FDA 21 CFR Part 1271 requires that tissue products be traceable from donor to recipient. Always enter the Tissue ID exactly as printed on the tissue bank's packing slip. Do not leave it blank or enter a placeholder.
</Compliance>

## Biologics / Matrix

**Biologics / Matrix** covers extracellular matrix products, collagen-based wound fillers, and other biologic-category grafts. This category has the strictest data-entry requirements because biologic products are billed under HCPCS codes that are audited by Medicare and other payers.

**Additional requirements for biologics:**

- **HCPCS is mandatory.** The receiving form will not accept a unit without a valid HCPCS code. Confirm the code against your fee schedule before receiving the shipment.
- **Manufacturer lot format is enforced.** The lot number entered at receiving must match the pattern defined by the product's **LOT SUFFIX** in the Product Catalog. If the lot string does not match, the system rejects the entry and displays a format hint. This prevents transcription errors that can cause claim denials.
- **Insurance Verification Requests (IVRs) are commonly required** for biologic grafts before application. Use **IVR Tracking** to confirm payer authorization is in place before scheduling the procedure.

<Warning>
Do not receive a biologic shipment and apply the product before an IVR is approved unless the payer explicitly waives prior authorization. Applying without authorization is the leading cause of biologic claim denials. See [IVR Tracking](./ivr-tracking.md) for the authorization workflow.
</Warning>

## Conservative Care Products

**Conservative Care Products** covers non-graft wound-care supplies: dressings, topical agents, offloading devices, compression wraps, and similar consumables. These products generally do not require HCPCS codes, though you may optionally add one if the product is billed separately on a claim.

**Key differences from graft categories:**

- **Tissue ID is not collected** — conservative care products are not human-tissue products and have no traceability requirement under 21 CFR Part 1271.
- **HCPCS is optional** — supply items that are bundled into the visit E/M charge do not need a HCPCS code in inventory.
- **PAR-level alerts** are more commonly used for conservative care products because they are consumed in high volume. Set a PAR level on frequently used items so replenishment alerts fire before stockouts occur.

<Tip>
For high-volume supply items such as gauze or foam dressings, set a PAR level in the product's catalog entry. When on-hand quantity reaches the PAR level, the system surfaces a replenishment alert in the Main Inventory view so you can initiate a purchase order without a manual count.
</Tip>

## How receiving creates UINs

Regardless of category, every unit entered through a receiving form generates exactly one **UIN** (Unique Inventory Number) in Main Inventory. The UIN is the bridge between the physical item and its clinical and billing records. When a clinician selects a product at step 13 (**Procedure Supplies**) of the Visit Wizard, they scan or enter the UIN to record which specific physical unit was applied to the patient.

## Related

Auto-rendered from `related:` in frontmatter.
