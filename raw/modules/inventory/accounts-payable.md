---
id: inventory-accounts-payable
title: Receive shipments and reconcile invoices in Accounts Payable
module: inventory
audience: [admin]
roles: [finance_ap, practice_admin]
type: how-to
estimated_minutes: 7
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/inventory-management
related:
  - inventory-overview
  - inventory-amniotic-biologics-conservative
  - inventory-main-inventory
prerequisites:
  - inventory-overview
tags: [inventory, accounts payable, invoice, purchase order, vendor, finance, AP, shipment]
---

# Receive shipments and reconcile invoices in Accounts Payable

Record an incoming shipment, match the vendor invoice to the corresponding purchase order, and track payment status — all from the **Accounts Payable** tile in Inventory Management.

## Before you start

- You must have the `finance_ap` or `practice_admin` role to access the **Accounts Payable** tile.
- The products in the shipment must already exist in the **Product Catalog** with `Active` status.
- Have the vendor's packing slip and invoice on hand before starting — you will need the invoice number, invoice date, and line-item totals.

## The Finance AP role

The `finance_ap` role grants access to **Accounts Payable** and the financial columns in **Main Inventory** (unit cost, extended cost). Users with only the `vendor_coordinator` or `nurse` role see the inventory units but not the cost data. Assign the `finance_ap` role in **Administrator → Organization Role Config** to staff who are responsible for invoice reconciliation and purchase-order approval.

## Accounts Payable columns

From the **Inventory Management** hub, select **Accounts Payable**.

![The Accounts Payable table showing columns VENDOR, INVOICE #, DATE, DUE, TOTAL, STATUS, and ACTIONS with sample invoice rows in various statuses.](../../assets/inventory/accounts_payable.png)

*Accounts Payable table. Each row represents one vendor invoice.*

| Column | Description |
|---|---|
| **VENDOR** | The vendor or distributor name. Pulled from the vendor record associated with the purchase order. |
| **INVOICE #** | The invoice number as printed on the vendor's invoice. Must be unique per vendor to prevent duplicate payments. |
| **DATE** | The invoice date (the date the vendor issued the invoice, not the date it was received). |
| **DUE** | The payment due date. Invoices approaching or past their due date display an amber or red indicator, respectively. |
| **TOTAL** | The total amount billed on the invoice, in USD. |
| **STATUS** | Current payment status. See status values below. |
| **ACTIONS** | Contextual actions available for the invoice (e.g., **Match to PO**, **Mark Paid**, **Dispute**). Available actions depend on current STATUS. |

### STATUS values

| Value | Meaning |
|---|---|
| `Unmatched` | The invoice has been entered but has not yet been matched to a purchase order. |
| `Matched` | The invoice has been matched to a PO and line items have been reconciled. Pending payment approval. |
| `Approved` | The invoice has been approved for payment by an authorized user. Ready for payment processing. |
| `Paid` | Payment has been issued. The invoice is closed. |
| `Disputed` | A discrepancy was found between the invoice and the PO. Payment is held pending vendor resolution. |

## Receive a shipment

Receiving a shipment creates the inventory units (UINs) in Main Inventory and, optionally, opens an Accounts Payable record for the associated invoice.

1. **Open the appropriate category tile.** Go to **Inventory Management** and select the tile that matches the products being received: **Amniotic / Advance Treatment**, **Biologics / Matrix**, or **Conservative Care Products**.

2. **Initiate receiving.** Click **Receive Shipment** within the category tile.

3. **Enter unit details.** For each unit in the shipment, complete the receiving form (Lot #, Tissue ID if applicable, Expiration Date, Size, HCPCS, quantity). Each unit entry generates one UIN. See [Specialty catalog tiles](./amniotic-biologics-conservative.md) for field requirements by category.

4. **Attach the packing slip.** Upload a scan or photo of the vendor's packing slip using **Attach Document**. This links the physical receipt to the digital inventory record.

5. **Save the receipt.** Click **Save**. The units appear in **Main Inventory** with status `Available`.

## Enter and match a vendor invoice

1. **Open Accounts Payable.** From the **Inventory Management** hub, select **Accounts Payable**.

2. **Create an invoice record.** Click **New Invoice**. Complete the following fields:
   - **Vendor** — select from the vendor list or type to search.
   - **Invoice #** — enter exactly as printed on the vendor's invoice.
   - **Date** — the date on the vendor's invoice.
   - **Due** — the payment due date (typically 30 or 60 days from the invoice date per your vendor agreement).
   - **Total** — the total amount billed.
   - **Attach Invoice** — upload a PDF or image of the invoice document.

3. **Save the invoice.** Click **Save**. The invoice appears in the table with status `Unmatched`.

4. **Match to a purchase order.** Locate the invoice row and click **Match to PO** in the **ACTIONS** column. The system displays open purchase orders from the same vendor. Select the PO that corresponds to this shipment.

5. **Reconcile line items.** The system compares the invoice line items to the PO line items. For each line:
   - If the billed quantity and unit price match the PO: the line is marked reconciled automatically.
   - If there is a discrepancy: the line is flagged. Correct the quantity or price if the invoice is accurate and the PO was entered in error, or click **Dispute Line** to hold the line and contact the vendor.

6. **Complete the match.** When all lines are reconciled or disputed, click **Confirm Match**. The invoice status updates to `Matched`.

## Approve and record payment

1. **Review the matched invoice.** Open the invoice record and verify that the total and all line items are correct.

2. **Approve for payment.** Click **Approve**. The invoice status updates to `Approved`. This action is logged with the approving user's name and timestamp.

3. **Record payment.** After payment is issued (via check, ACH, or credit card through your external accounting system), return to the invoice record and click **Mark Paid**. Enter the payment date and reference number. The status updates to `Paid`.

## Result

The invoice is closed. The payment reference number is stored against the invoice record for audit and reconciliation purposes. The associated inventory units remain in **Main Inventory** linked to the receiving event and, when applied, to the patient encounter.

<Warning>
Do not mark an invoice `Paid` until payment has actually been issued. Marking an invoice paid prematurely closes the record and removes it from the outstanding-payables view, which can cause double-payment errors during bank reconciliation.
</Warning>

<Note>
Disputed invoices remain visible in the **Accounts Payable** table with status `Disputed`. Use the **Notes** field on the invoice record to log every communication with the vendor until the dispute is resolved. When resolved, either update the invoiced amount to match what was agreed and re-match to the PO, or request a credit memo from the vendor.
</Note>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **Accounts Payable** tile is not visible on the hub | Role does not include `finance_ap` or `practice_admin` | Ask a `practice_admin` or `super_admin` to update your role in **Administrator → Organization Role Config** |
| **Match to PO** returns no results | No open PO exists for this vendor, or the PO is already matched to another invoice | Verify a PO was created for this order; if not, create one before matching |
| Duplicate invoice number error | An invoice with this number already exists for this vendor | Check whether the invoice was already entered; if it is a legitimate re-invoice, append a suffix (e.g., `-R1`) and document the reason in **Notes** |
| Line item quantity mismatch | The received quantity differs from what was ordered | Confirm the packing slip count; if the shipment was short, create a discrepancy note and contact the vendor before approving |

## Related

Auto-rendered from `related:` in frontmatter.
