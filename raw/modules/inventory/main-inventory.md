---
id: inventory-main-inventory
title: Main Inventory reference
module: inventory
audience: [clinician, admin]
roles: [vendor_coordinator, nurse, finance_ap, practice_admin]
type: reference
estimated_minutes: 4
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/inventory-management
related:
  - inventory-overview
  - inventory-product-catalog
  - inventory-amniotic-biologics-conservative
  - inventory-ivr-tracking
  - inventory-accounts-payable
prerequisites:
  - inventory-overview
tags: [inventory, UIN, main inventory, active inventory, Visit Wizard, scanning, flat view]
---

# Main Inventory reference

Reference the columns in the Main Inventory flat view and understand how UIN scanning at Visit Wizard step 13 links a physical unit to a patient encounter.

## What Main Inventory shows

**Main Inventory** is the authoritative, real-time list of every active inventory unit across all product categories at your facility. A unit appears here as soon as it is received through a category tile (**Amniotic / Advance Treatment**, **Biologics / Matrix**, or **Conservative Care Products**) and is removed — or moved to a historical record — when it is applied to a patient, expired, or wasted.

![The Main Inventory screen showing a searchable list of all active inventory units with filters for category, status, and expiration date.](../../assets/inventory/main_inventory.png)

*Main Inventory view. Use the search bar and column filters to narrow the list before selecting a unit.*

## Active Inventory flat view columns

![The active inventory flat view table showing columns UIN, LOT #, TISSUE ID, EXP DATE, SIZE, HCPCS, SKU, and STATUS with rows for multiple graft units.](../../assets/inventory/active_inventory_flat.png)

*Active Inventory flat view. Each row represents one physical unit identified by its UIN.*

| Column | Description |
|---|---|
| **UIN** | Unique Inventory Number — the system-generated identifier assigned to this specific physical unit at receiving. No two units share a UIN. This is the value scanned or entered in the Visit Wizard. |
| **LOT #** | The manufacturer's lot number for this unit, as entered during receiving. Includes the product's LOT SUFFIX. |
| **TISSUE ID** | Donor tissue identifier assigned by the tissue bank. Populated for amniotic and advance-treatment products; blank for biologics and conservative care products that have no tissue-bank origin. |
| **EXP DATE** | Expiration date printed on the manufacturer's packaging. Units within 30 days of expiration display an amber indicator; expired units display a red indicator and are blocked from selection in the Visit Wizard. |
| **SIZE** | Graft dimensions or package quantity (e.g., `2×3 cm`, `5g`), as entered during receiving. |
| **HCPCS** | Healthcare Common Procedure Coding System code associated with this unit. Pulled from the Product Catalog at receiving time and passed to the billing engine when the unit is applied. |
| **SKU** | Stock Keeping Unit — your organization's internal product code, inherited from the Product Catalog entry. |
| **STATUS** | Current state of the unit. See status values below. |

### STATUS values

| Value | Meaning |
|---|---|
| `Available` | The unit is on-hand and cleared for use. Selectable in the Visit Wizard. |
| `Reserved` | The unit has been assigned to a scheduled patient encounter but has not yet been applied. |
| `Applied` | The unit was applied to a patient and is no longer in active inventory. The UIN links to the encounter record. |
| `Expired` | The unit's EXP DATE has passed. The system blocks selection in the Visit Wizard. Dispose of the unit per your facility's waste policy and mark it wasted. |
| `Wasted` | The unit was opened but not applied (e.g., contamination, size mismatch). Requires a waste reason entry for CMS-JW/JZ modifier compliance. |

<Compliance>
Wasted graft units must be documented with a reason before the status can be set to `Wasted`. This record supports billing modifier JW (drug amount discarded) or JZ (no drug discarded) as required by CMS policy effective January 2023.
</Compliance>

## How UIN scanning works at Visit Wizard step 13

Step 13 of the Visit Wizard is **Procedure Supplies**. This step links one or more physical inventory units to the clinical encounter being documented.

1. At step 13, the clinician sees a product search field and a **Scan UIN** button.
2. The clinician either scans the UIN barcode on the product packaging using a device camera or connected barcode reader, or types the UIN manually into the search field.
3. The system validates that the scanned UIN:
   - Exists in Main Inventory for the clinician's facility.
   - Has status `Available` or `Reserved`.
   - Has not passed its **EXP DATE**.
   - Has an IVR in `Approved` or `Agreed` status, if the product's category requires prior authorization.
4. If validation passes, the unit is added to the encounter's supply record. Its status updates to `Applied` when the visit is signed at step 17.
5. If validation fails, the system displays the specific reason (expired, wrong facility, no IVR) so the clinician can resolve it before proceeding.

<Warning>
Do not apply a product without scanning its UIN in the Visit Wizard. Applying a graft outside the Visit Wizard breaks the chain of custody between the physical unit and the claim, which can result in audit findings and claim denials.
</Warning>

<Note>
If a device camera is unavailable, the UIN is printed on the product label and can be entered manually. Manual entry follows the same validation rules as scanning.
</Note>

## Related

Auto-rendered from `related:` in frontmatter.
