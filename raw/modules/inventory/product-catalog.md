---
id: inventory-product-catalog
title: Manage products in the Product Catalog
module: inventory
audience: [clinician, admin]
roles: [vendor_coordinator, practice_admin]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-04-24
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

Add new products to your organization's master catalog and understand the column data displayed for existing products.

## Before you start

- You must have the `vendor_coordinator` or `practice_admin` role to add or edit products.
- Confirm the product's HCPCS code with your billing team before saving, as it drives claim generation downstream.
- For biologics and matrix products, have the manufacturer's lot format on hand — the form enforces it.

## Product Catalog columns

From the **Inventory Management** hub, select **Product Catalog** to open the catalog table.

![The Product Catalog table showing columns NAME, BRAND, SKU, LOT SUFFIX, CATEGORY, TYPE, HCPCS, and STATUS with sample product rows.](../../assets/inventory/product_catalog.png)

*Product Catalog table. Use the search bar above the table to filter by any column value.*

| Column | Description |
|---|---|
| **NAME** | The full commercial product name as it appears on the manufacturer label. |
| **BRAND** | The manufacturer or brand that markets the product. |
| **SKU** | Stock Keeping Unit — your organization's internal identifier for this product. Must be unique within your facility. |
| **LOT SUFFIX** | The suffix pattern appended to manufacturer lot numbers for this product (used during receiving to validate lot strings). |
| **CATEGORY** | One of the three inventory categories: `Amniotic / Advance Treatment`, `Biologics / Matrix`, or `Conservative Care Products`. Determines which receiving tile accepts this product. |
| **TYPE** | A subcategory within the category (e.g., `Dehydrated`, `Fresh`, `Meshed`). Drives Visit Wizard filter options. |
| **HCPCS** | The Healthcare Common Procedure Coding System code billed when this product is applied. Required for biologics and amniotic products. |
| **STATUS** | `Active` — available for ordering and use. `Inactive` — hidden from clinician views and the receiving workflow but retained for historical records. |

## Add a product

![The Add Product modal showing a Category dropdown as the first required selection.](../../assets/inventory/add_product_modal.png)

*Add Product modal. Category must be selected before the category-specific form fields appear.*

1. **Open the Add Product modal.** From the **Product Catalog** table, click **Add Product** in the upper-right corner. The modal opens with a single **Category** dropdown.

2. **Select a category.** Choose one of `Amniotic / Advance Treatment`, `Biologics / Matrix`, or `Conservative Care Products`. The form expands to show the fields required for that category.

    ![The Add Product form after a category is selected, showing fields for Name, Brand, SKU, LOT Suffix, Type, HCPCS, and Status.](../../assets/inventory/add_product_form.png)

    *Add Product form — fields vary by category. Biologics require a valid HCPCS code and a manufacturer lot format.*

3. **Complete the required fields.** At minimum, provide:
   - **Name** — commercial product name.
   - **Brand** — manufacturer name.
   - **SKU** — your organization's internal code (no spaces).
   - **LOT Suffix** — the suffix pattern printed on the manufacturer's lot label (e.g., `A1`, `RF`).
   - **Type** — select from the available subcategory options for the chosen category.
   - **HCPCS** — required for `Amniotic / Advance Treatment` and `Biologics / Matrix`; optional for `Conservative Care Products`.
   - **Status** — set to `Active` to make the product immediately available, or `Inactive` to hold it for future use.

4. **Save the product.** Click **Save**. The new product appears in the **Product Catalog** table with `Active` or `Inactive` status.

## Result

The product is now part of your organization's master catalog. If you set status to `Active`, it is immediately available in the appropriate receiving workflow (the category tile) and will appear in the Visit Wizard product selector when a clinician chooses a graft or supply item.

<Warning>
Changing a product's **HCPCS** code after units have been received affects future claims only. Previously received units retain the HCPCS that was active at the time of receiving. Coordinate with your billing team before editing HCPCS on an in-use product.
</Warning>

<Note>
To retire a product that is no longer ordered, set its **STATUS** to `Inactive` rather than deleting it. Inactive products are preserved for historical reporting and audit trails.
</Note>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **Save** button remains disabled | A required field is empty or contains an invalid value | Scroll through the form; required fields are marked with a red asterisk |
| Duplicate SKU error on save | Another product in the catalog already uses that SKU | Use a unique suffix to differentiate (e.g., append the size) |
| HCPCS field not visible | `Conservative Care Products` category selected | HCPCS is optional for that category; scroll to the optional fields section |

## Related

Auto-rendered from `related:` in frontmatter.
