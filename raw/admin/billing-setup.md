---
id: admin-billing-setup
title: Configure billing defaults and clearinghouse credentials
module: admin
audience: [admin, billing]
roles: [practice_admin, super_admin, biller]
type: how-to
estimated_minutes: 12
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/billing
related:
  - admin-index
  - admin-facility-setup
  - billing-submit-claim
  - billing-superbill-config
tags: [billing, superbill, Claim.MD, ERA, clearinghouse, fee-schedule]
prerequisites:
  - admin-facility-setup
---

# Configure billing defaults and clearinghouse credentials

Set up the Code Library, Fee Schedule, Superbill Templates, Claim.MD credentials, and ERA auto-posting so your billing team can submit and reconcile claims without manual re-entry.

## Before you start

- You need `practice_admin`, `super_admin`, or `biller` role.
- Have your Claim.MD submitter ID and API key ready (issued by Claim.MD when you activate your account).
- Obtain the facility's NPI and Tax ID before configuring the default rendering provider.

## Superbill Config — Code Library

The **Code Library** is the master list of CPT, HCPCS, and ICD-10 codes your organization uses.

1. Navigate to **Billing** in the sidebar.
2. Click **Superbill Config**.
3. Select the **Code Library** tab.
4. Click **Add Code**.
5. Enter the code, description, default units, and whether it requires a modifier. Required modifiers (e.g., `25`, `59`, `KX`, `JW`, `JZ`) are pre-validated against NCCI edits at claim submission.
6. Click **Save**. The code is now available in the CPT picker in Visit Wizard step 15 and on the New Claim form.

<Compliance>
CMS requires that HCPCS codes for skin substitutes (graft products) match the product's cataloged HCPCS in the Inventory Product Catalog. Mismatches between the Code Library and the Product Catalog are flagged by the LCD Navigator™.
</Compliance>

## Superbill Config — Fee Schedule

The Fee Schedule maps codes to allowed charge amounts per payer or payer class.

1. From **Superbill Config**, select the **Fee Schedule** tab.
2. Click **Add Schedule**.
3. Select the payer or payer class (e.g., `Medicare`, `Medicaid`, `Commercial`).
4. For each code in the Code Library, enter the **Allowed Amount** and the **Charge Amount**.
5. Click **Save Schedule**.

<Note>
The charge amount is what appears on the CMS-1500 §24F. The allowed amount is used for AR aging and net collection rate calculations in the Billing Reports Center.
</Note>

## Superbill Config — Templates

Templates bundle a set of codes that commonly appear together on a claim for a given visit type (e.g., wound care with debridement).

1. From **Superbill Config**, select the **Templates** tab.
2. Click **New Template**.
3. Name the template (e.g., `Wound Care — Initial Visit`).
4. Add codes from the Code Library by searching and selecting.
5. Set a default **POS** code and **Diagnosis pointer** for each line.
6. Mark one template as the **Facility Default** — this template pre-populates the claim form for every new claim at this facility.
7. Click **Save**.

## Claim.MD credentials

Medipyxis routes all 837P submissions and ERA (835) downloads through Claim.MD.

1. Navigate to **Billing → Settings** (gear icon at top-right of the Billing module).
2. Click the **Clearinghouse** tab.
3. Enter your **Claim.MD Submitter ID** and **API Key**.
4. Click **Test Connection**. A green confirmation means claims can be submitted and ERAs will ingest.
5. Click **Save**.

<Warning>
Never share your Claim.MD API key in Team Chat or email. If a key is compromised, regenerate it in your Claim.MD account dashboard immediately and update this field.
</Warning>

## ERA auto-post toggle

When ERA auto-post is on, Medipyxis automatically applies 835 remittance advice to matching claims without manual posting.

1. In **Billing → Settings → Clearinghouse**, locate the **ERA Auto-Post** toggle.
2. Turn it on to post ERAs automatically. Leave it off if your billing team prefers to review each ERA before posting.
3. Click **Save**.

<Note>
ERA auto-post applies only when the ERA amount exactly matches the claim's expected payment. Partial payments, adjustments, and denial codes always require manual review regardless of this setting.
</Note>

## Default rendering provider per facility

1. In **Billing → Superbill Config → Templates**, open the **Facility Default** template.
2. Set the **Default Rendering Provider** dropdown to the NPI assigned to this facility.
3. Click **Save**.

This NPI populates CMS-1500 §24J on every new claim generated at this facility. Individual claims can override this on the claim form.

## Result

Your Code Library, Fee Schedule, and default Superbill Template are configured. The Claim.MD connection is live and ERA auto-post is set to your preference. New claims created by billers at this facility will pre-populate with the correct codes, charges, and rendering provider NPI.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Test Connection fails | Wrong submitter ID or API key | Re-copy from Claim.MD account dashboard |
| Codes not appearing in CPT picker | Code not added to Code Library | Add via Superbill Config → Code Library |
| ERA posted to wrong claim | Patient name or DOS mismatch | Disable auto-post and review manually |
| Default rendering provider blank on claims | Facility Default template not saved | Re-open template and confirm Save |
