---
id: getting-started-admin-first-hour
title: Practice admin first hour
module: getting-started
audience: [admin]
roles: [admin]
type: quickstart
estimated_minutes: 60
last_reviewed: 2026-07-08
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

- You have been provisioned an `admin` account for your practice. (Note: `superadmin` and `customersupport` are reserved for Medipyxis internal staff and are not assignable from your own organization.)
- You know your organization's billing NPI, tax ID, and clearinghouse credentials (you can add these later, but now is faster).
- You have the list of clinicians to onboard and their credentials (license numbers, NPI, expiration dates).

## Step 1 — Confirm your facility exists (5 min)

1. Click **Facilities** in the sidebar.
2. Verify your facility is listed. If not, click **+ Add Facility** and enter the name, address, timezone, tax ID, and default place-of-service.
3. Note the facility's UUID — it's in the URL after `/facility/`.

Full guide: [Admin: Facility setup](../../admin/facility-setup.md)

## Step 2 — Configure roles (10 min)

1. Click **Administrator** in the sidebar. You land on **Organization Role Config**.
2. Review the real roles (`admin`, `clinical_manager`, `medical_director`, `clinician`, `referral_coordinator`, `bd_rep`, `bd_manager`, `finance_ap`, `vendor_coordinator`, `biller`).
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

1. **HR & Compliance → Credential Tracker**. You see each employee's tracked credentials.
2. Click **Upload Credential** and attach a PDF (license, BLS, HIPAA training) with its expiration date.
3. The tracker derives status automatically: **Valid**, **Expiring** (within 5 days), **Expired**, or **Missing**.

<Note>
Credential status is computed from the expiration date; the **Expiring** window is 5 days. A **Send Reminder** action exists but does not currently send email — follow up with staff directly.
</Note>

## Step 5 — Wire referrals (5 min)

1. Open **Referral Intake**. On first visit the system asks for your inbound **Fax number** and **Intake email** — both forward to Medipyxis's OCR pipeline.
2. Provide those numbers to your top referral sources (or keep your existing fax number and forward to ours).

Full guide: [Referral Intake: Setup](../../modules/referral-intake/setup.md)

## Step 6 — Wire billing (10 min)

1. Open **Billing Operations → Clearinghouse Config** (gear icon, top-right).
2. Medipyxis uses **Stedi** as the clearinghouse (replaced ClaimMD in May 2026) and handles the connection for you. Your job is to **enroll your providers with each payer** under **Billing → Enrollment** — see [Set up billing and the Stedi clearinghouse](../../admin/billing-setup.md).
3. Set your charges in the **Charge Master** (Insurance Charges, Self-Pay Charges, and Templates tabs). Use the CSV import for bulk.

Full guide: [Billing: Clearinghouse & fee schedule](../../admin/billing-setup.md)

## Step 7 — Test the loop (5 min)

1. Create a throwaway referral in **Referral Intake** with test data.
2. Assign it to a test patient, schedule a visit on **Fleet Calendar**, open the visit, and sign it off.
3. Confirm the encounter appears in the **Billing Work Queue** as ready for billing.
4. Delete the test data when you're done.

## Result

- Your facility, roles, and users are live.
- Credentials are tracked and will auto-alert.
- Referral, scheduling, visit, and billing data flows end-to-end.

## Next up

- [Oversight Cockpit: set up ROI tracking](../../modules/oversight-cockpit/financial-performance.md)
- [Release notes](../../release-notes/)
- [Admin setup & configuration](../../admin/)
