---
id: admin-billing-setup
title: Set up billing and the Stedi clearinghouse
module: admin
audience: [admin, billing]
roles: [practice_admin, super_admin, biller]
type: how-to
estimated_minutes: 10
last_reviewed: 2026-05-12
app_route: /facility/{facility_uuid}/billing
related:
  - admin-index
  - admin-facility-setup
  - billing-work-queue
  - billing-submit-claim
  - billing-superbill-config
tags: [billing, superbill, Stedi, ERA, clearinghouse, fee-schedule, enrollment]
prerequisites:
  - admin-facility-setup
---

# Set up billing and the Stedi clearinghouse

Use this guide to get your facility ready to submit claims through Medipyxis. You will configure the Code Library, Fee Schedule, and Superbill templates, enroll your providers with each payer through Stedi, and set how ERAs are posted.

<Note>
Medipyxis uses **Stedi** as the clearinghouse for electronic claims (837P), eligibility checks (270/271), claim status (276/277), and remittance advice (835). Stedi replaced ClaimMD in May 2026. You do not need to configure Stedi yourself — Medipyxis handles the connection. Your job is to enroll your providers with each payer and keep your codes, fees, and templates up to date.
</Note>

## Before you start

- You have the `practice_admin`, `super_admin`, or `biller` role.
- Your facility's **NPI** and **Tax ID** are entered in **Admin → Facility Setup**. These travel on every claim.
- You know which payers your providers will bill. For each payer, you'll need to confirm enrollment for claims, ERA, and (optionally) eligibility.
- For Medicare patients, the patient's MBI is on file — claims for Medicare are blocked at submission if the MBI is missing or invalid.

---

## 1. Code Library

The **Code Library** is your master list of CPT, HCPCS, and ICD-10 codes.

1. Go to **Billing → Superbill Config → Code Library**.
2. Click **Add Code**.
3. Enter the code, description, default units, and whether a modifier is required (`25`, `59`, `KX`, `JW`, `JZ`).
4. Click **Save**.

Codes you add here appear in the CPT picker inside Visit Wizard V4 (section 13 — Billing & Documentation) and on the New Claim form.

<Compliance>
HCPCS codes for skin substitutes must match the product's HCPCS in the Inventory Product Catalog. Mismatches are flagged by the [LCD Navigator V2](../modules/visit-wizard-ehr/lcd-navigator.md).
</Compliance>

---

## 2. Fee Schedule

The Fee Schedule sets your allowed and charge amounts per payer or payer class.

1. Go to **Billing → Superbill Config → Fee Schedule**.
2. Click **Add Schedule**.
3. Pick the payer or payer class (`Medicare`, `Medicaid`, `Commercial`).
4. For each code, enter the **Allowed Amount** and the **Charge Amount**.
5. Click **Save Schedule**.

The charge amount is what appears on the claim. The allowed amount drives A/R aging and your net collection rate reports.

---

## 3. Superbill Templates

Templates bundle codes that typically appear together for a given visit type (for example, *Wound Care — Initial Visit*).

1. Go to **Billing → Superbill Config → Templates**.
2. Click **New Template** and give it a name.
3. Add codes from the Code Library.
4. Set a default **POS** code and **Diagnosis pointer** for each line.
5. Mark one template as the **Facility Default** — it pre-populates every new claim at this facility.
6. Click **Save**.

### Default rendering provider

In the Facility Default template, set the **Default Rendering Provider** dropdown to the NPI for this facility. This NPI lands on box 24J of the CMS-1500 for every claim, and can be overridden on an individual claim if needed.

---

## 4. Enroll your providers with each payer

Before Stedi can submit a claim for a payer, each rendering provider must be enrolled with that payer for the transactions you want to use. Do this once per payer, per provider.

1. Go to **Billing → Enrollment**.
2. Confirm the **Provider** card: NPI, Tax ID, and provider name (pre-filled from your facility settings — edit if needed).
3. Pick the **transactions** to enroll for:

   | Transaction | What it lets you do |
   |---|---|
   | **Professional Claims (837P)** | Submit claims electronically to this payer. Required for every payer you bill. |
   | **ERA / Remittance (835)** | Receive payment and adjustment details from this payer electronically. Required to use ERA auto-post. |
   | **Eligibility (270/271)** | Run real-time eligibility checks on patients with this payer. Optional but recommended. |

