---
id: billing-superbill-config
title: Configure the Superbill — Code Library, Fee Schedule, and Templates
module: billing
audience: [admin]
roles: [practice_admin, super_admin]
type: how-to
estimated_minutes: 7
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/billing/superbill-config
related:
  - billing-overview
  - billing-submit-claim
  - billing-ar-aging
tags: [billing, superbill, code library, fee schedule, templates, admin, CPT, HCPCS]
---

# Configure the Superbill — Code Library, Fee Schedule, and Templates

Set up the Code Library, Fee Schedule, and claim Templates that billers use when creating and submitting claims for your facility.

## Before you start

- You have the `practice_admin` or `super_admin` role. Billers with the `biller` role cannot access **Superbill Config**.
- Your facility's NPI and EIN are confirmed and on file.
- You have the current contracted fee schedules from your payers.

## Superbill Config tabs

Navigate to `/facility/{facility_uuid}/billing/superbill-config`. The page contains three tabs:

| Tab | Purpose |
|---|---|
| **Code Library** | Maintain the CPT and HCPCS codes available to billers when building service lines on a claim. |
| **Fee Schedule** | Set the standard charge amount for each code, optionally by payer or payer category. |
| **Templates** | Create reusable claim templates that pre-fill common combinations of codes, modifiers, POS, and diagnosis pointers. |

![Superbill Config page showing the three tabs: Code Library, Fee Schedule, and Templates](../../assets/billing/billing_12_superbill_config.png)
*The Superbill Config landing page. The **Code Library** tab is active by default.*

## Steps — Code Library

The Code Library controls which procedure and supply codes appear in the §24D CPT/HCPCS field of the New Claim form. Codes not in the library are not available to billers.

1. **Open Code Library.** Click the **Code Library** tab.

2. **Review existing codes.** The table lists all active codes with columns for **Code**, **Description**, **Category** (CPT or HCPCS), **Default Modifier**, and **Status** (Active / Inactive).

3. **Add a new code.** Click **+ Add Code**. Enter:
   - **Code** — the CPT or HCPCS code (e.g., `97597`, `Q4151`).
   - **Description** — a short plain-language description for biller reference.
   - **Category** — CPT or HCPCS.
   - **Default Modifier** — optional; auto-fills the first modifier field when this code is selected on a claim.
   - **Status** — set to **Active** to make it immediately available.

4. **Deactivate unused codes.** Click the code row and toggle **Status** to **Inactive** to remove it from the biller's code picker without deleting the historical record.

<Compliance>
Review the Code Library at least quarterly. CMS publishes annual CPT and HCPCS updates effective January 1. Deleted or revised codes left Active in the library will cause payer rejections.
</Compliance>

## Steps — Fee Schedule

The Fee Schedule defines the standard (billed) charge for each code. Medipyxis uses this amount to populate §24F Charges on new claims.

5. **Open Fee Schedule.** Click the **Fee Schedule** tab.

6. **Review the default schedule.** The table shows each code from the Code Library with a **Standard Charge** column. A blank or zero charge will not auto-fill the claim and will require manual entry by the biller.

7. **Set or update a charge.** Click the row for a code and enter the **Standard Charge** amount. Click **Save Row**.

8. **Create payer-specific overrides (optional).** Click **+ Add Payer Override** on any code row to set a different standard charge for a specific payer or payer category. Overrides apply when a claim is created for that payer and take precedence over the default charge.

<Note>
The Fee Schedule sets your standard billed charge — not your contracted allowed amount. Allowed amounts are determined by payer contracts and reflected in ERA postings. Setting charges below your contracted rate can reduce revenue unnecessarily.
</Note>

## Steps — Templates

Templates allow you to pre-configure commonly used claim structures so billers can start from a partially completed claim rather than a blank form.

9. **Open Templates.** Click the **Templates** tab.

10. **Create a new template.** Click **+ New Template** and provide:
    - **Template Name** — a descriptive name visible to billers (e.g., `Wound Debridement — Outpatient`).
    - **Default POS** — the most common place of service for this template.
    - **Service Lines** — add one or more §24 line entries with code, modifier, and unit defaults.
    - **Diagnosis Pointers** — pre-link procedure lines to diagnosis pointer positions (A, B, etc.).
    - **Payer Restriction** (optional) — limit the template to specific payers if the code combination is payer-specific.

11. **Set template availability.** Toggle **Active** to make the template available in the **New Claim** form. Inactive templates are hidden from billers but retained for reference.

12. **Edit or archive an existing template.** Click the template row to open the editor. Use **Archive** (not **Delete**) to preserve historical records when a template is no longer needed.

## Result

Billers see the updated code list, fee schedule amounts, and templates immediately in the **New Claim** form after you save changes. No page reload is required on the biller's end.

<Warning>
Deleting a code from the Code Library (rather than deactivating it) removes it from historical claim records' display. Use **Inactive** status instead to preserve audit trails.
</Warning>

<Tip>
Build templates for your highest-volume procedure combinations first — typically wound debridement and graft applications. A well-configured template reduces claim entry time and improves coding consistency across your biller team.
</Tip>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Biller cannot find a code in the New Claim form | Code is Inactive or not yet added | Add or reactivate the code in **Code Library** |
| Claim auto-fills $0.00 for charges | Fee Schedule has a blank or zero entry for that code | Set the standard charge in **Fee Schedule** |
| Template not visible to biller | Template status is Inactive | Toggle template to **Active** in **Templates** tab |
| **Superbill Config** not visible in sidebar | User lacks `practice_admin` or `super_admin` role | Ask your organization's super admin to update the user's role in **Administrator** |

## Related

Auto-rendered from `related:` in frontmatter.
