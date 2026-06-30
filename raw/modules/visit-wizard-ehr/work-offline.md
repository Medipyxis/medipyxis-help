---
id: visit-wizard-ehr-work-offline
title: Document a visit offline
module: visit-wizard-ehr
audience: [clinician]
roles: [clinician]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-06-29
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-assessment
  - visit-wizard-ehr-sign-off
tags: [offline, sync, home-visit, connectivity, work-offline]
---

# Document a visit offline

Offline documentation is **no longer a toggle in the web Visit Wizard**. The web app is now online-only by design.

## What changed

The previous "Work Offline" mode (local caching with a Restore prompt) has been removed from the web app. In its place, the Visit Wizard now **saves your work continuously** to the server as you go — there is no separate offline toggle to enable or sync step to run.

## What this means for you

- **Just document normally.** Each field is auto-saved as you complete it, and an in-progress visit can be recalled on any device by its visit record — including after a brief connection drop.
- **The autosave status indicator** in the wizard reflects the live connection state (for example, *saving* or *offline*) for the server autosave. It is not a user-enabled offline mode.
- **For true offline field visits** in areas with no connectivity, a dedicated Medipyxis offline app is planned. It is not yet available to clinical teams; this article will be updated with instructions when it ships. In the meantime, complete documentation where you have a connection.

<Note>
If your team previously relied on the in-wizard offline/backup behavior, coordinate with your implementation manager on the current save model before your next field visit.
</Note>

## Related

Auto-rendered from `related:` in frontmatter.
