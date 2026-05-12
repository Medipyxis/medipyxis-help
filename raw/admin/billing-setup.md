---
id: admin-billing-setup
title: Configure billing defaults and Stedi clearinghouse
module: admin
audience: [admin, billing]
roles: [practice_admin, super_admin, biller]
type: how-to
estimated_minutes: 14
last_reviewed: 2026-05-12
app_route: /facility/{facility_uuid}/billing
related:
  - admin-index
  - admin-facility-setup
  - billing-work-queue
  - billing-submit-claim
  - billing-superbill-config
tags: [billing, superbill, Stedi, ERA, clearinghouse, fee-schedule, enrollment, webhook]
prerequisites:
  - admin-facility-setup
---

# Configure billing defaults and Stedi clearinghouse

Set up the Code Library, Fee Schedule, Superbill Templates, **Stedi clearinghouse credentials**, payer enrollment, webhook delivery, and ERA auto-posting so your billing team can submit and reconcile claims without manual re-entry.

<Note>
Stedi replaced ClaimMD as the Medipyxis clearinghouse in May 2026. New 837P claims, 270/271 eligibility, 276/277 status, and 835 ERA all route through Stedi's JSON API. Historical ClaimMD claims remain queryable with `clearinghouse = 'claimmd'` on the `claims` and `billing_claims` tables, but no new submissions are accepted by ClaimMD.
</Note>

## Before you start

- You need the `practice_admin`, `super_admin`, or `biller` role.
- A **Stedi account** is provisioned for your organization, with at least one API key issued. If you don't have one yet, Medipyxis support provisions both the test (sandbox) and production keys.
- Your facility's **NPI** and **Tax ID** are entered in **Admin → Facility Setup**. They populate the `billing.npi` and `billing.employerId` fields on every Stedi 837P submission.
- For Medicare submissions, the rendering provider's **MBI validation** is enforced server-side — make sure the patient's MBI is on file before any Medicare claim attempt.

---

## Superbill Config — Code Library

The **Code Library** is the master list of CPT, HCPCS, and ICD-10 codes your organization uses.

1. Navigate to **Billing** in the sidebar.
2. Click **Superbill Config**.
3. Select the **Code Library** tab.
4. Click **Add Code**.
5. Enter the code, description, default units, and whether it requires a modifier. Required modifiers (`25`, `59`, `KX`, `JW`, `JZ`) are validated by the **pre-submit audit gate** against NCCI PTP and MUE edit tables before each submission to Stedi.
6. Click **Save**. The code becomes available in the CPT picker in Visit Wizard V4 section 13 (Billing & Documentation) and on the New Claim form.

<Compliance>
CMS requires HCPCS codes for skin substitutes (graft products) to match the product's cataloged HCPCS in the Inventory Product Catalog. Mismatches between the Code Library and the Product Catalog are flagged by the [LCD Navigator V2](../modules/visit-wizard-ehr/lcd-navigator.md) and by the BillingLine provenance panel in the [Work Queue](../modules/billing/work-queue.md).
</Compliance>

---

## Superbill Config — Fee Schedule

The Fee Schedule maps codes to allowed charge amounts per payer or payer class.

1. From **Superbill Config**, select the **Fee Schedule** tab.
2. Click **Add Schedule**.
3. Select the payer or payer class (`Medicare`, `Medicaid`, `Commercial`).
4. For each code in the Code Library, enter the **Allowed Amount** and the **Charge Amount**.
5. Click **Save Schedule**.

<Note>
The charge amount appears on `claimInformation.serviceLines[].professionalService.lineItemChargeAmount` in the Stedi 837P payload. The allowed amount drives A/R aging and net collection rate calculations.
</Note>

---

## Superbill Config — Templates

Templates bundle codes that commonly appear together for a given visit type (for example, wound care with debridement).

1. From **Superbill Config**, select the **Templates** tab.
2. Click **New Template**.
3. Name the template (for example, `Wound Care — Initial Visit`).
4. Add codes from the Code Library by searching and selecting.
5. Set a default **POS** code (sent as `claimInformation.placeOfServiceCode`) and **Diagnosis pointer** for each line.
6. Mark one template as the **Facility Default** — this template pre-populates the claim form for every new claim at this facility.
7. Click **Save**.

---

## Stedi clearinghouse — credentials

Medipyxis routes all 837P submissions, 270/271 eligibility, 276/277 status, and 835 ERA through Stedi's JSON API. Credentials are stored as Supabase edge function environment variables, not on the facility record.

### Environment variables (set per environment)

