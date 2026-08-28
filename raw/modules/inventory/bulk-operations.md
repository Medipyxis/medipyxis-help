---
id: inventory-bulk-operations
title: Run bulk inventory workflows
module: inventory
audience: [clinician, admin]
roles: [inventory_manager, vendor_coordinator, admin]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-08-28
app_route: /inventory-management/bulk
related:
  - inventory-overview
  - inventory-main-inventory
  - inventory-product-catalog
  - inventory-amniotic-biologics-conservative
tags: [inventory, bulk upload, shipment, receiving, CSV, XLSX]
---

Bulk Inventory is the single landing page for every batch workflow — shipment logging, vendor receiving, manual receipt, and provider assignment. Each card opens a focused flow so you don't have to hunt through the main catalog for the right modal.

## Before you start

- Open **Inventory Management → Bulk** to reach `/inventory-management/bulk`. To land on a category-specific variant, use `/inventory-management/bulk/{category}` where category is `amniotic`, `biologics`, or `conservative`.
- You need the `inventory_manager`, `vendor_coordinator`, or `admin` role for shipment and receiving. Provider assignment is available to any role with **In Stock** access.
- Have your vendor's packing slip or invoice on hand (CSV or XLSX). Templates are provided from each modal.

## The four workflows

| Card | What it does | When to use it |
|---|---|---|
| **Upload Shipment (from vendor)** | Mark items on an existing order as shipped | The vendor confirmed shipment and sent a packing list |
| **Upload Receiving (from vendor)** | Record items received against an order. Matched lines auto-stock into **In Stock** | Physical delivery arrived and you're logging what came in |
| **Manual Receive (no CSV)** | Receive a single ordered item by hand | Partial delivery, or the vendor didn't send a packing slip |
| **Bulk Assign to Provider** | Hand off facility-owned stock to a provider | Provisioning a new provider or moving inventory to a mobile bag |

## Upload Shipment

Use this when the vendor confirms the order shipped but the boxes haven't arrived yet.

1. Click **Upload Shipment**. The modal opens with a template download link.
2. Download the template. It's pre-filled with sample rows for the current category.
3. Fill in one row per shipped line — SKU, quantity, ship date, tracking number.
4. Upload the file. The modal validates each row and highlights errors before the write.
5. Confirm. The order status flips to **Shipped** and shipment lines are recorded in the audit trail.

## Upload Receiving

Use this when the physical delivery arrives and you're logging what actually came in.

1. Click **Upload Receiving.** Pick the order the receipt is against.
2. Download the receiving template — it's pre-populated with the order's line items, so you only correct discrepancies.
3. Fill in received quantity, lot number (for amniotic/biologics), and expiry date. Leave a row's quantity as zero if that item did not arrive.
4. Upload. The modal shows a preview split into **Perfect matches** and **Exceptions** (short quantity, wrong SKU, expired lot).
5. Confirm.
   - **Perfect matches** land directly in **In Stock** — no operator review.
   - **Exceptions** appear in the **Receiving History** tab under **Needs review** so someone can reconcile before the items are stocked.

## Manual Receive

Use for partial deliveries or when there's no packing slip to work from.

1. Click **Manual Receive.** The picker opens with your active orders filtered by category.
2. Pick the order, then the specific line item.
3. Enter the received quantity, lot, and expiry.
4. Save. The item lands in **In Stock** and the order's remaining quantity is updated.

## Bulk Assign to Provider

Use to hand off facility-owned stock to a provider — for example, restocking a mobile clinician's bag before a route.

1. Click **Bulk Assign to Provider.** The page routes to **In Stock** with the assign panel open.
2. Pick items from the on-hand list.
3. Pick the destination provider from the dropdown.
4. Confirm. Each assigned item appears on that provider's dashboard for them to accept in **Received**.

## How the flows fit together

- **Shipment** and **Receiving** work in sequence against the same order — shipment first when the vendor confirms, receiving second when boxes arrive.
- **Manual Receive** is a shortcut around **Upload Receiving** when a CSV is overkill. Both write to the same **In Stock** and **Receiving History**.
- **Bulk Assign to Provider** operates on stock that already made it into **In Stock**, regardless of which of the three receiving flows put it there.

## Templates

Every modal offers a **Download template** link. Templates are category-aware and vary by workflow:

| Template | Filename pattern |
|---|---|
| Vendor receiving (amniotic/biologics) | `ivr_receiving_amniotic_template.xlsx` or `ivr_receiving_biologics_template.xlsx` |
| Vendor pre-filled receiving | `vendor_template_{order-name}.xlsx` |
| Conservative receiving | Category-neutral shipment/receiving template |

The pre-filled vendor template pulls the order's line items into the sheet — you only correct discrepancies instead of typing every SKU by hand.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| "Row 4: SKU not found" | SKU in the file doesn't match the master catalog | Verify the SKU in **Product Catalog**; correct the file and re-upload |
| Receipt landed in **Needs review** instead of **In Stock** | Quantity, lot, or expiry mismatched the order | Open **Receiving History → Needs review** and reconcile the row |
| Template columns don't match my vendor's format | Templates are Medipyxis-specific | Map vendor columns to the template offline; the upload only reads the Medipyxis column headers |
| Manual receive picker is empty | No active orders in the current category | Confirm the order isn't fully received or archived; switch categories if needed |

## Related

- **[Main Inventory](./main-inventory.md)** — the on-hand view and where stock lands after receiving.
- **[Product Catalog](./product-catalog.md)** — the SKU master that bulk workflows validate against.
- **[Amniotic / Biologics / Conservative](./amniotic-biologics-conservative.md)** — category-specific fields (lot format, expiry, HCPCS).
