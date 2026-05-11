---
id: hr-compliance-credential-tracker
title: Monitor credentials and license expiry
module: hr-compliance
audience: [admin]
roles: [practice_admin, super_admin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/hr
related:
  - hr-compliance-overview
  - hr-compliance-new-employee
tags: [HR, compliance, credentials, license, expiry]
---

# Monitor credentials and license expiry

The Credential Tracker surfaces upcoming license and certification expirations across your clinical staff so you can act before a credential lapses.

## Before you start

- Credentials must first be added to an employee's profile — either during **New Employee Onboarding** (Step 3) or manually in the Credential Tracker.

## View the credential dashboard

1. **Open HR & Compliance** and click **Credential Tracker.**
2. The tracker lists every active employee with tracked credentials. Each row shows:

| Column | Description |
|---|---|
| **Employee** | Name and role. |
| **Credential Type** | License category (RN, NP, MD, PT, etc.) or certification name (BLS, ACLS, wound care cert, etc.). |
| **Credential #** | License or certificate number. |
| **Issuing Authority** | State board or certifying body. |
| **Expiry Date** | Date the credential expires. |
| **Status** | **Current**, **Expiring Soon** (within 60 days), or **Expired**. |

## Add a credential manually

3. **Click the employee's name** to open their record.
4. **Click + Add Credential.**
5. Fill in **Credential Type**, **Credential #**, **Issuing Authority**, **Issue Date**, and **Expiry Date**.
6. Upload a copy of the credential document (PDF or image) using the file picker.
7. **Click Save.** The credential appears in the tracker with the correct status.

## Update or renew a credential

8. **Find the expired or expiring credential** in the list. Rows with **Expiring Soon** status appear in amber; **Expired** rows appear in red.
9. **Click Edit** on the credential row.
10. Update the **Expiry Date** and credential number to reflect the renewal. Upload the renewed document.
11. **Click Save.** The status updates to **Current** immediately.

## Set up expiry alerts

12. **Click Settings** (gear icon, top-right of the Credential Tracker).
13. Set the **Alert Window** — the number of days before expiry that email notifications go to the employee and their assigned admin. Default is 60 days.
14. **Click Save Settings.**

## Result

Credentials flagged as **Expiring Soon** or **Expired** surface in the admin's dashboard action-items tiles so they do not require manual review of the full tracker.

<Compliance>
Allowing a clinician with an expired license to document and bill for visits creates significant CMS audit risk. Suspend the employee's Medipyxis access immediately if a license lapses — use Facility Users to deactivate the account.
</Compliance>

## Related

Auto-rendered from `related:` in frontmatter.
