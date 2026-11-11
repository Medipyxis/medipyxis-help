---
id: inventory-product-catalog
title: Manage products in the Product Catalog
module: inventory
audience: [clinician, admin]
roles: [vendor_coordinator, admin]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/inventory-management
related:
  - inventory-overview
  - inventory-amniotic-biologics-conservative
  - inventory-main-inventory
prerequisites:
  - inventory-overview
tags: [inventory, product catalog, SKU, HCPCS, add product]
---

# Manage products in the Product Catalog

Add new products to your organization's catalog and understand the columns shown for existing products.

## Before you start

- Anyone whose role has the **Inventory** feature can open the Product Catalog and add or edit products.
- Confirm the product's HCPCS code with your billing team before saving.
- The product's vendor must already be set up, because every product needs a vendor.

## Products and Vendors tabs

The Product Catalog has two tabs: **Products** (the catalog described below) and **Vendors** (the inventory vendors you buy from, with their categories). Switch between them at the top of the catalog.

## Product Catalog columns

From the **Inventory Management** hub, select **Product Catalog** and stay on the **Products** tab to open the catalog table.

_Product Catalog table. Search by name, brand, or HCPCS code, and filter by category and status._

Use **Search products...** to find products by name, brand, or HCPCS code. Use the dropdowns to filter by category (All Categories or one category) and status (All Status, Active, or Inactive).

- **Product Name** — the commercial product name. A Conservative Care product shows a red **Par Level Reached** icon here when your facility has fewer available, unexpired lots of it than its PAR level (10 if none is set).
- **Brand** — the manufacturer or brand that markets the product.
- **SKU** — your organization's identifier for this product.
- **Lot No. Suffix** — for Amniotic and Biologics, a dash and three digits (for example `-001`). When a product has a suffix, bulk receiving requires a lot number for it. Receiving does not check lot numbers against the suffix.
- **Category** — `Amniotic / Advance Treatment`, `Biologics / Matrix`, `Conservative Care Products`, `PRP`, or `Ultrasonic Mist (UM)`. Determines which receiving tile accepts this product.
- **Product Type** — a subcategory within the category (for conservative care this includes items like Foam Dressing, Collagen Matrix, Compression Stocking, and supply types such as **Surgical Instrument**, **PPE**, and **General Supply**). PRP and UM do not have sub-types.
- **HCPCS** — optional on the product for every category. When entered it must be one letter and four digits (for example A6402). Amniotic and biologic lots need an HCPCS/Q code when they are received.
- **Status** — Active or Inactive. Inactive products stay in the catalog for history. Inactive products can still be picked in Manual Receive and in IVR requests.
- **Actions** — **Edit Product** and **Delete Product**.

## Add a product

1. **Click Add Product.** The first screen is **Select Product Category** — "Choose the category for your new product".
2. **Pick a category.** Click **Create Product** on the category's card. The form for that category opens; **← Change Category** takes you back.
3. **Complete the required fields** (marked with a red asterisk):
  - **Product Name** and **Brand**.
  - **Product Type** — not asked for PRP and UM.
  - **SKU** — letters, numbers, and dashes only.
  - **Vendor**.
  - **Lot No. Suffix** — required for Amniotic and Biologics, as a dash and three digits (for example `-001`). Optional for Conservative Care, PRP, and UM, where it is digits only.

4. **Set the optional fields** you need, such as **HCPCS Code**, **Vendor Cost**, and (for Conservative Care, PRP, and UM) **Par Level**. Leave **Active Product** on to make the product active.
5. **Click Save Product** (**Update Product** when editing). The new product appears in the Product Catalog table.

The SKU and Lot No. Suffix combination must be unique within a category at your facility.

To load many inventory records at once, use **Bulk Upload Inventory** on a category tile. For Conservative Care, PRP, and UM it accepts a free-form spreadsheet and does not require a purchase order; for Amniotic and Biologics the upload is tied to an order.

## Result

The product is now part of your catalog and can be received through its category tile.

A lot keeps the HCPCS code it was received with; changing the product's HCPCS later does not change lots already received. Coordinate with your billing team before editing HCPCS on a product in use.

To retire a product you have used, turn off **Active Product** rather than deleting it. **Delete Product** asks you to confirm and warns that "This action cannot be undone."

## Troubleshooting

- **Save Product shows errors** — a required field is empty or invalid. Fix the fields marked in red; required fields have a red asterisk.
- **"This SKU and Lot No. Suffix combination already exists"** — another product in the same category at your facility uses that SKU and suffix. Change the SKU or the suffix.
- **"No active vendors found"** — add or enable the vendor first.
