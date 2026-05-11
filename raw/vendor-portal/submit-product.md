---
id: vendor-portal-submit-product
title: Add a product to the catalog
module: vendor-portal
audience: [vendor]
roles: [vendor_rep, vendor_coordinator]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/inventory-management
related:
  - vendor-portal-index
  - vendor-portal-onboarding-your-company
  - vendor-portal-shipment-and-uin
  - inventory-product-catalog
tags: [vendor, catalog, product, HCPCS, SKU, 510k, IFU, graft]
prerequisites:
  - vendor-portal-onboarding-your-company
---

# Add a product to the catalog

Submit a new graft or biologic product to the Medipyxis Product Catalog so it is available for clinical selection in the Visit Wizard and for inventory tracking.

## Before you start

- You need `vendor_coordinator` role.
- Gather the product's regulatory documentation: FDA 510(k) clearance letter and Instructions for Use (IFU).
- Confirm the correct HCPCS code with your reimbursement team before submitting — changes after a product is in active use require the practice's `vendor_coordinator` to approve an edit.

## Required product fields

| Field | Description | Notes |
|---|---|---|
| **NAME** | Full product name as labeled | Matches FDA label |
| **BRAND** | Manufacturer brand name | Must match your existing brand in the catalog |
| **SKU** | Your internal stock-keeping unit code | Alphanumeric, max 50 characters |
| **LOT SUFFIX** | The lot number format your company uses (e.g., `XXX-YYYYMM`) | Used to validate UIN generation at receiving |
| **CATEGORY** | Product category | One of: `Amniotic / Advance Treatment`, `Biologics / Matrix`, `Conservative Care Products` |
| **TYPE** | Product type within category | Driven by category selection; options appear after category is set |
| **HCPCS** | CMS HCPCS code for this product | Must be a current, active HCPCS code |
| **STATUS** | Availability status | `Active` or `Inactive`; set `Active` for products currently being supplied |

## Steps

1. Navigate to **Inventory → Product Catalog**.
2. Click **Add Product**.
3. The **Add Product wizard** opens at the **Category** selection step.
4. Select the appropriate **Category** — this drives the remaining form fields.
5. Complete the category-specific form:

   **For Amniotic / Advance Treatment and Biologics / Matrix:**
   - All eight required fields above apply.
   - The **HCPCS** field validates against the CMS active code list in real time — a red border means the code is not recognized or has been retired.

   **For Conservative Care Products:**
   - **HCPCS** is optional but recommended.
   - **LOT SUFFIX** is optional for non-biological products.

6. In the **Documents** section of the form, attach:
   - **510(k) clearance letter** (PDF, max 20 MB)
   - **IFU** (PDF, max 20 MB)
7. Set **STATUS** to `Active` if the product is currently being shipped to this facility, or `Inactive` if you are pre-registering it.
8. Click **Save**.

## After submission

- The product appears immediately in the Product Catalog with your brand listed.
- The practice's `vendor_coordinator` or `practice_admin` receives a notification to review and approve the new catalog entry before it becomes selectable in the Visit Wizard.
- Approval typically takes one business day. You can check the entry's status in the catalog — a yellow **Pending Approval** badge indicates it is under review.

<Compliance>
HCPCS codes for skin substitutes are subject to CMS reclassification. When CMS updates a code, you must submit an edit to the catalog row with the new HCPCS before the effective date. See [FAQ — How do I update my HCPCS when CMS reclassifies?](./faq.md) for the update workflow.
</Compliance>

## Result

Your product is submitted and pending approval. Once approved, clinical staff can select it in the Visit Wizard (step 13 — Procedure Supplies) and inventory coordinators can receive it via the shipment workflow.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| HCPCS field shows red border | Code retired or not in CMS list | Verify the code at cms.gov/Medicare/Coding/HCPCSReleaseCodeSets and update |
| Add Product button is disabled | You do not have `vendor_coordinator` role | Contact the practice admin |
| Document upload fails | File exceeds 20 MB | Compress the PDF or split into multiple files |
| Product stuck in Pending Approval for more than two business days | Reviewer not notified | Ask the practice's `vendor_coordinator` to approve in the catalog |
