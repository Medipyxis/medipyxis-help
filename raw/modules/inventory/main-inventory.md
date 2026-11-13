---
id: inventory-main-inventory
title: Main Inventory reference
module: inventory
audience: [clinician, admin]
roles: [vendor_coordinator, clinician, finance_ap, admin]
type: reference
estimated_minutes: 4
last_reviewed: 2026-11-11
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

The **Main Inventory** tile on the Inventory Management hub opens **Reorder Requests**, the fulfillment queue for restocking requests. On-hand stock lives on each category tile's **Active Inventory** tab. This page covers both, and how stock is used in the Visit Wizard.

## What the Main Inventory tile opens

The tile opens **Reorder Requests** — "Provider-initiated requests for restocking below-PAR or expiring items".

- **Category tabs** — Amniotic, Biologics, and Conservative.
- **New Request** — create a restocking request.
- **Search and status filter** — All Status, Pending, Approved, Denied, Completed, or Cancelled.
- **Approve Selected** and **Deny Selected** — act on several checked requests at once. Denying asks for a reason.

Each pending request has these row actions:

- **Acknowledge** — marks the request Approved.
- **Reject** — asks for a reason and marks the request Denied.
- **Order** — marks the request Approved and opens that category's page so you can order from the vendor.
- **Fulfill** — marks the request Completed. It does not move any stock; transfer or assign the items yourself on the category's Active Inventory tab.

## The Active Inventory tab

To see what is on hand, open a category tile (for example **Biologics / Matrix**) and choose the **Active Inventory** tab. Stock is listed by lot, not by individual unit.

- **Summary cards** — Products, Total Units, Expiring ≤30d, and Low Stock. The Low Stock count currently always shows 0; a fix is being tracked.
- **Available / Patient Allocated / Clinician Transferred** — on Amniotic and Biologics only, switch between facility stock, lots allocated to a patient, and lots transferred to a clinician.
- **Search** — by lot number; on Amniotic and Biologics also by tissue ID, HCPCS code, or order ID.
- **Grouped / Flat** — Grouped shows one row per product (Product Name, SKU, Qty On Hand, Earliest Exp); Flat shows one row per lot.
- **Expiration filter** — All Expiration, or Expiring ≤30d down to ≤10d.

Flat view columns: **Lot #**, **Tissue ID** (Amniotic and Biologics only), **Exp Date**, **Size** and **HCPCS** (Amniotic and Biologics only), **SKU**, **Status**, and **Actions**. In the Patient Allocated and Clinician Transferred views an extra column shows who the lot is allocated or transferred to.

Size is entered at receiving. HCPCS is filled in from the Product Catalog at receiving time. SKU comes from the Product Catalog entry.

### Row actions

- **Transfer**, **Allocate**, **Adjust**, **Used**, and **Unused** appear on Available lots.
- **Reallocate** moves a patient-allocated lot to a different patient, as long as none of it has been used.
- **Assign to Provider** appears when you select lots with their checkboxes.
- **Adjust** requires a reason: Inventory Count, Damaged, Expired, Lost, or Other. Choosing Damaged marks the lot Damaged.

### Status values

A lot shows one of these statuses: Ordered, Shipped, Available, Unused, Reserved, Hold, Receive, Used, Transferred, Returned, Rejected, or Damaged. Reserved means held for an IVR or a wound-case visit. Unused is stocked and unused, and counts as in stock alongside Available.

Expiration is a date, not a status — an expired lot keeps its status (for example Available).

## How stock is used in the Visit Wizard

1. In the **Interventions & Treatments** step (Step 9), the clinician picks the product.
2. The **Select Lot** list shows each lot with its quantity available and expiration, soonest-expiring first. Lots that expire within 30 days are flagged.
3. The clinician sets the **Quantity** and clicks **Confirm Selection**. Expired lots cannot be used.
4. When the clinician clicks **Continue to Review**, the selected quantities are deducted from stock. If that step fails, the clinician sees "Visit saved, but product use was not recorded"; saving again is safe.

Conservative Care products come from the facility's main stock and the stock assigned to the patient's provider. Grafts come from main stock, clinician stock, and lots already allocated to the patient.

For a skin-substitute application, the **Procedures & Supplies** step also asks for the tissue ID / lot number, expiration date, and **Box UID/UIN**, typed from the package. That step has a wastage field to record the discarded amount. Under CMS 2026 rules discarded skin substitute is not separately payable, so the amount is captured for inventory audit, not for billing.

Record every graft you apply in the Visit Wizard, so the product use is tied to the visit.
