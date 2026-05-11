---
id: vendor-portal-onboarding-your-company
title: Onboard your company to the vendor portal
module: vendor-portal
audience: [vendor]
roles: [vendor_rep, vendor_coordinator]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-04-24
related:
  - vendor-portal-index
  - vendor-portal-submit-product
  - admin-user-management
tags: [vendor, onboarding, invite, catalog]
prerequisites:
  - vendor-portal-index
---

# Onboard your company to the vendor portal

Complete initial setup so your brand and product catalog are correctly linked to the practice before any orders are placed.

## Before you start

- The practice's `practice_admin` or `vendor_coordinator` must initiate the process by creating your account. You cannot self-register.
- Have your company's legal name, brand name (as it should appear on catalog rows), and primary contact email ready.
- Prepare a list of the products you supply to this practice — you will confirm or add these in the final step.

## Step 1 — Practice admin creates your account

The practice admin handles this step. If you are a `vendor_rep`, you can share these instructions with the admin to help them:

1. The admin navigates to **HR & Compliance → Facility Users**.
2. They click **Invite User**.
3. They enter your email, name, and set your role to `vendor_coordinator`.
4. They click **Send Invite**.

You receive an invitation email from `noreply@medipyxis.com` with the subject line "You've been invited to Medipyxis."

## Step 2 — Accept the invitation

1. Open the invitation email and click **Set Password**.
2. You are taken to `https://app.medipyxis.com/login` with a pre-filled email.
3. Set a password of 12 or more characters with at least one number and one symbol.
4. Click **Sign In**. You land on the **Dashboard** with a restricted sidebar showing only the modules available to your role.

<Note>
The invitation link expires after 48 hours. If you miss the window, ask the practice admin to click **Resend** next to your row in Facility Users.
</Note>

## Step 3 — Confirm your brand and catalog rows

Before you can submit new products, confirm that your company brand is correctly set up in the Product Catalog.

1. Navigate to **Inventory → Product Catalog** from the sidebar.
2. Use the **BRAND** column filter to filter for your company's brand name.
3. Review each row:
   - Confirm the **NAME**, **SKU**, **LOT SUFFIX**, **CATEGORY**, **TYPE**, **HCPCS**, and **STATUS** are accurate.
   - If a product is missing, follow [Submit a Product](./submit-product.md) to add it.
   - If a field is incorrect on an existing row, click **Edit** on that row to correct it.
4. Confirm with the practice's `vendor_coordinator` that your catalog is complete before any shipments arrive.

<Warning>
Do not edit another manufacturer's product rows. You can only edit rows where your brand is listed in the **BRAND** column. Editing another brand's row will be flagged in the audit log and may result in your account being suspended.
</Warning>

## Result

Your account is active, you can log in, and your product catalog rows are confirmed as accurate. The practice's clinical staff can now select your products in Visit Wizard and generate IVRs routed to your company.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| No invitation email received | Spam filter or typo in email | Check spam; ask admin to resend |
| Sidebar shows no Inventory link | Role not set to `vendor_coordinator` | Ask admin to correct your role in Facility Users |
| Your brand does not appear in Product Catalog | Brand not yet set up | Ask admin or submit first product to establish it |
| Cannot edit a product row | You are not the listed brand | Contact the practice admin |