| Variable | Purpose | Required |
|---|---|---|
| `STEDI_API_KEY` | Bearer key sent on every Stedi request (`Authorization: Key {STEDI_API_KEY}`). | Yes |
| `STEDI_API_BASE_URL` | Defaults to `https://healthcare.us.stedi.com`. Override for sandbox testing. | No |
| `STEDI_ENROLLMENT_API_KEY` | Separate key for the enrollments API, when Stedi issues you one. Falls back to `STEDI_API_KEY` if not set. | No |
| `STEDI_WEBHOOK_SECRET` | Shared secret Stedi sends on every webhook in the `x-stedi-webhook-secret` header. Required to accept inbound webhooks. | Yes |

Set the variables in Supabase:

1. Open the Supabase dashboard for the target environment.
2. Go to **Project Settings → Edge Functions → Secrets**.
3. Add each variable above. Use the sandbox `STEDI_API_KEY` on the demo project; use the production key on the production project.
4. Re-deploy the affected functions (`submit-to-stedi`, `sync-stedi-responses`, `verify-insurance`, `check-claim-status`, `fetch-era-list`, `request-provider-enrollment`).

<Warning>
Never paste a Stedi API key into Team Chat, email, Jira, or a customer-facing screen. If a key is compromised, rotate it in the Stedi dashboard, update the Supabase secret, and redeploy the edge functions immediately.
</Warning>

### Sandbox vs. production

Stedi distinguishes test from production using the `usageIndicator` field on each transaction (`T` for test, `P` for production), driven by which API key is in use and which base URL is configured. Demo projects always use the sandbox key. Production switches to the production key only after enrollment is approved by each payer.

---

## Stedi — endpoints in use

Medipyxis calls five Stedi APIs. You don't configure these directly — they're baked into the edge functions — but knowing them helps when interpreting webhook events and audit logs.

| Transaction | Stedi endpoint | Medipyxis edge function |
|---|---|---|
| 837P Claims | `POST /2024-04-01/change/medicalnetwork/professionalclaims/v3/submission` | `submit-to-stedi` |
| 270/271 Eligibility | `POST /2024-04-01/change/medicalnetwork/eligibility/v3` | `verify-insurance` |
| 276/277 Claim Status | `POST /healthcare/claim-status` (api.stedi.com) | `check-claim-status` |
| 835 ERA | 835 ERA Report endpoint (retrieved by `transactionId` from webhook) | `fetch-era-list` |
| Enrollment | `POST /2024-09-01/enrollments` (enrollments.us.stedi.com) | `request-provider-enrollment` |

---

## Payer enrollment

Before Stedi can submit claims for a payer, the rendering provider must be **enrolled** with that payer for the relevant transaction families. Use the in-app enrollment page rather than enrolling manually with each payer.

1. Navigate to **Billing → Enrollment** (route: `/facility/{facility_uuid}/billing/enrollment`).
2. Confirm the **Provider** card:
   - **Provider NPI** (pre-filled from facility billing settings; editable).
   - **Tax ID** (pre-filled; editable).
   - **Provider Name** (pre-filled; editable).
3. Pick the **transaction types** to enroll for — select all that apply:

   | ID | Label | When you need it |
   |---|---|---|
   | `claims` | Professional Claims (837P) | Required for every payer you submit claims to. |
   | `era` | ERA / Remittance (835) | Required to receive remittance advice electronically. |
   | `eligibility` | Eligibility (270/271) | Required to run real-time eligibility checks. |

4. Select the **payers** to enroll. The list is sourced from Stedi's payer directory; you can multi-select.
5. Click **Submit**. One enrollment request per payer is sent to Stedi, and a result row appears for each:
   - Green check + status text — Stedi accepted the request; the payer-side processing time begins.
   - Red X + error — fix the issue (NPI mismatch, missing Tax ID, payer not supported by Stedi) and resubmit.
6. Refresh the page later to see updated statuses, or wait for the webhook event tied to that enrollment to update the row automatically.

<Note>
Medicare enrollment typically clears in 5–10 days. Commercial payers vary from same-day to multiple weeks. Stedi sales can escalate slow payers if the wait is unusual.
</Note>

<Compliance>
Provider enrollment must be completed before the **first real claim** for that payer is submitted in production. The pre-submit audit gate does not currently block on enrollment status — it is the admin's responsibility to confirm enrollment is in **Active** state before flipping a payer to production.
</Compliance>

---

## Webhooks — let Stedi push status to Medipyxis

Stedi uses **webhooks** for async events, replacing ClaimMD's polling model. Medipyxis listens on the `sync-stedi-responses` edge function.

### Webhook endpoint

- **URL** (production):
  `https://{your-project-ref}.supabase.co/functions/v1/sync-stedi-responses`
- **Header authentication:** `x-stedi-webhook-secret: {STEDI_WEBHOOK_SECRET}`
- **Method:** `POST`
- **Body:** Stedi event JSON. The edge function returns `200` immediately and processes asynchronously.

### Events handled

