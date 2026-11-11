---
id: vendor-portal-respond-to-requests
title: Respond to clinic requests
module: vendor-portal
audience: [vendor]
roles: [vendor_admin, vendor_user]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /vendor/requests
related:
  - vendor-portal-overview
  - vendor-portal-manage-orders
  - vendor-portal-shipments
  - vendor-portal-invoices-and-payment
tags: [vendor, requests, IVR, orders, accept, ship, decline, tether]
---

**Clinic Requests** (`/vendor/requests`) lists the orders your connected clinics have raised for products attributed to your catalog. From here you accept, ship, or decline each one.

## Before you start

- You are signed in to the vendor portal. Every vendor role can open **Requests**.
- Requests only come from clinics whose connection with your company is approved.

## What lands in the queue

- **Product-request orders** — orders that came from a provider's product request at the clinic.
- **Bulk orders** — orders with no provider request behind them, marked `(bulk)`.

Each row shows:

| Column | What you see |
|---|---|
| **Request** | The clinic's order name, with `(bulk)` when there is no provider request behind it. |
| **Product** | A summary of the products requested. |
| **Qty** | Total quantity requested. |
| **Status** | `Pending`, `Shipped`, or `Completed`. |
| **Actions** | Accept, Ship, Decline — greyed out once the request shows Shipped or Completed. |

Newest requests are listed first. **Refresh** reloads the list.

## What each action does

### Accept

Records in your audit log that you have seen the request. The clinic's order does not change.

### Ship

Moves the clinic's order to **Shipped** and creates a shipment record (numbered `SH-…`) linked to that order. Ship only works on a pending order, and a request that already shows Shipped cannot be shipped again. The Ship button does not ask for a carrier or tracking number.

### Decline

- **Product-request orders** — the clinic's provider request is set to **Declined**.
- **Bulk orders** — only an entry in your audit log is recorded. The clinic's order does not change, so tell the clinic directly.

Decline does not ask for a reason.
