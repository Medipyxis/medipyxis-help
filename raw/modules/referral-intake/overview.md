---
id: referral-intake-overview
title: Referral Intake — overview
module: referral-intake
audience: [intake, admin]
roles: [intake_coordinator, referral_coordinator, practice_admin]
type: concept
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/referrals
related:
  - referral-intake-new-referral
  - referral-intake-fax-queue-review
  - referral-intake-detail-panel
  - referral-intake-status-transitions
tags: [referrals, intake, kanban]
---

# Referral Intake — overview

Referral Intake is where every patient starts. Open it from the **Referral Intake** item in the sidebar. The page heading is **Patient Intake**, with the line “Manage incoming patient referrals through the intake workflow.”

From the header you can open the **Fax Queue** (it goes to the Fax Review Queue — it is a button, not a kanban column), **Fleet Calendar**, or **Add New Referral**.

## The kanban columns

- **New Referrals** — A newly created patient/referral. Creating a patient with **Create Patient** or **Approve & Create Patient** always starts the referral here.
- **Info Needed** — Waiting on information the team still has to collect.
- **Financial** — Insurance or financial follow-up. Cards are moved here by the team; they are not auto-routed just because insurance was entered on the form.
- **Ready for Assignment** — Ready for a clinician to be assigned.
- **Assigned** — The team is assigning, or has assigned, a clinician. Click **Assign** on a Ready for Assignment card, or drag the card here, and pick a provider. The patient record already exists from create — Assigned does not create it. Schedule the first visit with **Schedule** on the card or from **Fleet Calendar**. The card stays in the Assigned column, including after the first visit is booked. When that booked visit is more than 7 days in the past, the card drops off the board.
- **Non-Admit** — The referral will not be admitted. Drag the card into this column.

## Key surfaces

- **Add New Patient form** — opened by **Add New Referral**. See [Add a new patient from Referral Intake](/modules/referral-intake/new-referral/) and the [section-by-section walkthrough](/modules/referral-intake/intake-wizard/).
- **Fax Review Queue** — open it with the **Fax Queue** button on this board, from the **Fax Review Queue** tile under **Fax Center** in the sidebar, or by pressing ⌘K and typing "fax review queue". See [Review the Fax Review Queue](/modules/referral-intake/fax-queue-review/).
- **Detail panel** — click any card to open the right-hand drawer. Six tabs: Details · Documents · Chat · Precharting · History · Notes. See [Use the referral detail panel](/modules/referral-intake/detail-panel/).
