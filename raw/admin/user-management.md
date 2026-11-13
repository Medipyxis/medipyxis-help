---
id: admin-user-management
title: Invite users and manage facility access
module: admin
audience: [admin]
roles: [admin, superadmin]
type: how-to
estimated_minutes: 7
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/hr
related:
  - admin-index
  - admin-role-config
  - admin-facility-setup
  - admin-data-import-export
tags: [users, roles, onboarding, HR, bulk-upload]
prerequisites:
  - admin-index
  - admin-role-config
---

# Invite users and manage facility access

Add new staff, give each person a role and the facilities they work at, and change their access later.

## Before you start

- You need access to **HR & Compliance**. Administrators always have it.
- You do not create roles. Every person gets one of the ten roles in the **Role** list.

## Add a user

1. In the sidebar, click **HR & Compliance**.
2. Click the **New Employee Onboarding** tile. (Use **Facility Users** to change people who already have a login.)
3. Complete the form:

| Field | Notes |
|---|---|
| First Name, Last Name | Required. Letters and spaces only. |
| Email | Required. A login can exist only once per email address. |
| Phone Number | Required. |
| Role | Required. One of Administrator, Clinical Manager, Medical Director, Clinician, Referral Coordinator, Business Development Representative, Business Development Manager, Finance/Accounts Payable, Vendor Coordinator, or Biller. |
| Facility Assignment | Required. Pick one or more facilities; only facilities you have access to are listed. |
| Status | Active or Inactive. |
| Training Status | Not Started, In Progress, or Completed. |

4. Provider details (Profession Title, Print Name, Initials, NPI Number, address, licence, DEA and signature) are hidden for business development, biller, referral coordinator, finance and vendor coordinator roles. They are required for the **Clinician** role. The NPI is required when the profession title is MD, DO, NP, PA or DPM.
5. Click **Create User**. The person gets access to each facility you picked and a welcome email with a link to set their password.

![HR & Compliance hub showing Announcements, Credential Tracker, Activity Logs, New Employee Onboarding, Bulk Employee Upload, Facility Users, Pharmacy Management, Education Bundle Management, and Training Materials tiles.](../assets/hr/hub.png)
_The HR & Compliance hub. Use Facility Users to manage access for existing staff, and New Employee Onboarding to create a new user._

## Change a role or facilities

1. Go to **HR & Compliance → Facility Users**.
2. Find the person with the search box (name, email, or job title).
3. Click the edit button on their row. The same form opens with their details.
4. Change the **Role** or the **Facility Assignment**, then click **Save Changes**.

Setting **Status** to **Inactive** signs the person out and stops them signing in. See [Deactivate a facility, archive a patient, and disable a user](/admin/deactivating-and-archiving/).

## Bulk Employee Upload is turned off

The **Bulk Employee Upload** tile is still on the HR & Compliance hub, but it opens a message that bulk upload is temporarily disabled. Add people one at a time with **New Employee Onboarding**.

## Result

New people appear in **Facility Users** and can sign in once they set their password.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Welcome email not received | Email landed in spam, or the address has a typo | Check spam. In **Facility Users**, use **Resend welcome email** on their row, or fix the address with the edit button |
| "A user with email … already exists" on create | The person already has a login | Open them in **Facility Users** and add the facility in **Facility Assignment** |
| Provider fields not showing | The role is a business development, biller, referral coordinator, finance or vendor coordinator role | Pick a clinical role (for example Clinician); the provider fields then appear |
