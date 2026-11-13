---
id: inventory-accounts-payable
title: Reconcile vendor invoices in Accounts Payable
module: inventory
audience: [admin]
roles: [finance_ap, admin]
type: how-to
estimated_minutes: 7
last_reviewed: 2026-11-11
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

- Anyone whose role has the **Inventory** feature can open Accounts Payable and see the invoices.
- Matching lines, recording payments, and opening or resolving disputes need the **Finance AP** or admin role. Other users can look but cannot do these steps.
- The products on the invoice should already exist in the **Product Catalog** and have been received into inventory.

## The Finance AP role

Give staff who reconcile invoices the **Finance AP** role on their user record. **Administrator → Organization Role Config** sets which features each role, including finance ap, can open; it does not assign roles to people.

## Accounts Payable tabs

Open **Accounts Payable** from the Inventory Management hub. The workspace is organized into tabs:

- **Inbox** — **Received Invoices** waiting for triage. Use **Add Invoice** to enter an invoice by hand.
- **Matching** — **Unmatched Lines**: every invoice line still unmatched, with its product, SKU, lot, box UID, quantity, unit cost, line total, patient, and provider. Mark each line **Match**, **Review**, or **Override**.
- **Payments** — **Awaiting Payment**: matched, approved, and partially paid invoices. Record full or **partial payments** here.
- **Disputes** — open disputes and their outcomes.
- **Activity** — the audit trail of AP actions across invoices.
- **Reports** — **Vendor Spend Summary (YTD)**: per vendor, total invoiced, total paid, total disputed, and match rate.

## Typical workflow

1. **Triage in the Inbox.** Review each incoming invoice — vendor, invoice number, date, line count, and amount. Open it to see its details (invoice number, status, invoice and due dates, total), then click **Begin Matching**.
2. **Match the lines.** On the **Matching** tab, mark each line Match, Review, or Override. Medipyxis does not compare quantities or prices for you; a line stays on Unmatched Lines until someone marks it. A line marked Review leaves the list the next time it loads. When every line is matched or overridden, the invoice becomes **matched**.
3. **Record payment.** Matched invoices appear on the **Payments** tab. Click **Record Payment** and enter the payment date, amount, method (ACH, Check, Wire, Credit, or Other), and reference — after the payment has actually been issued through your accounting system. A payment smaller than the total leaves the invoice **partially paid** until the balance is cleared.
4. **Handle discrepancies.** If the invoice is wrong, click **Open Dispute** on it and give a reason; the invoice becomes **disputed**. On the **Disputes** tab, resolve it with one of three outcomes: **credit issued** or **invoice voided** (the invoice is cancelled), or **invoice upheld** (the invoice returns to matched).
5. **Review performance.** Use the **Reports** tab to see each vendor's invoiced, paid, and disputed totals and match rate.

## Invoice statuses you'll see

Invoices move through states such as **matched**, **approved**, **partially paid**, **paid**, and **disputed**, which drive where they appear across the tabs and in the reports.

Only record a payment after it has actually been issued. Marking an invoice paid removes it from the outstanding-payables view and can lead to double payments during bank reconciliation.

Receiving a shipment (through a category tile) and paying its invoice are separate steps. Receiving creates the inventory records (lots) in stock; Accounts Payable reconciles and pays the vendor invoice for them.

## Troubleshooting

- **Accounts Payable is not accessible** — your role does not have the Inventory feature. You see "Access Denied" with "Restricted: Inventory". Ask an admin to turn the feature on for your role in Administrator → Organization Role Config.
- **Match, Record Payment, or Open Dispute fails** — your role is not Finance AP or admin.
- **An invoice still has unmatched lines** — someone needs to mark each line Match or Override on the Matching tab; if the vendor is wrong, open a dispute.
- **A vendor's match rate looks low on Reports** — review that vendor's invoices on the Inbox and Matching tabs and follow up with the vendor.
