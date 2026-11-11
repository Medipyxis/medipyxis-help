---
id: inventory-ivr-tracking
title: Track Insurance Verification Requests (IVRs)
module: inventory
audience: [clinician, admin]
roles: [vendor_coordinator, practice_admin, nurse]
type: how-to
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/inventory-management
related:
  - inventory-overview
  - inventory-amniotic-biologics-conservative
  - inventory-product-catalog
  - inventory-main-inventory
prerequisites:
  - inventory-overview
tags: [inventory, IVR, insurance, prior authorization, biologics, graft, payer]
---

# Track Insurance Verification Requests (IVRs)

Request graft products for a patient's wound and track each request until the vendor responds. Requests are created from the patient's wound in the **Wound Cockpit**; **IVR Tracking** shows their status, fulfillment, and the vendor's response.

Submit and track IVRs for skin substitutes — no more spreadsheets.

## Before you start

- Your role needs the **Inventory** feature to open IVR Tracking and update IVRs.
- The patient must have a rendering provider assigned on their record. Without one, the request form shows "No rendering provider assigned to this patient." and cannot be submitted.
- The graft must be in the Product Catalog for the vendor you will send the request to.

## What is an IVR?

In Medipyxis an **IVR** is a request for graft products (amniotic or biologic) for a specific patient's wound, sent to the product's vendor. IVR Tracking describes these as "inventory vendor requests for wound care products" and records the vendor's outcome and response for each one.

## Create an IVR request

1. **Open the wound in the Wound Cockpit.** On the wound's card, click the IVR action button (it shows only when the wound's status calls for it). Its label depends on the wound's coverage check — for example **Ready for next step** or **Review LCD Gaps**.
2. **Review the readiness check.** The IVR readiness check shows the coverage verdict and checklist. Click **Proceed with IVR Request**.
3. **Fill in the IVR Inventory Request.**
  - **Product Category** — Amniotic or Biologics.
  - **Area (cm²)** — the wound area the graft must cover. The wound's width and length are shown for reference.
  - **Select Vendor** — the form then shows the vendor's fax or email, or **Manual Submission Required** when neither is on file.
  - **Select Products** — pick one or more products; search by name, SKU, brand, or HCPCS code.
  - **Diagnosis Code (ICD-10)** and **Clinical Justification** — both required.
  - **Coverage attestations** — every question must be answered; "No" and "Not applicable" are valid answers.
  - **Request Notes** — optional.

4. **Click Submit IVR Request.** The request appears in IVR Tracking as Pending.

## IVR statuses

An IVR is **Pending** until someone records an outcome. **Update Status** offers five statuses: **Pending**, **Incomplete**, **Agreed**, **Approved**, and **Declined**. Some status changes are not allowed; if you try one, Medipyxis shows an error and keeps the current status.

Setting **Approved** automatically creates an inventory order and a draft receiving for the requested products. The **Fulfillment** column then shows how many of the ordered items have been stocked.

## Track and update an IVR

1. **Open IVR Tracking.** From the **Inventory Management** hub, select **IVR Tracking**. The page is headed **IVR Request Tracking**, with counts for Total Requests, Pending, Approved, Declined, and Agreed.
2. **Find the request.** Search by patient, wound, vendor, order ID, request ID, or product. Click **Filters** to filter by status, method (Fax, Email, or Manual), and date (All Time, Today, Last 7 Days, or Last 30 Days).
3. **Update the status.** In the row's actions, click **Update Status**. Pick the new status, add **Outcome Notes**, optionally use **Upload Vendor Response Document**, and click **Update Status**. **Upload Response** opens the same dialog for rows that have no vendor response yet.
4. **View the details.** Click **View Details** to see the full request.

Use Outcome Notes for anything you need to keep, such as a reference or authorization number or the reason for a decline.

The table columns are Patient & Wound, Vendor & Method, Product(s), Submitted, Status, Fulfillment, Response, and Actions.

## Result

Lots allocated to the patient, including allocations made through an IVR, are offered in the Visit Wizard's **Interventions & Treatments** step.

## Troubleshooting

- **The request form says no rendering provider is assigned** — assign a provider on the patient record, then reopen the request.
- **Submit IVR Request shows errors** — complete the fields named in red: area, vendor, at least one product, diagnosis code, clinical justification, and every coverage attestation.
- **A status change is refused** — that change is not allowed from the current status. Record what happened in Outcome Notes instead.
