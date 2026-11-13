---
id: vendor-portal-invoices-and-payment
title: Invoices and AR
module: vendor-portal
audience: [vendor]
roles: [vendor_admin, vendor_user]
type: how-to
estimated_minutes: 7
last_reviewed: 2026-11-11
app_route: /vendor/invoices
related:
  - vendor-portal-overview
  - vendor-portal-terms-and-contracts
  - vendor-portal-respond-to-requests
  - vendor-portal-manage-orders
  - vendor-portal-shipments
  - vendor-portal-faq
tags: [vendor, invoices, AR, aging, auto-invoice, cadence, dispute, billing_links, claim-context]
---

The **Invoices & AR** page (`/vendor/invoices`) is where you send invoices to clinics and follow what is owed. You send the invoice; the clinic approves, disputes, or holds it on its accounts payable page.

## Before you start

- You are signed in to the vendor portal. Every vendor role can open **Invoices**.
- You can only invoice a clinic whose connection with your company is approved.

## The Invoices page

- The header shows the total open across clinics.
- Four cards show amounts by age: **Current**, **30 days**, **60 days**, and **90+ days**.
- The table lists each invoice's number, clinic, issue date, due date, number of lines, amount, source (`auto` or `manual`), and status (`draft`, `sent`, `disputed`, or `paid`).
- **Denial visibility** counts invoice lines whose underlying insurance claim was denied, and links to a disputed invoice when there is one.

The small notes under the age cards, the **Cadence runs** panel, and the **Run cadence now** button do not show or do anything real yet.

## Send an invoice you write

1. Click **New invoice**.
2. Pick the **Clinic** and the **Ownership Basis** (**Standard** or **Consignment**), and enter the **Invoice #** (required), **Invoice Date**, **Due Date**, and optionally a **PDF URL**.
3. Add line items (SKU, description, lot, quantity, unit cost). Click **+ Add line** for more.
4. Click **Send Invoice**. The invoice goes straight to the clinic.

## Automatic draft invoices

Medipyxis can draft invoices from the use events of your products, for clinics where your terms have **Auto-invoice** on. A draft groups use events not yet on another invoice, one draft per clinic per run. See [Terms and contracts](/vendor-portal/terms-and-contracts/).

In the current release, automatic drafting is not producing drafts. Use **New invoice** instead.

## The invoice page

Click an invoice to open it. A draft has a **Send to clinic** button.

For a drafted invoice, each line shows the use event, the patient's initials and year of birth, the product and lot, the line price, and, when the clinic has billed the visit, the claim status (`pending`, `paid`, `denied`, or `not filed`) with expected and received amounts. Below the lines are the subtotal, tier adjustment, freight, credit memo, and total due.

The side panels show a **Reimbursement rollup** (expected, received, at risk from denials, and lines reimbursed), **Denial detail** for denied lines (payer and denial code), and **Activity**.

## What the clinic does

The clinic can approve, dispute, or hold the invoice and its individual lines. None of these is final; the clinic can change its response. A dispute is recorded with the clinic's reason.
