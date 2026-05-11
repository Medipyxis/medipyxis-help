---
id: billing-denial-management
title: Manage claim denials and appeals
module: billing
audience: [billing]
roles: [biller, practice_admin, super_admin]
type: how-to
estimated_minutes: 8
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/billing
related:
  - billing-overview
  - billing-work-queue
  - billing-ar-aging
  - billing-era-posting
tags: [billing, denials, appeals, AR]
---

# Manage claim denials and appeals

Triage a denied claim, draft and track an appeal, and close the denial record when the payer renders a final decision.

## Before you start

- A claim has been submitted and returned with a denial (status visible in the **Denials** tab).
- You have the denial reason code and remittance advice from the payer or ERA.
- You have the `biller`, `practice_admin`, or `super_admin` role.

## Denial appeal status reference

Every denial record carries one of 16 appeal statuses. The table below lists them in order from initial triage through final resolution.

| # | Appeal Status | Meaning |
|---|---|---|
| 1 | **Not Started** | Denial received; no action taken yet. |
| 2 | **In Triage** | A biller is actively reviewing the denial reason and determining the appropriate response. |
| 3 | **Awaiting Records** | Additional clinical documentation has been requested from the provider or facility. |
| 4 | **Peer-to-Peer Scheduled** | A physician peer-to-peer review call with the payer's medical director has been scheduled. |
| 5 | **Appeal Drafted** | A written appeal letter and supporting documentation have been prepared but not yet submitted. |
| 6 | **Appeal Submitted (1st)** | First-level appeal has been sent to the payer. |
| 7 | **Appeal Submitted (2nd)** | Second-level appeal (or redetermination) has been sent after an unfavorable first-level decision. |
| 8 | **ALJ Filed** | An Administrative Law Judge hearing request has been filed (Medicare appeals). |
| 9 | **Reopened** | The payer or CMS has agreed to reopen the claim for additional review. |
| 10 | **Partially Overturned** | Payer overturned a portion of the denial; remaining balance may require further action. |
| 11 | **Fully Overturned** | Payer overturned the denial in full; claim should proceed to payment. |
| 12 | **Upheld** | Payer upheld the denial after appeal; further escalation or write-off required. |
| 13 | **Written Off** | Balance has been written off to contractual adjustment or bad debt prior to formal closure. |
| 14 | **Closed-Paid** | Denial resolved; claim paid in full or at the agreed contracted rate. |
| 15 | **Closed-Adjusted** | Denial resolved with a partial payment or adjustment; balance closed. |
| 16 | **Closed-Written Off** | Denial closed with no payment; balance written off to bad debt or contractual. |

## Steps — triage a denial

1. **Open the Denials tab.** Navigate to `/facility/{facility_uuid}/billing` and click **Denials**.

   ![Denials tab showing a list of denied claims with appeal status column](../../assets/billing/billing_03_denials_tab.png)
   *The Denials tab. The **Appeal Status** column shows the current stage for each denial. Items in **Not Started** require immediate attention.*

2. **Identify priority denials.** Sort by the **Aging Bucket** column to surface the oldest denials first. Filter by **Appeal Status: Not Started** to see items that have not been actioned.

3. **Open the denial record.** Click the denied claim row to open the denial detail panel. Review:
   - The denial reason code and description from the ERA or payer correspondence.
   - The original claim's date of service, procedure codes, and diagnosis codes.
   - Any previous appeal history in the **Activity** log.

4. **Set status to In Triage.** In the **Appeal Status** dropdown, select **In Triage**. This signals to other billers that the denial is being worked.

5. **Determine the root cause.** Common denial categories and typical responses:

   | Denial Category | Typical Response |
   |---|---|
   | Missing or invalid documentation | Request records from provider; update to **Awaiting Records** |
   | Medical necessity | Initiate peer-to-peer or draft a medical necessity appeal; update to **Peer-to-Peer Scheduled** or **Appeal Drafted** |
   | Duplicate claim | Verify and void the duplicate; close with **Closed-Adjusted** |
   | Timely filing | Gather proof of timely filing (clearinghouse timestamps); update to **Appeal Drafted** |
   | Authorization missing | Obtain retroactive auth if available; otherwise escalate |

## Steps — draft and submit an appeal

6. **Gather supporting documentation.** From the denial detail panel, click **Attach Documents** and upload:
   - The payer's denial explanation of benefits (EOB) or ERA detail.
   - Clinical notes supporting medical necessity.
   - Any payer-specific appeal form.

7. **Draft the appeal letter.** In the **Appeal Notes** text area, write the appeal narrative. Reference the claim number, date of service, denial reason code, and the specific clinical or regulatory basis for the appeal.

8. **Set status to Appeal Drafted.** Save the notes and update the **Appeal Status** to **Appeal Drafted**.

9. **Submit the appeal to the payer.** Send the appeal package through the payer's preferred channel (portal, fax, or mail). Record the submission confirmation number in the **Appeal Notes** field.

10. **Set status to Appeal Submitted (1st).** Update the appeal status to **Appeal Submitted (1st)** and record the submission date.

<Compliance>
Medicare first-level redeterminations must be filed within 120 days of the initial denial date. Second-level reconsiderations must be filed within 180 days. Track these deadlines in the **Appeal Notes** field — Medipyxis does not currently auto-calculate appeal deadlines.
</Compliance>

## Steps — track to resolution

11. **Monitor for payer response.** Check the denial record periodically. When the payer responds:
    - If overturned in full: set status to **Fully Overturned**. The claim will be reprocessed for payment and should appear in the **Payments (ERA)** tab.
    - If overturned in part: set status to **Partially Overturned** and determine whether the remaining balance warrants a second appeal.
    - If upheld: set status to **Upheld** and escalate to a second appeal (**Appeal Submitted (2nd)**), peer-to-peer (**Peer-to-Peer Scheduled**), or **ALJ Filed** if within Medicare timelines.

12. **Close the denial.** Once no further action is possible or warranted:
    - Payment received in full → **Closed-Paid**.
    - Payment received with adjustment → **Closed-Adjusted**.
    - No payment, balance written off → **Closed-Written Off**.

## Result

The denial record reflects the current appeal status and a complete audit trail in the **Activity** log. Closed denials are excluded from the active **Denials** tab view by default; use the **Status** filter to include them in reporting.

<Warning>
Do not set a denial to **Written Off** or **Closed-Written Off** without supervisor approval. Write-offs affect your facility's net collection rate and are audited in the **Reports Center**.
</Warning>

<Tip>
The **Denial Reasons** report in the Reports Center aggregates denial reasons by payer and CPT code. Review it monthly to identify systemic issues — for example, a payer consistently denying a specific modifier — that can be corrected upstream at the coding level.
</Tip>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Denial not visible in Denials tab | ERA has not been posted yet | Check the **Payments (ERA)** tab; post the ERA first |
| **Appeal Status** dropdown is read-only | Your role does not have edit access | Ask your practice administrator to verify your role permissions |
| Denial shows **Fully Overturned** but no ERA payment received | Payer reprocessing is pending | Wait for the next ERA cycle; check claim.md for a pending 835 |

## Related

Auto-rendered from `related:` in frontmatter.
