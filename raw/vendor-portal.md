---
id: vendor-portal-index
title: Vendor Portal Guide
module: vendor-portal
audience: [vendor]
roles: [vendor_admin, vendor_user]
type: concept
estimated_minutes: 4
last_reviewed: 2026-07-08
related:
  - vendor-portal-onboarding-your-company
  - vendor-portal-submit-product
  - vendor-portal-manage-orders
  - vendor-portal-invoices-and-payment
  - vendor-portal-faq
tags: [vendor, portal, orders, catalog, invoices]
---

# Vendor Portal Guide

The vendor portal is a dedicated app at `/vendor`, with its own sign-in, for the companies that supply clinics on Medipyxis. It is separate from the clinical app and never exposes PHI.

## Who this is for

| Role | Who this is |
|---|---|
| `vendor_admin` | Full access, including managing your company's staff. |
| `vendor_user` | Everything except the Staff page. |

## What the portal gives you

The portal navigation covers:

| Area | What you do |
|---|---|
| **Home** | Your company's overview. |
| **Orders** | Accept, prepare, ship (with tracking), and track orders from clinics. |
| **Use Events** | See where your products were used, de-identified (initials + year of birth only). |
| **Catalog** | Maintain your own product SKUs. |
| **Invoices** | Send invoices to the clinics you supply. |
| **Clinics** | See the clinics your company is enabled at. |
| **Staff** | Invite and manage your company's users (**vendor_admin** only). |

You cannot see patient names, dates of birth, diagnoses, visit notes, or claim amounts. The portal is PHI-free by design.

## Sub-pages in this guide

| Page | Type | What you'll learn |
|---|---|---|
| [Sign in and manage staff](./onboarding-your-company.md) | How-to | Accept your invite, sign in, invite colleagues |
| [Manage your product catalog](./submit-product.md) | How-to | Add and edit your SKUs |
| [Manage orders](./manage-orders.md) | How-to | Accept, ship with tracking, and track orders |
| [Send invoices](./invoices-and-payment.md) | How-to | Submit invoices to clinics |
| [FAQ](./faq.md) | Reference | Common vendor questions |

<Note>
The vendor portal is managed by your own `vendor_admin` via the **Staff** page — not through a clinic's HR & Compliance. Clinics enable your company at their facilities; you manage your own catalog, orders, and invoices.
</Note>
