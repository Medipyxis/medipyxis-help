---
id: vendor-portal-shipments
title: Create and track shipments
module: vendor-portal
audience: [vendor]
roles: [vendor_admin, vendor_user]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-08-28
app_route: /vendor/shipments
related:
  - vendor-portal-overview
  - vendor-portal-manage-catalog
  - vendor-portal-receiving
tags: [vendor portal, shipment, Excel, XLSX, CSV, lot, tracking, pre-staging]
---

Every shipment you send from the vendor portal pre-stages the receiving clinic's inventory queue. When boxes arrive, the clinic side is match-and-confirm — never re-entry. This page covers the two entry paths (bulk Excel upload and manual single shipment), the destination-grouping logic, and how discrepancies flow back to you after check-in.

## Before you start

- You need the `vendor_admin` or `vendor_user` role.
- Have your ship-out worksheet ready — one row per lot going out. Columns can be in any order; the mapper handles it.
- Every destination clinic must be tethered to your company. Untethered clinics show as a hard block on the upload preview.

## The shipments page

Open **Shipments** from the vendor sidebar. The page shows every shipment your company has created:

- **Status column:** `draft`, `shipped`, `in transit`, `received`, `flagged` (has an open discrepancy).
- **Lines column:** shipment line count and destination clinic.
- **Actions:** open the detail drawer, download packing slip, or void a draft.

Click any row to open its detail drawer with lines, tracking history, and any exception raised by the clinic.

## Bulk Excel upload

The upload flow (**Create → Upload shipment file**, route `/vendor/shipments/upload`) turns one worksheet into a shipment per destination clinic — matching how most vendor ops teams already work.

### Step 1 — Upload the file

Drop your `.xlsx` or `.csv` on the upload zone. The page reads the header row and tries to auto-map each column against a known field.

Recognized fields and their aliases:

| Field | Common column headers |
|---|---|
| `sku` | SKU, Item Code, Product Number, Item # |
| `product_name` | Product Name, Description, Item Description |
| `lot_number` | Lot, Lot Number, Batch, Batch Number |
| `expiration_date` | Exp Date, Expiration, Expiry, Expiration Date |
| `quantity` | Quantity, Qty, Units, Shipped Qty |
| `destination_clinic` | Ship To, Destination, Clinic, Facility |
| `external_ref` | PO Ref, PO Number, Reference, Order Ref |

Required for validation: **SKU, lot_number, quantity, destination_clinic.** Product name and PO ref are optional but strongly recommended.

### Step 2 — Confirm column mapping

If a header didn't auto-map, use the dropdown next to each column to pick the right field. The preview shows the first row's value under each column so you can verify at a glance.

### Step 3 — Review the preview

The preview groups rows by destination clinic. For each group, you see:

- Clinic name (as it appears in your tether list).
- Line count and total quantity.
- Any rows the validator rejected — usually SKU not found, lot format wrong, or destination clinic not tethered.

Rejected rows show a per-row reason. Fix the file and re-upload, or drop the rows and continue.

### Step 4 — Lot integrity check

The preview flags three lot-level integrity issues:

- **New lots** — this is the first time you've shipped this lot to any clinic. The catalog engine registers the lot on confirm.
- **Expiring soon** — any lot within 30 days of its expiration date. Consignment products under 30 days trigger an extra confirmation.
- **Duplicate lots in-file** — two rows with the same lot and expiration but different destinations. Legal, but flagged so you can verify it's intentional.

### Step 5 — Confirm the shipment

Click **Create shipments.** One shipment is created per destination clinic. Each shipment:

- Records the outbound lot, expiration, quantity, and destination.
- Pre-stages an `inventory_orders_v2` row plus `inventory_ordered_products_batches_v2` lines on the clinic side — their receiving queue is ready before your carrier hands off.
- Sends a notification to both the destination clinic's inventory admin and its assigned providers.

## Manual single shipment

When you're sending a one-off (patient-specific ship-out, urgent replacement), a full Excel upload is overkill.

1. From **Shipments**, click **New shipment (manual)**.
2. Pick the destination clinic.
3. Add lines one at a time — SKU, lot, expiration, quantity.
4. Optional: paste a tracking number and carrier.
5. **Save & ship.** The record follows the same pre-staging flow as bulk uploads.

## Save a column mapping template

If your ops team runs the same spreadsheet every week, save the mapping so future uploads skip the mapping step:

1. On the mapping page, click **Save mapping as template** and give it a name.
2. Next upload, pick the template from the dropdown above the mapping table. Every column pre-populates.

## Track a shipment

The shipment detail drawer has five sections:

- **Summary** — status, carrier, tracking number, expected delivery date.
- **Lines** — every SKU/lot with its shipped and received quantities. Discrepancies show a red bar.
- **Timeline** — created → shipped → in transit → received / flagged. Each transition shows who and when.
- **Discrepancies** — any exception the clinic flagged at check-in (short quantity, wrong SKU, damaged lot). Each has a photo and note.
- **Documents** — packing slip PDF (auto-generated) plus any attachments you or the clinic added.

## Discrepancies

When a clinic marks a discrepancy at receiving, the shipment moves to `flagged` on your side and a notification lands in your **Requests** inbox.

To resolve:

1. Open the shipment detail; read the discrepancy note and view the photo.
2. Take an action from the drawer:
   - **Accept and reship** — creates a new draft shipment for the missing quantity.
   - **Accept as short-ship** — the clinic receives the received quantity; the balance is written off.
   - **Dispute** — opens a thread in **Messages** with the clinic's inventory admin for reconciliation.

## Draft, void, and rerun

- Shipments in `draft` status can be edited or voided from the row menu.
- A voided shipment leaves an audit row and removes the pre-staged rows on the clinic side.
- Rerunning a failed bulk upload does not create duplicates as long as the source file's PO ref / external_ref is unchanged — the upload validator flags any row whose lot has already been shipped to the same destination.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| "Row 4: SKU not in your catalog" | SKU missing from vendor catalog | Add the SKU on the Catalog page first, then re-upload |
| "Row 12: destination clinic not tethered" | You haven't been onboarded with that clinic | Ask the clinic to send a tether invite, or invite them from Directory |
| Preview shows 0 valid rows | Header row mis-mapped or file has extra top rows | Re-check the mapping; delete banner rows above the header before saving |
| Clinic sees "no shipments pending" after upload | Notification delay or clinic filtering to a different tab | Have the clinic refresh **Receiving** and check the **Pending** tab |
| Duplicate shipment created | Two uploads with different PO refs but same lots | Void one draft before it ships |
