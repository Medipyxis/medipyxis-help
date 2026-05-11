---
id: admin-index
title: Administrator Guide
module: admin
audience: [admin]
roles: [practice_admin, super_admin]
type: concept
estimated_minutes: 3
last_reviewed: 2026-04-24
app_route: /administrator
related:
  - admin-facility-setup
  - admin-user-management
  - admin-role-config
  - admin-billing-setup
  - admin-security-and-compliance
  - admin-data-import-export
  - admin-deactivating-and-archiving
tags: [admin, setup, roles, HIPAA]
---

# Administrator Guide

This guide covers everything a `practice_admin` or `super_admin` needs to configure, maintain, and govern a Medipyxis organization — from first-day facility setup through ongoing role and security management.

## Who should read this guide

| Role | What you own |
|---|---|
| `super_admin` | Organization-wide settings, role definitions at `/administrator`, cross-facility reports |
| `practice_admin` | Day-to-day configuration for one or more facilities: users, billing defaults, SLAs |

Clinicians, billers, and BD reps do not need to read this guide. Direct them to the module-specific articles in their area.

## How Medipyxis structures administration

Medipyxis draws a deliberate line between **organization-level** settings and **facility-scoped** settings.

**Organization-level (lives at `/administrator`, outside any facility context):**
- Organization Role Config — the role × module permission matrix that governs what every user can see and do across all facilities.

**Facility-scoped (accessed after selecting a facility in the Organization Selector):**
- User invitations and assignments — **HR & Compliance → Facility Users**
- Credential tracking, activity logs, bulk employee upload — **HR & Compliance**
- Inventory PAR levels, product catalog, vendor relationships — **Inventory**
- Superbill templates, fee schedules, Claim.MD credentials — **Billing**
- Business hours, fax numbers, intake SLAs — **Facilities**

This separation means a `super_admin` configures roles once for the whole organization, while a `practice_admin` handles the day-to-day settings within their assigned facility.

## Sub-pages in this guide

| Page | Type | What you'll learn |
|---|---|---|
| [Facility Setup](./facility-setup.md) | How-to | First-week tasks: UUID, fax, business hours, intake SLAs, superbill defaults |
| [User Management](./user-management.md) | How-to | Invite users, assign roles, bulk upload for 20+ employees |
| [Role Config](./role-config.md) | Reference + How-to | Permission matrix, toggle permissions, clone roles |
| [Billing Setup](./billing-setup.md) | How-to | Code Library, Fee Schedule, Claim.MD, ERA auto-post |
| [Security & Compliance](./security-and-compliance.md) | Concept | HIPAA session settings, audit logs, MFA, BAAs |
| [Data Import & Export](./data-import-export.md) | How-to | Bulk upload, ZusHealth sync, export referrals/claims, API keys |
| [Deactivating & Archiving](./deactivating-and-archiving.md) | How-to | Deactivate a facility, archive a patient, reassign work |

## Before you start

- Confirm your role is `practice_admin` or `super_admin`. The **Administrator** link appears in the sidebar only for those roles.
- Have your Supabase tenant credentials ready for the verification step in Facility Setup.
- If you are onboarding a brand-new organization, work through the sub-pages in table order — each builds on the previous.

<Note>
Changes made at `/administrator` (role permissions) propagate immediately to all logged-in users. A user whose module access is removed will lose that sidebar link on their next page load.
</Note>
