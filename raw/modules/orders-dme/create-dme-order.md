---
id: orders-dme-create-dme-order
title: Create a DME order
module: orders-dme
audience: [clinician, admin]
roles: [np, md, nurse, practice_admin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/orders-and-dme
related:
  - orders-dme-overview
tags: [orders, DME, durable-medical-equipment, prescription]
---

# Create a DME order

Generate a durable medical equipment prescription from the Orders & DME module or directly within the Visit Wizard.

## Before you start

- The patient must exist in your system.
- You must have prescribing authority or be creating the order on behalf of a supervising provider.
- Know the required equipment category and any payer-specific HCPCS codes.

## Steps

1. **Open Orders & DME.** Click **Orders & DME** in the sidebar, or access it from Step 11 of the Visit Wizard (the link carries the patient context automatically).
2. **Click DME Orders.**
3. **Click + New DME Order.**

   ![DME order creation form](../../assets/orders-dme/dme-create.png)

   *DME order creation form — fill fields from top to bottom.*

4. **Select the Patient.** Begin typing the patient name or date of birth. Choose the correct record from the autocomplete list.
5. **Select Equipment Category.** Choose the appropriate category (e.g., wound care supply, compression device, mobility aid). Available HCPCS codes filter based on your selection.
6. **Choose the Item.** Select the specific item from the filtered product list. The HCPCS code populates automatically.
7. **Set Quantity and Units.** Enter the prescribed quantity and select the unit of measure (e.g., each, box, roll).
8. **Enter Duration.** Specify the length of need (e.g., 3 months, lifetime). This field appears on the prescription and is required for Medicare compliance.
9. **Add Clinical Justification.** Enter the diagnosis or ICD-10 code that supports medical necessity. Type to search the ICD-10 picker.
10. **Select the Ordering Provider.** Confirm or change the provider name — their NPI populates automatically from their profile.
11. **Select Preferred Vendor** (optional). Choose from the **Vendor Network** if you want the order routed to a specific supplier.
12. **Add Notes** (optional). Include any special fitting instructions or delivery requirements.
13. **Click Submit Order.** The order moves to **Pending** status and is visible in the DME Orders list.

## Result

The DME order appears in the **DME Orders** section with a unique order number and **Pending** status. If a vendor was selected, they receive an automated notification. The order is also linked to the patient record for tracking.

<Compliance>
DME orders for Medicare beneficiaries must include an ICD-10 code, duration of need, and ordering provider NPI. Missing any of these fields may result in a denied claim.
</Compliance>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Patient not found | Patient not yet created | Add the patient via Referral Intake or the Patients module |
| HCPCS code not shown | Wrong equipment category selected | Change the category — HCPCS codes are category-scoped |
| Submit button disabled | Required field missing | Check Patient, Equipment Category, Item, Quantity, Duration, and ICD-10 |

## Related

Auto-rendered from `related:` in frontmatter.
