---
id: admin-multi-location-setup
title: Set up an organization with multiple locations
module: admin
audience: [admin]
roles: [admin]
type: how-to
estimated_minutes: 9
last_reviewed: 2026-09-30
app_route: /facilities
related:
  - admin-index
  - admin-facility-setup
  - admin-user-management
  - admin-billing-setup
  - hr-compliance-new-employee
tags: [setup, facility, organization, multi-location, NPI, billing]
prerequisites:
  - admin-index
---

# Set up an organization with multiple locations

Add each of your locations, give every one the identity payers expect, and make sure your staff can see the locations they work at. Do this before your first claim goes out.

## Before you start

- You need the `admin` role.
- Your Medipyxis contact creates your organization, your first location, and your administrator login. Everything on this page assumes that is done and you can sign in.
- For each additional location, have ready: the **NPI** (10 digits), **Tax ID** (9 digits), phone, email, fax, and the street address.

## Every location has two names

This is the part that catches people out. Each location carries two names, and they go to different places.

| Field on the facility record | What it is | Who sees it |
|---|---|---|
| **Facility Name** | The everyday name. What your staff see in the facility switcher, what appears on screen, and what is sent to Zus — the shared patient record other providers can read | Your team, other providers |
| **Legal / Billing Name** | The exact legal business name on file with the federal NPPES registry | Payers and the clearinghouse |

If the **Legal / Billing Name** does not match NPPES character for character, claims and payer enrollments for that location can be rejected. Medipyxis fills this in for you from the NPI — step 2 shows how. Do it for every location, including your first one, which starts out blank.

Keep **Facility Name** readable and presentable. It is the name other providers see on the shared patient record, so it should be the name you would want a referring practice to recognise.

## Steps

### 1. Add each additional location

1. In the left sidebar click **Facilities**. The page header reads **Facility Management** and shows a counter such as **1/12** — locations used out of the number your organization is allowed.
2. Click **Add Facility**.
3. Enter the **NPI Code** first, then fill in **Facility Name**, **Tax Number**, **Phone Number**, **Email Address**, **Fax Number** and the address fields. Entering the NPI first lets the registry card appear so it can fill the legal name for you in step 2.
4. Click **Save Changes**.

Repeat for every location.

![Facilities list showing FACILITY, CONTACT, STATS, STATUS, and ACTIONS columns, with an active or inactive badge in the STATUS column for each location.](../assets/facilities/list.png)
*The **Facilities** list at `/facilities`. The counter in the header tells you how many locations you have used.*

Every administrator in your organization is given access to the new location automatically — you do not need to add them one at a time.

If **Add Facility** is greyed out, you have reached the number of locations your organization is set up for. Ask your Medipyxis contact to raise it.

### 2. Set each location's payer-facing identity

Do this once for every location, including the first one.

1. Go to **Facilities**, find the location, and click **Edit**.
2. Enter the **NPI Code**. Use the location's organization NPI (Type 2). If several locations bill under one group NPI, enter that same NPI on each.
3. Wait for the blue **Found in federal NPPES registry** card to appear beneath the NPI. It shows the legal business name, the provider type, and the address the registry holds.
4. Check the card is the right entity, then click **Use this info**. This copies the registry's legal name into **Legal / Billing Name**, updates the address to the registry's practice location, and records that the location was verified.
5. Confirm **Legal / Billing Name** now reads exactly what the registry shows. You can still edit it, but it should match character for character.
6. Leave **Facility Name** as the everyday name your staff use. It does not have to match the registry.
7. Enter the **Tax Number** (9 digits).
8. Click **Save Changes**.

If the registry card shows a different business, the NPI is wrong or belongs to an individual provider rather than the practice. Click **Dismiss**, confirm the number, and try again.

If the address on the card is not where this location actually sees patients, do **not** click **Use this info**. Type the **Legal / Billing Name** by hand exactly as the card shows it, and leave the address as it is.

### 3. Add your people and choose their locations

1. In the left sidebar click **HR & Compliance**.
2. Click the **New Employee Onboarding** tile.
3. Fill in **First Name**, **Last Name**, email, **Role**, **Job Title**, **Status** and the address fields. Choosing the **Clinician** role reveals the provider fields — NPI, taxonomy code, state licence, DEA and signature. Complete those for anyone who will sign visits.
4. In **Facility Assignment**, tick every location this person works at. Someone who covers three locations gets three ticks. Only locations you can access yourself appear in the list.
5. Click **Create User**.

One login is created, the person is given access to each location you ticked, and a welcome email goes out with a link to set their password.

To change someone's locations later, go to **HR & Compliance → Facility Users**, find the person, click **Edit User**, adjust the ticks in **Facility Assignment** and click **Save Changes**. Removing a tick removes their access to that location.

If the welcome email does not arrive, ask the person to open the Medipyxis login page, click **Forgot password** and enter their email address. That sends them a working link to set their password.

### 4. Prepare each location for billing

Each location needs this separately.

1. In the sidebar click **Billing Operations**, then the **Payer Enrollment** card.
2. Choose the **Enrollment Types** and the **Payers**.
3. In **Provider Information**, look at the **Organization / Provider Name** box. It is filled in with the everyday **Facility Name**. Replace it with the **Legal / Billing Name** you set in step 2 before continuing — otherwise your enrollment and your claims will carry two different names for the same NPI.
4. Click **Enroll with N Payers**.
5. Load a price list for the location. Without a charge master, claims are built at zero dollars. See [Charge Master and the $0.00 claim guard](../modules/billing/charge-master-and-zero-dollar-guard.md) and [Set up billing and the Stedi clearinghouse](./billing-setup.md).

## Result

Every location exists under your organization, carries a verified legal name that matches the federal registry, and has its staff assigned. Your people see the locations they work at when they use the facility switcher, and each location is enrolled with its payers under the right name.

Run through this for each location before going live on billing:

- The location appears under the correct organization on the **Facilities** page
- NPI entered and the registry card reviewed
- **Legal / Billing Name** matches the registry character for character
- **Tax Number** entered
- Phone, email, fax and address complete
- Everyone who works there has this location ticked in **Facility Assignment**
- Payer enrollment submitted with the **Legal / Billing Name** in **Organization / Provider Name**
- Price list loaded

Next, see [Set up a facility in your first week](./facility-setup.md) for the per-facility settings that follow, and [Invite users and manage facility access](./user-management.md) for ongoing access changes.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **Add Facility** is greyed out | You have reached your organization's location limit | Ask your Medipyxis contact to raise it |
| The registry card shows a different business | The NPI is wrong, or belongs to an individual rather than the practice | Click **Dismiss**, confirm the NPI, and re-enter it |
| No registry card appears at all | The NPI is not yet 10 digits, or the registry has no record for it | Re-check the number with the practice |
| A staff member cannot see one of your locations | That location is not ticked for them | **HR & Compliance → Facility Users → Edit User → Facility Assignment** |
| Welcome email never arrived | — | Have the person use **Forgot password** on the login page |
| Claims rejected for a name mismatch | **Legal / Billing Name** or the enrollment name does not match the registry | Re-run step 2, then check **Organization / Provider Name** in Payer Enrollment |
