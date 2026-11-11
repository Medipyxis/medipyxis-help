---
id: visit-wizard-ehr-work-offline
title: Document a visit offline
module: visit-wizard-ehr
audience: [clinician]
roles: [clinician]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-assessment
  - visit-wizard-ehr-sign-off
tags: [offline, sync, home-visit, connectivity, work-offline]
---

# Document a visit offline

Offline documentation is **not a toggle in the web Visit Wizard**. The web app is online-only by design.

## How saving works

The Visit Wizard **saves your work continuously** to the server as you go — there is no separate offline toggle to enable or sync step to run.

## What this means for you

- **Just document normally.** Each field is auto-saved as you complete it, and an in-progress visit can be recalled on any device by its visit record — including after a brief connection drop.
- **The autosave status.** The wizard header shows the autosave status (Ready, Saving, or Error) and an Auto-save On / last-saved indicator. If your device loses its connection, the app header shows an Offline badge and the wizard status shows Error until a save goes through again. Neither is an offline mode you turn on.
- **For field visits** in areas with no connectivity, complete documentation where you have a connection.

If your team does field visits in areas with poor connectivity, coordinate with your implementation manager on the save model before your next field visit.
