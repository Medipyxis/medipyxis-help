---
id: admin-security-and-compliance
title: Security settings and HIPAA compliance
module: admin
audience: [admin]
roles: [admin, superadmin]
type: concept
estimated_minutes: 6
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/hr
related:
  - admin-index
  - admin-role-config
  - admin-user-management
tags: [HIPAA, security, audit-log, session, BAA, compliance]
---

# Security settings and HIPAA compliance

This page explains how Medipyxis handles idle sessions, sign-in, activity logs, access control, and Business Associate Agreements (BAAs).

## Automatic logoff (session timeout)

Medipyxis signs you out after 30 minutes without any activity. A warning appears one minute before, and clicking, typing, touching the screen or scrolling resets the timer. This applies to every signed-in user and is not a per-user setting.

The HIPAA Security Rule lists automatic logoff as an implementation specification (45 CFR §164.312(a)(2)(iii)). If your organization needs a different timeout, raise it with your Medipyxis implementation contact.

## Authentication

People sign in to Medipyxis with their email address and password. Two-factor sign-in and single sign-on (SSO) are not available for the Medipyxis app today.

## Activity logs

Medipyxis records user activity to an activity log.

**To see activity logs:**

1. Go to **HR & Compliance → Activity Logs**.
2. Filter by action (for example Login, Role Change, User Edit, File Upload), by date range (Today, This Week, Last 7 Days, Last 30 Days, All Time), and by user, or search the log.
3. Use **Export Logs** to download the filtered entries.

HIPAA requires audit controls that record activity in systems holding PHI (45 CFR §164.312(b)).

## Business Associate Agreements (BAAs)

Medipyxis acts as a Business Associate under HIPAA. A BAA between your organization and Medipyxis is required before processing any real patient data.

- Your BAA is executed during the contracting phase with Medipyxis.
- If you add a new facility under an existing organization, confirm with your Medipyxis account manager whether the existing BAA covers it or whether an addendum is needed.

## PHI in support contexts

If you open a support ticket or share a screen with Medipyxis support, avoid exposing PHI. Use placeholder patient names (_Jane Doe_, _John Smith_) in screenshots and support communications, and share record identifiers rather than patient details where possible.

## Access control

Which features each role can open is set per organization in **Administrator → Organization Role Config** (see [Configure organization roles and permissions](/admin/role-config/)). Give each person the least-privileged role that lets them do their job.

## Security summary

| Control | How it works |
|---|---|
| Automatic logoff | Signed out after 30 minutes of inactivity, with a one-minute warning |
| Sign-in | Email and password; no two-factor sign-in or SSO yet |
| Activity logs | HR & Compliance → Activity Logs, with filters and Export Logs |
| BAA | Executed at contracting with Medipyxis |
| Role-based access | Administrator → Organization Role Config |
