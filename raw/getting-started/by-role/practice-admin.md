---
id: getting-started-admin-first-hour
title: Practice admin first hour
module: getting-started
audience: [admin]
roles: [practice_admin, super_admin]
type: quickstart
estimated_minutes: 60
last_reviewed: 2026-04-24
app_route: /administrator
related:
  - admin-user-management
  - admin-role-config
  - admin-facility-setup
  - hr-compliance-credential-tracker
tags: [onboarding, admin, setup]
---

# Practice admin first hour

By the end of this hour your facility is ready for clinical staff to sign in and work. You will have added your clinicians, configured roles, confirmed HR credentials tracking, and verified that referrals, scheduling, and billing routes are correctly wired.

## Before you start

- You have been provisioned an `admin` account for your practice. (Note: `super_admin` is reserved for Medipyxis internal staff and is not assignable from your own organization.)
- You know your organization's billing NPI, tax ID, and clearinghouse credentials (you can add these later, but now is faster).
- You have the list of clinicians to onboard and their credentials (license numbers, NPI, expiration dates).

## Step 1 — Confirm your facility exists (5 min)

1. Click **Facilities** in the sidebar.
2. Verify your facility is listed. If not, click **+ Add Facility** and enter the name, address, timezone, tax ID, and default place-of-service.
3. Note the facility's UUID — it's in the URL after `/facility/`.

Full guide: [Admin: Facility setup](../../admin/facility-setup.md)

## Step 2 — Configure roles (10 min)

1. Click **Administrator** in the sidebar. You land on **Organization Role Config**.
2. Review the default roles (`nurse`, `np`, `md`, `intake_coordinator`, `biller`, `bd_rep`, `practice_admin`).
3. Toggle feature access per role. We recommend starting with defaults and only tightening once you see how your team uses the product.

Full guide: [Admin: Role configuration](../../admin/role-config.md)

## Step 3 — Add your people (20 min)

Two paths — pick whichever matches how you have the data:

### Fast path (1–20 people): one at a time

1. **HR & Compliance → New Employee Onboarding**.
2. Fill in name, email, role, facility, license info. Medipyxis sends them a welcome email to set their password.

### Bulk path (20+ people): CSV upload

1. **HR & Compliance → Bulk Employee Upload**.
2. Download the template, fill it in, upload. Medipyxis validates and shows any row-level errors before committing.

Full guide: [Admin: User management](../../admin/user-management.md)

## Step 4 — Stand up credential tracking (5 min)

1. **HR & Compliance → Credential Tracker**. You see a matrix of user × required credential.
2. Upload a credential document by clicking the empty cell and attaching a PDF (license, BLS, HIPAA training).
3. Set a reminder window (default: 60 days before expiration).

<Note>
Medipyxis auto-emails the user and their supervisor when a credential is 60, 30, and 7 days from expiration.
</Note>

## Step 5 — Wire referrals (5 min)

1. Open **Referral Intake**. On first visit the system asks for your inbound **Fax number** and **Intake email** — both forward to Medipyxis's OCR pipeline.
2. Provide those numbers to your top referral sources (or keep your existing fax number and forward to ours).

Full guide: [Referral Intake: Setup](../../modules/referral-intake/setup.md)

## Step 6 — Wire billing (10 min)

1. Open **Billing Operations → Clearinghouse Config** (gear icon, top-right).
2. Enter your clearinghouse (Medipyxis supports claim.md natively; contact support for others) and test credentials with the **Send test claim** button.
3. Upload your fee schedule: **Client Fee Schedule** tab. Use the CSV template for bulk.

Full guide: [Billing: Clearinghouse & fee schedule](../../admin/billing-setup.md)

## Step 7 — Test the loop (5 min)

1. Create a throwaway referral in **Referral Intake** with test data.
2. Assign it to a test patient, schedule a visit on **Fleet Calendar**, open the visit, and sign it off.
3. Confirm the resulting draft claim appears in **Billing Operations → Unbilled**.
4. Delete the test data when you're done.

## Result

- Your facility, roles, and users are live.
- Credentials are tracked and will auto-alert.
- Referral, scheduling, visit, and billing data flows end-to-end.

## Next up

- [Oversight Cockpit: set up ROI tracking](../../modules/oversight-cockpit/financial-performance.md)
- [Release notes](../../release-notes/)
- [Admin setup & configuration](../../admin/)
