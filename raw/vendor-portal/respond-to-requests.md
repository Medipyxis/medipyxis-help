---
id: vendor-portal-respond-to-requests
title: Respond to clinic requests
module: vendor-portal
audience: [vendor]
roles: [vendor_admin, vendor_user]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-08-31
app_route: /vendor/requests
related:
  - vendor-portal-overview
  - vendor-portal-manage-orders
  - vendor-portal-shipments
  - vendor-portal-invoices-and-payment
tags: [vendor, requests, IVR, orders, accept, ship, decline, tether]
---

**Clinic Requests** is where a clinic-side IVR turns into a real order on your desk. Every request in this queue is attributed to your catalog, came from an approved-tether clinic, and is waiting on you to accept it, ship it, or decline it.

## Before you start

- You are signed in to the vendor portal as `vendor_admin` or `vendor_user`.
- Your company has at least one **approved** tether with a clinic. Requests from suspended, revoked, or terminated tethers never surface here — that guardrail lives on the read path.
- The clinic ordered a SKU **you** pushed through the catalog. Attribution flows: your catalog push → clinic accepts → product carries your vendor id → the clinic's IVR-to-order step stamps the order with your id.

## What lands in the queue

Two kinds of requests show up on `/vendor/requests`:

- **IVR-derived orders** — a clinician completed an IVR on the clinical side and the system converted it to an `inventory_orders_v2` row against your catalog. These carry a provider request id and the wound context is already resolved.
- **Bulk orders** — an inventory admin at the clinic placed a straight replenishment order for one of your SKUs. No provider request id; treat these as reorders.

Each row shows:

| Column | What you see |
|---|---|
| **Request** | Clinic-side order name, with a `(bulk)` tag when there is no provider request behind it. |
| **Product** | Product summary (name, SKU, HCPCS/Q-code). |
| **Qty** | Total requested quantity across line items. |
| **Status** | `Pending` (1), `Shipped` (2), `Completed` (4). |
| **Actions** | Accept, Ship, Decline — greyed out once the request has shipped. |

The **Refresh** button re-pulls the queue on demand; the page is otherwise read-only until you act.

## What each action does

Actions here write to the tables the **clinic** watches, not just to your side — the clinic sees your response inside minutes of you clicking.

### Accept

Acknowledges the request. **No status change on the shared order.** By design, the clinic does not see movement at Accept — the clinic sees movement at Ship. Use Accept when you want an internal timestamp that says "we saw this and it's ours to fulfill" without changing anything on the clinic's screen. It writes an audit-log entry to your side.

### Ship

Moves the clinic order to **Shipped** (status 2) and creates the shipment projection (an Advance Ship Notice tied to the existing order — not a new order minted on top of theirs). This is the transition the clinic watches for: their receiving team can now expect the box, and the same shipment will pre-stage in their receiving queue when it arrives. See [Create and track shipments](./shipments.md) for the fields the shipment carries (carrier, tracking number, expected date, lot detail).

<Note>
Ship is a forward-only transition. Once a request shows **Shipped** you cannot re-open it from this page — corrections happen on the shipment record.
</Note>

### Decline

Two behaviors depending on the request type:

- **IVR-derived** — moves the clinic-side provider request to **Declined** (status 2). The clinic sees the decline immediately and can re-work the IVR or route to another vendor.
- **Bulk** — records an audit note only. The clinic order stays open; the clinic's inventory admin gets the message through your account contact so they can re-route or cancel.

Use Decline for anything you cannot fulfill: out of stock beyond a reasonable window, product discontinued, tether-scope mismatch, or a catalog error you have not yet fixed.

## Field workflow

1. Open **Requests** (`/vendor/requests`). New requests land at the top.
2. For each request:
   - Confirm the product, quantity, and target clinic match what your ops team can fulfill today.
   - Click **Accept** if you are handing to fulfillment and want an internal timestamp.
   - Click **Ship** when the box goes out. Enter carrier, tracking number, and any lot detail on the shipment record (linked from the request).
   - Click **Decline** with a short reason if you cannot fulfill.
3. Watch the clinic-side status column update on your next refresh. The Home page also aggregates open requests, so the queue drains as you work.

## Guardrails you can rely on

- **Tether scope** — a request never appears from a clinic whose relationship is not `approved`. If a tether goes revoked/suspended/terminated after a request was raised, the request drops out of your queue (no historical PHI exposure through the requests surface).
- **Optimistic guard on Ship** — the transition is forward-only and refuses to re-fire on a request that already shows Shipped. You cannot accidentally double-ship by re-clicking a stale button in another tab.
- **PHI minimum-necessary** — request rows carry the clinic id, product info, and quantities; patient identifiers on the underlying IVR are handled by the clinic. If your team needs de-identified per-patient consumption, use [Use Events](./manage-orders.md) rather than reverse-engineering it from requests.

## Where a request goes after you Ship

- The clinic-side order flips to **Shipped**.
- Your **Shipments** list gets a new ASN (`/vendor/shipments`) — track it to delivery there.
- When the product is consumed at the clinic, the resulting **Use Event** joins the shipment lot to the patient (initials + birth year only) and eventually drives the auto-drafted invoice on your terms. See [Invoices and AR](./invoices-and-payment.md).

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| An expected clinic order is not in the queue | The clinic tether is not yet approved, or the product they ordered is not attributed to your catalog | Verify the tether status in **Clinics**; verify the SKU has been pushed and accepted at the clinic. |
| Ship button is disabled | Request already shows Shipped or Completed | Refresh — you (or another user on your team) already shipped it. |
| Decline did not update on the clinic side | Bulk request without a provider request id | Bulk declines record an audit note only; contact your clinic AP or ops contact to close out the order on their side. |
| A request from a revoked-tether clinic reappeared | Tether was re-approved | Requests re-surface as soon as the tether returns to `approved`. |

## Related

Auto-rendered from `related:` in frontmatter.
