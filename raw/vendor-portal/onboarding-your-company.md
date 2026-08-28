---
id: vendor-portal-onboarding
title: Onboard your company on the vendor portal
module: vendor-portal
audience: [vendor]
roles: [vendor_admin]
type: how-to
estimated_minutes: 12
last_reviewed: 2026-08-28
app_route: /vendor/onboarding
related:
  - vendor-portal-overview
  - vendor-portal-manage-catalog
  - vendor-portal-shipments
tags: [vendor portal, onboarding, invitation, BAA, modalities, catalog push]
---

Medipyxis vendors set up their portal account through a five-step self-serve wizard. A clinic starts the process by inviting your company from their side; you finish it at your own pace. When you reach the end, your first tethered clinic already has your catalog on their picker and their receiving queue ready for your first shipment.

## Before you start

- You need the invitation email from the clinic that's tethering your company. The email contains a one-time onboarding link with an embedded token. Every step is saved as you go, so you can close the tab and come back to the same link.
- Have your company's legal name, EIN, primary NPI (if applicable), business address, and BAA document on hand.
- Decide who from your team will be an admin and who will be a regular user or sales rep — you'll invite them in step 4.

<Note>
Your company must exist in the Medipyxis vendor registry once. If a clinic tries to invite a company that's already onboarded, they get a "connect to existing vendor" flow instead of a duplicate onboarding. See [Vendor directory](../modules/crm/overview.md) on the clinic side.
</Note>

## The five steps

The wizard header shows your current step out of five. You can jump back to a completed step to make changes; you cannot skip forward.

| # | Step | What you do |
|---|---|---|
| 1 | **Profile** | Company identity — name, legal name, EIN, NPI, address, contact info |
| 2 | **BAA** | Upload or link to your signed Business Associate Agreement |
| 3 | **Modalities** | Pick the product categories you sell (drives wizard filtering) |
| 4 | **Staff** | Invite your team members with their roles |
| 5 | **Catalog push** | Push your product catalog to the clinic that invited you |

## Step 1 — Profile

1. Open the onboarding link from your invitation email. The wizard lands on the Profile step with the clinic's invitation summary at the top.
2. Fill in the profile fields:
   - **Company name** — the trading name the clinic will see.
   - **Legal name** — used on invoices and contracts.
   - **EIN** — required for AR/AP.
   - **NPI** — optional, used only if you dispense in your own name.
   - **Primary contact name and phone** — the person clinic ops should call about your shipments.
   - **Address** — street, city, state, ZIP.
   - **Website** — optional public URL for the vendor directory listing.
3. Click **Save & Continue.** Every field is saved server-side; you can leave and resume without losing anything.

## Step 2 — BAA

Medipyxis requires a signed BAA before your account can go live.

1. Either upload the PDF of your executed BAA or paste a link to it in your document management system.
2. Click **Save & Continue.** The BAA is marked as pending review; a Medipyxis compliance rep verifies within one business day.

<Warning>
Your account moves to `pending_verification` until BAA review completes. You can keep filling in the wizard, but catalog push (step 5) is blocked until the BAA is approved.
</Warning>

## Step 3 — Modalities

Pick the product categories you sell. Modality drives which vendor slot you occupy in the clinic wizard's product picker — for example, checking **Amniotic / placental allografts** means clinicians see your SKUs under the Amniotic modality in the Visit Wizard.

Available modalities:

- Amniotic / placental allografts (grafts like Vendaje AC, AmnioWrap2)
- Biologics — collagen and ECM (matrix products like Artacent, ProgenaMatrix)
- PRP / autologous (Aurix and similar)
- DME and offloading
- NPWT (negative pressure)
- Compression and dressings
- Skin substitutes — synthetic
- Lab and diagnostics

Check every category that applies. You can add or remove modalities later from **Settings**, but at least one is required to save.

## Step 4 — Staff

Invite your team members to the portal. Each invitee receives an email with a login link.

For each teammate:

1. **Email** — their work address.
2. **First and last name.**
3. **Role:**
   - `vendor_admin` — full access, can invite others, edit settings, sign terms with clinics, and approve BAAs on your side.
   - `vendor_user` — regular access to catalog, shipments, orders, invoices, and clinic communications. Cannot invite others or change company-level settings.
4. Click **Add another** to line up more invites, then **Save & Continue.** Invites go out immediately.

<Note>
Sales reps who need the CRM (`vendor_sales`) can be added later from **Staff** once the account is fully live. The onboarding wizard sticks to admin and user roles so the initial invitations stay simple.
</Note>

## Step 5 — Catalog push

The last step lands you on the clinic that invited you, ready to push your first catalog.

1. The clinic name from the invitation is pre-filled. If BAA approval is still pending, the push button is disabled with a note explaining why.
2. Pick which SKUs to push:
   - **All active products** (recommended for the first push).
   - **Select specific products** — check individual rows in the SKU table.
3. Click **Push catalog.** Every selected SKU lands in the clinic's `inventory_product_catalog_v2` and shows up in their Visit Wizard picker.
4. The confirmation screen summarizes what was pushed, how many rows the clinic's review queue caught, and any master-product proposals awaiting confirmation.

## What happens next

- Your portal moves from `pending_verification` to `active` once the BAA is approved.
- Your invited teammates receive login emails.
- The clinic that invited you sees your SKUs on their catalog with a **New** badge; their inventory admin reviews and accepts the SKUs to make them wizard-selectable.
- Future SKU updates you make on accepted catalog rows auto-apply to that clinic — only brand-new SKUs need another one-click accept.
- You can push your catalog to additional tethered clinics from **Catalog → Push to clinic** at any time. See [Manage your catalog](./manage-catalog.md).

## Resume or edit

- **Same invitation link** — reopen the email. The wizard picks up on the last saved step.
- **After onboarding completes** — every setting collected during onboarding is editable from the portal's **Settings** area. Modalities are edited under **Settings → Modalities**, staff under **Staff**, BAA under **Settings → Compliance**.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| "Invitation token invalid" | Link expired (30-day TTL) or already consumed | Ask the clinic to send a fresh invitation |
| Wizard stuck on step 2 | BAA rejected in review | Check your email for the review note; upload a corrected copy |
| Cannot pick modality | Modality is Medipyxis-scoped (labs, synthetics) — not open in v1 | Reach out to Medipyxis support to enable; some modalities are limited by policy |
| Staff invite email not received | Recipient's mail filter | Ask them to check spam, then resend from **Staff → Reinvite** after onboarding completes |
| Catalog push button disabled | BAA still `pending_verification` | Wait for compliance review, or skip step 5 and push after activation from **Catalog → Push to clinic** |
