---
id: vendor-portal-manage-catalog
title: Manage your catalog and push it to clinics
module: vendor-portal
audience: [vendor]
roles: [vendor_admin, vendor_user]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-08-28
app_route: /vendor/catalog
related:
  - vendor-portal-overview
  - vendor-portal-onboarding
  - vendor-portal-shipments
tags: [vendor portal, catalog, SKU, HCPCS, product master, push]
---

Your catalog is the single source of truth for every product you sell. It drives the Visit Wizard picker at every tethered clinic, sizes the shipment lines you upload, and matches your SKUs against Medipyxis's canonical product master so buyers see accurate cross-vendor comparisons.

## Before you start

- You need the `vendor_admin` or `vendor_user` role.
- Have your product line data ready: SKU, brand, product name, HCPCS Q-code, sizes, UDI-DI/GTIN if you have them.
- To push, your BAA must be approved and you must be tethered to at least one clinic.

## The catalog page

Open **Catalog** from the vendor sidebar. The page has two views:

- **Products** — every SKU in your catalog with its family, HCPCS, and status.
- **Master proposals** (amber banner when active) — SKUs where Medipyxis's matching rail found a possible match against the canonical product master. You confirm or reject each proposal.

Filter the products list by **Family** (Amniotic, Biologics, Conservative, etc.) using the pills above the table. Search the table by SKU, brand, or product name.

## Add or edit a SKU

1. Click **Add SKU** in the upper-right, or click a row's **Edit** action.
2. Fill in the product form:
   - **SKU** — your internal identifier. Must be unique within your catalog.
   - **Product name** — the label clinicians see in the wizard.
   - **Brand** — displayed in the wizard alongside the product name.
   - **Family** — Amniotic, Biologics, Conservative, PRP, or NPWT.
   - **HCPCS / Q-code** — required for amniotic and biologics; used by billing.
   - **Sizes** — one row per size (dimensions, unit of measure, computed area). The catalog derives price and quantity from these.
   - **UDI-DI / GTIN** — optional FDA identifiers. When provided, they raise your match confidence on the product master and improve clinic-side comparisons.
   - **Active** — clear this to soft-retire the SKU without deleting history.
3. Save. New SKUs land in an `unpublished` state until you push them (below).

## Push a catalog to a clinic

Pushing a catalog is what makes your SKUs selectable in a clinic's Visit Wizard. You can push all products at once or a specific subset.

1. Click **Push to clinic** from the catalog page (route `/vendor/catalog/push`).
2. **Pick the target clinic** from the list of tethered clinics. Each row shows the tether date, BAA status, and provider count for context.
3. **Pick what to push:**
   - **All active products** — the default. Pushes every SKU with `Active = true`.
   - **Specific products** — check individual rows.
4. Click **Push catalog.** The confirmation screen shows how many SKUs landed in the clinic's catalog, how many are new, and how many updated existing accepted rows.

## What happens on the clinic side

- **New SKUs** land in the clinic's catalog with a **New** badge. Their inventory admin reviews and accepts them one time before they appear in the Visit Wizard.
- **Updates to already-accepted SKUs** auto-apply — no clinic review needed. This includes price changes, size additions, and HCPCS corrections.
- **Discontinued SKUs** (unchecked Active) send an alert to the clinic if they have on-hand lots or open orders.

<Note>
This is one-way. Clinics can accept or ignore new SKUs but cannot edit them. Their catalog row is a linked copy — the source of truth is your side.
</Note>

## Product Master and master proposals

Medipyxis keeps a canonical `product_master` — one row per real-world product, keyed on FDA UDI-DI, GTIN, and HCPCS Q-code. When you upload or edit a SKU, the matching rail decides whether your row is an "offer" against an existing master product or a new master row.

Three outcomes:

| Match confidence | What happens |
|---|---|
| **Exact ID match** (UDI-DI, GTIN, or Q-code) | Your SKU auto-links to the canonical master; no review needed |
| **Fuzzy match** (name + brand) | A proposal lands in your **Master proposals** rail — you confirm or reject |
| **No match** | A new master row is seeded as `pending_review`; Medipyxis compliance verifies it |

### Respond to a master proposal

The amber rail on the catalog page shows each pending proposal with:

- Your SKU on the left.
- Medipyxis's best-guess canonical product on the right (brand, generic name, HCPCS).
- Match reason (name + brand similarity, HCPCS overlap).

For each proposal:

- **Confirm match** — your SKU is linked to the canonical product. Clinic-side comparisons now show your offer next to competitors' offers on the same master.
- **Reject** — the system treats your SKU as a distinct product and seeds a new pending_review master row instead.

<Warning>
Confirming a mismatch corrupts cross-vendor comparisons. When in doubt, reject and let Medipyxis compliance seed a new master row.
</Warning>

## Cross-vendor comparisons on the clinic side

Because your SKUs are linked to a canonical master, clinics see them alongside other vendors' offers for the same product. The comparison is a **neutral sort — price ascending, then vendor name** — locked in code. Medipyxis does not offer paid placement or preferential ordering; this is a compliance guardrail (AKS safe harbor). If your pricing is competitive, the sort surfaces you automatically.

Buyers see a "Also available from" badge on any catalog row that has alternate sources on the same master. Your row is called out with an "Already in your catalog" badge on their side if they've already accepted your version.

## Bulk operations

- **Bulk update pricing** — download a CSV template from the catalog page, edit prices offline, and re-upload. All existing SKUs update in one write; new rows are ignored (use Add SKU for those).
- **Bulk activate / deactivate** — check multiple rows in the table and use the row-actions dropdown.
- **API updates** — every write on this page is also available via the Vendor API. See the API integration doc (coming soon) for the `PUT /catalog/skus/{sku}` contract.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| "Cannot push — BAA pending" | Compliance still reviewing your BAA | Wait for approval email; button re-enables automatically |
| Clinic doesn't see the SKU in their wizard | Clinic hasn't accepted the new SKU | Ask the clinic admin to open their vendor catalog page and click Accept |
| Proposal rail says "0 pending" but I expected matches | Every fuzzy match was already resolved, or all SKUs had exact IDs | Nothing to do — this is the empty state, not an error |
| Discontinued SKU still shows on clinic wizard | Their inventory admin hasn't marked their local copy inactive | Discontinuation propagates on next catalog sync (hourly) or immediately when the clinic re-accepts |
| SKU rejected on upload — "duplicate" | You already have that SKU in a different family or archived state | Search the catalog, unarchive if needed, or use a different SKU code |
