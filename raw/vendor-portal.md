---
id: vendor-portal-overview
title: Vendor Portal Guide
module: vendor-portal
audience: [vendor]
roles: [vendor_admin, vendor_user, vendor_sales]
type: concept
estimated_minutes: 5
last_reviewed: 2026-08-28
related:
  - vendor-portal-onboarding
  - vendor-portal-manage-catalog
  - vendor-portal-shipments
  - vendor-portal-receiving
  - vendor-portal-manage-orders
  - vendor-portal-invoices-and-payment
  - vendor-portal-faq
tags: [vendor, portal, orders, catalog, invoices, tethers, product master]
---

The vendor portal is a dedicated app at `/vendor` with its own sign-in, for the companies that supply clinics on Medipyxis. It is separate from the clinical app and carries only the minimum PHI needed for consumption reporting (initials + year of birth on use events, IDs only on webhooks).

## Who uses the portal

| Role | Access |
|---|---|
| `vendor_admin` | Full access, including staff invites, terms with clinics, and BAA management |
| `vendor_user` | Catalog, shipments, orders, invoices, requests, messages, use events — no staff or company-level settings |
| `vendor_sales` | Sales CRM (accounts, contacts, activities, pipeline) plus read-only access to catalog, use events, and clinic health signals |

## The vendor portal at a glance

Navigation:

| Area | What you do |
|---|---|
| **Home** | Company overview: tether count, shipments in transit, invoices due, discrepancies to resolve |
| **Catalog** | Maintain your SKUs, push catalogs to clinics, respond to product-master proposals |
| **Shipments** | Bulk Excel upload or manual single shipment; track delivery and discrepancies |
| **Orders** | Clinic-initiated requests; accept, ship, or decline |
| **Use Events** | Where your products were consumed — de-identified (initials + birth year) |
| **Clinics** | Every clinic tethered to your company, with tether health and per-clinic terms |
| **Consignment** | On-clinic stock owned by you — positions, aging, reorder alerts |
| **Requests** | Discrepancies, IVR requests, benefit-verification queue |
| **Invoices** | Auto-drafted invoices per clinic terms; review, send, and track AR |
| **Terms** | Per-clinic billing model, cadence, and pricing (accessed from Clinics → row) |
| **CRM** | Vendor Sales CRM — accounts, contacts, pipeline, health scores (`vendor_sales` role) |
| **Messages** | Contextual threads on orders, shipments, invoices, and accounts |
| **Documents** | Per-tether document rail — BAAs, price sheets, marketing collateral |
| **Supply Radar** | Just-in-time forecast of tethered clinic shortfalls before they ship-out |
| **Verifications** | Benefit-verification queue when a clinic uses your patient-access service |
| **Staff** | Invite and manage your team (`vendor_admin` only) |
| **Settings → API** | Manage API keys, webhooks, and integration scopes (`vendor_admin` only) |

## PHI in the portal

The portal is minimum-necessary by design:

- **Use events** show `patient_initials` and `birth_year` — never full name, DOB, MRN, or diagnosis.
- **Webhooks** carry IDs only; you dereference through the API with your scoped key.
- **Denial reasons** on invoice lines are summarized (category, not full remit) unless the clinic explicitly opts in per-tether.

You never see patient names, addresses, phone numbers, insurance details, visit notes, or claim amounts.

## Getting started

| Step | Doc |
|---|---|
| 1. Accept your invite and finish onboarding | [Onboard your company](./onboarding-your-company.md) |
| 2. Maintain your catalog and push to clinics | [Manage your catalog](./manage-catalog.md) |
| 3. Create and track shipments | [Create and track shipments](./shipments.md) |
| 4. Understand how shipments land on the clinic side | [Receive a vendor shipment](./receiving.md) |
| 5. Handle clinic-initiated orders and IVR requests | [Manage orders](./manage-orders.md) |
| 6. Bill clinics under the terms you negotiated | [Invoices and payment](./invoices-and-payment.md) |
| 7. Common questions | [FAQ](./faq.md) |

<Note>
Your company must be onboarded through a clinic invitation. If you already have a Medipyxis account and a clinic invites you again, the invitation opens the "connect to existing vendor" flow rather than a duplicate onboarding wizard.
</Note>
