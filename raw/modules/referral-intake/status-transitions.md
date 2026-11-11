---
id: referral-intake-status-transitions
title: Referral status transitions (reference)
module: referral-intake
audience: [intake, admin]
type: reference
estimated_minutes: 2
last_reviewed: 2026-11-11
related:
  - referral-intake-overview
tags: [referrals, status]
---

# Referral status transitions (reference)

Use this as a map of the six referral columns on the Patient Intake board. Creating a patient (from **Add New Referral** or from the Fax Review Queue) always places the referral in **New Referrals**. You move cards between columns by dragging them on the board.

## The six columns

- **New Referrals** — where every new referral starts.
- **Info Needed** and **Financial** — the team is still collecting information, or is working insurance.
- **Ready for Assignment** — ready for a clinician to be assigned.
- **Assigned** — a provider is assigned; schedule the first visit from the card or from Fleet Calendar.
- **Non-Admit** — any card can be dragged here when the referral will not be admitted.

## What each move means

- **— → New Referrals** — click **Create Patient** on the Add New Patient form, or **Approve & Create Patient** on a fax. The patient record is created (Active) and the referral starts on the board.
- **New Referrals → Info Needed or Financial** — drag the card. The team is still collecting information, or is working insurance.
- **Financial or Info Needed → Ready for Assignment** — drag the card. The referral is ready for a clinician to be assigned.
- **Ready for Assignment → Assigned** — drag the card to Assigned (a provider dialog opens and a toast asks you to select a provider), or click **Assign** on a Ready for Assignment card. If you close the dialog without choosing a provider, the card goes back to its previous column.
- **Any column → Non-Admit** — drag the card. The referral will not be admitted.

Assigning does not create the patient. The card stays in Assigned; book the first visit with **Schedule** on the card or from **Fleet Calendar**. Once that booked visit is more than 7 days in the past, the card drops off the board.

The Fax Review Queue is a separate page, not a column or a status on this board. There is no separate intake coordinator role — the intake-oriented role in Medipyxis is **Referral Coordinator**.
