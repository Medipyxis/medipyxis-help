---
id: vendor-portal-faq
title: Vendor Portal FAQ
module: vendor-portal
audience: [vendor]
roles: [vendor_admin, vendor_user]
type: reference
estimated_minutes: 4
last_reviewed: 2026-07-08
related:
  - vendor-portal-index
  - vendor-portal-manage-orders
  - vendor-portal-submit-product
  - vendor-portal-invoices-and-payment
tags: [FAQ, vendor, PHI, orders, catalog, invoices]
---

# Vendor Portal FAQ

Answers to the questions vendor staff ask most often about the vendor portal (`/vendor`).

---

**1. Can I see patient-level data?**

No. The portal does not expose PHI. Where a patient is referenced — for example on the **Use Events** page — you see only minimal, de-identified detail such as the patient's initials and year of birth, never a name, full date of birth, or diagnosis.

---

**2. What are the two vendor roles?**

- **vendor_admin** — full access, including the **Staff** page to invite and manage colleagues.
- **vendor_user** — everything except Staff (Orders, Use Events, Catalog, Invoices, Clinics).

See [Sign in and manage staff](./onboarding-your-company.md).

---

**3. How do orders reach me and how do I fulfill them?**

Clinics place orders that appear on your **Orders** page as **Pending**. You accept them (In Progress), ship with a **tracking number** (Shipped), and they complete as **Delivered**. See [Manage orders](./manage-orders.md). There is no UIN/receiving step on the vendor side.

---

**4. How do I add or change a product?**

Manage your SKUs on the **Catalog** page — click **New SKU** or edit an existing one. Changes take effect directly; there is no separate practice approval step. See [Manage your product catalog](./submit-product.md).

---

**5. Do I create invoices, or does the clinic?**

You **send** invoices from the **Invoices** page. The clinic's finance team reconciles and pays them in their Accounts Payable workspace. You track status from your Invoices list. See [Send invoices](./invoices-and-payment.md).

---

**6. What is the Use Events page?**

**Use Events** shows where your products were used, de-identified (initials + year of birth only). Use it to reconcile consumption without any PHI.

---

**7. What does the Clinics page show?**

The **Clinics** page lists the clinics your company is enabled at, so you know which facilities you're serving.

---

**8. Is the vendor portal the same login as the clinical app?**

No. The vendor portal is a separate sign-in at `/vendor`. Vendor accounts are managed inside the portal's **Staff** page by a `vendor_admin`, not through a clinic's HR & Compliance.
