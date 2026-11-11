---
id: inventory-amniotic-biologics-conservative
title: Specialty catalog tiles — Amniotic, Biologics, and Conservative Care
module: inventory
audience: [clinician, admin]
roles: [vendor_coordinator, clinician, admin]
type: concept
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/inventory-management
related:
  - inventory-overview
  - inventory-product-catalog
  - inventory-main-inventory
  - inventory-ivr-tracking
prerequisites:
  - inventory-overview
  - inventory-product-catalog
tags: [inventory, amniotic, biologics, matrix, conservative care, graft, receiving, UIN, HCPCS, lot]
---

# Specialty catalog tiles — Amniotic, Biologics, and Conservative Care

The **Amniotic / Advance Treatment**, **Biologics / Matrix**, and **Conservative Care Products** tiles on the Inventory Management hub each open that category's **Product Batches Management** page, where you receive and manage stock. This page explains what differs between the categories and how receiving works. Products for every category come from the Product Catalog: see [Manage products in the Product Catalog](/modules/inventory/product-catalog/).

_Amniotic / Advance Treatment tile — lots listed with lot number, tissue ID, and expiration date._

## Why categories are separated

Medipyxis separates inventory by product class because each has different regulatory, billing, and clinical-documentation requirements. Keeping them in distinct tiles makes it faster to find the right product and lets the receiving form ask for the right fields for each class.

This article covers the three graft/supply categories below. Two more categories — **PRP** (platelet-rich plasma kits) and **Ultrasonic Mist (UM)** — have their own hub tiles and receive the same way; like conservative care, they do not require IVR prior authorization.

## Amniotic / Advance Treatment

**Amniotic / Advance Treatment** covers amniotic membrane allografts and similarly classified advance-treatment wound products. These products typically come from tissue banks, and FDA 21 CFR Part 1271 requires tissue products to be traceable from donor to recipient.

**What receiving asks for** (all required for Amniotic and Biologics):

- **Lot #** — the manufacturer lot number.
- **Exp Date** — the expiration date on the package label. Expired lots cannot be used in the Visit Wizard.
- **Qty Received**.
- **Tissue ID** — the donor tissue identifier from the tissue bank.
- **Size** — for example `2x3 cm`.
- **HCPCS/Q Code** — filled in from the Product Catalog entry and editable if the packing list differs.

_Manual Receive form. Each line you add becomes an inventory record for that lot._

Enter the Tissue ID exactly as printed on the tissue bank's packing slip. Do not leave it blank or enter a placeholder.

## Biologics / Matrix

**Biologics / Matrix** covers extracellular matrix products, collagen-based wound fillers, and other biologic-category grafts. Receiving asks for the same fields as Amniotic: lot number, expiration date, quantity, tissue ID, size, and HCPCS/Q code. Medipyxis checks that the HCPCS/Q code is filled in, but does not check that it is a valid code, so confirm it against your fee schedule.

Graft requests to a vendor are made as IVR requests from the patient's wound in the Wound Cockpit. Use **IVR Tracking** to follow each request and the vendor's response before the procedure. See [IVR Tracking](/modules/inventory/ivr-tracking/).

## Conservative Care Products

**Conservative Care Products** covers non-graft wound-care supplies: dressings, topical agents, offloading devices, compression wraps, and similar consumables. The type list is broad (foams, alginates, collagen matrices, compression, solutions, and more) and also includes general operational supply types such as **Surgical Instrument**, **PPE**, and **General Supply**.

**Key differences from graft categories:**

- **Tissue ID is not collected**, and size and HCPCS/Q code are not required at receiving. HCPCS is optional on the product.
- **PAR level** — you can set a Par Level on the product. The Product Catalog then shows a red **Par Level Reached** icon when your facility has fewer available, unexpired lots than that level (10 if none is set). No other low-stock alert fires today; a fix is being tracked.

## How receiving works

1. Open the category tile and choose the **Receiving History** tab.
2. Click **Manual Receive**. Choose **Receive Against Purchase Order** (then **Select Order**) or **Direct to Main Stock**.
3. Click **Add Line** for each lot and fill in the fields above.
4. Click **Create Receive**. A receipt is either stocked straight into inventory or created as **Pending Approval**. Approve a pending receipt on the Receiving History tab with **Resolve & Stock Remaining**, or turn it down with **Decline**.

Each line becomes an inventory record for that lot (lot number, expiration, quantity) on the category's **Active Inventory** tab. Stock is tracked by lot, not by individual unit. To load many lots at once, use **Bulk Upload Inventory**.

In the Visit Wizard, clinicians pick the product and lot in the **Interventions & Treatments** step. For a skin-substitute application, **Procedures & Supplies** also requires the **Box UID/UIN**, typed from the package.
