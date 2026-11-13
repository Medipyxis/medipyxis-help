---
id: inventory-bulk-operations
title: Run bulk inventory workflows
module: inventory
audience: [clinician, admin]
roles: [inventory_manager, vendor_coordinator, admin]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-11-11
app_route: /inventory-management/bulk
related:
  - inventory-overview
  - inventory-main-inventory
  - inventory-product-catalog
  - inventory-amniotic-biologics-conservative
tags: [inventory, bulk upload, shipment, receiving, CSV, XLSX]
---

Bulk Inventory is the single landing page for every batch workflow — shipment logging, vendor receiving, manual receipt, and provider assignment. Each card opens a focused flow or points you to the right tab.

## Before you start

- Bulk Inventory has no menu link yet. Open it by going to `/inventory-management/bulk/amniotic`, `/inventory-management/bulk/biologics`, or `/inventory-management/bulk/conservative` in your Medipyxis web address. A fix to add a menu link is being tracked.
- Use one of those category addresses. At `/inventory-management/bulk` with no category, **Upload Shipment** and **Upload Receiving** stay off.
- Anyone whose role has the **Inventory** feature can open Bulk Inventory.
- Have your vendor's packing slip or receiving report on hand (CSV or XLSX). Templates are provided from each modal.

## The four workflows

- **Upload Shipment (from vendor)** — mark items on an existing order as shipped, from a packing slip. Use it when the vendor confirmed shipment.
- **Upload Receiving (from vendor)** — record items received against an order. Matched lines auto-stock into the category's Active Inventory. Use it when the delivery arrives.
- **Manual Receive (no CSV)** — receive items by hand. Use it for partial deliveries or when the vendor sent no packing slip.
- **Bulk Assign to Provider** — hand off facility-owned stock to a provider.

The Manual Receive and Bulk Assign to Provider cards currently open the category page on its **Products** tab, not on the tab they name. Switch to **Receiving History** or **Active Inventory** yourself, as described below.

## Upload Shipment

Use this when the vendor confirms the order shipped but the boxes haven't arrived yet.

1. Click **Upload Shipment** and pick the order. Orders that are pending or partially shipped are listed.
2. Under **Sample Template**, click **Download**.
3. Fill in one row per shipped line: SKU, lot number, expiration date, and quantity. Amniotic and biologics rows also need the order ID, tissue ID, size, and HCPCS/Q code.
4. Click **Choose File** and upload it.
5. The summary reads "Shipment recorded: N item(s) marked as shipped". The items are now Shipped and show up in receiving once the vendor delivers.

## Upload Receiving

Use this when the physical delivery arrives and you're logging what actually came in.

1. Click **Upload Receiving** and pick the order. Orders that are shipped or partially shipped are listed.
2. Download the sample template from the modal, or download the order's pre-filled template with **Download Purchase Order Template** on the category's **Orders** tab.
3. Fill in what arrived: SKU, lot number, and quantity (amniotic and biologics also need the order ID, tissue ID, expiration date, size, and HCPCS/Q code). A row with quantity 0 adds nothing; items you did not receive count as partial or missing.
4. Upload the file. The summary shows either "Received and stocked: N item(s) now in In Stock" or "Received with issues", with matched, partial/missing, and exception counts.
5. Matched items are stocked into the category's Active Inventory at once. Partial and exception items wait for review on the **Receiving History** tab, where you use **Resolve Exceptions**. Expired items are treated as exceptions.

## Manual Receive

Use for partial deliveries or when there's no packing slip to work from.

1. Open the category tile and choose the **Receiving History** tab, then click **Manual Receive**.
2. Choose **Receive Against Purchase Order** (shipped or partially shipped orders for that category) or **Direct to Main Stock**.
3. Click **Add Line** and enter the lot, expiration date, and quantity received (plus tissue ID, size, and HCPCS/Q code for amniotic and biologics).
4. Click **Create Receive**. A matched receipt is stocked at once; otherwise it waits as Pending Approval on the Receiving History tab.

## Bulk Assign to Provider

Use to hand off facility-owned stock to a provider — for example, restocking a mobile clinician's bag before a route.

1. Open the category's **Active Inventory** tab.
2. Select the lots with their checkboxes. Only facility stock that is Available or Unused and not already assigned can be assigned.
3. Click **Assign to Provider**, use **Search providers...** to find the provider, and confirm.
4. Assigned conservative items appear in the provider's **My Inventory**, where they accept them with **Received**.

## How the flows fit together

- **Shipment** and **Receiving** work in sequence against the same order — shipment first when the vendor confirms, receiving second when boxes arrive.
- **Manual Receive** is a shortcut around **Upload Receiving** when a file is overkill. Both feed the same Active Inventory and Receiving History.
- **Bulk Assign to Provider** works on stock that is already in Active Inventory, whichever receiving flow put it there.

## Templates

- **Amniotic and biologics receiving** — `ivr_receiving_amniotic_template.xlsx` or `ivr_receiving_biologics_template.xlsx`.
- **Pre-filled order template** — `vendor_template_{order-name}.xlsx`, from Download Purchase Order Template on the Orders tab. It pulls the order's line items into the sheet, so you only correct discrepancies.
- **Conservative** — `order_sent_sample.xlsx` for shipments and `order_received_sample.xlsx` for receiving.

## Troubleshooting

- **"Validation failed: N product(s) not found in order."** — a SKU in the file isn't on the order. Check it in Product Catalog, fix the file, and re-upload.
- **The receipt went to Receiving History instead of stock** — quantity, lot, or expiry did not match the order. Open the row on Receiving History and use Resolve Exceptions.
- **Template columns don't match my vendor's format** — the templates are Medipyxis-specific. Map the vendor's columns to the template before uploading.
- **Upload Shipment and Upload Receiving are greyed out** — you opened Bulk Inventory without a category. Use one of the category addresses above.

## Related

- **[Main Inventory](/modules/inventory/main-inventory/)** — the Active Inventory tab and where stock lands after receiving.
- **[Product Catalog](/modules/inventory/product-catalog/)** — the product list that bulk workflows check against.
- **[Amniotic / Biologics / Conservative](/modules/inventory/amniotic-biologics-conservative/)** — category-specific receiving fields.
