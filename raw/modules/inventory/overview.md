---
id: inventory-overview
title: Inventory Management overview
module: inventory
audience: [clinician, admin]
roles: [vendor_coordinator, clinician, finance_ap, admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-07-08
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

Understand the areas of the Inventory Management hub and the key terms that apply across all of them.

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/dMsV07CNZjY"
          title="Graft & Skin Substitute Inventory for Mobile Wound Care: Catalog + Receiving"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
</div>
<span class="video-caption">Graft and skin substitute inventory tour: Product Catalog and Receiving workflow.</span>

![The Inventory Management hub showing its navigation tiles.](../../assets/inventory/inventory_hub.png)

*Inventory Management hub. Each tile opens its dedicated workspace.*

## Key terms

### UIN — Unique Inventory Number

A **UIN** (Unique Inventory Number) is a system-generated identifier assigned to a single physical unit of a product at the moment it is received into inventory. No two units share a UIN, even when they come from the same lot or shipment. The UIN travels with the graft or supply item through receiving, storage, and patient application, and is scanned in the **Procedures & Supplies** section of the Visit Wizard to link the unit to a clinical encounter.

### PAR level — Periodic Automatic Replenishment

A **PAR level** (Periodic Automatic Replenishment threshold) is the minimum quantity of a product that should be on hand at a facility. When stock falls to or below the PAR level, the system surfaces a replenishment alert so a `vendor_coordinator` or `admin` can reorder before a stockout occurs.

## The hub tiles

| Tile | Purpose |
|---|---|
| **Product Catalog** | Master list of every product your organization has configured (with a Products tab and a Vendors tab). Add products and edit SKU/HCPCS metadata here. |
| **Amniotic / Advance Treatment** | Receiving and management for amniotic membrane and advance-treatment products. |
| **Biologics / Matrix** | Receiving and management for biologic matrix products (HCPCS + manufacturer lot-format validation). |
| **Conservative Care Products** | Receiving and management for non-graft supplies (dressings, offloading, consumables). |
| **PRP** | Platelet-rich plasma kits. |
| **Ultrasonic Mist (UM)** | Ultrasonic mist therapy cartridges. |
| **IVR Tracking** | Tracks IVR submissions, outcomes, and vendor responses. See [IVR Tracking](./ivr-tracking.md). |
| **Clinician Inventory View** | A read-only, role-filtered view of what's available at a clinician's facility, without cost or AP data. |
| **Accounts Payable** | Vendor invoice intake, matching, payments, and disputes. See [Accounts Payable](./accounts-payable.md). |
| **Main Inventory** | The facility's stock and fulfillment view for what is physically on hand. |

<Note>
**PRP** and **Ultrasonic Mist** are their own categories alongside Amniotic, Biologics, and Conservative Care. Like conservative products, they flow through the standard deduction pipeline and do not require IVR prior authorization.
</Note>

## Other tools

- **FDA HCT/P Recall Lookup** — a lookup tool (not a hub tile) for checking received tissue products against FDA recall data.
- **Bulk operations** — import receiving/inventory records in bulk (see the Product Catalog and receiving workflows).

## How the tiles connect

1. A product is defined in **Product Catalog** with its SKU, HCPCS, and category.
2. A shipment is received through the appropriate category tile (**Amniotic / Advance Treatment**, **Biologics / Matrix**, **Conservative Care Products**, **PRP**, or **Ultrasonic Mist**), generating a UIN for each unit.
3. If a payer requires prior authorization for a graft, an IVR is tracked in **IVR Tracking**.
4. Received units appear in inventory and become selectable in the Visit Wizard's Procedures & Supplies section.
5. Vendor invoices for received shipments are handled in **Accounts Payable**.

## Related

Auto-rendered from `related:` in frontmatter.
