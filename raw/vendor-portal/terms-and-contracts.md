---
id: vendor-portal-terms-and-contracts
title: Terms and contracts
module: vendor-portal
audience: [vendor]
roles: [vendor_admin]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-11-11
app_route: /vendor/clinics/{clinic_facility_id}/terms
related:
  - vendor-portal-overview
  - vendor-portal-invoices-and-payment
  - vendor-portal-manage-catalog
  - vendor-portal-shipments
  - vendor-portal-onboarding
tags: [vendor, terms, contracts, billing-model, cadence, pricing, consignment, net30, append-version, AKS]
---

Terms record your commercial arrangement with each clinic: billing model, invoice cadence, whether invoices are drafted automatically, and pricing notes. You can keep default terms for a clinic and separate terms for a SKU class.

## Before you start

- Only an **Admin** (`vendor_admin`) can open and change terms.
- Your company's connection with the clinic must be approved. Saving is refused with "No approved relationship with this clinic" otherwise.

## Open a clinic's terms

1. Open **Clinics** (`/vendor/clinics`).
2. Click **Terms** on the clinic's row. The page opens at `/vendor/clinics/{clinic}/terms`.

**Switch clinic** takes you back to the Clinics list.

## The fields on a terms record

| Field | Values |
|---|---|
| **SKU class** | Optional. Blank means default terms for the clinic. |
| **Billing model** | Consignment — bill on use; Purchase — Net 30; Prepaid; Custom. |
| **Invoice cadence** | Per use, Weekly, Monthly, Net 30, Custom day. |
| **Auto-invoice** | On or off. When on, the clinic is included in automatic invoice drafting. See [Invoices and AR](/vendor-portal/invoices-and-payment/). |
| **Pricing notes** | Pricing tier name, Discount %, Payment terms, Title transfer, Expired stock policy, and Return window. These are recorded on the terms; they do not change prices. |

## Change terms

1. Click **Edit** on the terms card.
2. Change the fields.
3. Click **Save new version**.

Saving never overwrites the old terms. Each save adds a new version with the next version number, and earlier versions are listed under **Version history**. Invoices already drafted keep the terms they were drafted under.

## Limits in this release

- The page has no button to create the first terms for a clinic, and **Save new version** stays disabled until you edit an existing card. If a clinic has no terms yet, contact Medipyxis support.
- The banner says the clinic is notified when terms change; no notification is sent yet. Tell the clinic yourself.
- The **Pricing tier** picker, the examples in the **Auto-invoice** panel, and the **Acknowledgement** panel on the right show sample text, not your data.
