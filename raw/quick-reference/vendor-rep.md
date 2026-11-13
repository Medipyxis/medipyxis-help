---
id: qr-vendor-rep
title: Vendor rep cheat sheet
module: getting-started
audience: [vendor]
roles: [vendor_coordinator]
type: quickstart
estimated_minutes: 2
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/inventory-management
tags: [quick-reference, vendor, inventory, ivr, catalog]
related:
  - qr-biller
  - qr-practice-admin
  - release-notes-2026-04
---

# Vendor rep cheat sheet

Medipyxis has two places where vendor work happens:

- **Vendor companies** use the separate **Vendor Portal**, with its own menu (Catalog, Orders, Shipments, Requests, Verifications, Invoices and more). See the [Vendor Portal guide](/vendor-portal/).
- **Clinic staff who work with vendors** use **Inventory Management** in the clinic app. The rest of this card covers those clinic pages.

## Start of day

| Task | Where |
|---|---|
| Check open IVR requests | **Inventory Management** → **IVR Tracking** |
| Review restock requests from clinicians | **Inventory Management** → **Main Inventory** (opens Reorder Requests) |
| Check vendor invoices | **Inventory Management** → **Accounts Payable** → **Inbox** / **Disputes** |

`⌘K` / `Ctrl+K` opens Quick Jump: type a page name, such as Product Catalog, to go there without the sidebar.

## IVR status reference

IVRs are created from the wound's card in the Wound Cockpit and tracked in IVR Tracking. An IVR is **Pending** until someone records an outcome with **Update Status**.

| Status | Your action |
|---|---|
| **Pending** | Follow up with the vendor if there is no answer after 24 h |
| **Incomplete** | Send the vendor what is missing |
| **Agreed** / **Approved** | Setting **Approved** automatically creates an inventory order and a draft receiving for the requested products |
| **Declined** | Record the reason in Outcome Notes |

The status dialog has no reference-number or authorization-number field, so record those in **Outcome Notes**.

## Updating the product catalog

1. Go to **Inventory Management** → **Product Catalog**.
2. To add a product: click **Add Product**, then **Create Product** on a category card, and complete the form. Every product needs a vendor.
3. To edit a product: find it with **Search products...** (name, brand or HCPCS code), then use **Edit Product** in the Actions column.
4. Set **Status** to Active or Inactive. Inactive products stay in the catalog for history, and can still be picked in Manual Receive and in IVR requests.

HCPCS is optional on the product; amniotic and biologic lots need an HCPCS/Q code when they are received, and a lot keeps the code it was received with. Check codes against the current Medicare HCPCS quarterly update before adding or changing them.

## Responding to restock requests

| Step | Where |
|---|---|
| 1. Triage the request | **Main Inventory** (Reorder Requests) → **Acknowledge**, **Reject** (with a reason) or **Order** |
| 2. Check the lots on hand and their expiry dates | The category tile → **Active Inventory** tab (stock is listed by lot) |
| 3. Receive the shipment | The category tile (for example **Amniotic / Advance Treatment** or **Biologics / Matrix**) |
| 4. Close the request | **Fulfill** marks it Completed. It does not move any stock. |

## A/P status reference

Accounts Payable is a tabbed workspace: **Inbox**, **Matching**, **Payments**, **Disputes**, **Activity** and **Reports**. Invoices move through states such as **matched**, **approved**, **partially paid**, **paid**, and **disputed**. Matching lines, recording payments and working disputes need the Finance AP or admin role.

Target: no aging unpaid invoices. Watch the **Disputes** tab and follow up with the vendor. See [Accounts Payable](/modules/inventory/accounts-payable/).

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| IVR stays **Pending** > 24 h | No outcome recorded yet | Follow up with the vendor; record the answer with **Update Status** |
| Invoice shows **disputed** | Someone opened a dispute on the invoice | Work it on the **Disputes** tab: resolve with credit issued, invoice voided, or invoice upheld |
