---
id: vendor-portal-shipments
title: Create and track shipments
module: vendor-portal
audience: [vendor]
roles: [vendor_admin, vendor_user]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-11-11
app_route: /vendor/shipments
related:
  - vendor-portal-overview
  - vendor-portal-manage-catalog
  - vendor-portal-receiving
tags: [vendor portal, shipment, Excel, XLSX, CSV, lot, tracking, pre-staging]
---

A shipment you create in the vendor portal is an advance ship notice: it tells the receiving clinic what is on its way, lot by lot, so the clinic can check it in without typing it again. This page covers the Shipments list, the bulk Excel upload, and what you see after the clinic checks a shipment in.

## Before you start

- You are signed in to the vendor portal. Every vendor role can open **Shipments**.
- Every destination clinic must be connected to your company, and every SKU must be in your catalog.

## The Shipments page

Open **Shipments** from the vendor sidebar (`/vendor/shipments`).

- **Cards** at the top count shipments **In transit**, **Received (30d)**, and **Open discrepancies**. **Avg transit** does not show a figure yet.
- **Tabs**: All, In transit, Received, Discrepancy.
- **Columns**: Shipment, Clinic, Carrier / tracking, Expected, Lines, and Status (`created`, `in transit`, `received`, `discrepancy`, or `cancelled`).

Click a row to open the shipment. Shipments are created by the bulk upload below, or when you click **Ship** on a clinic request (see [Respond to clinic requests](/vendor-portal/respond-to-requests/)).

## Bulk Excel upload

Click **Bulk upload (Excel)** (`/vendor/shipments/upload`). One spreadsheet becomes one shipment per destination clinic.

1. **Upload the file.** Drop an `.xlsx`, `.xls`, or `.csv` file on the upload area. **Download template** gives you a starting spreadsheet.
2. **Check the column mapping.** Each column header is matched to a field by name. The mapping table shows the spreadsheet header, the field it matched, the first row's value, and whether it matched. A column with an unrecognized header is ignored; rename the header in your file and upload it again.
3. **Review the validation results.** Rows that pass are counted as OK. Rejected rows are listed with a reason: SKU not in your catalog, missing lot number, invalid quantity, missing destination clinic, or a destination that is not a connected clinic. **Download rejected rows** saves them to a spreadsheet.
4. **Check the grouping preview.** It shows how many lines become how many shipments, one per clinic.
5. **Check lot and expiry.** The panel flags lots that expire within 90 days and rows that repeat the same lot, SKU, and clinic.
6. Click **Create shipments**.

Recognized column headers:

| Field | Example headers |
|---|---|
| SKU (required) | SKU, Item Code, Product Number, Item # |
| Product name | Product Name, Description, Item Description |
| Lot number (required) | Lot, Lot Number, Batch, Batch Number |
| Expiration date | Exp Date, Expiration, Expiry, Expiration Date |
| Quantity (required) | Quantity, Qty, Units, Shipped Qty |
| Destination clinic (required) | Ship To, Destination, Clinic, Facility |
| Reference (optional) | PO Ref, PO Number, Reference, Order Ref |

The destination clinic must match the clinic's name as it appears on your Clinics page.

## What the clinic sees

Each shipment you create is staged in the clinic's receiving queue, and the clinic is notified. Its staff check the shipment in from their clinical inventory view. See [Receive a vendor shipment](/vendor-portal/receiving/).

## The shipment page

A shipment's page shows the clinic, carrier and tracking number, and the number of lines and units. The lines table lists each SKU, product, lot, expiration date, quantity shipped, quantity received, and line status. Expiration dates that are close are shown in red. After the clinic checks the shipment in, **Receiving outcome** shows who received it.

The **Issue credit memo** and **Close discrepancy** buttons on this page do not do anything yet.
