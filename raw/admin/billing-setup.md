---
id: admin-billing-setup
title: Set up billing and the Stedi clearinghouse
module: admin
audience: [admin, billing]
roles: [practice_admin, super_admin, biller]
type: how-to
estimated_minutes: 10
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/billing
related:
  - admin-index
  - admin-facility-setup
  - billing-work-queue
  - billing-submit-claim
  - billing-charge-master-and-zero-dollar-guard
  - billing-ptan-and-payer-enrollment
  - billing-stedi-actions-inbox
tags: [billing, superbill, Stedi, ERA, clearinghouse, fee-schedule, enrollment]
prerequisites:
  - admin-facility-setup
---

# Set up billing and the Stedi clearinghouse

Use this guide to get a facility ready to send claims through Medipyxis: load your prices in the Charge Master, enroll your providers with each payer through Stedi, and know where payments land. There is no separate billing setup screen; everything below is on the Billing Operations pages.

Medipyxis uses **Stedi** as the clearinghouse for electronic claims (837P), eligibility checks (270/271), claim acknowledgments (277CA), and remittance advice (835). Stedi replaced ClaimMD in May 2026. Medipyxis runs the Stedi connection for you; you do not enter clearinghouse credentials. Your job is to keep your prices current and enroll your providers with each payer.

## Before you start

- You have access to **Billing Operations**.
- The facility's **NPI Code**, **Tax Number** and **Legal / Billing Name** are entered on the facility (**Facilities → Edit**). See [Set up a facility in your first week](/admin/facility-setup/).
- You know which payers your providers will bill.
- For Medicare patients, the patient's MBI is on file. A claim sent to Stedi is refused if the MBI is missing or invalid.

---

## 1. Load your prices in the Charge Master

1. Click **Billing Operations** in the sidebar, then **Charge Master**.
2. On **Insurance Charges** (and **Self-Pay Charges** for self-pay patients), click **Add Charge**, enter the CPT/HCPCS code and the per-unit price, and click **Create**.
3. Use the **Templates** tab to group codes into named superbill templates for the billing code picker.

A claim line with no price is priced at $0.00, and a claim with a $0.00 line cannot be sent to Stedi. See [Charge Master and the $0.00 claim guard](/modules/billing/charge-master-and-zero-dollar-guard/).

---

## 2. Enroll your providers with each payer

Before Stedi can send a claim to a payer, the provider must be enrolled with that payer for the transactions you want to use. Do this once per payer, per provider.

1. Click **Billing Operations**, then the **Payer Enrollment** card.
2. Check **Provider Information**: **Organization / Provider Name**, NPI, Tax ID, PTAN (optional) and address. These are filled in from the facility — edit if needed.
3. Pick the **Enrollment Types**:

| Transaction | What it lets you do |
|---|---|
| **Professional Claims (837P)** | Send claims electronically to this payer. On by default. |
| **Eligibility (270/271)** | Run real-time eligibility checks with this payer. On by default. |
| **ERA / Remittance (835)** | Receive this payer's remittances through Stedi. Off by default: enrolling moves the payer's ERAs away from your current clearinghouse. |

4. Choose the **Payers**. You can pick several at once.
5. Click **Enroll with N Payers**.
6. Watch the **Current Enrollments** panel. Each payer and transaction shows its status; click **Refresh from Stedi** to update it. Rejections and tasks from Stedi also appear in the **Stedi Actions** inbox.

Medipyxis does not check enrollment status before it sends a claim. Do not send a real claim to a payer until that payer's enrollment is active. Enrollment can take from minutes to weeks depending on the payer. See [PTAN and payer enrollment](/modules/billing/ptan-and-payer-enrollment/).

---

## 3. How payments arrive

There is nothing to switch on. When a payer sends an ERA through Stedi, it arrives in Medipyxis automatically, and payment lines that match a claim post to that claim's ledger automatically. Lines that match no claim wait on the **ERA / EOB** page for a biller to match them. See [Post and reconcile ERAs from Stedi](/modules/billing/era-posting/).

---

## What happens after you submit a claim

- **Exported** means the claim was exported as a PDF or JSON file. It has not been sent anywhere.
- A claim goes to Stedi when a biller clicks **Submit Claim** on the claim form.
- If the payer's acknowledgment (277CA) rejects the claim, Medipyxis sets it to **Rejected** automatically.
- **Paid** and **Denied** are set by someone on the billing team.

For every status, see [Billing Operations overview](/modules/billing/overview/).

---

## Result

Your prices are loaded and your providers are enrolled with each payer for the transactions you need. Your billing team can now work the [Work Queue](/modules/billing/work-queue/).

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| An enrollment stays pending for days | The payer is still processing | Click **Refresh from Stedi**, and check the **Stedi Actions** inbox for a task (for example a form to sign) |
| An enrollment comes back with an error | NPI or Tax ID mismatch, or the payer needs paperwork | Check the NPI and Tax Number on the facility, fix any typos, and resubmit |
| A claim sits at **Exported** | Exporting does not send it | Open the claim and click **Submit Claim** |
| "No price on file for CPT …" when sending | No Charge Master rate for that code | Add it in **Charge Master** |

## Related
