---
id: vendor-portal-index
title: Vendor Portal Guide
module: vendor-portal
audience: [vendor]
roles: [vendor_rep, vendor_coordinator]
type: concept
estimated_minutes: 4
last_reviewed: 2026-04-24
related:
  - vendor-portal-onboarding-your-company
  - vendor-portal-submit-product
  - vendor-portal-respond-to-ivr
  - vendor-portal-shipment-and-uin
  - vendor-portal-invoices-and-payment
  - vendor-portal-faq
  - inventory-product-catalog
tags: [vendor, graft, catalog, IVR, UIN, inventory]
---

# Vendor Portal Guide

This guide is for graft manufacturer representatives and the `vendor_coordinator` users who manage your company's presence inside Medipyxis. It covers the restricted view you have access to, what you can and cannot do, and how each workflow connects to the practice's clinical and billing operations.

## Who should read this guide

| Role | Who this is |
|---|---|
| `vendor_rep` | A graft manufacturer representative — you work for the manufacturer and coordinate with the practice |
| `vendor_coordinator` | A practice-side user who manages the vendor relationship and can configure inventory on behalf of the practice |

Vendor users have a **restricted view** of Medipyxis. You cannot access patient records, visit documentation, or billing claims. PHI is fully redacted from any surface you can reach.

## What the vendor portal gives you access to

| Area | What you can do |
|---|---|
| **Product Catalog** | Add new products your company manufactures; edit your existing catalog rows |
| **IVR Tracking** | Respond to Insurance Verification Requests routed to your products |
| **Inventory → Receiving** | Confirm shipments received at the facility, match to purchase orders |
| **Accounts Payable** | View invoices related to your products; track payment status |

You cannot see, edit, or export: patient names, dates of birth, diagnoses, visit notes, claim amounts, referring provider information, or any other PHI.

## How the vendor portal connects to clinical operations

When a clinician applies one of your products during a visit, Medipyxis:

1. Scans the product's **UIN** (Unique Inventory Number) in the Visit Wizard to confirm the specific unit applied.
2. Decrements your product from the facility's active inventory.
3. Links the UIN to the visit record for lot traceability.
4. Triggers an IVR if insurance pre-authorization is required.
5. Generates an invoice line in **Accounts Payable** once the product is consumed.

Your job in the portal is to keep the Product Catalog accurate, respond to IVRs promptly, receive shipments correctly, and monitor invoices to ensure payment.

## Sub-pages in this guide

| Page | Type | What you'll learn |
|---|---|---|
| [Onboarding Your Company](./onboarding-your-company.md) | How-to | Accept invite, confirm catalog rows |
| [Submit a Product](./submit-product.md) | How-to | Add a product to the catalog |
| [Respond to an IVR](./respond-to-ivr.md) | How-to | IVR workflow, statuses, SLA |
| [Shipments and UINs](./shipment-and-uin.md) | How-to | Receive a shipment, match to PO, understand UINs |
| [Invoices and Payment](./invoices-and-payment.md) | How-to | Accounts Payable cycle from your side |
| [FAQ](./faq.md) | Reference | Top 10 vendor questions |

<Note>
If you need access to something not listed here, contact the practice's `vendor_coordinator` or `practice_admin` — they can request a permission change through the Administrator screen.
</Note>
