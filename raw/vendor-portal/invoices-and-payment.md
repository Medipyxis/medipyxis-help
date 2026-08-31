---
id: vendor-portal-invoices-and-payment
title: Invoices and AR
module: vendor-portal
audience: [vendor]
roles: [vendor_admin, vendor_user]
type: how-to
estimated_minutes: 7
last_reviewed: 2026-08-31
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

The **Invoices** page is where your accounts-receivable work lives: the auto-drafted invoices Medipyxis produced against your terms with each clinic, the invoices you sent, and the AR aging that says who owes what and how long it has been outstanding. In Medipyxis, the vendor **sends** the invoice; the clinic's AP team reviews, disputes, or approves and pays it on their side.

## Before you start

- You are signed in to the vendor portal as `vendor_admin` or `vendor_user`. Terms are read-only for `vendor_user`; setting or changing the terms behind these invoices requires `vendor_admin`. See [Terms and contracts](./terms-and-contracts.md).
- You have at least one approved-tether clinic and product **use events** are landing there. Auto-drafting has nothing to bill until a use event lands.

## How invoices get created

There are two paths — same table, same downstream flow, different origin.

### Auto-drafted invoices (the default)

A nightly job (`invoice-draft-run`) walks every current **vendor_clinic_terms** row that has **auto_invoice = true** and groups uninvoiced product use events into one draft per vendor × clinic per cadence:

| Cadence on your terms | The draft job fires… | Due date defaults to |
|---|---|---|
| `per_use` | Every night | Net 45 |
| `weekly` | Mondays | 30 days |
| `monthly` | 1st of the month | 45 days |
| `net_30` | Every night (accumulating) | 30 days |
| `custom_day` | Every night (grouped by your terms) | 30 days |

Two rules keep the draft honest:

- **Idempotent** — only use events whose `invoice_line_id` is still null are candidates. Once a line has been drafted, the event is bound to that line and cannot land in another draft.
- **One draft per vendor × clinic per run** — you never get two drafts against the same clinic at the same cadence in the same night.

Each auto-drafted invoice shows the `auto` source badge on the list.

### Vendor-composed invoices (the escape hatch)

For off-cadence bills — setup fees, non-consumption charges, corrections — use **New invoice** at the top of the page. The composer lets you attach line items manually and pick the target clinic (must be an approved tether). These carry the `manual` source badge.

## The Invoices page at a glance

Top of the page, four cards report **AR Aging** across all your open invoices:

- **Current** — not yet due.
- **1–30 days past due**.
- **31–60 days past due**.
- **60+ days past due**.

Below that is the invoice table. Every row shows status, source (`auto` or `manual`), the clinic, invoice number, totals, and the last transition date.

### Statuses on the vendor side

| Status | What it means |
|---|---|
| `draft` | Auto-drafted or in the composer — not yet sent. You can still add adjustments (line removals, credits) before you send. |
| `sent` | You clicked **Send to clinic**. The clinic AP team can now approve, dispute, or hold each line. |
| `disputed` | The clinic disputed one or more lines. A dispute record and a reason are attached. |
| `paid` | Fully approved and paid on the clinic side. |

Approve, dispute, and hold actions on the clinic side are reversible — nothing is a hard block.

## Send an invoice

1. Open **Invoices** and pick a draft.
2. Review the lines. Each line carries the use event(s) behind it, the product/lot detail, and, when available, **claim context** joined via `billing_links` — so you can see whether the claim that consumed the product was paid, denied, or is still pending on the clinic's billing side. See [claim context](#claim-context-on-invoice-lines).
3. Apply any pre-send adjustments if needed:
   - **Remove** a line you should not be billing (e.g. wasted-only lot with no consumption).
   - **Credit** a line with a documented amount and reason.
4. Click **Send to clinic**. The invoice transitions from `draft` → `sent`, and the clinic's AP workspace picks it up in their **Received invoices** queue.
5. The clinic can then **approve**, **dispute** (with a reason), or **hold** each line. Your list refreshes with the outcome.

<Warning>
Once you send an invoice, you cannot un-send it — the transition is one-way. Corrections after send happen through the clinic's dispute flow or a credit invoice from your side. Review adjustments carefully before clicking Send.
</Warning>

## Claim context on invoice lines

Every line on an auto-drafted invoice was born from a **product use event** with a `visit_id`. Where the clinic later filed a claim that carried that visit, `billing_links` joins the two, and the line shows a **claim status** badge:

| Badge | What it says |
|---|---|
| `paid` | The clinic's claim for the visit that consumed your product was paid. |
| `denied` | The claim was denied — check the denial detail sidebar for expected amount and category. |
| `pending` | Claim submitted, not yet adjudicated. |
| `not filed` | The visit exists but no claim has been submitted yet. |

Reimbursement rollup at the top of the invoice detail summarizes total billed, total paid, and total denied on the visits behind the lines. Denial reasons are summarized (category, not the full remit) — the clinic can opt in per-tether to share the fuller detail, but the default is minimum-necessary.

This is what makes the invoice worth reading before you send: a line whose underlying claim was denied is a candidate for a credit or a delay, not a straight bill.

## Handle a disputed invoice

When the clinic disputes:

1. The invoice moves to `disputed` and a `vendor_invoice_disputes` row is created with the clinic's reason.
2. The disputed lines are highlighted on the detail page.
3. Work with your clinic contact — often through the **Messages** thread attached to the invoice — to resolve. You can then issue a **credit line**, or the clinic can reverse the dispute and approve.

The clinic can also **hold** individual lines while they work them, without disputing the whole invoice. Held lines sit outside the aging buckets until they release.

## AR aging and follow-up

The four aging KPI cards are your working queue. A practical cadence:

- **Current** — no action; watch cadence firing on your terms.
- **1–30 past due** — start a Messages thread with the clinic AP contact on the invoice.
- **31–60 past due** — escalate through your `vendor_sales` account owner (the health signal on that clinic in the CRM is already moving).
- **60+ past due** — check whether the tether is still `approved`; if it has gone suspended, the invoice remains payable but new use events stop.

## Run cadence now

`Run cadence now` on the header manually triggers the draft job for your vendor. Use it when you know a use event has landed but you do not want to wait for the nightly window — for example, before month-end close.

## What vendors do not do here

- **Approve or pay invoices.** That happens in the clinic's Accounts Payable workspace. You send; they reconcile.
- **See patient names or full claim remits.** Lines carry initials + birth year, provider name, lot, product, and claim category — no chart data.
- **Cross a title-transfer line the terms did not authorize.** Consignment lines only bill on use; purchase lines bill on ship. The `billing_model` on your terms is the gate — see [Terms and contracts](./terms-and-contracts.md).

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| No drafts appearing the morning after use events landed | `auto_invoice` on the vendor_clinic_terms row is `false`, or cadence did not fire this run | Open **Terms** for that clinic and set auto_invoice on; or click **Run cadence now**. |
| A use event you expected is not on any draft | The event is already bound to a prior line, or the tether was not approved when the event landed | Search the clinic's use events for the visit; if it is bound, it will not re-draft — issue a credit if incorrect. |
| Send button disabled | Invoice is not in `draft` status | Refresh — someone on your team already sent it. |
| Disputed lines have no reason | Clinic disputed without filling a reason — allowed at the API level | Message the clinic AP contact through the invoice thread. |
| Claim context missing on a line | Clinic has not filed the claim yet, or `billing_links` was not written for that visit | The badge will update once the claim is filed and linked; no action on your side. |

## Related

Auto-rendered from `related:` in frontmatter.
