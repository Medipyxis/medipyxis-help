---
id: referral-intake-setup
title: Configure Referral Intake for your facility
module: referral-intake
audience: [admin]
roles: [practice_admin, super_admin]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-04-24
related:
  - referral-intake-overview
  - admin-facility-setup
tags: [admin, setup, SLA, fax]
---

# Configure Referral Intake for your facility

This page is for admins turning Referral Intake on — or adjusting SLAs, fax numbers, and OCR thresholds.

## 1. Set your inbound fax number

1. Open **Administrator → Organization Role Config** (the admin surface, not the facility sidebar).
2. Under **Facility Settings → Fax**, enter the eFax number your clearinghouse provisioned.
3. Save. Test by having your clearinghouse send a 1-page fax — it should appear in the Fax Review Queue within 2 minutes.

## 2. Tune SLA timers

Defaults are 4 hours / 1 day / 2 days / same-day. Override per facility under **Facility Settings → Intake SLAs**.

## 3. OCR confidence thresholds

- **Auto-Create threshold** — default 85. Above this, the system creates a draft referral automatically. Lower this if your fax quality is poor; raise it if too many incorrect drafts are being created.
- **Manual-Only threshold** — default 60. Below this, the page goes to Review without auto-creating.

## 4. Seed payers

Medipyxis ships with 4,118+ US payers. If a local payer is missing, submit **Administrator → Payers → Request add**. Turnaround is 1 business day.

## 5. Assign coordinators

In **HR & Compliance → Facility Users**, assign the `intake_coordinator` role to the people who will own the queue. Only users with this role (or `admin`) can convert faxes.

## 6. Set auto-assignment rules (optional)

**Administrator → Referral Rules** supports rules like "If payer = Medicare and urgency = Routine, default Assigned Clinician = Dr. X". Order matters — first matching rule wins.

<Note>
Auto-assignment fills in Assigned Clinician on the card but does not skip the **Ready for Assignment** column. A human still confirms before the patient drops into Fleet Calendar.
</Note>
