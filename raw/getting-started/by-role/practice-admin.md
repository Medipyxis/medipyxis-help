---
id: getting-started-admin-first-hour
title: Practice admin first hour
module: getting-started
audience: [admin]
roles: [admin]
type: quickstart
estimated_minutes: 60
last_reviewed: 2026-11-11
app_route: /administrator
related:
  - admin-user-management
  - admin-role-config
  - admin-facility-setup
  - hr-compliance-credential-tracker
tags: [onboarding, admin, setup]
---

# Practice admin first hour

By the end of this hour your facility is ready for clinical staff to sign in and work. You will have added your clinicians, reviewed role access, started credential tracking, and checked that faxes, scheduling, and billing are wired up.

## Before you start

- You have an admin account for your practice. (Medipyxis staff accounts are not in the role list and cannot be given from your organization.)
- You know your organization's billing NPI and tax ID.
- You have the list of clinicians to add and their credentials (license numbers, NPI, expiration dates).

## Step 1 — Confirm your facility exists (5 min)

1. Click **Facilities** in the sidebar.
2. Check your facility is listed and **Active**. New locations are added by Medipyxis support; click **Edit** to fill in the NPI, Tax Number, fax number and timezone.
3. Note the facility's ID — it's in the URL after `/facility/`.

Full guide: [Admin: Facility setup](/admin/facility-setup/)

## Step 2 — Review role access (10 min)

1. Click **Administrator** in the sidebar, then the **Organization Role Config** card.
2. Review the ten roles (admin, clinical manager, medical director, clinician, referral coordinator, bd rep, bd manager, finance ap, vendor coordinator, biller).
3. Tick or untick the features each role can open and click **Save Changes**. We recommend starting with what is there and only tightening once you see how your team uses the product.

Full guide: [Admin: Role configuration](/admin/role-config/)

## Step 3 — Add your people (20 min)

1. Go to **HR & Compliance → New Employee Onboarding**.
2. Fill in name, email, phone, role, facility and license details, then click **Create User**. Medipyxis sends each person a welcome email to set their password.

Add people one at a time: **Bulk Employee Upload** is turned off for now.

Full guide: [Admin: User management](/admin/user-management/)

## Step 4 — Start credential tracking (5 min)

1. Go to **HR & Compliance → Credential Tracker**. You see each employee's tracked credentials.
2. Click **Upload Credential** and attach the document (license, BLS, HIPAA training) with its expiration date.
3. The tracker works out the status from the expiration date: **Valid**, **Expiring Soon** (within 5 days), **Expired**, or **Missing**.

The **Send Reminder** button shows "Reminder sent successfully!" but does not send an email. Follow up with staff directly.

## Step 5 — Check fax intake (5 min)

1. Make sure the facility's **Fax Number** is set (**Facilities → Edit**). Faxes received on that number are filed to this facility and appear in the **Fax Review Queue**.
2. Give that number to your referral sources.

Full guide: [Referral Intake: Setup](/modules/referral-intake/setup/)

## Step 6 — Wire billing (10 min)

1. Medipyxis uses **Stedi** as the clearinghouse (it replaced ClaimMD in May 2026) and runs the connection for you. Your job is to **enroll your providers with each payer**: **Billing Operations → Payer Enrollment**.
2. Set your prices in the **Charge Master** (Insurance Charges, Self-Pay Charges, and Templates tabs). Use **Import CSV** to load many at once.

Full guide: [Set up billing and the Stedi clearinghouse](/admin/billing-setup/)

## Step 7 — Test the loop (5 min)

1. Create a referral in **Referral Intake** for a made-up test patient (for example _DOE, JANE A._). Never use a real patient for a test.
2. Schedule a visit on **Fleet Calendar**, open the visit, and sign it off.
3. Check that the encounter appears in the **Billing Work Queue**.
4. Archive the test patient when you're done (**All Patients** → archive button).

## Result

- Your facility, roles, and users are set up.
- Credentials are tracked, with their expiry status shown.
- Referral, scheduling, visit, and billing data flow end to end.

## Next up

- [Oversight Cockpit: Financial Performance](/modules/oversight-cockpit/financial-performance/)
- [Release notes](../../release-notes/)
- [Admin setup & configuration](../../admin/)
