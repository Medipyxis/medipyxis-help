---
id: vendor-portal-faq
title: Vendor Portal FAQ
module: vendor-portal
audience: [vendor]
roles: [vendor_rep, vendor_coordinator]
type: reference
estimated_minutes: 5
last_reviewed: 2026-04-24
related:
  - vendor-portal-index
  - vendor-portal-submit-product
  - vendor-portal-respond-to-ivr
  - vendor-portal-shipment-and-uin
  - vendor-portal-invoices-and-payment
tags: [FAQ, vendor, PHI, HCPCS, UIN, IVR, catalog, compliance]
---

# Vendor Portal FAQ

Answers to the questions vendor representatives and coordinators ask most frequently.

---

**1. Can I see patient-level data?**

No. PHI is fully redacted from all vendor-accessible screens. When an IVR references a patient, you see a reference number — not a name, date of birth, diagnosis, or any other identifier. This design is intentional and required by HIPAA. Medipyxis's Business Associate Agreement does not extend PHI access to vendor users.

---

**2. How do I update my HCPCS code when CMS reclassifies a product?**

1. Navigate to **Inventory → Product Catalog** and find your product.
2. Click **Edit** on the product row.
3. Update the **HCPCS** field to the new code.
4. The system validates the new code against the current CMS active code list in real time.
5. Click **Save**.

The update takes effect immediately for new orders. Claims already submitted under the old code are not retroactively changed — your billing contact at the practice handles those separately.

<Compliance>
CMS HCPCS reclassifications have effective dates. Update the catalog before the effective date to avoid claim denials on new visits.
</Compliance>

---

**3. Why is my product not appearing in the clinician's Visit Wizard?**

Two common causes:

- The product **STATUS** is set to `Inactive` in the Product Catalog. Set it to `Active`.
- The product is `Pending Approval` — the practice's `vendor_coordinator` has not yet approved your catalog submission. Contact them to expedite review.

---

**4. A UIN was scanned in the Visit Wizard but the unit was not used — how is wastage handled?**

The clinician documents wastage in Visit Wizard step 13 using the wastage calculator. The UIN is marked as `Partially Used` or `Wasted` in the active inventory rather than fully consumed. The invoice line reflects the actual quantity used, not the quantity scanned. Contact the practice's `vendor_coordinator` if you believe a wastage entry is incorrect.

---

**5. How do I get notified about new IVRs?**

Browser notifications are sent automatically when a new IVR is routed to your products, provided you have notifications enabled for `app.medipyxis.com`. To enable: visit the site, allow notifications in your browser's permission prompt, and confirm in **Profile → Notification Preferences** that IVR alerts are turned on.

---

**6. Can I upload multiple products at once?**

Bulk product upload is not available in the current vendor portal release. Add each product individually via the **Add Product** wizard in **Inventory → Product Catalog**. If you have a large catalog to onboard, contact the practice's `vendor_coordinator` — they can request a bulk import from Medipyxis support.

---

**7. What happens if a lot number fails validation at receiving?**

Receiving is blocked until the discrepancy is resolved. The system compares the lot number you enter against the LOT SUFFIX pattern defined in your Product Catalog entry. If your lot numbering format has changed, update the LOT SUFFIX in the catalog first, then retry receiving.

---

**8. An invoice is marked Overdue but we have not received payment instructions — who do I contact?**

Contact the practice's `finance_ap` user or `vendor_coordinator` directly. Medipyxis does not process payments; the platform only tracks invoice status as updated by the practice's finance team. File a dispute in **Accounts Payable** to flag the invoice and trigger a notification to the practice's finance team.

---

**9. Can I see which specific clinicians are using my products?**

No. Clinician-level usage data is PHI-adjacent and is not surfaced to vendor users. You can see aggregate product consumption (units received vs. units consumed) from the **Main Inventory** view filtered by your SKU. Detailed clinical attribution is not available to vendor roles.

---

**10. How do I remove a product that is discontinued?**

1. Navigate to **Inventory → Product Catalog** and find the product.
2. Click **Edit**.
3. Set **STATUS** to `Inactive`.
4. Click **Save**.

Setting a product to `Inactive` removes it from the Visit Wizard selection and prevents new orders, but preserves all historical records for audit and lot traceability purposes. Do not attempt to delete a product row — deletion is not permitted for products that have been received or used in a visit.
