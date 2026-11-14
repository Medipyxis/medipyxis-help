---
id: inventory-main-inventory
title: Main Inventory reference
module: inventory
audience: [clinician, admin]
roles: [vendor_coordinator, clinician, finance_ap, admin]
type: reference
estimated_minutes: 4
last_reviewed: 2026-07-08
app_route: /facility/{facility_uuid}/inventory-management
related:
  - inventory-overview
  - inventory-product-catalog
  - inventory-amniotic-biologics-conservative
  - inventory-ivr-tracking
  - inventory-accounts-payable
prerequisites:
  - inventory-overview
tags: [inventory, UIN, main inventory, active inventory, Visit Wizard, flat view]
---

# Main Inventory reference

Reference the columns in the Main Inventory flat view and understand how entering the UIN in the Visit Wizard's Procedure Supplies section links a physical unit to a patient encounter.

## What Main Inventory shows

**Main Inventory** is the authoritative, real-time list of every inventory unit across all product categories at your facility. A unit appears here as soon as it is received through a category tile (**Amniotic / Advance Treatment**, **Biologics / Matrix**, **Conservative Care Products**, **PRP**, or **Ultrasonic Mist**) and carries a status through its lifecycle — from received and available, through reserved and used, to transferred, returned, or damaged.

![The Main Inventory screen showing a searchable list of all active inventory units with filters for category, status, and expiration date.](../../assets/inventory/main_inventory.png)

*Main Inventory view. Use the search bar and column filters to narrow the list before selecting a unit.*

## Active Inventory flat view columns

![The active inventory flat view table showing columns UIN, LOT #, TISSUE ID, EXP DATE, SIZE, HCPCS, SKU, and STATUS with rows for multiple graft units.](../../assets/inventory/active_inventory_flat.png)

*Active Inventory flat view. Each row represents one physical unit identified by its UIN.*

| Column | Description |
|---|---|
| **UIN** | Unique Inventory Number — the system-generated identifier assigned to this specific physical unit at receiving. No two units share a UIN. This is the value entered in the **Box UID/UIN** field in the Visit Wizard. |
| **LOT #** | The manufacturer's lot number for this unit, as entered during receiving. Includes the product's LOT SUFFIX. |
| **TISSUE ID** | Donor tissue identifier assigned by the tissue bank. Populated for amniotic and advance-treatment products; blank for biologics and conservative care products that have no tissue-bank origin. |
| **EXP DATE** | Expiration date printed on the manufacturer's packaging. Units near or past expiration are flagged and blocked from selection in the Visit Wizard. Expiration is a date, not a status — an expired unit keeps its status (e.g. `Available`) but is blocked from use. |
| **SIZE** | Graft dimensions or package quantity (e.g., `2×3 cm`, `5g`), as entered during receiving. |
| **HCPCS** | Healthcare Common Procedure Coding System code associated with this unit. Pulled from the Product Catalog at receiving time and passed to the billing engine when the unit is applied. |
| **SKU** | Stock Keeping Unit — your organization's internal product code, inherited from the Product Catalog entry. |
| **STATUS** | Current state of the unit. See status values below. |

### STATUS values

Each unit carries one of the following statuses through its lifecycle:

| Value | Meaning |
|---|---|
| `Ordered` | Ordered from the vendor, not yet shipped. |
| `Shipped` | Shipped by the vendor, in transit / awaiting receipt. |
| `Available` | On hand and cleared for use. Selectable in the Visit Wizard. |
| `Unused` | Stocked and unused (treated the same as `Available` for the in-stock view). |
| `Reserved` | Held for an IVR or a scheduled wound-case visit; not yet used. |
| `Hold` / `Release` | Amniotic/biologics hold-and-release control for units pending clearance. |
| `Used` | Applied to a patient. The UIN links to the encounter record. |
| `Transferred` | Moved to a clinician or another location. |
| `Returned` | Returned to the vendor. |
| `Rejected` | Rejected at receiving or review. |
| `Damaged` | Damaged and removed from usable stock. |

<Compliance>
Graft units applied to a patient are recorded by UIN against the encounter, and discarded amounts are captured for CMS billing modifier JW (drug amount discarded) or JZ (no drug discarded). Document the reason whenever a unit is marked `Damaged` or `Rejected`.
</Compliance>

## How UIN entry and stock use work in the Visit Wizard

The Visit Wizard records each graft's UIN in **Procedure Supplies**. Taking the unit out of stock is a separate step, in **Interventions & Treatments**.

1. For a graft, **Procedure Supplies** shows a required **Box UID/UIN** field.
2. The clinician types the UIN from the product label into **Box UID/UIN**.
3. The UIN is saved with the visit, and **Generate Compliance Note** includes it in the draft compliance narrative. Medipyxis does not look the UIN up in Main Inventory, so check it against the label.
4. To take the unit out of stock, the clinician picks the product's lot in **Interventions & Treatments**: choose where it comes from under **Deduct from** (**Patient Episode Inventory**, **Clinician Inventory**, or **Main Inventory**), then the lot and quantity. Lots are listed soonest expiry first, and an expired lot is marked **Expired**. Products allocated to the patient through an IVR are labelled **From IVR**.
5. The quantity comes off inventory when the clinician clicks **Continue to Review**, not at **Sign & Lock**. Medipyxis first checks that the clinician has access to the facility, that the lot belongs to that facility and can be used from the chosen source, and that it has enough units left. If a check fails, the visit is still saved and a message says *Visit saved, but product use was not recorded*; fix the selection and save again. A lot's status changes to `Used` only when its last unit is used.

<Warning>
Enter the UIN and pick the lot for every graft you apply. **Box UID/UIN** puts the UIN in the note; the lot you pick is what takes the unit out of inventory.
</Warning>

<Note>
The UIN is printed on the product label. Type it into **Box UID/UIN** exactly as printed.
</Note>

## Related

Auto-rendered from `related:` in frontmatter.
