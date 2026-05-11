---
id: vendor-portal-shipment-and-uin
title: Receive a shipment and understand UINs
module: vendor-portal
audience: [vendor]
roles: [vendor_rep, vendor_coordinator]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/inventory-management
related:
  - vendor-portal-index
  - vendor-portal-submit-product
  - vendor-portal-respond-to-ivr
  - vendor-portal-invoices-and-payment
  - inventory-uin-management
tags: [UIN, shipment, receiving, PO, lot, expiration, graft]
prerequisites:
  - vendor-portal-submit-product
---

# Receive a shipment and understand UINs

When your products arrive at a facility, you confirm receipt in Medipyxis to activate inventory and generate the UINs (Unique Inventory Numbers) that track each physical unit from receiving through clinical use.

## What is a UIN?

A **UIN** (Unique Inventory Number) is a system-generated identifier assigned to one physical graft unit at the moment it is received into inventory. It is distinct from the product's lot number — one lot may contain many units, each with its own UIN.

| Identifier | Who assigns it | What it represents |
|---|---|---|
| **LOT #** | Manufacturer | A production batch; one lot may have many units |
| **SKU** | Manufacturer | The product model across all lots |
| **UIN** | Medipyxis (auto-generated at receiving) | One specific physical unit in the facility's hands |

The UIN is what the clinician scans in the Visit Wizard (step 13 — Procedure Supplies) to document which exact unit was applied to a patient. This provides lot-level traceability for adverse event reporting and CMS audit purposes.

## UIN generation rules

Medipyxis generates a UIN for each unit when receiving is confirmed. The format is:

```
{facility_prefix}-{YYYYMMDD}-{sequential_number}
```

For example: `PT-20260401-00142` — the 142nd unit received at facility "PT" on April 1, 2026.

The LOT SUFFIX pattern you defined in the Product Catalog entry is validated against the lot number entered during receiving. If the lot number does not match the expected format, receiving is blocked until the discrepancy is resolved.

## Receive a shipment

1. Navigate to **Inventory → Main Inventory** or open the **Amniotic / Advance Treatment** or **Biologics / Matrix** tile (depending on the product category).
2. Click **Receive Shipment**.
3. Select the **Product** from your catalog (type-ahead search by name or SKU).
4. Enter the **PO Number** from the purchase order the practice issued. The system validates that the PO exists and is open.
5. Enter the **Lot Number** — the system validates it against the LOT SUFFIX pattern in the Product Catalog.
6. Enter the **Tissue ID** (if applicable — required for amniotic and biologic products).
7. Enter the **Expiration Date** in `MM/DD/YYYY` format.
8. Enter the **Quantity** of units in this shipment.
9. Enter the **Size** for each unit (e.g., `2x3cm`).
10. Click **Confirm Receipt**.

Medipyxis generates one UIN per unit and adds them to the active inventory. The **Active Inventory** flat view shows each UIN with columns: UIN · LOT # · TISSUE ID · EXP DATE · SIZE · HCPCS · SKU · STATUS.

## Match to a purchase order

If a PO number was not issued by the practice before you ship, your shipment cannot be received — the PO Number field is required. Contact the practice's `vendor_coordinator` to confirm the PO is open in their system before the shipment arrives.

If your shipment covers only part of a PO (partial fulfillment), enter only the quantity delivered. The PO remains open and you can receive the remainder in a subsequent shipment.

## Lot expiration alerts

Medipyxis monitors expiration dates for all received units. Alerts are sent:

| Threshold | Who is notified |
|---|---|
| 90 days before expiration | `vendor_coordinator` (practice side) |
| 30 days before expiration | `vendor_coordinator` + `clinical_manager` |
| 7 days before expiration | All staff with Inventory access |
| Expired | Unit status changes to `Expired`; it cannot be selected in Visit Wizard |

Expired units are not automatically removed from inventory — the practice's inventory coordinator must mark them as **Disposed** and document the disposal reason.

## Result

Your shipment is confirmed, UINs are generated for each unit, and the practice's inventory is updated. Units are now available for clinical selection in Visit Wizard and an invoice line will be generated in Accounts Payable.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Lot number fails validation | Format does not match LOT SUFFIX in catalog | Verify the lot format matches your product's catalog entry |
| PO Number not found | PO not yet created by practice | Contact practice `vendor_coordinator` to create the PO |
| Units showing `Expired` immediately after receiving | Wrong expiration date entered | Contact practice admin — correction requires a support ticket |
| UINs not appearing in Visit Wizard | Product status is `Inactive` in catalog | Update product STATUS to `Active` |
