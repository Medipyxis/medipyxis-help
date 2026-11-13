---
id: vendor-portal-manage-catalog
title: Manage your catalog and push it to clinics
module: vendor-portal
audience: [vendor]
roles: [vendor_admin, vendor_user]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-11-11
app_route: /vendor/catalog
related:
  - vendor-portal-overview
  - vendor-portal-onboarding
  - vendor-portal-shipments
tags: [vendor portal, catalog, SKU, HCPCS, product master, push]
---

Your catalog lists the products your company offers on Medipyxis. You publish product listings here, push them to the clinics you are connected to, and confirm whether a listing is the same product as one already in the Medipyxis product registry.

## Before you start

- You are signed in to the vendor portal. Every vendor role can open **Catalog**.
- To push products to a clinic, your company must be connected to that clinic.

## The Catalog page

Open **Catalog** from the vendor sidebar. The table lists your products with their SKU, product name, size, HCPCS code, whether they are **Consignable** or **Purchase**, list price, how many clinics have accepted them, when they were last updated, and their link status (`active`, `proposed`, or `draft`).

Use the family buttons above the table (**All families**, then one per product family) to filter the list. Click a row to edit that product.

If clinics already stock products from you that you have not listed yourself, a **Stocked by clinics** section shows each product, its brand, its HCPCS code, and how many clinics stock it. Those are the clinics' own records; you cannot edit them. Add your own listing to set its details.

## Add or edit a product

1. Click **Add Product**, or click a row to edit it.
2. Fill in the form:
  - **Product Name** — required.
  - **SKU / Catalog Number** — required. This is the number clinics order by.
  - **Brand**, **HCPCS Code**, and **GTIN** — optional.
  - **Modality** — CTP / Skin Substitute, Amniotic, Biologics, Conservative, DME, or Supplies.
  - **Sizes** — separated by commas.
  - **Consignable** and **Active** — check the ones that apply.

3. Save.

## Push products to a clinic

Pushing offers your products to a clinic for review.

1. On the Catalog page, click **Push to clinic** (`/vendor/catalog/push`).
2. **Destination clinic** — pick a clinic. Clinics whose connection is still pending are greyed out.
3. **Select SKUs** — tick **Push entire catalog**, or tick individual products.
4. **Preview** — check how many proposed links will be created. Products in `draft` are skipped.
5. Click **Confirm push**. The result shows how many links were created, how many were updated, and how many were skipped because they already existed.

## What happens on the clinic side

- **New products** arrive as proposals on the clinic's **Accept vendor catalog** page. Once the clinic accepts a product, it appears in the clinic's product pickers.
- **Other vendors' offers.** Under each proposed product, the clinic sees up to two other vendors' offers for the same registry product ("Also available from …") and any it already stocks ("Already in your catalog from …"). Offers are sorted by price, then vendor name.
- **Products the clinic already accepted** are updated in place when you push again, if auto-update is on for that product at the clinic.

## Product identity review

Medipyxis keeps a registry of products. When you save a product, Medipyxis looks for it in the registry:

| What Medipyxis finds | What happens |
|---|---|
| A product with the same UDI-DI, GTIN, or HCPCS Q-code | Your product is linked to the registry product. |
| A product with the same name and brand | A proposal appears on your Catalog page for you to confirm or reject. |
| No match | A new registry entry is created and marked for review. |

Proposals appear in an amber **Product identity review** panel at the top of the Catalog page. Each one shows your SKU and product name next to the registry product, with its brand and HCPCS code. For each proposal:

- **Same product** — your product is linked to the registry product.
- **Different product** — your product gets its own new registry entry, marked for review.

Only confirm a match when you are sure it is the same product, so clinics can compare offers accurately.

## Vendor API

Products can also be added or updated through the Vendor API, with `PUT /catalog/skus/{sku}`. Admins create API keys on the **API** page. See the API integration doc (coming soon) for the full contract.
