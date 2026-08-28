---
id: more-fax-file-to-chart
title: File a received fax to a patient chart
module: more-fax
audience: [intake, clinician]
roles: [intake_coordinator, referral_coordinator, nurse, np, admin]
type: how-to
estimated_minutes: 3
last_reviewed: 2026-08-28
app_route: /facility/{facility_uuid}/received-fax
related:
  - more-fax-overview
  - referral-intake-overview
tags: [fax, patient chart, triage, HIPAA]
---

Every fax that lands in Medipyxis stays in the **Received Fax** queue until you triage it. This how-to covers filing a fax to a specific patient's chart so it stops appearing in the queue and starts appearing on the chart's Documents tab.

## Before you start

- You know which patient the fax belongs to (patient name and DOB are enough).
- The patient already exists in Medipyxis. If not, create the patient in Patient Management or Referral Intake first — the fax cannot be filed to a chart that doesn't exist.

## Steps

1. **Open Received Fax** from **More → Received Fax**.
2. **Click the fax row.** The triage panel opens on the right with the fax preview, sender number, page count, and received timestamp.
3. **Search the patient.** Type the patient's name or DOB in the search field. Match on the row that opens — the panel confirms the selected patient with name, DOB, and MRN.
4. **Rename the file** (optional). By default the fax is filed with its original file name. Enter a custom file name if you want a friendlier label on the chart (for example, `Wound culture result 2026-08-15`).
5. **Add triage notes** (optional). Notes are stored on the audit trail and visible to anyone reviewing the chart later.
6. **Click File to Patient Chart.** The document lands on the patient's **Documents** tab under **Faxes** and the fax row leaves the pending queue.

## Result

- The fax appears on the patient's **Documents** tab, with the file name you chose and a link back to the original queue entry.
- The **Received Fax** queue removes the row from the pending list. Search **All faxes** or **Filed faxes** to find it again.
- The audit log records who filed the fax, when, and the triage notes you added.

<Note>
Filing a fax is tenant-scoped. You can only file to patients in the facility that owns the fax — the edge function rejects cross-facility filings, so you won't accidentally attach a fax to a chart in another practice.
</Note>

## Re-file the same fax

Filing the exact same fax to the same patient a second time is safe:

- The chart is not duplicated. The system detects the existing chart row and returns `already_filed: true`.
- The queue re-attempts the routing step if it failed the first time. Use this to recover a fax that filed to the chart but stayed pending in the queue (see troubleshooting).

## Also attach to a lab order

If the fax is a lab result, you can attach it to a specific lab order in addition to filing it to the chart:

1. After filing to chart, the triage panel loads the patient's open lab orders.
2. Pick the matching order.
3. Click **Attach to Lab Order.** The fax appears as a result on that order in **Orders & DME**.

Both actions can be done from the same triage session — you do not need to reopen the fax.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| "Document filed, but this fax could not be marked as routed" | Chart write succeeded; queue update failed | Click **File to Patient Chart** again — the re-file retries the queue update |
| "You do not have access to this fax" | Fax belongs to another facility in your organization | Switch to that facility from the Organization Selector, then reopen the fax |
| Patient search returns no results | Patient not created yet, or you are looking in the wrong facility | Create the patient in Patient Management or Referral Intake first |
| No PDF preview shown | The fax file did not finish uploading from the fax vendor | Wait 30 seconds and reload. If it persists, contact support with the fax ID |
| Filed fax not visible on chart | Chart cache stale | Open the patient's Documents tab and pull to refresh, or reload the browser |

## Related

- **[Received Fax overview](./overview.md)** — the full queue workflow, sender allowlists, and archive actions.
- **[Referral intake](../referral-intake/overview.md)** — inbound faxes that create a new referral instead of filing to an existing chart.
