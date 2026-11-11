---
id: billing-work-queue
title: Work the Billing Work Queue and submit claims
module: billing
audience: [billing]
roles: [biller, admin]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing/work-queue
related:
  - billing-overview
  - billing-submit-claim
  - billing-coding-review-drawer
  - billing-eligibility-and-verify-insurance
  - billing-stedi-actions-inbox
  - billing-timely-filing
  - billing-denial-management
  - billing-ar-aging
  - billing-era-posting
tags: [billing, work-queue, readiness, claim-status, Stedi]
---

# Work the Billing Work Queue and submit claims

The Billing Work Queue is the biller's daily home. It is a **calendar-synced readiness board**: one row per encounter (appointment) in your date range, showing the visit, the progress note, and billing readiness side by side so you can see exactly what is blocking each claim. It is not a claims-processing gate — it surfaces where each encounter stands and gives you the actions to move it forward.

## Before you start

- You have the billing lead, coder, medical director, or admin role. (The biller role cannot change a Claim Status.)
- You understand that readiness is **derived** from the visit and note state — a claim is ready to bill once the visit is Seen and the progress note is complete.

---

## Work Queue columns

Open **Billing Operations** from the sidebar, then click **Work Queue** under **Quick Actions** on the Overview tab. Each row is an encounter:

- **Patient** — Patient name.
- **DOS** — Date of service (the appointment date).
- **Visit Status** — Derived: Scheduled · Seen · Not Seen · No Show · Cancelled.
- **Note Status** — Derived: No Note · Draft · In Progress · Completed · Signed.
- **Billing Readiness** — Derived, shown as: Ready (Ready for Billing) · Pending Note (Pending Provider Completion) · Pending Sig (Pending Signature) · In Progress (Billing in Progress) · Billed · Not Billable.
- **Claim Status** — The biller-set status on the claim (if a claim exists). See the values below.
- **Charges** — Total charge on the claim, if one exists.
- **Provider** — The clinician on the appointment.
- **Blocking Reason** — Why the encounter isn't ready (e.g. "Note not completed", "Draft saved", "Patient not seen").
- **Biller Notes** — An internal note you can edit inline on each row.
- **Actions** — Open Chart · Edit · Review · Notify (see below).

_The Work Queue. Visit, Note, and Billing Readiness are derived from the encounter; Claim Status is set by the biller._

---

## How readiness is derived

You don't set Visit, Note, or Readiness — they come from the encounter:

- **No Show / Not Seen / Cancelled** → **Not Billable**.
- Note **Completed** → **Ready for Billing**.
- Note **Signed** but no progress note yet → **Pending Provider Completion**.
- Note **Draft Saved** → **Pending Signature**.
- Note **In Progress / No Note Started** → **Not Billable** (note not completed).
- Once a claim exists, readiness follows the claim: submitted/accepted/paid → **Billed**; needs-coding → **Ready for Billing**; otherwise **Billing in Progress**.

The **Blocking Reason** column tells you exactly what to chase.

---

## Claim Status values

When a claim exists, set its status from the **Claim Status** dropdown on the row. The available statuses are:

**Eligibility Needed · Ready · In Progress · Flag Clinical · Hold · Billed · Paid · Denied · Appealed · Corrected · Partial Pay · Patient Responsibility · Write-Off · Void · Needs Coding**

Changing a status is recorded in the claim's history; some transitions (for example **Flag Clinical**) surface a warning.

Users with the Biller role currently cannot change the Claim Status, from the row or with bulk actions: the change fails with an error. A fix is being tracked. Until then, ask a billing lead or admin to set it.

---

## Filtering the queue

Filters stack — combine any of:

- **Search** — Patient or provider name.
- **Date of Service** — Start and end date (defaults to the last 30 days).
- **Appointment status** — scheduled · confirmed · in_progress · completed · no_show · cancelled.
- **Visit status** — Scheduled · Seen · Not Seen · No Show · Cancelled.
- **Note status** — No Note · Draft · In Progress · Completed · Signed.
- **Billing readiness** — Ready for Billing · Pending Provider Completion · Pending Signature · Billing in Progress · Billed · Not Billable.
- **Claim Status** — Any of the 15 claim statuses above, or **No Claim**.
- **Payer** — Any payer present in the current results.
- **Claim Age** — Not Submitted · 0–30 · 31–60 · 61–90 · 90+ days (measured from the claim's submission date).

**Quick presets** above the table jump to common views: **Ready**, **Pending Doc**, **Pending Sig**, **No Show**, and **Not Seen**, each with a live count.

---

## Steps — work your day

- **Open the Work Queue.** Open **Billing Operations** from the sidebar, then click **Work Queue** under **Quick Actions**.
- **Set your date range** and click **Apply**. The queue defaults to the last 30 days.
- **Use a quick preset.** Click **Ready** to see encounters ready to bill, or **Pending Doc** / **Pending Sig** to see what's waiting on the provider.
- **Read the Blocking Reason.** For anything not ready, the column tells you what's missing.
- **Open the chart if you need context.** Click **Open Chart** to review the patient.
- **Nudge the provider when the note is the blocker.** Click **Notify** to record a provider reminder — it also posts an in-app notification and a message in the encounter's team-chat thread. Notify is available only when the visit is Seen and the encounter is not Ready for Billing, Billing in Progress, or Billed.
- **Review a claim's coding.** When a claim exists, click **Review** to open the [Coding Review drawer](/modules/billing/coding-review-drawer/).
- **Edit a claim.** Click **Edit** to open the claim in the claim form. See [Submit a claim](/modules/billing/submit-claim/).
- **Set the Claim Status.** Use the row's **Claim Status** dropdown as the claim progresses (Ready, Billed, Paid, Denied, etc.).
- **Add a biller note** inline in the **Biller Notes** column for anything your team needs to track.

---

## Bulk actions

Select the checkbox on any rows that have a claim, then use the **bulk action toolbar** to apply a Claim Status to all selected claims at once. Changing filters or the date range clears the selection so stale claims can't be batch-updated by mistake.

---

## Refresh, export, and the calendar

- The queue **auto-refreshes every 2 minutes** while the tab is visible; **Refresh** forces an immediate reload.
- **Export CSV** downloads the current filtered rows (patient, DOS, visit/note/readiness status, blocking reason, provider, biller notes).
- **Calendar** opens the Fleet Calendar.

---

## Result

At the end of your session, the **Ready for Billing** preset should be worked down, encounters waiting on the provider have a **Notify** on record, and each claim carries the correct **Claim Status**. Claims submitted to the payer flow through Stedi and post back as ERAs — see [ERA posting](/modules/billing/era-posting/).

---

## Troubleshooting

- **Encounter not in the queue** — Outside the selected DOS range, or the appointment status is filtered out. Widen the **Date of Service** range and clear filters.
- **Readiness stuck at Pending Provider Completion** — Note is signed but the progress note hasn't generated. Click **Notify** to remind the provider.
- **Readiness is Not Billable** — Patient was No Show / Not Seen, or the note isn't complete. Confirm the visit actually happened and the note is finished.
- **Notify is disabled** — The visit isn't Seen, or the encounter is already Ready for Billing, Billing in Progress, or Billed. Notify only applies to seen encounters still awaiting documentation.
- **Changing the Claim Status shows an error** — Your account has the Biller role, which cannot change it yet. Ask a billing lead or admin to set the status.
- **No Claim Status dropdown on a row** — No claim exists yet for that encounter. One is created automatically when the visit is signed; to create one by hand, use **New Claim** on Billing Operations.

## Related

Auto-rendered from `related:` in frontmatter.
