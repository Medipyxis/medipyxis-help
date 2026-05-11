---
id: getting-started-vendor-first-hour
title: Graft vendor first hour
module: getting-started
audience: [vendor]
roles: [vendor_rep]
type: quickstart
estimated_minutes: 30
last_reviewed: 2026-04-24
app_route: /vendor-portal
related:
  - vendor-portal-receive-po
  - vendor-portal-ship-order
  - vendor-portal-submit-invoice
  - vendor-portal-reorder-request
tags: [onboarding, vendor, graft, ivr]
---

# Graft vendor first hour

<Warning>
**Vendor portal not yet implemented.** The dedicated vendor-facing portal described below is on the roadmap but is not live in the current release. Until it ships, vendor reps continue to coordinate POs, shipments, lot data and invoicing through email + fax with the practice's office staff. This page describes the planned experience so admins can prepare; expect changes when the feature goes live.
</Warning>

By the end of this hour you will have received a purchase order, confirmed a shipment against a lot, uploaded the invoice, and seen your reconciliation status. The vendor portal is read-mostly — your main job is to keep shipments and lot data accurate.

## Before you start

- The practice has invited you via email. Click the link and set your password.
- You know your product SKUs, LOT numbers, and unit pricing.

## Step 1 — Sign in and pick your vendor (3 min)

1. `https://app.medipyxis.com/vendor-portal`, sign in.
2. If you supply more than one Medipyxis practice, the **Vendor Selector** at the top-right lets you switch.

## Step 2 — See open POs (5 min)

1. **Purchase Orders** tab. Columns: PO number, practice, order date, expected ship date, status (*Open*, *Partial*, *Shipped*, *Received*, *Reconciled*).
2. Click any PO to see line items: SKU, quantity ordered, unit cost, required LOT expiration range.

## Step 3 — Ship against a PO (10 min)

1. From an open PO, click **Confirm Shipment**.
2. For each line item, enter:
   - **LOT number** (required)
   - **Expiration date** (required)
   - **Shipped quantity** (may be less than ordered for partial ships)
   - **Tracking number** (optional but recommended)
3. Click **Submit shipment**. The practice's **Receiving** queue is notified.

<Warning>
LOT expiration dates must be **after** the earliest scheduled visit that uses the product. If not, the PO is flagged and the practice will reject receiving.
</Warning>

## Step 4 — Upload invoice (5 min)

1. **Invoices** tab → **+ New invoice**. Pick the PO, attach the PDF, enter invoice number and amount.
2. Medipyxis auto-matches your invoice lines to the PO lines. Any mismatches surface in **Disputes** for you and the practice AP team to resolve.

## Step 5 — Watch reconciliation status (2 min)

Your dashboard tile **Reconciled $** shows lifetime and month-to-date paid vs. shipped. Anything in **Dispute** is your work-in-progress — click a row to see the AP note and respond.

## Step 6 — Handle a reorder request (5 min)

When the practice's PAR level trips for one of your products, you'll see a **Reorder Request** in the portal.

1. Open it, confirm quantity and delivery date, click **Accept**.
2. A new PO is created automatically — you're back at Step 2 above.

## Result

- You've shipped one PO with accurate LOT + expiration data.
- Your invoice is matched and in flight to payment.
- You know where reorder requests appear.

## Need help?

Email your practice's AP contact — the address is in your vendor profile. For portal issues, email support@medipyxis.com.
