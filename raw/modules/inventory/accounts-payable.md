---
id: inventory-accounts-payable
title: Reconcile vendor invoices in Accounts Payable
module: inventory
audience: [admin]
roles: [finance_ap, admin]
type: how-to
estimated_minutes: 7
last_reviewed: 2026-07-08
app_route: /facility/{facility_uuid}/inventory/accounts-payable
related:
  - inventory-overview
  - inventory-amniotic-biologics-conservative
  - inventory-main-inventory
prerequisites:
  - inventory-overview
tags: [inventory, accounts payable, invoice, vendor, finance, AP, matching, payments, disputes]
---

# Reconcile vendor invoices in Accounts Payable

Take a vendor invoice from intake through matching, payment, and (if needed) dispute resolution, using the tabbed **Accounts Payable** workspace.

## Before you start

- You must have the `finance_ap` or `admin` role to open **Accounts Payable**.
- The products on the invoice should already exist in the **Product Catalog** and have been received into inventory.

## The Finance AP role

The `finance_ap` role grants access to **Accounts Payable** and to cost data in inventory. Users with only `vendor_coordinator` or clinical roles see inventory units but not cost or AP information. Assign `finance_ap` in **Administrator → Organization Role Config** to staff responsible for invoice reconciliation.

## Accounts Payable tabs

Open **Accounts Payable** from the Inventory Management hub (route `/facility/{facility_uuid}/inventory/accounts-payable`). The workspace is organized into tabs:

| Tab | What it's for |
|---|---|
| **Inbox** | Incoming vendor invoices awaiting triage. Start here to review and route new invoices. |
| **Matching** | Match invoice lines to received shipments. Unmatched lines are surfaced so you can reconcile quantities and prices. |
| **Payments** | Record payments against matched, approved invoices — including **partial payments**. |
| **Disputes** | Track discrepancies. Open a dispute when an invoice doesn't reconcile; resolve it when the vendor issues a correction or credit. |
| **Activity** | The audit trail of AP actions across invoices. |
| **Reports** | Per-vendor rollups — total invoiced, total paid, total disputed, and match rate. |

## Typical workflow

1. **Triage in the Inbox.** Review each incoming invoice — vendor, invoice number, date, and amount — and open it to see its lines.
2. **Match the lines.** On the **Matching** tab, reconcile the invoice's line items against received shipments. Lines whose quantity and price agree reconcile cleanly; the **Unmatched Lines** view lists anything that doesn't.
3. **Approve for payment.** Once an invoice is matched and reviewed, approve it so it's eligible for payment.
4. **Record payment.** On the **Payments** tab, record a full or **partial** payment after payment is actually issued through your accounting system. An invoice can sit in a partially-paid state until the balance is cleared.
5. **Handle discrepancies.** If a line can't be reconciled, open a **dispute** and work it on the **Disputes** tab. Resolve it by re-matching against a corrected invoice or by recording the vendor's credit.
6. **Review performance.** Use the **Reports** tab to see each vendor's invoiced/paid/disputed totals and match rate.

## Invoice statuses you'll see

Invoices move through states such as **matched**, **approved**, **partially paid**, **paid**, and **disputed**, which drive where they appear across the tabs and in the reports.

<Warning>
Only record a payment after it has actually been issued. Marking an invoice paid prematurely removes it from the outstanding-payables view and can lead to double payments during bank reconciliation.
</Warning>

<Note>
Receiving a shipment (through a category tile) and paying its invoice are separate steps. Receiving creates the inventory units (UINs); Accounts Payable reconciles and pays the vendor invoice for those units.
</Note>

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| **Accounts Payable** is not accessible | Your role does not include `finance_ap` or `admin` | Ask an `admin` to update your role in **Administrator → Organization Role Config** |
| An invoice has unmatched lines | Received quantity or price differs from the invoice | Reconcile on the **Matching** tab; if the vendor is wrong, open a **dispute** |
| A vendor's match rate looks low | Recurring quantity/price mismatches | Review the vendor's recent invoices on **Reports** and follow up with the vendor |

## Related

Auto-rendered from `related:` in frontmatter.
