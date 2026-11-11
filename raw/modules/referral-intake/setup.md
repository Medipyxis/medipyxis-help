---
id: referral-intake-setup
title: Configure Referral Intake for your facility
module: referral-intake
audience: [admin]
roles: [practice_admin, super_admin]
type: how-to
estimated_minutes: 6
last_reviewed: 2026-11-11
related:
  - referral-intake-overview
  - admin-facility-setup
tags: [admin, setup, SLA, fax]
---

# Configure Referral Intake for your facility

Most of Referral Intake does not have a separate setup wizard. What you can configure is which roles can see the feature.

## Who can open Referral Intake

Open **Organization Role Config** from the Administrator hub. That page turns features on or off per role for an organization. It does not set fax numbers, SLA timers, OCR thresholds, payer catalogs, or auto-assignment rules.

The page lists ten roles, shown by their system names: admin, clinical manager, medical director, clinician, **referral coordinator**, bd rep (business development representative), bd manager (business development manager), finance ap (finance / accounts payable), vendor coordinator, and biller. There is no separate intake coordinator role; intake staff use referral coordinator.

## Opening the queues

- **Referral Intake** in the sidebar opens the Patient Intake board.
- The **Fax Queue** button on the board, the **Fax Review Queue** tile under **Fax Center** in the sidebar, and ⌘K "fax review queue" all open the fax review page. Inbound faxes appear there once they have been received.

If a role cannot see Referral Intake, check that role's feature access in Organization Role Config rather than looking for Facility Settings → Fax, Intake SLAs, Payers → Request add, or Referral Rules — those screens are not part of this flow.
