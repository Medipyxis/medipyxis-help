---
id: orders-dme-overview
title: Orders & DME overview
module: orders-dme
audience: [clinician, admin]
roles: [clinician, medical_director, admin]
type: concept
estimated_minutes: 3
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/patients/{patient_uuid}/orders-dme
related:
  - orders-dme-create-dme-order
tags: [orders, DME, laboratory, imaging, referrals, home-health]
---

# Orders & DME overview

Orders & DME is the per-patient hub for generating and tracking clinical orders that flow out of a visit — from durable medical equipment to outbound referrals. It opens from a patient's chart.

_Orders & DME — order types run as tabs across the top._

## Order types (tabs)

- **DME** — durable medical equipment and wound-care supply orders.
- **Labs** — lab orders.
- **Imaging** — imaging orders.
- **Referrals** — referral orders to specialists.
- **Home Health** — orders to home health agencies.

## How an order is placed and routed

For each order you pick a recipient from your clinic's enabled vendors and home health agencies. It is the same list on every tab. Then you choose an order form — the vendor's own form or a shared one — and fill it in. Orders can be saved as a **Draft** first.

To send the order, use **Send Fax**: the order moves to **Submitted** once the fax is accepted. Send Fax appears only for organizations that have the Referral Intake feature. **Send Email** emails the form to the vendor but does not save the order or change its status, so an emailed order leaves no record here. A fix is being tracked.

Each order carries a status: **Draft**, **Submitted**, **Received**, **Provisioned**, **Rejected**, **Canceled**, or **Needs Info**. Provisioned orders show an **Upload Results** button, but it does not upload anything yet; a fix is being tracked.

See [Create a DME order](/modules/orders-dme/create-dme-order/) for the step-by-step flow.

## How orders connect to visits

- **During a visit** — the **Orders & DME** step (Step 11) of the Visit Wizard lets you place orders for that patient without leaving the wizard.
- **Standalone** — open a patient's chart and go to Orders & DME to place or track orders outside a visit.
