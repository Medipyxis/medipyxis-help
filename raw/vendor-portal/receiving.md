---
id: vendor-portal-receiving
title: Receive a vendor shipment
module: vendor-portal
audience: [clinician, admin]
roles: [inventory_manager, admin, np, physician, nurse]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-08-28
app_route: /receiving
related:
  - vendor-portal-overview
  - vendor-portal-shipments
  - inventory-overview
  - inventory-main-inventory
tags: [vendor, receiving, check-in, shipment, inventory, discrepancy]
---

Every shipment a tethered vendor sends you shows up in your **Receiving** queue pre-staged with lot, expiration, and quantity — you don't type any of it. Check-in is match-and-confirm, from either the facility's central Receiving page or straight out of a provider's inventory view.

## Before you start

- Any provider at your facility can receive a shipment; you don't need the `inventory_manager` role.
- Have the physical boxes on hand and a camera ready — discrepancy photos are how you flag exceptions back to the vendor.

## Where check-in lives

Two surfaces write through the same edge function — pick whichever is faster for your workflow.

| Surface | Best for | Where |
|---|---|---|
| **Receiving page** (facility-wide) | Inventory admins working through the day's arrivals in one place | Sidebar → Receiving |
| **Provider inventory view** | Providers checking in a graft that arrived just before their next visit | Patient Management → Inventory tab, **Pending Vendor Shipments** section |

Both surfaces list the same pending shipments and both save through `clinic-receive-shipment`. Records are identical — check in from wherever you already are.

## The Receiving page

Sidebar → **Receiving** opens a facility-scoped view with four KPI tiles across the top:

| Tile | What it counts |
|---|---|
| **Expected today** | Pending shipments with a delivery date in today's window |
| **Awaiting check-in** | Any shipment marked shipped or in transit |
| **Open discrepancies** | Line-level flags raised on prior receipts that the vendor hasn't resolved |
| **Received this week** | Shipments fully checked in over the last 7 days |

Below the tiles, the **All shipments** table lists every shipment tied to your facility with vendor name, shipment number, line count, expected delivery, and status badge (`in transit`, `checking in`, `received`).

## Check in a shipment

1. Open the shipment (click the row on the Receiving page, or **Check in** from the Provider inventory view). The check-in modal opens with:
   - Vendor name and shipment number.
   - Every line the vendor shipped — SKU, product name, lot, expiration, and expected quantity.
2. **Confirm each line.** For each row:
   - Compare the vendor's expected quantity against the physical count.
   - If it matches, leave **Received quantity** at the pre-filled value.
   - If it doesn't, edit the number and check the discrepancy option (short, damaged, wrong SKU, expired).
3. **Photograph any discrepancy.** The modal accepts one photo per flagged line. This becomes the evidence attached to the exception on the vendor's side.
4. **Add notes** (optional). Anything the vendor's ops team needs to know to reconcile — "outer box crushed but inner sterile packs intact", "lot A vs lot B mixed".
5. **Confirm receipt.** The shipment moves to `received` (perfect match) or `flagged` (any line has a discrepancy). Line-level status is preserved even for a flagged shipment — the accepted quantities stock immediately, only the flagged units wait.

## What lands in inventory

- **Accepted lines** create `inventory_product_batches_v2` rows and become on-hand stock in **Main Inventory → In Stock** the moment you confirm.
- **Flagged lines** land in **Receiving History → Needs review** so an inventory admin can reconcile before those units stock.
- **Consignment lots** are stocked with `ownership_model = consignment` so they show on the vendor's consignment position report but count against your on-hand for wizard availability.

## Provider quick-receive

The Provider inventory view (Patient Management → **Inventory** tab) surfaces pending shipments in a **Pending Vendor Shipments** card:

- Shows the same shipment list as the facility Receiving page, filtered to shipments where you are on the delivery list.
- **Check in** opens the same modal as the Receiving page — no context switch required.
- Useful when a graft was just-in-time couriered for a patient you're about to see; you receive it 30 seconds before you use it, no walk to the supply room.

## Discrepancies and the vendor response

Once you flag a line, the vendor's shipment moves to `flagged` on their side and lands in their **Requests** inbox with your photo and note. They resolve one of three ways:

- **Reship** — a fresh draft shipment for the missing quantity lands in your queue.
- **Short-ship accepted** — the balance is written off; the shipment closes.
- **Dispute** — opens a message thread with you for reconciliation.

You're notified in either the bell or **Messages** whenever the vendor responds.

## Aging and nudges

Pending shipments that stay uncheck-in for over 24 hours after their expected delivery date send an escalating nudge:

- Day 1 overdue → notification to the facility inventory admin.
- Day 3 overdue → notification to the vendor plus a red flag on the shipment.
- Day 5 overdue → escalated to your facility admin.

Overdue shipments do not auto-close; someone has to check in or void them.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Shipment not in queue | Vendor hasn't marked it shipped yet | Confirm the tracking number with the vendor; ask them to update status |
| Cannot open the check-in modal | Another provider is checking in the same shipment | Refresh the page; if the shipment is now `received`, someone beat you to it |
| Photo won't attach | File over 10 MB or unsupported format | Reshoot at lower resolution; PNG/JPG only |
| Received quantity doesn't decrement in Main Inventory | Stocking write failed; line landed in Needs Review | Open **Receiving History → Needs review** and complete the reconcile |
| Provider view doesn't show a shipment | You are not on the delivery list for that shipment | Use the facility Receiving page — any provider can check in from there |

## Related

- **[Create and track shipments](./shipments.md)** — the vendor-side flow that fed this queue.
- **[Main Inventory](../modules/inventory/main-inventory.md)** — where received stock lands.
- **[Bulk inventory workflows](../modules/inventory/bulk-operations.md)** — receiving without a vendor shipment (manual receive, non-vendor sources).
