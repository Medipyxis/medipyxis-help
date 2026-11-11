---
id: more-fax-file-to-chart
title: File a received fax to a patient chart
module: more-fax
audience: [intake, clinician]
roles: [referral_coordinator, clinician, admin]
type: how-to
estimated_minutes: 3
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/received-fax-log
related:
  - more-fax-overview
  - referral-intake-overview
tags: [fax, patient chart, triage, HIPAA]
---

Every fax your clinic receives is listed in **Received Fax Logs**. This how-to covers filing a fax to a patient's chart, so a copy appears on the patient's **Documents** page.

## Before you start

- You know which patient the fax belongs to.
- The patient already exists in Medipyxis. If not, create the patient first (for example from Referral Intake). A fax cannot be filed to a chart that does not exist.
- You have a clinical, billing, admin or referral coordinator role, with access to both the fax's facility and the patient's facility.

## Steps

1. **Open Received Fax Logs.** Click **Fax Center** in the sidebar, then the **Received Fax Logs** tile.
2. **Open the fax.** Click the fax row, or **Triage & Assign** in the row's Actions. The **Triage Fax** panel opens with the fax details (sender, fax number, pages) and a **View PDF** button.
3. **Select the patient.** Under **1. Select Patient**, search by name, date of birth or MRN, and pick the patient.
4. **Rename the file (optional).** Under **File Name (Optional)**, type a name. Leave it empty to keep the fax's file name.
5. **Add notes (optional).** Notes are saved on the fax and shown on its row in Received Fax Logs.
6. **Click File to Chart.** The panel shows "Fax successfully filed to patient chart! You can also attach it to an order below."

If the fax already has a patient assigned, you can also click **File to chart** in the row's Actions and confirm. A copy goes into that patient's documents; the fax stays in the list.

## Result

- A copy of the fax is on the patient's **Documents** page, with the document type **Received Fax** and the file name you chose.
- The fax's status in Received Fax Logs becomes **Completed**, unless it is attached to an order.
- The fax's audit log records that it was filed to the chart, and by whom.

You can file a fax only when you have access to both the fax's facility and the patient's facility. A fax already on one patient's chart cannot be filed to another patient's chart.

## Re-file the same fax

Filing the same fax to the same patient again is safe:

- The chart does not get a second copy. Medipyxis shows "This fax was already on the patient chart."
- If the fax was filed but could not be marked as routed, filing it again retries that step.

## Also attach to an order

If the fax is a result for one of the patient's orders, you can attach it to that order as well:

1. With the patient selected, look under **Attach to an Order**. It lists the patient's orders: lab, DME, imaging, home health or specialist referral.
2. Pick the order. The order number tells similar orders apart.
3. Click **Attach to Order.** The fax is listed with that order on the patient's Orders & DME page.

You can file to the chart and attach to an order in the same panel.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| "Document filed to the patient chart, but this fax could not be marked as routed" | The copy is on the chart, but the fax's status did not update | File it again. Filing again retries that step. |
| "You do not have access to this fax's facility." or "You do not have access to this patient's facility." | Your role does not cover that facility | Ask an administrator to check your facility access |
| "This fax is attached to an order for … It can only be filed to that patient's chart." | The fax is on another patient's order | File it to that patient's chart |
| Patient search returns no results | The patient has not been created yet | Create the patient first, then file the fax |
| "Unable to open fax — no viewable document available" | No stored document for this fax | Contact support with the fax's received time and sender |
| Filed fax not visible on the chart | The page has not refreshed | Reload the patient's Documents page |

## Related

- **[More (Fax) overview](/modules/more-fax/overview/)** — the Fax Center tiles and how incoming faxes are handled.
- **[Review the Fax Review Queue](/modules/referral-intake/fax-queue-review/)** — turn an incoming fax into a new patient instead of filing it to an existing chart.
