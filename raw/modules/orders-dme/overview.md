---
id: orders-dme-overview
title: Orders & DME overview
module: orders-dme
audience: [clinician, admin]
roles: [np, md, nurse, practice_admin, super_admin]
type: concept
estimated_minutes: 3
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/orders-and-dme
related:
  - orders-dme-create-dme-order
tags: [orders, DME, laboratory, imaging, specialists, home-health]
---

# Orders & DME overview

The Orders & DME module is the hub for generating and tracking all clinical orders that flow out of a patient visit — from durable medical equipment to specialist referrals.

![Orders & DME hub showing six section tiles](../../assets/orders-dme/hub.png)

*Orders & DME hub — six sections tile the main canvas. Click any tile to enter that order type.*

## Six sections

| Section | Purpose |
|---|---|
| **DME Orders** | Create and track prescriptions for durable medical equipment: wound-care supplies, compression devices, walkers, wheelchairs, and similar items. |
| **Laboratory** | Generate lab requisitions and track specimen collection status. |
| **Imaging** | Order X-ray, MRI, ultrasound, and other imaging studies. |
| **Specialists** | Send referral orders to wound care specialists, vascular surgery, podiatry, or other consulting services. |
| **Home Health** | Initiate and track home health agency referrals and certifications. |
| **Vendor Network** | Browse and contact approved vendors for DME and supply procurement. |

## How orders connect to visits

Orders can be initiated two ways:

- **During a visit** — Step 11 (Orders & DME) of the Visit Wizard links directly to this module. Orders created in that context are automatically associated with the visit record.
- **Standalone** — Navigate to Orders & DME directly from the sidebar to place or track orders outside of a visit workflow.

All orders created either way appear in the relevant section list with status tracking.

## Related

Auto-rendered from `related:` in frontmatter.
