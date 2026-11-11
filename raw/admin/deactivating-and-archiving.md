---
id: admin-deactivating-and-archiving
title: Deactivate a facility, archive a patient, and disable a user
module: admin
audience: [admin]
roles: [admin]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-11-11
app_route: /facilities
related:
  - admin-index
  - admin-user-management
  - admin-security-and-compliance
tags: [deactivate, archive, offboarding, HIPAA]
---

# Deactivate a facility, archive a patient, and disable a user

When a patient leaves your care, a location closes, or an employee leaves, Medipyxis lets you hide them from day-to-day work without deleting anything. This page covers all three and how to undo each one.

## Before you start

- Archiving a patient needs access to **All Patients**; deactivating a facility needs **Facilities**; disabling a user needs **HR & Compliance**. Administrators have all three.
- Archive patients rather than deleting them. Archiving keeps the whole record and can be undone.
- Before you deactivate a facility or disable a user, move their open work (referrals, appointments, claims) to someone else.

## Archive a patient

1. Click **All Patients** in the sidebar and find the patient.
2. Click the archive button on the patient's row (**Archive patient**).
3. Read the confirmation — "This will hide the patient from active views. No data is deleted, and the patient can be restored later." — and click **Archive**.

**Effect of archiving:** the patient's status becomes Archived and they drop out of the active patient lists. Their visits, claims and documents are kept. You need an internet connection to archive.

**To restore a patient:** in **All Patients**, choose **Archived** in the status filter, then click **Unarchive patient** on their row and confirm. The patient returns as Active.

There is no merge tool for duplicate patients. If you find a duplicate chart, contact Medipyxis support before you archive either copy.

## Deactivate a facility

1. Click **Facilities** in the sidebar.
2. On the **Active Facilities** tab, find the facility.
3. Click the **Deactivate** button on its row. It takes effect straight away; there is no confirmation step.

A "Facility deactivated successfully" message confirms it, and the facility moves to the **Deactivated Facilities** tab. No data is deleted.

![Facilities list showing FACILITY, CONTACT, STATS, STATUS, and ACTIONS columns. Inactive facilities display a gray badge in the STATUS column.](../assets/facilities/list.png)
_The facilities list. A deactivated facility shows Inactive in the STATUS column on the Deactivated Facilities tab._

**Reactivating:** open the **Deactivated Facilities** tab and click **Reactivate** on the facility's row.

## Disable a user

Disabling a user stops them signing in without deleting their account or their history.

1. Go to **HR & Compliance → Facility Users**.
2. Find the user by name or email, and click the edit button on their row.
3. Set **Status** to **Inactive** and click **Save Changes**. (The **Archive User** button at the bottom of the form does the same after you confirm.)

**Effect:** the user is signed out everywhere, cannot sign in again, and their facility roles are switched off. Their notes, signatures and history are kept.

**Re-enabling:** open the same form, set **Status** back to **Active** and click **Save Changes**. Check their **Facility Assignment** before you save.

## Summary of offboarding actions

| Scenario | Correct action | Where |
|---|---|---|
| Patient deceased or no longer active | Archive (not delete) | All Patients → archive button on the row |
| Facility closing | Deactivate | Facilities → Deactivate button on the row |
| Employee leaving the organization | Disable (set Inactive) | HR & Compliance → Facility Users → edit |
| Duplicate patient record | Contact Medipyxis support | — |
