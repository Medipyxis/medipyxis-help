---
id: qr-vendor-rep
title: Vendor rep cheat sheet
module: getting-started
audience: [vendor]
roles: [vendor_rep, vendor_coordinator]
type: quickstart
estimated_minutes: 2
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/inventory-management
tags: [quick-reference, vendor, inventory, ivr, catalog]
related:
  - qr-biller
  - qr-practice-admin
  - release-notes-2026-04
---

# Vendor rep cheat sheet

Your daily loop: check the IVR queue, keep the product catalog current, respond to restock requests, track A/P status.

## Start of day

| Task | Where |
|---|---|
| Check open IVR requests | **Inventory Management** → **IVR Tracking** |
| Review restock requests from facilities | **Inventory Management** → **Main Inventory** → filter by your brand |
| Verify no A/P invoices are past due | **Inventory Management** → **Accounts Payable** |
| Confirm custom forms are scoped to the correct facility | **Vendor Portal** → custom forms list |

<Tip>
`⌘K` / `Ctrl+K` opens Quick Jump — type a SKU, UIN, or facility name to navigate without the sidebar.
</Tip>

## IVR queue — status reference

| Status | Meaning | Your action |
|---|---|---|
| **Submitted** | Facility initiated an Insurance Verification Request | Confirm product and lot details are correct |
| **Pending** | Awaiting payer or facility confirmation | Wait; follow up if > 24 h |
| **Approved** | IVR cleared | Prepare shipment or confirm allocation |
| **Declined** | Payer or facility rejected the request | Contact facility contact to resolve; log reason |
| **Agreed** | Both sides confirmed; order is live | Proceed to fulfillment |

## Updating the product catalog

1. Go to **Inventory Management** → **Product Catalog**.
2. To add a product: click **+ Add Product** → select **Category** → complete the category-specific form (biologics require **HCPCS** + **manufacturer lot format**).
3. To edit an existing product: find the row by **SKU** or **NAME** → click **Actions** → **Edit**.
4. Confirm **STATUS** is set to **Active** before saving; inactive products do not appear in facility ordering flows.

<Warning>
HCPCS codes on biological and amniotic products feed directly into claim coding. Verify codes against the current Medicare HCPCS quarterly update before adding or changing them.
</Warning>

## Responding to restock requests

| Step | Where |
|---|---|
| 1. Identify the low-PAR item | **Main Inventory** → items flagged below PAR level appear highlighted |
| 2. Confirm available lot and expiry | **Active Inventory** → columns: **UIN · LOT # · EXP DATE · SIZE · HCPCS · SKU** |
| 3. Submit or confirm a receiving upload | **Inventory Management** → **Amniotic / Advance Treatment** or **Biologics / Matrix** → **Receiving** |
| 4. Verify the upload moves to **Active Inventory** | Refresh **Main Inventory** — status should leave "Sent" and enter Active |

<Note>
If a receiving upload stays stuck in **Sent** and does not move to Active Inventory, the approval/transfer workflow may require a facility admin to confirm receipt. Ping the facility admin via **Team Chat** with the UIN and lot number. (MED-1629)
</Note>

## A/P status reference

| Status | Meaning |
|---|---|
| **Pending** | Invoice submitted, awaiting facility review |
| **Approved** | Facility approved; payment in process |
| **Paid** | Payment confirmed |
| **Disputed** | Facility flagged a discrepancy — contact your account manager |

Columns on the **Accounts Payable** screen: **VENDOR · INVOICE # · DATE · DUE · TOTAL · STATUS · ACTIONS**.

Target: zero invoices past the **DUE** date. Filter by **STATUS: Pending** daily to catch aging invoices before they breach terms.

## Facility-scoped forms

Custom vendor forms are visible only to the facility that created them. If a form you expected to see is absent:

1. Confirm the facility context in the header pill matches the facility that owns the form.
2. If the form was created in a different facility, request the facility admin to duplicate it for the current facility.

## Shortcuts

| Task | Shortcut |
|---|---|
| Jump to a product by SKU | `⌘K` + SKU |
| Find a facility | `⌘K` + facility name |
| Help for the current screen | `⌘/` / `Ctrl+/` |

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| IVR stays in **Pending** > 24 h | Payer delay or missing lot detail | Call payer; confirm lot/UIN with facility |
| Product not visible in facility ordering | Status set to **Inactive** | **Product Catalog** → find SKU → **Edit** → set **Status: Active** |
| Receiving upload stuck in **Sent** | Approval step not completed by facility | Ping facility admin in **Team Chat** with UIN and lot number |
| Custom form visible to wrong facility | Form not scoped correctly (pre-April 2026 forms) | Ask facility admin to delete and recreate the form after the MED-1665 fix |
| A/P invoice shows **Disputed** | Amount or line-item mismatch | Contact your facility account manager directly; document resolution in **Activity** notes |
