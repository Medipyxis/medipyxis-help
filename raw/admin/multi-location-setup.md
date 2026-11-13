---
id: admin-multi-location-setup
title: Set up an organization with multiple locations
module: admin
audience: [admin]
roles: [admin]
type: how-to
estimated_minutes: 9
last_reviewed: 2026-11-11
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

Get each of your locations added, give every one the identity payers expect, and make sure your staff can see the locations they work at. Do this before your first claim goes out.

## Before you start

- You need the admin role.
- Your Medipyxis contact creates your organization, your first location, and your administrator login. Everything on this page assumes that is done and you can sign in.
- For each additional location, have ready: the **NPI** (10 digits), **Tax ID** (9 digits), phone, email, fax, and the street address.

## Every location has two names

This is the part that catches people out. Each location carries two names, and they go to different places.

| Field on the facility record | What it is | Who sees it |
|---|---|---|
| **Facility Name** | The everyday name. What your staff see in the facility switcher, what appears on screen, and what is sent to Zus — the shared patient record other providers can read | Your team, other providers |
| **Legal / Billing Name** | The legal business name used on insurance claims and with the clearinghouse. It should match the federal NPPES registry | Payers and the clearinghouse |

If the **Legal / Billing Name** is blank, claims carry the **Facility Name** instead. Medipyxis can fill the legal name in for you from the NPI — step 2 shows how. Do it for every location, including your first one.

Keep **Facility Name** readable and presentable. It is the name other providers see on the shared patient record, so it should be the name you would want a referring practice to recognise.

## Steps

### 1. Ask Medipyxis to add each additional location

1. In the left sidebar click **Facilities**. The page header reads **Facility Management** and shows a counter such as **1/12** — locations used out of the number your organization is allowed.
2. New locations are added by Medipyxis staff. For your role, **Add Facility** is greyed out and its tip reads "Contact Medipyxis support to add a location". Send your Medipyxis contact the details listed above for each location.

![Facilities list showing FACILITY, CONTACT, STATS, STATUS, and ACTIONS columns, with an active or inactive badge in the STATUS column for each location.](../assets/facilities/list.png)
_The Facilities list at `/facilities`. The counter in the header tells you how many locations you have used._

When a location is added, every administrator in your organization is given access to it automatically — you do not need to add them one at a time.

If your organization has used all its locations, Medipyxis has to raise the limit before another one can be added.

### 2. Set each location's payer-facing identity

Do this once for every location, including the first one.

1. Go to **Facilities**, find the location, and click **Edit**.
2. Enter the **NPI Code**. Use the location's organization NPI (Type 2). If several locations bill under one group NPI, enter that same NPI on each.
3. Wait for the **Found in federal NPPES registry** card to appear beneath the NPI. It shows the name, the specialty, and the address the registry holds.
4. Check the card is the right entity, then click **Use this info**. This copies the registry's legal name into **Legal / Billing Name**, updates the address and phone to the registry's, and records the NPI type, taxonomy code and the time of the lookup.
5. Confirm **Legal / Billing Name** now reads exactly what the registry shows. You can still edit it, but it should match character for character.
6. Leave **Facility Name** as the everyday name your staff use. It does not have to match the registry.
7. Enter the **Tax Number** (9 digits; a dash is allowed).
8. Click **Save Changes**.

If the registry card shows a different business, the NPI is wrong or belongs to an individual provider rather than the practice. Click **Dismiss**, confirm the number, and try again.

If the address on the card is not where this location actually sees patients, do **not** click **Use this info**. Type the **Legal / Billing Name** by hand exactly as the card shows it, and leave the address as it is.

### 3. Add your people and choose their locations

1. In the left sidebar click **HR & Compliance**.
2. Click the **New Employee Onboarding** tile.
3. Fill in **First Name**, **Last Name**, email, phone, **Role**, **Job Title** and **Status**. Provider fields (NPI, taxonomy code, state licence, DEA and signature) show for clinical, management and admin roles and are required for the **Clinician** role. Complete them for anyone who will sign visits.
4. In **Facility Assignment**, pick every location this person works at. Someone who covers three locations gets three. Only locations you can access yourself appear in the list.
5. Click **Create User**.

One login is created, the person is given access to each location you picked, and a welcome email goes out with a link to set their password.

To change someone's locations later, go to **HR & Compliance → Facility Users**, find the person, click the edit button on their row, adjust **Facility Assignment** and click **Save Changes**. Removing a location removes their access to it.

If the welcome email does not arrive, use **Resend welcome email** on their row in **Facility Users**, or ask the person to open the Medipyxis login page, click **Forgot Password?** and enter their email address.

### 4. Prepare each location for billing

Each location needs this separately.

1. In the sidebar click **Billing Operations**, then the **Payer Enrollment** card.
2. Choose the **Enrollment Types** and the **Payers**.
3. In **Provider Information**, look at the **Organization / Provider Name** box. Unless a provider name was saved before, it is filled in with the everyday **Facility Name**. Replace it with the **Legal / Billing Name** you set in step 2 before continuing — otherwise your enrollment and your claims will carry two different names for the same NPI.
4. Click **Enroll with N Payers**.
5. Load a price list for the location. Without a charge master, claims are built at zero dollars and cannot be sent to Stedi. See [Charge Master and the $0.00 claim guard](/modules/billing/charge-master-and-zero-dollar-guard/) and [Set up billing and the Stedi clearinghouse](/admin/billing-setup/).

## Result

Every location exists under your organization, carries a legal name that matches the federal registry, and has its staff assigned. Your people see the locations they work at when they switch facility, and each location is enrolled with its payers under the right name.

Run through this for each location before going live on billing:

- The location appears on the **Facilities** page
- NPI entered and the registry card reviewed
- **Legal / Billing Name** matches the registry character for character
- **Tax Number** entered
- Phone, email, fax and address complete
- Everyone who works there has this location in **Facility Assignment**
- Payer enrollment submitted with the **Legal / Billing Name** in **Organization / Provider Name**
- Price list loaded

Next, see [Set up a facility in your first week](/admin/facility-setup/) for the per-facility settings that follow, and [Invite users and manage facility access](/admin/user-management/) for ongoing access changes.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **Add Facility** is greyed out | Only Medipyxis staff can add locations | Ask your Medipyxis contact to add the location |
| The registry card shows a different business | The NPI is wrong, or belongs to an individual rather than the practice | Click **Dismiss**, confirm the NPI, and re-enter it |
| No registry card appears at all | The NPI is not yet 10 digits, or the registry has no record for it | Re-check the number with the practice |
| A staff member cannot see one of your locations | That location is not in their Facility Assignment | **HR & Compliance → Facility Users →** edit → **Facility Assignment** |
| Welcome email never arrived | — | Use **Resend welcome email**, or have the person use **Forgot Password?** on the login page |
| Claims rejected for a name mismatch | **Legal / Billing Name** or the enrollment name does not match the registry | Re-run step 2, then check **Organization / Provider Name** in Payer Enrollment |
