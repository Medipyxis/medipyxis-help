---
id: hr-compliance-credential-tracker
title: Monitor credentials and license expiry
module: hr-compliance
audience: [admin]
roles: [admin, clinical_manager]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/hr
related:
  - hr-compliance-overview
  - hr-compliance-new-employee
tags: [HR, compliance, credentials, license, expiry]
---

# Monitor credentials and license expiry

The Credential Tracker shows license and certification status for your staff so you can act before a credential lapses.

## Before you start

- Credentials are added by uploading them in the Credential Tracker (see below).

## View the credential dashboard

1. **Open HR & Compliance** and click **Credential Tracker.**
2. The tracker lists employees with their tracked credentials, one row per employee, with these columns:

| Column | Description |
|---|---|
| **Employee Information** | The employee's name. |
| **Role & Territory** | The employee's role and territory. |
| **Credentials Summary** / **Credential Breakdown** | How many of the employee's credentials are Valid, Expiring, Expired or Missing. |
| **Next Expiration** | The soonest expiration date. |
| **Overall Status** | The employee's overall credential status. |
| **Actions** | Add or update a credential, and other row actions. |

Filter by credential type, status, role and territory, or click **Export CSV** to download the list.

Credential status is worked out from the expiration date:

| Status | Meaning |
|---|---|
| **Valid** | More than 5 days until expiration. |
| **Expiring Soon** | Expires within the next 5 days. |
| **Expired** | Past its expiration date. |
| **Missing** | The credential is recorded as missing and has no expiration date. |

## Upload a credential

1. **Click Upload Credential.**
2. Select the **Employee** and the **Credential Type**: RN License, NP License, CPR Certification, WOCN Certification, NPI, DEA License, State Controlled Substance License, BLS Certification, or Other.
3. Enter the **Expiration Date** (required).
4. Choose the **Territory** (it starts as National), attach the **Document** (PDF, JPG or PNG), and add **Notes** if needed.
5. **Save.** The credential appears in the tracker with the status worked out from its expiration date.

## Renew a credential

1. **Find the expiring or expired credential** in the list.
2. **Upload the renewed credential** for the same employee and credential type. When one already exists, the dialog reads **Update Credential**, fills in the current details, and saving overwrites the previous credential.
3. Set the new **Expiration Date** and attach the renewed document. On save, the status is worked out again.

## Result

Each employee's credentials show a **Valid / Expiring Soon / Expired / Missing** status, so you can see at a glance who needs a renewal within the next 5 days.

A **Send Reminder** action appears on credential rows and shows “Reminder sent successfully!”, but it does not send anything — it is not yet connected to email or notifications. Follow up with staff directly for renewals.

If a clinician's license lapses, an administrator can set their status to Inactive in **Facility Users** so they cannot keep documenting and billing visits.

## Related

Auto-rendered from `related:` in frontmatter.
