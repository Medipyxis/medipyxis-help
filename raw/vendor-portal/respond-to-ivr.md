---
id: vendor-portal-respond-to-ivr
title: Respond to an Insurance Verification Request (IVR)
module: vendor-portal
audience: [vendor]
roles: [vendor_rep, vendor_coordinator]
type: how-to
estimated_minutes: 7
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/inventory-management
related:
  - vendor-portal-index
  - vendor-portal-submit-product
  - vendor-portal-shipment-and-uin
  - inventory-ivr-tracking
tags: [IVR, insurance, verification, graft, authorization]
prerequisites:
  - vendor-portal-onboarding-your-company
---

# Respond to an Insurance Verification Request (IVR)

An IVR (Insurance Verification Request) is generated when a clinician plans to use one of your products and the practice needs to confirm payer authorization before the product ships or is applied. Your response directly affects whether the order proceeds.

## Before you start

- You need `vendor_coordinator` role.
- Your products must already be in the Product Catalog and approved. See [Submit a Product](./submit-product.md).
- IVRs are initiated by the practice — you cannot create an IVR yourself.

## IVR status lifecycle

```
Submitted → Pending → Approved
                   ↘ Declined → Agreed
```

| Status | Meaning |
|---|---|
| `Submitted` | Practice has sent the IVR to your company; action required |
| `Pending` | You have acknowledged receipt and are working with the payer |
| `Approved` | Payer has confirmed authorization; product can be applied |
| `Declined` | Payer denied authorization for this product |
| `Agreed` | Despite payer denial, the practice and vendor have agreed on an alternative arrangement (e.g., product substitution or patient self-pay) |

## Steps — responding to a new IVR

1. Navigate to **Inventory → IVR Tracking** from the sidebar.
2. The IVR Tracking list shows all IVRs routed to your company's products. IVRs in `Submitted` status require your immediate attention.
3. Click the IVR row to open the detail panel.
4. Review the request details: product name, HCPCS code, patient (name is PHI-redacted — shown as a reference number), date of service, payer name, and member ID.
5. Click **Acknowledge** to move the IVR from `Submitted` to `Pending`. This starts the turnaround clock.
6. Contact the payer using the payer name shown. Do not contact the patient — PHI access is not granted.
7. When you receive the payer's decision:
   - If approved: Click **Mark Approved** and enter the authorization number provided by the payer.
   - If denied: Click **Mark Declined** and enter the denial reason code.
8. If the payer declines and the practice wants to proceed under a separate arrangement, the practice's `vendor_coordinator` will initiate the `Agreed` transition — you do not set this status yourself.

## Turnaround SLA

Medipyxis displays a countdown timer on each IVR from the moment it reaches `Submitted`.

| Urgency flag on the referral | IVR response SLA |
|---|---|
| Routine | 72 hours from `Submitted` to `Approved` or `Declined` |
| Urgent | 24 hours |
| STAT | 4 hours |

If an IVR breaches SLA, it is flagged red in the IVR Tracking list and the practice's `vendor_coordinator` is notified automatically. Breaching SLA does not cancel the order — the practice decides how to proceed.

<Note>
You can filter IVR Tracking by status to focus on `Submitted` and `Pending` items. Save a filtered view by bookmarking the URL after applying the filter.
</Note>

## What happens after approval

Once you mark an IVR `Approved`:
- The clinician receives a notification that the product is authorized.
- The practice can proceed with scheduling the visit.
- A shipment record is created in **Inventory → Receiving**, ready for you to fulfill. See [Shipments and UINs](./shipment-and-uin.md).

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| IVR does not appear in your list | Product not linked to your brand, or wrong role | Confirm the product is in the catalog under your brand |
| Cannot mark Approved — button disabled | Authorization number field is empty | Enter the payer authorization number first |
| IVR shows STAT urgency but no alert | Notifications not enabled for your browser | Enable browser notifications on your profile page |
