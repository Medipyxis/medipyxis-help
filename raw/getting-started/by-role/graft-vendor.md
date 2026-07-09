---
id: getting-started-vendor-first-hour
title: Graft vendor first hour
module: getting-started
audience: [vendor]
roles: [vendor_admin, vendor_user]
type: quickstart
estimated_minutes: 30
last_reviewed: 2026-07-08
app_route: /vendor
related:
  - vendor-portal-index
  - vendor-portal-manage-orders
  - vendor-portal-submit-product
  - vendor-portal-invoices-and-payment
tags: [onboarding, vendor, orders, catalog, invoices]
---

# Graft vendor first hour

By the end of this hour you will have signed in to the vendor portal, reviewed your catalog, worked an order end to end, and sent an invoice. The vendor portal is a dedicated app at `/vendor`, separate from the clinical app, and never shows PHI.

## Before you start

- Your company's `vendor_admin` (or a clinic that set your company up) invited you by email. Accept the invite and set your password.
- Know your product SKUs and pricing.

## Step 1 — Sign in (3 min)

1. Go to `https://app.medipyxis.com/vendor` and sign in. You land on the vendor **Home** page.
2. The portal navigation gives you **Home**, **Orders**, **Use Events**, **Catalog**, **Invoices**, and **Clinics**. **Staff** appears only if you're a `vendor_admin`.

See [Sign in and manage staff](../../vendor-portal/onboarding-your-company.md).

## Step 2 — Check your catalog (7 min)

1. Open **Catalog**.
2. Confirm your SKUs are present and correct. Add or edit any with **New SKU**. You own your catalog directly — there is no practice approval step.

See [Manage your product catalog](../../vendor-portal/submit-product.md).

## Step 3 — Work an order (10 min)

1. Open **Orders**. New orders arrive as **Pending**.
2. **Accept** an order (it moves to In Progress), then **Ship** it and enter the **tracking number**. It completes as **Delivered** once the clinic confirms receipt.

See [Manage orders](../../vendor-portal/manage-orders.md).

## Step 4 — Send an invoice (5 min)

1. Open **Invoices**.
2. Create an invoice for a shipped order and submit it. The clinic's finance team reconciles and pays it on their side.

See [Send invoices](../../vendor-portal/invoices-and-payment.md).

## Step 5 — Review usage (5 min)

- Open **Use Events** to see where your products were used, de-identified (initials + year of birth only). Open **Clinics** to see which facilities you're enabled at.

## Result

- You can sign in, keep your catalog current, work orders from Pending to Delivered, and send invoices.

## Need help?

For portal questions, see the [Vendor Portal Guide](../../vendor-portal/) and [FAQ](../../vendor-portal/faq.md). For account issues, contact your company's `vendor_admin` or email support@medipyxis.com.
