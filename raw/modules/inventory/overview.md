---
id: inventory-overview
title: Inventory Management overview
module: inventory
audience: [clinician, admin]
roles: [vendor_coordinator, nurse, finance_ap, practice_admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/inventory-management
related:
  - inventory-product-catalog
  - inventory-amniotic-biologics-conservative
  - inventory-ivr-tracking
  - inventory-main-inventory
  - inventory-accounts-payable
prerequisites: []
tags: [inventory, UIN, PAR, graft, biologics, IVR]
---

# Inventory Management overview

Understand the eight functional areas of the Inventory Management module and the key terms that apply across all of them.

![The Inventory Management hub showing eight tiles: Product Catalog, Amniotic / Advance Treatment, Biologics / Matrix, Conservative Care Products, IVR Tracking, Clinician Inventory View, Accounts Payable, and Main Inventory.](../../assets/inventory/inventory_hub.png)

*Inventory Management hub. Each tile opens its dedicated workspace.*

## Key terms

### UIN — Unique Inventory Number

A **UIN** (Unique Inventory Number) is a system-generated identifier assigned to a single physical unit of a product at the moment it is received into inventory. No two units share a UIN, even when they come from the same lot or shipment. The UIN travels with the graft or supply item through receiving, storage, and patient application, and is scanned at step 13 (**Procedure Supplies**) of the Visit Wizard to link the unit to a clinical encounter.

### PAR level — Periodic Automatic Replenishment

A **PAR level** (Periodic Automatic Replenishment threshold) is the minimum quantity of a product that should be on hand at a facility at any time. When stock falls to or below the PAR level, the system surfaces a replenishment alert so a **vendor_coordinator** or **practice_admin** can initiate a purchase order before a stockout occurs.

## The eight hub tiles

| Tile | Purpose | Primary users |
|---|---|---|
| **Product Catalog** | Master list of all products your organization has configured, including inactive items. Add new products and edit SKU/HCPCS metadata here. | `vendor_coordinator`, `practice_admin` |
| **Amniotic / Advance Treatment** | Receiving and management surface for amniotic membrane and advance-treatment graft products. | `vendor_coordinator`, `nurse` |
| **Biologics / Matrix** | Receiving and management surface for biologic matrix products, which require HCPCS codes and manufacturer lot format validation. | `vendor_coordinator`, `nurse` |
| **Conservative Care Products** | Receiving and management surface for non-graft supply items such as dressings, offloading devices, and wound-care consumables. | `vendor_coordinator`, `nurse` |
| **IVR Tracking** | Tracks Insurance Verification Requests (IVRs) from submission through payer decision. Drives prior-authorization compliance for high-cost grafts. | `vendor_coordinator`, `practice_admin` |
| **Clinician Inventory View** | A read-only, role-filtered view that lets clinicians see what products are currently available at their assigned facility without exposing cost or AP data. | `nurse` |
| **Accounts Payable** | Invoice and purchase-order reconciliation surface. Match received shipments to vendor invoices and track payment status. | `finance_ap`, `practice_admin` |
| **Main Inventory** | Flat, searchable list of every active inventory unit across all categories, keyed by UIN. The authoritative source for what is physically on-hand. | `vendor_coordinator`, `practice_admin`, `finance_ap` |

## How the tiles connect

Product configuration flows from left to right across the hub:

1. A product is defined in **Product Catalog** with its SKU, HCPCS, and category.
2. A shipment is received through the appropriate category tile (**Amniotic / Advance Treatment**, **Biologics / Matrix**, or **Conservative Care Products**), generating a UIN for each unit.
3. If a payer requires prior authorization, an IVR is filed and tracked in **IVR Tracking**.
4. Once authorized and received, units appear in **Main Inventory** and become selectable in the Visit Wizard.
5. Invoices for received shipments are reconciled in **Accounts Payable**.

<Note>
The **Clinician Inventory View** always reflects the current state of **Main Inventory** for the clinician's assigned facility. Clinicians cannot modify inventory records from this view.
</Note>

## Related

Auto-rendered from `related:` in frontmatter.