4. Select the payers to enroll. You can pick multiple at once.
5. Click **Submit**. Each payer shows a result row.

   - A green check means Stedi accepted the request and the payer is processing it.
   - A red X means something needs to be fixed — usually a mismatched NPI or Tax ID, or a payer that Stedi cannot route to. Correct and resubmit.

6. Come back later to refresh the status. Most payers update from **Submitted** to **Active** automatically.

### How long enrollment takes

| Payer type | Typical time to **Active** |
|---|---|
| Medicare | 5–10 business days |
| Medicaid (most states) | 1–3 weeks |
| Commercial (Aetna, BCBS, Cigna, etc.) | Same day to 4 weeks, varies by payer |

<Compliance>
Do not submit a real production claim to a payer until that payer's enrollment row shows **Active**. The system does not currently block submissions on enrollment status — confirming Active is your responsibility before going live with each payer.
</Compliance>

---

## 5. ERA auto-post

When **ERA auto-post** is on, Medipyxis automatically applies remittance advice (835) from Stedi to matching claims without manual review.

1. Go to **Billing → Settings → Clearinghouse**.
2. Find the **ERA Auto-Post** toggle.
3. Turn it **on** to post automatically, or leave it **off** if your billing team wants to review every ERA first.
4. Click **Save**.

<Note>
Auto-post only applies when the ERA amount **exactly matches** the claim's expected payment. Partial payments, payer adjustments, and denials always route to the Payments (ERA) tab for manual review, regardless of this setting.
</Note>

---

## What happens after you submit a claim

You don't need to know the details, but it helps to recognize what each claim status means:

| Status | Meaning |
|---|---|
| **Pending** | Claim created from a completed visit, not yet approved. |
| **Needs Info** | Something failed validation (missing NPI, invalid MBI, NCCI/MUE edit, etc.). Fix in the [Work Queue](../modules/billing/work-queue.md). |
| **Approved** | A biller approved the claim. It will be submitted on the next export cycle. |
| **Exported** | The claim has been sent to Stedi. |
| **Submitted** | Stedi confirms the claim was delivered to the payer. |
| **Paid** | The payer adjudicated and an ERA has posted. |
| **Denied** | The payer denied the claim — manage in [Denial Management](../modules/billing/denial-management.md). |

Status updates flow in automatically — you do not need to refresh or poll.

---

## Result

Your Code Library, Fee Schedule, and default template are configured. Your providers are enrolled with each payer for the transaction types you need. ERA auto-post is set to your preference. Your billing team can now work the [Work Queue](../modules/billing/work-queue.md), and claims will move through the statuses above automatically.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Enrollment row stays at **Submitted** for days | The payer is still processing. | Most payers clear within their typical window (see table above). If well past that window, contact Medipyxis support. |
| Enrollment failed with a red X | NPI or Tax ID mismatch, or Stedi cannot route to this payer | Verify the provider NPI and Tax ID under **Admin → Facility Setup**, fix any typos, and resubmit. If the payer is not supported by Stedi, contact Medipyxis support. |
| New claim stuck at **Exported** | Payer not yet **Active** for 837P, or transient outage | Confirm the payer's enrollment is **Active** in **Billing → Enrollment**. If yes, contact Medipyxis support. |
| Claims for a specific payer all rejecting on MBI | Patient MBI missing or invalid on file | Update the patient's Medicare MBI under **Patients → Insurance**. The system enforces MBI format for Medicare. |
| Codes not appearing in CPT picker | Code not added to Code Library | Add via **Superbill Config → Code Library**. |
| ERA posted to the wrong claim | Patient name or date-of-service mismatch | Turn auto-post off and review manually under **Payments (ERA)**. |
| Default rendering provider blank on new claims | Facility Default template not saved | Re-open the template, set the default rendering provider, click **Save**. |

## Related

Auto-rendered from `related:` in frontmatter.
