---
id: inventory-recall-lookup
title: Look up FDA HCT/P recalls
module: inventory
audience: [admin]
roles: [vendor_coordinator, admin]
type: how-to
estimated_minutes: 3
last_reviewed: 2026-07-10
app_route: /facility/{facility_uuid}/inventory-management/recall-lookup
related:
  - inventory-overview
  - inventory-main-inventory
tags: [inventory, FDA, recall, HCT/P, lot, traceability, chain-of-custody]
---

# Look up FDA HCT/P recalls

When a manufacturer or the FDA recalls a tissue product (HCT/P) lot, use the **Recall Lookup** tool to find every unit of that lot your facility applied — and to whom — so you can act quickly. Open it at `/inventory-management/recall-lookup`.

## Before you start

- You have the lot number (or distinct identification code) named in the recall notice.
- You have the `vendor_coordinator` or `admin` role.

## Look up an affected lot

1. Open **Recall Lookup** from Inventory Management.
2. **Enter the lot number** and search.
3. The results table lists every application of that lot, with:
   - Patient (name, MRN, DOB) and the clinician who applied it
   - Visit date and application timestamp, quantity, and wound case
   - HCPCS / Q-code, size, tissue ID, distinct identification code, and batch expiration
4. **Export to CSV** to hand off to your compliance team or to document the recall response.

<Compliance>
FDA 21 CFR Part 1271 requires HCT/P products to be traceable from donor to recipient. This lookup is the recall/adverse-event side of that chain of custody — it resolves an affected lot to the specific patients and visits it touched. Keep the exported record with your recall documentation.
</Compliance>

## Related

Auto-rendered from `related:` in frontmatter.
