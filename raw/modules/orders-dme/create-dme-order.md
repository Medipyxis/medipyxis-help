---
id: orders-dme-create-dme-order
title: Create a DME order
module: orders-dme
audience: [clinician, admin]
roles: [clinician, medical_director, admin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/patients/{patient_uuid}/orders-dme
related:
  - orders-dme-overview
tags: [orders, DME, durable-medical-equipment, prescription]
---

# Create a DME order

Write a durable medical equipment order from the patient's **Orders & DME** page. You pick the vendor first, then the order form, then fill the form in and send it.

## Before you start

- The patient must already exist in Medipyxis.
- The vendor must be enabled for your clinic. The recipient list shows only your clinic's enabled vendors and home health agencies.

## Steps

- **Open Orders & DME.** From the patient's chart, click **Orders & DME**.
- **Select the DME tab.**
- **Click New DME Order.** If the patient has no DME orders yet, the button reads **Create DME Order**.
- **Pick the recipient.** The **Select recipient for DME Order** dialog lists your clinic's enabled vendors and home health agencies. It is the same list on every tab. Use **Search vendors and agencies…** to narrow it, choose the vendor, and click **Continue**.
- **Pick the form.** The **Choose custom form** dialog lists the vendor's own order forms and your clinic's shared DME forms, including the Medipyxis **Durable Medical Equipment Request** and **Wound Care Supplies Order**. Choose one.
- **Fill in the form.** The patient's name, date of birth, address, phone, and insurance, and the patient's assigned provider and NPI, are filled in from the chart when they are on file. On the Durable Medical Equipment Request you then add the equipment, HCPCS codes if you know them, quantity, length of need, diagnosis / ICD-10 codes, and the clinical rationale. A vendor's own form has its own fields.
- **Save or send** with one of the buttons below.
- **Save as Draft** keeps the order as a Draft so you can finish it later.
- **Send Fax** faxes the order to the vendor's fax number (filled in from the vendor record when one is on file). The order moves to **Submitted** once the fax is accepted.
- **Send Email** emails the form to the vendor as a PDF, but it does not save the order or change its status, so an emailed order leaves no record on the DME tab. A fix is being tracked. Until then, use Send Fax, or save a draft as well so the order is on file.
- **Submit** saves the order with status Submitted but does not send it to the vendor.

## Result

The DME order appears in the **DME** tab with its status (**Draft** until sent, then **Submitted** → **Received** → **Provisioned** as the vendor works it). The order is linked to the patient record for tracking.

Provisioned orders show an **Upload Results** button, but it does not upload anything yet. A fix is being tracked.

## During a visit

You can also order from the **Orders & DME** step (Step 11) of the Visit Wizard. It works inside the wizard; it does not open the patient's Orders & DME page.

## Medicare DME orders

Medicare expects a DME order to include the diagnosis (ICD-10) code, the length of need, and the ordering provider's NPI. On the Durable Medical Equipment Request form, **Length of need** and **NPI** are not required fields, so check them before you send.

## Troubleshooting

- **Patient not found** — the patient has not been created yet. Add the patient via Referral Intake.
- **The vendor is not in the recipient list** — the vendor is not enabled for your clinic.
