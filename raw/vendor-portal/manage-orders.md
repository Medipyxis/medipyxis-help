---
id: vendor-portal-manage-orders
title: Manage orders (accept, ship, and track)
module: vendor-portal
audience: [vendor]
roles: [vendor_admin, vendor_user]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /vendor/orders
related:
  - vendor-portal-overview
  - vendor-portal-manage-catalog
  - vendor-portal-invoices-and-payment
tags: [vendor, orders, shipping, tracking, fulfillment]
---

# Manage orders (accept, ship, and track)

Work the orders clinics place with your company from the **Orders** page of the vendor portal (`/vendor/orders`). You accept an order, can mark it in progress, ship it with a tracking number, and then mark it delivered.

## Before you start

- You are signed in to the vendor portal. Every vendor role can open **Orders**. See [Onboard your company on the vendor portal](/vendor-portal/onboarding-your-company/).

## The Orders list

Open **Orders**. Orders are grouped by status tabs:

| Tab | Statuses shown |
|---|---|
| **All** | Every order. |
| **Pending** | `pending` — new orders awaiting your acceptance. |
| **In Progress** | `accepted` and `in_progress` — accepted and being prepared. |
| **Shipped** | `shipped` — dispatched, with a tracking number. |
| **Delivered** | `delivered`. |
| **Cancelled** | `cancelled`. |

Each row shows the order date, the clinic, the modality, the order type, the status, the number of lines, and the tracking number once shipped. The **Clinic** column shows the start of the clinic's ID, not its name.

You can narrow the list by clinic ID and by modality (Amniotic, Biologics, Conservative, or DME). The list refreshes on its own when an order changes.

## Work an order

Click an order to open **Order Detail**. It shows the status, order type, order date, modality, carrier, tracking number, whether the order is cold chain, any notes, and the line items (SKU, description, quantity, unit price, and line status).

1. **Accept it.** On a pending order, click **Accept**.
2. **Mark it in progress** (optional). On an accepted order, click **Mark In Progress**.
3. **Ship it.** Under **Mark Shipped**, enter the tracking number (required) and the carrier (optional), then click **Ship**.
4. **Mark it delivered.** On a shipped order, click **Mark Delivered**.

To cancel an order that has not shipped, type an optional reason under **Cancel order** and click **Cancel**.

An order only moves forward. A move the order's status does not allow is refused with an "Invalid transition" message. Each status change is recorded in your company's audit log.
