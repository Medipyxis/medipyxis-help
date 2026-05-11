---
id: referral-intake-status-transitions
title: Referral status transitions (reference)
module: referral-intake
audience: [intake, admin]
type: reference
estimated_minutes: 2
last_reviewed: 2026-04-24
related:
  - referral-intake-overview
tags: [referrals, status]
---

# Referral status transitions (reference)

Use this as the authoritative map of what a referral can do next and who can do it.

## State diagram (text form)

```
Fax Queue
   ↓ (OCR auto-create OR manual convert)
New Referrals
   ↓                       ↘
Info Needed ←────→ Financial
   ↓                        ↓
Ready for Assignment  ← (IVR Approved)
   ↓
Assigned  → (creates patient record, exits Intake → Fleet Calendar)
   
Any column → Non-Admit (terminal, with reason)
```

## Transition rules

| From → To | Who can trigger | Validations |
|---|---|---|
| Fax Queue → New Referrals | intake_coordinator, admin | Fax converted to referral with required demographics |
| New Referrals → Info Needed | intake_coordinator | Missing-fields checklist noted in Chat |
| Info Needed → New Referrals | intake_coordinator | All requested fields now present |
| New Referrals → Financial | intake_coordinator, admin | Insurance captured |
| Financial → Ready for Assignment | biller, intake_coordinator | IVR status ≥ Approved |
| Financial → Non-Admit | admin, intake_coordinator | IVR Declined or patient out-of-network |
| Ready for Assignment → Assigned | clinical_manager, admin | Clinician + Facility assigned |
| Assigned → Non-Admit | admin | Rarely; requires supervisor note |

## Non-Admit reasons

- Coverage (insurance doesn't pay for wound care)
- Geography (outside our service area)
- Clinical (unsuitable candidate — e.g., unstageable with sepsis referral to ER instead)
- Patient declined
- Deceased
- Duplicate of existing patient
- Other (free-text required)
