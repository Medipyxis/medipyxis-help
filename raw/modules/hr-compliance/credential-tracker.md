---
id: hr-compliance-credential-tracker
title: Monitor credentials and license expiry
module: hr-compliance
audience: [admin]
roles: [admin, clinical_manager]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-07-01
app_route: /facility/{facility_uuid}/hr
related:
  - hr-compliance-overview
  - hr-compliance-new-employee
tags: [HR, compliance, credentials, license, expiry]
---

# Monitor credentials and license expiry

The Credential Tracker surfaces license and certification status across your clinical staff so you can act before a credential lapses.

## Before you start

- Credentials are added by uploading them in the Credential Tracker (see below).

## View the credential dashboard

1. **Open HR & Compliance** and click **Credential Tracker.**
2. The tracker lists employees with their tracked credentials. Each row shows:

| Column | Description |
|---|---|
| **Employee** | Name and role. |
| **Credential Type** | The credential category (see the list below). |
| **Expiration Date** | Date the credential expires. |
| **Status** | **Valid**, **Expiring**, **Expired**, or **Missing**. |

Credential status is derived automatically from the expiration date:

| Status | Meaning |
|---|---|
| **Valid** | More than 5 days until expiration. |
| **Expiring** | Expires within the next 5 days. |
| **Expired** | Past its expiration date. |
| **Missing** | Required credential not yet on file. |

## Upload a credential

3. **Click Upload Credential.**
4. Select the **Employee** and the **Credential Type**. Available types include RN License, NP License, CPR Certification, WOCN Certification, NPI, DEA License, State Controlled Substance License, BLS Certification, and Other.
5. Enter the **Expiration Date** (required).
6. Attach the **Document** (PDF or image) and add **Notes** if needed. (Territory is set to National.)
7. **Save.** The credential appears in the tracker with the status derived from its expiration date.

## Renew a credential

8. **Find the expiring or expired credential** in the list.
9. **Upload the renewed credential** for the same employee and credential type — uploading over an existing credential updates it (the dialog reads **Update Credential**).
10. Set the new **Expiration Date** and attach the renewed document. On save, the status recalculates immediately.

## Result

Each employee's credentials show a live **Valid / Expiring / Expired / Missing** status, so you can see at a glance who needs a renewal within the next 5 days.

<Note>
A **Send Reminder** action appears on credential rows, but it does not currently send email — it is not yet wired to notifications. Follow up with staff directly for renewals.
</Note>

<Compliance>
Allowing a clinician with an expired license to document and bill for visits creates significant CMS audit risk. If a license lapses, deactivate the employee's Medipyxis access immediately from **Facility Users**.
</Compliance>

## Related

Auto-rendered from `related:` in frontmatter.
