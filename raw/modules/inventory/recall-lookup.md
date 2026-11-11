---
id: inventory-recall-lookup
title: Look up FDA HCT/P recalls
module: inventory
audience: [admin]
roles: [vendor_coordinator, admin]
type: how-to
estimated_minutes: 3
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/inventory-management/recall-lookup
related:
  - inventory-overview
  - inventory-main-inventory
tags: [inventory, FDA, recall, HCT/P, lot, traceability, chain-of-custody]
---

# Look up FDA HCT/P recalls

When a manufacturer or the FDA recalls a tissue product (HCT/P) lot, use the **FDA HCT/P Recall Lookup** to find every application of that lot at your facilities — and to whom — so you can act quickly.

## Before you start

- The lookup has no menu link or hub tile yet. Open it by going to `/inventory-management/recall-lookup` in your Medipyxis web address. A fix to add a menu link is being tracked.
- Your role needs the **Inventory** feature to open the page. The search itself works for the admin, vendor coordinator, clinical manager, medical director, clinician, provider, biller, and finance AP roles.
- Results cover only the facilities you have access to.
- Have the lot number named in the recall notice. The lookup searches by lot number only, and the lot must match exactly.

## Look up an affected lot

1. Open the recall lookup page.
2. **Enter the lot number** in **Enter lot number...** and click **Search** (or press Enter).
3. The results table lists every application of that lot, newest first, with: Patient, MRN, DOB, Visit Date, Clinician, Wound Case, HCPCS, and Size.
4. Click **Export CSV** to hand the list to your compliance team or to document the recall response. The CSV also includes the quantity, Q code, tissue ID, distinct identification code, batch expiration, and application timestamp.

FDA 21 CFR Part 1271 requires HCT/P products to be traceable from donor to recipient. This lookup resolves an affected lot to the specific patients and visits it touched. Keep the exported record with your recall documentation.