| Event type | What Medipyxis does |
|---|---|
| `file.delivered` | Marks the claim as `submitted` (file delivered to payer). Updates `stedi_file_execution_id` on `billing_claims`. |
| `file.failed` | Marks the claim as `delivery_failed`. Surfaces the error in the Work Queue with `Needs Info`. |
| `transaction.processed` (277CA) | Parses the 277 claim acknowledgment; flips status to `accepted` or `rejected` and stores the full 277 detail on `billing_claims.stedi_277_response`. |
| `transaction.processed` (835) | Logs the inbound ERA `transactionId` for retrieval. The ERA UI pulls the 835 from the Stedi ERA Report endpoint. |
| Any event | Persists a row in `public.stedi_webhook_log` with `event_id`, `event_type`, full detail JSON, and `processed` flag for idempotency and debugging. |

### Configure the webhook in the Stedi dashboard

1. Log into the Stedi dashboard.
2. Open **Webhooks** for the relevant integration.
3. Add the Medipyxis URL above, set the **secret** to match `STEDI_WEBHOOK_SECRET` you configured in Supabase, and subscribe to at least: `file.delivered`, `file.failed`, `transaction.processed`.
4. Save. Use Stedi's **Send test event** button — you should see a row appear in `stedi_webhook_log` within seconds.

<Warning>
If `STEDI_WEBHOOK_SECRET` is missing or mismatched, `sync-stedi-responses` returns an auth error and the webhook is dropped. Status updates will stop flowing into the Work Queue. Always re-test after rotating the secret.
</Warning>

---

## ERA auto-post toggle

When ERA auto-post is on, Medipyxis automatically applies 835 remittance advice to matching claims without manual posting.

1. Navigate to **Billing → Settings → Clearinghouse**.
2. Locate the **ERA Auto-Post** toggle.
3. Turn it on to post ERAs automatically. Leave it off if your billing team prefers to review each ERA before posting.
4. Click **Save**.

<Note>
Auto-post applies only when the ERA amount exactly matches the claim's expected payment. Partial payments, adjustments, and denial codes always route to the ERA UI for manual review regardless of this setting.
</Note>

---

## Default rendering provider per facility

1. In **Billing → Superbill Config → Templates**, open the **Facility Default** template.
2. Set the **Default Rendering Provider** dropdown to the NPI assigned to this facility. This becomes `claimInformation.serviceLines[].renderingProvider.npi` on every Stedi 837P submission for new claims here.
3. Click **Save**.

Individual claims can override the rendering provider on the claim form before submission.

---

## Idempotency and replay

Every submission to Stedi includes an `Idempotency-Key` (server-generated UUID). If a network blip causes a duplicate POST, Stedi recognizes the key and returns the original response instead of creating a second claim. Billers do not need to take any action; the Work Queue shows a single claim row.

---

## Result

Your Code Library, Fee Schedule, and default Superbill Template are configured. Stedi credentials are stored as Supabase secrets, webhook delivery is verified, payer enrollment is in flight or active, and ERA auto-post is set to your preference. New claims created in the [Work Queue](../modules/billing/work-queue.md) flow through the pre-submit audit gate, post to Stedi as JSON 837P, and feed status updates back via webhook into the Work Queue and the ERA UI.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| 401 from Stedi on submission | `STEDI_API_KEY` missing or wrong | Re-set the secret in Supabase and redeploy `submit-to-stedi`. Verify the key in the Stedi dashboard hasn't been rotated. |
| 422 from `submit-to-stedi` with "Validation failed" | NPI or Medicare MBI failed validation | The edge function returns the failing fields in `errors[]`. Fix the facility NPI or the patient MBI and resubmit. |
| Enrollment row stuck on Submitted | Payer is processing the request | Most payers clear in 5–10 days; refresh the page or wait for the webhook. Escalate with Stedi sales if past payer SLA. |
| Webhook events not arriving | URL or secret mismatch in Stedi dashboard | Re-paste the URL, regenerate the `STEDI_WEBHOOK_SECRET`, update both sides, send a test event. |
| Webhook arriving but Work Queue not updating | `sync-stedi-responses` failed; row in `stedi_webhook_log` has `processed = false` and an `error_message` | Open the row, read the error, fix root cause (often a missing `stedi_transaction_id` mapping), then reprocess. |
| Claim status stays `submitted` indefinitely | 277CA never arrived from the payer | Re-run **Check Status** in the Work Queue to call Stedi 276/277. If the payer truly never responded, contact Stedi support. |
| ERA auto-post skipped a claim | Amount mismatch or no matching claim | Open the ERA in the ERA UI and post manually. |
| Test Connection-equivalent fails on a new key | Wrong API key, wrong base URL (prod key in sandbox or vice-versa), or function not redeployed | Confirm `STEDI_API_KEY` matches the environment, `STEDI_API_BASE_URL` is unset (or set to the matching base), and the function was redeployed after the secret update. |

## Related

Auto-rendered from `related:` in frontmatter.
