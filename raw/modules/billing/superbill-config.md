---
id: billing-superbill-config
title: Configure the Charge Master (Insurance, Self-Pay, Templates)
module: billing
audience: [admin, billing]
roles: [biller, admin]
type: how-to
estimated_minutes: 7
last_reviewed: 2026-07-08
app_route: /facility/{facility_uuid}/billing/charge-master
related:
  - billing-overview
  - billing-submit-claim
  - billing-ar-aging
tags: [billing, charge master, charges, self-pay, templates, admin, CPT, HCPCS]
---

# Configure the Charge Master (Insurance, Self-Pay, Templates)

Set the charges and claim templates your facility bills from. The **Charge Master** replaced the old Superbill Config; the `/billing/superbill-config` route now redirects to `/billing/charge-master`.

## Before you start

- You have the `biller` or `admin` role. The **biller** role can now view and edit the facility Charge Master (billing roles are scoped to the facility).
- You have your current contracted charges and self-pay pricing on hand.

## Charge Master tabs

Navigate to `/facility/{facility_uuid}/billing/charge-master`. The page has three tabs:

| Tab | Purpose |
|---|---|
| **Insurance Charges** | The billed charge for each CPT/HCPCS code used on insurance claims. |
| **Self-Pay Charges** | The price list for self-pay (uninsured / cash) patients, maintained separately from insurance charges. |
| **Templates** | Reusable claim templates that pre-fill common combinations of codes, modifiers, POS, and diagnosis pointers. |

![Charge Master page showing the Insurance Charges, Self-Pay Charges, and Templates tabs](../../assets/billing/billing_12_superbill_config.png)
*The Charge Master. The **Insurance Charges** tab is active by default.*

<Note>
Pricing is **effective-dated**: changing a rate creates a new effective-dated replacement row rather than overwriting the old one, so historical claims keep the charge that was in effect on their date of service.
</Note>

## Steps — Insurance Charges

The Insurance Charges tab defines the billed (§24F) charge Medipyxis populates on new insurance claims for each code.

1. **Open Insurance Charges.** The rate table lists each code with its current charge and effective date.
2. **Set or update a charge.** Edit a code's rate. On save, Medipyxis writes a new effective-dated row; the prior rate is retained for historical claims.
3. **Bulk update.** Use the bulk / CSV import to replace many rates at once rather than editing them one by one.

<Note>
The Charge Master sets your **billed** charge — not your contracted allowed amount. Allowed amounts come from payer contracts and are reflected in ERA postings. Setting charges below your contracted rate can leave revenue on the table.
</Note>

## Steps — Self-Pay Charges

4. **Open Self-Pay Charges.** Maintain a separate price list for cash / uninsured patients.
5. **Set self-pay prices** the same way (effective-dated rows, bulk/CSV import). These prices drive self-pay estimates and patient statements rather than insurance claims.

## Steps — Templates

Templates let billers start from a partially completed claim instead of a blank form.

6. **Open Templates.** Click the **Templates** tab.
7. **Create a template** with a descriptive name, a default place of service, one or more service lines (code, modifier, units), and diagnosis-pointer defaults. Optionally restrict it to specific payers.
8. **Activate the template** to make it available in the claim form; keep older ones inactive rather than deleting them to preserve history.

## Result

Billers see the updated insurance/self-pay charges and templates when they build a claim in `/billing/new`. Because charges are effective-dated, editing a rate never rewrites history — past claims keep the rate that applied on their date of service.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| A claim auto-fills $0.00 for a code | No active Insurance Charge for that code | Add the charge on the **Insurance Charges** tab |
| A rate change didn't affect an old claim | Effective-dating is working as intended | Historical claims keep the charge in effect on their DOS; the new rate applies going forward |
| Self-pay estimate looks wrong | Self-pay price missing or outdated | Update the **Self-Pay Charges** tab |
| Charge Master not visible | Role lacks billing access for this facility | Ask an `admin` to confirm your `biller`/`admin` role on this facility |

## Related

Auto-rendered from `related:` in frontmatter.
