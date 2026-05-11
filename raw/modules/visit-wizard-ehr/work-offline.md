---
id: visit-wizard-ehr-work-offline
title: Document a visit offline
module: visit-wizard-ehr
audience: [clinician]
roles: [nurse, np, md]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-wound-assessment
  - visit-wizard-ehr-sign-off
tags: [offline, sync, home-visit, connectivity, work-offline]
---

# Document a visit offline

Enable the **Work Offline** toggle before entering an area without reliable internet so you can complete Visit Wizard documentation and sync it when connectivity is restored.

## Before you start

- You are signed in to Medipyxis on a device with the app or supported browser loaded.
- The patient's record and today's appointment have loaded at least once while connected — offline mode uses locally cached data.
- You understand which features are unavailable offline (listed below) so you can plan your workflow accordingly.

<Warning>
Enable **Work Offline** before losing connectivity. If the app loses connection unexpectedly without the toggle on, it may not cache incomplete form data. Toggle **Work Offline** proactively when you know you are heading into a low-signal area.
</Warning>

## Steps

### Enable Work Offline

1. **Open the Visit Wizard** for the patient appointment. The wizard must fully load while you still have connectivity.
2. **Click Work Offline** in the top toolbar. The toolbar displays an amber "Offline" badge confirming the mode is active. The Visit Timer continues to run.
3. **Proceed through the Visit Wizard steps** as you normally would. Data entered in each step is stored locally on the device.

   <Note>
   Auto-save (every 30 seconds) continues to write to local storage while offline. **Save Draft** also works offline and saves to the device.
   </Note>

### Restore connectivity and sync

4. **Restore network connectivity** — move to an area with signal, or reconnect to Wi-Fi.
5. **The app detects connectivity automatically** and displays a "Syncing…" banner. All locally stored visit data uploads to the Medipyxis servers.
6. **Confirm sync completion.** The banner changes to "Sync complete." The appointment status on the **Fleet Calendar** updates to reflect the current step progress.
7. **Click Work Offline again** to disable offline mode if you plan to continue documenting online, or leave it enabled for the remainder of the visit if connectivity remains intermittent.

---

## What works offline

| Feature | Offline behavior |
|---|---|
| Visit Wizard steps 1–17 | Available — data saved to local device storage |
| Auto-save (every 30 seconds) | Saves to local storage |
| **Save Draft** | Saves to local storage |
| Photo upload | Photos captured and queued; upload completes on sync |
| Visit Timer | Continues running |
| GPS geofence logging | Continues logging; log uploads on sync |
| Step navigation | Available |
| Wound Assessment fields | Available |
| LCD Navigator™ checklist review | Available (pre-populated from cached data) |

---

## What does NOT work offline

The following features require an active internet connection and are disabled when **Work Offline** is toggled on:

| Feature | Reason |
|---|---|
| Sending faxes | Requires real-time clearinghouse connection |
| ERA (Electronic Remittance Advice) | Requires live payer data feed |
| **Quick Jump** global search (`Ctrl+K` / `Cmd+K`) | Requires server-side index |
| IVR (Insurance Verification Request) submission | Requires live payer portal connection |
| Loading a new patient record not previously cached | Patient data must be fetched from the server |
| Real-time duplicate-patient warnings | Requires server-side patient index |

<Note>
The Orders & DME module link in step 11 opens a new browser context that requires connectivity. If you need to place orders, return to this step after syncing.
</Note>

---

## Result

After syncing, all documentation entered offline is available in the patient's encounter record. The encounter is in the same state as if it had been completed with a live connection. You can continue to step 17 (**Provider Attestation**) online to sign and lock the note.

<Compliance>
The encounter timestamp and GPS geofence log uploaded during sync reflect the actual time and location of care — not the sync time. These are the timestamps that appear on the signed note and in audit logs.
</Compliance>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| "Sync failed" banner after reconnecting | Server unreachable or authentication expired | Wait 60 seconds and retry; if the issue persists, contact your administrator to check session status |
| Photo queue stuck at "Uploading" | Image file is corrupted or exceeds 10 MB | Delete and re-upload the photo; retake if necessary |
| Step data missing after sync | Offline toggle was not enabled before connectivity was lost | Contact support — partial recovery may be possible from server-side draft logs |
| **Quick Jump** search returns no results | Work Offline mode is still active | Toggle **Work Offline** off after reconnecting |

## Related

Auto-rendered from `related:` in frontmatter.
