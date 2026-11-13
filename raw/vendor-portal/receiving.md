---
id: vendor-portal-receiving
title: Receive a vendor shipment
module: vendor-portal
audience: [clinician, admin]
roles: [inventory_manager, admin, np, physician, nurse]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /receiving
related:
  - vendor-portal-overview
  - vendor-portal-shipments
  - inventory-overview
  - inventory-main-inventory
tags: [vendor, receiving, check-in, shipment, inventory, discrepancy]
---

When a vendor connected to your clinic creates a shipment in the vendor portal, it arrives in Medipyxis already listed line by line: SKU, lot, expiration date, and quantity. You check it in by confirming what arrived.

## Before you start

- Open **Inventory Management** and choose **Clinician Inventory View**.
- Have the delivered boxes in front of you.

## Find the shipment

Shipments waiting for you appear in the **Vendor Shipments Awaiting Check-In** panel. Each one shows its shipment number, vendor, number of lines, carrier and tracking number, and expected delivery date. The panel only appears when at least one shipment is waiting.

## Check in a shipment

1. Click **Check in** on the shipment. The check-in window lists every line: product, SKU, lot, expiration date, and the quantity the vendor shipped.
2. For each line, set the quantity you received with the minus and plus buttons or by typing it. A badge shows **match**, **short**, or **over**.
3. If a line has a problem, click **Flag** and type a reason. You can attach a photo to the line.
4. Click **Complete receipt**.

**Save draft** in the check-in window does not keep your entries yet. Complete the receipt in one sitting.

## What happens when you complete the receipt

- Each received lot is added to your inventory as available stock.
- The shipment is marked received, and the vendor is notified with the expected and received totals and the number of discrepancies.
- Only a shipment the vendor has shipped can be checked in, and a shipment can only be received once.
