---
id: vendor-portal-manage-orders
title: Manage orders (accept, ship, and track)
module: vendor-portal
audience: [vendor]
roles: [vendor_admin, vendor_user]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-07-08
app_route: /vendor/orders
related:
  - vendor-portal-index
  - vendor-portal-submit-product
  - vendor-portal-invoices-and-payment
tags: [vendor, orders, shipping, tracking, fulfillment]
---

# Manage orders (accept, ship, and track)

Work the orders clinics place with your company from the **Orders** page of the vendor portal (`/vendor/orders`). You accept an order, mark it in progress, ship it with a tracking number, and it completes when the clinic marks it delivered.

## Before you start

- You are signed in to the vendor portal with a `vendor_admin` or `vendor_user` account. See [Sign in and manage staff](./onboarding-your-company.md).

## The Orders list

Open **Orders**. Orders are grouped by status tabs:

| Tab | Statuses shown |
|---|---|
| **All** | Every order. |
| **Pending** | `pending` — new orders awaiting your acceptance. |
| **In Progress** | `accepted` and `in_progress` — accepted and being prepared. |
| **Shipped** | `shipped` — dispatched, with a tracking number. |
| **Delivered** | `delivered` — received by the clinic. |
| **Cancelled** | `cancelled`. |

Each row shows the order, the clinic, the status badge, and the tracking number (once shipped).

## Work an order

1. **Open a pending order.** Click the order to see its line items and the clinic.
2. **Accept it.** Move it from **Pending** to **In Progress** to signal you're preparing the shipment.
3. **Ship it.** When it goes out, mark it **Shipped** and enter the **tracking number** so the clinic can follow it.
4. **Delivered.** The order completes as **Delivered** once the clinic confirms receipt on their side.

<Note>
There is no "receiving" or UIN step for vendors — you ship the order and record its tracking number. Units are received into inventory on the clinic side. Product authorization (formerly described as an "IVR response") is not part of the vendor order flow.
</Note>

## Related

Auto-rendered from `related:` in frontmatter.
