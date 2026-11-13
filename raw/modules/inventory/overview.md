---
id: inventory-overview
title: Inventory Management overview
module: inventory
audience: [clinician, admin]
roles: [vendor_coordinator, clinician, finance_ap, admin]
type: concept
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/inventory-management
related:
  - inventory-product-catalog
  - inventory-amniotic-biologics-conservative
  - inventory-ivr-tracking
  - inventory-main-inventory
  - inventory-accounts-payable
  - inventory-recall-lookup
prerequisites: []
tags: [inventory, UIN, PAR, graft, biologics, IVR]
---

# Inventory Management overview

Understand the areas of the Inventory Management hub and the key terms that apply across all of them. Open the hub from **Inventory Management** in the sidebar.

Graft and skin substitute inventory tour: Product Catalog and Receiving workflow.

_Inventory Management hub. Each tile opens its dedicated workspace._

## Key terms

### Stock is tracked by lot

Medipyxis tracks stock by lot, not by individual unit. Each received lot is stored as an inventory record with its lot number, expiration date, and quantity; amniotic and biologic receipts also carry a tissue ID, size, and HCPCS/Q code. There is no separate per-unit inventory number.

### PAR level — Periodic Automatic Replenishment

A **PAR level** is the minimum quantity you want on hand. You can record one in the **Par Level** field of a Conservative Care, PRP, or Ultrasonic Mist product in the Product Catalog.

In the Product Catalog list, a Conservative Care product shows a red alert icon (**Par Level Reached**) when your facility has fewer available, unexpired lots of it than its PAR level; if no PAR level is set, 10 is used. The icon counts lots, not units. No other low-stock alert fires today: the **Low Stock** count on a category's Active Inventory tab always shows 0. A fix is being tracked.

## Who can open Inventory Management

The **Inventory Management** sidebar item and the pages inside it are open to every role that has the **Inventory** feature, which an admin turns on per role in **Administrator → Organization Role Config**. A few actions also check the role: for example, only finance AP and admin users can match, pay, or dispute invoices in Accounts Payable.

## The hub tiles

- **Product Catalog** — master list of every product your organization has configured (with a Products tab and a Vendors tab). Add products and edit SKU/HCPCS metadata here.
- **Amniotic / Advance Treatment**, **Biologics / Matrix**, **Conservative Care Products**, **PRP**, and **Ultrasonic Mist (UM)** — each opens that category's **Product Batches Management** page, with the tabs Products, Active Inventory, Used Inventory, Workflow Recipes, Orders, IVR Requests, and Receiving History. Receiving happens here. For amniotic and biologic products, each received line needs a lot number, expiration date, tissue ID, size, and HCPCS/Q code.
- **IVR Tracking** — tracks IVR submissions, outcomes, and vendor responses. IVR requests themselves are created from the patient's wound in the Wound Cockpit. See [IVR Tracking](/modules/inventory/ivr-tracking/).
- **Clinician Inventory View** — a clinician's own assigned stock (**My Inventory**), without cost data. Clinicians accept transferred conservative items with **Received** and can use **Request More Inventory** or **New Product Request**. Admins see it as **Provider Inventory** and can pick a provider.
- **Accounts Payable** — vendor invoice intake, matching, payments, and disputes. See [Accounts Payable](/modules/inventory/accounts-payable/).
- **Main Inventory** — opens **Reorder Requests**, the clinician fulfillment request queue for triage, ordering, and stock-based fulfillment. On-hand stock is on each category tile's **Active Inventory** tab. See [Main Inventory reference](/modules/inventory/main-inventory/).

**PRP** and **Ultrasonic Mist** are their own categories alongside Amniotic, Biologics, and Conservative Care. Like conservative products, they flow through the standard deduction pipeline and do not require IVR prior authorization.

## Other tools

- **FDA HCT/P Recall Lookup** — enter the lot number from a recall notice to find every patient who received product from that lot at your facilities. It is not a hub tile and has no menu link yet; open it by going to `/inventory-management/recall-lookup` in your Medipyxis web address. A fix to add a menu link is being tracked. See [Recall Lookup](/modules/inventory/recall-lookup/).
- **Bulk operations** — shipment logging, vendor receiving, manual receipt, and provider assignment from a single landing page. It also has no menu link yet; open it at `/inventory-management/bulk`. See [Bulk inventory workflows](/modules/inventory/bulk-operations/).

## How the tiles connect

1. A product is defined in **Product Catalog** with its SKU, HCPCS, and category.
2. A shipment is received through the appropriate category tile (**Amniotic / Advance Treatment**, **Biologics / Matrix**, **Conservative Care Products**, **PRP**, or **Ultrasonic Mist**), creating inventory records with lot and expiration.
3. For a graft, an IVR request is created from the patient's wound in the Wound Cockpit and tracked in **IVR Tracking**.
4. Received stock becomes selectable in the Visit Wizard's **Interventions & Treatments** step (Step 9), where the clinician picks the product and its lot. Expired lots cannot be used. The stock is deducted when the clinician clicks **Continue to Review**.
5. For a skin-substitute application, the **Procedures & Supplies** step also requires the **Box UID/UIN**, typed from the package.
6. Vendor invoices for received shipments are handled in **Accounts Payable**.
