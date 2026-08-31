---
id: vendor-portal-terms-and-contracts
title: Terms and contracts
module: vendor-portal
audience: [vendor]
roles: [vendor_admin]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-08-31
app_route: /vendor/clinics/{clinic_facility_id}/terms
related:
  - vendor-portal-overview
  - vendor-portal-invoices-and-payment
  - vendor-portal-manage-catalog
  - vendor-portal-shipments
  - vendor-portal-onboarding-your-company
tags: [vendor, terms, contracts, billing-model, cadence, pricing, consignment, net30, append-version, AKS]
---

Terms are your commercial contract with each clinic — billing model, cadence, and pricing — and they are what drives every downstream invoice. Set them once per clinic (per SKU class when you need different rules for different product lines), and the auto-invoice engine takes over from there.

## Before you start

- You are signed in to the vendor portal as `vendor_admin`. **Only `vendor_admin` can create or change terms.** `vendor_user` and `vendor_sales` see terms read-only.
- Your company has an **approved tether** with the clinic. The terms upsert refuses to save if there is no approved relationship — see [Onboard your company](./onboarding-your-company.md).

## How to get to a clinic's terms

1. Open **Clinics** (`/vendor/clinics`). Every clinic tethered to your company appears here.
2. Click a row and choose **Terms** — the page opens at `/vendor/clinics/{clinic_facility_id}/terms`.

If you already know the clinic id, `/vendor/clinics/{id}/terms` opens the page directly. **Switch clinic** in the header jumps back to the clinics list.

## The fields on a terms record

Every terms row carries these fields. All four gate what happens later — read them as the contract clauses they are.

### Billing model

How title transfers and when you can bill. Pick one:

| Value | What it means |
|---|---|
| `consignment_use` | Stock sits at the clinic but title stays with you. **You only bill when a product is applied on a patient** (product use event). Unused stock is not billable. |
| `net30` | Standard purchase model. Title transfers on ship; you bill on ship with 30-day payment terms. |
| `prepaid` | Clinic pays before shipment. |
| `custom` | Anything not covered by the three above — spelled out in the pricing_tier metadata below. |

<Compliance>
Medipyxis' AKS safe-harbor posture is flat annual vendor fees only — the platform never takes title, never touches consignment stock, and does not price your product for you. The billing model on this record is between you and the clinic. Consignment lines are strictly billed on documented use; a consignment lot with no use event will not draft an invoice on your side and cannot be forced through this surface.
</Compliance>

### Cadence

How often the auto-invoice engine drafts against this clinic:

| Cadence | Draft job fires | Default due date |
|---|---|---|
| `per_use` | Every night | Net 45 |
| `weekly` | Every Monday | 30 days |
| `monthly` | 1st of each month | 45 days |
| `net_30` | Every night (accumulating) | 30 days |
| `custom_day` | Every night (your terms drive grouping) | 30 days |

Cadence is independent of billing model. `consignment_use` + `weekly` is a legitimate combination: bill weekly against use events that landed in the prior week.

### Auto-invoice

The **on/off switch** for automatic drafting. When off, use events still land, but no draft appears until someone clicks **Run cadence now** on the invoices page or you compose an invoice by hand. Leave this on for any clinic where you want the nightly job to work for you.

### Pricing tier (metadata)

A structured note on the commercial deal:

- `tier_name` — e.g. `flagship_partner`, `preferred_rate`, `pilot`.
- `discount_pct` — headline discount off list.
- `payment_terms` — free-text (e.g. `Net 30 with 2% early pay`).
- `title_transfer` — free-text (e.g. `on ship`, `on use`).
- `expired_stock_policy` — free-text (e.g. `swap within return window`).
- `return_window` — free-text (e.g. `30 days from receipt`).

None of these fields drive pricing math on their own — the auto-invoice engine bills at the price on the product record. They are the human-readable contract memo attached to the row.

### SKU class (optional)

Leave blank for **default terms** that apply to every product you supply to this clinic. Set a **SKU class** when you need different terms for a specific product family — for example, `graft_ctp` under consignment while everything else is net30. The invoice engine picks the most specific matching row, falling back to the default.

## The append-version model

**Editing a terms row does not overwrite the old one.** Every save creates a new version:

- `version` increments per `(vendor_id, clinic_facility_id, sku_class)`.
- Older versions stay in the table and stay visible in the **History** section on the page.
- **Invoices keep the terms they were generated under.** An invoice already drafted at version 3 will not shift to version 4 pricing.
- The clinic is notified in-app when terms change. This is enforced by the platform, not by you — you cannot silently move a clinic to worse terms.

The page's amber banner ("Append-version model — changes create a new version …") is a reminder of this contract, not a soft warning.

## Create the first terms record

1. On **Terms** for the clinic, click **New terms**.
2. Optionally enter a **SKU class** (leave blank for default terms).
3. Fill in **Billing model**, **Cadence**, **Auto-invoice**, and any **Pricing tier** metadata that reflects the commercial deal.
4. Click **Save new version** in the header.

The row appears with `version: 1`. The auto-invoice engine will start drafting against it on the next cadence run.

## Update terms

1. Click an existing row to **Edit**.
2. Change any field. The version indicator on the page shows this will become `v{current + 1}`.
3. Click **Save new version**. The old version drops into **History**; the new one is now current.
4. The clinic AP contact is notified in-app.

Because invoices carry the version they were drafted under, past invoices are not disturbed.

<Note>
Practical rule: version freely. If a mid-quarter pricing change is negotiated, save a new version the day it is agreed. Anything already drafted stays on the old terms; anything drafted after will pick up the new ones. There is no "effective date" field — the append point is the effective date.
</Note>

## SKU-class terms in practice

Two common patterns:

- **Default net30 + one class on consignment.** Leave the default row on `net30 / monthly` and add a `graft_ctp` row on `consignment_use / per_use`. Grafts bill only on documented application; everything else bills monthly against shipments.
- **Default consignment + one class prepaid.** Consignment for the entire supply relationship, except one high-value class the clinic prepays.

The engine reads the most specific matching row, so specificity beats generality.

## What terms do **not** control

- **Product pricing** — that lives on the catalog SKU / product record, not on terms.
- **BAA state** — separate row on `crm_vendors`; terms cannot be saved without an approved tether, but the BAA itself is managed on the tether.
- **Shipment behavior** — how you fulfill (bulk Excel, single manual, API) is separate; terms only govern how you invoice.
- **Claim context on invoice lines** — driven by `billing_links` and the clinic's billing side, independent of your terms.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Save button greyed out | Not `vendor_admin`, or no approved tether with this clinic | Have your `vendor_admin` sign in; verify tether status in **Clinics**. |
| "No approved relationship with this clinic" on save | Tether is pending, suspended, or terminated | Return to the tether; you cannot save terms against an unapproved clinic. |
| Auto-drafts not appearing | `auto_invoice` is off on the latest version | Edit the row, set `auto_invoice: on`, save new version. |
| Wrong product family being billed under default terms | No SKU-class row exists for that family | Add a SKU-class row with the correct billing model/cadence; the engine will pick it up on the next run. |
| Historic invoice priced differently from current terms | Append-version — the invoice used its terms version | Not a defect. Issue a credit line if the commercial deal changed retroactively. |

## Related

Auto-rendered from `related:` in frontmatter.
