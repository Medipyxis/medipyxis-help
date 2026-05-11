---
id: admin-security-and-compliance
title: Security settings and HIPAA compliance
module: admin
audience: [admin]
roles: [practice_admin, super_admin]
type: concept
estimated_minutes: 6
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/hr
related:
  - admin-index
  - admin-role-config
  - admin-user-management
tags: [HIPAA, security, audit-log, MFA, session, BAA, compliance]
---

# Security settings and HIPAA compliance

Medipyxis is built to the HIPAA Security Rule. This page explains how session controls, audit logging, MFA enforcement, and Business Associate Agreements (BAAs) work, and where admins configure each.

## HIPAA session settings

HIPAA requires covered entities to implement automatic logoff for electronic PHI systems. Medipyxis enforces this at the platform level; admins can tune the timeout window.

**Session timeout** is configurable per organization:
- Navigate to **HR & Compliance → Facility Users → Organization Security Settings**.
- Set **Idle Session Timeout** in minutes (minimum 5, maximum 60, default 20).
- Sessions that exceed the idle threshold display a 60-second warning modal; if the user does not confirm activity, they are signed out and must re-authenticate.
- The **On Duty** pill in the header turns gray when the session is within two minutes of timeout.

<Compliance>
The HIPAA Security Rule (45 CFR §164.312(a)(2)(iii)) requires automatic logoff procedures. The Medipyxis session timeout satisfies this requirement; do not set the timeout above 60 minutes.
</Compliance>

## Multi-factor authentication (MFA)

MFA adds a second verification step at login. Medipyxis supports TOTP authenticator apps (Google Authenticator, Authy, 1Password).

- To **enforce MFA for all users in your organization**: Navigate to **HR & Compliance → Organization Security Settings** and toggle **Require MFA** to on.
- When enforcement is on, any user who has not yet enrolled an authenticator is prompted to do so at their next login before they can reach the Dashboard.
- Individual users can enroll or rotate their authenticator via **Profile → Security**.

<Warning>
Enabling MFA enforcement will lock out any user without an enrolled authenticator until they complete enrollment. Notify staff before enabling this setting.
</Warning>

## Audit logs

Every action a user takes in Medipyxis — viewing a patient record, editing a claim, toggling a role permission — is written to an immutable audit log.

**To access audit logs:**
1. Navigate to **HR & Compliance → Activity Logs**.
2. Filter by **User**, **Date Range**, **Module**, or **Action Type**.
3. Each row shows: timestamp (UTC), user, facility, module, action, and the record affected (patient ID or entity UUID).
4. Click any row to expand the full event payload, including before/after field values for edits.

**Log retention:** Logs are retained for a minimum of six years per HIPAA standards. Logs cannot be deleted by any application user, including `super_admin`.

**Export:** Click **Export CSV** to download a filtered log set for audit or legal review.

<Compliance>
HIPAA requires an audit trail for access to PHI (45 CFR §164.312(b)). Medipyxis's Activity Logs satisfy this requirement. Your BAA with Medipyxis covers the log data as protected health information.
</Compliance>

## Business Associate Agreements (BAAs)

Medipyxis operates as a Business Associate (BA) under HIPAA. A BAA between your organization and Medipyxis is required before processing any real patient data.

- Your BAA is executed during the contracting phase with Medipyxis sales.
- A copy is stored in your organization's **HR & Compliance → Documents** section.
- If you onboard a new facility under an existing organization, confirm with your Medipyxis account manager whether the existing BAA covers the new facility or whether an addendum is needed.

## PHI redaction in support contexts

If you open a support ticket or share a screen with Medipyxis support, PHI is automatically redacted in any log exports made from within the support flow. Direct screenshots are not automatically redacted — use placeholder patient names (*Jane Doe*, *John Smith*) in support communications.

## Security summary

| Control | Location | Default |
|---|---|---|
| Idle session timeout | HR & Compliance → Organization Security Settings | 20 minutes |
| MFA enforcement | HR & Compliance → Organization Security Settings | Off |
| Audit logs | HR & Compliance → Activity Logs | Always on, 6-year retention |
| BAA | HR & Compliance → Documents | Executed at contracting |
| Role-based access | `/administrator` → Organization Role Config | Seeded defaults |
