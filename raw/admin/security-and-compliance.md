---
id: admin-security-and-compliance
title: Security settings and HIPAA compliance
module: admin
audience: [admin]
roles: [admin, superadmin]
type: concept
estimated_minutes: 6
last_reviewed: 2026-06-29
app_route: /facility/{facility_uuid}/hr
related:
  - admin-index
  - admin-role-config
  - admin-user-management
tags: [HIPAA, security, audit-log, session, BAA, compliance]
---

# Security settings and HIPAA compliance

Medipyxis is built to the HIPAA Security Rule. This page explains how session controls, audit logging, access control, and Business Associate Agreements (BAAs) work.

## Automatic logoff (session timeout)

HIPAA requires covered entities to implement automatic logoff for electronic PHI systems. Medipyxis enforces automatic logoff at the platform level: after a period of inactivity (approximately 30 minutes for clinical roles), the session ends and the user must sign in again. This behavior is enforced by the platform and is not a per-user setting.

<Compliance>
The HIPAA Security Rule (45 CFR §164.312(a)(2)(iii)) requires automatic logoff procedures. Medipyxis's platform-enforced idle logoff satisfies this requirement. If your organization needs a specific timeout value or additional session controls, raise it with your Medipyxis implementation contact.
</Compliance>

## Authentication

User authentication is managed centrally by Medipyxis. If your organization requires multi-factor authentication (MFA) or single sign-on (SSO), coordinate the setup with your Medipyxis implementation contact — these are configured at the account level rather than through a self-service toggle in the app.

## Audit logs

User activity in Medipyxis is recorded to an activity log for accountability and HIPAA audit purposes.

**To access activity logs:**
1. Navigate to **HR & Compliance → Activity Logs**.
2. Filter the log by user, date range, and activity type.
3. Each entry records who did what, when, and against which record.

<Compliance>
HIPAA requires an audit trail for access to PHI (45 CFR §164.312(b)). Medipyxis's Activity Logs support this requirement. Log data is covered as protected health information under your BAA with Medipyxis, and is retained per HIPAA record-retention requirements.
</Compliance>

## Business Associate Agreements (BAAs)

Medipyxis operates as a Business Associate (BA) under HIPAA. A BAA between your organization and Medipyxis is required before processing any real patient data.

- Your BAA is executed during the contracting phase with Medipyxis.
- If you onboard a new facility under an existing organization, confirm with your Medipyxis account manager whether the existing BAA covers the new facility or whether an addendum is needed.

## PHI in support contexts

If you open a support ticket or share a screen with Medipyxis support, avoid exposing PHI. Use placeholder patient names (*Jane Doe*, *John Smith*) in screenshots and support communications, and share record identifiers rather than patient details where possible.

## Access control

Role-based access is configured per organization at **`/administrator` → Organization Role Config** (see [Configure organization roles and permissions](./role-config.md)). Assign each user the least-privileged role that lets them do their job.

## Security summary

| Control | How it works |
|---|---|
| Automatic logoff | Platform-enforced idle timeout (~30 min for clinical roles) |
| Authentication (MFA/SSO) | Configured at the account level with your Medipyxis contact |
| Activity logs | HR & Compliance → Activity Logs; retained per HIPAA |
| BAA | Executed at contracting with Medipyxis |
| Role-based access | `/administrator` → Organization Role Config |
