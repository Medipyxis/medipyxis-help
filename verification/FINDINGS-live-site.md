# Findings: every live help.medipyxis.com page vs prod v1.1.345

MEDA-379 bot verification of the live site (help `main` at `70c2736`). **Findings only — parked for review, nothing published, no live page changed.**

- Live pages checked: 137 (every page). Claims: see `verification/reports/2026-11-11-live-site-v1.1.345.md`.
- Items below: 1220 live statements that are false or not confirmed (incl. PR-evidence-only). Each has the product finding and replacement wording whose checks pass, where one could be written.
- Pages are listed worst first.

| Page | Not confirmed |
|---|---|
| release-notes/2026-08 | 52 |
| release-notes/2026-04 | 49 |
| modules/visit-wizard-ehr/start-a-visit | 36 |
| modules/billing/cms-1500-and-837p-fields | 26 |
| modules/billing/era-posting | 25 |
| release-notes/2026-05 | 24 |
| modules/visit-wizard-ehr/wound-assessment | 22 |
| quick-reference/practice-admin | 22 |
| modules/billing/submit-claim | 21 |
| quick-reference/vendor-rep | 21 |
| modules/billing/stedi-actions-inbox | 19 |
| admin/practice-onboarding-csv-reference | 18 |
| modules/billing/claim-scrub | 18 |
| modules/billing/denial-management | 18 |
| vendor-portal/onboarding-your-company | 18 |
| admin/deactivating-and-archiving | 17 |
| modules/visit-wizard-ehr/sign-off/index.html | 17 |
| admin/billing-setup | 16 |
| modules/billing/coding-review-drawer | 16 |
| quick-reference/nurse-daily | 16 |
| release-notes/2026-06 | 16 |
| admin/user-management | 15 |
| modules/hr-compliance/announcements | 15 |
| modules/inventory/accounts-payable | 15 |
| modules/inventory/product-catalog | 15 |
| modules/more-fax/send-fax | 15 |
| modules/visit-wizard-ehr/lcd-navigator | 15 |
| modules/billing/charge-master-and-zero-dollar-guard | 14 |
| modules/more-fax/file-to-chart | 14 |
| quick-reference/bd-rep | 14 |
| vendor-portal/manage-catalog | 14 |
| vendor-portal/receiving | 14 |
| vendor-portal/shipments | 14 |
| vendor-portal/terms-and-contracts | 14 |
| admin/facility-timezone | 13 |
| modules/billing/overview | 13 |
| modules/business-development/log-call-and-visit | 13 |
| modules/inventory/main-inventory | 13 |
| admin/facility-setup | 12 |
| modules/billing/timely-filing | 12 |
| modules/visit-wizard-ehr/wound-cockpit | 12 |
| admin/data-import-export | 11 |
| admin/notifications | 11 |
| getting-started/by-role/bd-crm | 11 |
| getting-started/by-role/clinician | 11 |
| getting-started/login-and-setup | 11 |
| modules/billing/eligibility-and-verify-insurance | 11 |
| modules/billing/ptan-and-payer-enrollment | 11 |
| modules/billing/retired-cpt-guard | 11 |
| modules/inventory/bulk-operations | 11 |
| modules/inventory/ivr-tracking | 11 |
| modules/visit-wizard-ehr/progress-note/index.html | 11 |
| quick-reference/biller | 11 |
| vendor-portal/invoices-and-payment | 11 |
| modules/billing/work-queue | 10 |
| modules/fleet-calendar/create-appointment | 10 |
| modules/fleet-calendar/overview | 10 |
| modules/more-fax/overview | 10 |
| modules/visit-wizard-ehr/how-the-wizard-opens | 10 |
| admin/multi-location-setup | 9 |
| getting-started/by-role/practice-admin | 9 |
| getting-started/your-dashboard | 9 |
| modules/inventory/overview | 9 |
| modules/oversight-cockpit/financial-performance | 9 |
| modules/crm/practice-detail | 8 |
| modules/dashboard/overview | 8 |
| modules/fleet-calendar/route-optimization | 8 |
| modules/inventory/amniotic-biologics-conservative | 8 |
| modules/orders-dme/create-dme-order | 8 |
| modules/team-chat/overview | 8 |
| modules/visit-wizard-ehr/overview/index.html | 8 |
| admin/role-config | 7 |
| admin/security-and-compliance | 7 |
| getting-started/by-role/billing | 7 |
| getting-started/by-role/graft-vendor | 7 |
| modules/billing/diagnosis-code-validation | 7 |
| modules/business-development/ai-route-suggestions | 7 |
| modules/business-development/overview | 7 |
| whats-new/practice-data-import | 7 |
| modules/facilities/overview | 6 |
| modules/hr-compliance/new-employee | 6 |
| modules/hr-compliance/overview | 6 |
| modules/visit-wizard-ehr/medication-dosespot | 6 |
| modules/billing/ar-aging | 5 |
| release-notes/2026-09 | 5 |
| vendor-portal/respond-to-requests | 5 |
| modules/inventory/recall-lookup | 4 |
| modules/oversight-cockpit/overview | 4 |
| modules/referral-intake/fax-queue-review | 4 |
| modules/visit-wizard-ehr/aprn-credential | 4 |
| modules/visit-wizard-ehr/note-honesty-guardrails | 4 |
| vendor-portal/faq | 4 |
| admin/practice-onboarding | 3 |
| modules/crm/overview | 3 |
| modules/fleet-calendar/my-day | 3 |
| modules/hr-compliance/credential-tracker | 3 |
| modules/orders-dme/overview | 3 |
| vendor-portal/manage-orders | 3 |
|  | 2 |
| modules/patient-management/overview | 2 |
| modules/patient-management/zus-tefca | 2 |
| modules/referral-intake/new-referral | 2 |
| modules/referral-intake/overview | 2 |
| modules/referral-intake/setup | 2 |
| modules/referral-intake/status-transitions | 2 |
| modules/visit-wizard-ehr/signature-timestamp/index.html | 2 |
| modules/visit-wizard-ehr/work-offline | 2 |
| release-notes/2026-03 | 2 |
| modules | 1 |
| modules/oversight-cockpit | 1 |
| modules/referral-intake/detail-panel | 1 |
| release-notes/2026-01 | 1 |
| release-notes/2026-02 | 1 |
| whats-new/snf-rounding | 1 |

## August 2026 release notes — 52

https://help.medipyxis.com/release-notes/2026-08/

- **rn08-00c** — live: “The month was heavy on billing correctness, note honesty, and shipping the native app photo capture. 241 non-refactor feat/fix commits landed, spanning 8 release trains (v1.1.267 through v1.1.300).”
  - Proposed: Changes merged between 2026-08-01 and 2026-09-01, released in v1.1.267 through v1.1.301.
- **rn08-02b** — live: “Notes used to print a raw UTC ISO instant (24% of signed notes) or a false "same day" fallback (99% of finalized notes).”
- **rn08-02c** — live: “Legacy PDF fallback that stamped new Date() onto unsigned notes is deleted.”
- **rn08-05** — live: “Contradictory is_clean formulas reconciled in the perfect-note pipeline.”
- **rn08-10** — live: “Encounter identity on every amendment. An addendum now identifies which encounter it belongs to — no more ambiguous "which visit is this?" corrections.”
- **rn08-11** — live: “Patient name, MRN, and DOB print on every addendum page — required for HH agencies that receive faxed amendments.”
- **rn08-13** — live: “★ Coding Review Drawer soft-blocks and closes bypasses. Coding findings are soft-blocks — you can override with a reason — and the manual bypasses that used to skip the drawer entirely are closed.”
  - Product: No override-with-reason exists in the Coding Review drawer, the billing components, or the claim pages at v1.1.345.
  - Proposed: Coding Review drawer opens on the claim it codes. (PR #3376)
- **rn08-13b** — live: “Coding Review now resolves 174 of 461 clinical notes (was 60).”
- **rn08-14b** — live: “Reworked twice after hostile review to close 84 findings.”
- **rn08-16** — live: “★ Area-based CPT coding for debridement, CTP, and NPWT. Correct code selection driven by measured wound area.”
- **rn08-17b** — live: “Three prod notes had been billed with it in July 2026.”
- **rn08-19** — live: “CMS-1500 Box 1 marked from the same source as the 837P wire — the two now agree.”
- **rn08-20** — live: “CMS-1500 checkboxes that never got marked are now marked.”
- **rn08-25** — live: “★ First-ever coverage of the inbound path (277CA + 835 ERA). Documented why the inbound path was previously unproven — never ran, never failed.”
- **rn08-27** — live: “Subscriber DOB recovered and paired with DMG03.”
- **rn08-28** — live: “DMG03 patient sex populated; stops CMS-1500 guessing Male when the field was blank.”
- **rn08-29** — live: “All 6 always-required 837P claimInformation fields sent.”
- **rn08-32** — live: “Primary line no longer counted twice on auto claims.”
- **rn08-36** — live: “★ Patient.active preserved on identifier write-back. One-shot repair function shipped for patients whose active flag was stripped by the prior defect. Also unblocked FQS reads on Patient 403 responses.”
- **rn08-38** — live: “Sync button in pre-charting with toast feedback; SELECT RLS policy added for zushealth_patient_relations.”
- **rn08-42** — live: “PHI logs removed from Zus code paths.”
- **rn08-43** — live: “CE Builder ID added for [name] (CA).”
  - Proposed: (Remove this item.)
- **rn08-44b** — live: “26 commits, culminating in an end-to-end path.”
- **rn08-45** — live: “★ Cross-device visit continuity. Resuming a web visit on the tablet (or vice versa) keeps its wound and photo links intact; the tablet emits id in web's key shape so the two builds share one identity.”
- **rn08-46** — live: “Refused picks surfaced to the clinician instead of silently dropped.”
- **rn08-47** — live: “Removed photos cancel their queued upload.”
- **rn08-48** — live: “Persisted-file fallback when the picked file no longer exists on the device.”
- **rn08-49** — live: “★ Appointment-integrity review surface (Phase 2/3). Admin view for reviewing appointments with data-integrity flags.”
- **rn08-51** — live: “Shared clinician-id normalizer applied to create-appointment and reassign.”
- **rn08-54** — live: “★ Map stays mounted during date-change refetch — no more full remount + flicker.”
- **rn08-55** — live: “★ Map pins no longer randomized for unresolved CA addresses.”
- **rn08-56** — live: “Marker listeners registered once, not once per render.”
- **rn08-57** — live: “Fleet Calendar drains paged reads instead of truncating at max_rows.”
- **rn08-60** — live: “Fax IDP tables scoped by facility grant, not user_profile.facility_id.”
- **rn08-62** (PR evidence only) — live: “NIM-202 closed. Fixed a defect that recorded "self" as an answer nobody gave, and shipped a documented, reproducible row repair.”
- **rn08-64** — live: “Payer shown in Claims picker; warns on duplicates and gates removal.”
- **rn08-65** — live: “Billing & Auth insurance add path guarded.”
- **rn08-66** — live: “Sex editable after intake; ends patient.gender drift between demographics and claims.”
- **rn08-68** — live: “Signer identity shared across modalities (paper, digital, typed).”
- **rn08-70** — live: “Prefills may only add information, never remove it.”
- **rn08-71** — live: “★ Phase 0-2 shipped. Catalog + data-driven router → dispatcher + delivery ledger → real email/SMS/push wiring. Email launches first; SMS and push are "coming soon".”
  - Product: Out of date: SMS was switched on 2026-10-30 (PR #3931); notificationChannels.ts has sms: "live" at v1.1.345. Push is still coming soon.
  - Proposed: Email notifications launched; SMS and push were marked coming soon. (PR #3330) Update (Nov 2026): SMS launched on October 30 (PR #3931); push is still coming soon.
- **rn08-71b** — live: “Email sends through the existing Gmail SMTP path.”
- **rn08-74** — live: “★ BD Activities: row menu, archive confirm with undo, edit modal, archived view.”
- **rn08-75** — live: “Archive-aware mode in useBdActivities; archived activities excluded from daily suggestions.”
- **rn08-78** — live: “Legacy soak gate retired — was reading 0 in front of a live table.”
- **rn08-79** — live: “Blank Tax ID no longer silently blocks facility edit.”
- **rn08-80** — live: “RLS-denied edit no longer reports success.”
- **rn08-82** — live: “★ Billing-surface role gates. Billers and superadmin now 403 on Submit Claim, fax, auth email, and verification — matching the documented permission model.”
- **rn08-83** — live: “Client code can no longer hard-delete clinical records — DELETE policy dropped on visit_data_v2, and higher-level clinical writes routed through edge functions.”
- **rn08-84** — live: “Verify-insurance bound to the facility on write.”
- **rn08-87** — live: “Cross-patient note bleed fixed in the referral intake pipeline; UTC note-date regressions pinned with timezone-independent tests.”
- **rn08-90** — live: “Eight release PRs landed in August: v1.1.267 → v1.1.300. The largest single train was v1.1.297, which carried the Stedi 837P DMG03 recovery, the referring-provider write gap fix, and the coverage-routing hostile-review round.”
  - Proposed: (Remove the Release Trains section.)

## April 2026 release notes — 49

https://help.medipyxis.com/release-notes/2026-04/

- **rn04-00** — live: “Changes shipped between 2026-04-01 and 2026-04-24. Items are grouped by module.”
  - Product: False for the page as written. Every April item cites only a Jira key; where a merged PR cites the key, it merged outside the window: MED-1321 PR #1364 (2026-02-10), MED-1561 PR #1463 (2026-02-25), MED-1432 PR #1522 (2026-03-23), MED-1659 PR #1505 (2026-03-19), MED-1655 PRs #1490–#1539 (March), MED-1469 PR #1365/#1409 (February), MED-1260 PR #1403 (2026-02-10), MED-1426 PR #1281/#1290 (Dec 2025–Jan 2026), MED-1111 PR #988 (Nov 2025), MED-1150 PR #925 (Nov 2025), MED-1130 PR #975/#1209 (Nov–Dec 2025), MED-1272 PR #999 (Nov 2025), MED-1593 PR #1458 (2026-02-24). The other ~40 keys have no PR at all.
  - Proposed: Changes merged between 2026-04-01 and 2026-04-24. Items are grouped by module. This is not a complete list: it covers selected user-facing changes that are still in the current release. (Replace the Jira-cited list with the PR-cited April items: Fleet Calendar week view and status legend (#1587); delete an appointment (#1592); Heat Map (#1646); Operations KPIs (#1662); Referral Health real data (#1664); Back to Analytics (#1682); Next Best Action queue (#1654); Industry News (#1644); LCD Navigator rebuilt and shown to nurses (#1612, #1625); IVR Readiness window (#1614); Patient Allergies card with DoseSpot sync (#1689); Send via eRx opens DoseSpot on the right patient (#1686); provider write-off and My Inventory link (#1636).)
- **rn04-01** — live: “★ Fleet Calendar — 30-minute appointments in 45-minute slots. Fixed an issue where dragging a 30-minute appointment onto a 45-minute slot caused the appointment box to disappear from the calendar view. (MED-1321)”
  - Product: MED-1321 shipped in PR #1364, merged 2026-02-10, not between 2026-04-01 and 2026-04-24. The PR title describes appointment overflow across hour boundaries in Fleet Calendar.
  - Proposed: Remove from April. If kept, list under February 2026: Fleet Calendar — appointments that cross an hour boundary no longer overflow. (PR #1364)
- **rn04-02** — live: “Fleet Calendar — Fleet Calendar module missing on demo environment. Restored the Fleet Calendar module, which had been absent from the demo tenant after a routing configuration change. (MED-1593)”
  - Product: MED-1593 shipped in PR #1458, merged 2026-02-24, not between 2026-04-01 and 2026-04-24. The module is routed in v1.1.345 (user-routes.tsx).
  - Proposed: Remove from April (shipped February 2026, PR #1458). A demo-environment fix is not a customer-facing change.
- **rn04-03** — live: “Fleet Calendar — Provider Calendar and Fleet Calendar validation parity. Applied the same slot-overlap and duration validations used in Provider Calendar to Fleet Calendar so both surfaces enforce identical scheduling rules. (MED-1492)”
- **rn04-04** — live: “Fleet Calendar — Incorrect distance calculation due to hardcoded coordinates. Replaced a hardcoded latitude/longitude fallback with dynamic provider home-address lookup so route distance calculations reflect actual locations. (MED-1680)”
- **rn04-05** — live: “Fleet Calendar — Clinician title displays correctly. Resolved a display issue where the clinician title always showed as "RN" regardless of the provider's actual role. (MED-1676)”
- **rn04-06** — live: “★ My Calendar — Created appointments now appear in assigned provider's calendar. Fixed a race condition that caused newly created appointments to be missing from the My Calendar view immediately after creation. (MED-1642, MED-1618)”
- **rn04-08** — live: “★ Referral Intake — First name and last name fields are now editable. Resolved a regression that made the First Name and Last Name fields read-only after initial save, preventing corrections without supervisor intervention. (MED-1315)”
- **rn04-09** — live: “★ Referral Intake — Duplicate patient prevention. Added a guard that prevents multiple patient records from being created when the Create Patient button is clicked more than once in rapid succession. (MED-1677)”
- **rn04-10** — live: “Referral Intake — TIFF image uploads now accepted. TIFF files uploaded to the Documents tab of a referral record previously returned a silent failure; they now upload and render correctly. (MED-1423)”
  - Product: TIFF upload is in v1.1.345, but it shipped in January 2026 (PR #1320, #1323), not April; the live January page says January had no user-facing changes.
  - Proposed: Remove from April; list under January 2026: TIFF images can be uploaded to a referral's documents. (PR #1320, #1323)
- **rn04-12** — live: “Referral Intake — Long filenames no longer overflow the Documents tab. File names that exceed the column width are now truncated with an ellipsis and a tooltip showing the full name. (MED-1469, resolved in March batch; surfaced in April)”
  - Product: Truncation with a tooltip is in v1.1.345, but MED-1469 shipped in February (PR #1365 merged 2026-02-06, PR #1409 merged 2026-02-10), not in a March batch.
  - Proposed: Remove from April; if kept, list under February 2026: long document file names in a referral are truncated, with the full name on hover. (PR #1365, #1409)
- **rn04-13** — live: “★ Scheduling — Archived patients excluded from scheduling. Patients with Archived status no longer appear in the provider assignment picker or appointment creation flow, preventing accidental scheduling of discharged patients. (MED-1695)”
- **rn04-15** — live: “Patient Context — Mark as Complete validation enforced. The Mark as Complete button on the Patient Context & Demographics step is now disabled until all mandatory fields are filled, preventing incomplete records from advancing. (MED-1441)”
- **rn04-16** — live: “★ Visit Wizard — ZusHealth patient data mapped and stored. Patient data imported from ZusHealth is now correctly mapped to the corresponding Visit Wizard fields and persisted to the patient record in Supabase. (MED-1292)”
- **rn04-18** — live: “★ Visit Wizard — Wound Care Progress Note: Initial Evaluation. Added a structured Wound Care Progress Note output for initial evaluation visits, generated from Visit Wizard data at the point of provider attestation. (MED-1149)”
  - Product: The progress note generator shipped in March 2026 (PR #1487 merged 2026-03-13, with #1520, #1542), not April; the live March page says March had no user-facing changes. MED-1149 has no PR.
  - Proposed: Remove from April; list under March 2026: Wound care progress note generator. Medipyxis builds the wound care progress note from the visit's documentation. (PR #1487, #1520, #1542)
- **rn04-19** — live: “★ Visit Wizard — Wound Care Progress Note: Follow-Up Visit. Added a parallel Wound Care Progress Note output for follow-up visits, reflecting interval wound changes and treatment updates. (MED-1150)”
  - Product: MED-1150 shipped in PR #925, merged 2025-11-18 (title: wound wizard progress note follow up visit), not April 2026.
  - Proposed: Remove from April (MED-1150 shipped November 2025, PR #925; the current note generator is in the March 2026 notes).
- **rn04-20** — live: “★ Visit Wizard — Bi-directional medication reconciliation. Medication lists are now synchronized across Pre-Charting, Initial Evaluation, Subsequent Visits, Meds & Orders, and the Visit Wizard, so a change in any surface propagates to all others. (MED-1561)”
  - Product: MED-1561 shipped in PR #1463, merged 2026-02-25, not between 2026-04-01 and 2026-04-24. The live February page says February had no user-facing changes.
  - Proposed: Remove from April; if kept, list under February 2026: bi-directional medication reconciliation sync. (PR #1463)
- **rn04-22** — live: “MolecuLight DX capture requires the MolecuLight device to be paired to the tablet before starting the visit. See your device setup guide for pairing instructions.”
  - Product: No device pairing step or pairing check exists; MolecuLight results are entered as intervention fields (WoundOverviewDisplay.tsx:1759-1767 at v1.1.345).
  - Proposed: Remove this note. MolecuLight results are entered by hand in the visit; Medipyxis does not connect to the device.
- **rn04-23** — live: “Visit Wizard — Validation error message shows correct step names. Error messages that appeared during step submission previously showed raw internal identifiers (e.g., step_wound_assessment) instead of the displayed step name. They now show the label as it appears in the wizard rail. (MED-1672)”
- **rn04-24** — live: “Visit Wizard — Family history can now be added. A data-binding regression prevented the Add Family History action from saving; entries now persist correctly. (MED-1675)”
  - Product: Family-history editing shipped in January 2026 (PR #1335 merged 2026-01-27, PR #1343), not April; MED-1675 has no PR.
  - Proposed: Remove from April; list under January 2026: Family history records can be edited. (PR #1335, #1343)
- **rn04-25** — live: “Visit Wizard — DME orders display in correct section. DME orders generated from the Visit Wizard were incorrectly surfacing under the Home Health section of Orders & DME; they now appear under DME Orders. (MED-1111)”
  - Product: MED-1111 shipped in PR #988, merged 2025-11-24, not April 2026.
  - Proposed: Remove from April (shipped November 2025, PR #988).
- **rn04-26** — live: “Visit Wizard — Auto-population in Interventions & Treatments cleared on reset. Unintended auto-population of procedure fields from a previous wound's session is now cleared when the clinician selects a different wound or clicks Clear Procedures. (MED-1655)”
  - Product: MED-1655 shipped in March 2026 (PRs #1490, #1529, #1538, #1539, merged 2026-03-13 to 03-26), and it removed auto-population of interventions from previous visits; no 'Clear Procedures' control exists in v1.1.345.
  - Proposed: Remove from April; if kept, list under March 2026: interventions and procedures are no longer auto-filled from previous visits. (PR #1490, #1529)
- **rn04-27** — live: “Visit Wizard — Wound names standardized. Wound labels across the wizard, progress notes, and billing output now use a consistent naming convention, eliminating mismatches between steps. (MED-1654)”
- **rn04-28** — live: “Visit Wizard — Wound selector works with multiple wounds at the same location. The wound selector was unresponsive when two wounds shared the same anatomical location; the selector now distinguishes them by wound number. (MED-1367)”
- **rn04-29** — live: “Visit Wizard — Wound count indicator correct for single wound. When exactly one wound is present the UI showed "1 of n wounds" with active Next/Previous buttons; both are now suppressed when count = 1. (MED-1346)”
- **rn04-30** — live: “Visit Wizard — Wound Assessment not marked Complete without Tissue Assessment. The Wound Assessment step can no longer be marked Completed unless the Tissue Assessment sub-section (granulation, slough, necrotic, epithelial, eschar percentages) is filled in. (MED-1318)”
- **rn04-31** — live: “Visit Wizard — Wound measurements persist after navigating back. Wound length, width, depth, and area values were reset when the clinician navigated back to the Initial Assessment step; they now retain their saved values. (MED-1297)”
- **rn04-32** — live: “Visit Wizard — Camera reliably opens in Wound Wizard. A regression introduced in a prior patch caused the device camera to fail to open when initiated from the Wound Assessment step; the launch sequence has been corrected. (MED-1296)”
- **rn04-33** — live: “Visit Wizard — Measurement reset on blue button click corrected. Clicking the blue measurement confirmation button no longer resets unsaved measurement fields to zero. (MED-1270)”
- **rn04-34** — live: “Visit Wizard — Multiple image wound measurement calculation fixed. When more than one photo was attached to a wound, the area calculation used only the first image's calibration; it now uses the measurement associated with the active image. (MED-1269)”
- **rn04-35** — live: “Visit Wizard — ROS "View Previous Logs" shows correct visit count. The Review of Systems section displayed one extra historical visit entry due to an off-by-one error in the query; the count now matches the actual visit history. (MED-1272)”
  - Product: MED-1272 shipped in PR #999, merged 2025-11-25, not April 2026.
  - Proposed: Remove from April (shipped November 2025, PR #999).
- **rn04-36** — live: “Visit Wizard — Anatomical site search improved. The Add Wound Location → Anatomical Site dropdown now supports partial-word matching and accent-insensitive search, reducing the number of failed lookups on long anatomical site names. (MED-1653)”
- **rn04-37** — live: “Visit Wizard — Wound name overflow fixed. Long wound names in the Wound Assessment section no longer overflow the UI container; they are now truncated with a tooltip. (MED-1260, resolved in March batch)”
  - Product: MED-1260 shipped in PR #1403, merged 2026-02-10, not in a March batch or April.
  - Proposed: Remove from April (shipped February 2026, PR #1403).
- **rn04-38** — live: “Visit Wizard — Manual ICD-10 code entry no longer creates duplicates. Typing in the code field previously fired a lookup on each keystroke, creating multiple identical codes; entry is now debounced and deletions remove only the targeted code. (MED-1243)”
- **rn04-39** — live: “Visit Wizard — Microphone icons removed from ROS and Objective Assessment notes. Unused voice-input microphone icons have been removed from the Review of Systems and Objective Assessment free-text note fields. (MED-1431)”
- **rn04-40** — live: “★ Pre-Charting — Import Patient Data from ZusHealth. Clinicians can now import a patient's external health record from ZusHealth directly in the Pre-Charting step using the Import Patient Data button. Imported data populates demographics, medications, allergies, and problem list fields. (MED-720)”
  - Product: No 'Import Patient Data' button exists in v1.1.345. The ZusHealth pre-charting service shipped in February 2026 (PR #1345); the current pre-charting control is a single pull button with an import summary (PR #3224, August 2026).
  - Proposed: Remove from April; list under February 2026: a pre-charting service reads a patient's external record from ZusHealth. (PR #1345)
- **rn04-42** — live: “★ Medicare Eligibility — Payer ID no longer required. Removed the Payer ID as a mandatory field for Medicare eligibility verification; eligibility checks now run on Member ID and insured name alone, matching CMS batch-check behavior. (MED-1537)”
- **rn04-43** — live: “★ Oversight Cockpit — Referral Network Health dashboard. Added the Referral Network Health section to the Oversight Cockpit, giving admins and BD managers a visual map and table of referral sources, volume trends, and conversion rates by referring practice. (MED-1130)”
  - Product: The Referral Network Health dashboard is in v1.1.345, but MED-1130 shipped in PR #975 (merged 2025-11-21) and #1209 (2025-12-16), not April. The April change was that the dashboard shows real data (PR #1664).
  - Proposed: Oversight Cockpit — Referral Health dashboard shows real data. (PR #1664)
- **rn04-44** — live: “★ DoseSpot — Integration issues resolved. Multiple DoseSpot e-prescribing integration defects (authentication token expiry, prescription status not reflecting in Medipyxis, and failed fax routing) have been corrected. (MED-1686)”
  - Proposed: Send via eRx opens DoseSpot on the right patient. (PR #1686)
- **rn04-45** — live: “★ Android — Archive option added to All Patients. The Archive action was available on the web but missing from the All Patients list view in the Android app; it is now present and functional. (MED-1712)”
- **rn04-46** — live: “★ Consent — SMS consent link loads patient information correctly. Consent forms sent to patients via SMS were returning an "Unable to load patient information" error on mobile browsers; the token resolution logic has been corrected. (MED-1705)”
- **rn04-47** — live: “★ HR & Compliance — Announcements section no longer shows dev/test data in production. Test announcements created during QA were visible to production users; environment-scoped filtering now prevents non-production records from appearing in production. (MED-1682)”
- **rn04-48** — live: “HR & Compliance — Multi-facility assignment removed from employee edit form. Removed the ability to assign an employee to multiple facilities from the employee edit form; multi-facility assignment is now handled exclusively during the New Employee Onboarding stepper. (MED-1685)”
- **rn04-49** — live: “HR & Compliance — Multi-facility selection enabled during onboarding. The New Employee Onboarding stepper now allows assigning an employee to multiple facilities in a single onboarding flow. (MED-1678)”
- **rn04-51** — live: “HR & Compliance — Signup email copyright year corrected. The automated signup confirmation email for new employees displayed the year as 2025; it now correctly shows 2026. (MED-1614)”
- **rn04-53** — live: “Vendor Portal — Custom forms scoped to originating facility. Vendor custom forms were visible across all facilities in the organization; they are now scoped to the facility that created them. (MED-1665)”
- **rn04-54** — live: “Offline Mode — Capacitor + PowerSync (Option B) proof-of-concept completed. Four milestone tickets covering the iOS Capacitor shell, PowerSync read-only downsync, offline write smoke test, and attachment queuing were resolved. These are infrastructure foundations for full offline mode; no end-user UI change in this release. (MED-1659, MED-1660, MED-1661, MED-1662, MED-1663)”
  - Product: MED-1659 (Capacitor + PowerSync) merged in PR #1505 on 2026-03-19, not April. The web wizard's offline system was later removed (PR #2711, June); offline now lives in the Electron app only.
  - Proposed: Remove from April (infrastructure; merged March 2026, PR #1505).
- **rn04-55** — live: “System Integrations — Data synced from external system to Wound Dashboard and Visit Wizard. Patient and wound data sourced from external integrations now propagates correctly into the Wound Dashboard and Visit Wizard on load. (MED-1432)”
  - Product: MED-1432 is PR #1522, merged 2026-03-23, titled as syncing medications and billing to the patient dashboard, not external-integration wound data, and not April.
  - Proposed: Remove from April; if kept, list under March 2026: medications and billing sync to the patient dashboard. (PR #1522)
- **rn04-56** — live: “Patient Management — Provider home addresses restored for visit route map. A historical data-integrity gap caused existing provider home addresses to be absent from the visit route map; the missing records have been backfilled. (MED-1426)”
  - Product: MED-1426 shipped in PR #1281 (2025-12-28) and #1290 (2026-01-01), not April 2026.
  - Proposed: Remove from April (shipped December 2025 / January 2026).

## Walk through a visit in the Visit Wizard — 36

https://help.medipyxis.com/modules/visit-wizard-ehr/start-a-visit/

- **vd-sav-01** — live: “Open the visit, work through the Visit Wizard's 17 sections, and finish with Sign & Lock.”
  - Product: The wizard has 18 sections: Steps 1-17 plus Step 2b, Clinical History Review, between Steps 2 and 3 (VisitWizardV4.tsx:17115). The page itself sends allergies to section 2B.
  - Proposed: Open the visit, work through the Visit Wizard's sections (Steps 1–17, plus Step 2b, Clinical History Review), and finish with Sign & Lock.
- **vd-sav-02** — live: “To stop a visit you already started and do not intend to finish, cancel or delete the appointment — see Stop or cancel a visit you started.”
  - Product: A started visit cannot be deleted. update-appointment refuses delete when the appointment has a visit_data_v2 row ("Cannot delete — this appointment has a visit note attached. Cancel or Archive instead", update-appointment/index.ts:498-513), and the Appointment Management card disables Delete once a note is attached (AppointmentManagementCard.tsx:878). A draft is removed with Cancel visit or Archive.
  - Proposed: To stop a visit you already started and do not intend to finish, cancel the appointment or archive its draft — see Stop or cancel a visit you started. An appointment can be deleted only while no visit note is attached.
- **vd-sav-07** — live: “Turn on location services on your device. GPS access is required for geofence verification on in-person visits.”
  - Product: The visit timer and its GPS geofence are switched off: the timer UI is wrapped in `{false && ...}` (VisitWizardV4.tsx, "Timer Component — UI HIDDEN 2026-05-28"), so location is not needed to document a visit.
  - Proposed: Location services are not needed to document a visit. The visit timer and its GPS geofence are switched off in the Visit Wizard.
- **vd-sav-09** — live: “Each section has a Mark as Complete button.”
  - Product: 15 sections use the shared Mark as Complete button and Wound Assessment has its own (VisitWizardV4.tsx:17924). Step 1 Consent & Attestation and Step 16 LCD Audit & Review have none: Step 1 turns complete when a consent is on file (wizardRequiredFields.ts:236-239) and Step 16 when every other section is complete (VisitWizardV4.tsx:6280-6310).
  - Proposed: Most sections end with a Mark as Complete button. Step 1 (Consent & Attestation) and Step 16 (LCD Audit & Review) have none; they turn complete on their own.
- **vd-sav-10** — live: “In the section navigator, completed sections are green with a checkmark; sections that still need documentation or review are red.”
  - Product: Completed sections are green with a checkmark. Sections flagged for review are yellow ("For Review" in the list, yellow in the progress bar); a red "Needs Attention" only appears for a validation error; untouched sections are grey "Pending" in the list and light red only in the top progress bar (VisitWizardV4.tsx:11107-11257, 16830-16840).
  - Proposed: Completed sections turn green with a checkmark. In the progress bar at the top, sections not yet complete show red and sections flagged for review show yellow.
- **vd-sav-11** — live: “From the Fleet Calendar: Tap the appointment tile. A popover shows the patient's name, appointment type, date, and time.”
  - Product: Tapping a tile opens the Appointment Details window (a modal dialog titled "Appointment Details", AppointmentDetailsModal.tsx:702, rendered from FleetCalendarCanvas.tsx), not a popover. Its footer button reads Start Visit, Continue Visit or Resume Visit by appointment status (appointmentActionVerb.ts).
  - Proposed: Tap the appointment tile. The Appointment Details window opens with the patient's name, appointment type, date, and time.
- **vd-sav-12** — live: “Click Start Visit at the bottom of the popover. The Visit Wizard opens for that patient and appointment.”
  - Product: Tapping a tile opens the Appointment Details window (a modal dialog titled "Appointment Details", AppointmentDetailsModal.tsx:702, rendered from FleetCalendarCanvas.tsx), not a popover. Its footer button reads Start Visit, Continue Visit or Resume Visit by appointment status (appointmentActionVerb.ts).
  - Proposed: Click Start Visit at the bottom of the window (it reads Continue Visit or Resume Visit when a note is already in progress). The Visit Wizard opens for that patient and appointment.
- **vd-sav-14** — live: “Pull Migration Data carries forward information documented at the patient's previous Medipyxis visits, so you don't re-enter it.”
  - Product: The wizard already pre-fills a returning patient's visit from the most recent visit; Pull Migration Data lists only the earlier visits that pre-fill did not load ("Find prior visits for this patient that weren't auto-loaded.", PullMigrationDataButton.tsx:39; exclusion at VisitWizardV4.tsx:1814-1820). Pulling a visit copies only patient context, comorbidities and Braden score, functional status and patient education (projectVisit, wizardPrefillCascade.ts:1004-1040), even though the list summarises every section that holds data.
  - Proposed: The wizard pre-fills a returning patient's visit from their most recent visit automatically. Pull Migration Data finds the patient's other, earlier visits; pulling one copies its patient context, comorbidities, functional status, and patient education into this visit.
- **vd-sav-15** — live: “Click Pull Migration Data in the wizard's top toolbar.”
  - Product: Pull Migration Data is the title of a panel at the top of the wizard, beside Reset Form; its button is labelled Find Prior Visits (PullMigrationDataButton.tsx:37-49).
  - Proposed: In the Pull Migration Data panel at the top of the wizard, click Find Prior Visits.
- **vd-sav-17** — live: “Pick the most recent or most relevant visit and click Pull this visit.”
  - Product: The most recent visit is never in the list: the visit the wizard already pre-filled from is excluded (VisitWizardV4.tsx:1814-1820).
  - Proposed: Pick the visit you need and click Pull this visit.
- **vd-sav-18** — live: “Pull Migration Data only uses visits documented in Medipyxis. It does not import records from another EHR.”
  - Product: It reads only visit_data_v2 rows already stored in Medipyxis and calls no other system (pullMigrationDataService.ts), but those rows include visits migrated from a previous EHR: the feature exists for migrated patients and offers a name + date-of-birth search for DrChrono-migrated records (PullMigrationDataModal.tsx:167).
  - Proposed: Pull Migration Data reads only visit records already stored in Medipyxis, including visits migrated from a previous EHR. It does not connect to another EHR.
- **vd-sav-22** — live: “The consent form covers: Telehealth consent, when the visit is virtual.”
  - Product: Telehealth is a fixed section of every consent edition (v1.en.ts:100-106); nothing in the capture dialog or the setting routing adds or removes it by visit type.
  - Proposed: Telehealth — how telehealth consultations work and their risks (part of every consent form).
- **vd-sav-27** — live: “Section 1: Click Mark as Complete.”
  - Product: Section 1 has no Mark as Complete button; it renders only the consent panel (VisitWizardV4.tsx:17011-17020). It turns complete on its own when a consent is on file (wizardRequiredFields.ts:236-239).
  - Proposed: Section 1 has no Mark as Complete button. It turns complete once a consent is on file.
- **vd-sav-33** — live: “Section 2 — Patient Context / Demographics: Select the Visit Type: Initial, Follow-up, Post-op, or Re-eval.”
  - Product: Section 2 has no visit-type picker; the visit type comes from the appointment and is passed to the wizard as visitTypeKey (openVisitWizard.ts; PatientDemographicsVisit.tsx:61-64).
  - Proposed: The visit type comes from the appointment; Section 2 does not ask for it.
- **vd-sav-36** — live: “Make insurance changes on the patient's Insurance tab, not in the wizard.”
  - Product: The wizard sends insurance changes to the patient's Billing & Auth page ("To change insurance, use the patient's Billing & Auth page.", PatientDemographicsVisit.tsx:1598).
  - Proposed: Make insurance changes on the patient's Billing & Auth page, not in the wizard.
- **vd-sav-41** — live: “5. Functional Status & ADLs — Mobility, ambulation, independence with daily activities, fall risk, and limitations that affect wound care.”
  - Product: Section 5 records mobility level, ambulation, ADL independence and mobility limitations (WoundCaseFunctionalStatusVisit.tsx:28-57, 352) but has no fall-risk field.
  - Proposed: 5. Functional Status & ADLs — Mobility, ambulation, independence with daily activities, and limitations that affect wound care.
- **vd-sav-42** — live: “6. Comorbidities & Risk Factors — Conditions that contribute to the wound or slow healing — for example diabetes, peripheral arterial disease, chronic venous insufficiency, heart failure, lymphedema, nutritional deficiencies, and smoking status.”
  - Product: Diabetes, PAD, CVI, congestive heart failure, malnutrition and smoking are on the step (WoundCaseRiskFactorsVisit.tsx:455-493, 1446), but lymphedema is not offered anywhere in Section 6.
  - Proposed: 6. Comorbidities & Risk Factors — Conditions that contribute to the wound or slow healing — for example diabetes, peripheral arterial disease, chronic venous insufficiency, heart failure, malnutrition, and smoking status.
- **vd-sav-48** — live: “Vascular ultrasound and duplex results — venous or arterial duplex findings, reflux, obstruction, or peripheral arterial disease.”
  - Product: Section 4 has venous duplex only: "Venous duplex ultrasound and CEAP", for venous and mixed arterial-venous ulcers, per leg — performed/reviewed, study date, findings and CEAP clinical class (VenousDuplexFields.tsx:60-160). There is no arterial duplex entry.
  - Proposed: Venous duplex ultrasound and CEAP — for venous and mixed arterial-venous ulcers, per leg: whether a duplex was done or reviewed, the study date, the findings, and the CEAP clinical class.
- **vd-sav-57** — live: “Photo upload is required if your facility policy mandates it.”
  - Product: There is no facility photo policy. Photo Capture is a recommended field for every non-monitoring wound (wizardRequiredFields.ts:348-353) and enforcement is off (WIZARD_VALIDATION_DISABLED = true, wizardRequiredFields.ts:856), so a missing photo never blocks.
  - Proposed: Take or upload a wound photo. It is recommended for every wound you are treating (optional for Monitoring wounds) and does not block you from finishing.
- **vd-sav-58** — live: “Set tissue percentages by wound. Granulation / Slough / Necrotic / Epithelial / Eschar must sum to 100%.”
  - Product: The 100% rule exists (wizardRequiredFields.ts:790-806) but enforcement is off (WIZARD_VALIDATION_DISABLED = true, wizardRequiredFields.ts:856): a different total is flagged as advisory and does not stop you.
  - Proposed: Set tissue percentages by wound (Granulation, Slough, Necrotic, Epithelial, Eschar). They should total 100%; the wizard flags a different total but does not block you.
- **vd-sav-59** — live: “Confirm the precise anatomical location. The location field is editable — pick from the dropdown or type the specific area (for example, Right lateral malleolus).”
  - Product: Specific Area is locked read-only in Section 7; it changes only through the anatomical site picker opened by Change, which enforces an allow-list (CompactWoundCaseSetupVisit.tsx:4861, 4932-4950).
  - Proposed: Confirm the anatomical location. Specific Area is read-only here; click Change to pick a different site from the anatomical site picker.
- **vd-sav-64** — live: “Document chronicity. Record how long the wound has been present (for example, at least four weeks) and the standard-of-care treatments already tried.”
  - Product: Section 8 has no field for how long the wound has been present. The wound's age is computed from the Onset Date entered in Section 7 (PreviousTreatmentsVisit.tsx:519-528; CompactWoundCaseSetupVisit.tsx:5265-5268); Section 8 records each prior treatment with its own Duration (weeks).
  - Proposed: Document chronicity. Check the wound's Onset Date in Section 7 — the wizard works out how long the wound has been present from it. For each previous treatment, record how long it was tried (Duration (weeks)).
- **vd-sav-71** — live: “The list covers debridement (sharp, enzymatic, mechanical, autolytic, chemical), negative pressure wound therapy (NPWT), topical antimicrobials, wound irrigation, advanced dressings, offloading and pressure relief, compression therapy, infection management, nutritional support and other adjuncts, patient and caregiver education, graft and skin substitute application, molecular therapy, and ultrasonic therapy (for example MIST or Arobella).”
  - Product: Every listed type exists except "molecular therapy": the closest entry is MolecuLight, a fluorescence imaging check (Detection Result, Fluorescence Type), not a therapy (ConservativeCareInterventionVisit.tsx:2219-2235). The list also has Pain Management and PRP Application, which the page omits.
  - Proposed: The list covers debridement (sharp, enzymatic, mechanical, autolytic, chemical), negative pressure wound therapy (NPWT), topical antimicrobials, wound irrigation, advanced dressings, offloading and pressure relief, compression therapy, infection management, pain management, nutritional support and other adjuncts, patient and caregiver education, graft and skin substitute application, PRP application, MolecuLight fluorescence imaging, and ultrasonic therapy (for example MIST or Arobella).
- **vd-sav-76** — live: “To use your own wording instead, enter it in the intervention's Notes field and check Use My Exact Procedure Note. Your note is kept exactly as written and is not regenerated.”
  - Product: The checkbox is "Use my exact procedure note (skip AI/template regeneration)" and sits under the generated Procedure Note text box for the wound, not on an intervention's Notes field (ConservativeCareInterventionVisit.tsx:3813-3848). Its text is printed verbatim in the note.
  - Proposed: To use your own wording instead, edit the generated Procedure Note and check Use my exact procedure note. Your text is printed in the note exactly as written and is not regenerated.
- **vd-sav-80** — live: “Section 10 — Care Planning: Each active wound needs its own care plan. Select the wound in Wound-Specific Care Planning. Finish one wound's plan before moving to the next.”
  - Product: The wound selector is labelled "Select Wound for Care Planning:" under the "Care Plan Updates" heading (marked Wound-specific) (VisitWizardCarePlanningSection.tsx:1184-1217). Nothing is labelled Wound-Specific Care Planning.
  - Proposed: Each active wound needs its own care plan. Choose the wound in Select Wound for Care Planning (under Care Plan Updates). Finish one wound's plan before moving to the next.
- **vd-sav-95** — live: “Use a care bundle. In Care Bundles, pick a bundle that fits the patient's condition (for example, Diabetic Wound Care and Prevention, Arterial Ulcer Care, General Wound Care Basics, Infection Warning Signs, Caregiver Education and Instructions, or Activity Guidelines). Preview it, then Print Bundle as a take-home handout and/or Assign Bundle to the patient.”
  - Product: Care bundles are rows loaded from education_bundles for the facility (EducationVisit.tsx:250-257), so their names depend on what each organization set up. Four of the six example names (Arterial Ulcer Care, General Wound Care Basics, Caregiver Education and Instructions, Activity Guidelines) do not appear as bundle names anywhere in the code or seed data; the seeded bundles are named differently (seed_education_bundles.sql).
  - Proposed: Use a care bundle. In Care Bundles, pick a bundle your organization has set up that fits the patient's condition. Preview it, then Print Bundle as a take-home handout and/or Assign Bundle to the patient.
- **vd-sav-122** — live: “If something is wrong, fix the documentation in its section, then click Regenerate or Regenerate all.”
  - Product: Regenerate and Regenerate all only re-run the billing brain (handleRegenerate -> runBrain, BillingStagingWrapperVisit.tsx:685-703), and runBrain returns immediately when the brain is disabled (line 168). The prod build does not set VITE_BRAIN_INVOCATION_ENABLED (only deploy-demo.yml:119 does; featureFlags.ts:65), so in production both buttons do nothing. Re-pull Codes is the working path.
  - Proposed: If something is wrong, fix the documentation in its section, then click Re-pull Codes.
- **vd-sav-136** — live: “Run the final review. Check the section navigator, then click Continue Review. If documentation gaps remain, a window lists them:”
  - Product: The button is Continue to Review (VisitWizardV4.tsx:19086). With open gaps it opens the Documentation gaps window (DocumentationAssistModal.tsx:536).
  - Proposed: Run the final review. Check the section navigator, then click Continue to Review. If documentation gaps remain, the Documentation gaps window lists them:
- **vd-sav-137** — live: “Resolve This takes you to the section to fix it; click Continue Review again afterwards.”
  - Product: Each gap row has a "Go to <section>" button that opens that section (DocumentationAssistModal.tsx:350, 600-610); the footer's Resolve button just closes the window (lines 741-743). There is no Resolve This, and the review button is Continue to Review.
  - Proposed: Go to <section> on a gap opens that section so you can fix it; Resolve closes the window. Click Continue to Review again afterwards.
- **vd-sav-139** — live: “Review the Wound Care Progress Note Preview — the PDF exactly as it will be finalized. If something needs correcting, go back to that section before signing.”
  - Product: The screen is titled "Preview — Review Before Signing" (ProgressNotePreview.tsx:92). It shows the PDF rendered at Continue to Review, the same bytes that are filed at Sign & Lock (ProgressNotePreview.tsx:35; VisitWizardV4.tsx fileNote uses pendingChartNoteRef).
  - Proposed: Review the note on the Preview — Review Before Signing screen; it shows the same PDF that is filed when you sign. If something needs correcting, go back to that section before signing.
- **vd-sav-140** — live: “Click Continue, then Sign & Lock.”
  - Product: The preview's button is labelled "Looks Good, Continue →" (ProgressNotePreview.tsx:155); it opens the sign review, whose button is Sign & Lock (MultiWoundReviewModal.tsx).
  - Proposed: Click Looks Good, Continue →, then Sign & Lock.
- **vd-sav-143** — live: “If you won't complete the visit, update the appointment so it isn't left as an unfinished draft: Open the patient's appointment card. Select Cancel Appointment or Delete Appointment, as appropriate. Enter the reason for canceling the visit.”
  - Product: The Appointment Management card's actions are Cancel visit, No-show, Delete and Archive (AppointmentManagementCard.tsx:916-1046); the Fleet Calendar window has Cancel Appt and Delete (AppointmentDetailsModal.tsx:899-905, 1506-1512). Delete is blocked once a visit note is attached, which is the case for any started visit (AppointmentManagementCard.tsx:878; update-appointment/index.ts:498-513). The cancel reason is optional on the card ("Reason (optional)") and not asked in the Fleet window.
  - Proposed: If you won't complete the visit, open the patient's Appointment Management card and either click Cancel visit (you can add a reason) or Archive the draft and pick a reason, such as Abandoned / not going to finish. Delete is available only when no visit note is attached.
- **vd-sav-148** — live: “Result: All 17 sections are complete, the codes and LCD findings are reviewed, and the visit is signed and locked.”
  - Product: The wizard has 18 sections: Steps 1-17 plus Step 2b, Clinical History Review, between Steps 2 and 3 (VisitWizardV4.tsx:17115). The page itself sends allergies to section 2B.
  - Proposed: Result: Every section is complete, the codes and LCD findings are reviewed, and the visit is signed and locked.
- **vd-sav-150** — live: “Troubleshooting: Start Visit is grayed out — The appointment is Canceled or No Show — Update the appointment status before starting.”
  - Product: Start Visit is disabled only while the visit is opening (`disabled={startingVisit}`, AppointmentDetailsModal.tsx:1454); appointment status never greys it out.
  - Proposed: Troubleshooting: Start Visit shows Starting… and is greyed out — The visit is opening — Wait for the wizard to load. Start Visit is not disabled by appointment status, so check the status before you document a canceled or no-show appointment.
- **vd-sav-152** — live: “Troubleshooting: The visit still shows as an unfinished draft — The wizard was closed, but the appointment wasn't updated — Cancel or delete the appointment, or mark it Not Seen.”
  - Product: A started visit cannot be deleted. update-appointment refuses delete when the appointment has a visit_data_v2 row ("Cannot delete — this appointment has a visit note attached. Cancel or Archive instead", update-appointment/index.ts:498-513), and the Appointment Management card disables Delete once a note is attached (AppointmentManagementCard.tsx:878). A draft is removed with Cancel visit or Archive.
  - Proposed: Troubleshooting: The visit still shows as an unfinished draft — The wizard was closed, but the appointment wasn't updated — Cancel the appointment, archive the draft, or mark it Not Seen — see Stop or cancel a visit you started.
- **vd-sav-155** — live: “Troubleshooting: PDF generation fails after Sign & Lock — Temporary error — The system retries automatically. If it still fails, an error ID is shown — share it with support.”
  - Product: The PDF is built at Continue to Review, not after signing. After Sign & Lock only the filing can lag: the user sees "Signed and locked — note still filing" and the app keeps retrying in the background (up to 8 attempts, fileVisitNote.ts:37, 150; drain started in AppShell.tsx:574). No error ID is ever shown.
  - Proposed: Troubleshooting: "Signed and locked — note still filing" appears after Sign & Lock — The note has not finished filing — The visit is already locked. Medipyxis keeps retrying the filing in the background while you stay signed in. If the note does not appear in Progress Notes, contact support.

## CMS-1500 and 837P fields — 26

https://help.medipyxis.com/modules/billing/cms-1500-and-837p-fields/

- **cms-02** — live: “This page is the cross-walk: what the biller sees on the claim view, what the paper form calls it, what the 837P calls it, and which table Medipyxis reads to fill it in.”
  - Product: Neither live 837P builder reads a database table. Both transform the claim's saved JSON snapshot (billing_claims.structured_payload): frontend/src/services/stediService.ts:67-412 and backend/supabase/functions/_shared/stediTransform.ts:112-460 (header comment lines 5-9). The 'Medipyxis source' column names tables (insurance_plan, claims, claim_lines, facility_billing_settings.pay_to_*) that the send path never reads.
  - Proposed: This page is the cross-walk: what the paper form calls each field, what the 837P calls it, and where on the saved claim Medipyxis reads it from.
- **cms-03** — live: “Item 1a — Insured's ID | 2010BA NM109 (subscriber member ID) | insurance_plan.member_id | Blank rejects at the payer, not at Stedi.”
  - Product: A blank (or placeholder) member ID never reaches the payer or Stedi: assertRequiredClaimFields refuses it before the POST (backend/supabase/functions/_shared/claimRequiredFields.ts:582, called from _shared/submitToStedi.ts:249). This also contradicts the page's own pre-flight section. The member ID comes from the claim snapshot (carrier_information.insured_id / selected_insurance.member_id, claimRequiredFields.ts:413-420), not an insurance_plan table.
  - Proposed: Item 1a — Insured's ID | 2010BA NM109 (subscriber member ID) | the member ID on the patient's insurance, as saved on the claim | A blank or placeholder member ID is refused by Medipyxis before the claim reaches Stedi.
- **cms-04** — live: “Item 2 — Patient name | 2010BA NM103/NM104 | patient.first_name, patient.last_name | Splits on the last space; hyphenated last names stay whole.”
  - Product: The name is one stored string (insured_name / patient_name) passed to splitFullName (claimRequiredFields.ts:425-427). For 'First Middle Last' order it splits on the FIRST space: firstName = first word, lastName = all remaining words (backend/supabase/functions/_shared/nameSplit.ts finalizeWesternOrder, 'lastName: core.slice(1).join(' ')'). 'Last, First' input is split on the comma. Hyphenated last names do stay whole (tokens split on whitespace only).
  - Proposed: Item 2 — Patient name | 2010BA NM103/NM104 | the patient name saved on the claim | 'Last, First' splits on the comma; otherwise the first word is the first name and the rest is the last name. Hyphenated last names stay whole.
- **cms-07** — live: “Item 11 — Insured's group number | 2000B SBR03 | insurance_plan.group_number or group_id | Optional at the transaction level; some payers reject when absent.”
  - Product: Group number is read only from group_number keys (subscriber_information / carrier_information / selected_insurance) — group_id is never read (backend/supabase/functions/_shared/claimRequiredFields.ts:543-547).
  - Proposed: Item 11 — Insured's group number | 2000B SBR03 | the insurance group number saved on the claim | Optional at the transaction level; some payers reject when absent.
- **cms-08** — live: “Item 17 — Referring provider | 2310A NM1*DN | Not sent from wound-care visits. | Present in the schema, absent from the wound-care submit path.”
  - Product: Both live builders emit a referring provider whenever the claim carries a referring provider name or NPI (section_4_cms1500_form.providers.referring_provider): backend/supabase/functions/_shared/stediTransform.ts:451-457 and frontend/src/services/stediService.ts:403-409.
  - Proposed: Item 17 — Referring provider | 2310A NM1*DN | the referring provider name and NPI entered on the claim | Sent only when the claim carries a referring provider name or NPI.
- **cms-10** — live: “Item 24A — Date(s) of service | 2400 DTP*472 per line | claims.date_of_service | Single-DOS today; the field exists per line so a future range would flow through untouched.”
  - Product: Each line carries one serviceDate. Neither builder has a serviceDateEnd, so a date range would NOT flow through untouched; only the start date would be sent (backend/supabase/functions/_shared/stediTransform.ts:337-341).
  - Proposed: Item 24A — Date(s) of service | 2400 DTP*472 per line | the visit's date of service | One date per line; date ranges are not sent.
- **cms-11** — live: “Item 24B — Place of service | 2300 CLM05-1 | Derived POS code | Wound-care visits derive to 11 (office) or 12 (home) depending on the facility.”
  - Product: CLM05-1 is the place of service the provider selected, stamped on the primary service line; nothing derives 11/12 from the facility and there is no default (stediTransform.ts:157-160 and 407-417; stediService.ts:113-116 and 353-363). A claim with no place of service is refused before it reaches Stedi: placeOfServiceCode is in ALWAYS_REQUIRED_CLAIM_INFORMATION_FIELDS (claimRequiredFields.ts:250). PR #3854 (merged 2026-10-27) made submit-claim refuse a missing POS as well.
  - Proposed: Item 24B — Place of service | 2300 CLM05-1 | the place of service selected for the visit | Never defaulted: a claim with no place of service is refused before it reaches Stedi.
- **cms-13** — live: “HCPCS Q-codes come from tissue log entries; CPT codes come from the visit's procedure list.”
  - Product: Not checkable from the 837P builders: they read whatever codes are on the saved claim's service lines. The upstream claim-line builders (auto claim / claim editor) were not traced in this pass, so where each code originates is unverified.
- **cms-14** — live: “Item 24E — Diagnosis pointer | 2400 SV107 (compositeDiagnosisCodePointers) | Current: ['1'] for every line”
  - Product: Each line sends the diagnosis pointers the biller typed (letters A-L or numbers, with or without commas), up to four, through toDiagnosisCodePointers; '1' is only the fallback when no usable pointer was typed (backend/supabase/functions/_shared/diagnosisPointers.ts:64-71; used at stediTransform.ts:287-290 and stediService.ts:225-228).
  - Proposed: Item 24E — Diagnosis pointer | 2400 SV107 | the pointers typed on each line (Box 24E), up to four | When a line has no usable pointer, it points at diagnosis 1.
- **cms-15** — live: “Item 24F — Charges | 2400 SV102 (lineItemChargeAmount) | facility_charge_master.charge_amount × units | A line without a positive charge cannot leave the system.”
  - Product: The zero-charge gate is real. But neither builder multiplies by units: SV102 is the line's stored charge sent as-is (backend/supabase/functions/_shared/stediTransform.ts:248-250, 301). The claim editor prices lines from the charge master via priceClaimLine (frontend/src/pages/NewBillingSubmitPage.tsx:1752-1790) and its own comment calls the Section 2 value 'charge (per unit)' (NewBillingSubmitPage.tsx:1748).
  - Proposed: Item 24F — Charges | 2400 SV102 (lineItemChargeAmount) | the line's charge on the claim, priced from the facility charge master | A line without a positive charge cannot leave the system.
- **cms-17** — live: “One unit per line for E/M and debridement; multi-unit for grafting is line-specific.”
  - Product: Coding guidance, not product behavior. The builder sends whatever unit count is on the line and defaults a missing/zero count to 1 (stediTransform.ts:251).
- **cms-18** — live: “Item 25 — Federal Tax ID | 2010AA REF*EI | facility.tax_id (normalized) | Dashes and whitespace are stripped before the payload leaves — the wire wants nine digits and nothing else.”
  - Product: The live builders send billing_information.tax_id unchanged (stediTransform.ts:398, claimProviderBlocks.ts:163-178); nothing strips dashes at send time (the only normalizer was in the retired submit-claim). The value is the facility's tax_id (frontend/src/services/billingConfigService.ts:89-102), and the facility record only accepts exactly nine digits (facility_tax_id_format_check; message at frontend/src/services/facilityService.ts:710-711), so a dash normally cannot be stored in the first place.
  - Proposed: Item 25 — Federal Tax ID | 2010AA REF*EI | facility.tax_id | Sent as stored. The facility record only accepts exactly nine digits with no dashes.
- **cms-19** — live: “Item 28 — Total charge | 2300 CLM02 (claimChargeAmount) | Sum of all line charges × units | Also gated against zero.”
  - Product: CLM02 is the plain sum of the line charges, not charge × units (backend/supabase/functions/_shared/stediTransform.ts:346-348). The zero gate is real (validateClaimLineCharges.ts:176).
  - Proposed: Item 28 — Total charge | 2300 CLM02 (claimChargeAmount) | Sum of all line charges | Also gated against zero.
- **cms-20** — live: “Item 32 — Service facility | 2310C NM1*77 + N3/N4 | facility.name, facility.address_* | Populated for every claim.”
  - Product: Loop 2310C is conditional and does not come from facility.name. It names the claim's service-location snapshot (billing_claims.service_facility, from the visit's service location) only when the claim's POS is a residential/facility POS (13,14,16,31,32,33,54,55,56), or the patient's home for POS 12, and only when that address differs from the billing provider's; a home without ZIP+4 is omitted (backend/supabase/functions/_shared/serviceFacility.ts:6-50, 432-442; conditional spread at stediTransform.ts:418).
  - Proposed: Item 32 — Service facility | 2310C NM1*77 + N3/N4 | the service location recorded for the visit, or the patient's home for POS 12 | Sent only when the place of service names a facility or the home and that address differs from the billing provider's.
- **cms-21** — live: “Item 33 — Billing provider | 2010AA NM1*85 + N3/N4 | facility_billing_settings.pay_to_* | The pay-to address, not the service address.”
  - Product: The 2010AA address is the facility's own address: the claim editor fills billingProviderAddress1/City/State/Zip from facility.address/city/state/zip (frontend/src/pages/NewBillingSubmitPage.tsx:2566-2570), and the builders read section_4_cms1500_form.providers.billing_provider (stediTransform.ts:139-150). facility_billing_settings.pay_to_* is read only for patient statements (backend/supabase/functions/_shared/patient-billing-helpers.ts:301-307).
  - Proposed: Item 33 — Billing provider | 2010AA NM1*85 + N3/N4 | the facility's name and address on file | The location's own address, not a separate pay-to address.
- **cms-22** — live: “Item 33a — Billing NPI | 2010AA NM109 | facility.npi or facility_billing_settings.billing_npi | Group NPI, not the rendering clinician's.”
  - Product: The billing NPI comes from the facility record's npi_code only (frontend/src/services/billingConfigService.ts:49-101 → NewBillingSubmitPage.tsx:2762-2765). There is no facility_billing_settings.billing_npi fallback.
  - Proposed: Item 33a — Billing NPI | 2010AA NM109 | facility.npi_code | Group NPI, not the rendering clinician's.
- **cms-23** — live: “Rendering provider | 2310B NM1*82 | provider.npi, provider.full_name | Emitted at the claim level, not per line — one clinician per visit is the wound-care norm.”
  - Product: The rendering provider is emitted at claim level (2310B), but a line whose rendering NPI differs from the claim's gets its own Loop 2420A rendering provider (backend/supabase/functions/_shared/claimProviderBlocks.ts:132-160; stediTransform.ts:314-317).
  - Proposed: Rendering provider | 2310B NM1*82 | the rendering provider's NPI and name | Emitted at claim level; a line with a different rendering NPI also carries its own (Loop 2420A).
- **cms-25** — live: “The full 837P builder is backend/supabase/functions/submit-claim/index.ts.”
  - Product: submit-claim is retired: it returns HTTP 410 'This claim path is retired' before auth (backend/supabase/functions/submit-claim/index.ts:64, 79-87). Live 837P builders are transformToStediFormat in frontend/src/services/stediService.ts (claim editor / Billing Dashboard) and backend/supabase/functions/_shared/stediTransform.ts (biller-submit-claim-onbehalf); both send through _shared/submitToStedi.ts.
  - Proposed: The 837P is built by transformToStediFormat — frontend/src/services/stediService.ts for claims sent from the Billing Dashboard and backend/supabase/functions/_shared/stediTransform.ts for biller sends — and every send goes through backend/supabase/functions/_shared/submitToStedi.ts.
- **cms-30** — live: “Claim-status inquiries (276/277) refuse U. When Medipyxis pulls status on a claim submitted with U, the gender field is omitted from the 276 rather than forced to a wrong value. Some payers respond AAA*Y*72; that failure is a payer limitation.”
  - Product: Medipyxis does not send 276 claim-status inquiries at all: no edge function calls Stedi's claim-status endpoint. Claim status arrives as 277CA acknowledgments imported by backend/supabase/functions/_shared/stediAckImport.ts. The only 276 mention is a caveat comment (backend/supabase/functions/_shared/gender.ts:42-43). There is no gender-omission logic to describe.
  - Proposed: Medipyxis does not send 276 claim-status inquiries; claim status arrives as 277CA acknowledgments from Stedi, so a claim sent with U is never re-sent with a different sex value.
- **cms-32** — live: “Medipyxis today points every service line at diagnosis position 1 only (compositeDiagnosisCodePointers: { diagnosisCodePointers: ['1'] }).”
  - Product: Same as cms-14: per-line pointers are the biller's typed letters (up to four) via toDiagnosisCodePointers (backend/supabase/functions/_shared/diagnosisPointers.ts:64-71); '1' is only the fallback.
  - Proposed: Medipyxis sends the pointers typed on each line (up to four); a line with no usable pointer points at diagnosis 1.
- **cms-33** — live: “When a visit legitimately splits between two different wounds or two different underlying diagnoses, the current single-pointer emission may under-justify the secondary line.”
  - Product: Rests on the false single-pointer premise (cms-14/cms-32). The biller can point each line at its own diagnoses today (diagnosisPointers.ts:64-71). Payer denial behavior is not checkable from code.
- **cms-40** — live: “[The pre-flight refuses a claim missing] Subscriber DOB (Item 3).”
  - Product: No pre-flight gate checks the subscriber date of birth. assertRequiredClaimFields checks subscriber.memberId, subscriber.lastName and tradingPartnerServiceId plus the claimInformation list (backend/supabase/functions/_shared/claimRequiredFields.ts:581-597); a missing DOB goes to Stedi as an empty/omitted value.
  - Proposed: [The pre-flight refuses a claim missing] Subscriber last name (Item 2). A missing date of birth is not caught before Stedi.
- **cms-42** — live: “On every service line: a procedure code (Item 24D), a positive charge amount (Item 24F — see the zero-dollar guard), and a units count > 0 (Item 24G).”
  - Product: Only the positive-charge rule is a refusal. A line with no procedure code is silently dropped by the builder, not refused (stediTransform.ts:235-237), and a missing or zero unit count is replaced with 1 (stediTransform.ts:251: sl.units || sl.service_unit_count || '1'), so no units gate exists.
  - Proposed: On every service line: a positive charge amount (Item 24F — see the zero-dollar guard). Lines without a procedure code are left off the claim, and a missing unit count is sent as 1.
- **cms-44** — live: “Element on the subscriber loop (NM1**IL*..., DMG*..., N3/N4) → check the patient's Insurance tab, then the patient's demographics.”
  - Product: Navigation advice, not checkable by grep. Note: the patient chart Insurance tab is read-only and links to 'Manage in Billing' (frontend/src/components/PatientInsuranceTab.tsx:29-42, 170); insurance edits happen on BillingAuthPage.
- **cms-45** — live: “Element on the billing loop (NM1*85*..., REF*EI*...) → check the facility's Billing Settings.”
  - Product: Navigation advice. Billing NPI and tax ID come from the facility record (frontend/src/services/billingConfigService.ts:49-101); a screen named 'Billing Settings' was not verified.
- **cms-47** — live: “Element on a service line (SV1*...) → open the claim, expand the line, check its code, modifier, and charge. If the payer names an element that isn't in the table above, send the raw payer message to Damon.”
  - Product: Workflow advice; not checkable from code.

## Post and reconcile ERAs from Stedi — 25

https://help.medipyxis.com/modules/billing/era-posting/

- **era-02** — live: “Stedi credentials and the inbound webhook are configured — see Billing Setup.”
  - Product: Deployment configuration (Stedi portal webhook, secrets), not checkable from code. The receiver exists: backend/supabase/functions/sync-stedi-responses/index.ts.
- **era-05** — live: “Medipyxis lands the ERA, matches each payment line to an existing claim using the claim number and date of service.”
  - Product: Matching uses only the patient control number (PCN) the claim was sent with, echoed in CLP01; the date of service and the Medipyxis claim_number are not used. A line is linked only when exactly one claim carries that PCN (backend/supabase/functions/_shared/stediEraImport.ts:334-372, 457-460).
  - Proposed: Medipyxis lands the ERA and links each payment line to the claim that was sent with the same patient control number. A line is linked only when exactly one claim matches.
- **era-07** — live: “Successfully matched and posted ERAs advance the corresponding claim to Paid status.”
  - Product: ERA posting writes ledger rows (patient_ledger_entries) and rolls up eras.status; it never changes billing_claims.status (post_era_to_ledger in backend/supabase/migrations/20261024100000_ledger_era_autopost_and_eob.sql, import_stedi_era in 20261005200000_stedi_era_import.sql, roll-up in 20261109120000). The only path to 'paid' is the biller's manual payment post (backend/supabase/migrations/20261026232000_meda145_biller_post_payment_to_ar_ledger.sql:495).
  - Proposed: Posting puts the payment and adjustments on the claim's A/R ledger. It does not change the claim's status.
- **era-08** — live: “ERA lines that cannot be automatically matched appear in the Payments (ERA) tab with a status of Unmatched and require manual reconciliation.”
  - Product: The tab is labelled "Payments" (frontend/src/pages/BillingDashboard.tsx:2716). Unmatched is shown per line in the ERA detail (Match column), and the only place to match a line is the separate ERA / EOB page (frontend/src/pages/EraEob.tsx:290-298).
  - Proposed: ERA lines that match none of our claims show Unmatched in the ERA's line detail and wait for a biller to match them on the ERA / EOB page.
- **era-09** — live: “Open the Payments (ERA) tab. Navigate to /facility/{facility_uuid}/billing and click Payments (ERA).”
  - Product: The route is right; the tab label is "Payments" (frontend/src/pages/BillingDashboard.tsx:2710-2718). The ERA / EOB page (/facility/{id}/era-eob) is where unmatched lines are matched.
  - Proposed: Open the Payments tab: go to /facility/{facility_uuid}/billing and click Payments. To match lines, use the ERA / EOB page (/facility/{facility_uuid}/era-eob), linked from the Billing overview.
- **era-10** — live: “Each row represents one 835 ERA batch delivered by Stedi. The Match Status column indicates whether lines were auto-posted or require attention.”
  - Product: There is no Match Status column. The ERA list's Status column shows the rolled-up posting state: Posted, Partially posted, or Received, not posted (frontend/src/utils/eraPosting.ts:20-28).
  - Proposed: Each row is one 835 ERA delivered by Stedi. The Status column shows Posted, Partially posted, or Received, not posted.
- **era-11** — live: “Each row shows: Payer, Paid Date, Total Paid, Matched Lines, Unmatched Lines, Status.”
  - Product: The Payments tab list columns are EFT / Check #, Payer, Method, Payment Date, Deposit, Claims, Status, Actions (frontend/src/pages/BillingDashboard.tsx:5224-5233). There are no matched/unmatched line counts.
  - Proposed: Each row shows EFT / Check #, Payer, Method, Payment Date, Deposit, Claims and Status.
- **era-12** — live: “Status — Posted (all lines matched), Partial (some lines unmatched), or Unmatched (no lines matched).”
  - Product: ERA statuses are Posted (every line posted or nothing to post), Partially posted (some lines unmatched or not posted) and Received, not posted (no line done) (frontend/src/utils/eraPosting.ts:20-28; roll-up in backend/supabase/migrations/20261109120000_cf226_era_posting_status_and_line_match.sql).
  - Proposed: Status — Posted (every line posted, or nothing to post), Partially posted (some lines still need a biller), or Received, not posted (no line done yet).
- **era-13** — live: “Click any ERA row to expand the line-level detail. The Claim # links to the correct claim.”
  - Product: Clicking a row opens the line detail, but the Claim # cell is plain text, not a link; hovering shows the PCN it was sent as and the payer's claim number (frontend/src/pages/BillingDashboard.tsx:5018-5027; frontend/src/pages/EraEob.tsx).
  - Proposed: Click any ERA row to open the line detail. Check the Claim # of each line (hover to see the number it was sent as and the payer's claim number).
- **era-14** — live: “The Allowed Amount and Paid Amount match the payer's EOB.”
  - Product: The line detail has no Allowed column. It shows Billed, Paid, Adjustment, Patient Owes (frontend/src/pages/BillingDashboard.tsx:4988-5000).
  - Proposed: The Billed, Paid, Adjustment and Patient Owes amounts match the payer's EOB.
- **era-16** — live: “In the Claims tab, verify that claims referenced by the ERA now show status Paid. The claim detail should display the payment date, check/EFT number, and paid amount from the ERA.”
  - Product: The claim status does not change to Paid on ERA posting (see era-07). The claim page's ledger panel does show the posting with its check number (frontend/src/components/billing/ledger/ClaimLedgerPanel.tsx:211, used by frontend/src/pages/BillingClaimDetailPage.tsx:86).
  - Proposed: Open the claim and check its ledger: the ERA payment appears with its check/EFT number and amount. The claim's status is not changed by the ERA.
- **era-17** — live: “Within the ERA batch detail, select the Unmatched tab or filter by Match Status: Unmatched.”
  - Product: There is no Unmatched tab or match filter in the ERA detail; unmatched lines are marked in the Match column (frontend/src/pages/EraEob.tsx:268-280).
  - Proposed: Open the ERA on the ERA / EOB page and look for lines marked Unmatched in the Match column.
- **era-18** — live: “For each unmatched line, note the payer's claim number, patient name, date of service, and procedure code. Search the Claims tab for a claim matching those details.”
  - Product: Procedural advice. Note the match dialog itself searches the clinic's claims and flags patient, DOS, amount and payer agreement (frontend/src/components/billing/era/MatchEraLineDialog.tsx:40-52).
- **era-19** — live: “In the unmatched ERA line row, click Match Manually. Use the search dialog to find and select the correct claim.”
  - Product: The button is "Match to claim", only on the ERA / EOB page (frontend/src/pages/EraEob.tsx:296); the Billing Payments tab has no match action. It opens "Match this payment to a claim" (frontend/src/components/billing/era/MatchEraLineDialog.tsx:145).
  - Proposed: On the ERA / EOB page, open the ERA and click Match to claim on the unmatched line. Search by claim number or patient and choose the claim.
- **era-20** — live: “After matching, click Post Payment. The system applies the allowed amount, adjustments, and patient responsibility to the selected claim and advances it to Paid.”
  - Product: Matching and posting are one step: "Match and post" (frontend/src/components/billing/era/MatchEraLineDialog.tsx:280-282) calls claim-ledger match_era_line → match_era_line_to_claim, which posts the payment and CO/OA/PI adjustments to the ledger (patient share stays in the balance) and does not change the claim status (backend/supabase/migrations/20261109120000_cf226_era_posting_status_and_line_match.sql).
  - Proposed: Click Match and post. The payment and adjustments post to that claim's ledger in the same step; the claim's status does not change.
- **era-21** — live: “If the ERA paid amount differs from the billed charge by more than the expected contractual adjustment, add a note in the Reconciliation Notes field explaining the variance.”
  - Product: There is no Reconciliation Notes field anywhere in the frontend at v1.1.345.
  - Proposed: If the paid amount differs from the billed charge by more than the expected contractual adjustment, record the variance outside the ERA screen (there is no notes field on an ERA) and flag it for supervisor review.
- **era-22** — live: “You can download the remittance PDF from any ERA batch row using the Download remittance PDF action.”
  - Product: The download is an icon button titled "Download ERA as PDF" on each row of the Payments tab list, and a "PDF" button in the ERA detail (frontend/src/pages/BillingDashboard.tsx:4913, 5307). It is live (fetch-era-pdf).
  - Proposed: You can download the remittance PDF from any ERA row in the Payments tab with the download button (Download ERA as PDF).
- **era-23** — live: “Line status codes on the 835 include Paid, Partial, Denied, Zero Pay, and Reversal.”
  - Product: The Status column shows the 835 CLP02 claim status with these labels only: Processed as primary/secondary/tertiary, Denied, Processed as primary, forwarded, Reversal, Pricing only — no payment; any other code shows as "Code N" (frontend/src/utils/eraClaimStatus.ts:17-25). There is no Paid, Partial or Zero Pay status.
  - Proposed: The line's Status shows the 835 claim status: Processed as primary (or secondary, tertiary), Denied, Reversal, or Pricing only — no payment. A processed line can still pay $0; read the Paid column.
- **era-25** — live: “For zero-pay lines with a denial CARC, click Create Denial in the ERA line row. Medipyxis creates a linked denial record in the Denials tab pre-populated with the denial reason code.”
  - Product: There is no Create Denial action, and nothing creates denial records: createDenial (frontend/src/utils/hooks/useBillingDashboard.ts:959) has no caller. Denied/$0 lines are labelled "Denied / $0, nothing to post" in the ERA / EOB Posting column (frontend/src/utils/eraPosting.ts).
  - Proposed: Denied and $0 lines show "Denied / $0, nothing to post" in the Posting column of the ERA / EOB page. Medipyxis does not create a denial record from them; work the denial from the claim.
- **era-26** — live: “All ERA lines are either Posted to a matched claim or linked to a denial record. The Payments (ERA) tab shows no rows in Partial or Unmatched status.”
  - Product: Lines are never linked to denial records; the end state is every line posted or 'denied' (nothing to post), which rolls the ERA up to Posted (backend/supabase/migrations/20261109120000_cf226_era_posting_status_and_line_match.sql, refresh_era_posting_status).
  - Proposed: Every line is posted or has nothing to post, and each ERA's status reads Posted.
- **era-27** — live: “Never post an ERA payment to the wrong claim in order to clear an unmatched item. If you cannot identify the correct claim, escalate to your supervisor.”
  - Product: Practice advice. The product backs it: the match dialog lists differences and requires typing the claim number to confirm when they differ (frontend/src/components/billing/era/MatchEraLineDialog.tsx:254).
- **era-28** — live: “If the same payer consistently produces unmatched ERAs, the root cause is often a payer-assigned claim number that differs from the Medipyxis claim number. Ask your administrator to review the Stedi payer configuration for that carrier.”
  - Product: Matching never uses the Medipyxis claim number or the payer's claim number; it uses the PCN echoed in CLP01 (backend/supabase/functions/_shared/stediEraImport.ts:334-341: "claim_number is never what was sent"). A line goes unmatched when no claim, or more than one, carries that PCN — for example a claim submitted before the PCN was stored.
  - Proposed: If a payer's ERAs keep arriving unmatched, the payment's patient control number matches none of our claims (or more than one). Ask your administrator to check how those claims were submitted.
- **era-30** — live: “Claim status remains Submitted after ERA posted — ERA batch not yet processed — Allow time for delivery; ERAs land automatically once the payer issues the 835.”
  - Product: Expected behavior, not a delay: ERA posting never changes the claim status (see era-07).
  - Proposed: Claim status remains Submitted after the ERA posted — expected: ERA posting does not change the claim status — Check the claim's ledger for the payment.
- **era-31** — live: “Post Payment button disabled on manual match — Claim is in Pending or Needs Info status — Resolve the claim's outstanding issues before posting the ERA.”
  - Product: The button is "Match and post", and it is disabled only until a claim is chosen and confirmed (and its number typed when the dialog lists differences): canSubmit = Boolean(chosen) && confirmed && typedOk && !saving (frontend/src/components/billing/era/MatchEraLineDialog.tsx:139). Claim status plays no part.
  - Proposed: Match and post is disabled — no claim chosen, or not yet confirmed — Pick the claim, tick the confirmation, and type the claim number if the dialog lists differences.
- **era-32** — live: “Paid amount does not match contract — Payer underpayment or fee schedule discrepancy — Document in Reconciliation Notes and escalate to your billing supervisor.”
  - Product: No Reconciliation Notes field exists (see era-21).
  - Proposed: Paid amount does not match contract — Payer underpayment or fee schedule discrepancy — Escalate to your billing supervisor with the ERA's check number and line.

## May 2026 release notes — 24

https://help.medipyxis.com/release-notes/2026-05/

- **rn05-00** (PR evidence only) — live: “Changes shipped between 2026-05-01 and 2026-05-31. Items are grouped by module.”
- **rn05-01** — live: “★ Visit Wizard — Soft warnings replace hard blocks. Steps that previously hard-stopped on incomplete fields now surface a soft warning and let the clinician proceed ("warn and proceed"). Silent failures are now visible warnings. (PR #2333, #2318)”
  - Product: PR #2318 is cited but its title is about something else (not soft warnings). The behavior and PR #2333 check out.
  - Proposed: Visit Wizard — Soft warnings replace hard blocks. Steps that previously hard-stopped on incomplete fields now surface a soft warning and let the clinician proceed ("warn and proceed"). Silent failures are now visible warnings. (PR #2333)
- **rn05-03** — live: “★ Visit Wizard — Smart AI Import. A new Smart Import button extracts wound and visit details from an uploaded document or photo and pre-fills wizard fields, with a banner listing anything skipped. (PR #2302, #2303, #2308)”
  - Product: PR #2302 is cited but its title is about something else (not Smart Import). PRs #2303 and #2308 and the code check out.
  - Proposed: Visit Wizard — Smart AI Import. A new Smart Import button extracts wound and visit details from an uploaded document or photo and pre-fills wizard fields, with a banner listing anything skipped. (PR #2303, #2308)
- **rn05-04** — live: “★ Visit Wizard — Pull from History. Bring forward documented sections (ROS, comorbidities, functional status, exam, care plan, education, etc.) from prior visits, with preview-and-select. (PR #2360, #2350)”
  - Product: Shipped in May (PRs #2360, #2350) but no longer in the product: Pull from History was removed on 2026-06-23 (PR #2682); 'Pull from History' does not appear in frontend/src at v1.1.345.
  - Proposed: Visit Wizard — Pull from History. Bring forward documented sections (ROS, comorbidities, functional status, exam, care plan, education, etc.) from prior visits, with preview-and-select. (PR #2360, #2350) Update (Nov 2026): Pull from History was removed on June 23 (PR #2682).
- **rn05-05** — live: “★ Visit Wizard — Pull Migration Data. A Pull Migration Data button was added to the top-of-wizard toolbar in both wizards, alongside Reset Form. (PR #2311, #2309)”
  - Product: PR #2309 is cited but its title is about something else (not Pull Migration Data). Also, there is now one wizard (the intake wizard was retired 2026-07-02, PR #2816), so 'both wizards' is out of date.
  - Proposed: Visit Wizard — Pull Migration Data. A Pull Migration Data button was added to the top-of-wizard toolbar. (PR #2311)
- **rn05-08** — live: “Visit Wizard — Resume Visit shortcut in the wound cockpit. A Resume Visit card is anchored first in the cockpit when entering from the Fleet Calendar. (PR #2271, #2272)”
  - Product: PR #2272 is cited but its title is about something else (not Resume Visit).
  - Proposed: Visit Wizard — Resume Visit shortcut in the wound cockpit. A Resume Visit box is anchored first in the cockpit. (PR #2271)
- **rn05-09** — live: “Visit Wizard — Open-visits docket. An inline docket of other open visits lets clinicians switch between in-progress visits. (PR #2365, #2270)”
  - Product: Shipped in May, but the open-visits docket was removed on 2026-07-13 (PR #2958); WizardUnfinishedVisitsDocket is not in v1.1.345.
  - Proposed: Visit Wizard — Open-visits docket. An inline docket of other open visits lets clinicians switch between in-progress visits. (PR #2365, #2270) Update (Nov 2026): the open-visits docket was removed on July 13 (PR #2958).
- **rn05-10** (PR evidence only) — live: “Visit Wizard — Admins can see in-progress drafts. (PR #2267)”
- **rn05-14** (PR evidence only) — live: “Visit Wizard — Save toast no longer sticks. (PR #1971)”
- **rn05-15** (PR evidence only) — live: “Visit Wizard — Clinical history carry-forward. (PR #1869)”
- **rn05-16** — live: “★ Clinical Dashboard rebuilt with hand-off workflow. Status tiles, a work queue, and a stale-visit view. Providers can Hand off a visit to support staff and Mark Visit Completed. New Awaiting Documentation status. (PR #2012, #2009)”
  - Product: No 'Mark Visit Completed' action exists in frontend/src at v1.1.345. Hand off and the Awaiting Documentation queue are present (ClinicalDashboard.tsx:139, HandoffModal.tsx).
  - Proposed: Clinical Dashboard rebuilt with hand-off workflow. Status tiles, a work queue, and a stale-visit view. Providers can Hand off a visit to support staff, who work it from the Awaiting Documentation queue. (PR #2012, #2009)
- **rn05-18** (PR evidence only) — live: “Intake — Unified manual and fax referral creation. Both now flow through the same shared records service. (PR #1936)”
- **rn05-22** (PR evidence only) — live: “Billing — Wound-care code catalog expanded. CPT debridement/destruction ranges and additional HCPCS Q-codes, seeded from CMS LCDs. (PR #2346, #2293, #2294, #2268)”
- **rn05-23** (PR evidence only) — live: “Billing — Manual code entry persists and is searchable. Multiple codes per wound; searchable picker. (PR #2266, #2269)”
- **rn05-24** (PR evidence only) — live: “Billing — ICD-10 auto-fill in Generate Codes. (PR #1964)”
- **rn05-25** (PR evidence only) — live: “Billing — Quantity/units on CMS-1500. (PR #2298)”
- **rn05-28** (PR evidence only) — live: “Patient Management — "Needs Scheduling" cleanup. Single place, auto-default provider, merges twin appointments. (PR #2322)”
- **rn05-29** (PR evidence only) — live: “Scheduling — Same-day scheduling supported; provider-filter fix. (PR #1883)”
- **rn05-31** (PR evidence only) — live: “Inventory — Vendor dropdowns point to the CRM vendor hub. (PR #2320)”
- **rn05-33** (PR evidence only) — live: “Fax — Settings access for support and admin roles; Send Fax visibility fix. (PR #1984, #2005)”
- **rn05-34** (PR evidence only) — live: “DrChrono — Documents and wound cases surface in the chart. (PR #1857, #1856)”
- **rn05-35** (PR evidence only) — live: “DrChrono — Faster document import. (PR #1843)”
- **rn05-38** (PR evidence only) — live: “Progress Notes — Accuracy fixes. No hardcoded CHF from a parent flag; debridement-method fallback fixed; blank-screen fixed. (PR #1972, #1970, #1877)”
- **rn05-39** (PR evidence only) — live: “Security — Tightened data access policies across patient, billing, inventory, org data; administrator area locked to Medipyxis-internal users. Back-end safeguards; no workflow change. (PR #1958, #1962, #1963, #1960, #1934)”

## Complete the Wound Assessment (section 7) — 22

https://help.medipyxis.com/modules/visit-wizard-ehr/wound-assessment/

- **wa-02** — live: “Section 8 (Previous Treatment) is where ABI is documented; if you intend to order compression, enter the ankle-brachial index there.”
  - Product: Previous Treatments (step 8, PreviousTreatmentsVisit.tsx) has no ABI field. ABI is recorded on the step 4 perfusion record (VitalsAssessmentVisit.tsx:480) or typed into the Compression Therapy card in step 9 (CompressionSafetySection.tsx:260, rendered at ConservativeCareInterventionVisit.tsx:4077).
  - Proposed: ABI is recorded in step 4 (Objective Assessment, perfusion). If it is missing when you add compression, you can enter it in the Compression Therapy card in step 9.
- **wa-03** — live: “Missing ABI on a compression order now raises a soft warning rather than blocking you.”
  - Product: With no ABI on file, the compression dialog's Done button stays disabled with "ABI is required before compression therapy can be ordered." (compressionRecommendation.ts:381 and 422; CompressionDialogDoneButton used at ConservativeCareInterventionVisit.tsx:5138).
  - Proposed: If no ABI is on file, the Done button in the Compression Therapy dialog stays disabled with the message "ABI is required before compression therapy can be ordered." Enter the ABI to continue.
- **wa-04** — live: “Before you start: you have completed steps 1-6. Reach step 7 by completing steps 1-6 in sequence.”
  - Product: The wizard is a single accordion. Clicking any step opens it, with no order gate (VisitWizardV4.tsx:16945).
  - Proposed: Open step 7 (Wound Assessment) from the step list. Steps do not have to be completed in order.
- **wa-07** — live: “Click Add Wound to document a new one.”
  - Product: The step 7 button reads "Add New Wound" (VisitWizardV4.tsx:16372).
  - Proposed: Click Add New Wound to document a new one.
- **wa-10** — live: “A Monitoring wound stays Monitoring on the next visit's reload until you flip it back to Treating.”
  - Product: Not provable from code. The form-shape helper keeps visit_treatment_mode when a wound entry passes through it (wound-form-shape.ts:182), and comments say it carries across visits, but whether the next visit's wound load copies it depends on the draft and copy-forward path, which needs a browser test.
- **wa-11** — live: “Wound # is auto-assigned and read-only for existing wounds.”
  - Product: The form has no Wound # field. The wound switcher shows the wound's position, e.g. "1 of 3" (WoundSwitcher.tsx:191).
  - Proposed: With more than one wound, the wound switcher shows which wound you are on (for example, 1 of 3).
- **wa-13** — live: “Laterality: L (Left), R (Right), B (Bilateral).”
  - Product: Laterality also offers Midline and Not Applicable (anatomicalSites.ts:90-96).
  - Proposed: Laterality: Left, Right, Bilateral, Midline, or Not Applicable.
- **wa-15** — live: “Duration (weeks) is auto-calculated from Onset Date and editable.”
  - Product: Duration is a read-only display computed from the onset date (CompactWoundCaseSetupVisit.tsx:5411-5418); it has no input.
  - Proposed: Duration is calculated from the onset date and cannot be edited directly; change the onset date to change it.
- **wa-16** — live: “Etiology options are DFU, VLU, PU, Arterial, Mixed, Surgical, Traumatic, and Other (Other requires free-text clarification).”
  - Product: There is no Other etiology. The list (CompactWoundCaseSetupVisit.tsx:3771-4012) is Pressure Injury, Diabetic Foot Ulcer, Venous Leg Ulcer, Arterial Ulcer, Mixed Arterial-Venous, Surgical Wound, Atypical Wound, Malignant Wound, Fungating Wound, Trauma Wound, Moisture-Associated Skin Damage (MASD), and Infection / Cellulitis / Abscess.
  - Proposed: Select Wound Etiology: Pressure Injury, Diabetic Foot Ulcer, Venous Leg Ulcer, Arterial Ulcer, Mixed Arterial-Venous, Surgical Wound, Atypical Wound, Malignant Wound, Fungating Wound, Trauma Wound, Moisture-Associated Skin Damage (MASD), or Infection / Cellulitis / Abscess.
- **wa-18** — live: “Pressure stage options: Stage I, Stage II, Stage III, Stage IV, Unstageable, DTI.”
  - Product: Pressure Injury stages use Arabic numerals and longer labels: "Stage 1 - Non-blanchable" ... "Stage 4 - Deep tissues and bone", "Unstageable", "Deep Tissue Injury", "Unspecified Stage" (CompactWoundCaseSetupVisit.tsx:3775-3785).
  - Proposed: For a Pressure Injury, choose Stage 1 to Stage 4, Unstageable, Deep Tissue Injury, or Unspecified Stage.
- **wa-24** — live: “The running total indicator turns red if the sum exceeds or falls below 100%.”
  - Product: The total is red only above 100%, green at exactly 100% and blue below 100% with a "Remaining" count (WoundTissueAssessmentVisit.tsx:941-968).
  - Proposed: The Total Tissue Coverage indicator is red above 100%, green at exactly 100%, and blue below 100% with the remaining percentage shown.
- **wa-25** — live: “The Next button remains disabled until the five tissue percentages sum to exactly 100 (also: Next disabled when a required field is missing; click Next to advance to step 8).”
  - Product: Step 7 has no Next button; you leave it by opening another step. Gaps never block: wizard validation is switched off (featureFlags.ts:25), and Mark as Complete with a gap closes the step with the warning "Wound assessment marked complete with gaps" (VisitWizardV4.tsx:17891).
  - Proposed: If tissue percentages do not total 100 or a field is missing, Mark as Complete still closes the step, with a warning listing what is recommended for complete documentation.
- **wa-26** — live: “Exudate Amount options: None, Scant, Small, Moderate, Large, Copious.”
  - Product: Exudate Amount offers None, Scant, Light, Moderate, Heavy (dropdownOptions.ts:91-97).
  - Proposed: Exudate Amount: None, Scant, Light, Moderate, or Heavy.
- **wa-29** — live: “Periwound condition options: Intact, Macerated, Erythematous, Callus, Hyperpigmented.”
  - Product: Surrounding Skin Assessment > Condition offers Intact, Macerated, Erythematous, Indurated, Excoriated, Hyperpigmented, Hyperkeratosis; there is no Callus (WoundTissueAssessmentVisit.tsx:1390-1396).
  - Proposed: Surrounding skin condition: Intact, Macerated, Erythematous, Indurated, Excoriated, Hyperpigmented, or Hyperkeratosis.
- **wa-31** — live: “Rate Pain 0-10 by dragging the slider or typing a number.”
  - Product: Pain Level (0-10) is a row of tappable number pills (PainPillRow, WoundTissueAssessmentVisit.tsx:1485-1486), not a slider.
  - Proposed: Rate Pain Level (0-10) by tapping a number.
- **wa-33** — live: “Click Photo Upload, then select a photo from the device camera or library.”
  - Product: There are two buttons, "Open Camera" and "Upload Photo" (CompactWoundCaseSetupVisit.tsx:5477 and 5500); none is labelled Photo Upload.
  - Proposed: Click Open Camera to take a photo, or Upload Photo to pick one from the device.
- **wa-34** — live: “Click Save Wound; the wound record saves and you return to the wound list.”
  - Product: There is no Save Wound button. The visit autosaves as you type, and the step ends with "Mark as Complete" (VisitWizardV4.tsx:17924). Use the wound switcher to move between wounds.
  - Proposed: Your entries save automatically. When every wound is documented, click Mark as Complete at the bottom of step 7.
- **wa-35** — live: “Validation: if any required field is missing or tissue percentages do not sum to 100, the wizard shows inline errors; red outlines mark fields that must be resolved before advancing.”
  - Product: Validation enforcement is off (featureFlags.ts:25). Gaps show as an amber advisory list and nothing must be fixed before moving on (VisitWizardV4.tsx:17891).
  - Proposed: If something is missing, the wizard lists it as recommended for complete documentation; you can still finish the visit.
- **wa-36** — live: “On save, the LCD audit fires and refreshes the LCD ambient badge; items like Dimensions measured today, Tissue percentages sum to 100, and Precise anatomical location flip from amber to green.”
  - Product: No such checklist items exist. The header badge re-checks 1.2 s after form changes, not on save (AmbientBadgeMount.tsx:27), and shows one colour with a flag count, not per-item rows.
  - Proposed: As you type, the LCD badge in the wizard header re-checks the visit and shows All clear (green) or a flag count (amber).
- **wa-37** — live: “Use the wound thumbnail strip at the top of step 7 to switch between wounds.”
  - Product: Wounds are switched with the wound switcher bar (Prev/Next buttons and "1 of N"), not thumbnails (WoundSwitcher.tsx:191).
  - Proposed: If you document more than one wound, use the wound switcher at the top of the form to move between wounds.
- **wa-38** — live: “Troubleshooting: photo upload fails when the file exceeds 10 MB or is an unsupported format.”
  - Product: The photo pipeline accepts originals up to 75 MB (photoPipeline/index.ts:36) and compresses them to 500 KB (photoPipeline/constants.ts:18); there is no 10 MB limit.
  - Proposed: Photo upload fails: the photo is very large (over 75 MB) or cannot be read. Retake it with the camera button or try a smaller photo.
- **wa-39** — live: “Many Medicare LCDs require photographic documentation at each visit for graft coverage; at least one photo per wound per visit is recommended by most facility protocols.”
  - Product: Payer-policy and facility-protocol statement, not product behaviour; cannot be checked from code.

## Practice admin cheat sheet — 22

https://help.medipyxis.com/quick-reference/practice-admin/

- **qpa-02** — live: “Start of day: check action items and SLA breach alerts — Dashboard → right panel → Action Items.”
  - Product: The Dashboard's Action Items panel was removed (Dashboard.tsx frontend/src/pages/Dashboard.tsx:1415).
  - Proposed: Review incoming faxes waiting for review: Fax Center → Fax Review Queue; watch the SLA column and the "SLA Breached" summary.
- **qpa-03** — live: “Review fax queue age (target: zero > 24 h): More (Fax) → Fax Review Queue.”
  - Product: The sidebar item is Fax Center (navigation.ts frontend/src/constants/navigation.ts:152); there is no More (Fax) item.
  - Proposed: Review incoming faxes waiting for review: Fax Center → Fax Review Queue; watch the SLA column and the "SLA Breached" summary.
- **qpa-04** — live: “Verify all providers are marked On Duty: Fleet Calendar → day view → provider swim lanes.”
  - Product: Fleet Calendar has no On Duty marker (no 'On Duty' in frontend/src/pages/ops).
  - Proposed: Check today's schedule by provider: Fleet Calendar → Day view → provider swim lanes.
- **qpa-05** — live: “Switch facility context: Header → facility name pill → select facility.”
  - Product: The header control is a Switch Facility button (AppShell.tsx frontend/src/components/AppShell.tsx:1706).
  - Proposed: Switch facility: header → Switch Facility → search or pick a facility.
- **qpa-06** — live: “Tip: use ⌘K / Ctrl+K (Quick Jump) to navigate to any patient, visit, page, or facility without touching the sidebar.”
  - Product: Quick Jump searches pages, features and actions only (CommandBar.tsx frontend/src/components/app-shell/CommandBar.tsx:124).
  - Proposed: ⌘K / Ctrl+K (Quick Jump) goes to any page or feature: search pages, features or actions.
- **qpa-08** — live: “Daily: confirm no appointments on archived patients — Fleet Calendar → check for Archived patient badge.”
  - Product: Fleet Calendar shows no Archived badge; archived patients cannot be booked (AppointmentBookingModal.tsx frontend/src/components/AppointmentBookingModal.tsx:406).
  - Proposed: Troubleshooting: an archived patient still has an appointment — it was booked before the patient was archived (archived patients cannot be booked); cancel the appointment.
- **qpa-12** — live: “Keyboard shortcut ⌘K / Ctrl+K: Quick Jump — patient, visit, facility, page.”
  - Product: Quick Jump searches pages, features and actions only; CommandBar.tsx queries no patient table.
  - Proposed: ⌘K / Ctrl+K (Quick Jump) goes to any page or feature: search pages, features or actions.
- **qpa-13** — live: “Keyboard shortcut ⌘/ / Ctrl+/: help for the current page.”
  - Product: AppShell.tsx has no '/' key handler.
  - Proposed: (Remove: there is no ⌘/ shortcut.) ⌘K / Ctrl+K (Quick Jump) goes to any page or feature: search pages, features or actions.
- **qpa-14** — live: “Keyboard shortcut ⌘S / Ctrl+S: save draft on any editable form.”
  - Product: AppShell.tsx has no global 's' key handler; ⌘S works only in the billing Coding Review drawer.
  - Proposed: (Remove: there is no global ⌘S shortcut.)
- **qpa-16** — live: “Fax queue age: More (Fax) → Fax Review Queue → SLA Breach Timer column.”
  - Product: The column is SLA, with an SLA Breached summary (FaxReviewQueue.tsx frontend/src/components/idp/FaxReviewQueue.tsx:511).
  - Proposed: Review incoming faxes waiting for review: Fax Center → Fax Review Queue; watch the SLA column and the "SLA Breached" summary.
- **qpa-20** — live: “ERA posting location: Billing → ERA / Payments (/era-eob).”
  - Product: The page is ERA / EOB (BillingDashboard.tsx frontend/src/pages/BillingDashboard.tsx:328); the /era-eob route is correct.
  - Proposed: ERA posting: matched lines post automatically; unmatched lines are matched on the ERA / EOB page (/era-eob), linked from the Billing overview.
- **qpa-24** — live: “Weekly: audit inactive practices — CRM → Practices → filter by activity.”
  - Product: CRM has no activity filter; the status filter has Follow-up Due and Cold (Crm.tsx frontend/src/pages/Crm.tsx:4120).
  - Proposed: Review practices that need attention: CRM → status filter (Follow-up Due, Cold).
- **qpa-25** — live: “Weekly: verify inventory PAR levels are current — Inventory Management → Main Inventory.”
  - Product: Main Inventory opens Reorder Requests, which has no PAR levels; PAR levels show in the Product Catalog (Products.tsx frontend/src/pages/inventory-management/product-catalog/Products.tsx:631).
  - Proposed: Check PAR levels on conservative care products: Inventory Management → Product Catalog (red Par Level Reached icon).
- **qpa-26** — live: “Monthly: review revenue geography (Revenue by Zip) — Oversight Cockpit → Heat Map → Revenue by Zip.”
  - Product: The view is Billed by zip and plots dollars billed, not revenue received (heatMapDataService.ts frontend/src/services/heatMapDataService.ts:46).
  - Proposed: Scan the Heat Map (patients vs. clinicians): Oversight Cockpit → Heat Map → Patients vs Employees. Review billing geography: Heat Map → Billed by zip.
- **qpa-28** — live: “Monthly: archive or close non-admit referrals — Referral Intake → Non-Admit column → Archive.”
  - Product: The card action is Archive patient, which archives the patient record, not the referral (Referrals.tsx frontend/src/pages/Referrals.tsx:467).
  - Proposed: Clear out patients who will not be admitted: Referral Intake → Non-Admit column → Archive patient on the card.
- **qpa-31** — live: “Complete the single New Employee form (Basic Info; Provider Details appear for clinical roles). There is no multi-step wizard.”
  - Product: The single form is Create New User (HRNewUserPage.tsx frontend/src/pages/HRNewUserPage.tsx:2076) with sections such as Role & Assignment and Facility Assignment; there is no Basic Info or Provider Details section.
  - Proposed: HR & Compliance → New Employee Onboarding opens the Create New User form, a single page. Choose the role under Role & Assignment and one or more facilities under Facility Assignment, then click Create User.
- **qpa-33** — live: “Test a new role in the demo environment before applying it to production users.”
  - Product: Medipyxis offers customers no demo environment; nothing in pages/administrator mentions one.
  - Proposed: Check which features the role can open in Administrator → Organization Role Config. It turns features on or off for each role in your organization and does not assign roles to people.
- **qpa-34** — live: “The current facility context appears as a pill in the app header. Click the pill to open the facility selector; search by name or scroll.”
  - Product: The header control is a Switch Facility button with a Search facilities box (AppShell.tsx frontend/src/components/AppShell.tsx:1756).
  - Proposed: Switch facility: header → Switch Facility → search or pick a facility.
- **qpa-37** — live: “Troubleshooting: provider not appearing in Fleet Calendar — provider not marked On Duty or facility mismatch; HR & Compliance → Facility Users — confirm facility assignment.”
  - Product: There is no On Duty marker in Fleet Calendar; the facility-assignment cause and fix are right.
  - Proposed: Troubleshooting: provider not appearing in Fleet Calendar — not assigned to this facility; confirm in HR & Compliance → Facility Users.
- **qpa-38** — live: “Troubleshooting: referral stuck in Info Needed — missing demographic or insurance field; open referral → Details tab → fill flagged field.”
  - Product: The referral drawer's Details tab does not flag missing fields (no 'flagged field' in UnifiedReferralDrawer.tsx).
  - Proposed: Troubleshooting: referral stuck in Info Needed — open the card → Details tab → complete the missing information, then drag the card on.
- **qpa-39** — live: “Troubleshooting: claim in Needs Info status — missing modifier or diagnosis pointer; Billing → Claims → open claim → follow rule-engine flag.”
  - Product: Needs Info means "Claim flagged for missing or incorrect information. Edit to fix." (BillingDashboard.tsx frontend/src/pages/BillingDashboard.tsx:1228); no 'rule-engine flag' is shown.
  - Proposed: Troubleshooting: claim in Needs Info status — a required field is missing or a validation error must be resolved; open the claim from Billing Operations → Claims and fix the field.
- **qpa-40** — live: “Troubleshooting: credential expiry banner on Dashboard — credential nearing expiry; HR & Compliance → Credential Tracker → upload renewal.”
  - Product: The Dashboard has a My Credentials & Compliance tile, not an expiry banner (Dashboard.tsx frontend/src/pages/Dashboard.tsx:358).
  - Proposed: Check your credentials: Dashboard → My Credentials & Compliance. Credential expirations: HR & Compliance → Credential Tracker.

## Submit a claim — 21

https://help.medipyxis.com/modules/billing/submit-claim/

- **sub-05** — live: “§1 Insurance Type — Insurance type selector (Medicare · Medicaid · Tricare · Champva · Group Health Plan · FECA Blk Lung · Other). (Steps: Complete §1 — Insurance Type. Select the appropriate insurance type from the dropdown. This drives payer-specific validation rules downstream. Caption: §1 Insurance Type and §2 Patient Name are the first fields.)”
  - Product: The claim form has no insurance-type selector. Its first claim fields are Payer Name, Payer ID and Insured's ID Number (BillingSubmitFormFields.tsx:151-201), after the patient picker.
  - Proposed: §1 / §1a — Payer Name, Payer ID and Insured's ID Number. There is no insurance-type selector.
- **sub-06** — live: “§2 Patient Name — patient_last_name, patient_first_name, patient_middle_initial, patient_suffix.”
  - Product: Box 2 is one field, "Patient's Name (Last, First, Middle)" (BillingSubmitFormFields.tsx:250); there are no separate last/first/middle/suffix fields.
  - Proposed: §2 Patient's Name — one field, Last, First, Middle.
- **sub-07** — live: “§4 Insured Name — insured_last_name, insured_first_name, insured_middle_initial.”
  - Product: Box 4 is one field, "Insured's Name (Last, First, Middle)" (BillingSubmitFormFields.tsx:458).
  - Proposed: §4 Insured's Name — one field, Last, First, Middle.
- **sub-08** — live: “§5 Patient Address — patient_address, patient_city, patient_state, patient_zip, patient_phone.”
  - Product: Box 5 has Patient's Address (Street), City, State and Zip Code, but no phone field (BillingSubmitFormFields.tsx:348-417).
  - Proposed: §5 Patient's Address — street, city, state, ZIP code.
- **sub-10** — live: “§7 Insured Address — insured_address, insured_city, insured_state, insured_zip, insured_phone.”
  - Product: Box 7 has Insured's Address (Street), City, State and Zip Code, but no phone field (BillingSubmitFormFields.tsx:472-531).
  - Proposed: §7 Insured's Address — street, city, state, ZIP code.
- **sub-11** — live: “§8 Reserved — Reserved field (read-only; populated per payer requirements).”
  - Product: There is no reserved Box 8 field. In that part of the form the biller edits Employment Status and Marital Status (BillingSubmitFormFields.tsx:591-640), which are auto-filled from the patient record.
  - Proposed: Patient status — Employment Status and Marital Status selectors, filled from the patient record.
- **sub-15** — live: “§24A Date of Service — date_of_service_from, date_of_service_to. (Step: Enter the date of service range.)”
  - Product: Each service line has one Date of Service (formData.dateOfService, BillingSubmitFormFields.tsx:1150-1162; line.dateOfService for added lines); there is no from/to range.
  - Proposed: §24A Date of Service — one date per service line.
- **sub-17** — live: “§24D Procedure Code + Modifiers — cpt_hcpcs_code, modifier_1, modifier_2, modifier_3, modifier_4. (Step: Enter the CPT/HCPCS code and up to four modifiers.)”
  - Product: Each service line has one Procedures/CPT Code and one Modifier box of two characters (BillingSubmitFormFields.tsx:1245-1263; ServiceLine.modifier at :41).
  - Proposed: §24D — Procedure (CPT/HCPCS) code and one modifier per line.
- **sub-20** — live: “§24H EPSDT / Family Plan — EPSDT indicator checkbox. (Step: Check EPSDT if applicable.)”
  - Product: 24H is a text box (placeholder "E"), hidden until "Show Additional Charge Fields (24H–24J)" is clicked. On line 1 it is not connected to any field, so what you type is not saved (BillingSubmitFormFields.tsx:1505-1513); on added lines it is (:1452-1458).
  - Proposed: §24H EPSDT / Family Plan — a text box under Show Additional Charge Fields (24H–24J). Only added lines (2 onward) keep a value.
- **sub-21** — live: “§24I ID Qualifier / §24J Rendering Provider NPI — Qualifier code for the rendering provider ID type; rendering_provider_npi. (Step: §24I / §24J: Confirm the ID qualifier and rendering provider NPI (auto-populated from the visit record).)”
  - Product: Line 1's 24I "ID Qualifier" and 24J "Rendering Provider NPI (line-level)" boxes have no value or onChange: they are empty and anything typed is dropped (BillingSubmitFormFields.tsx:1515-1533). Added lines have a 24J Rendering NPI box that is saved, and no 24I box (:1461-1468). The rendering provider NPI that is auto-filled is the one in Box 31 "Rendering Provider NPI".
  - Proposed: The rendering provider's NPI is filled in Box 31 (Rendering Provider NPI). Added service lines can override it in 24J Rendering NPI.
- **sub-26** — live: “§29 Amount Paid — amount_paid (patient or other payer payment received prior to submission).”
  - Product: The claim form has no Box 29 Amount Paid field. Section 25-30 has Tax ID Number, Patient Account #, Accept Assignment, Total Charge and Balance Due (BillingSubmitFormFields.tsx:1551-1680).
  - Proposed: There is no §29 Amount Paid field on the claim form.
- **sub-27** — live: “§30 Balance Due — Calculated automatically (§28 minus §29). §28 Total Charge and §30 Balance Due are read-only calculated fields.”
  - Product: Total Charge is read-only and calculated, but Balance Due is an ordinary editable box (BillingSubmitFormFields.tsx:1660-1678) that starts at 0.00 and is not calculated from anything (NewBillingSubmitPage.tsx:513).
  - Proposed: §28 Total Charge is read-only and adds up every Section 24 line. §30 Balance Due is entered by hand.
- **sub-28** — live: “§31 Provider Signature — Digital provider signature captured during visit attestation.”
  - Product: The form's Box 31 is "31. Rendering Provider" with Provider Name, Taxonomy and Rendering Provider NPI (BillingSubmitFormFields.tsx:1705-1745). The claim form shows no signature.
  - Proposed: §31 Rendering Provider — provider name, taxonomy and NPI.
- **sub-32** — live: “Complete §2 — Patient Name. Search for the patient by last name or date of birth.”
  - Product: The patient picker searches name or MRN ("Search patient name or MRN...", search value = full name + MRN, BillingSubmitPatientSelector.tsx:534-544), not date of birth. It lists only patients with a billing-ready visit (a completed, signed progress note, :538).
  - Proposed: Select the patient. The picker searches by name or MRN and lists only patients with a visit that has a completed, signed progress note.
- **sub-33** — live: “Selecting an existing patient auto-fills §4 Insured Name, §5 Patient Address, §17 Referring Provider, §26 Patient Account Number, and §29 Amount Paid from the patient record.”
  - Product: §4, §5, §17 and §26 are filled from the patient (NewBillingSubmitPage.tsx:1622-1651). There is no §29 Amount Paid field to fill. The same step also fills date of birth, sex, marital and employment status, §7 insured address, §10 conditions and §27 accept assignment.
  - Proposed: Selecting a patient fills §2 name, date of birth and sex, §4 Insured Name, §5 Patient Address, §7 Insured Address, §10 Condition Related To, §17 Referring Provider, §26 Patient Account Number and §27 Accept Assignment from the patient record.
- **sub-34** — live: “Verify §4 through §8. Confirm the insured name and address match the insurance card. Correct any discrepancies before proceeding — payer rejections for demographic mismatches are common.”
  - Product: Workflow advice and a payer-behavior statement; not checkable from code.
- **sub-35** — live: “Add service lines — §24A through §24J. Click + Add Line for each procedure.”
  - Product: The button that adds a service line is labelled "Add Charge" (BillingSubmitFormFields.tsx:1484-1485). Line 1 is filled from the first CPT code in Billing codes & procedures.
  - Proposed: Add service lines — §24A through §24J. Click + Add Charge for each additional procedure.
- **sub-36** — live: “Service lines can be dragged to reorder; the CMS-1500 Box 24 line numbering re-asserts automatically after a move.”
  - Product: The service lines in Section 24 cannot be dragged. What drags is the CPT row list in "Billing codes & procedures" (BillingCodeEntry.tsx, dnd-kit); a drop there re-fills Box 24 line 1 from the first CPT by position (NewBillingSubmitPage.tsx:2291-2304, computeBox24OnReorder).
  - Proposed: CPT codes in Billing codes & procedures can be dragged to reorder; after a move, Box 24 is filled again from the new order.
- **sub-38** — live: “Click Save Draft to save without submitting, or Submit Claim to send it to the payer through Stedi. (A confirmation prompt appears before either action completes.)”
  - Product: The save button reads "Save Changes" ("No Changes" and disabled when nothing has changed), not "Save Draft" (NewBillingSubmitPage.tsx:5423-5435). Submit Claim and both confirmation prompts are as described.
  - Proposed: Click Save Changes to save without submitting, or Submit Claim to send it to the payer through Stedi. A confirmation prompt appears before either action completes.
- **sub-40** — live: “A Save Draft keeps the claim as a draft; Submit Claim sends it to Stedi and advances it toward Submitted.”
  - Product: Saving a new claim stores it as Draft, but saving an existing claim keeps its current status (NewBillingSubmitPage.tsx:3822-3827). After a successful Stedi send the claim is Submitted; a Stedi rejection makes it Rejected (NewBillingSubmitPage.tsx:4965).
  - Proposed: Saving a new claim stores it as a draft; saving an existing claim keeps its status. Submit Claim sends it to Stedi; it becomes Submitted when Stedi accepts it, or Rejected when Stedi rejects it.
- **sub-47** — live: “Claim stuck at Exported — Stedi credentials missing, webhook not wired, or payer not enrolled — Have your administrator verify the Stedi setup in Billing Setup and confirm payer enrollment is Active.”
  - Product: Exported only means the claim was exported as a PDF or JSON file (BillingDashboard.tsx:1253-1256); no code sends Exported claims to Stedi, so credentials, webhooks and enrollment cannot keep a claim there. There is no "Billing Setup" screen; enrollment is on Payer Enrollment (Quick Actions), whose good state is ACTIVE (StediEnrollmentPage.tsx:292).
  - Proposed: Claim stays at Exported — exporting a PDF or JSON does not send the claim. Open it and click Submit Claim. If Stedi refuses it for enrollment, check Payer Enrollment (Quick Actions) and confirm the provider's enrollment is ACTIVE.

## Vendor rep cheat sheet — 21

https://help.medipyxis.com/quick-reference/vendor-rep/

- **qvr-01** — live: “Your daily loop: check the IVR queue, keep the product catalog current, respond to restock requests, track A/P status.”
  - Product: Vendor users work in the separate Vendor Portal (VendorShell.tsx frontend/src/components/app-shell/VendorShell.tsx:45); Inventory Management, IVR Tracking, Reorder Requests and Accounts Payable are clinic pages.
  - Proposed: Vendor companies use the separate Vendor Portal, with its own menu (Catalog, Orders, Shipments, Requests, Verifications, Invoices and more). Clinic staff who work with vendors use Inventory Management in the clinic app.
- **qvr-03** — live: “Review restock requests from facilities: Inventory Management → Main Inventory → filter by your brand.”
  - Product: Main Inventory opens Reorder Requests (InventoryManagement.tsx frontend/src/pages/InventoryManagement.tsx:249), which has category and status filters but no brand filter.
  - Proposed: Review restock requests from clinicians: Inventory Management → Main Inventory (opens Reorder Requests).
- **qvr-06** — live: “Tip: ⌘K / Ctrl+K opens Quick Jump — type a SKU, UIN, or facility name to navigate without the sidebar.”
  - Product: Quick Jump searches pages, features and actions only (CommandBar.tsx frontend/src/components/app-shell/CommandBar.tsx:124); inventory is tracked by lot, with no UINs.
  - Proposed: ⌘K / Ctrl+K opens Quick Jump: type a page name, such as Product Catalog, to go there without the sidebar.
- **qvr-07** — live: “IVR statuses: Submitted (facility initiated an IVR — confirm product and lot details), Pending, Approved, Declined, Agreed.”
  - Product: The statuses are Pending, Incomplete, Agreed, Approved and Declined (IVRStatusUpdateModal.tsx frontend/src/pages/inventory-management/ivr/IVRStatusUpdateModal.tsx:63); there is no Submitted status. IVRs are created from the Wound Cockpit.
  - Proposed: IVRs are created from the wound's card in the Wound Cockpit and tracked in IVR Tracking. An IVR is Pending until someone records an outcome with Update Status; the statuses are Pending, Incomplete, Agreed, Approved and Declined.
- **qvr-10** — live: “Agreed: both sides confirmed; order is live — proceed to fulfillment.”
  - Product: Only Approved creates the inventory order and draft receiving (migration 20261021120100 backend/supabase/migrations/20261021120100_meda41_inventory_ivr_fixes.sql:1457); Agreed creates no order.
  - Proposed: Setting Approved automatically creates an inventory order and a draft receiving for the requested products.
- **qvr-12** — live: “Biologics require HCPCS + manufacturer lot format.”
  - Product: HCPCS is optional on the product (format-checked only when entered, AddEditProduct.tsx frontend/src/pages/inventory-management/product-catalog/AddEditProduct.tsx:83); there is no manufacturer lot-format field. Amniotic and biologic lots need an HCPCS/Q code when received.
  - Proposed: HCPCS is optional on the product; amniotic and biologic lots need an HCPCS/Q code when received, and a lot keeps the code it was received with.
- **qvr-13** — live: “To edit an existing product: find the row by SKU or NAME → click Actions → Edit.”
  - Product: Search covers product name, brand and HCPCS (not SKU), and the row action is Edit Product (Products.tsx).
  - Proposed: Find a product with Search products... (name, brand or HCPCS code), then use Edit Product in the Actions column.
- **qvr-14** — live: “Confirm STATUS is set to Active before saving; inactive products do not appear in facility ordering flows.”
  - Product: Inactive products can still be picked in Manual Receive (no is_active filter in ManualReceiveModal.tsx) and in IVR requests.
  - Proposed: Status is Active or Inactive. Inactive products stay in the catalog for history, and can still be picked in Manual Receive and in IVR requests.
- **qvr-15** — live: “Warning: HCPCS codes on biological and amniotic products feed directly into claim coding.”
  - Product: Pull Codes (pullCodesMapper.ts) does not read the product catalog; a received lot keeps a snapshot of its HCPCS code.
  - Proposed: HCPCS is optional on the product; amniotic and biologic lots need an HCPCS/Q code when received, and a lot keeps the code it was received with.
- **qvr-17** — live: “Restock step 1: identify the low-PAR item — Main Inventory → items flagged below PAR level appear highlighted.”
  - Product: Main Inventory opens Reorder Requests; the PAR flag (Par Level Reached) is in the Product Catalog (Products.tsx frontend/src/pages/inventory-management/product-catalog/Products.tsx:631).
  - Proposed: Check PAR levels on conservative care products: Inventory Management → Product Catalog (red Par Level Reached icon).
- **qvr-18** — live: “Restock step 2: confirm available lot and expiry — Active Inventory → columns: UIN · LOT # · EXP DATE · SIZE · HCPCS · SKU.”
  - Product: Stock is tracked by lot with no per-unit number; ActiveInventoryTable.tsx has no product UIN or Size column.
  - Proposed: Check lots on hand on the category tile's Active Inventory tab (listed by lot).
- **qvr-20** — live: “Restock step 4: verify the upload moves to Active Inventory — refresh Main Inventory; status should leave "Sent" and enter Active.”
  - Product: Receiving status goes Sent → Received/Matched/Pending Approval → Stocked (Enums.ts frontend/src/pages/inventory-management/commons/Enums.ts:795); there is no Active status, and Main Inventory opens Reorder Requests, not receivings.
  - Proposed: Check the receiving on the category tile's Receiving History tab: it moves from Sent to Stocked, and the lots then show on Active Inventory. A receiving in Pending Approval is waiting for approval.
- **qvr-21** — live: “Note: if a receiving upload stays stuck in Sent, the approval/transfer workflow may require a facility admin to confirm receipt. Ping the facility admin via Team Chat with the UIN and lot number. (MED-1629)”
  - Product: Receivings are lot-based; the receiving code has no UIN (no 'uin' in inventory-import-batches or ManualReceiveModal.tsx). A Pending Approval receiving status does exist.
  - Proposed: If a receiving stays in Pending Approval, ask the facility admin to approve it. Give the product and lot number.
- **qvr-25** — live: “If a form is absent, confirm the facility context in the header pill matches the facility that owns the form.”
  - Product: The header control is a Switch Facility button (AppShell.tsx frontend/src/components/AppShell.tsx:1706), not a pill.
  - Proposed: Check that the facility selected with Switch Facility in the header is the one that owns the form.
- **qvr-27** — live: “Shortcut: jump to a product by SKU — ⌘K + SKU.”
  - Product: Quick Jump searches pages only; CommandBar.tsx has no SKU search.
  - Proposed: ⌘K / Ctrl+K opens Quick Jump: type a page name, such as Product Catalog, to go there without the sidebar.
- **qvr-28** — live: “Shortcut: find a facility — ⌘K + facility name.”
  - Product: Quick Jump searches pages only; facilities are switched with Switch Facility and its search box (AppShell.tsx frontend/src/components/AppShell.tsx:1756).
  - Proposed: Switch facility: header → Switch Facility → search or pick a facility.
- **qvr-29** — live: “Shortcut: help for the current screen — ⌘/ / Ctrl+/.”
  - Product: AppShell.tsx has no '/' key handler.
  - Proposed: (Remove: there is no ⌘/ shortcut.) ⌘K / Ctrl+K opens Quick Jump: type a page name, such as Product Catalog, to go there without the sidebar.
- **qvr-31** — live: “Troubleshooting: product not visible in facility ordering — status set to Inactive; Product Catalog → find SKU → Edit → set Status: Active.”
  - Product: Inactive products remain pickable in Manual Receive and IVR requests, and catalog search does not cover SKU.
  - Proposed: Status is Active or Inactive. Inactive products stay in the catalog for history, and can still be picked in Manual Receive and in IVR requests.
- **qvr-32** — live: “Troubleshooting: receiving upload stuck in Sent — approval step not completed by facility; ping facility admin in Team Chat with UIN and lot number.”
  - Product: Receivings are lot-based with no UIN; the approval state is Pending Approval, not Sent.
  - Proposed: A receiving in Pending Approval is waiting for a facility admin. Message them with the product and lot number.
- **qvr-33** — live: “Troubleshooting: custom form visible to wrong facility — form not scoped correctly (pre-April 2026 forms); ask facility admin to delete and recreate the form after the MED-1665 fix.”
  - Product: No product evidence for mis-scoped pre-April 2026 forms or for a MED-1665 fix could be checked; vendor-forms-list returns only the caller facility's own forms plus the Medipyxis standard library (vendor-forms-list/index.ts backend/supabase/functions/vendor-forms-list/index.ts:88).
  - Proposed: (Remove this row: Medipyxis shows each facility only its own forms plus the Medipyxis standard order forms.)
- **qvr-34** — live: “Troubleshooting: A/P invoice shows Disputed — amount or line-item mismatch; contact your facility account manager directly; document resolution in Activity notes.”
  - Product: Disputes are worked on the Disputes tab and resolved as credit issued, invoice voided or invoice upheld (AccountsPayablePage.tsx); there are no Activity notes.
  - Proposed: Troubleshooting: invoice shows disputed — someone opened a dispute; work it on the Disputes tab: resolve with credit issued, invoice voided, or invoice upheld. IVR Pending > 24 h — record the answer with Update Status.

## Stedi Actions Inbox — 19

https://help.medipyxis.com/modules/billing/stedi-actions-inbox/

- **sai-01** — live: “The Stedi Actions Inbox is where every webhook from Stedi lands: file failures, transaction responses, enrollment updates.”
  - Product: Every webhook is logged, but only two kinds get an event_type the inbox reads: an 835 ERA notice (typed transaction.processed, backend/supabase/functions/sync-stedi-responses/index.ts:207) and a 277CA that needs a biller (backend/supabase/functions/_shared/stediAckImport.ts:403). All other events, including file failures and enrollment events, are logged with a blank event_type (sync-stedi-responses/index.ts:207) and the inbox lists only the four typed values (backend/supabase/functions/stedi-action-list/index.ts:43-48), so they never appear.
  - Proposed: The Stedi Actions Inbox shows Stedi webhooks that need a biller's eye: 277CA claim rejections and 835 remittance (ERA) notices.
- **sai-04** — live: “Every event Stedi sends via webhook is recorded and shown, filtered to your facility.”
  - Product: Every event is recorded in stedi_webhook_log, but events other than ERA notices and 277CA rejections are stored with a blank event_type (backend/supabase/functions/sync-stedi-responses/index.ts:207) and are not shown (backend/supabase/functions/stedi-action-list/index.ts:43-48, 125). Shown rows are filtered to the facility (index.ts:132).
  - Proposed: Every Stedi webhook is recorded. The inbox shows the ones Medipyxis marks as needing attention, filtered to your facility.
- **sai-05** — live: “There are four event types: file.failed, transaction.processed, enrollment.rejected, enrollment.task.assigned.”
  - Product: The filter offers four types, but nothing at v1.1.345 writes file.failed, enrollment.rejected or enrollment.task.assigned; only transaction.processed rows are created (see sai-01).
  - Proposed: The Event Type filter lists four types (File Failed, Transaction Processed, Enrollment Rejected, Enrollment Task). At this release only Transaction Processed rows are created.
- **sai-06** — live: “transaction.processed — A payer response came back for a claim you submitted. Includes 999 (acknowledgement), 277CA (payer receipt/reject), 271 (eligibility response), 835 (remittance advice).”
  - Product: Only 835 and 277 transactions are recognised (backend/supabase/functions/_shared/stediInboundEvent.ts:33-38); 999 and 271 events are logged untyped and never shown. A 277 is shown only when it needs a biller (backend/supabase/functions/_shared/stediAckImport.ts:403), so 277CA acceptances do not appear either.
  - Proposed: transaction.processed — a 277CA that rejected a claim you submitted, or an 835 remittance (ERA) notice.
- **sai-07** — live: “file.failed — Stedi rejected the submitted 837P outright. enrollment.rejected — A payer refused an enrollment request. enrollment.task.assigned — Stedi opened a manual task on a payer enrollment.”
  - Product: These event types are never written at v1.1.345, so these rows cannot appear (see sai-01).
  - Proposed: File-failure and enrollment events from Stedi are recorded but do not appear in the inbox at this release.
- **sai-10** — live: “In Progress — someone assigned it to themselves or added a note. The row is being worked.”
  - Product: Only Assign sets In Progress (backend/supabase/functions/stedi-action-update/index.ts:145). Adding a note does not change status (lines 175-187).
  - Proposed: In Progress — someone assigned it. The row is being worked.
- **sai-18** — live: “Assign, Note, Resolve and Dismiss: any biller. Unassign: the assignee or admin.”
  - Product: No role or assignee check exists for any action: every action except stamp_facility only requires access to the facility (backend/supabase/functions/stedi-action-update/index.ts:109-112). Unassign is offered only in the bulk bar that appears when rows are ticked (frontend/src/pages/StediActionInboxPage.tsx:546-553).
  - Proposed: Anyone with access to your facility's billing can Assign, Unassign, Note, Resolve and Dismiss. Unassign is in the bar that appears when you tick rows.
- **sai-19** — live: “Unassign — Removes the assignment. Returns the row to Open if no note or resolution is on it.”
  - Product: Unassign always sets Open and clears resolved_at/resolved_by, whatever notes exist (backend/supabase/functions/stedi-action-update/index.ts:150-155).
  - Proposed: Unassign — Removes the assignment and returns the row to Open.
- **sai-20** — live: “Note — Adds a comment on the row without changing status. Notes are stacked chronologically and stamped with author + time.”
  - Product: Notes are appended with a timestamp only; the author is not recorded (backend/supabase/functions/stedi-action-update/index.ts:186).
  - Proposed: Note — Adds a comment on the row without changing status. Notes are stacked in order and stamped with the time (not the author).
- **sai-22** — live: “Dismiss — Marks the row Dismissed with a reason. Same audit shape as resolve.”
  - Product: Dismiss takes no reason: the modal sends none (frontend/src/pages/StediActionInboxPage.tsx:896-898) and the function stores only status, resolved_at and resolved_by (backend/supabase/functions/stedi-action-update/index.ts:167-171).
  - Proposed: Dismiss — Marks the row Dismissed and records who dismissed it and when. No reason is asked for; add a Note first if you want one on record.
- **sai-23** — live: “Resolve and Dismiss both take a required note. That note is the audit trail.”
  - Product: Only Resolve requires a note. Also, Resolve replaces the stacked notes with the resolution note (backend/supabase/functions/stedi-action-update/index.ts:164), so earlier notes are lost; and bulk Resolve writes the fixed text "Bulk resolved" (frontend/src/pages/StediActionInboxPage.tsx:558).
  - Proposed: Resolve requires a note. Dismiss does not. Resolving replaces the row's earlier notes with the resolution note.
- **sai-25** — live: “When a transaction.processed event carries a 277CA rejection for a claim, the claim's Stedi status updates from submitted to the payer's specific state (accepted, rejected on the 277CA, paid, etc.).”
  - Product: The 277CA sets the claim to accepted or rejected (backend/supabase/migrations/20261019160000_stedi_277ca_claim_status.sql:136-143, called from backend/supabase/functions/_shared/stediAckImport.ts:214). An 835 never sets 'paid'; ERA posting only writes ledger rows.
  - Proposed: When a 277CA arrives for a claim, the claim's status moves from submitted to accepted or rejected.
- **sai-26** — live: “The claim appears in the Work Queue under the appropriate bucket ("Needs biller attention" for a rejection, "Paid" when an 835 arrives).”
  - Product: No Work Queue bucket named "Needs biller attention" exists in frontend/src, and an 835 does not set the claim to paid (see sai-25).
  - Proposed: A rejected claim shows status rejected in billing; an 835 posts its payment to the claim's ledger.
- **sai-28** — live: “File.failed with "structural validation error" — the 837P payload was malformed before it reached the payer. Open the claim, check the fields called out in CMS-1500 and 837P fields, resubmit.”
  - Product: file.failed rows are never created at v1.1.345 (see sai-01), so this pattern cannot appear in the inbox.
  - Proposed: Stedi file failures do not appear in the inbox at this release; check the claim's submission result on the claim page.
- **sai-29** — live: “277CA with a payer-specific reject code — the reason code (from the AAA segment) tells you why: AAA*Y*72 is subscriber-not-found, AAA*Y*73 is patient-not-found, AAA*Y*79 is transaction-not-supported.”
  - Product: The inbox Reason column shows the 277CA STC status as category:status code (frontend/src/pages/StediActionInboxPage.tsx:139-147); no AAA segment is read. AAA is the 270/271 eligibility reject segment, not part of a 277CA, and in the X12 AAA03 list 72 = invalid/missing subscriber ID, 73 = invalid/missing subscriber name, 79 = invalid participant identification (X12 code list; not encoded in the product).
  - Proposed: 277CA rejection — the Reason column shows the 277CA status as category:status code (for example A7 with its status code). Fix the field the code names on the claim and resubmit.
- **sai-30** — live: “Enrollment.rejected with "Provider not enrolled with payer" — the provider needs to enroll directly with the payer before Stedi can register the enrollment.”
  - Product: enrollment.rejected rows are never created at v1.1.345 (see sai-01). The payer-enrollment advice itself is external process guidance.
  - Proposed: Enrollment rejections do not appear in the inbox at this release; check the Enrollment page.
- **sai-31** — live: “Copy the event ID (top of the expanded panel), the event type (from the row), and the timestamp when the event was created.”
  - Product: The expanded panel does not show the event ID (frontend/src/components/stedi-actions/StediActionExpandedRow.tsx); it is only searchable (frontend/src/pages/StediActionInboxPage.tsx:188) and is in the raw payload. The row shows a friendly event label (e.g. "Claim rejected"), not the raw type, and the received time ("Webhook received").
  - Proposed: Copy the event's id from the raw payload, the received time (Webhook received), and the raw payload itself.
- **sai-32** — live: “The raw payload (there is a copy button in the expanded view).”
  - Product: There is no copy button; the raw payload is a collapsible text block (frontend/src/components/stedi-actions/StediActionExpandedRow.tsx:250-263).
  - Proposed: The raw payload: open Raw Payload in the expanded row and select the text to copy it.
- **sai-33** — live: “Stedi support looks these up by event ID.”
  - Product: Vendor-support practice; not product behavior.

## Practice Data Import CSV templates and column reference — 18

https://help.medipyxis.com/admin/practice-onboarding-csv-reference/

- **cr-f01** — live: “Every column name, required flag, accepted value, validation rule, and fallback default below matches the live importer and downloadable CSV templates.”
  - Product: Several rows below do not match the importer (see cr-f04 to cr-f18 and cr-x claims in this file).
  - Proposed: (remove the sentence)
- **cr-f04** — live: “prior_ehr_system namespaces prior_ehr_mrn in patient.external_id as <prior_ehr_system>:<mrn> (lowercased, colons removed).”
  - Product: Internal storage detail; the stated format was not confirmed in patientIdentity.ts.
  - Proposed: (remove the internal storage detail)
- **cr-f05** — live: “If consent_on_file contains an unrecognized value (anything other than yes/no, true/false, 1/0, y/n), the patient still imports, no consent is recorded, and a non-blocking warning is added to the Needs Follow-Up list.”
  - Product: An unrecognized value is treated as no with no warning (functions/practice-onboarding-import/consentAttest.ts:28).
  - Proposed: consent_on_file: only yes, true, 1 or y records a consent; blank, no or anything else records nothing, and the other 7 columns are ignored.
- **cr-x1** — live: “Internal storage names: consent_location is stored in external_document_location, consent_witnessed in external_witnessed, consent_photo in consent_to_photo, consent_npp_acknowledged in npp_acknowledged; medications and allergies are created with source = 'imported'.”
  - Product: The fields are external_location, external_was_witnessed, photo_consent and hipaa_acknowledged (functions/practice-onboarding-import/consentAttest.ts:56); imported rows carry source = 'practice_onboarding' (patientIdentity.ts IMPORT_SOURCE).
  - Proposed: (remove the internal field names; keep the behaviour described)
- **cr-f07** — live: “consent_signed_on: stored in external_signed_on and sets signed_at to YYYY-MM-DDT00:00:00Z; if blank or unreadable, signed_at defaults to the import timestamp; an unreadable date logs a warning on the Confirm screen.”
  - Product: An unreadable date is silently dropped (functions/practice-onboarding-import/consentAttest.ts:38); the column is plain text, so no Confirm-screen warning appears.
  - Proposed: consent_signed_on: YYYY-MM-DD or MM/DD/YYYY; an unreadable date is dropped, never guessed.
- **cr-x2** — live: “consent_signer_capacity: patient, poa or surrogate; blank or any other value defaults to patient, and unrecognized values also log a Needs Follow-Up warning.”
  - Product: Unrecognized values default to patient with no warning (functions/practice-onboarding-import/consentAttest.ts:34); writers.ts raises no consent_signer_capacity warning.
  - Proposed: consent_signer_capacity: patient, poa or surrogate; blank or any other value is saved as patient.
- **cr-f08** — live: “patients_import_results.csv columns: csv_row, first_name, last_name, date_of_birth, patient_uid. wounds_import_results.csv columns: csv_row, patient_uid, wound_location, wound_type, first_seen_date, wound_uid.”
  - Product: The immediate download is your uploaded CSV plus the ID column (services/importService.ts:1165); the saved Patients download also has prior_ehr_mrn.
  - Proposed: Right after an import, Download Results CSV gives your uploaded CSV with the new ID column added. Later, the completed Patients and Wounds cards have Download results CSV; columns csv_row, first_name, last_name, date_of_birth, prior_ehr_mrn, patient_uid (Patients) and csv_row, patient_uid, wound_location, wound_type, first_seen_date, wound_uid (Wounds).
- **cr-f09** — live: “Step 1 (Patients) matches on (facility_id, external_id) + first_name + date_of_birth; Step 3 (Medications) matches on (patient_id, name); Step 9 (Visit History) matches on (patient_id, service_date, visit_number, provider_name, visit_summary).”
  - Product: Medications also match on dosage, route and frequency (functions/practice-onboarding-import/writers.ts:989); Visit History matches on service date, visit number and wounds when a visit number is given.
  - Proposed: Match keys: insurance payer + policy number; medications name, dosage, route, frequency; allergies allergen; comorbidities merged without repeats; contacts name + phone; wounds location, type, first-seen date; visit history service date, visit number and wounds (else also provider and summary).
- **cr-f11** — live: “Insurance creates records in patient_insurances with coverage_order = 1 (primary).”
  - Product: No coverage order is set by the importer (no coverage_order in writers.ts).
  - Proposed: subscriber_relationship is left blank if blank; billing treats blank as Self. Imported coverage is saved as active.
- **cr-f14** — live: “Medication status: active, discontinued (aliases: stopped, inactive, d/c, dc), or held (aliases: hold, on_hold); defaults to active if blank; unrecognized values default to active with a warning.”
  - Product: The importer also accepts completed and unknown (functions/practice-onboarding-import/writers.ts:970).
  - Proposed: Medication status: active, discontinued (stopped, inactive, d/c, dc), held (hold, on_hold), completed or unknown; blank means active; anything else is saved as active with a warning.
- **cr-f12** — live: “Allergy severity (required): mild (aliases: low, minor), moderate, severe, life_threatening (aliases: life-threatening, life threatening, high, critical, anaphylaxis), or none; if an unrecognized value reaches the backend, it defaults to moderate with a warning.”
  - Product: The Confirm screen accepts only mild, moderate, severe and life_threatening (components/import/modules/AllergiesImportModule.tsx:29); the backend fallback is none, not moderate (functions/practice-onboarding-import/writers.ts:1046).
  - Proposed: Allergy severity is required: mild, moderate, severe or life_threatening (life-threatening and life threatening also work); any other value is an error on the Confirm screen.
- **cr-f13** — live: “Allergy status: active, inactive, resolved, unknown, or not_applicable (alias: n/a); defaults to active if blank or unrecognized.”
  - Product: n/a is not recognized; it is saved as active with a warning (functions/practice-onboarding-import/writers.ts:1048).
  - Proposed: Allergy status: active, inactive, resolved, unknown or not_applicable; blank or anything else is saved as active. allergen_name required; reaction_description optional.
- **cr-f15** — live: “Step 7 (Documents) is currently disabled on /administrator/practice-onboarding and displays Not available yet. Documents and wound photographs are not migrated via CSV; upload documents to the chart after onboarding. The endpoint returns "Document import is not available yet. No documents were imported."”
  - Product: The Documents & Historical Wound Photos step (Step 8) is active and uploads files to private storage (DocumentsImportModule.tsx; mediaImport.ts).
  - Proposed: Documents step uploads the files as well as the CSV; each source file is stored privately before its row is saved. Documents columns: patient_uid, file_name, document_type required; document_date, wound_uid (wound_id also accepted), prior_ehr_system optional.
- **cr-f16** — live: “Documents template: patient_uid, file_name required; document_type optional (referral, consent, lab_result, imaging, prior_auth, or other); document_date optional.”
  - Product: document_type is required (three required: true entries in DocumentsImportModule.tsx).
  - Proposed: Documents columns: patient_uid, file_name, document_type required; document_date, wound_uid (wound_id also accepted), prior_ehr_system optional.
- **cr-f18** — live: “Imported wounds (Step 8) and visits (Step 9) are stored in read-only history tables; imported history records cannot be edited, signed, or billed as active Medipyxis visits, and wound photos are not migrated.”
  - Product: Historical wound photos are migrated in Step 8 (mediaImport.ts appends to wound_import_history.photo_urls); wounds are Step 7, not Step 8.
  - Proposed: Imported wounds appear on the patient's Wound Cockpit for context and are kept separate from wounds documented in Medipyxis. Imported visits appear on the patient's timeline, separate from visits documented in Medipyxis.
- **cr-f17** — live: “length_cm, width_cm, depth_cm must be >= 0; non-numeric or negative values fail validation.”
  - Product: Negative numbers are not rejected; only non-numbers are (functions/practice-onboarding-import/writers.ts:54).
  - Proposed: Measurements are numbers with a period for decimals (3.2, not 3,2).
- **cr-x5** — live: “Visit History wound_uid: any non-UUID token is dropped with a non-blocking warning so the visit row still imports.”
  - Product: A non-UUID wound_uid fails the row with an error (functions/practice-onboarding-import/writers.ts:319); it is not dropped with a warning.
  - Proposed: Visit History wound_uid: every value must be a wound_uid from the Wounds results CSV; a value that is not a valid ID fails the row.
- **cr-x6** — live: “visit_number must be a positive whole number; non-integer values are dropped with a warning on the backend or flagged on Confirm.”
  - Product: The backend reads visit_number as any number and fails the row (not a warning) when it is not a number (functions/practice-onboarding-import/writers.ts:1251); decimals and negatives are not refused there.
  - Proposed: visit_number: optional; must be a number, or the row fails.

## The claim scrubber — 18

https://help.medipyxis.com/modules/billing/claim-scrub/

- **scr-02** — live: “... and shows them in the Coding Review drawer.”
  - Product: CodingReviewDrawer.tsx never reads billing_claims.biller_notes; its 'Biller Notes' list reads billing_work_queue_activity (frontend/src/components/billing/CodingReviewDrawer.tsx:265-275). No frontend surface found that renders the scrub text from billing_claims.biller_notes (the Work Queue 'Biller Notes' column reads a separate notes table, BillingWorkQueuePage.tsx:485-487).
  - Proposed: It runs on every auto-drafted claim and appends its findings to the claim's biller_notes field. The Coding Review drawer does not display them.
- **scr-07** — live: “R1 Source: CY2026 OPPS Final Rule (CMS-1809-FC).”
  - Product: R1 cites 'CY2026 PFS / OPPS Final Rule (CMS-1832-F)' with the CMS-1832-F fact-sheet URL (frontend/src/services/claimScrub.ts:224-225, :464-467).
  - Proposed: Source cited by the product: CY2026 PFS / OPPS Final Rule (CMS-1832-F).
- **scr-08** — live: “R2 — Fires when: the claim carries a CTP HCPCS (Q4xxx range) with a JW or JZ modifier attached.”
  - Product: R2 fires on a CTP application CPT (15271-15278) with JW/JZ and DOS on/after 2026-01-01; the Q4xxx product code is not part of the trigger (frontend/src/services/claimScrub.ts:452, :474-480).
  - Proposed: Fires when: the claim carries a skin substitute application CPT (15271–15278) with a JW or JZ modifier, for a date of service on or after 2026-01-01.
- **scr-09** — live: “R2 Why: JW (drug amount discarded) and JZ (zero amount discarded) are single-use vial modifiers restricted to biologics licensed under a BLA. Skin substitutes are regulated as tissue products under 21 CFR 1271, not BLA drugs. Attaching JW or JZ to a Q-coded skin substitute is a payer-defined mismatch that draws a hard reject.”
  - Product: Regulatory/payer statement, not product behavior. The product's own reason is different: 'JW/JZ modifiers inapplicable for incident-to skin substitutes' under CMS-1832-F, with BLA-licensed biologicals excluded (frontend/src/services/claimScrub.ts:481-487); 21 CFR 1271 is not encoded anywhere.
- **scr-10** — live: “R2 Source: CMS MM11856 (JW modifier policy) and MLN Matters SE20015.”
  - Product: R2 cites 'CY2026 PFS / OPPS Final Rule (CMS-1832-F) — JW/JZ modifiers inapplicable for incident-to skin substitutes.' (frontend/src/services/claimScrub.ts:486-488).
  - Proposed: Source cited by the product: CY2026 PFS / OPPS Final Rule (CMS-1832-F).
- **scr-11** — live: “R3 — Fires when: the claim has a CTP HCPCS, patient state is one of NJ / OH / OK / TX, and DOS is on or after 2026-01-15.”
  - Product: States and date are right; the CTP trigger is an application CPT 15271-15278 (hasCtpApplication, frontend/src/services/claimScrub.ts:452), not a CTP HCPCS.
  - Proposed: Fires when: the claim has a skin substitute application CPT (15271–15278), patient state is one of NJ / OH / OK / TX, and DOS is on or after 2026-01-15.
- **scr-12** — live: “the WISeR (Wound care Investigational Skin substitute Enhanced Review) Model requires prior authorization for skin substitute applications in these four states as of 2026-01-15.”
  - Product: WISeR is the Wasteful and Inappropriate Service Reduction Model; that is the title in the product's prod policy_rules corpus (frontend/src/services/__tests__/fixtures/corpusPolicyRules.prod.json:1659) and in the CMS-5056-N URL the scrubber cites (claimScrub.ts:244-245).
  - Proposed: the WISeR (Wasteful and Inappropriate Service Reduction) Model requires prior authorization for skin substitute applications in these four states for dates of service on or after 2026-01-15.
- **scr-13** — live: “A claim without a WISeR UTN on Box 23 draws an automatic hold.”
  - Product: The product's warning says a missing UTN 'will trigger CO-197 + RARC N210 denial' (frontend/src/services/claimScrub.ts:840-842), not a hold.
  - Proposed: The scrubber warns that a claim without the WISeR UTN in Box 23 (837P Loop 2300 REF*G1) will be denied with CO-197 + RARC N210.
- **scr-19** — live: “R4 — Fires when: the claim carries a CTP HCPCS and the patient's state differs from the facility's state.”
  - Product: The state comparison is right; the CTP trigger is an application CPT 15271-15278 (frontend/src/services/claimScrub.ts:452, :884-889).
  - Proposed: Fires when: the claim carries a skin substitute application CPT (15271–15278) and the patient's state differs from the facility's state.
- **scr-22** — live: “R5 — Fires when: a debridement CPT (11042–11047) and a CTP application (15271–15278 or 15275–15278) appear on the same DOS.”
  - Product: The bundled debridement set also includes 97597 (selective debridement), and the rule applies only for DOS on/after 2026-01-01 (frontend/src/services/claimScrub.ts:308-316, :906-911).
  - Proposed: Fires when: a debridement code (11042–11047 or 97597) and a skin substitute application CPT (15271–15278) are on the same claim, for a date of service on or after 2026-01-01.
- **scr-23** — live: “R5 Source: NCCI Policy Manual for Medicare Services, Chapter III, effective 2026.”
  - Product: R5 cites 'CY2026 PFS / OPPS Final Rule (CMS-1832-F) NCCI change' (frontend/src/services/claimScrub.ts:917-919).
  - Proposed: Source cited by the product: CY2026 PFS / OPPS Final Rule (CMS-1832-F), NCCI change.
- **scr-25** — live: “Those live in the note and are checked by the LCD Navigator on the clinical side (guidance-only there too).”
  - Product: Guidance-only is a runtime flag (LCD_GUIDANCE_ONLY = getRuntimeBooleanFlag('VITE_LCD_GUIDANCE_ONLY'), frontend/src/utils/featureFlags.ts:107); its value is environment configuration, not code, so it cannot be confirmed from the release.
- **scr-27** — live: “the scrubber has to run identically in test, demo, and prod without a database dependency, and it has to fail closed if a citation goes stale.”
  - Product: No DB dependency is true. Nothing checks citation age: LAST_VERIFIED is a fixed stamp (frontend/src/services/claimScrub.ts:213) copied onto every warning; a stale citation changes nothing.
  - Proposed: The scrubber runs identically in test, demo and prod without a database dependency. Citation freshness is a fixed stamp, re-verified by hand.
- **scr-28** — live: “Every scrubber finding is appended to the claim's biller_notes field with a fixed format: ⚠️ SCRUB: <code> — <human message> [source: <URL> · verified <YYYY-MM-DD>]”
  - Product: Format is `[CLAIM SCRUB:${w.code}:${w.ruleStatus}] ${w.message} (Source: ${w.sourceCitation}${urlSuffix} Last verified: ${w.lastVerified}. Guidance only, not enforced.)` (frontend/src/services/claimScrub.ts:957).
  - Proposed: Every finding is appended to the claim's biller_notes field as: [CLAIM SCRUB:<code>:<DEFENSIBLE|SHADOW>] <message> (Source: <citation> — <URL> Last verified: <YYYY-MM-DD>. Guidance only, not enforced.)
- **scr-29** — live: “The Coding Review drawer renders these as a list at the top of the drawer, above the coding grid. Each finding shows: the rule code, the human message, the source URL and last-verified date, severity — warning (yellow) or info (blue).”
  - Product: The drawer's banners come from validateCodingAlignment (frontend/src/components/billing/CodingReviewDrawer.tsx:380-383, :648-670), not from scrub findings; nothing in the drawer reads biller_notes.
  - Proposed: The Coding Review drawer does not show scrubber findings. They are stored in the claim's biller_notes field.
- **scr-31** — live: “PD-3 — Cite live URLs with last_verified. Each defensible warning carries the source URL and the date it was last verified. Stale citations get re-verified when the source date is more than 90 days old.”
  - Product: URL + date per defensible warning is true. The stamp is 2026-07-11 (frontend/src/services/claimScrub.ts:213), about 120 days before v1.1.345; no re-verification has happened and none is automated.
  - Proposed: Each defensible warning carries the source URL and the date it was last verified (currently 2026-07-11). Re-verification is a manual step.
- **scr-32** — live: “PD-4 — Truth over optimism. If a precondition can't be evaluated (missing state, missing DOS, missing auth), the rule silently skips rather than fabricating a verdict.”
  - Product: Missing or malformed state/DOS makes rules skip (normalizeState, isValidYYYYMMDD; claimScrub.ts:389-426). A missing authorization does not skip: it is the G1 finding wiser_pa_missing (claimScrub.ts:520-530).
  - Proposed: If the state or date of service is missing or malformed, the rule silently skips rather than fabricating a verdict. A missing authorization is not skipped: it is the wiser_pa_missing finding.
- **scr-34** — live: “The Coding Review drawer's manual review — the biller reads the note, verifies the codes, and clicks Submit.”
  - Product: The drawer has no Submit button; its actions are Save, Save & Next, Flag for Clinical, Edit in Full Form and Close (frontend/src/components/billing/CodingReviewDrawer.tsx:800-852). Submission happens from the claim pages.
  - Proposed: The Coding Review drawer's manual review — the biller reads the note and verifies the codes; the claim is submitted from the full claim form.

## Manage claim denials and appeals — 18

https://help.medipyxis.com/modules/billing/denial-management/

- **den-01** — live: “You have the biller role, or admin.”
  - Product: Cannot be confirmed from code as a role rule. The Billing page (and its Denials tab) is gated by the feature "Billing Operations" (frontend/src/user-routes.tsx:956-962), not by a named biller/admin role. Appeal-status saves are a direct browser write to denial_management (frontend/src/utils/hooks/useBillingDashboard.ts:986-995); who may write is decided by database policy, which the migrations at v1.1.345 do not show (only a SELECT policy, backend/supabase/migrations/20260511270000_rls_billing_tranche3a.sql:97).
  - Proposed: You can open Billing (your account needs the Billing Operations feature).
- **den-03** — live: “Claim Corrected & Resubmitted — The claim was corrected and resubmitted rather than formally appealed.”
  - Product: The option label is "Claim Corrected and Resubmitted" (frontend/src/pages/BillingDashboard.tsx:739).
  - Proposed: Claim Corrected and Resubmitted — The claim was corrected and resubmitted rather than formally appealed.
- **den-04** — live: “Closed — No Further Action: Denial closed; nothing further to do. Closed — Written Off: Denial closed and the balance written off.”
  - Product: The labels use an en dash, not an em dash: "Closed – No Further Action" and "Closed – Written Off" (frontend/src/pages/BillingDashboard.tsx:740-741). Selecting one only writes the status; nothing writes off a balance (updateAppealStatus, frontend/src/utils/hooks/useBillingDashboard.ts:986-995).
  - Proposed: Closed – No Further Action: Denial closed; nothing further to do. Closed – Written Off: Denial marked as written off (this status does not post a write-off to the ledger).
- **den-05** — live: “Not Appealed — A decision was made not to appeal this denial. Appeal Approved — The appeal was approved — the claim should proceed to payment.”
  - Product: Both are listed as legacy values: "Not Appealed (legacy)" and "Appeal Approved (legacy)" (frontend/src/pages/BillingDashboard.tsx:742-744).
  - Proposed: Not Appealed (legacy) and Appeal Approved (legacy) are older values still shown in the list; use Appeal Accepted or a Closed status for new work.
- **den-08** — live: “Sort by aging to surface the oldest denials first, and filter by Appeal Status to find items that have not been actioned.”
  - Product: There is no sort control on the Denials list. Denials load newest first (.order('created_at', { ascending: false }), frontend/src/utils/hooks/useBillingDashboard.ts:945); the only control is the Appeal status filter (frontend/src/pages/BillingDashboard.tsx:4753-4770).
  - Proposed: The list shows the newest denial first. Use the Appeal status filter to find items that have not been actioned.
- **den-09** — live: “Click a denied claim to open the denial detail. Review: the denial reason code and description from the ERA or payer correspondence; the original claim's date of service, procedure codes, and diagnosis codes; any previous appeal history in the activity log.”
  - Product: The detail opens from the eye button (title "View / update denial"), not by clicking the claim. The "Denial / Appeal Workflow" panel shows only the claim number, patient, an Appeal status dropdown and a Notes history (frontend/src/pages/BillingDashboard.tsx:5333-5425). It shows no date of service, procedure or diagnosis codes; the denial reason is only in the list's Denial Reason column (line 4822-4825). There is no activity log of status changes.
  - Proposed: Click the eye icon (View / update denial) to open the Denial / Appeal Workflow panel. It shows the claim number, the appeal status and a timestamped notes history. The denial reason is in the list's Denial Reason column.
- **den-11** — live: “Common denial categories and typical responses: missing or invalid documentation; medical necessity; duplicate claim; timely filing (gather clearinghouse timestamps); coding error; authorization missing.”
  - Product: Billing guidance, not product behavior. No code maps a category to a response.
- **den-12** — live: “Gather supporting documentation. Attach the payer's denial EOB/ERA detail, clinical notes supporting medical necessity, and any payer-specific appeal form.”
  - Product: A denial record has no attachment control: the Denial / Appeal Workflow panel has only the appeal status and text notes (frontend/src/components/denials/DenialNotesPanel.tsx has no upload; frontend/src/pages/BillingDashboard.tsx:5356-5425).
  - Proposed: Gather supporting documentation: the payer's denial EOB/ERA detail, clinical notes supporting medical necessity, and any payer-specific appeal form. Denial records hold text notes only, so keep the files with your appeal package and note where they are.
- **den-14** — live: “Set status to Appeal Submitted and record the submission date.”
  - Product: There is no submission-date field. Saving a status writes appeal_status, appeal_notes and updated_at only (frontend/src/utils/hooks/useBillingDashboard.ts:989-993).
  - Proposed: Set status to Appeal Submitted (or use the Mark appeal submitted button on the row) and write the submission date in the notes.
- **den-15** — live: “Medicare first-level redeterminations must be filed within 120 days of the initial denial; second-level reconsiderations within 180 days.”
  - Product: Medicare regulatory fact (42 CFR 405.942 / 405.962), not encoded in the product. Cannot be checked against code.
- **den-17** — live: “Approved → set Appeal Approved. The claim should reprocess for payment and post through an ERA.”
  - Product: Appeal Approved is a legacy option, labelled "Appeal Approved (legacy)" (frontend/src/pages/BillingDashboard.tsx:744). ERA posting does happen automatically (backend/supabase/functions/_shared/stediEraImport.ts:486).
  - Proposed: Approved → set Appeal Accepted. The payment posts to the claim's ledger when the payer's ERA arrives.
- **den-18** — live: “Accepted for review → Appeal Accepted. Denied → Appeal Denied. Corrected instead of appealed → Claim Corrected & Resubmitted.”
  - Product: The third label is "Claim Corrected and Resubmitted" (frontend/src/pages/BillingDashboard.tsx:739).
  - Proposed: Accepted for review → Appeal Accepted. Denied → Appeal Denied. Corrected instead of appealed → Claim Corrected and Resubmitted.
- **den-19** — live: “The denial record reflects the current appeal status and a full activity trail.”
  - Product: Status changes are not recorded anywhere: updateAppealStatus overwrites appeal_status and appeal_notes in place (frontend/src/utils/hooks/useBillingDashboard.ts:986-995). The only history is the notes billers type (DenialNotesPanel).
  - Proposed: The denial record shows its current appeal status and the notes billers have added. Earlier statuses are not kept, so note each change.
- **den-20** — live: “Closed denials drop out of the active Denials view; use the status filter to include them in reporting.”
  - Product: Nothing hides closed denials. With the filter on All the list shows every denial (frontend/src/pages/BillingDashboard.tsx:749-752).
  - Proposed: Closed denials stay in the list. Filter by a Closed status to find them, or by another status to hide them.
- **den-21** — live: “Do not set a denial to Closed — Written Off without supervisor approval. Write-offs affect your facility's net collection rate and are reviewed in reporting.”
  - Product: Practice policy, not product behavior. The product has no approval step: any user who can save the dropdown can pick Closed – Written Off (frontend/src/pages/BillingDashboard.tsx:5388-5399).
- **den-23** — live: “Denial not visible in the Denials view — ERA has not been posted yet — Check the ERA/Payments view; post the ERA first.”
  - Product: Posting an ERA never creates a denial record. Nothing at v1.1.345 inserts into denial_management: createDenial is defined (frontend/src/utils/hooks/useBillingDashboard.ts:959) but never called, and the ERA import/posting code does not touch the table.
  - Proposed: Denial not in the Denials view — Medipyxis does not create denial records from ERAs. A denied or $0 ERA line shows on the ERA / EOB page as "Denied / $0, nothing to post".
- **den-24** — live: “Appeal Status dropdown is read-only — Your role does not have edit access — Ask your administrator to verify your role permissions.”
  - Product: The dropdown is never read-only (frontend/src/pages/BillingDashboard.tsx:5370-5377). If the account cannot write, the Save shows the error toast from updateAppealStatus (frontend/src/utils/hooks/useBillingDashboard.ts:1003-1006).
  - Proposed: Saving the appeal status shows an error — your account may not be allowed to update denial records — Ask your administrator to verify your role permissions.
- **den-25** — live: “Denial shows Appeal Approved but no ERA payment received — Payer reprocessing is pending — Wait for the next ERA cycle; check the Stedi dashboard for a pending 835.”
  - Product: Payer-side and Stedi-portal advice; not product behavior. Appeal Approved is a legacy status (frontend/src/pages/BillingDashboard.tsx:744).

## Onboard your company on the vendor portal — 18

https://help.medipyxis.com/vendor-portal/onboarding-your-company/

- **vpb-02** — live: “When you reach the end, your first tethered clinic already has your catalog on their picker and their receiving queue ready for your first shipment.”
  - Product: Completing onboarding creates proposed catalog links; products reach the clinic's pickers only after the clinic accepts each one (vendor-onboarding-step/index.ts status: "proposed"; VendorOnboardingPage 'They can accept or decline each SKU.').
  - Proposed: Complete onboarding approves the clinic connection and proposes your catalog to that clinic; the clinic accepts or declines each product.
- **vpb-11** — live: “Medipyxis requires a signed BAA before your account can go live. Either upload the PDF of your executed BAA or paste a link to it in your document management system.”
  - Product: Step 2 has only a required 'BAA document URL' text field; there is no file upload (VendorOnboardingPage.tsx:340-352).
  - Proposed: Paste a link to your signed BAA in BAA document URL (required).
- **vpb-12** — live: “Click Save & Continue. The BAA is marked as pending review; a Medipyxis compliance rep verifies within one business day. Your account moves to pending_verification until BAA review completes. Catalog push (step 5) is blocked until the BAA is approved.”
  - Product: Saving step 2 records the BAA as signed immediately (baa_signed_at: now); there is no compliance review step and step 5 has no BAA check (vendor-onboarding-step/index.ts at v1.1.345). The company is created as pending_verification at step 1.
  - Proposed: When you save the BAA step, the date you saved is recorded as the BAA signing date.
- **vpb-13** — live: “Modality drives which vendor slot you occupy in the clinic wizard's product picker — e.g., checking Amniotic means clinicians see your SKUs under the Amniotic modality in the Visit Wizard.”
- **vpb-15** — live: “You can add or remove modalities later from Settings.”
  - Product: Vendor Settings has only the API page; there is no Settings → Modalities route (VendorRoutes.tsx at v1.1.345).
  - Proposed: (Remove.)
- **vpb-18** — live: “Sales reps who need the CRM (vendor_sales) can be added later from Staff once the account is fully live.”
  - Product: The Staff invite form offers only vendor_user and vendor_admin (VendorStaffPage.tsx at v1.1.345).
  - Proposed: The Staff page invites people as Admin or Staff.
- **vpb-19** — live: “Step 5: the clinic name from the invitation is pre-filled. If BAA approval is still pending, the push button is disabled with a note explaining why.”
  - Product: Saving step 2 records the BAA as signed immediately (baa_signed_at: now); there is no compliance review step and step 5 has no BAA check (vendor-onboarding-step/index.ts at v1.1.345).
  - Proposed: Click Complete onboarding. This approves your connection with the clinic that invited you and proposes your catalog to it.
- **vpb-20** — live: “Pick which SKUs to push: All active products, or Select specific products.”
  - Product: Step 5 has no product picker; it proposes the catalog in one action (Complete onboarding).
  - Proposed: (Remove.)
- **vpb-21** — live: “Click Push catalog. Every selected SKU lands in the clinic's inventory_product_catalog_v2 and shows up in their Visit Wizard picker.”
  - Product: Step 5's button is 'Complete onboarding'; it creates proposed links the clinic must accept before products reach pickers.
  - Proposed: Click Complete onboarding. Your products are proposed to the clinic, which accepts or declines each one.
- **vpb-22** — live: “The confirmation screen summarizes what was pushed, how many rows the clinic's review queue caught, and any master-product proposals awaiting confirmation.”
- **vpb-23** — live: “Your portal moves from pending_verification to active once the BAA is approved.”
  - Product: Saving step 2 records the BAA as signed immediately (baa_signed_at: now); there is no compliance review step and step 5 has no BAA check (vendor-onboarding-step/index.ts at v1.1.345).
  - Proposed: (Remove.)
- **vpb-24** — live: “The clinic sees your SKUs on their catalog with a New badge; their inventory admin reviews and accepts the SKUs to make them wizard-selectable. Future SKU updates on accepted rows auto-apply; only brand-new SKUs need another accept.”
  - Product: There is no 'New' badge on the clinic's Accept vendor catalog page. Acceptance and auto-update (when the link's auto-update is on) check out.
  - Proposed: The clinic reviews your products on its Accept vendor catalog page and accepts or declines each one; accepted products are added to its product pickers.
- **vpb-27** — live: “After onboarding completes, every setting is editable from the portal's Settings area: Modalities under Settings → Modalities, staff under Staff, BAA under Settings → Compliance.”
  - Product: Only an API page exists under Settings; there is no Settings → Modalities or Settings → Compliance.
  - Proposed: After onboarding, Admins add and remove users on the Staff page.
- **vpb-28** — live: “Troubleshooting: "Invitation token invalid" — link expired (30-day TTL) or already consumed; ask the clinic to send a fresh invitation.”
  - Product: The 30-day expiry is real, but the message is 'Invalid or expired invitation' (vendor-onboarding-step/index.ts:50, :121).
  - Proposed: "Invalid or expired invitation" — the link is more than 30 days old or no longer valid; ask the clinic to send a fresh invitation.
- **vpb-29** — live: “Troubleshooting: wizard stuck on step 2 — BAA rejected in review; check your email for the review note.”
  - Product: Saving step 2 records the BAA as signed immediately (baa_signed_at: now); there is no compliance review step and step 5 has no BAA check (vendor-onboarding-step/index.ts at v1.1.345).
  - Proposed: (Remove this row.)
- **vpb-30** — live: “Troubleshooting: cannot pick modality — modality is Medipyxis-scoped (labs, synthetics), not open in v1.”
- **vpb-31** — live: “Troubleshooting: staff invite email not received — ask them to check spam, then resend from Staff → Reinvite after onboarding completes.”
  - Product: The Staff page has a resend action (onResend / useResendStaffInvite), but no 'Reinvite' label (VendorStaffPage.tsx:2, :30).
  - Proposed: Ask them to check spam, then resend the invite from the Staff page.
- **vpb-32** — live: “Troubleshooting: catalog push button disabled — BAA still pending_verification; wait for compliance review, or skip step 5 and push after activation.”
  - Product: Saving step 2 records the BAA as signed immediately (baa_signed_at: now); there is no compliance review step and step 5 has no BAA check (vendor-onboarding-step/index.ts at v1.1.345).
  - Proposed: (Remove this row.)

## Deactivate a facility, archive a patient, and disable a user — 17

https://help.medipyxis.com/admin/deactivating-and-archiving/

- **da-f01** — live: “Before you start: You need to be an admin.”
  - Product: Each action is gated by a feature, not the admin role: All Patients (user-routes.tsx:823), Facilities and HR & Compliance. Administrators have all three.
  - Proposed: Archiving a patient needs All Patients; deactivating a facility needs Facilities; disabling a user needs HR & Compliance. Administrators have all three.
- **da-f02** — live: “Archiving a patient is irreversible from the UI; only Medipyxis support can unarchive.”
  - Product: All Patients has an Unarchive patient button (pages/all-patients/Patients.tsx:1879) that restores the patient to Active.
  - Proposed: Archiving keeps the whole record and can be undone. To restore: in All Patients choose Archived in the status filter, click Unarchive patient on their row and confirm; the patient returns as Active.
- **da-f04** — live: “Navigate to Patient Management and open the patient's record. Click the Actions menu (three-dot icon at top-right of the patient card). Select Archive Patient. Enter the reason for archiving (required — Deceased, No Longer a Patient, Duplicate Record, Other). Click Confirm Archive.”
  - Product: Archive is a button on the patient row in All Patients (pages/all-patients/Patients.tsx:1888) with a confirmation dialog; there is no reason dropdown and no Confirm Archive button (neither string exists in frontend/src).
  - Proposed: Click All Patients in the sidebar, find the patient, click the archive button on the row (Archive patient), read the confirmation and click Archive. You need an internet connection to archive.
- **da-f05** — live: “Archived records are accessible to admins via the Archived filter. Open referrals and pending claims associated with the patient are flagged for manual resolution before archiving completes. The system will not archive a patient with an unresolved claim in Pending or Needs Info status.”
  - Product: No referral or claim check runs before archiving; the archive call simply sets the patient ARCHIVED (pages/all-patients/Patients.tsx:1099). The Archived filter is shown to anyone with All Patients when online.
  - Proposed: To restore: in All Patients choose Archived in the status filter, click Unarchive patient on their row and confirm; the patient returns as Active.
- **da-f06** — live: “Do not use Archive as a substitute for merging duplicate records. Use the Merge Patients workflow instead (Patient Management → Actions → Merge). Archiving a duplicate leaves two records; merging consolidates them.”
  - Product: There is no patient merge tool (no "Merge Patients" or mergePatient in frontend/src).
  - Proposed: There is no merge tool for duplicate patients; contact Medipyxis support before you archive either copy.
- **da-f07** — live: “Deactivating a facility removes it from active scheduling, referral routing, and billing workflows. It does not delete any data.”
  - Product: Deactivation only flips facility.active (services/facilityService.ts:593); inbound fax routing does not filter on active, so referral routing still reaches an inactive facility. "Does not delete any data" is true.
  - Proposed: A "Facility deactivated successfully" message confirms it, and the facility moves to the Deactivated Facilities tab. No data is deleted.
- **da-f08** — live: “Before deactivating: reassign all open referrals to an active facility (Referral Intake → filter by facility → bulk reassign); resolve or transfer all open claims (Billing → Claims → filter by facility); notify users assigned to the facility.”
  - Product: Referral Intake has no bulk reassign (no such control in frontend/src). Keep only the advice to move open work first.
  - Proposed: Archive patients rather than deleting them. Before you deactivate a facility or disable a user, move their open work to someone else.
- **da-f09** — live: “Deactivation steps: Navigate to Facilities in the sidebar. Confirm the row shows Active in the STATUS column. Click Actions → Deactivate. Read the confirmation modal — it lists the count of open referrals and pending claims. Click Confirm Deactivate.”
  - Product: Deactivate is a one-click button on the facility row on the Active Facilities tab (pages/FacilityDashboard.tsx:1037); there is no confirmation modal, no counts and no Confirm Deactivate button.
  - Proposed: Facilities → Active Facilities tab → Deactivate button on the row; it takes effect straight away with no confirmation step.
- **da-f10** — live: “After deactivation, the facility's STATUS badge changes from Active (green) to Inactive (gray). The facility remains visible in the list for historical reference.”
  - Product: The facility leaves the Active Facilities tab and appears on the Deactivated Facilities tab (pages/FacilityDashboard.tsx:804).
  - Proposed: A "Facility deactivated successfully" message confirms it, and the facility moves to the Deactivated Facilities tab. No data is deleted. Image: on the Deactivated Facilities tab a deactivated facility shows Inactive in the STATUS column.
- **da-f11** — live: “Reactivating: Click Actions → Activate at any time to restore the facility to active status. Users previously assigned to it regain access.”
  - Product: The button is Reactivate on the Deactivated Facilities tab (pages/FacilityDashboard.tsx:1049); user access after reactivation was not confirmed.
  - Proposed: Reactivating: open the Deactivated Facilities tab and click Reactivate on the facility's row.
- **da-f12** — live: “Before disabling: reassign open referrals or claims the user owns (Referral Intake → filter Assigned To → bulk reassign; Billing → Work Queue → filter Assignee → reassign); remove the user from future Fleet Calendar routes.”
  - Product: The Work Queue has no Assignee filter/reassign and Referral Intake has no bulk reassign. Keep only the advice.
  - Proposed: Archive patients rather than deleting them. Before you deactivate a facility or disable a user, move their open work to someone else.
- **da-f13** — live: “Disable steps: Navigate to HR & Compliance → Facility Users. Find the user by name or email. Click Edit → toggle Account Status to Inactive → click Save. The user's active session is terminated within 60 seconds.”
  - Product: The field is a Status dropdown (pages/HRNewUserPage.tsx:2649), the button is Save Changes, and sign-out is immediate and global (functions/admin-update-user/handler.ts:502), not within 60 seconds.
  - Proposed: Go to HR & Compliance → Facility Users, find the user by name or email, click the edit button, set Status to Inactive and click Save Changes. The Archive User button does the same after you confirm. Effect: the user is signed out everywhere, cannot sign in again, and their facility roles are switched off. Their notes, signatures and history are kept.
- **da-f14** — live: “Their name remains in the Assigned Clinician dropdowns so that historical records remain accurate; they appear as (Inactive) to indicate they cannot accept new work.”
  - Product: No "(Inactive)" label is added to clinician dropdowns in frontend/src/components or pages.
  - Proposed: (remove the sentence)
- **da-f15** — live: “Deleted accounts remove the link between the user's identity and their historical actions, which breaks audit trail continuity.”
  - Product: There is no Delete User control on the user screen, so the statement describes nothing the customer can do; not checkable.
  - Proposed: (remove the sentence)
- **da-t1** — live: “Summary: Patient deceased or no longer active → Archive (not delete) → Patient Management → Actions.”
  - Product: Archive is on the All Patients row (pages/all-patients/Patients.tsx:1888), not a Patient Management Actions menu.
  - Proposed: Patient deceased or no longer active → Archive (not delete) → All Patients → archive button on the row.
- **da-t2** — live: “Summary: Facility closing permanently → Deactivate → Facilities → Actions.”
  - Product: Deactivate is a button on the facility row, with no Actions menu.
  - Proposed: Facility closing permanently → Deactivate → Facilities → Deactivate button on the row.
- **da-t4** — live: “Summary: Duplicate patient record → Merge, then archive the source → Patient Management → Actions → Merge.”
  - Product: There is no merge tool.
  - Proposed: Duplicate patient record → contact Medipyxis support before you archive either copy.

## Sign off on a visit with Provider Attestation (step 17) — 17

https://help.medipyxis.com/modules/visit-wizard-ehr/sign-off/

- **so-04** — live: “You are the rendering provider — a clinician with a provider profession title (NP, PA, MD, DO) or a medical director. Support staff cannot complete Provider Attestation.”
  - Product: Step 17 has no role gate. The signer is the visit's clinician when they hold a valid 10-digit NPI, otherwise the supervising provider chosen in Step 2 (ProviderAttestationVisit.tsx:107-114, :403-419 at v1.1.345); the Professional Title list includes RN, LPN and LVN (:688-690). The only lock-out is view-only in completion mode (VisitWizardV4.tsx:18723).
  - Proposed: Step 17 is filled in for the visit's clinician when they have a valid 10-digit NPI. Otherwise the supervising provider chosen in Step 2 signs. If the wizard was opened in completion mode, Provider Attestation is view only.
- **so-10** — live: “Check the Provider Attestation Acknowledgment box.”
  - Product: The checkbox is labelled 'Provider Attestation', with the statement under it (ProviderAttestationVisit.tsx:743-768 at v1.1.345). No 'Provider Attestation Acknowledgment' label exists.
  - Proposed: Tick the Provider Attestation box.
- **so-11** — live: “Select the electronic signature option to sign.”
  - Product: There is no signature option to select and nothing to draw. The electronic signature is the typed line 'Electronically Signed By: name, title, NPI, date', made when you tick Provider Attestation and click Complete Provider Attestation (ProviderAttestationVisit.tsx:311-315, :781-790, :818 at v1.1.345).
  - Proposed: Check the Electronic Signature Preview. Your electronic signature is the typed line "Electronically Signed By:" with your name, title, NPI and the date. It is recorded when you click Complete Provider Attestation.
- **so-20** — live: “In the section navigator, check that every section that applies is marked complete.”
  - Product: There is no section navigator. Each section's header in the wizard shows a status icon; complete sections show a green check (VisitWizardV4.tsx:11261-11273 at v1.1.345).
  - Proposed: Scroll the wizard and check that every section that applies shows a green checkmark in its header.
- **so-21** — live: “Click Continue Review. Medipyxis checks the documentation and lists any remaining gaps in a window. For each gap choose Resolve This (go to the section, fix it, then Continue Review again) or Continue Anyway.”
  - Product: The button is 'Continue to Review' at the bottom of the wizard (VisitWizardV4.tsx:19062-19086 at v1.1.345). If gaps remain it opens 'Documentation gaps' (DocumentationAssistModal.tsx:536). Each gap has its own Go to <section> / Answer / Skip actions; the window's buttons are 'Resolve' (closes it so you can fix things) and 'Continue anyway' (:740-743). No 'Resolve This' or 'Continue Anyway' (capital A) exists.
  - Proposed: Click Continue to Review at the bottom of the wizard. If documentation gaps remain, a Documentation gaps window lists them. Use each item's button to go to the section and fix it, or answer it in the box. Click Resolve to close the window and keep working, then click Continue to Review again. Or click Continue anyway to go on.
- **so-23** — live: “The Wound Care Progress Note Preview shows the note as a PDF.”
  - Product: The preview screen is headed 'Preview — Review Before Signing' (ProgressNotePreview.tsx:92 at v1.1.345). No 'Wound Care Progress Note Preview' title exists.
  - Proposed: The Preview — Review Before Signing screen shows the note as a PDF, exactly as it will be finalized.
- **so-26** — live: “Click Continue, review the final signing options, then click Sign & Lock.”
  - Product: The preview's button reads 'Looks Good, Continue →' (ProgressNotePreview.tsx:155 at v1.1.345). It opens the review window (Visit Time, Review Notes, Cancel Review), whose button is Sign & Lock (MultiWoundReviewModal.tsx:846-1042). If the service date differs from the appointment date, a Date check prompt appears first.
  - Proposed: Click Looks Good, Continue →. In the review window, check the visit time and review notes, then click Sign & Lock.
- **so-30** — live: “If your facility uses a co-signature workflow, the note may enter a Pending Co-Signature state; the supervising provider receives an in-app notification and must also complete their attestation step.”
  - Product: There is no Pending Co-Signature state or co-sign notification. Co-signature is the optional Physician Sign-Off section, which shows 'Co-sign Requested' when the appointment is flagged and never blocks save or sign (VisitWizardV4.tsx:18742-18792 at v1.1.345).
  - Proposed: If your practice uses co-signature, the supervising clinician completes the optional Physician Sign-Off section. When the appointment was flagged for co-signature, the section shows Co-sign Requested. It does not block saving or Sign & Lock.
- **so-33** — live: “Click Addendum in the top action bar.”
  - Product: Opening a signed visit shows the 'This visit is signed and locked' screen with an 'Add an addendum' button (SignedVisitScreen.tsx, AddAddendumToNoteButton.tsx at v1.1.345); it opens the 'Add Addendum to Progress Note' form. There is no 'Addendum' button in a top action bar.
  - Proposed: On the "This visit is signed and locked" screen, click Add an addendum.
- **so-34** — live: “Select an addendum reason from the dropdown. The list covers three kinds of correction: clinical corrections (a correction to clinical documentation, or additional findings documented after the visit), billing corrections (a billing code correction), and corrections to written-in language.”
  - Product: The dropdown is 'Type of Addendum' with Correction, Clarification, Late entry, Fabrication remediation and Other (NATURE_OF_AMENDMENT_OPTIONS, WoundDetailPage.tsx:211-219 at v1.1.345). The reason is free text of at least 10 characters. Sentence-kind items are checkboxes under 'Fabricated Statements to Remediate', shown only for Fabrication remediation.
  - Proposed: Pick the Type of Addendum: Correction, Clarification, Late entry, Fabrication remediation, or Other. Write the reason (at least 10 characters). For a sentence in a signed note that you did not write, choose Fabrication remediation and tick the kind of sentence.
- **so-39** — live: “Click Save Addendum.”
  - Product: The button is labelled 'Submit Addendum' (WoundDetailPage.tsx at v1.1.345).
  - Proposed: Click Submit Addendum.
- **so-42** — live: “Addendum content is visible in audit logs.”
  - Product: No audit-log view reads progress_note_addendums, and create-progress-note-addendum writes no audit row (its 'audit trail' is the provider_name on the addendum itself, handler.ts:359 at v1.1.345). Addenda are visible on the note itself (renderAddenda) and are append-only.
  - Proposed: Addendum content is permanently appended to the encounter record and prints on the note under the original.
- **so-44** — live: “Troubleshooting: Complete Provider Attestation doesn't finish the step because the professional title, acknowledgment, or signature is missing — select your title, check the acknowledgment, and sign.”
  - Product: Complete Provider Attestation stays disabled until the provider name, Professional Title, a 10-digit NPI and the Provider Attestation tick are all present (ProviderAttestationVisit.tsx:800-807 at v1.1.345). There is no separate signature to give; the signature line is made by the button itself.
  - Proposed: Complete Provider Attestation is greyed out: the provider name, Professional Title, 10-digit NPI or the Provider Attestation tick is missing. Fill them in and tick the box.
- **so-45** — live: “Troubleshooting: a window lists documentation gaps after Continue Review — click Resolve This for each, or Continue Anyway.”
  - Product: Same labels as so-21: the button is Continue to Review, and the gaps window's buttons are Resolve and Continue anyway (DocumentationAssistModal.tsx:740-743 at v1.1.345).
  - Proposed: A Documentation gaps window opens after Continue to Review: some sections still have missing items. Fix them from each item's button, or click Continue anyway if you have decided they don't prevent finalizing.
- **so-46** — live: “Troubleshooting: Provider Attestation step is not accessible because your account is not a rendering provider — ask the rendering provider to sign in and complete step 17.”
  - Product: Step 17 is not gated by account role; it is view only only when the wizard runs in completion mode (VisitWizardV4.tsx:18723, ProviderAttestationVisit.tsx 'Provider authored · view only' at v1.1.345).
  - Proposed: Provider Attestation shows "Provider authored · view only": the wizard was opened in completion mode. Ask the provider to open the visit and complete step 17.
- **so-48** — live: “Troubleshooting: the addendum reason dropdown is empty because your organization has not configured addendum reasons — contact your administrator to configure addendum reason codes.”
  - Product: The Type of Addendum options are hard-coded and the same for every organization (NATURE_OF_AMENDMENT_OPTIONS, WoundDetailPage.tsx:211 at v1.1.345). There is nothing to configure, so the list cannot be empty for this reason.
  - Proposed: Delete this row. The Type of Addendum list is built in and the same for every organization.
- **so-49** — live: “Troubleshooting: the Addendum button is not visible because the note is not yet signed (still in draft) — complete Provider Attestation first.”
  - Product: The signed screen with Add an addendum appears only for a visit that went through Sign & Lock (visit_locked; resolveWizardArrival.ts decideWizardEntry, visitSignState.ts 'Signed means Sign & Lock ran' at v1.1.345). Completing Provider Attestation alone does not sign the visit — step 17 itself says 'Not signed yet — Sign & Lock finishes it'.
  - Proposed: There is no Add an addendum button: the visit has not been through Sign & Lock. Finish it with Continue to Review and Sign & Lock.

## Set up billing and the Stedi clearinghouse — 16

https://help.medipyxis.com/admin/billing-setup/

- **bs-f01** — live: “Use this guide to get your facility ready to submit claims through Medipyxis. You will configure the Code Library, Fee Schedule, and Superbill templates, enroll your providers with each payer through Stedi, and set how ERAs are posted.”
  - Product: There is no Code Library, Fee Schedule or ERA-posting setting in the product (no "Code Library"/"Fee Schedule" string in frontend/src). Prices live in the Charge Master (pages/ChargeMasterPage.tsx:61); the Superbill Config route redirects there; ERAs post automatically. Enrollment through Stedi is real (StediEnrollmentPage.tsx).
  - Proposed: There is no separate billing setup screen; prices are in the Charge Master and enrollment is on Payer Enrollment, both reached from Billing Operations. There is nothing to switch on: ERAs from Stedi arrive automatically and matched payment lines post to the claim's ledger automatically; unmatched lines wait on the ERA / EOB page.
- **bs-02** — live: “Medipyxis uses Stedi as the clearinghouse for electronic claims (837P), eligibility checks (270/271), claim status (276/277), and remittance advice (835).”
  - Product: 837P, 270/271 and 835 are wired, and 277CA acknowledgments are imported (stediAckImport.ts). No 276 claim-status inquiry is ever sent: StediClaimStatusRequest is only declared (functions/_shared/stediTypes.ts:336) and never used.
  - Proposed: Medipyxis uses Stedi as the clearinghouse for electronic claims (837P), eligibility checks (270/271), claim acknowledgments (277CA), and remittance advice (835).
- **bs-f02** — live: “Before you start: You have the practice_admin, super_admin, or biller role.”
  - Product: No such role names exist in the app (no "practice_admin" in frontend/src). The billing screens are gated by the Billing Operations feature: user-routes.tsx:956.
  - Proposed: You have access to Billing Operations.
- **bs-f03** — live: “Your facility's NPI and Tax ID are entered in Admin → Facility Setup. These travel on every claim.”
  - Product: There is no Admin → Facility Setup screen (no "Facility Setup" string in frontend/src). NPI Code and Tax Number are on the facility form opened from Facilities → Edit (components/FacilityAddEditModal.tsx:746).
  - Proposed: The facility's NPI Code, Tax Number and Legal / Billing Name are entered on the facility (Facilities → Edit).
- **bs-f05** — live: “The Code Library is your master list of CPT, HCPCS, and ICD-10 codes. Go to Billing → Superbill Config → Code Library. Click Add Code. Enter the code, description, default units, and whether a modifier is required (25, 59, KX, JW, JZ). Click Save. Codes you add here appear in the CPT picker inside Visit Wizard (section 13 — Billing & Documentation) and on the New Claim form.”
  - Product: The Superbill Config route redirects to the Charge Master (user-routes.tsx:1027). There is no Code Library and no Add Code button; prices are added with Add Charge on the Charge Master (components/billing/ChargeRateTable.tsx:233).
  - Proposed: Click Billing Operations, then Charge Master. On Insurance Charges (and Self-Pay Charges), click Add Charge, enter the CPT/HCPCS code and per-unit price, and click Create.
- **bs-f06** — live: “HCPCS codes for skin substitutes must match the product's HCPCS in the Inventory Product Catalog. Mismatches are flagged by the LCD Navigator.”
  - Product: No LCD Navigator rule compares a claim HCPCS with the Product Catalog HCPCS (no such rule text in frontend/src). Not confirmed; drop the sentence.
  - Proposed: (remove the sentence)
- **bs-f07** — live: “The Fee Schedule sets your allowed and charge amounts per payer or payer class. Go to Billing → Superbill Config → Fee Schedule. Click Add Schedule. Pick the payer or payer class (Medicare, Medicaid, Commercial). For each code, enter the Allowed Amount and the Charge Amount. Click Save Schedule. The charge amount is what appears on the claim. The allowed amount drives A/R aging and your net collection rate reports.”
  - Product: There is no Fee Schedule, Add Schedule or Allowed Amount entry. The Charge Master has Insurance Charges and Self-Pay Charges tabs with one per-unit price per code (pages/ChargeMasterPage.tsx:61).
  - Proposed: On Insurance Charges (and Self-Pay Charges), click Add Charge, enter the CPT/HCPCS code and per-unit price, and click Create. A claim line with no price is priced at $0.00, and a claim with a $0.00 line cannot be sent to Stedi.
- **bs-f08** — live: “Templates bundle codes that typically appear together for a given visit type. Go to Billing → Superbill Config → Templates. Click New Template and give it a name. Add codes from the Code Library. Set a default POS code and Diagnosis pointer for each line. Mark one template as the Facility Default — it pre-populates every new claim at this facility. Click Save.”
  - Product: Templates are a tab on the Charge Master (pages/ChargeMasterPage.tsx:61) and feed the billing code picker. There is no Facility Default and no per-line POS or diagnosis pointer (no "Facility Default" in frontend/src).
  - Proposed: Use the Templates tab to group codes into named superbill templates for the billing code picker.
- **bs-f09** — live: “In the Facility Default template, set the Default Rendering Provider dropdown to the NPI for this facility. This NPI lands on box 24J of the CMS-1500 for every claim, and can be overridden on an individual claim if needed.”
  - Product: No Default Rendering Provider setting exists anywhere in frontend/src.
  - Proposed: (remove the section)
- **bs-f10** — live: “Go to Billing → Enrollment. Confirm the Provider card (pre-filled from your facility settings). Pick the transactions: Professional Claims (837P) required for every payer; ERA / Remittance (835) required to use ERA auto-post; Eligibility (270/271) optional but recommended. Select the payers (several at once). Click Submit; each payer shows a result row with a green check or a red X. Come back later to refresh; most payers update from Submitted to Active automatically.”
  - Product: The page is reached from the Payer Enrollment card on Billing Operations; the button reads "Enroll with N Payers" (pages/StediEnrollmentPage.tsx:659); ERA is off by default and there is no ERA auto-post (components/billing/stedi/EnrollmentTypesCard.tsx:18); status updates come from Refresh from Stedi.
  - Proposed: Click Billing Operations, then the Payer Enrollment card. Provider Information holds Organization / Provider Name, NPI, Tax ID, PTAN (optional) and address, filled in from the facility. Enrollment Types: Professional Claims (837P) and Eligibility (270/271) on by default; ERA / Remittance (835) off by default because enrolling moves the payer's ERAs away from your current clearinghouse. Choose the Payers (several at once) and click Enroll with N Payers. The Current Enrollments panel shows each payer and transaction with its status; Refresh from Stedi updates it. Rejections and tasks also appear in the Stedi Actions inbox.
- **bs-f12** — live: “When ERA auto-post is on, Medipyxis automatically applies remittance advice (835) from Stedi to matching claims without manual review. Go to Billing → Settings → Clearinghouse, find the ERA Auto-Post toggle, turn it on or leave it off, click Save. Auto-post only applies when the ERA amount exactly matches the claim's expected payment; partial payments, payer adjustments, and denials always route to the Payments (ERA) tab.”
  - Product: There is no ERA Auto-Post toggle or Clearinghouse settings page (no "Auto-Post" in frontend/src). Matched ERA lines post automatically (functions/_shared/stediEraImport.ts:486), matched by the claim's patient control number, not by amount; unmatched lines wait on the ERA / EOB page.
  - Proposed: There is nothing to switch on: ERAs from Stedi arrive automatically and matched payment lines post to the claim's ledger automatically; unmatched lines wait on the ERA / EOB page.
- **bs-f13** — live: “Claim statuses: Pending — created from a completed visit, not yet approved; Needs Info — failed validation, fix in the Work Queue; Approved — will be submitted on the next export cycle; Exported — sent to Stedi; Submitted — Stedi confirms delivery to the payer; Paid — the payer adjudicated and an ERA has posted; Denied — manage in Denial Management.”
  - Product: Exported means exported as a PDF or JSON file, not sent (pages/BillingDashboard.tsx:1256); there is no export cycle; a claim goes to Stedi when a biller clicks Submit Claim; Paid and Denied are set by a person.
  - Proposed: Exported means the claim was exported as a PDF or JSON file; it has not been sent anywhere. A claim goes to Stedi when a biller clicks Submit Claim on the claim form. If the payer's acknowledgment (277CA) rejects the claim, Medipyxis sets it to Rejected automatically. Paid and Denied are set by someone on the billing team.
- **bs-f14** — live: “Status updates flow in automatically — you do not need to refresh or poll.”
  - Product: The Payments (ERA) list has no realtime subscription (no postgres_changes in useERAs.ts); the Work Queue refreshes on a timer or on Refresh. Drop the sentence.
  - Proposed: (remove the sentence)
- **bs-res** — live: “Result: your Code Library, Fee Schedule, and default template are configured; ERA auto-post is set to your preference; claims will move through the statuses above automatically.”
  - Product: Restates bs-r01/bs-r12: no Code Library, Fee Schedule, default template or ERA auto-post setting exists.
  - Proposed: Prices are in the Charge Master and your providers are enrolled with each payer for the transactions you need. Matched ERA payments post automatically.
- **bs-25** — live: “Troubleshooting: Enrollment failed with a red X — verify the provider NPI and Tax ID under Admin → Facility Setup, fix typos and resubmit.”
  - Product: The NPI and Tax Number are on the facility form under Facilities → Edit; there is no Admin → Facility Setup.
  - Proposed: Troubleshooting: an enrollment error → check the NPI and Tax Number on the facility, fix typos, resubmit; a claim at Exported → open it and click Submit Claim; No price on file → add it in Charge Master.
- **bs-f15** — live: “Troubleshooting: New claim stuck at Exported — payer not yet Active for 837P; Claims rejecting on MBI — update the MBI under Patients → Insurance; Codes not appearing in CPT picker — add via Superbill Config → Code Library; ERA posted to the wrong claim — turn auto-post off; Default rendering provider blank — re-open the template and set it.”
  - Product: Exported is a file export, not a send (pages/BillingDashboard.tsx:1256); Code Library, auto-post and a default rendering provider do not exist.
  - Proposed: Troubleshooting: an enrollment pending for days → Refresh from Stedi and check the Stedi Actions inbox for a task. Exported means the claim was exported as a PDF or JSON file; it has not been sent anywhere. A claim goes to Stedi when a biller clicks Submit Claim on the claim form.

## Review coding with the Coding Review drawer — 16

https://help.medipyxis.com/modules/billing/coding-review-drawer/

- **crd-02** — live: “... and every override attributed and logged.”
  - Product: The drawer's only override is 'Save anyway' on the duplicate-claim dialog (force: true to update-claim-codes, CodingReviewDrawer.tsx:461-492); the drawer writes no override record. Recorded coding-fact overrides happen on the claim page's manual paths (BillingClaimDetailPage.tsx:794-870 via mark-claim-submitted).
  - Proposed: Coding-fact overrides confirmed on Mark as Submitted, Fix & Resubmit or Send Fax are attributed and recorded in the claim's history.
- **crd-03** — live: “You have the biller role, or admin.”
  - Product: The Work Queue route is gated by the "Billing Operations" feature (RequireFeature + FeatureAccess, frontend/src/user-routes.tsx:966-975), not a biller/admin role check; role-to-feature mapping is tenant data.
  - Proposed: You have access to Billing Operations.
- **crd-08** — live: “— the claim cannot be submitted until the provider signs.”
  - Product: Not provable from code. New Claim offers only locked visits (frontend/src/pages/NewBillingSubmitPage.tsx:158-161), but no submit edge path (submitToStedi.ts, submit-claim, submit-to-stedi, biller-submit-claim-onbehalf) checks visit_locked, and Mark as Submitted / Send Fax do not either. Whether an existing claim on an unsigned visit can be submitted needs a browser/DB test.
- **crd-12** — live: “Before the fix, ~87% of claims had no note surface in the drawer even when a signed note existed”
  - Product: The measurement is of notes, not claims: 60 of 461 visit_form + initial_evaluation notes matched, 'so for the other 401 the coder sees no note' (frontend/src/utils/billing/resolveProgressNoteFilePath.ts:7-10). 401/461 is 87% of notes.
  - Proposed: Before the fix, the drawer could find only 60 of 461 clinical notes on production; for the other 401 (about 87%) the coder saw no note.
- **crd-14** — live: “Billing Codes (procedures with modifiers, units, and diagnoses; each procedure line carries its own diagnosis pointers)”
  - Product: On save the drawer gives every procedure line the full list of the claim's ICD-10 codes (frontend/src/utils/billing/codingReviewAdapters.ts:67-79: icd_codes: icdCodes for every line); the code entry has no per-line diagnosis control.
  - Proposed: Billing Codes (procedures with modifiers, units and charges, plus the claim's ICD-10 diagnoses; on save every procedure line points to all listed diagnoses)
- **crd-17** — live: “Red — validation errors: The claim payload is structurally broken (missing subscriber, missing service line, etc.). Submission is blocked until you fix them.”
  - Product: The only error-severity rule is 'Procedure/supply codes present with no supporting ICD-10 diagnosis — guaranteed denial.' (frontend/src/utils/billing/codingValidation.ts:41-42). The drawer has no submit action, and Save is not blocked by it (CodingReviewDrawer.tsx:803).
  - Proposed: Red — error: procedure or supply codes with no ICD-10 diagnosis on the claim (a guaranteed denial). Fix it before submitting; Save stays available.
- **crd-18** — live: “Yellow — warnings: Codes look inconsistent with the visit (diagnosis not linked to a line, modifier missing, out-of-range units). Advisory only; save and submit are still available.”
  - Product: The warnings are: E/M with procedures but no modifier 25; a line with a $0.00 charge; a skin substitute without KX (frontend/src/utils/billing/codingValidation.ts:31-65). No diagnosis-link or units warning exists.
  - Proposed: Yellow — warnings: an E/M code billed with procedures but no modifier 25, a line with a $0.00 charge, or a skin substitute without the KX modifier. Advisory only; Save stays available.
- **crd-21** — live: “Adjust the code list on the right — add or remove procedures, correct modifiers, correct units, and edit the diagnosis links on each line.”
  - Product: There is no per-line diagnosis link in the drawer; every line gets all ICD-10 codes on save (frontend/src/utils/billing/codingReviewAdapters.ts:68-75).
  - Proposed: Adjust the code list on the right — add or remove procedures and diagnoses, correct modifiers and units.
- **crd-26** — live: “Save — Persists code, POS, and diagnosis-pointer changes to the claim. Enabled only when you have edited something.”
  - Product: Save sends codes and POS to update-claim-codes and is enabled only when dirty; there are no per-line diagnosis pointers to change — every line is saved with all ICD-10 codes (codingReviewAdapters.ts:75).
  - Proposed: Save — Persists code, diagnosis and POS changes to the claim. Enabled only when you have edited something.
- **crd-31** — live: “When a code triggers a coding-fact finding — MUE unit ceilings, unusual Place of Service, mutually exclusive procedures — the submitter does not silently accept it, and it also does not refuse outright. Instead: Submit stops, and a modal names every finding in the biller's words ("CPT 97597 units exceed CMS MUE of 3 per DOS").”
  - Product: Since 2026-09-02 coding facts are warning-only on Submit to Stedi: they never stop the claim (backend/supabase/functions/_shared/submitToStedi.ts:388-445). The manual paths stop with a browser confirm dialog, not a modal (BillingClaimDetailPage.tsx:801-805, :850-856). The checks are MUE 0, place-of-service restriction and MUE unit caps (validateCodingFacts.ts:115-160); there is no mutually-exclusive-procedure check.
  - Proposed: Coding-fact findings (MUE 0 codes, place-of-service restrictions, MUE unit caps) never stop Submit to Stedi; they are reported as warnings. On Mark as Submitted, Fix & Resubmit and Send Fax, a confirm dialog lists every finding before you proceed.
- **crd-32** — live: “You either fix the codes and try again, or confirm the override — "Submit it anyway".”
  - Product: No 'Submit it anyway' control exists. The Send Fax confirm ends '<action> anyway? Your confirmation will be recorded on the claim.' with action 'Fax it' (BillingClaimDetailPage.tsx:752, :801-805); Mark as Submitted / Fix & Resubmit use buildMarkSubmittedConfirmMessage. All are browser OK/Cancel dialogs.
  - Proposed: You either fix the codes and try again, or click OK in the confirm dialog (for a fax it asks "Fax it anyway? Your confirmation will be recorded on the claim.").
- **crd-33** — live: “If you confirm, the submission proceeds AND a row is written to claim_status_history with the method (electronic / manual / fax / resubmit), the codes overridden, and who overrode them.”
  - Product: Recorded methods are manual, resubmit and fax only (backend/supabase/functions/mark-claim-submitted/logic.ts:10-16); the row is written by mark-claim-submitted with the user id and the overridden codes (index.ts:141-151). Electronic submissions record no override because the findings no longer stop them.
  - Proposed: If you confirm on Mark as Submitted, Fix & Resubmit or Send Fax, a row is written to claim_status_history with the method (manual / resubmit / fax), the codes overridden, and who confirmed.
- **crd-34** — live: “The same check now runs on all four submission paths — Submit to Stedi, Mark as Submitted, Fix & Resubmit, and Send Fax — so a biller cannot walk around the electronic gate by faxing the claim off-system. Every override reads back as an attributed decision on the claim, not a silent bypass.”
  - Product: The check runs on all four paths, but on Submit to Stedi it is warning-only since 2026-09-02 (submitToStedi.ts:388-445), so there is no electronic gate; the manual paths are now the stricter ones. Electronic findings are logged, not recorded as attributed overrides.
  - Proposed: The same check runs on all four submission paths. On Submit to Stedi it is a warning only and does not stop the claim; on Mark as Submitted, Fix & Resubmit and Send Fax the biller confirms each finding and the confirmation is recorded on the claim.
- **crd-37** — live: “Troubleshooting: Left panel says "No note" — The claim was created manually, or the note lives in a namespace outside the three tiers.”
  - Product: The texts are "No signed note found for this visit." (frontend/src/components/billing/CodingReviewNoteLink.tsx:33) and, for a manual claim, "No visit data — claim was created manually" (CodingReviewDrawer.tsx:686).
  - Proposed: Left panel says "No signed note found for this visit." or "No visit data — claim was created manually".
- **crd-39** — live: “Troubleshooting: Yellow warning about diagnosis pointers — A procedure line has no diagnosis linked, or points to a diagnosis you removed — Reassign the pointer on the line.”
  - Product: No diagnosis-pointer warning or per-line pointer control exists in the drawer (frontend/src/utils/billing/codingValidation.ts has no such rule; BillingCodeEntry.tsx only has a drag-and-drop PointerSensor). The related check is the red error 'Procedure/supply codes present with no supporting ICD-10 diagnosis' (codingValidation.ts:41-42).
  - Proposed: Red error about a missing diagnosis — procedure codes are on the claim with no ICD-10 code. Add the diagnosis; every line will point to it.
- **crd-40** — live: “Troubleshooting: Expected Total is $0.00 — The line has no price in facility_charge_master — Open Charge Master for the facility and add the price.”
  - Product: Adding the price in Charge Master does not change this claim: the drawer shows the stored line charges and never reads Charge Master (CodingReviewDrawer.tsx:241-262, :399-406). The biller must also put the price on the line.
  - Proposed: Expected Total is $0.00 — the line has no charge. Add the price in Charge Master for future claims, and type it into this line's charge box, then Save.

## Nurse daily cheat sheet — 16

https://help.medipyxis.com/quick-reference/nurse-daily/

- **qnd-02** — live: “Start of day — see today's stops: Patient Management → today's list.”
  - Product: There is no today's-stops list in Patient Management; today's appointments are on the Fleet Calendar, which opens in Day view (FleetCalendarCanvas.tsx frontend/src/pages/ops/FleetCalendarCanvas.tsx:2152).
  - Proposed: See today's appointments in Fleet Calendar (opens in Day view).
- **qnd-04** — live: “Check action items: Dashboard → right panel.”
  - Product: The Dashboard's Action Items panel was removed (Dashboard.tsx frontend/src/pages/Dashboard.tsx:1415).
  - Proposed: (Remove this row: the Dashboard has no Action Items panel.) Check your credentials: Dashboard → My Credentials & Compliance.
- **qnd-05** — live: “Clock in to duty: Header → On Duty toggle.”
  - Product: On Duty is a static badge on the Dashboard; there is no toggle and no 'Off Duty' string anywhere in frontend/src.
  - Proposed: (Remove this row: there is no On Duty toggle.)
- **qnd-06** — live: “Start visit: Patient card → Start Visit.”
  - Product: Start Visit is on the Fleet Calendar appointment details (AppointmentDetailsModal.tsx frontend/src/components/AppointmentDetailsModal.tsx:1490), not on a patient card.
  - Proposed: Start the visit: Fleet Calendar → tap the appointment → Start Visit (or Continue Visit / Resume Visit for a note in progress).
- **qnd-07** — live: “Jump between wizard steps: left wizard rail, shortcut ← / →.”
  - Product: VisitWizardV4.tsx has no ArrowRight/ArrowLeft step navigation; steps are opened from the wizard's section list.
  - Proposed: Move between steps: open the section you want from the wizard's list (Step 1 to Step 17, plus Step 2b).
- **qnd-09** — live: “Scan graft UIN: Procedures & Supplies → Scan.”
  - Product: There is no Scan button; the Box UID/UIN is typed from the package (ProcedureSuppliesVisit.tsx frontend/src/components/visit-wizard/visit/ProcedureSuppliesVisit.tsx:5363).
  - Proposed: Record the box UID/UIN of a graft: Procedure Supplies (Step 13) → type it from the package.
- **qnd-10** — live: “Save draft: the wizard autosaves each field continuously; manual save: top-right; shortcut ⌘S / Ctrl+S.”
  - Product: Autosave is real (useWizardAutoSave.ts frontend/src/hooks/useWizardAutoSave.ts:8) and there is a Save as Draft / Update Draft button (frontend/src/components/VisitWizardV4.tsx:18996), but the wizard has no ⌘S handler.
  - Proposed: The wizard autosaves within about a second of each change. To save by hand, click Save as Draft (Update Draft once a draft exists).
- **qnd-13** — live: “A dropped connection or a device switch won't lose your work.”
  - Product: The web wizard is online-only: autosave writes straight to the server and keeps no local copy (useWizardAutoSave.ts has no localStorage/IndexedDB), so edits made while the connection is down are not saved.
  - Proposed: The wizard saves to the server within about a second of each change while you are online. Changes made while your connection is down are not saved.
- **qnd-15** — live: “Shortcut ⌘K / Ctrl+K: Quick Jump — patient, visit, page.”
  - Product: Quick Jump searches pages, features and actions only (CommandBar.tsx frontend/src/components/app-shell/CommandBar.tsx:124).
  - Proposed: ⌘K / Ctrl+K opens Quick Jump — search pages, features or actions and go there.
- **qnd-16** — live: “Shortcut ⌘S / Ctrl+S: save draft.”
  - Product: VisitWizardV4.tsx has no 's' key handler; ⌘S works only in the billing Coding Review drawer.
  - Proposed: (Remove: the wizard has no ⌘S shortcut; it autosaves.)
- **qnd-17** — live: “Shortcut ⌘↵ / Ctrl+Enter: submit current wizard step.”
  - Product: VisitWizardV4.tsx has no ⌘↵ handler; ⌘↵ works only in the billing Coding Review drawer.
  - Proposed: (Remove: the wizard has no ⌘↵ shortcut.)
- **qnd-18** — live: “Shortcut ⌘/ / Ctrl+/: help for current page.”
  - Product: AppShell.tsx has no '/' key handler.
  - Proposed: (Remove: there is no ⌘/ shortcut.) ⌘K / Ctrl+K opens Quick Jump — search pages, features or actions and go there.
- **qnd-19** — live: “Who to ping: app bug → Team Chat → #support; clinical question → Team Chat → #clinical.”
  - Product: Team Chat has no channels; it has direct and group conversations only (no '#support' in components/teamChat).
  - Proposed: Message your manager or team in Team Chat (New Conversation or New Group Chat); for one patient, use the Team Chat tab on that patient's chart.
- **qnd-21** — live: “Credential about to expire: already alerted — Dashboard → My Credentials.”
  - Product: The Dashboard tile is My Credentials & Compliance (frontend/src/pages/Dashboard.tsx:358).
  - Proposed: Check your credentials: Dashboard → My Credentials & Compliance.
- **qnd-22** — live: “End of day: all visits signed? Check Action Items is empty.”
  - Product: There is no Action Items panel on the Dashboard (removed, MEDA-277).
  - Proposed: All visits signed? Check the Fleet Calendar for visits still in draft.
- **qnd-24** — live: “End of day: flip On Duty to Off Duty.”
  - Product: There is no On Duty toggle and no 'Off Duty' state in frontend/src.
  - Proposed: (Remove this step: there is no On Duty toggle.)

## June 2026 release notes — 16

https://help.medipyxis.com/release-notes/2026-06/

- **rn06-00** (PR evidence only) — live: “Changes shipped between 2026-06-01 and 2026-06-25. Items are grouped by module.”
- **rn06-09** — live: “Visit Wizard — Secondary payer read-only in the wizard; edits on the Insurance tab; written back to the canonical insurance record. (PR #2705)”
  - Product: Out of date: since 2026-10-15 (PR #3696) all insurance in the wizard is view-only, labelled '(from chart — view only)' (PatientDemographicsVisit.tsx), and the write-back service wizardInsuranceWriteback.ts is gone at v1.1.345.
  - Proposed: Visit Wizard — Secondary payer read-only in the wizard; edits on the Insurance tab; written back to the canonical insurance record. (PR #2705) Update (Nov 2026): since October 15 (PR #3696), all insurance in the wizard is view-only and labeled "from chart — view only"; the wizard no longer writes insurance back. Edit insurance on the patient's chart.
- **rn06-10** — live: “Visit Wizard — Open-visits docket moved to the top; older Pull from History / View Previous Visits removed in favor of the new pull workflows. (PR #2687, #2682)”
  - Product: PR #2687 is cited but is the Comprehensive Patient History change, not the docket. The open-visits docket itself was removed on 2026-07-13 (PR #2958) and is not in v1.1.345.
  - Proposed: Visit Wizard — Open-visits docket moved to the top; older Pull from History / View Previous Visits removed in favor of the new pull workflows. (PR #2682) Update (Nov 2026): the open-visits docket was removed on July 13 (PR #2958).
- **rn06-13** — live: “Visit Wizard — Native camera on mobile web for wound photos. (PR #2637, #2638)”
  - Product: PR #2637 is cited but its title is about something else (not the camera). PR #2638 and the code check out.
  - Proposed: Visit Wizard — Native camera on mobile web for wound photos. (PR #2638)
- **rn06-14** (PR evidence only) — live: “Visit Wizard — Fewer false error toasts and several data-loss/silent-failure fixes. (PR #2631, #2674)”
- **rn06-16** (PR evidence only) — live: “Dashboard — Real data sources (placeholder data removed). (PR #2650)”
- **rn06-19** (PR evidence only) — live: “★ Billing — Auto-populate codes for claim-ready visits; de-dup by date of service. (PR #2639)”
- **rn06-24** — live: “Billing — Place of Service defaults to Home (POS 12). (PR #2557)”
  - Product: Out of date: since 2026-10-27 (PR #3854) a claim with no Place of Service is refused instead of defaulting to 12; the default is gone from submit-claim at v1.1.345.
  - Proposed: Billing — Place of Service defaults to Home (POS 12). (PR #2557) Update (Nov 2026): since October 27 (PR #3854), a claim with no Place of Service is refused instead of defaulting to Home. Set the Place of Service on the visit.
- **rn06-26** — live: “Intake — Carry-forward across 13 sections; progress-note preview; unified finalize + claim auto-creation (parity with Visit Wizard). (PR #2627, #2628)”
  - Product: #2627 is appointment booking and #2628 is the Visit Wizard bring-forward, not intake; the separate intake wizard (IntakeWizardV3.tsx) was retired on 2026-07-02 (PR #2816) and is absent at v1.1.345.
  - Proposed: (Remove this item.)
- **rn06-28** — live: “Intake — Cross-device draft recall. (PR #2704)”
  - Product: Out of date: the separate intake wizard was retired on 2026-07-02 (PR #2816); IntakeWizardV3.tsx is absent at v1.1.345.
  - Proposed: Intake — Cross-device draft recall. (PR #2704) Update (Nov 2026): on July 2 (PR #2816) the separate intake wizard was retired; intake visits now use the single Visit Wizard.
- **rn06-29** — live: “★ Fleet Calendar — Clinician identity unified across Fleet Calendar, HR, and chat; top scroll nav added; display bugs fixed. (PR #2629, #2678)”
  - Product: PR #2629 is cited but its title is not about Fleet Calendar or clinician identity. PR #2678 and the top scroll nav check out.
  - Proposed: ★ Fleet Calendar — Top scroll nav added; hidden clinician names resolved; display bugs fixed. (PR #2678)
- **rn06-31** — live: “Scheduling — Non-clinician appointment creation via provider dropdown, stricter provider/NPI validation. (PR #2627, #2554)”
  - Product: The strict-validation 422 that #2554 added was removed two days later (PR #2613); create-appointment has no 422 at v1.1.345.
  - Proposed: Scheduling — Non-clinician appointment creation via provider dropdown. (PR #2627)
- **rn06-32** — live: “Vendors — Lists repointed to the CRM vendor hub; dead practice.vendor_* lookups and stale category sentinels removed. (PR #2707, #2708, #2709)”
  - Product: PR #2707 is cited but is the DME product picker removal, not the vendor lists. #2708, #2709 and the code check out.
  - Proposed: Vendors — Lists repointed to the CRM vendor hub; dead practice.vendor_* lookups and stale category sentinels removed. (PR #2708, #2709)
- **rn06-39** (PR evidence only) — live: “Business Development — Dashboard scoped to the logged-in rep; load race condition fixed. (PR #2651)”
- **rn06-40** — live: “★ Progress Notes — the note does not invent undocumented plan items. Clinical-entity and medication checks keep plan items, entities, and medications that were not documented from appearing on the PDF as if they had been entered.”
  - Product: The clinical-entity and medication checks (services/progressNoteGuardrails.ts, PR #2622) run only in useProgressNoteGenerator, used only by components/progress-notes/ProgressNoteGenerator.tsx, which nothing renders at v1.1.345. The stored PDF is built by the perfectNote renderer, which prints 'Not documented.' for blank fields (see September 2026).
  - Proposed: ★ Progress Notes — Zero-fabrication checks. Clinical-entity and medication checks for the progress note were added. (PR #2622) Update (Nov 2026): the current progress note does not use these checks; it is built a different way. See the September 2026 release notes and Note honesty guardrails.
- **rn06-42** — live: “Reliability — Saves are unconditional; DB safeguards against duplicate visits and double-billing. (PR #2611, #2612, #2613, #2643)”
  - Product: PR #2611 is cited but its title is about something else. #2612, #2613, #2643 and the code check out.
  - Proposed: Reliability — Visit saves no longer fail on save-time validation; appointment creation no longer fails on strict validation; DB safeguards against duplicate visits and double-billing. (PR #2612, #2613, #2643)

## Invite users and manage facility access — 15

https://help.medipyxis.com/admin/user-management/

- **um-01** — live: “Add new staff to a facility, assign the correct role, and — for larger cohorts — run a bulk upload.”
  - Product: Bulk upload is disabled (components/HrBulkUploadModal.tsx:716).
  - Proposed: Add new staff, give each person a role and the facilities they work at, and change their access later.
- **um-f01** — live: “Before you start: You need the admin or superadmin role.”
  - Product: Access is the HR & Compliance feature (user-routes.tsx:731); superadmin is a Medipyxis-staff role.
  - Proposed: You need access to HR & Compliance. Administrators always have it.
- **um-f02** — live: “Roles must already be configured in Organization Role Config before you assign them.”
  - Product: The Role list is a fixed list of ten roles in the form (pages/HRNewUserPage.tsx:2476); Organization Role Config only sets feature access.
  - Proposed: You do not create roles. Every person gets one of the ten roles in the Role list.
- **um-x1** — live: “For bulk upload, prepare a CSV using the template described in Data Import & Export.”
  - Product: Bulk upload is disabled (components/HrBulkUploadModal.tsx:716).
  - Proposed: (remove the bullet)
- **um-f03** — live: “Add a user: Select the correct facility in the Organization Selector.”
  - Product: There is no Organization Selector (no such string in frontend/src); facilities are picked in Facility Assignment on the form.
  - Proposed: Facility Assignment: required. Pick one or more facilities; only facilities you have access to are listed.
- **um-f04** — live: “Email must be unique per organization.”
  - Product: Uniqueness is per login across the whole product: admin-create-user rejects any existing email (functions/admin-create-user/index.ts:359).
  - Proposed: Email: required. A login can exist only once per email address.
- **um-f05** — live: “Phone, Date of Birth, Home Address are optional.”
  - Product: Phone Number is required on the form (pages/HRNewUserPage.tsx:1383).
  - Proposed: Phone Number: required.
- **um-f06** — live: “Role: from the roles seeded in Organization Role Config.”
  - Product: The Role list is hard-coded in HRNewUserPage.tsx, not read from Organization Role Config.
  - Proposed: Role: required; one of Administrator, Clinical Manager, Medical Director, Clinician, Referral Coordinator, Business Development Representative, Business Development Manager, Finance/Accounts Payable, Vendor Coordinator, or Biller.
- **um-f07** — live: “For clinical roles (clinician and provider profession titles such as NP, PA, MD, DO, RN), additional provider fields appear — Profession Title, NPI, and related credential fields. These are hidden for non-clinical roles.”
  - Product: Provider fields show for every role except the listed non-clinical ones, so also for admin, clinical manager and medical director (pages/HRNewUserPage.tsx:910).
  - Proposed: Provider details (Profession Title, Print Name, Initials, NPI Number, address, licence, DEA and signature) are hidden for business development, biller, referral coordinator, finance and vendor coordinator roles. They are required for the Clinician role. The NPI is required when the profession title is MD, DO, NP, PA or DPM.
- **um-f08** — live: “Save. The user is created across all assigned facilities and receives an invite email to set their password.”
  - Product: The button is Create User (pages/HRNewUserPage.tsx:3448). The rest is true.
  - Proposed: Click Create User. The person gets access to each facility you picked and a welcome email with a link to set their password.
- **um-f09** — live: “Assign or change a role after invite: HR & Compliance → Facility Users; find the user by name or email; click Edit next to their row; change the Role dropdown and click Save.”
  - Product: The row button opens the full user form (pages/FacilityUsersPage.tsx:654), where the button is Save Changes; the inline Role edit is unreachable.
  - Proposed: Go to HR & Compliance → Facility Users. Find the person with the search box (name, email, or job title). Click the edit button on their row. The same form opens with their details. Change the Role or the Facility Assignment, then click Save Changes.
- **um-f10** — live: “Changing a role takes effect on the user's next page load. If you demote a user from admin, they lose access to HR & Compliance and Administrator screens.”
  - Product: Clinical manager and BD manager keep Administrator access after a demotion from admin (contexts/FacilityContext.tsx:708); next-page-load timing was not confirmed.
  - Proposed: (remove the paragraph)
- **um-f11** — live: “Bulk Employee Upload: when onboarding a large cohort, navigate to HR & Compliance → Bulk Employee Upload; download the CSV Template; populate it (first name, last name, email, role required; phone, facility assignment, provider fields optional); upload; review the validation preview; confirm.”
  - Product: Bulk Employee Upload is disabled: the tile opens a "temporarily disabled" message (components/HrBulkUploadModal.tsx:716).
  - Proposed: The Bulk Employee Upload tile is still on the HR & Compliance hub, but it opens a message that bulk upload is temporarily disabled. Add people one at a time with New Employee Onboarding.
- **um-f13** — live: “Troubleshooting: Role dropdown is empty — no roles configured yet — complete Role Config first.”
  - Product: The role list is fixed in the form and never empty.
  - Proposed: (remove the row)
- **um-21** — live: “Troubleshooting: "Email already in use" on create — user already exists in the organization — add the existing user to the facility instead of creating a new record.”
  - Product: The message reads "A user with email … already exists." (functions/admin-create-user/index.ts:359), and the check is product-wide, not per organization.
  - Proposed: "A user with email … already exists" on create: the person already has a login. Open them in Facility Users and add the facility in Facility Assignment.

## Post and manage announcements — 15

https://help.medipyxis.com/modules/hr-compliance/announcements/

- **lha-01** — live: “Announcements broadcast a message to your team on their dashboard and in the announcements reader.”
  - Product: Announcements are read on Company Announcements; the Dashboard only has a card linking there (frontend/src/pages/Dashboard.tsx:1406) and does not render announcements.
  - Proposed: Everyone reads announcements on the Company Announcements page, which the View Announcements & Kudos button on the Dashboard opens.
- **lha-03** — live: “You need the admin, hr_admin, or clinical_manager role to post announcements.”
  - Product: There is no hr_admin role. New, Edit and Delete on the Announcements page are enabled only for admin, superadmin and customersupport (frontend/src/pages/HRAnnouncementsPage.tsx:596); a clinical manager cannot post.
  - Proposed: Creating, editing and deleting announcements on the HR & Compliance Announcements page needs an administrator role.
- **lha-05** — live: “Every user in the target audience can react to announcements.”
  - Product: The reader page has no reaction control (no "reaction" anywhere in frontend/src/pages/AnnouncementsReaderPage.tsx). Users can join the Discussion thread and send Kudos.
  - Proposed: Anyone who can open Company Announcements can read announcements, join the discussion, and send Kudos.
- **lha-12** — live: “Audience: Territories — narrow further to a territory (BD reps, home health regions).”
  - Product: Territory targeting was removed from the composer; it always sends an empty territory list (frontend/src/pages/HRAnnouncementComposer.tsx:185).
  - Proposed: Remove the Territories option; the composer offers Send to All Team Members or Select Roles only.
- **lha-14** — live: “Add a link (optional): paste a URL — the reader shows it as a call-to-action button below the body.”
  - Product: The composer has no link field (no link_url or URL input in frontend/src/pages/HRAnnouncementComposer.tsx) and the reader renders no call-to-action button.
  - Proposed: Remove this step; to share a link, paste it into the Message Body (Markdown supported).
- **lha-16** — live: “A scheduled announcement is released at its scheduled moment; scheduled announcements move to the pending queue until their release time.”
  - Product: PRODUCT DEFECT: scheduled announcements are never released. They are saved with status "scheduled" (frontend/src/services/simpleHRService.ts:212); the reader lists only status "sent" (frontend/src/pages/AnnouncementsReaderPage.tsx:284); and nothing changes scheduled to sent — sendAnnouncement exists in the services but no page calls it, and no edge function or cron touches hr_announcements.
  - Proposed: Delivery Settings: Send Immediately, or Schedule for Later with a date and time in your local time zone. A scheduled announcement is saved as Scheduled but is not released at that time, so it does not appear on Company Announcements.
- **lha-17** — live: “Save: immediate announcements appear on every recipient's dashboard right away.”
  - Product: Immediate announcements are saved as sent and appear on Company Announcements (frontend/src/pages/AnnouncementsReaderPage.tsx:284), not on the dashboard.
  - Proposed: Send Immediately: the announcement appears on Company Announcements right away.
- **lha-19** — live: “Kudos are pinned in the reader for a shorter window; Kudos appear pinned at the top when active; they rotate off the pin after 7 days and are still findable via search.”
  - Product: There is no pinning or rotation on the reader (no "pinned" in frontend/src/pages/AnnouncementsReaderPage.tsx); all announcements, Kudos included, are listed newest first (frontend/src/pages/AnnouncementsReaderPage.tsx:301).
  - Proposed: Announcements are listed newest first with a category badge. Each can have a Discussion thread, which is a Team Chat conversation for that announcement.
- **lha-20** — live: “Every user opens Announcements from the top nav or the dashboard tile to see their queue.”
  - Product: Announcements is not in the top bar or sidebar (no /announcements link in AppShell.tsx); it opens from the Dashboard card (frontend/src/pages/Dashboard.tsx:1406).
  - Proposed: Open Company Announcements with View Announcements & Kudos on the Dashboard.
- **lha-22** — live: “Edit: composers and admins reopen an announcement from the composer's edit mode — on the reader page, click your announcement, then ⋯ → Edit. Recipients see the revised body on their next reader refresh.”
  - Product: Edit is on the HR & Compliance Announcements page and enabled only for administrators (frontend/src/pages/HRAnnouncementsPage.tsx:1498, frontend/src/pages/HRAnnouncementsPage.tsx:596); the reader page has no ⋯ menu or Edit.
  - Proposed: Administrators edit and delete on the Announcements page: Edit opens the composer with the current content; Delete, after confirming, removes the announcement permanently.
- **lha-23** — live: “To retract, open ⋯ → Delete. The announcement disappears from the reader; a delete audit row is kept for compliance.”
  - Product: Delete is a hard delete on hr_announcements with no audit insert (frontend/src/services/simpleHRService.ts:397).
  - Proposed: Delete (administrators, on the Announcements page) removes the announcement permanently after you confirm. No copy is kept.
- **lha-24** — live: “Troubleshooting: recipients don't see the announcement — wrong roles selected or user has no facility grant — recheck target roles; confirm the recipient has access to this facility.”
  - Product: The reader query filters by facility and status only (frontend/src/services/simpleHRService.ts:44, frontend/src/services/simpleHRService.ts:47); target roles are not applied when reading in the app (database policies on hr_announcements predate repo history and were not inspected). Wrong roles is not shown to hide an announcement; facility access is.
  - Proposed: Recipients don't see the announcement: confirm they work at this facility, and that it was sent immediately (scheduled announcements are not released).
- **lha-25** — live: “Troubleshooting: scheduled announcement did not fire — scheduled time was in the past when saved — reschedule to a future time and save again.”
  - Product: Scheduled announcements never fire, whatever the time (see lha-16; frontend/src/services/simpleHRService.ts:212).
  - Proposed: Troubleshooting: a scheduled announcement never appeared — scheduled announcements are not released automatically yet; post it again with Send Immediately.
- **lha-26** — live: “Troubleshooting: attachment won't upload — file over 25 MB or unsupported type — split the file or convert to PDF; retry.”
  - Product: The composer limit is 10 MB per file (frontend/src/pages/HRAnnouncementComposer.tsx:394).
  - Proposed: Attach files if needed (PDF, JPG, PNG, DOC or DOCX, up to 10 MB each).
- **lha-27** — live: “Troubleshooting: Kudos not showing in reader — facility's Kudos rotation window elapsed — Kudos rotate off the pin after 7 days; still findable via search.”
  - Product: No Kudos pin or rotation exists (no "pinned" in frontend/src/pages/AnnouncementsReaderPage.tsx).
  - Proposed: Announcements are listed newest first with a category badge. Each can have a Discussion thread, which is a Team Chat conversation for that announcement.

## Reconcile vendor invoices in Accounts Payable — 15

https://help.medipyxis.com/modules/inventory/accounts-payable/

- **inv-ap-01** — live: “You must have the finance_ap or admin role to open Accounts Payable.”
  - Product: The page is gated only by the Inventory feature: user-routes.tsx:2276-2280 wraps <AccountsPayablePage /> in <FeatureAccess feature="Inventory">, and AccountsPayablePage.tsx has no role check. Any role with the Inventory feature (e.g. clinician, vendor_coordinator) can open it. The write actions are role-gated: ap-match-invoice-line, ap-record-payment, ap-open-dispute and ap-resolve-dispute allow only admin, finance_ap and superadmin (index.ts:9-10).
  - Proposed: Anyone whose role has the Inventory feature can open Accounts Payable. Matching lines, recording payments, and opening or resolving disputes need the finance_ap or admin role.
- **inv-ap-02** — live: “The products on the invoice should already exist in the Product Catalog and have been received into inventory.”
  - Product: Advice, not product behaviour. Nothing in the Inbox or Matching code (AccountsPayablePage.tsx, InvoiceLineMatchRow.tsx, ap-match-invoice-line) checks invoice lines against the catalog or against received stock, so no code check can confirm it.
- **inv-ap-03** — live: “The finance_ap role grants access to Accounts Payable and to cost data in inventory.”
  - Product: No inventory page or the AP page checks finance_ap. Access is by the Inventory feature flag (FeatureAccess); finance_ap's real effect is on the AP write edge functions (ALLOWED_ROLES in ap-*/index.ts:9-10). No cost-data gate tied to finance_ap was found.
  - Proposed: The finance_ap role can match invoice lines, record payments, and open or resolve disputes in Accounts Payable.
- **inv-ap-04** — live: “Users with only vendor_coordinator or clinical roles see inventory units but not cost or AP information.”
  - Product: AccountsPayablePage.tsx has no role check; the route needs only the Inventory feature (user-routes.tsx:2276-2280), which vendor_coordinator and clinical roles have (ROLE_PERMISSIONS.INVENTORY_ACCESS, _shared/auth-helpers.ts:307). They can open AP and see invoices; only the write calls are refused.
  - Proposed: Remove the sentence, or: Users without finance_ap or admin can open Accounts Payable if their role has the Inventory feature, but cannot match, pay, or dispute invoices.
- **inv-ap-05** — live: “Assign finance_ap in Administrator → Organization Role Config to staff responsible for invoice reconciliation.”
  - Product: Organization Role Config (OrgRoleConfigPage.tsx) sets which features each role may open (upsertAllRoleConfigs over a ROLES list that includes finance_ap, lines 26-37). It does not assign roles to users. A user's role is picked on the user record, e.g. FacilityUsersPage.tsx:80 { value: "finance_ap", label: "Finance AP" }.
  - Proposed: Give staff the Finance AP role on their user record. Administrator → Organization Role Config sets which features each role, including finance_ap, can open.
- **inv-ap-07** — live: “Accounts Payable is at the route /facility/{facility_uuid}/inventory/accounts-payable.”
  - Product: There is no facility-scoped AP route. The page is at /inventory/accounts-payable (user-routes.tsx:2276) and the hub tile links there (InventoryManagement.tsx). /facility/:facilityId/billing/accounts-payable is a different page (ClinicApPage).
  - Proposed: Open Accounts Payable from the Inventory Management hub (route /inventory/accounts-payable).
- **inv-ap-10** — live: “On the Matching tab you match invoice lines to received shipments; unmatched lines are surfaced so you can reconcile quantities and prices.”
  - Product: Matching never reads shipments. The tab lists unmatched invoice lines with product, SKU, lot, box UID, quantity, unit cost, patient, provider and case (InvoiceLineMatchRow.tsx:108-119), and the user marks each one Match, Review, or Override (InvoiceLineMatchRow.tsx:136-150). The lines are tied to use events and billing links, not shipments.
  - Proposed: The Matching tab lists every unmatched invoice line with its product, SKU, lot, quantity, cost, patient and provider. Mark each line Match, Review, or Override.
- **inv-ap-13** — live: “Resolve a dispute by re-matching against a corrected invoice or by recording the vendor's credit.”
  - Product: A dispute is resolved with one of three outcomes: credit_issued, invoice_voided, invoice_upheld (AccountsPayablePage.tsx Disputes tab; shown as "credit issued", "invoice voided", "invoice upheld"). credit_issued and invoice_voided set the invoice to cancelled; invoice_upheld sets it back to matched (ap-resolve-dispute/index.ts:86-94). There is no re-match against a corrected invoice.
  - Proposed: Resolve a dispute with one of three outcomes: credit issued or invoice voided (the invoice is cancelled), or invoice upheld (the invoice returns to matched).
- **inv-ap-16** — live: “In the Inbox, review each incoming invoice — vendor, invoice number, date, and amount — and open it to see its lines.”
  - Product: Opening an Inbox invoice shows a drawer with invoice #, status, invoice date, due date, total, ownership and notes, plus Begin Matching and Open Dispute (AccountsPayablePage.tsx drawer). The lines themselves are not shown; the list card shows only a line count. Line rows appear only on the Matching tab.
  - Proposed: In the Inbox, review each incoming invoice — vendor, invoice number, date, line count, and amount. Open it to see its details, then click Begin Matching.
- **inv-ap-17** — live: “Lines whose quantity and price agree reconcile cleanly; the Unmatched Lines view lists anything that doesn't.”
  - Product: Nothing compares quantity or price. ap-match-invoice-line only sets match_status to what the user chose (matched, needs_review, overridden; index.ts:44) and sets the invoice to matched once every line is matched or overridden (index.ts:106-107). A line stays on Unmatched Lines until a person acts on it.
  - Proposed: A line stays on the Unmatched Lines list until someone marks it Match or Override. When every line is matched or overridden, the invoice becomes matched.
- **inv-ap-18** — live: “Once an invoice is matched and reviewed, approve it so it's eligible for payment.”
  - Product: The Inventory AP workspace has no Approve action. Matched invoices go straight onto the Payments tab (status filter at AccountsPayablePage.tsx:215 includes matched). Approval exists only on the separate clinic AP page (/facility/:facilityId/billing/accounts-payable, via clinic-invoice-respond).
  - Proposed: Once every line is matched, the invoice appears on the Payments tab, ready for payment.
- **inv-ap-22** — live: “Receiving a shipment (through a category tile) creates the inventory units (UINs); Accounts Payable reconciles and pays the vendor invoice for those units.”
  - Product: The category tiles open /inventory-management/product-batches/<category>, whose receiving flows (ManualReceiveModal, BulkUploadOrderModal, inventory-import-batches) create inventory_product_batches_v2 rows. That table has no UIN column; UIN exists only on the legacy amniotic_inventory_items / biologics_inventory_items tables.
  - Proposed: Receiving a shipment through a category tile creates the inventory records (lots) in stock; Accounts Payable reconciles and pays the vendor invoice for them.
- **inv-ap-23** — live: “Troubleshooting: if Accounts Payable is not accessible, your role does not include finance_ap or admin.”
  - Product: Opening the page depends on the Inventory feature, not finance_ap/admin (user-routes.tsx:2276-2280). A user without the Inventory feature sees the Access Denied page with "Restricted: Inventory" (FeatureAccess.tsx).
  - Proposed: If Accounts Payable is not accessible, your role does not have the Inventory feature. Ask an admin to grant it in Administrator → Organization Role Config.
- **inv-ap-24** — live: “Troubleshooting: an invoice has unmatched lines because the received quantity or price differs from the invoice.”
  - Product: Lines are unmatched until a person marks them; no quantity or price comparison exists (ap-match-invoice-line/index.ts:38-46). Same root as inv-ap-17.
  - Proposed: An invoice has unmatched lines until someone marks each line Match or Override on the Matching tab; if the vendor is wrong, open a dispute.
- **inv-ap-25** — live: “Troubleshooting: if a vendor's match rate looks low, review the vendor's recent invoices on Reports.”
  - Product: The Reports tab ("Vendor Spend Summary (YTD)") shows one aggregate row per vendor — Vendor, Total Invoiced, Total Paid, Total Disputed, Match Rate — and no list of invoices (AccountsPayablePage.tsx Reports section). Match rate = (matched + paid) / all invoices.
  - Proposed: If a vendor's match rate looks low on Reports, review that vendor's invoices on the Inbox and Matching tabs and follow up with the vendor.

## Manage products in the Product Catalog — 15

https://help.medipyxis.com/modules/inventory/product-catalog/

- **inv-pc-01** — live: “You must have the vendor_coordinator or admin role to add or edit products.”
  - Product: No role check: Products.tsx, AddEditProduct.tsx and ProductCatalog.tsx never test the role. Any user with the Inventory feature can open /inventory-management/product-catalog (user-routes.tsx:2132) and add or edit products. The save is a direct PostgREST insert/update on inventory_product_catalog_v2 (AddEditProduct.tsx:903-918).
  - Proposed: Anyone whose role has the Inventory feature can add or edit products.
- **inv-pc-03** — live: “Product Catalog table columns: NAME, BRAND, SKU, LOT SUFFIX, CATEGORY, TYPE, HCPCS, STATUS.”
  - Product: The headers are Product Name, Brand, SKU, Lot No. Suffix, Category, Product Type, HCPCS, Status, Actions (Products.tsx:584-615, shown uppercase).
  - Proposed: Product Catalog columns: PRODUCT NAME, BRAND, SKU, LOT NO. SUFFIX, CATEGORY, PRODUCT TYPE, HCPCS, STATUS.
- **inv-pc-04** — live: “Use the search bar above the table to filter by any column value.”
  - Product: Search matches only product name, brand and HCPCS: product_name.ilike / brand.ilike / hcpcs_code.ilike (Products.tsx:117). Category and status have separate filters.
  - Proposed: Use the search bar to find products by name, brand, or HCPCS code; filter by category and status with the dropdowns.
- **inv-pc-05** — live: “SKU must be unique within your facility.”
  - Product: Uniqueness is per SKU + Lot No. Suffix within a category at the facility (AddEditProduct.tsx:802-815, error "This SKU and Lot No. Suffix combination already exists"). The same SKU can exist with a different suffix or in another category.
  - Proposed: The SKU and Lot No. Suffix combination must be unique within a category at your facility.
- **inv-pc-06** — live: “LOT SUFFIX is the suffix pattern appended to manufacturer lot numbers, used during receiving to validate lot strings.”
  - Product: Receiving does not validate lots against the suffix. On bulk upload a suffix only makes the lot number required (BulkUploadOrderModal.tsx:1158-1183).
  - Proposed: LOT NO. SUFFIX — when a product has one, bulk receiving requires a lot number for it.
- **inv-pc-09** — live: “HCPCS is required for Amniotic / Advance Treatment and Biologics / Matrix products; optional for Conservative Care Products.”
  - Product: HCPCS is optional for every category: both schemas end hcpcs_code with .optional().or(z.literal("")) (AddEditProduct.tsx:79-86, 151-158) and the label has no asterisk (line 1347). When entered it must be one letter + 4 digits. HCPCS/Q code becomes required later, at receiving, for amniotic and biologics (ManualReceiveModal.tsx:402).
  - Proposed: HCPCS is optional on the product for every category (format: one letter and four digits, e.g. A6402). Amniotic and biologic units need an HCPCS/Q code when received.
- **inv-pc-10** — live: “STATUS: Active — available for ordering and use; Inactive — hidden from clinician views and the receiving workflow but retained.”
  - Product: Manual Receive's catalog list (Direct to Main Stock) filters only is_deleted, not is_active (ManualReceiveModal.tsx:189-194), so inactive products are still offered at receiving. The IVR request product list (IVRInventoryRequestModal.tsx:467-476) also has no is_active filter.
  - Proposed: STATUS: Active or Inactive. Inactive products stay in the catalog for history. Note: Inactive products can still appear in Manual Receive.
- **inv-pc-11** — live: “Click Add Product in the upper-right corner; the modal opens with a single Category dropdown, and the form expands once a category is selected.”
  - Product: The first step is a set of category cards titled "Select Product Category" — "Choose the category for your new product", each with a Create Product button (AddEditProduct.tsx STEP 1). A "← Change Category" link returns to it. There is no dropdown.
  - Proposed: Click Add Product. Pick a category card under Select Product Category; the form for that category opens.
- **inv-pc-12** — live: “Required fields include Name, Brand, SKU (no spaces), LOT Suffix (e.g., A1, RF), and Type; Status Active or Inactive.”
  - Product: For Amniotic and Biologics the Lot No. Suffix is required and must be '-' plus exactly three digits, e.g. -001 (AddEditProduct.tsx:159-166); A1 or RF is rejected. For Conservative/PRP/UM it is optional and digits only. Vendor is also required for every category (line 1487). Status is shown only for Amniotic and Biologics (line 2335).
  - Proposed: Required: Product Name, Brand, Product Type (not for PRP/UM), SKU (letters, numbers and dashes), and Vendor. For Amniotic and Biologics, Lot No. Suffix is required as '-' plus three digits (e.g. -001), and you set Status Active or Inactive.
- **inv-pc-13** — live: “Click Save; the new product appears in the Product Catalog table.”
  - Product: The button reads "Save Product" ("Update Product" when editing), not "Save".
  - Proposed: Click Save Product.
- **inv-pc-14** — live: “Bulk upload accepts a free-form spreadsheet and does not require a purchase order.”
  - Product: True only for Conservative, PRP and UM. Amniotic and Biologics bulk upload still uses the order-tethered modal (ProductBatchesManagement.tsx:231-250).
  - Proposed: For Conservative Care, PRP and UM, bulk upload accepts a free-form spreadsheet and does not require a purchase order; Amniotic and Biologics bulk upload is tied to an order.
- **inv-pc-15** — live: “An Active product is immediately available in the receiving workflow and in the Visit Wizard product selector.”
  - Product: Not checkable as written: neither the Manual Receive catalog list nor the IVR product list filters on is_active (see inv-pc-10), so availability does not depend on Active.
- **inv-pc-17** — live: “Changing a product's HCPCS code after units have been received affects future claims only.”
  - Product: No code path ties catalog or unit HCPCS to claim lines (see inv-mi-10); cannot be confirmed.
- **inv-pc-18** — live: “Troubleshooting: the Save button remains disabled when a required field is empty; required fields are marked with a red asterisk.”
  - Product: Save Product is disabled only while submitting (AddEditProduct.tsx:2434). Empty or invalid fields show inline errors on submit. Required fields do carry a red asterisk.
  - Proposed: If Save Product shows errors, fix the fields marked in red; required fields have a red asterisk.
- **inv-pc-20** — live: “Troubleshooting: HCPCS field not visible when Conservative Care Products is selected; scroll to the optional fields section.”
  - Product: The HCPCS Code field is in the shared Product Information block for all categories (AddEditProduct.tsx:1344-1366); it is not hidden for Conservative.
  - Proposed: Remove this row.

## Compose and send an outbound fax — 15

https://help.medipyxis.com/modules/more-fax/send-fax/

- **sfl-01** — live: “Send a fax directly from Medipyxis and track its delivery status from the Send Fax Logs.”
  - Product: The outbound log is titled Outgoing Fax Logs (MorePage.tsx frontend/src/pages/MorePage.tsx:97; FaxLogsPage.tsx frontend/src/pages/FaxLogsPage.tsx:403); no page says Send Fax Logs.
  - Proposed: Send a fax from Medipyxis and track its delivery in Outgoing Fax Logs.
- **sfl-03** — live: “The document you want to fax is either stored in Medipyxis (attached to a referral or patient record) or available as a PDF on your device.”
  - Product: Chart documents come from the patient's chart only (progress notes and documents, ChartDocumentPicker.tsx frontend/src/components/fax/ChartDocumentPicker.tsx:22); local files may be PDF, JPG, PNG, DOC or DOCX (frontend/src/utils/fax/faxPartsPlan.ts:65).
  - Proposed: Before you start: you have the recipient's fax number, a 10-digit US number; the documents are on your device (PDF, JPG, PNG, DOC or DOCX), or on the patient's chart in Medipyxis.
- **sfl-04** — live: “Steps 1–2: Open the Fax Center. Click New Fax (top-right).”
  - Product: New Fax is on the Outgoing Fax Logs page (FaxLogsPage.tsx frontend/src/pages/FaxLogsPage.tsx:439), not on the Fax Center page (MorePage.tsx has no New Fax button).
  - Proposed: Open Outgoing Fax Logs: click Fax Center in the sidebar, then the Outgoing Fax Logs tile. Click New Fax (top-right).
- **sfl-05** — live: “Enter the recipient fax number. Type or paste the 10-digit number. Include area code; do not use dashes or parentheses.”
  - Product: Formatting characters are stripped before validation (faxPartsPlan.ts frontend/src/utils/fax/faxPartsPlan.ts:111), so dashes and brackets are fine; a number the clinic faxed before can be picked.
  - Proposed: Enter the recipient under To: type the fax number, or pick a number your clinic has faxed before. Spaces, dashes and brackets are fine.
- **sfl-06** — live: “Select or upload the document. From Medipyxis: click Browse Documents to search documents attached to referrals or patient records. From your device: click Upload File and select a PDF (maximum 25 MB, 100 pages).”
  - Product: The New Fax window has Attach Files (frontend/src/components/fax/NewFaxModal.tsx:329) accepting PDF/JPG/PNG/DOC/DOCX up to 25 MB each and 50 MB total (frontend/src/utils/fax/faxPartsPlan.ts:52), and a Patient picker for chart documents; no Browse Documents or Upload File button, and no 100-page limit.
  - Proposed: Under Attach Files, click to upload or drag and drop. Each file can be up to 25 MB, and one fax up to 50 MB in total. Search for the Patient by name or MRN, then tick documents under Include other documents from the patient's chart. Signed progress notes are listed as Progress note. One fax can carry up to 10 documents.
- **sfl-07** — live: “Add a cover sheet (optional). Toggle Include Cover Sheet on. Fill in To (recipient name and organization), From (your name and facility, pre-populated from your profile), Re (subject line) and Notes (free-text message body on the cover sheet).”
  - Product: Every fax gets the clinic's cover page built from Fax Settings (frontend/src/components/fax/NewFaxModal.tsx:170); there is no toggle or To/From/Re fields. Notes (max 500) print on the cover (frontend/src/components/fax/NewFaxModal.tsx:382). From is the clinic fax number, read-only.
  - Proposed: Type up to 500 characters in Notes. They print on the cover page. Medipyxis adds a cover page to every fax. It uses your clinic's Fax Settings (logo, practice name, return numbers) and lists the documents in the fax. From shows your clinic's fax number and cannot be changed here.
- **sfl-08** — live: “Review the page count. The page count shown includes the cover sheet if you toggled it on. Confirm it matches expectations before sending.”
  - Product: NewFaxModal.tsx shows no page count anywhere (case-insensitive 'page count' has no hit).
  - Proposed: (Remove this step: the New Fax window does not show a page count.) Medipyxis adds a cover page to every fax. It uses your clinic's Fax Settings (logo, practice name, return numbers) and lists the documents in the fax.
- **sfl-09** — live: “Click Send Fax. The system queues the fax immediately.”
  - Product: The button is Send Now (NewFaxModal.tsx frontend/src/components/fax/NewFaxModal.tsx:410).
  - Proposed: Click Send Now. A message confirms "Fax submitted. Delivery shows in Fax Logs." The fax appears in Outgoing Fax Logs, and its status changes as the fax service reports back.
- **sfl-10** — live: “Result: the fax appears in the Fax Center with pending status. The fax service updates the status as it progresses.”
  - Product: Sent faxes are listed on Outgoing Fax Logs (FaxLogsPage.tsx), not on the Fax Center page; the confirmation reads "Fax submitted. Delivery shows in Fax Logs." (frontend/src/components/fax/NewFaxModal.tsx:214).
  - Proposed: A message confirms "Fax submitted. Delivery shows in Fax Logs." The fax appears in Outgoing Fax Logs, and its status changes as the fax service reports back.
- **sfl-12** — live: “Status failed: delivery failed after retry attempts; the log shows the failure reason.”
  - Product: The failure reason is shown on hover (frontend/src/pages/FaxLogsPage.tsx:691), but Medipyxis does not retry automatically: retry is a manual Retry button, capped at 3 (backend/supabase/functions/fax-center/index.ts:438).
  - Proposed: Failed: the fax did not go through. Hover over the status to see the error, then click Retry (up to 3 retries).
- **sfl-13** — live: “Track delivery: open the Fax Center and locate your fax row. Click the row to see the detailed status: timestamp of each transmission attempt, error codes (if any), and the recipient number dialed.”
  - Product: Rows are on Outgoing Fax Logs; clicking a row opens Audit History of actions with time and user (FaxLogsPage.tsx frontend/src/pages/FaxLogsPage.tsx:682), not transmission attempts, error codes or the dialed number.
  - Proposed: Open Outgoing Fax Logs and find your fax. Click the row (or View audit history in the Actions column) to open its audit history: each action on the fax, with its time and who did it.
- **sfl-14** — live: “If status is Failed: click Retry to resend, or Edit to correct the fax number before retrying.”
  - Product: There is no Edit action on a fax log row; Retry only (FaxLogsPage.tsx frontend/src/pages/FaxLogsPage.tsx:771).
  - Proposed: If the status is Failed, click Retry to send it again (up to 3 retries). To fix a wrong number, send a new fax.
- **sfl-16** — live: “Troubleshooting: fax status stuck on Pending for > 30 minutes (carrier delay or recipient machine busy) — wait 10 more minutes, then click Retry.”
  - Product: Retry is shown only for failed faxes (FaxLogsPage.tsx frontend/src/pages/FaxLogsPage.tsx:763); a pending fax can only be cancelled.
  - Proposed: Troubleshooting: Fax still Pending after 30 minutes — the fax service has not reported back yet. Wait. A pending fax can be cancelled; Retry appears only once a fax has failed.
- **sfl-17** — live: “Troubleshooting: upload fails — file exceeds 25 MB or is not PDF format; compress or convert the file before uploading.”
  - Product: JPG, PNG, DOC and DOCX are accepted too (frontend/src/utils/fax/faxPartsPlan.ts:65), with a 50 MB total and 10-document cap.
  - Proposed: Troubleshooting: A file is refused — not PDF, JPG, PNG, DOC or DOCX; over 25 MB; over 50 MB in total; or more than 10 documents.
- **sfl-18** — live: “Troubleshooting: Send button disabled — no document selected; select or upload a document before clicking Send Fax.”
  - Product: Send Now stays enabled and shows an error when nothing is attached (NewFaxModal.tsx frontend/src/components/fax/NewFaxModal.tsx:156).
  - Proposed: Troubleshooting: "Attach a file or pick a document from the chart before sending." — no document attached.

## Use the LCD compliance status and review — 15

https://help.medipyxis.com/modules/visit-wizard-ehr/lcd-navigator/

- **lcd-03** — live: “Sections completed: a count of complete steps out of 17 (for example, "10 of 17 sections completed"). Result: the banner shows 17 of 17 sections completed.”
  - Product: The bar shows "{n} Complete" and "{n} Pending" (VisitWizardV4.tsx:16807 and 16866), where Pending is 17 minus Complete; the words "of 17 sections completed" never appear.
  - Proposed: The bar shows how many of the 17 steps are Complete and how many are still Pending (for example, "10 Complete • 7 Pending").
- **lcd-04** — live: “Flagged for review: the number of steps that still need attention before final submission.”
  - Product: The bar shows "{n} Flagged" only when at least one step is flagged (VisitWizardV4.tsx:16817). It counts flagged steps, not steps that need attention.
  - Proposed: Flagged: appears only when one or more steps are flagged, and shows how many.
- **lcd-06** — live: “The bar turns red/pink when any steps are still pending and reminds you to review flagged sections before final submission.”
  - Product: The bar does not turn red as a whole and shows no reminder. Each pending step is one pink segment in the track (bg-red-200, VisitWizardV4.tsx:16834). Complete steps are green and flagged steps are yellow.
  - Proposed: In the progress track, each complete step is a green segment, each flagged step is yellow, and each pending step is pink.
- **lcd-07** — live: “Each of the 17 steps shows one of three statuses: Completed, Needs Attention, Pending.”
  - Product: getStatusText returns five statuses: Completed, Needs Attention, For Review, In Progress, Pending (VisitWizardV4.tsx:11248-11256).
  - Proposed: Each step shows one of five statuses: Completed (green), Needs Attention (red), For Review (yellow, flagged), In Progress (blue, the open step), or Pending (gray).
- **lcd-09** — live: “Needs Attention steps show red/pink with an orange warning.”
  - Product: Needs Attention uses a red warning icon (text-red-600, VisitWizardV4.tsx:11278). No orange icon is used in the step status.
  - Proposed: Needs Attention (red, with a red warning icon): the section has a validation gap.
- **lcd-11** — live: “Pending means the section hasn't been started yet.”
  - Product: getSectionStatus returns only "complete" or "pending" (VisitWizardV4.tsx:6202). A section that has been started but is not complete also shows Pending.
  - Proposed: Pending (gray): the section is not complete yet. This includes sections you have started.
- **lcd-12** — live: “Every step row has three actions: Complete (disabled once completed), Fix (jumps to the section), and Flag. Walk-through: click Fix on that step.”
  - Product: Step rows have no Fix or Flag control. Each section has a "Mark as Complete" button inside it, which turns into "Edit Again" once marked (SectionCompleteButton.tsx:165). You open a step by clicking its row in the accordion (VisitWizardV4.tsx:16945).
  - Proposed: Click a step to open it. Inside the step, Mark as Complete confirms the section is done; Edit Again reopens it.
- **lcd-13** — live: “Flag marks the section for review, for example for your medical director.”
  - Product: The wizard passes onSectionFlagged to LCDAuditReviewVisit (VisitWizardV4.tsx:18636), but the component never reads it (LCDAuditReviewVisit.tsx:45-50). Flags only come from a saved draft's section_16 record (VisitWizardV4.tsx:14006).
  - Proposed: There is no Flag button. A step shows For Review only when a saved draft already has it flagged.
- **lcd-15** — live: “The full 17-step list shows step 14 as "Medication Management".”
  - Product: The step list heading for step 14 reads "Current Medication" (VisitWizardV4.tsx:18449). "Medication Management" appears only in the progress-track tooltip.
  - Proposed: Step 14 appears as Current Medication in the step list (Medication Management in the progress-track tooltip).
- **lcd-18** — live: “In step 16 you review the AI Visit Summary card: Patient Overview, Treatment Summary, Clinical Findings, Recommendations, Overall Assessment.”
  - Product: There is no AI Visit Summary. openaiService.generateVisitSummary (openaiService.ts:180) has no caller. Step 16 renders LCDAuditReviewVisit (VisitWizardV4.tsx:18631): an audit-readiness line, a patient-level compliance card, and a findings row for each wound.
  - Proposed: Step 16 shows the coverage-policy findings for the visit: a patient-level card and a findings row for each wound.
- **lcd-19** — live: “Anything left in the AI Visit Summary becomes part of your signed note; the summary regenerates on save.”
  - Product: No AI Visit Summary exists in the release. generateVisitSummary is never called (openaiService.ts:180), so nothing from it reaches the note.
  - Proposed: Remove the AI Visit Summary paragraph and the matching troubleshooting row; the wizard has no AI Visit Summary.
- **lcd-20** — live: “The Sections Status banner shows overall progress (continue until it shows all 17 complete with 0 flagged).”
  - Product: There is no "Sections Status" banner. The progress bar is titled "LCD Compliance Status" (VisitWizardV4.tsx:16787).
  - Proposed: Continue until the LCD Compliance Status bar shows 17 Complete and 0 Pending.
- **lcd-22** — live: “The compliance result is in the encounter audit log and is available to medical directors and billers for review.”
  - Product: Cannot be confirmed from code. The result is stored on the visit row (section_16_lcd_audit_review) and read by wound-cockpit-load, but no audit-log entry or medical-director/biller review screen for it was found; who can see it depends on route access and data.
- **lcd-23** — live: “Roadmap: the ambient LCD badge (green/amber/red) is planned but not yet live.”
  - Product: One ambient LCD badge is live in the LCD Compliance Status header (VisitWizardV4.tsx:16797). It shows green "All clear", amber with a flag count, or grey while checking; red cannot be reached (LCDAmbientBadge.tsx:9-11). It re-checks 1.2 s after form changes (AmbientBadgeMount.tsx:27). Badges on every section are not built.
  - Proposed: One LCD badge is live in the LCD Compliance Status header: green (All clear), amber (with a flag count) or grey (checking). A badge at the top of every section is planned.
- **lcd-26** — live: “Roadmap: named Navigator checks (a discrete, reviewable list of compliance checks: medical necessity, conservative-care duration, NCCI/MUE edits, modifier validity) are planned but not yet live.”
  - Product: Not checkable as worded. Step 16 already renders a list of patient-level and per-wound findings (LCDAuditReviewVisit.tsx), so whether the named-check list is live depends on which checks the page means, which code cannot settle.

## Charge Master and the $0.00 claim guard — 14

https://help.medipyxis.com/modules/billing/charge-master-and-zero-dollar-guard/

- **cm-01** — live: “Medipyxis will not let a claim leave the system for $0.00 — not one line at $0, not a claim total at $0, no escape hatch.”
  - Product: The $0.00 guard runs only inside submitToStedi (backend/supabase/functions/_shared/submitToStedi.ts:265), the shared core of submit-to-stedi, submit-claim and biller-submit-claim-onbehalf. Mark as Submitted, Fix & Resubmit and Send Fax (frontend/src/pages/BillingClaimDetailPage.tsx:794-870, backend/supabase/functions/mark-claim-submitted) run only the coding-fact check; a $0 claim can be faxed or marked submitted.
  - Proposed: Medipyxis will not send a claim to Stedi for $0.00 — not one line at $0, not a claim total at $0, no escape hatch.
- **cm-02** — live: “You have the biller or admin role.”
  - Product: Not checkable as a role: the Charge Master route is gated by the "Billing Operations" feature (RequireFeature + FeatureAccess, frontend/src/user-routes.tsx:1014-1022), not by a biller/admin role check. Which roles carry that feature is tenant data.
  - Proposed: You have access to Billing Operations.
- **cm-06** — live: “Templates: Superbill templates (fixed CPT/HCPCS/ICD-10 code lists) you attach to visit types.”
  - Product: A template is a name, description and active flag plus codes picked from the facility's superbill code list (frontend/src/pages/ChargeMasterPage.tsx:160-195). There is no visit-type link; templates are read by the billing code picker (frontend/src/components/claims/BillingCodeEntry.tsx:175) and the claim editor, not the visit wizard.
  - Proposed: Templates: named superbill templates that group codes from the facility's superbill code list.
- **cm-13** — live: “Two rules stop a $0.00 claim from ever reaching a payer, and both are named requirements from [billing lead] (2026-08-27).”
  - Product: Only the claim-total rule is recorded as a named requirement dated 2026-08-27 (backend/supabase/functions/_shared/validateClaimLineCharges.ts:162-166). The per-line rule carries no attribution in code; who asked for it cannot be checked. Name withheld here (zero-PHI/people rule).
  - Proposed: Two rules stop a $0.00 claim from being sent to Stedi.
- **cm-18** — live: “This guard exists because on 2026-08-27, right before go-live, the biller-facing pricing path was reading the wrong dollar-amount key on the service line: the 837P builder wrote charge_amount, the reader looked for lineItemChargeAmount, and every claim went through with $0 lines. The whole prod set — 1,134 claims — priced at $0.”
  - Product: The guard's record (backend/supabase/functions/_shared/validateClaimLineCharges.ts:17-21) says 85 of 85 production service lines on 2026-08-26 carried no charge key at any spelling the transforms read (charge_amount / line_item_charge / charges / charge), so every line defaulted to 0 — not a charge_amount vs lineItemChargeAmount mismatch. 1,134 is the row count of the legacy DrChrono-import claims table (frontend/src/pages/__tests__/procureS2.deadBillingScreens.contract.test.ts:17), not a count of $0 claims.
  - Proposed: This guard exists because, checked on 2026-08-26 just before go-live, all 85 service lines on production carried no charge at any key the 837P transforms read, so every line defaulted to $0.
- **cm-19** — live: “The guard is now permanent, on both the electronic path AND the manual paths (Mark as Submitted, Fix & Resubmit, Send Fax).”
  - Product: The manual paths run checkClaimCodingFacts (coding facts: MUE, POS, units), not the $0 guard: frontend/src/pages/BillingClaimDetailPage.tsx:798 and :849 (Send Fax, Mark as Submitted, Fix & Resubmit); mark-claim-submitted has no charge check. Only submitToStedi.ts:265 runs validateClaimLineCharges.
  - Proposed: The guard runs on every electronic submission (Submit to Stedi, and the submit-claim and biller on-behalf paths, which share the same core). The manual paths (Mark as Submitted, Fix & Resubmit, Send Fax) do not run the $0.00 guard; they run the coding-fact check.
- **cm-22** — live: “It now reads: Claim Not Submitted — Claim cannot be submitted — No price on file for CPT 97597 at <facility> — add it in Charge Master.”
  - Product: The toast body is stediResult.errors joined one per line (frontend/src/pages/NewBillingSubmitPage.tsx:5103-5108); the errors are the individual messages, without the "Claim cannot be submitted —" summary prefix (that prefix lives only on result.message, submitToStedi.ts:375).
  - Proposed: It now reads: Claim Not Submitted — No price on file for CPT 97597 at <facility> — add it in Charge Master.
- **cm-24** — live: “Click Add code → enter the CPT/HCPCS → enter the per-unit dollar amount → Save.”
  - Product: The button is "Add Charge" (frontend/src/components/billing/ChargeRateTable.tsx:233) and the new-charge dialog's confirm button reads "Create" (frontend/src/components/billing/ChargeEditDialog.tsx:283; "Save" only when editing an existing charge).
  - Proposed: Click Add Charge → enter the CPT/HCPCS code → enter the per-unit dollar amount → Create.
- **cm-25** — live: “Return to the claim in New Claim or the Coding Review drawer. Refresh the claim (or click Save & Next and come back). The price now hydrates onto the line, and the Expected Total is a real number.”
  - Product: The Coding Review drawer hydrates codes and charges from the stored claim (resolveClaimCodes, frontend/src/components/billing/CodingReviewDrawer.tsx:241-262) and never calls the Charge Master; update-claim-codes saves whatever charge the line carries. Only New Claim prices lines from Charge Master, when a visit is selected and the row has no charge yet (frontend/src/pages/NewBillingSubmitPage.tsx:1752-1782).
  - Proposed: Return to the claim in New Claim and select the visit again: lines with no charge are priced from Charge Master. The Coding Review drawer shows the charge saved on the claim and does not re-read Charge Master; there, type the price into the line's charge box and Save.
- **cm-26** — live: “The Templates tab is not a pricing surface — it holds superbill templates: fixed lists of CPT/HCPCS/ICD-10 codes you attach to visit types so a clinician sees the right code menu on the wizard. Templates carry no dollar amounts; those still come from Insurance Charges and Self-Pay Charges.”
  - Product: Templates and their codes are read only by billing surfaces (BillingCodeEntry.tsx:175, NewBillingSubmitPage.tsx:688, update-claim-codes), not the visit wizard, and there is no visit-type link. Template codes (client_superbill_code) carry a default_charge that the code picker shows and can seed into the line's charge (frontend/src/components/claims/BillingCodeEntry.tsx:336-337, :609-611; update-claim-codes/buildCodedPayload.ts:51-53). Claim auto-pricing uses facility_charge_master.
  - Proposed: The Templates tab groups the facility's superbill codes into named templates for the billing code picker. A superbill code can carry a default charge that the picker offers; automatic claim pricing comes from Insurance Charges and Self-Pay Charges.
- **cm-27** — live: “Any missing price surfaces immediately, in the biller's words, on the exact line that lacks a rate. When a biller adds the price, the same claim goes through on the next attempt with no code changes needed.”
  - Product: Adding a Charge Master row does not re-price a claim that is already saved: the submit core is a pure payload check with no DB read (submitToStedi.ts, validateClaimLineCharges.ts:52-60), and neither the drawer nor update-claim-codes reads the Charge Master. The line's charge must be put on the claim (re-select the visit in New Claim, or type it in) before the next attempt passes.
  - Proposed: Any missing price surfaces before the claim is sent, in the biller's words, naming each code that lacks a rate. After the biller adds the price and puts it on the line (re-select the visit in New Claim, or type it into the line), the next attempt goes through.
- **cm-29** — live: “Troubleshooting: Rate is set but the claim still rejects with $0.00 — The rate exists in the wrong tab (self-pay vs. insurance) for this patient — Confirm the patient's payment method on the claim; add the rate in the matching tab.”
  - Product: There is no payment method on the claim. The class is derived from the patient's insurance: an active patient_insurance row prices from Insurance Charges, none prices from Self-Pay Charges (frontend/src/utils/billing/financialClass.ts:1-10).
  - Proposed: Rate is set but the claim still rejects with $0.00 — the rate is in the other tab. A patient with an active insurance row is priced from Insurance Charges; a patient with none is priced from Self-Pay Charges. Add the rate in the matching tab.
- **cm-30** — live: “Troubleshooting: Rate is set correctly but the line still shows $0.00 in the drawer — The claim was drafted before you added the rate — Re-open the claim; the Expected Total re-hydrates from Charge Master on load. Or open Edit in Full Form and save once.”
  - Product: The drawer's Expected Total sums the stored line charges (frontend/src/components/billing/CodingReviewDrawer.tsx:399-406); nothing in the drawer reads Charge Master. Edit in Full Form prices only rows that have no charge when a visit is selected (NewBillingSubmitPage.tsx:1769).
  - Proposed: Rate is set correctly but the line still shows $0.00 in the drawer — the claim was drafted before you added the rate, and the drawer shows the saved charge. Type the price into the line and Save, or open Edit in Full Form and select the visit again.
- **cm-32** — live: “Troubleshooting: A biller wants to submit a legitimately $0 line (e.g. no-charge follow-up) — There is no escape hatch — by design. Do not attempt to bypass the guard. Book the encounter as non-billable in the Work Queue instead, or contact the payer directly.”
  - Product: No-escape-hatch is true. The Work Queue has no "non-billable" action or status (no match in frontend/src/pages/BillingWorkQueuePage.tsx or frontend/src/components/billing; status options in frontend/src/components/billing/statusDropdownHelpers.ts:11-27 include Hold, Write-Off and Void).
  - Proposed: A biller wants to submit a legitimately $0 line (e.g. no-charge follow-up) — there is no escape hatch, by design. Do not bill it; set the claim to Hold, Write-Off or Void in the Work Queue, or contact the payer.

## File a received fax to a patient chart — 14

https://help.medipyxis.com/modules/more-fax/file-to-chart/

- **ftc-l01** — live: “Every fax that lands in Medipyxis stays in the Received Fax queue until you triage it. Filing a fax to a patient's chart makes it stop appearing in the queue and start appearing on the chart's Documents tab.”
  - Product: Filed faxes stay listed in Received Fax Logs with status Completed (fileFaxToChartRouting.ts backend/supabase/functions/_shared/fileFaxToChartRouting.ts:58); the chart copy has document type Received Fax (backend/supabase/functions/_shared/fileFaxToChartCore.ts:286), not a Faxes section.
  - Proposed: Every fax your clinic receives is listed in Received Fax Logs. Filing a fax to a patient's chart puts a copy on the patient's Documents page. The fax's status in Received Fax Logs becomes Completed, unless it is attached to an order.
- **ftc-l04** — live: “Open Received Fax from More → Received Fax.”
  - Product: The sidebar item is Fax Center and the tile is Received Fax Logs (MorePage.tsx frontend/src/pages/MorePage.tsx:122).
  - Proposed: Open Received Fax Logs: click Fax Center in the sidebar, then the Received Fax Logs tile.
- **ftc-l05** — live: “Click the fax row. The triage panel opens on the right with the fax preview, sender number, page count, and received timestamp.”
  - Product: The Triage Fax panel shows sender, fax number and pages with a View PDF button (frontend/src/components/FaxTriagePanel.tsx:54); no inline preview and no received timestamp.
  - Proposed: Click the fax row, or Triage & Assign in the row's Actions. The Triage Fax panel opens with the fax details (sender, fax number, pages) and a View PDF button.
- **ftc-l08** — live: “Add triage notes (optional). Notes are stored on the audit trail and visible to anyone reviewing the chart later.”
  - Product: The note is saved on the fax row (receivedFaxService.ts frontend/src/services/receivedFaxService.ts:519) and shown in Received Fax Logs; the filing core never writes it to the audit log or the chart.
  - Proposed: Notes are saved on the fax and shown on its row in Received Fax Logs.
- **ftc-l09** — live: “Click File to Patient Chart. The document lands on the patient's Documents tab under Faxes and the fax row leaves the pending queue.”
  - Product: The button is File to Chart ("File to Patient Chart" is the option heading, FaxTriagePanel.tsx frontend/src/components/FaxTriagePanel.tsx:50); the copy is a Received Fax document, and the row stays in Received Fax Logs as Completed.
  - Proposed: Click File to Chart. The panel shows "Fax successfully filed to patient chart! You can also attach it to an order below." The copy has the document type Received Fax and the file name you chose. The fax's status in Received Fax Logs becomes Completed, unless it is attached to an order.
- **ftc-l10** — live: “Result: the fax appears on the patient's Documents tab, with the file name you chose and a link back to the original queue entry.”
  - Product: The chart document gets the chosen file name (backend/supabase/functions/_shared/fileFaxToChartCore.ts:291) but no link back to the fax.
  - Proposed: The copy has the document type Received Fax and the file name you chose.
- **ftc-l11** — live: “The Received Fax queue removes the row from the pending list. Search All faxes or Filed faxes to find it again.”
  - Product: The status filter has All Statuses, Pending, In Progress, Completed, Archived and Failed; there is no All faxes or Filed faxes view (ReceivedFaxLog.tsx). The filed fax shows as Completed (frontend/src/pages/ReceivedFaxLog.tsx:264).
  - Proposed: The fax's status in Received Fax Logs becomes Completed, unless it is attached to an order.
- **ftc-l12** — live: “The audit log records who filed the fax, when, and the triage notes you added.”
  - Product: The audit entry records the action and user (backend/supabase/functions/_shared/fileFaxToChartCore.ts:345), not the notes.
  - Proposed: The fax's audit log records that it was filed to the chart, and by whom.
- **ftc-l13** — live: “Note: you can only file a fax to patients in the facility that received it, so you won't accidentally attach a fax to a chart in another practice.”
  - Product: file-fax-to-chart checks that you can access both the fax's facility (backend/supabase/functions/file-fax-to-chart/index.ts:120) and the patient's facility (backend/supabase/functions/file-fax-to-chart/index.ts:152); it does not require them to be the same.
  - Proposed: You can file a fax only when you have access to both the fax's facility and the patient's facility. A fax already on one patient's chart cannot be filed to another patient's chart.
- **ftc-l16** — live: “Also attach to a lab order: after filing to chart, the triage panel loads the patient's open lab orders. Pick the matching order. Click Attach to Lab Order. The fax appears as a result on that order in Orders & DME.”
  - Product: Orders load as soon as a patient is selected and cover lab, DME, imaging, home health and specialist referral orders (frontend/src/components/FaxTriagePanel.tsx:500); the button is Attach to Order (frontend/src/components/FaxTriagePanel.tsx:579).
  - Proposed: With the patient selected, Attach to an Order lists the patient's orders: lab, DME, imaging, home health or specialist referral. The order number tells similar orders apart. Click Attach to Order. The fax is listed with that order on the patient's Orders & DME page.
- **ftc-l18** — live: “Troubleshooting: "Document filed, but this fax could not be marked as routed" — the fax was filed to the chart, but the queue did not update. Click File to Patient Chart again — filing again retries the queue update.”
  - Product: The message reads "Document filed to the patient chart, but this fax could not be marked as routed — …" (FaxTriagePanel.tsx frontend/src/components/FaxTriagePanel.tsx:172) and the button is File to Chart.
  - Proposed: Troubleshooting: "Document filed to the patient chart, but this fax could not be marked as routed" — file it again; filing again retries that step.
- **ftc-l19** — live: “Troubleshooting: "You do not have access to this fax" — the fax belongs to another facility in your organization; switch to that facility from the Organization Selector, then reopen the fax.”
  - Product: The messages are "You do not have access to this fax's facility." / "… this patient's facility." (backend/supabase/functions/file-fax-to-chart/index.ts:119); access is by your role's facilities.
  - Proposed: Troubleshooting: "You do not have access to this fax's facility." or "You do not have access to this patient's facility." — your role does not cover that facility.
- **ftc-l21** — live: “Troubleshooting: no PDF preview shown — the fax file did not finish uploading from the fax vendor. Wait 30 seconds and reload. If it persists, contact support with the fax ID.”
  - Product: There is no inline preview; when no document is stored the panel says "Unable to open fax — no viewable document available" (frontend/src/components/FaxTriagePanel.tsx:257).
  - Proposed: Troubleshooting: "Unable to open fax — no viewable document available" — no stored document for this fax.
- **ftc-l23** — live: “Related: Received Fax overview — the full queue workflow, sender allowlists, and archive actions.”
  - Product: The link resolves to More (Fax) overview, which does not cover allowlists; no fax sender allowlist exists in ReceivedFaxLog.tsx or receive-fax-webhook. Archive exists (ReceivedFaxLog.tsx frontend/src/pages/ReceivedFaxLog.tsx:268).
  - Proposed: More (Fax) overview — the Fax Center tiles, Received Fax Logs and archive actions.

## BD rep cheat sheet — 14

https://help.medipyxis.com/quick-reference/bd-rep/

- **qbd-01** — live: “Your loop: cover your practices, log every touch, let Medipyxis attribute ROI back to you.”
  - Product: ROI (MTD) on the BD Dashboard is an estimate, referrals this month × $3,500 (BdDashboard.tsx frontend/src/pages/BdDashboard.tsx:2885); no paid-claim or revenue attribution is computed.
  - Proposed: Your loop: cover your practices and log every touch in CRM, so your activity and referrals show on the BD Dashboard. ROI (MTD) — an estimate: referrals this month × $3,500. It is not based on paid claims or on your spend.
- **qbd-03** — live: “Tracked automatically: visits completed and revenue tied to those referrals.”
  - Product: BdDashboard.tsx reads no paid amounts; the only revenue figure is the $3,500-per-referral estimate (frontend/src/pages/BdDashboard.tsx:2886).
  - Proposed: ROI (MTD) — an estimate: referrals this month × $3,500. It is not based on paid claims or on your spend.
- **qbd-05** — live: “Tracked automatically: cost to serve (activity time × your loaded cost).”
  - Product: No loaded-cost or cost-to-serve calculation exists anywhere in frontend/src (case-insensitive 'loaded cost' has no hit).
  - Proposed: (Remove: Medipyxis does not calculate cost to serve.) A quick-add strip with your month-to-date counts and spend.
- **qbd-06** — live: “Log every practice touch, same day: CRM → practice → Log Call / New Visit / Add Spend (or voice).”
  - Product: The quick-add strip (Log Call, New Visit, Add Spend, Record Voice Note) is on the CRM list page and BD Dashboard (Crm.tsx frontend/src/pages/Crm.tsx:3398), not inside a practice; inside a practice the actions are Call, Visit and Note (frontend/src/pages/CrmPracticeDetail.tsx:584).
  - Proposed: Log every practice touch with the quick-add strip on CRM or the BD Dashboard: Log Call, New Visit, Add Spend, or Record Voice Note. Log a touch on one practice: CRM → open the practice → Call, Visit or Note.
- **qbd-07** — live: “Update practice contact info as needed: CRM → practice → Overview → Edit.”
  - Product: The practice header's Edit button was removed (CrmPracticeDetail.tsx frontend/src/pages/CrmPracticeDetail.tsx:228).
  - Proposed: (Remove this row: there is no Edit button on the practice header.) Record new contacts: CRM → open the practice → Additional Contacts → Add.
- **qbd-08** — live: “Record new contacts when met: CRM → practice → + Add Contact.”
  - Product: The control is Additional Contacts → Add (CrmPracticeDetail.tsx frontend/src/pages/CrmPracticeDetail.tsx:1550).
  - Proposed: Record new contacts: CRM → open the practice → Additional Contacts → Add.
- **qbd-11** — live: “KPIs: Conversion rate (BD Dashboard, target > 80%) and Cost per converted referral (BD Dashboard, target < $150).”
  - Product: BdDashboard.tsx has no conversion-rate or cost-per-referral KPI ('Conversion Rate' and 'Cost per' have no hit).
  - Proposed: Referrals This Month — new patients this month credited to you (an admin can filter by rep). ROI (MTD) — an estimate: referrals this month × $3,500. It is not based on paid claims or on your spend. Active Pipeline — not calculated yet; it always shows $0k.
- **qbd-12** — live: “KPI: Inactive practices — BD → Practices → filter: no activity 30d — investigate.”
  - Product: No such filter; the CRM status filter has Follow-up Due and Cold (Crm.tsx frontend/src/pages/Crm.tsx:4120).
  - Proposed: Practices that need attention: CRM → status filter: Follow-up Due or Cold.
- **qbd-13** — live: “Shortcut: log an activity quickly — Practice detail → L.”
  - Product: No 'l' key handler exists in frontend/src.
  - Proposed: Log a touch on one practice: CRM → open the practice → Call, Visit or Note.
- **qbd-14** — live: “Shortcut: find a practice — ⌘K + practice name.”
  - Product: ⌘K opens Quick Jump (AppShell.tsx frontend/src/components/AppShell.tsx:1141), which searches pages, not practices.
  - Proposed: Find a practice: CRM → Search practices... ⌘K / Ctrl+K (Quick Jump), then type the page name, goes to a page such as CRM Home or BD Dashboard.
- **qbd-15** — live: “Shortcut: open today's plan — G then T.”
  - Product: No 'g' key handler exists in frontend/src.
  - Proposed: (Remove: there is no G-then-T shortcut.) ⌘K / Ctrl+K (Quick Jump), then type the page name, goes to a page such as CRM Home or BD Dashboard.
- **qbd-16** — live: “Round-robin referrals: when a new practice sends a referral before you've claimed it, the round-robin assigns it based on your territory. Check the Unattributed queue weekly on BD → Dashboard to claim any that routed incorrectly.”
  - Product: Round-robin on the BD Dashboard tracks practice contact cycles (BdDashboard.tsx frontend/src/pages/BdDashboard.tsx:4316); there is no Unattributed referral queue.
  - Proposed: The BD Dashboard shows your round-robin progress: how many of your practices you have contacted in the current cycle.
- **qbd-17** — live: “How ROI is calculated: Net ROI per practice = (sum of paid claims for visits originated by this practice) − (sum of your activity cost for this practice) − (sum of rep spend budget allocated to this practice). Time horizon is rolling 12 months.”
  - Product: No such calculation exists; ROI (MTD) = referrals this month × $3,500 (frontend/src/pages/BdDashboard.tsx:2886).
  - Proposed: ROI (MTD) — an estimate: referrals this month × $3,500. It is not based on paid claims or on your spend.
- **qbd-18** — live: “Ask your manager to adjust loaded cost rates in Admin → BD Settings.”
  - Product: There is no loaded-cost setting anywhere in frontend/src.
  - Proposed: (Remove: there is no loaded-cost setting.)

## Manage your catalog and push it to clinics — 14

https://help.medipyxis.com/vendor-portal/manage-catalog/

- **vpc-04** — live: “To push, your BAA must be approved and you must be tethered to at least one clinic.”
  - Product: The push checks only that the clinic connection is approved; it does not check BAA status (vendor-catalog-push/index.ts has no BAA check at v1.1.345).
  - Proposed: To push, your company must be connected to the clinic (connection approved).
- **vpc-07** — live: “Search the table by SKU, brand, or product name.”
  - Product: There is no search box on the Catalog page at v1.1.345.
  - Proposed: (Remove.)
- **vpc-08** — live: “Click Add SKU in the upper-right, or click a row's Edit action.”
  - Product: The button is 'Add Product'; editing is by clicking the row (no Edit action) (VendorCatalogPage.tsx at v1.1.345).
  - Proposed: Click Add Product, or click a row to edit it.
- **vpc-09** — live: “Product form: SKU (unique within your catalog), Product name, Brand, Family (Amniotic, Biologics, Conservative, PRP, or NPWT), HCPCS / Q-code (required for amniotic and biologics), Sizes (one row per size with dimensions, unit of measure, computed area; the catalog derives price and quantity from these), UDI-DI / GTIN (optional), Active (clear to soft-retire).”
  - Product: The form has Product Name (required), SKU / Catalog Number (required), Brand, HCPCS Code, GTIN, a Modality list (CTP / Skin Substitute, Amniotic, Biologics, Conservative, DME, Supplies — no PRP or NPWT), a comma-separated Sizes field, and Consignable and Active checkboxes (VendorCatalogSkuModal.tsx at v1.1.345). HCPCS is not required.
  - Proposed: Fill in the form: Product Name (required), SKU / Catalog Number (required — the number clinics order by), Brand, HCPCS Code, GTIN, Modality (CTP / Skin Substitute, Amniotic, Biologics, Conservative, DME, or Supplies), Sizes separated by commas, and the Consignable and Active boxes.
- **vpc-10** — live: “Save. New SKUs land in an unpublished state until you push them.”
  - Product: There is no unpublished state; catalog link statuses are active, proposed and draft (VendorCatalogPage.tsx).
  - Proposed: (Remove.)
- **vpc-14** — live: “Pick what to push: All active products — the default; Specific products — check individual rows. Click Push catalog. The confirmation shows how many SKUs landed, how many are new, and how many updated existing accepted rows.”
  - Product: There is no 'Push catalog' button; after a Preview step the button is 'Confirm push' (VendorCatalogPushPage.tsx at v1.1.345). Draft products are skipped.
  - Proposed: Select SKUs: Push entire catalog, or tick individual products. Check the Preview (draft products are skipped), then click Confirm push. The result shows how many links were created, updated, and skipped.
- **vpc-15** — live: “New SKUs land in the clinic's catalog with a New badge. Their inventory admin reviews and accepts them one time before they appear in the Visit Wizard.”
  - Product: The clinic's Accept vendor catalog page has no 'New' badge (VendorCatalogAccept.tsx at v1.1.345); pushed products arrive there as proposals.
  - Proposed: New products arrive as proposals on the clinic's Accept vendor catalog page. When the clinic accepts one, it is added to their product pickers.
- **vpc-17** — live: “Discontinued SKUs (unchecked Active) send an alert to the clinic if they have on-hand lots or open orders.”
- **vpc-21** — live: “Confirm match links your SKU to the canonical product; Reject treats it as distinct and seeds a new pending_review master row.”
  - Product: The buttons are labelled 'Same product' and 'Different product', not 'Confirm match' and 'Reject' (VendorCatalogPage.tsx at v1.1.345).
  - Proposed: Click Same product to link your product to the registry product, or Different product to create a new registry entry marked for review.
- **vpc-25** — live: “Bulk update pricing — download a CSV template from the catalog page, edit prices offline, and re-upload. Bulk activate / deactivate — check multiple rows and use the row-actions dropdown.”
  - Product: No CSV template, upload, row selection or row-actions dropdown exists on the Catalog page at v1.1.345.
  - Proposed: (Remove.)
- **vpc-27** — live: “Troubleshooting: "Cannot push — BAA pending"; wait for approval email; button re-enables automatically.”
  - Product: No BAA check or 'BAA pending' message exists in the push function or page.
  - Proposed: (Remove this row.)
- **vpc-29** — live: “Troubleshooting: proposal rail says "0 pending" — every fuzzy match was resolved; this is the empty state.”
- **vpc-30** — live: “Troubleshooting: discontinued SKU still shows on clinic wizard — discontinuation propagates on next catalog sync (hourly) or immediately when the clinic re-accepts.”
- **vpc-31** — live: “Troubleshooting: SKU rejected on upload — "duplicate" — you already have that SKU in a different family or archived state.”
  - Product: Neither the save function nor the form produces a 'duplicate' rejection; the catalog table has no unique index on SKU (vendor-upsert-catalog-sku/index.ts:81).
  - Proposed: (Remove this row.)

## Receive a vendor shipment — 14

https://help.medipyxis.com/vendor-portal/receiving/

- **vpr-02** — live: “Check-in is match-and-confirm, from either the facility's central Receiving page or straight out of a provider's inventory view.”
  - Product: No route opens a facility-wide Receiving page (ClinicReceivingPage is not routed in user-routes.tsx at v1.1.345). Check-in lives in Inventory Management → Clinician Inventory View, in the Vendor Shipments Awaiting Check-In panel.
  - Proposed: Open Inventory Management → Clinician Inventory View. When a vendor shipment is waiting, a Vendor Shipments Awaiting Check-In panel lists it with the shipment number, vendor, number of lines, carrier and tracking, and expected date.
- **vpr-05** — live: “Two surfaces write through the same edge function: the Receiving page (Sidebar → Receiving) and the Provider inventory view (Patient Management → Inventory tab, Pending Vendor Shipments section). Both save through clinic-receive-shipment.”
  - Product: No route opens a facility-wide Receiving page (ClinicReceivingPage is not routed in user-routes.tsx at v1.1.345). Check-in lives in Inventory Management → Clinician Inventory View, in the Vendor Shipments Awaiting Check-In panel. No 'Pending Vendor Shipments' section exists, and the view is under Inventory Management, not Patient Management.
  - Proposed: Open Inventory Management → Clinician Inventory View. When a vendor shipment is waiting, a Vendor Shipments Awaiting Check-In panel lists it with the shipment number, vendor, number of lines, carrier and tracking, and expected date.
- **vpr-06** — live: “Sidebar → Receiving opens a facility-scoped view with four KPI tiles (Expected today, Awaiting check-in, Open discrepancies, Received this week) and an All shipments table with vendor, shipment number, line count, expected delivery and status badge (in transit, checking in, received).”
  - Product: No route opens a facility-wide Receiving page (ClinicReceivingPage is not routed in user-routes.tsx at v1.1.345). Check-in lives in Inventory Management → Clinician Inventory View, in the Vendor Shipments Awaiting Check-In panel.
  - Proposed: (Remove the Receiving page section.)
- **vpr-08** — live: “Confirm each line: if it matches, leave Received quantity at the pre-filled value; if not, edit the number and check the discrepancy option (short, damaged, wrong SKU, expired).”
  - Product: Quantities are set with minus/plus or typing and a badge shows match, short or over; a line is flagged with a free-text reason. There is no short/damaged/wrong SKU/expired option list (VendorShipmentCheckInModal.tsx).
  - Proposed: Set the received quantity for each line with the minus and plus buttons or by typing; a badge shows match, short, or over. To report a problem with a line, click Flag and type a reason.
- **vpr-09** — live: “Photograph any discrepancy. The modal accepts one photo per flagged line. This becomes the evidence attached to the exception on the vendor's side.”
  - Product: Photos can be attached to a line, but no one-photo or size limit is enforced (VendorShipmentCheckInModal.tsx).
  - Proposed: You can attach photos to a line.
- **vpr-11** — live: “Confirm receipt. The shipment moves to received (perfect match) or flagged (any line has a discrepancy). The accepted quantities stock immediately, only the flagged units wait.”
  - Product: Complete receipt always marks the shipment delivered ('received') and adds each received lot as available stock; no flagged state or held units are written (clinic-receive-shipment/index.ts).
  - Proposed: Click Complete receipt. Each received lot is added to inventory as available stock, the shipment is marked received, and the vendor is told the expected and received totals and how many lines had a discrepancy.
- **vpr-13** — live: “Flagged lines land in Receiving History → Needs review so an inventory admin can reconcile before those units stock.”
  - Product: No needs-review state is written on receipt.
  - Proposed: (Remove.)
- **vpr-14** — live: “Consignment lots are stocked with ownership_model = consignment so they show on the vendor's consignment position report but count against your on-hand for wizard availability.”
  - Product: clinic-receive-shipment does not set ownership_model (no occurrence at v1.1.345).
  - Proposed: (Remove.)
- **vpr-15** — live: “The Provider inventory view (Patient Management → Inventory tab) surfaces pending shipments in a Pending Vendor Shipments card, filtered to shipments where you are on the delivery list; Check in opens the same modal.”
  - Product: The panel is 'Vendor Shipments Awaiting Check-In' in Inventory Management → Clinician Inventory View, and it lists the facility's shipped/delivered shipments with no delivery-list filter (useClinicVendorReceiving.ts).
  - Proposed: Open Inventory Management → Clinician Inventory View. When a vendor shipment is waiting, a Vendor Shipments Awaiting Check-In panel lists it with the shipment number, vendor, number of lines, carrier and tracking, and expected date.
- **vpr-17** — live: “Once you flag a line, the vendor's shipment moves to flagged on their side and lands in their Requests inbox with your photo and note. They resolve by Reship, Short-ship accepted, or Dispute. You're notified in the bell or Messages whenever the vendor responds.”
  - Product: No flagged state is written and no Reship / Short-ship / Dispute actions exist on the vendor side (frontend/src/pages/vendor at v1.1.345).
  - Proposed: (Remove.)
- **vpr-18** — live: “Pending shipments overdue more than 24 hours send escalating nudges: day 1 to the facility inventory admin, day 3 to the vendor plus a red flag, day 5 to your facility admin. Overdue shipments do not auto-close.”
  - Product: No overdue-shipment nudge job exists at v1.1.345.
  - Proposed: (Remove.)
- **vpr-21** — live: “Troubleshooting: photo won't attach — file over 10 MB or unsupported format; PNG/JPG only.”
  - Product: No size or format limit is enforced by the check-in modal.
  - Proposed: (Remove this row.)
- **vpr-22** — live: “Troubleshooting: received quantity doesn't decrement in Main Inventory — stocking write failed; line landed in Needs Review.”
  - Product: No Needs Review state exists.
  - Proposed: (Remove this row.)
- **vpr-23** — live: “Troubleshooting: provider view doesn't show a shipment — you are not on the delivery list; use the facility Receiving page.”
  - Product: No route opens a facility-wide Receiving page (ClinicReceivingPage is not routed in user-routes.tsx at v1.1.345). Check-in lives in Inventory Management → Clinician Inventory View, in the Vendor Shipments Awaiting Check-In panel. There is no delivery list.
  - Proposed: (Remove this row.)

## Create and track shipments — 14

https://help.medipyxis.com/vendor-portal/shipments/

- **vps-02** — live: “This page covers the two entry paths (bulk Excel upload and manual single shipment), the destination-grouping logic, and how discrepancies flow back to you after check-in.”
  - Product: There is no manual single-shipment path; shipments come from bulk upload or from Ship on a clinic request (VendorShipmentsPage.tsx).
  - Proposed: Shipments are created by bulk upload or by Ship on a clinic request.
- **vps-06** — live: “The shipments page shows every shipment your company has created. Status column: draft, shipped, in transit, received, flagged.”
  - Product: Statuses shown are created, in transit, received, discrepancy and cancelled; there is no draft or flagged status (VendorShipmentsPage.tsx).
  - Proposed: Status shows created, in transit, received, discrepancy, or cancelled.
- **vps-07** — live: “Lines column: shipment line count and destination clinic. Actions: open the detail drawer, download packing slip, or void a draft.”
  - Product: There is no packing slip or void action; columns are Shipment, Clinic, Carrier / tracking, Expected, Lines, Status, and clicking a row opens the shipment page.
  - Proposed: Columns: Shipment, Clinic, Carrier / tracking, Expected, Lines, Status. Click a row to open the shipment.
- **vps-14** — live: “Lot integrity: new lots registered on confirm; expiring soon — any lot within 30 days of expiration, consignment under 30 days triggers an extra confirmation; duplicate lots in-file flagged.”
  - Product: Expiring-soon is flagged at 90 days with no extra confirmation for consignment (VendorShipmentUploadPage.tsx: daysLeft <= 90).
  - Proposed: The preview flags lots that expire within 90 days and repeated lot + SKU + clinic rows.
- **vps-16** — live: “Each shipment sends a notification to both the destination clinic's inventory admin and its assigned providers.”
  - Product: A single facility-scoped notification (vendor_shipment_created) is emitted; no per-admin/per-provider targeting (vendor-create-shipments/index.ts).
  - Proposed: The clinic is notified of each shipment.
- **vps-17** — live: “Manual single shipment: from Shipments, click New shipment (manual); pick the clinic; add lines; optional tracking and carrier; Save & ship.”
  - Product: No manual-create control exists.
  - Proposed: (Remove.)
- **vps-18** — live: “Save a column mapping template: click Save mapping as template; next upload, pick the template from the dropdown.”
  - Product: No mapping-template control exists.
  - Proposed: (Remove.)
- **vps-19** — live: “The shipment detail drawer has five sections: Summary, Lines (shipped and received quantities, discrepancies in red), Timeline, Discrepancies (photo and note), Documents (auto-generated packing slip).”
  - Product: The shipment page shows clinic, carrier/tracking, the lines table (SKU, product, lot, expiration, qty shipped, qty received, line status) and a Receiving outcome panel; no Timeline, Discrepancies photo panel or Documents/packing slip.
  - Proposed: The shipment page shows the clinic, carrier and tracking, the lines (SKU, product, lot, expiration, quantity shipped and received, line status) and the receiving outcome, including who received it.
- **vps-20** — live: “When a clinic marks a discrepancy at receiving, the shipment moves to flagged on your side and a notification lands in your Requests inbox.”
  - Product: Receipt always marks the shipment delivered; no flagged/discrepancy status is written (clinic-receive-shipment/index.ts).
  - Proposed: (Remove.)
- **vps-21** — live: “To resolve: open the shipment; take an action — Accept and reship, Accept as short-ship, or Dispute (opens a Messages thread).”
  - Product: No reship/short-ship/dispute actions exist; the Issue credit memo and Close discrepancy buttons have no action (VendorShipmentDetail.tsx).
  - Proposed: The Issue credit memo and Close discrepancy buttons do nothing yet.
- **vps-22** — live: “Shipments in draft status can be edited or voided from the row menu. A voided shipment leaves an audit row and removes the pre-staged rows on the clinic side.”
  - Product: No void or draft-edit action exists.
  - Proposed: (Remove.)
- **vps-23** — live: “Rerunning a failed bulk upload does not create duplicates as long as the PO ref / external_ref is unchanged — the validator flags any row whose lot has already been shipped to the same destination.”
  - Product: The upload validator flags repeated lot+SKU+clinic rows within the file only; no check against previously shipped lots was found (VendorShipmentUploadPage.tsx).
  - Proposed: (Remove.)
- **vps-27** — live: “Troubleshooting: clinic sees "no shipments pending" — have the clinic refresh Receiving and check the Pending tab.”
  - Product: The clinic has no Receiving page or Pending tab; check-in is the Vendor Shipments Awaiting Check-In panel in Clinician Inventory View.
  - Proposed: Have the clinic open Inventory Management → Clinician Inventory View.
- **vps-28** — live: “Troubleshooting: duplicate shipment created — void one draft before it ships.”
  - Product: No void action exists.
  - Proposed: (Remove this row.)

## Terms and contracts — 14

https://help.medipyxis.com/vendor-portal/terms-and-contracts/

- **vpt-01** — live: “Terms are your commercial contract with each clinic — billing model, cadence, and pricing — and they drive every downstream invoice. Set them once per clinic (per SKU class when needed), and the auto-invoice engine takes over from there.”
  - Product: Automatic drafting does not run in v1.1.345: the job is scheduled at 06:10 UTC but only drafts between 02:00 and 02:59 UTC (invoice-draft-run/index.ts:328-351; migrations/20260727130100_invoice_draft_and_webhook_cron.sql:28).
  - Proposed: Terms record your billing model, invoice cadence, auto-invoice setting and pricing notes with each clinic. You can keep default terms plus terms for a SKU class. Automatic drafting is not producing drafts in the current release.
- **vpt-02** — live: “You are signed in as vendor_admin. Only vendor_admin can create or change terms. vendor_user and vendor_sales see terms read-only.”
  - Product: The terms page is admin-only; vendor_user and vendor_sales cannot open it at all (VendorRoutes.tsx <VendorAdminOnly><VendorTermsPage />).
  - Proposed: Only an Admin can open and change terms.
- **vpt-07** — live: “Cadence table: per_use every night, Net 45; weekly every Monday, 30 days; monthly 1st of each month, 45 days; net_30 every night (accumulating), 30 days; custom_day every night, 30 days.”
  - Product: The cadence and due-date rules match the code, but Automatic drafting does not run in v1.1.345: the job is scheduled at 06:10 UTC but only drafts between 02:00 and 02:59 UTC (invoice-draft-run/index.ts:328-351; migrations/20260727130100_invoice_draft_and_webhook_cron.sql:28).
  - Proposed: In the current release, automatic drafting is not producing drafts.
- **vpt-09** — live: “Auto-invoice is the on/off switch. When off, no draft appears until someone clicks Run cadence now on the invoices page or you compose an invoice by hand. Leave this on for the nightly job.”
  - Product: Run cadence now has no action, and the nightly job does not draft. Automatic drafting does not run in v1.1.345: the job is scheduled at 06:10 UTC but only drafts between 02:00 and 02:59 UTC (invoice-draft-run/index.ts:328-351; migrations/20260727130100_invoice_draft_and_webhook_cron.sql:28).
  - Proposed: Auto-invoice on includes the clinic in automatic drafting (not producing drafts in the current release). You can always send an invoice from New invoice.
- **vpt-11** — live: “None of these fields drive pricing math on their own — the auto-invoice engine bills at the price on the product record.”
  - Product: The drafter prices each line from the terms pricing_tier map keyed by HCPCS (resolveUnitCost: pricingTier[hcpcs] ?? pricingTier['default'] ?? 0, invoice-draft-run/index.ts:381-387), not from the product record; with no tier entry the line is $0.
  - Proposed: (Remove. Pricing for automatic drafts is not described until drafting works.)
- **vpt-12** — live: “Set a SKU class when you need different terms for a product family. The invoice engine picks the most specific matching row, falling back to the default.”
  - Product: The drafter keeps the latest version per (vendor, clinic, sku_class) but does not filter use events by SKU class; each terms row would take all of the vendor's unbilled events at that clinic (invoice-draft-run/index.ts:77-80, :140-158).
  - Proposed: SKU class is optional; leave it blank for default terms.
- **vpt-14** — live: “The clinic is notified in-app when terms change. This is enforced by the platform, not by you.”
  - Product: vendor-terms-upsert sends no notification; the page banner says the clinic is notified (VendorTermsPage.tsx:199), which is false.
  - Proposed: Tell the clinic yourself when terms change.
- **vpt-16** — live: “Create the first terms record: click New terms; optionally enter a SKU class; fill in fields; click Save new version. The row appears with version: 1.”
  - Product: No button opens the new-terms form (setShowNewForm(true) is never called), and Save new version stays disabled until you edit an existing card (VendorTermsPage.tsx). A vendor cannot create the first terms record from the page.
  - Proposed: If a clinic has no terms yet, contact Medipyxis support.
- **vpt-17** — live: “The auto-invoice engine will start drafting against it on the next cadence run.”
  - Product: Automatic drafting does not run in v1.1.345: the job is scheduled at 06:10 UTC but only drafts between 02:00 and 02:59 UTC (invoice-draft-run/index.ts:328-351; migrations/20260727130100_invoice_draft_and_webhook_cron.sql:28).
  - Proposed: (Remove.)
- **vpt-19** — live: “The clinic AP contact is notified in-app.”
  - Product: No notification is sent on a terms save.
  - Proposed: (Remove.)
- **vpt-21** — live: “SKU-class patterns: default net30 + a graft_ctp row on consignment_use / per_use; the engine reads the most specific matching row.”
  - Product: The drafter does not match use events to SKU classes (see vpt-12).
  - Proposed: (Remove.)
- **vpt-22** — live: “Terms do not control product pricing — that lives on the catalog SKU / product record.”
  - Product: Automatic drafts take prices from the terms pricing_tier map, not the product record (see vpt-11).
  - Proposed: (Remove.)
- **vpt-26** — live: “Troubleshooting: auto-drafts not appearing — auto_invoice is off on the latest version; set it on and save a new version.”
  - Product: Automatic drafting does not run in v1.1.345: the job is scheduled at 06:10 UTC but only drafts between 02:00 and 02:59 UTC (invoice-draft-run/index.ts:328-351; migrations/20260727130100_invoice_draft_and_webhook_cron.sql:28).
  - Proposed: Automatic drafting is not producing drafts in the current release; use New invoice on the Invoices page.
- **vpt-27** — live: “Troubleshooting: wrong product family billed under default terms — add a SKU-class row; the engine picks it up.”
  - Product: SKU-class rows are not used to route use events.
  - Proposed: (Remove this row.)

## Set your facility timezone — 13

https://help.medipyxis.com/admin/facility-timezone/

- **tz-f01** — live: “That timezone is what the scheduling grid, appointment reminders, chart timestamps, and provider handoff views resolve to. Set it once during facility setup and every downstream surface follows it.”
  - Product: Signature timestamps print in the device timezone, not the facility's (utils/formatters.ts:198); there is no "provider handoff view" in frontend/src; the Fleet Calendar route view uses a provider's own timezone when set (services/fleetCalendarService.ts:1441).
  - Proposed: Every facility has one timezone. New appointments are booked in it, and the scheduling screens show times in it. Signature timestamps on signed notes print in the timezone of the device that makes the PDF, with the zone abbreviation, not in the facility timezone.
- **tz-f02** — live: “Before you start: You have the admin or superadmin role.”
  - Product: Access is the Facilities feature (user-routes.tsx:603).
  - Proposed: You can open Facilities in the sidebar.
- **tz-f03** — live: “Open Admin → Facilities and click the facility you want to configure. If you are creating a new facility, click + Add Facility.”
  - Product: Facilities is a sidebar item with a per-row Edit button; Add Facility is only enabled for Medipyxis support roles (pages/FacilityDashboard.tsx:469).
  - Proposed: Open Facilities, find the facility, and click its Edit button. New locations are added by Medipyxis support.
- **tz-f04** — live: “Multi-timezone service area — Check this box only if the facility routinely books visits in more than one timezone. When enabled, individual appointments can carry their own timezone override; when disabled, every appointment is booked in the facility timezone.”
  - Product: The box is saved with the facility but nothing in booking reads it; every appointment is booked in the facility timezone (components/AppointmentBookingModal.tsx:801).
  - Proposed: The Multi-timezone service area box is saved with the facility, but booking does not use it: every appointment is booked in the facility timezone either way.
- **tz-f05** — live: “Save. The change takes effect immediately for new appointments. Existing appointments keep the timezone they were booked in.”
  - Product: The button is Save Changes (components/FacilityAddEditModal.tsx:1284); appointments are stored as instants and lists re-render them in the current facility timezone (components/AppointmentManagementCard.tsx:848), so they do not keep a booked timezone.
  - Proposed: Click Save Changes.
- **tz-f06** — live: “Fleet Calendar and Clinician Calendar render every appointment slot in the facility timezone. The banner at the top of the booking modal shows which timezone is being used.”
  - Product: The timezone shows as a badge next to Time in the booking window, not a banner; the Fleet Calendar route view uses each provider's own timezone when set (services/fleetCalendarService.ts:1441).
  - Proposed: Booking: the time you enter is read in the facility timezone. The badge next to Time in the booking window shows which timezone that is. Calendars: the clinician calendar and appointment lists show times in the facility timezone.
- **tz-f07** — live: “Appointment reminders — the send time is calculated against the facility timezone so a patient receives a 24-hour reminder at 9:00 a.m. their local morning, not at 6:00 a.m.”
  - Product: The reminder is due 24 hours before the visit (functions/_shared/patient-appointment-alerts.ts:277), not at 9:00 a.m.; the facility timezone only sets 9 p.m.–8 a.m. quiet hours, and reminders run only where patient alerts are switched on.
  - Proposed: Patient appointment reminders go out only at facilities where Medipyxis has switched patient appointment alerts on. The reminder is due about 24 hours before the visit, and messages due between 9 p.m. and 8 a.m. in the facility timezone wait until the morning.
- **tz-f08** — live: “Chart timestamps on the patient chart and progress notes are stored in UTC but displayed in the facility timezone.”
  - Product: Progress-note signature times print in the device timezone (utils/formatters.ts:198). Not confirmed.
  - Proposed: (remove the bullet)
- **tz-f09** — live: “Signature timestamps on signed notes show both the UTC time and the local time in the facility timezone.”
  - Product: They show one time, in the timezone of the device that makes the PDF, with the zone abbreviation (utils/formatters.ts:198).
  - Proposed: Signature timestamps on signed notes print in the timezone of the device that makes the PDF, with the zone abbreviation, not in the facility timezone.
- **tz-f10** — live: “If a facility is created without a timezone (for example through the bulk uploader), Medipyxis defaults to America/New_York (Eastern). Change this before booking your first appointment — moving a facility timezone after appointments exist does not retro-adjust already booked slots.”
  - Product: There is no facility bulk uploader for customers; the add form starts on Eastern and switches to the state's timezone (components/FacilityAddEditModal.tsx:562); booking falls back to Eastern when no timezone is saved (components/AppointmentBookingModal.tsx:801).
  - Proposed: A new facility form starts on Eastern and switches to the main timezone of the state you pick, until you choose a timezone yourself. If a facility has no timezone saved, booking falls back to Eastern (America/New_York).
- **tz-f11** — live: “Troubleshooting: Two clinicians see the same slot at different times because one is in a different timezone client-side; the calendar always renders in facility timezone — refresh the browser.”
  - Product: The Fleet Calendar route view can use a provider's own timezone (services/fleetCalendarService.ts:1441), so "always renders in facility timezone" is false.
  - Proposed: (remove the row)
- **tz-f12** — live: “Troubleshooting: A visit in another state is booked in the wrong timezone — Multi-timezone service area is off — enable it, then edit the appointment and set its per-appointment timezone.”
  - Product: No per-appointment timezone exists; booking always uses the facility timezone (components/AppointmentBookingModal.tsx:801).
  - Proposed: A visit in another state is booked in the facility timezone; per-appointment timezones are not available. Enter the time as it reads in the facility timezone.
- **tz-f13** — live: “Facility timezone is separate from user profile locale. Individual clinicians do not carry their own scheduling timezone — every clinician working at a facility sees that facility's timezone.”
  - Product: Users have their own Timezone field and the Fleet Calendar route view uses it when set (services/fleetCalendarService.ts:1441).
  - Proposed: (remove the paragraph)

## Billing Operations overview — 13

https://help.medipyxis.com/modules/billing/overview/

- **ovw-02** — live: “The module opens on four tabs: Overview, Claims, Denials, Payments (ERA).”
  - Product: The fourth tab is labelled "Payments", not "Payments (ERA)" (BillingDashboard.tsx:2710-2718).
  - Proposed: The module opens on four tabs: Overview, Claims, Denials, and Payments. The Payments tab lists the ERAs (electronic remittance advice) received from Stedi.
- **ovw-03** — live: “Overview — High-level KPIs: total billed, pending claims, denial rate, and recent payment activity for the current period.”
  - Product: The Overview tab shows Recent Claims, Quick Actions, Performance Metrics (Payment Rate, Denial Rate, Days in AR), A/R Aging Breakdown, Unbilled Aging, Status Summary and Unsigned Records (BillingDashboard.tsx:2722-3318). There is no total-billed KPI and no recent-payment card on it, and the metrics are a rolling view of current claims, not a period. The KPI tiles above the tabs are Total Claims, Pending Submission, Total Revenue and Outstanding AR (BillingDashboard.tsx:2597-2659).
  - Proposed: Overview — Recent Claims, Quick Actions, Performance Metrics (Payment Rate, Denial Rate, Days in AR), A/R Aging Breakdown, Unbilled Aging, Status Summary and Unsigned Records. Above the tabs, tiles show Total Claims, Pending Submission, Total Revenue and Outstanding AR.
- **ovw-08** — live: “Medipyxis connects to Stedi as the clearinghouse for electronic claim submission (837P), eligibility checks (270/271), claim status (276/277), and remittance advice (835).”
  - Product: 837P, 270/271 and 835 are wired. 276 claim-status inquiries are never sent: StediClaimStatusRequest is declared in _shared/stediTypes.ts:336 and used nowhere. Claim status comes back only as 277CA acknowledgments pushed by Stedi's webhook (_shared/stediAckImport.ts, sync-stedi-responses/index.ts:12-13).
  - Proposed: Medipyxis connects to Stedi as the clearinghouse for electronic claim submission (837P), eligibility checks (270/271), claim acknowledgments (277CA), and remittance advice (835).
- **ovw-09** — live: “Claims that reach Exported status are sent to Stedi automatically.”
  - Product: Nothing sends Exported claims anywhere. Exported means the claim was exported as a PDF or JSON file: the Claims tab's Export PDF marks selected claims exported (BillingDashboard.tsx:1452-1457) and the status text reads "Claim has been exported as PDF or JSON. Ready to submit." (BillingDashboard.tsx:1253-1256). No edge function references the exported status. Claims reach Stedi only when someone submits them (Submit Claim on the claim form, which calls submit-to-stedi).
  - Proposed: Exported means the claim was exported as a PDF or JSON file; it is not sent anywhere. A claim goes to Stedi when a biller clicks Submit Claim on the claim form.
- **ovw-10** — live: “Status updates flow back into the Work Queue and the Payments (ERA) tab in real time, without polling.”
  - Product: Stedi pushes 277CA acknowledgments and 835 ERAs to Medipyxis by webhook (sync-stedi-responses/index.ts:1-17), but the screens do not update in real time. The Work Queue polls: it reloads every 2 minutes while the tab is visible (BillingWorkQueuePage.tsx:957-964). The Payments tab has no subscription; its list is re-read on load or refresh (useERAs.ts:109-136). Only the KPI tiles above the tabs refresh on a billing_claims change (useBillingDashboard.ts:884-902).
  - Proposed: Stedi pushes claim acknowledgments (277CA) and remittances (835) to Medipyxis as they happen. The Work Queue picks up the change on its next refresh (every 2 minutes while the tab is visible, or click Refresh); the Payments tab shows new ERAs when it is reloaded.
- **ovw-12** — live: “Historical ClaimMD claims remain visible for reference.”
  - Product: No screen at v1.1.345 reads the claim_md_* columns; the historical ClaimMD panel that docs/STEDI_ONLY.md lists for BillingClaimDetailPage.tsx is gone. Old claims are ordinary billing_claims rows and list like any other claim, but nothing ClaimMD-specific is displayed.
  - Proposed: Claims created before the switch stay in the Claims list like any other claim; ClaimMD's own responses are no longer shown.
- **ovw-14** — live: “Contact your practice administrator if claims are not advancing past Exported.”
  - Product: Rests on the false premise that Exported claims advance automatically (see ovw-09). Exported is an end state of the PDF/JSON export; a claim leaves it only when someone submits it.
  - Proposed: An Exported claim does not move on by itself. Open it and click Submit Claim to send it to Stedi.
- **ovw-15** — live: “Every claim moves through a defined sequence of statuses: Draft, Pending, Needs Info, Approved, Exported, Submitted, Paid, Denied, Appealed, Cancelled.”
  - Product: The product has 16 claim statuses, not 10 (claimStatusOptions.ts:12-29). Missing from the page: Needs Coding, Coding Review, Pending Review, Needs Provider, Accepted (Legacy), Rejected. Rejected is set automatically from a 277CA rejection (migration 20261019160000_stedi_277ca_claim_status.sql).
  - Proposed: A claim carries one of 16 statuses: Draft, Pending, Needs Info, Needs Coding, Coding Review, Pending Review, Needs Provider, Approved, Exported, Submitted, Accepted (Legacy), Rejected, Paid, Denied, Appealed, Cancelled.
- **ovw-20** — live: “Exported — The claim has been exported / sent to Stedi.”
  - Product: Exported means exported as a PDF or JSON file (BillingDashboard.tsx:1253-1256, 1452-1457); it is not sent to Stedi. Sending to Stedi moves a claim to Submitted.
  - Proposed: Exported — The claim was exported as a PDF or JSON file. It has not been sent to Stedi.
- **ovw-22** — live: “Paid — The payer adjudicated the claim and an ERA has been received and posted.”
  - Product: No server code sets the claim status to Paid when an ERA is posted. Paid is set by a person (the Claims tab status menu, or biller-update-claim-status: backend/supabase/functions/biller-update-claim-status/index.ts:3). Posting payments updates the biller's Claim Status (manual_status) instead (migration 20261026232000_meda145_biller_post_payment_to_ar_ledger.sql:493-504).
  - Proposed: Paid — A biller marked the claim paid: payment has been received and posted.
- **ovw-27** — live: “That manual status is the biller's working state and is what most of the queue's filters and bulk actions operate on.”
  - Product: Only one of the Work Queue's nine filters (Claim Status) reads the manual status (BillingWorkQueuePage.tsx:542-549). The others filter on the search text, date range, appointment status, the derived visit/note/readiness statuses, payer and claim age. The bulk toolbar does set the manual status (BulkActionToolbar.tsx, batch-claim-status-update).
  - Proposed: That manual status is the biller's working state. The Claim Status filter and the bulk action toolbar work on it.
- **ovw-29** — live: “Claims that remain in Pending or Needs Info beyond your organization's internal filing deadline will be flagged in the AR Aging report.”
  - Product: The AR Aging report counts only claims with status submitted, accepted or partial_payment (arAgingService.ts:105), so Pending and Needs Info claims never appear in it. There is no organization filing-deadline setting. Timely filing is shown per claim in the Coding Review drawer, using a fixed window by payer (timelyFiling.ts:1-9; CodingReviewDrawer.tsx:631-633).
  - Proposed: Pending and Needs Info claims are not in the AR Aging report, which covers submitted claims only. The Coding Review drawer shows how many days are left to file each claim, based on its payer (365 days for Medicare, 180 for Medicaid, 90 for others).
- **ovw-30** — live: “A claim can enter the Denials workflow at any point after submission if the payer returns a denial. The claim moves to Denied (and to Appealed if you file an appeal), while the denial's own appeal status tracks separately.”
  - Product: Denial records (denial_management) carry their own appeal_status, as the page says. But a payer denial does not move the claim status: no server code sets status 'denied'; an ERA denial is recorded as the ERA line's outcome (migration 20261109120000_cf226_era_posting_status_and_line_match.sql:102-106). A biller sets Denied or Appealed from the Claims tab status menu or the Work Queue Claim Status.
  - Proposed: When a payer denies a claim, set the claim to Denied (and to Appealed once you file an appeal). The denial's own appeal status is tracked separately on the Denials tab.

## Log a call or in-person visit — 13

https://help.medipyxis.com/modules/business-development/log-call-and-visit/

- **lbl-02** — live: “Before you start: the practice or contact must already exist in the CRM. If not, use New Contact first to add the record before logging activity against it.”
  - Product: New Contact only adds a contact to an existing practice (its form requires Select a practice, frontend/src/components/bd-dashboard/BdActivityModalsWithValidation.tsx:1593). A missing practice is added in the CRM with Add New Practice.
  - Proposed: The practice must already exist in the CRM (add it there with Add New Practice). To add a contact to a practice, use New Contact.
- **lbl-05** — live: “Select the Contact (optional but recommended): choose the specific physician, office manager, or coordinator you reached.”
  - Product: Log Call Activity has no contact field (frontend/src/components/bd-dashboard/BdActivityModalsWithValidation.tsx:332).
  - Proposed: Remove this step; the call form has no contact field.
- **lbl-06** — live: “Set the Call Outcome from the dropdown (for example, whether you reached the contact, left a voicemail, or got no answer).”
  - Product: Outcome options are Positive, Neutral, Negative, No Contact and Follow-up Needed (frontend/src/components/bd-dashboard/BdActivityModalsWithValidation.tsx:393); there is no voicemail option.
  - Proposed: Set the Outcome: Positive, Neutral, Negative, No Contact or Follow-up Needed.
- **lbl-08** — live: “Set Next Steps (optional): add a follow-up date and action so the Next Best Action widget can surface a reminder.”
  - Product: There is no Next Steps field on Log Call (frontend/src/components/bd-dashboard/BdActivityModalsWithValidation.tsx:401).
  - Proposed: Click Business Development in the sidebar, tap Log Call. The Log Call Activity form: Practice (required), Call Subject (required), Duration in minutes (required), Outcome (Positive, Neutral, Negative, No Contact, Follow-up Needed), Call Notes (required).
- **lbl-11** — live: “Enter the Visit Date. Defaults to today; adjust if logging retroactively.”
  - Product: The visit form has no date field; the visit is saved with the current time (frontend/src/pages/BdDashboard.tsx:4614).
  - Proposed: New Visit: Practice (required), Visit Purpose and Duration (required), Outcome, Visit Notes (required). The visit is logged with today's date; there is no date field.
- **lbl-13** — live: “Select the contacts you met (optional) so individual contact engagement records stay current.”
  - Product: The visit form has no contact field (frontend/src/components/bd-dashboard/BdActivityModalsWithValidation.tsx:1162).
  - Proposed: Remove this step; the visit form has no contact field.
- **lbl-15** — live: “Use the voice recording option in the quick-add strip to capture the call or visit by voice; the recording is attached to the activity.”
  - Product: Record Voice Note saves a separate Voice Note activity (frontend/src/components/LocalVoiceRecordingModal.tsx:659), not attached to the call or visit.
  - Proposed: Record Voice Note records a voice note for a practice, saved as a separate Voice Note activity, not attached to the call or visit.
- **lbl-16** — live: “Call and visit records are immediately visible in the CRM practice detail Activity tab and feed the Next Best Action and AI Route Suggestions algorithms. (Stated twice on the page, under both Result headings.)”
  - Product: Next Best Action reads bd_activities (calls and visits) (backend/supabase/functions/bd-daily-suggestions/index.ts:245). AI Route Suggestions does not read bd_activities (frontend/src/utils/intelligentRouting.ts:361); it uses practice.last_activity_date, which no code in v1.1.345 updates on a logged call or visit.
  - Proposed: Calls and visits appear in the practice's Activity tab and count toward the Next Best Action cycle.
- **lbl-17** — live: “Both Next Best Action and AI Route Suggestions recompute on demand (with a short cache), so a new call or visit is reflected almost immediately after you refresh.”
  - Product: True for Next Best Action. AI Route Suggestions does not read logged activities (frontend/src/utils/intelligentRouting.ts:361).
  - Proposed: Next Best Action is worked out when the dashboard loads, so a new call or visit counts after you refresh.
- **lbl-18** — live: “An activity you already saved stays editable from either the practice's Activity tab or the BD dashboard: open the row's ⋯ menu, click Edit; the composer reopens with the saved values.”
  - Product: Edit exists only on the practice Activity tab, as "Edit note", which edits subject and notes in a small dialog (frontend/src/pages/CrmPracticeDetail.tsx:2300).
  - Proposed: Edit from the practice's Activity tab: ⋯ → Edit note, change the subject and notes, Save changes. You can edit your own; administrators and BD managers anyone's. The original date and creator stay; the edit time is recorded. Spend entries cannot be edited or archived.
- **lbl-21** — live: “A confirm dialog explains that the activity will be excluded from Next Best Action and MTD spend calculations. Confirm.”
  - Product: The dialog "Archive this note?" says the note leaves the feed and stops counting toward the practice's activity metrics (frontend/src/pages/CrmPracticeDetail.tsx:4776); it does not mention Next Best Action or MTD spend, and spend entries cannot be archived.
  - Proposed: Archive: ⋯ → Archive note. The Archive this note? dialog says it leaves the feed and stops counting toward the practice's activity metrics. A “Note archived” message offers Undo.
- **lbl-23** — live: “View archived activities: on the practice detail Activity tab, switch the view mode from Live to Archived. The row menu on an archived entry offers Restore.”
  - Product: The control is an Archived filter pill (frontend/src/pages/CrmPracticeDetail.tsx:2198), not a Live/Archived view mode. Restore is on archived rows.
  - Proposed: Click the Archived filter to list archived activities; click Restore to bring one back. You can restore what you archived; administrators and BD managers any.
- **lbl-24** — live: “Archived activities are excluded from Next Best Action, dashboard KPIs, and MTD spend rollups. They remain in the audit trail and export.”
  - Product: Next Best Action excludes archived rows (backend/supabase/functions/bd-daily-suggestions/index.ts:247). Spend entries cannot be archived at all (backend/supabase/functions/bd-activity-mutate/authorize.ts:59), so archiving never changes MTD spend; inclusion in the audit trail and export is not shown in code.
  - Proposed: Archived activities no longer count toward Next Best Action. Spend entries cannot be archived.

## Main Inventory reference — 13

https://help.medipyxis.com/modules/inventory/main-inventory/

- **inv-mi-01** — live: “Main Inventory is the authoritative, real-time list of every inventory unit across all product categories at your facility.”
  - Product: The Main Inventory hub tile opens /inventory/reorder-requests, the "Clinician Fulfillment Request queue" (InventoryManagement.tsx). On-hand units are listed per category on the Active Inventory tab of each category tile (ProductBatchesManagement.tsx tabs; ActiveProducts.tsx). No single all-category unit list is linked from the hub.
  - Proposed: Each category tile's Active Inventory tab lists the stock on hand for that category at your facility.
- **inv-mi-02** — live: “A unit appears here as soon as it is received through a category tile (Amniotic / Advance Treatment, Biologics / Matrix, Conservative Care Products, PRP, or Ultrasonic Mist).”
  - Product: A receipt is auto-stocked only when it matches; otherwise it waits (e.g. Pending Approval or Exception) and must be approved on the Receiving History tab (ManualReceiveModal.tsx:461-467; BulkUploadOrderModal.tsx:1593).
  - Proposed: A unit appears once its receipt is stocked. Receipts with exceptions wait on the Receiving History tab until approved.
- **inv-mi-03** — live: “Active Inventory flat view columns: UIN, LOT #, TISSUE ID, EXP DATE, SIZE, HCPCS, SKU, STATUS.”
  - Product: The flat view (ActiveProducts.tsx:890-950) shows Product Name, Lot #, Tissue ID, Exp Date, Size, HCPCS, SKU, Status, Actions. There is no UIN column. Tissue ID, Size and HCPCS show only for Amniotic and Biologics (isPatientBased, ActiveProducts.tsx:80).
  - Proposed: Active Inventory flat view columns: Product Name, Lot #, Exp Date, SKU, Status; Amniotic and Biologics also show Tissue ID, Size and HCPCS.
- **inv-mi-04** — live: “UIN — the system-generated identifier assigned to this specific physical unit at receiving; no two units share a UIN; this is the value scanned or entered in the Visit Wizard.”
  - Product: Receiving (inventory-import-batches) writes no UIN. inventory_product_catalog_v2 has a product-level uin column that is never rendered. The Visit Wizard's "Box UID/UIN" field is free text with no inventory lookup (ProcedureSuppliesVisit.tsx:5346-5363).
  - Proposed: Remove the UIN row. Units are identified by lot number (and tissue ID for amniotic and biologics).
- **inv-mi-05** — live: “LOT # is the manufacturer's lot number as entered during receiving, and includes the product's LOT SUFFIX.”
  - Product: The lot is stored exactly as typed. The catalog Lot No. Suffix only makes a lot number required on bulk upload (BulkUploadOrderModal.tsx:1158-1183); nothing appends or checks the suffix.
  - Proposed: LOT # — the manufacturer's lot number as entered during receiving.
- **inv-mi-06** — live: “TISSUE ID is populated for amniotic and advance-treatment products; blank for biologics and conservative care products.”
  - Product: Biologics require a Tissue ID at receiving like amniotic: isPatientBasedCategory = Amniotic || Biologics (ManualReceiveModal.tsx:86-88) and the save is refused without it (line 394).
  - Proposed: TISSUE ID — required and shown for Amniotic and Biologics; not collected for Conservative Care, PRP or UM.
- **inv-mi-10** — live: “HCPCS is passed to the billing engine when the unit is applied.”
  - Product: No path was found that carries the unit's stored hcpcs_code (inventory_product_batches_v2) into claim building; visit-inventory returns it for display but autoBillingClaimService builds HCPCS lines from visit data. Cannot be confirmed from code.
- **inv-mi-12** — live: “STATUS value "Hold / Release": amniotic/biologics hold-and-release control.”
  - Product: The Release status (12) is labelled "Receive" in the UI: Enums.ts:836 { value: ProductStatusEnum.Release, label: "Receive" }. Users never see the word Release.
  - Proposed: Hold / Receive — amniotic and biologics hold control; Receive marks a held unit as released.
- **inv-mi-14** — live: “Used — applied to a patient; the UIN links to the encounter record.”
  - Product: No per-unit UIN exists on the live path (see inv-mi-04).
  - Proposed: Used — applied to a patient at a visit.
- **inv-mi-17** — live: “In Procedures & Supplies the clinician sees a product search field and a Scan UIN button, and scans the UIN barcode with a device camera or barcode reader or types it into the search field.”
  - Product: Procedures & Supplies has no scan control and no inventory search; it has a free-text "Box UID/UIN" input, required for a skin-substitute application (ProcedureSuppliesVisit.tsx:3597, 5346-5363).
  - Proposed: For a skin-substitute application, Procedures & Supplies requires the Box UID/UIN typed from the package.
- **inv-mi-18** — live: “The system validates that the scanned UIN exists in Main Inventory for the facility, has status Available or Reserved, has not passed its EXP DATE, and has an Approved or Agreed IVR if required; if validation fails it shows the reason (expired, wrong facility, no IVR).”
  - Product: The Box UID/UIN text is not validated against inventory. Stock validation happens in the Conservative Care & Interventions lot picker: it lists facility stock with status Available/Unused (ConservativeCareInterventionVisit.tsx:718-745), plus patient allocations, and blocks expired batches ("Cannot use expired batch").
  - Proposed: Stock is picked in Conservative Care & Interventions from your facility's Available stock and the patient's allocations; expired batches cannot be picked.
- **inv-mi-19** — live: “If validation passes, the unit is added to the encounter's supply record; its status updates to Used when the visit is signed and locked.”
  - Product: Inventory is deducted when the clinician clicks Continue to Review, before signing: VisitWizardV4.tsx:10204-10212 calls updateInventoryBatchStatuses ("[CONTINUE TO REVIEW] Updating inventory batch statuses..."), skipped when offline. The sign step (ProviderAttestationVisit.tsx) does not deduct.
  - Proposed: Picked stock is deducted from inventory when you click Continue to Review (online only), not when the visit is signed.
- **inv-mi-20** — live: “Applying a graft outside the Visit Wizard breaks the chain of custody between the physical unit and the claim.”
  - Product: Advice about audit risk, not product behaviour; no code check possible.

## Set up a facility in your first week — 12

https://help.medipyxis.com/admin/facility-setup/

- **fs-f01** — live: “Before you start: You need the admin or superadmin role.”
  - Product: Access is the Facilities feature: user-routes.tsx:603; FacilityDashboard has no admin role check.
  - Proposed: You can open Facilities in the sidebar. Administrators always can.
- **fs-f02** — live: “Open the Organization Selector in the top-left header and select the facility.”
  - Product: There is no Organization Selector; you switch with Switch Facility in the profile menu (components/AppShell.tsx:1706).
  - Proposed: If you work at more than one facility, open your profile menu (top right), click Switch Facility, and pick the facility.
- **fs-f03** — live: “Share this UUID with any integration partners or API consumers; it is the stable identifier for this facility across all Medipyxis APIs.”
  - Product: There is no customer-facing Medipyxis API that takes a facility ID (no facility_uuid parameter in the vendor API). Not confirmed.
  - Proposed: Medipyxis support may ask for the facility ID.
- **fs-f04** — live: “Set the fax number: Navigate to Facilities in the sidebar. Click Actions → Edit next to your facility. Enter the 10-digit fax number in the Fax Number field. Click Save.”
  - Product: Edit is a button on the row (pages/FacilityDashboard.tsx:1032), not an Actions menu, and the button is Save Changes (components/FacilityAddEditModal.tsx:1284).
  - Proposed: Facilities → Edit button on your facility's row → Fax Number → Save Changes.
- **fs-f05** — live: “The fax number entered here is the outbound caller ID shown to referring practices. Inbound faxes are routed via the More (Fax) module; this field does not change inbound routing.”
  - Product: Inbound faxes are matched to a facility by this number (functions/receive-fax-webhook/index.ts:343), so the field does change inbound routing. The outbound caller-ID part is true.
  - Proposed: Faxes sent from Medipyxis for this facility go out from this number, so it must be set up for the facility's fax service; sending is refused while it is blank. Faxes received on that number are filed to this facility.
- **fs-f06** — live: “NPI and Tax ID are both format-validated as you type. When you enter a valid 10-digit NPI, Medipyxis performs an NPPES lookup and offers to auto-fill the facility's legal name, address, and taxonomy. If NPPES cannot confirm the NPI, a Save anyway? prompt appears.”
  - Product: NPPES confirmation runs on save; the "Found in federal NPPES registry" card fills legal name, address and phone, not taxonomy (components/FacilityAddEditModal.tsx:394); the button reads "Save anyway" (components/FacilityAddEditModal.tsx:816).
  - Proposed: When you enter a 10-digit NPI, Medipyxis looks it up in the NPPES registry and shows a Found in federal NPPES registry card; Use this info fills the Legal / Billing Name, address and phone, Dismiss keeps what you typed. If the registry cannot confirm the NPI, saving stops with "We can't confirm this NPI is a real registered provider" and a Save anyway button.
- **fs-f08** — live: “Set business hours: In the facility edit panel, expand Business Hours. Toggle each day on or off and set Open and Close times in 30-minute increments. Business hours affect the SLA breach timer displayed on the Fax Review Queue and the Referral Intake kanban. Click Save.”
  - Product: There is no Business Hours setting anywhere in frontend/src.
  - Proposed: (remove the step)
- **fs-f09** — live: “Set intake SLAs: Navigate to Referral Intake settings (Settings gear icon). Set the New Referral SLA and the Financial Clearance SLA. These thresholds drive the red SLA Breach Timer shown on each referral card.”
  - Product: Neither "New Referral SLA" nor "Financial Clearance SLA" exists in frontend/src; intake SLAs are not configurable.
  - Proposed: (remove the step)
- **fs-f10** — live: “Set billing defaults: Navigate to Billing → Charge Master. Confirm the facility's charge rates and, under the Templates tab, the default superbill template. Confirm the correct Default Rendering Provider NPI so it populates CMS-1500 §24J automatically on every new claim.”
  - Product: The Charge Master holds rates and templates (pages/ChargeMasterPage.tsx:61) but there is no default template and no Default Rendering Provider setting.
  - Proposed: Click Billing Operations, then Charge Master; add rates in Insurance Charges and Self-Pay Charges. A claim line with no rate is priced at $0.00 and the claim cannot be sent to Stedi; the message reads No price on file for CPT ….
- **fs-f11** — live: “Result: Your facility is Active, has a fax number, a validated NPI/Tax ID and legal name, enforces business-hour SLAs on Referral Intake, and auto-populates a default rendering provider on new claims.”
  - Product: Business-hour SLAs and a default rendering provider do not exist (no "Business Hours"/"Default Rendering Provider" in frontend/src).
  - Proposed: Your facility is Active and has a fax number, a confirmed NPI, Tax Number and legal name.
- **fs-t1** — live: “Troubleshooting: Facility shows Inactive in the list — not yet activated by Medipyxis support — contact your implementation contact.”
  - Product: An inactive facility is one that was deactivated; anyone with Facilities can reactivate it from the Deactivated Facilities tab (pages/FacilityDashboard.tsx:1049).
  - Proposed: A facility not in the list was deactivated: open the Deactivated Facilities tab and click Reactivate on its row.
- **fs-t3** — live: “Troubleshooting: SLA timer never turns red — business hours not saved, or SLA set to 0; Default rendering provider blank — complete Step 6.”
  - Product: Business hours, SLA settings and a default rendering provider do not exist.
  - Proposed: (remove the rows)

## Timely filing windows — 12

https://help.medipyxis.com/modules/billing/timely-filing/

- **tf-01** — live: “Every payer has a hard deadline between the date of service and the date a claim must be filed. Miss it and the payer denies for timely filing — a hard denial with almost no appeal path.”
  - Product: Payer/regulatory fact, not product behavior.
- **tf-04** — live: “Medipyxis derives the filing window from the payer name on the claim's insurance plan.”
  - Product: The drawer passes row.claim_payer_name, which is the billing claim's payer_name (frontend/src/pages/BillingWorkQueuePage.tsx:527); a Work Queue row with no claim yet has no payer name and gets the 90-day default.
  - Proposed: Medipyxis derives the filing window from the payer name on the claim. A row with no claim yet gets the 90-day default.
- **tf-06** — live: “The default of 90 days is the safe floor for commercial payers ... because that is the shortest window in wide use (Aetna, Cigna, some BCBS plans).”
  - Product: Payer contract facts; not encoded in the product beyond the 90-day default (frontend/src/utils/billing/timelyFiling.ts:8).
- **tf-08** — live: “When a commercial contract needs a specific window, the biller can override on submission.”
  - Product: There is no override. getFilingDeadlineDays takes only the payer name (frontend/src/utils/billing/timelyFiling.ts:1-9) and no code anywhere overrides the window.
  - Proposed: There is no override: the badge always uses these rules. When a contract allows a longer window, treat the badge as advisory.
- **tf-12** — live: “Timezones do not enter. The DOS on the claim is a YYYY-MM-DD value (a Postgres DATE), so it is a calendar day, not an instant.”
  - Product: The drawer's DOS is not a stored DATE: it is the UTC calendar day of the appointment's start time, const dos = isoDateFromUTC(a.start_at) (frontend/src/pages/BillingWorkQueuePage.tsx:438, helper at 123-126). An appointment late in the evening in US time zones gets the next day as its DOS, so time zones do enter.
  - Proposed: The DOS in the drawer is the UTC calendar day of the appointment's start time, and "today" is the UTC calendar day. An appointment late in the evening in US time zones can show the next day as its DOS.
- **tf-13** — live: “A claim submitted late-night in São Paulo on day 89 lands as day 89 in UTC too ... No off-by-one at day boundaries.”
  - Product: Because the DOS is the UTC day of the appointment start (frontend/src/pages/BillingWorkQueuePage.tsx:438), a visit after about 8 PM Eastern (9 PM São Paulo) carries the next day's date, making the count one day short. The badge also never uses submission time, so the example's premise does not apply.
  - Proposed: An evening appointment in the Americas can carry the next UTC day as its DOS, so the badge can count one day fewer than the calendar day of the visit.
- **tf-16** — live: “Watch the Stedi Actions Inbox for the 999/277CA response. If the file rejects, you may not have time to fix and resubmit.”
  - Product: 999 acknowledgements are not recognised and never reach the inbox; only 277CA rejections do (backend/supabase/functions/_shared/stediInboundEvent.ts:33-38; backend/supabase/functions/_shared/stediAckImport.ts:403).
  - Proposed: Watch the Stedi Actions Inbox for a 277CA rejection. If the claim rejects, you may not have time to fix and resubmit.
- **tf-18** — live: “Submit anyway if: the commercial payer allows longer than 90 days by contract; the payer has published a deadline exception; you have documentation supporting a timely-filing appeal.”
  - Product: Billing advice; not product behavior.
- **tf-19** — live: “For a Medicare 365-day claim past deadline: the CMS-1500 has no appeal path. Do not submit. Write off in AR aging with the timely-filing reason code.”
  - Product: Regulatory guidance plus an AR-aging write-off workflow that was not verified here; nothing in the timely-filing code encodes it.
- **tf-20** — live: “The Work Queue can be sorted by DOS ascending — oldest first — which surfaces the claims closest to their deadline at the top.”
  - Product: There is no sort control. The Work Queue always lists appointments oldest start time first (frontend/src/pages/BillingWorkQueuePage.tsx:234). Oldest DOS is not the same as closest deadline when payers differ (365 vs 90 days).
  - Proposed: The Work Queue lists rows oldest DOS first. Combined with the badge, that gives a "what to work today" order.
- **tf-23** — live: “Medicare Advantage plans (Part C) are commercial products administered by private carriers, and many carry commercial-shorter filing windows (90 or 180 days).”
  - Product: Payer contract fact; not encoded in the product.
- **tf-24** — live: “Payer name unusual or blank — a claim with no payer name on the insurance plan falls to the 90-day default. Fix the insurance plan to give the badge accurate information.”
  - Product: The badge reads the billing claim's payer_name (frontend/src/pages/BillingWorkQueuePage.tsx:527), not the insurance plan; a row with no claim yet also falls to 90 days.
  - Proposed: Payer name unusual or blank — a claim with no payer name, or a row with no claim yet, falls to the 90-day default. Fix the payer on the claim to give the badge accurate information.

## Wound Cockpit overview — 12

https://help.medipyxis.com/modules/visit-wizard-ehr/wound-cockpit/

- **vd-wc-08** — live: “Metric counters: Five counters summarize the patient's wound caseload: Total Cases, Open Wounds, Graft Eligible, Overdue Visits, IVR Required.”
  - Product: There are six counters, labelled Cases, Open, Eligible, Overdue, IVR and In Protocol, in a six-column grid (WoundCockpitPage.tsx:2971-3032). No counter is labelled Total Cases, Open Wounds, Graft Eligible, Overdue Visits or IVR Required.
  - Proposed: Metric counters: Six counters summarize the patient's wound caseload: Cases, Open, Eligible (graft eligible), Overdue, IVR (IVR required), and In Protocol.
- **vd-wc-10** — live: “Top actions: Add Visit — start a new encounter (also available on each wound card).”
  - Product: There is no Add Visit button at the top of the page or on any card. The page header holds an appointment picker: choose a scheduled visit or "+ Start visit — pick a calendar slot…", then click Open (AppointmentPickerInline.tsx:337-368, rendered at WoundCockpitPage.tsx:2571 and 2681).
  - Proposed: Visit picker: Pick a visit or start a new one… — choose a scheduled visit, or + Start visit — pick a calendar slot… to book one, then click Open.
- **vd-wc-13** — live: “Status pills: Active, plus IVR readiness (IVR: Not Ready or IVR Available).”
  - Product: The status pill reads "IVR: " plus the wound's IVR status, one of Not Ready, Pending, Submitted, Approved, Rejected, Needs Info, Needs Documentation or Product Received (WoundCockpitPage.tsx:189-197; WoundCaseCard.tsx:342). "IVR Available" appears nowhere on the page or the cards.
  - Proposed: Status pills: Active, plus the wound's IVR status (for example IVR: Not Ready, IVR: Pending or IVR: Approved).
- **vd-wc-15** — live: “Compliance pills: Graft Eligible, IVR Available, and LCD: Compliant — the current compliance and eligibility status.”
  - Product: There is no LCD: Compliant, IVR Available, Graft Eligible or IVR Not Available pill on the card. Compliance actions return an empty list (WoundCockpitPage.tsx:2050) and the card's only extra chips are "Visit Overdue" and "IVR Action Required" (WoundCockpitPage.tsx:1990, 1999). Coverage readiness is shown on each card's IVR readiness button, which opens the readiness check (WoundCaseCard.tsx:698).
  - Proposed: Each card has an IVR readiness button whose label and colour reflect the wound's coverage check; click it to see what the check still needs. A card may also show Visit Overdue or IVR Action Required.
- **vd-wc-18** — live: “Actions: Add Visit, Details, Intake, and an overflow menu.”
  - Product: Cards have Details, Intake and a More actions menu (Archive Wound Case), plus the IVR readiness button and, once IVR is approved, Order More (WoundCaseCard.tsx:746-811). There is no Add Visit action.
  - Proposed: Actions: the IVR readiness button, Details, Intake, a More actions menu (Archive Wound Case), and Order More once the IVR is approved.
- **vd-wc-19** — live: “Use the Visit Selector in the upper-right corner of the Wound Cockpit:”
  - Product: The control is an unnamed dropdown with an Open button; nothing on screen is labelled Visit Selector. On desktop it is the last item in the header's right-hand button group (WoundCockpitPage.tsx:2681; AppointmentPickerInline.tsx:337-368).
  - Proposed: Use the visit picker (Pick a visit or start a new one…) in the upper-right corner of the Wound Cockpit:
- **vd-wc-24** — live: “The colored pills on each card summarize readiness at a glance: LCD: Compliant (green) — the wound's documentation meets the LCD compliance checks. Graft Eligible (purple) — the wound qualifies for graft/advanced therapy consideration. IVR Available (green) / IVR: Not Ready (gray) — whether the wound is ready for an Insurance Verification Request for advanced therapy.”
  - Product: There is no LCD: Compliant, IVR Available, Graft Eligible or IVR Not Available pill on the card. Compliance actions return an empty list (WoundCockpitPage.tsx:2050) and the card's only extra chips are "Visit Overdue" and "IVR Action Required" (WoundCockpitPage.tsx:1990, 1999). Coverage readiness is shown on each card's IVR readiness button, which opens the readiness check (WoundCaseCard.tsx:698).
  - Proposed: Each card has an IVR readiness button whose label and colour reflect the wound's coverage check; click it to see what the check still needs. A card may also show Visit Overdue or IVR Action Required.
- **vd-wc-25** — live: “A wound that is not IVR-ready shows IVR: Not Ready and IVR Not Available on the card's status bar. Resolve the outstanding documentation (measurements, tissue percentages, prior-treatment history) to advance IVR readiness.”
  - Product: "IVR Not Available" is not shown anywhere on the page or cards. "IVR: Not Ready" is the default whenever wound_data.ivr_status is empty or "None" (WoundCockpitPage.tsx:1567-1568); it is not computed from measurements, tissue percentages or prior treatments. The readiness check behind the IVR readiness button lists what is missing.
  - Proposed: IVR: Not Ready shows until an IVR status is recorded for the wound. Click the card's IVR readiness button to see what the coverage check still needs.
- **vd-wc-26** — live: “Roles and permissions: Clinician — view wounds and compliance status; start visits. Clinical manager — view wounds and compliance status. Medical director — view wounds and compliance status; review attested notes. Admin — view everything in their facility.”
  - Product: The page has no per-role behaviour. The route is gated only by the All Patients feature (user-routes.tsx:2570-2572), and the cockpit page, picker and card never check a role, so a clinical manager can start visits like anyone else.
  - Proposed: Anyone with access to All Patients can open the Wound Cockpit and use all of its actions. The page does not change by role.
- **vd-wc-28** — live: “Troubleshooting: Add Visit is disabled — A visit is already in progress for today, or the wound is archived — Check for an existing draft; or restore the wound from Archived Wounds.”
  - Product: There is no Add Visit button. The picker's Open button is disabled only until a real choice is made or while it loads (AppointmentPickerInline.tsx:365). Archived wounds are restored with Unarchive in the Archived Wound Cases list (WoundCockpitPage.tsx:3598).
  - Proposed: Troubleshooting: Open is disabled — No visit is chosen in the picker yet — Choose a scheduled visit (an open note is marked "note in progress") or + Start visit — pick a calendar slot…. To work on an archived wound, open Archived Wounds and click Unarchive.
- **vd-wc-29** — live: “Troubleshooting: LCD: Compliant pill is missing — Wound documentation is incomplete — Complete the Wound Assessment (step 7) measurements and tissue percentages, then save.”
  - Product: No LCD: Compliant pill exists on the page (see vd-wc-15), so it can never be "missing" for a reason.
  - Proposed: Troubleshooting: the IVR readiness button shows the check is not met — Click it to open the readiness check and see what the check still needs.
- **vd-wc-30** — live: “Troubleshooting: IVR shows "Not Ready" — Required readiness data is missing — Complete measurements, tissue composition, and prior-treatment history; the pill updates on save.”
  - Product: "IVR: Not Ready" is the default whenever wound_data.ivr_status is empty or "None" (WoundCockpitPage.tsx:1567-1568). It is not derived from measurements, tissue composition or prior treatments, so completing them does not change the pill.
  - Proposed: Troubleshooting: IVR shows "Not Ready" — No IVR status is recorded for the wound yet — Click the IVR readiness button on the card to see what the coverage check still needs.

## Import and export data — 11

https://help.medipyxis.com/admin/data-import-export/

- **de-00** — live: “Bring staff and patient records in via bulk upload and the Practice Onboarding pipeline, review ZusHealth patient data in the chart, and export referral and claim records.”
  - Product: Bulk employee upload is switched off (components/HrBulkUploadModal.tsx:716) and Referral Intake has no export (Referrals.tsx). Practice Onboarding, ZusHealth in the chart and claim exports are real.
  - Proposed: Bring patient records in with the Practice Onboarding importer, review ZusHealth patient data in the chart, and export billing records from Billing Operations.
- **de-f01** — live: “Before you start: You need the admin or superadmin role.”
  - Product: Practice Onboarding is reached from the Administrator cockpit and gated by the Administrator feature, not by an admin/superadmin role check in the page (pages/administrator/AdministratorCockpit.tsx:21).
  - Proposed: Practice Onboarding is on the Administrator cockpit; its card is shown to admins.
- **de-f02** — live: “Bulk Employee Upload: Navigate to HR & Compliance → Bulk Employee Upload. Click Download CSV Template. Populate the template (first name, last name, email unique per organization, role matching Organization Role Config, phone 10-digit, facility assignment, provider fields). Upload the CSV; the system runs a validation pass and shows errors in a preview. Fix flagged rows, re-upload, and confirm. Rows that pass validation are imported even if others fail.”
  - Product: The Bulk Employee Upload tile opens a "Bulk upload is temporarily disabled." message (components/HrBulkUploadModal.tsx:716); staff are added one at a time with New Employee Onboarding.
  - Proposed: The Bulk Employee Upload tile opens a message that bulk upload is temporarily disabled; add staff with New Employee Onboarding.
- **de-f03** — live: “To migrate an entire practice's patients and clinical history, navigate to /administrator → Practice Onboarding and work through the pipeline: Patients first, then Insurance, Medications, Allergies, Comorbidities, Emergency Contacts, Documents, and Wounds, and finally Visit History.”
  - Product: Wounds is step 7 and "Documents & Historical Wound Photos" step 8, so Documents comes after Wounds (pages/administrator/PracticeOnboarding.tsx:141).
  - Proposed: Click Administrator in the sidebar, then the Practice Onboarding card. Nine steps in order: Patients; Insurance, Medications, Allergies, Comorbidities, Emergency Contacts, Wounds, Documents & Historical Wound Photos; Visit History.
- **de-f05** — live: “Imported patients are flagged so their first visit shows a migration-context banner in the Visit Wizard.”
  - Product: Only patients imported as established transfers get the banner (components/VisitWizardV4.tsx:16894); new-patient imports do not.
  - Proposed: A patient imported as a transfer from another EHR shows an "Established Patient — Transferring from …" banner on their first visit in Medipyxis.
- **de-f06** — live: “Imported items show per-row provenance badges indicating their source and date, and appear read-only in the chart.”
  - Product: The badge shows the source only (Zus or Manual), not the date (components/patient/ZusProvenanceBadge.tsx:11); read-only display was not confirmed.
  - Proposed: A last-sync pill shows how current the data is, and rows show a Zus or Manual source badge.
- **de-f07** — live: “Contributing data out: when a visit is finalized, Medipyxis automatically contributes it back to the patient's external health record via ZusHealth/TEFCA — no extra step for the clinician.”
  - Product: Contribution is skipped for patients not linked to ZusHealth (functions/zus-contribute-visit/index.ts:585) and for facilities without a ZusHealth connection.
  - Proposed: When a visit is finalized with Sign & Lock, Medipyxis sends it to ZusHealth automatically, only for patients linked to ZusHealth at facilities connected to ZusHealth.
- **de-r08b** — live: “Medipyxis does not modify or delete records sourced from ZusHealth.”
  - Product: No code-level guarantee was found; the statement is not confirmed by any product check.
  - Proposed: (remove the sentence)
- **de-f09** — live: “Export referrals: Navigate to Referral Intake. Click the Export button. Select date range, status filter, and format. Download the file. PHI columns are included only if your role has patient-level access.”
  - Product: Referral Intake (pages/Referrals.tsx) has no Export button or export function.
  - Proposed: Referral Intake has no export.
- **de-f10** — live: “Export claims and payments: Navigate to Billing. Apply filters (date range, payer, status) in the Claims or Work Queue view. Use the Export CSV action to download the filtered set. For remittance detail, export from the Payments (ERA) tab.”
  - Product: Only the Work Queue has Export CSV (pages/BillingWorkQueuePage.tsx:1063); the Claims tab exports PDF or JSON and marks claims Exported (pages/BillingDashboard.tsx:1442); ERAs download one at a time as PDF.
  - Proposed: Billing Operations → Work Queue: apply filters and click Export CSV to download the filtered rows. On the Claims tab, select claims and click Export PDF or Export JSON. Exporting marks those claims Exported; it does not send them. On the Payments tab, use the download button on an ERA row (Download ERA as PDF). On the Denials tab, Export CSV downloads the filtered denials.
- **de-res** — live: “Result: Your staff and patients are imported, ZusHealth data flows into the chart with visits contributed back automatically, and your billing and referral teams can self-serve CSV exports.”
  - Product: Staff bulk upload is disabled and referrals cannot be exported (see de-f02, de-f09).
  - Proposed: Your patients are imported, ZusHealth data is available in the chart, and your billing team can export the Work Queue as CSV.

## Notification settings and channels — 11

https://help.medipyxis.com/admin/notifications/

- **nt-f01** — live: “SMS — Coming soon. Text messages for time-sensitive alerts. Backend is built and tested — not yet launched.”
  - Product: SMS is live in the release under test (constants/notificationChannels.ts:21; backend _shared/notification-channels.ts also says live).
  - Proposed: Channels: In-app (the bell) live, Email live, SMS live, Push coming soon.
- **nt-f02** — live: “Push: Mobile push through the Medipyxis app.”
  - Product: Push is coming soon (constants/notificationChannels.ts:22); nothing names a Medipyxis app as the push channel.
  - Proposed: Push — Coming soon.
- **nt-f03** — live: “Turning off email or muting SMS does not silence the bell — it silences the outbound delivery.”
  - Product: Non-clinical types can be muted in the bell per type; only clinical alerts cannot (utils/notificationPreferenceEdit.ts:113).
  - Proposed: Every alert also appears in the notification bell, whatever delivery method a person chooses. Clinical alerts cannot be hidden from the bell.
- **nt-f04** — live: “/facility/{facility_uuid}/settings/notifications — same page, scoped to the current facility. Admins cannot set preferences on behalf of another user.”
  - Product: Preferences are per person, not per facility: the save function takes no facility_id (backend/supabase/functions/set-notification-preferences/index.ts). The admin restriction was not confirmed.
  - Proposed: Each person sets their own preferences: profile menu → Settings → Alert Method under Notification Preferences, or More notification settings to open Notification Settings (/settings/notifications).
- **nt-f05** — live: “Today the preference surface controls one event family: BD Rep alerts. Other event families (billing, referral, clinical) use system defaults today. A per-event preference surface for those families is on the roadmap.”
  - Product: Per-type preferences already ship: the "By notification type" card (components/notifications/settings/EventPreferencesList.tsx:100).
  - Proposed: How we reach you: the default for alerts outside the app, BD Rep alerts included. By notification type: change one type without touching the default; types are grouped (Clinical, Billing, HR, Inventory, Messages, Onboarding, Operations, Referrals); types you have not changed follow your default.
- **nt-f06** — live: “SMS Text Messages: in-app bell + SMS (falls back to email until SMS launches). All Channels: in-app bell + email + SMS (falls back to email-only until SMS launches). Pause Alerts: in-app bell only — outbound delivery is muted.”
  - Product: SMS is live, so there is no email fallback (constants/notificationChannels.ts:21); Pause Alerts still emails critical alerts and any type changed separately.
  - Proposed: Email Alerts: alerts delivered to your inbox. SMS Text Messages: alerts sent to your phone. All Channels: email and SMS together. Pause Alerts: no email or text, except critical alerts (where email is allowed) and any type you changed separately; the bell still shows everything.
- **nt-f07** — live: “What happens before SMS launches: the preference is saved as chosen; delivery falls back to email; the settings page shows a banner "Your saved choice was SMS, which needs text messaging…"; when SMS launches the saved preference activates automatically. The UI marks SMS and All Channels as pending.”
  - Product: SMS is live (constants/notificationChannels.ts:21), so the pending state and fallback banner do not show.
  - Proposed: (remove the section)
- **nt-f08** — live: “The bell shows a Dismiss button. Dismissing a notification hides it from the bell list but preserves the audit record — every notification is logged in party_notifications with recipient, event key, dispatch time, and read/dismissed timestamps.”
  - Product: NotificationBell.tsx has no Dismiss control; it offers Mark all read and opens the full notifications page.
  - Proposed: The bell is in the top bar with an unread badge; click a notification to open it, Mark all read clears the count, and the full notifications page opens from the bell.
- **nt-f09** — live: “Event families: bd_rep_alert_preferences → bell + user-chosen channel; referral.* → bell + email (system default); billing.* (denied claim, ERA posted, work-queue task assigned) → bell + email (system default); clinical.* (signed note needs addendum, LCD guardrail alert) → bell + email (system default).”
  - Product: Delivery for each type follows the person's preferences (By notification type), not a fixed bell + email system default; the family names are internal.
  - Proposed: By notification type: change one type without touching the default; types are grouped (Clinical, Billing, HR, Inventory, Messages, Onboarding, Operations, Referrals); types you have not changed follow your default.
- **nt-t1** — live: “Troubleshooting: User is not receiving email alerts — update the email in Admin → User Management and ask the user to save preferences again.”
  - Product: There is no Admin → User Management item; the email is edited in HR & Compliance → Facility Users.
  - Proposed: Someone not receiving email: their method is Pause Alerts or their address is wrong — check Notification Settings; fix the address in HR & Compliance → Facility Users.
- **nt-f10** — live: “Troubleshooting: User asks why SMS never arrived — SMS channel is not yet launched — point them to the banner; Duplicate BD alerts — dismiss any one of them and the other duplicates are marked read together.”
  - Product: SMS is live (constants/notificationChannels.ts:21); no duplicate-collapsing on dismiss exists.
  - Proposed: Someone not receiving email: their method is Pause Alerts or their address is wrong — check Notification Settings; fix the address in HR & Compliance → Facility Users.

## BD / CRM first hour — 11

https://help.medipyxis.com/getting-started/by-role/bd-crm/

- **bd-00** — live: “By the end of this hour you will have your rep list configured, logged a practice visit, and learned how to read the ROI report that ties referral sources to revenue.”
  - Product: There is no ROI report that ties referral sources to revenue: ROI (MTD) is referrals × a fixed $3,500 (pages/BdDashboard.tsx:2885).
  - Proposed: By the end of the hour: find your practices in the CRM, log a first call or visit, and know what the BD dashboard shows.
- **bd-old-01** — live: “Click your avatar → My BD Profile. Set your territory, target-visit cadence, and monthly goal.”
  - Product: There is no My BD Profile page and no territory, cadence or goal setting in frontend/src.
  - Proposed: (remove the step)
- **bd-old-02** — live: “BD → Practices (or CRM, same underlying data — CRM is the detail view, BD is the dashboard).”
  - Product: Practices are worked in the CRM; Business Development has no Practices page in the menu (constants/navigation.ts).
  - Proposed: CRM in the sidebar is the directory of referring practices and contacts; Assigned tab lists practices with a BD rep, yours show a Me badge; Search practices... finds one.
- **bd-old-03** — live: “Click + Add practice for one-offs, or Bulk Import for a CSV.”
  - Product: The button is Add New Practice (pages/Crm.tsx:1047); the CRM has no bulk CSV import.
  - Proposed: To add a practice, click Add New Practice.
- **bd-old-04** — live: “For each practice, confirm: NPI, address, phone, primary contact, and (critically) referral source category — Medicare, Medicare Advantage, commercial, SNF, home health.”
  - Product: The practice form (AddPracticeModal.tsx) has no referral source category with those payer values.
  - Proposed: Practice Overview tab shows address, phone, email and fax; Add next to Additional Contacts adds a person.
- **bd-old-05** — live: “Medipyxis ties every referral it receives to a practice. If your referral sources aren't loaded yet, incoming faxes will land in an Unattributed bucket until you match them.”
  - Product: There is no Unattributed referral bucket in frontend/src pages or components.
  - Proposed: (remove the tip)
- **bd-old-06** — live: “Open a practice from the list → Activity tab. Click Log Call, New Visit, or Add Spend from the quick-add strip.”
  - Product: The practice detail page has Call, Visit and Note buttons; the quick-add strip is on the BD dashboard and the CRM list, not on the practice page (no QuickAddStrip in CrmPracticeDetail.tsx).
  - Proposed: Quick-add strip on the BD dashboard or CRM: Log Call, New Visit, Add Spend, Record Voice Note; a voice note is its own activity on the practice you choose. Practice detail Call, Visit and Note buttons; the call and visit forms there let you set a follow-up date.
- **bd-old-08** — live: “BD → Dashboard (bd-dashboard). Four key KPIs at the top: Referrals received (this month vs. last); Referrals converted to visit (%); Revenue attributed (from visits + claims tied to each practice); Cost to serve (your rep spend + time).”
  - Product: The KPIs are Referrals This Month, ROI (MTD) — referrals × $3,500 (pages/BdDashboard.tsx:2886) — and Active Pipeline, which is not calculated.
  - Proposed: Referrals This Month: new patients this month credited to you. ROI (MTD) is referrals this month × $3,500, not based on paid claims or spend. Active Pipeline is not calculated yet; it always shows $0k.
- **bd-old-09** — live: “Click any practice in the list to see a per-practice ROI waterfall — referrals in, visits completed, revenue out, rep spend in.”
  - Product: There is no per-practice ROI waterfall in BdDashboard.tsx or CrmPracticeDetail.tsx.
  - Proposed: (remove the step)
- **bd-old-10** — live: “Result: Your rep record is live. Your practices are loaded and every incoming referral will be attributed automatically. You've seen revenue-per-practice for the first time.”
  - Product: No automatic referral attribution or per-practice revenue figure exists.
  - Proposed: Result: find and add practices in the CRM; first activity on the Activity tab; ROI (MTD) is an estimate.
- **bd-old-11** — live: “Next up: "BD: round-robin referral assignment".”
  - Product: The linked page is AI Route Suggestions, which proposes practices to visit; it does not assign referrals.
  - Proposed: Next up: AI Route Suggestions.

## Clinician first hour — 11

https://help.medipyxis.com/getting-started/by-role/clinician/

- **cl-old-01** — live: “By the end of this hour you will have logged in, reviewed your day, opened a patient, completed a full Initial Evaluation visit through all 17 wizard steps with wound assessment and photos, and signed it off. You can do this on your laptop or your issued tablet.”
  - Product: The wizard has Steps 1 to 17 plus a Step 2b (components/VisitWizardV4.tsx:597); the visit type comes from the appointment.
  - Proposed: By the end of the hour: see your day, open a visit, work through the Visit Wizard (Steps 1 to 17, plus Step 2b) with wound measurements and photos, and sign the note.
- **cl-old-02** — live: “If you're on a tablet, install the Medipyxis Clinician mobile app from your admin's MDM link.”
  - Product: No "Medipyxis Clinician" app or MDM install link exists in frontend/src or capacitor.config.ts.
  - Proposed: (remove the bullet)
- **cl-old-03** — live: “The Clinician Dashboard shows today's visits, grouped by stop. Each card shows patient name, address, last wound status, and a route-position badge. Click a visit card to open the Wound Cockpit for that patient before you drive.”
  - Product: Patient Management opens My Clinical Day (pages/PmClinicianDashboard.tsx:75); there is no stop grouping or route-position badge.
  - Proposed: Patient Management opens My Clinical Day: your schedule for the day, patients who need scheduling, and overdue visits.
- **cl-old-04** — live: “From the Wound Cockpit, click the + Initial Evaluation button (top-right of the cockpit chrome).”
  - Product: No "+ Initial Evaluation" button exists in frontend/src; the Wound Cockpit starts a visit from its visit picker with Open.
  - Proposed: Open a visit: Fleet Calendar appointment → Start Visit, or Wound Cockpit visit picker → Open.
- **cl-old-05** — live: “The Visit Wizard opens as a multi-step form. Use the left sidebar inside the wizard to jump between sections; the active section is highlighted.”
  - Product: The wizard is a list of collapsible sections, not a left sidebar (components/VisitWizardV4.tsx:5665).
  - Proposed: The wizard opens with saved work loaded and all sections collapsed; open a section from the list; completed sections show a checkmark.
- **cl-old-06** — live: “The wizard captures every field Medicare LCD policy needs to make the visit billable. Don't skip anything the wizard flags with a red dot.”
  - Product: Field validation is switched off (utils/featureFlags.ts:25); the wizard shows what is missing and lets you continue.
  - Proposed: Sections with missing fields show what is missing and let you continue; nothing stops documentation.
- **cl-old-07** — live: “Steps 1–6: 1 Patient Consent; 2 Visit Setup (DOS, POS, provider, home health, other facility, reason for visit); 3 ROS / Subjective; 4 Objective Assessment; 5 Comorbidities & Risk Factors; 6 Functional Status & ADLs. Steps 11–15: 11 Procedures & Supplies (scan the UIN for each unit); 12 Orders & DME; 13 Medication Management (DoseSpot); 14 Billing; 15 Patient Education.”
  - Product: Step names and order differ: 1 Consent & Attestation, 2 Patient Context & Demographics (+2b Clinical History Review), 5 Functional Status & ADLs, 6 Comorbidities & Risk Factors, 11 Orders & DME, 12 Patient Education, 13 Procedure Supplies, 14 Current Medication, 15 Billing & Documentation (VisitWizardV4.tsx headings); the UIN is typed, not scanned.
  - Proposed: The step headings are: 1 Consent & Attestation, 2 Patient Context & Demographics, 2b Clinical History Review, 3 Review of Systems (ROS), 4 Objective Assessment, 5 Functional Status & ADLs, 6 Comorbidities & Risk Factors, 7 Wound Assessment, 8 Previous Treatments, 9 Interventions & Treatments, 10 Care Planning, 11 Orders & DME, 12 Patient Education, 13 Procedure Supplies, 14 Current Medication, 15 Billing & Documentation, 16 LCD Audit & Review, 17 Provider Attestation.
- **cl-old-08** — live: “The LCD Navigator check runs in real time across every wound-care visit. If a required CMS criterion isn't met, the badge turns amber/red and the LCD Dojo tile tells you exactly which field to fix. Unresolved items raise a warning to resolve before you Sign & Lock.”
  - Product: The badge is green, amber or grey, never red (components/lcd-navigator/LCDAmbientBadge.tsx:36); there is no Dojo tile; the badge never blocks Sign & Lock.
  - Proposed: LCD badge re-checks about a second after each change; green/amber/grey; never red; never blocks Sign & Lock; click to run on demand.
- **cl-old-09** — live: “Save as draft — if you're not ready to sign, leave the visit as a draft. The wizard autosaves continuously, so it remembers exactly where you stopped.”
  - Product: The visit stays a draft and reopens with saved work, but all sections reopen collapsed rather than on the section you stopped at.
  - Proposed: Not ready to sign: leave the wizard; the visit stays an unsigned draft; reopen the same appointment to continue.
- **cl-old-10** — live: “On Sign & Lock, Medipyxis generates the final Progress Note, writes the billing record, and deducts inventory for any tissue applied.”
  - Product: Inventory is deducted earlier, at Continue to Review (components/VisitWizardV4.tsx:10208), not at Sign & Lock.
  - Proposed: Continue to Review, check the note preview, Sign & Lock; a date mismatch prompt; inventory deducted at Continue to Review. After signing, the note is locked and filed, a claim is drafted for billing review, a Go to Billing prompt appears, and later changes need an addendum.
- **cl-old-11** — live: “Before signing out, check the Action Items card on your dashboard. If you have pending addendums or signatures, finish them now.”
  - Product: The dashboard Action Items panel was removed (pages/Dashboard.tsx:1415).
  - Proposed: (remove the bullet)

## Log in and set your working facility — 11

https://help.medipyxis.com/getting-started/login-and-setup/

- **ls-f01** — live: “Your practice admin may have a vanity subdomain — if so, use the one they gave you; it works the same way.”
  - Product: Production is recognised as app.medipyxis.com only (utils/envValidation.ts:71); there are no per-practice subdomains.
  - Proposed: (remove the sentence)
- **ls-f02** — live: “If this is your first login, click First time? Set password and check your email for the magic link. Passwords must be 12+ characters with one number and one symbol.”
  - Product: There is no "First time? Set password" link on Login.tsx; first sign-in uses the link in the welcome email or Forgot Password?. No 12-character rule exists in frontend/src (the set-password screen requires at least 6 characters).
  - Proposed: Enter your email and password. On first sign-in, set your password with the link in your welcome email; otherwise click Forgot Password? on the login page.
- **ls-f03** — live: “Click Sign in. You land on the Dashboard.”
  - Product: The button reads "Sign In Securely" (pages/Login.tsx:359).
  - Proposed: Click Sign In Securely. You land on the Dashboard.
- **ls-f04** — live: “Check the top-left header. The text next to the Medipyxis logo shows your current Organization. Below it, your profile card on the top-right shows your role and current Facility (for example, "Admin • [clinic name]").”
  - Product: No organization name is shown next to the logo (no currentOrganization in AppShell.tsx); the profile button shows "role • facility" (components/AppShell.tsx:1633). The live example names a real clinic.
  - Proposed: Your profile button (top right) shows your name, your email, and your role and current facility.
- **ls-f05** — live: “Switch facility: Click the Organization Selector in the top-left and pick the facility you want. Every sidebar link now scopes to that facility — the URL changes from /facility/{old-uuid}/... to /facility/{new-uuid}/....”
  - Product: There is no Organization Selector; switching is Switch Facility in the profile menu (components/AppShell.tsx:1706). The URL change is true.
  - Proposed: Click your profile button, then Switch Facility, and pick the facility; facility pages then open for it (URL /facility/{uuid}/...).
- **ls-f06** — live: “The green On Duty pill and HIPAA badge confirm your session is active and compliant.”
  - Product: The badges are static labels on the Dashboard banner; nothing checks session activity or compliance to show them (no compliance check in Dashboard.tsx).
  - Proposed: You see the Welcome Back banner with your name, and the sidebar shows the modules you have permission to use; On Duty and HIPAA badges appear in the banner.
- **ls-f07** — live: “Facility is "sticky" — Medipyxis remembers the last facility you used and takes you there on next login.”
  - Product: Not confirmed: sign-in lands on /dashboard (utils/auth/postAuthDestination.ts:20) and no saved last-facility setting was found in FacilityContext.tsx.
  - Proposed: (remove the sentence)
- **ls-x1** — live: “Header: Organization Selector (top-left, next to logo) — switch facility/organization.”
  - Product: There is no Organization Selector; switching is Switch Facility in the profile menu.
  - Proposed: Click your profile button, then Switch Facility, and pick the facility; facility pages then open for it (URL /facility/{uuid}/...).
- **ls-f08** — live: “Header: Quick Jump (top-center) — press ⌘K / Ctrl+K to search anything.”
  - Product: Quick jump matches page names only (components/AppShell.tsx:1489); it does not search patients or records.
  - Proposed: Quick jump: press ⌘K / Ctrl+K to jump to a page by name.
- **ls-f09** — live: “Troubleshooting: "Invalid credentials" — typo, or password has expired — click Forgot password on the login page.”
  - Product: The message is "Invalid email or password. Please try again." (utils/authStore.ts:963); passwords do not expire.
  - Proposed: "Invalid email or password" → click Forgot Password? on the login page.
- **ls-f10** — live: “Troubleshooting: No facilities listed in selector — your admin hasn't assigned you yet — ask your practice admin to open HR & Compliance → Facility Users and add you.”
  - Product: There is no facility selector list at sign-in; Switch Facility is greyed out with one facility (components/AppShell.tsx:1715). The HR & Compliance → Facility Users fix is right.
  - Proposed: Switch Facility is greyed out when you have access to only one facility; an admin adds the facility in HR & Compliance → Facility Users.

## Verify insurance eligibility (270/271) — 11

https://help.medipyxis.com/modules/billing/eligibility-and-verify-insurance/

- **elig-01** — live: “Medipyxis sends a 270 request to Stedi, the payer answers with a 271, and Medipyxis writes both the verdict and the raw response back to the patient's insurance record.”
  - Product: The verdict is always written, but the raw 271 (eligibility_response) is written only when the payer reports active coverage (backend/supabase/functions/verify-insurance/verifyInsuranceCore.ts:358-369). The page says so itself further down.
  - Proposed: Medipyxis sends a 270 request to Stedi, the payer answers with a 271, and Medipyxis writes the verdict back to the patient's insurance record — plus the raw 271 when coverage is active.
- **elig-02** — live: “Before you start: You have the biller, medical assistant, or admin role.”
  - Product: verify-insurance allows BILLING_SURFACE_ROLES (backend/supabase/functions/verify-insurance/index.ts:35-38): admin, clinician, clinical_manager, medical_director, provider, biller, billing_lead, coder, third_party_biller, superadmin, customersupport (backend/supabase/functions/_shared/auth-helpers.ts:295, 332-340). There is no medical assistant role.
  - Proposed: You have a billing role (biller, billing lead, coder, third-party biller), a clinical role (clinician, provider, clinical manager, medical director), or admin.
- **elig-04** — live: “The rendering provider is enrolled with the payer through Stedi.”
  - Product: verify-insurance (the button path) has no enrollment check: it gates on name, member ID, DOB, NPI, tax ID and the payer catalog only (verifyInsuranceCore.ts:181-275). Whether a payer needs Stedi eligibility enrollment is a payer/Stedi fact, not checkable from code.
- **elig-05** — live: “Open the patient chart → Insurance. Click Verify on the insurance row you want to check.”
  - Product: The patient chart Insurance tab is a read-only viewer with a 'Manage in Billing' button (frontend/src/components/PatientInsuranceTab.tsx:29-42, 170). Verification runs on the billing insurance page (BillingAuthPage), where the row's button is an icon with the tooltip 'Verify insurance coverage' (frontend/src/pages/BillingAuthPage.tsx:6178-6222); the only 'Verify' text button there verifies an authorization (BillingAuthPage.tsx:7060-7080).
  - Proposed: Open the patient chart → Insurance → Manage in Billing. On the insurance row, click the shield icon (tooltip: Verify insurance coverage).
- **elig-07** — live: “Wait for the row's status pill to update: Verified, Failed, or Timeout.”
  - Product: There is no Timeout pill. The pill shows '✅ Verified', '⏳ Pending', '⏳ Pending Approval', '📋 Manual Required', '✗ Failed', and any other status (including 'timeout') falls through to '⚠ Expired' (frontend/src/pages/BillingAuthPage.tsx:6110-6134). A row whose legacy verified flag is still true shows Verified regardless of status (frontend/src/utils/insuranceStatus.ts:10-14).
  - Proposed: Wait for the row's status pill to update: Verified, Failed, Pending, Pending Approval, Manual Required, or Expired (a timed-out check shows Expired unless the row was already verified).
- **elig-08** — live: “Click View Verification Response to open the raw 271 in a modal — the full payer response, formatted for reading.”
  - Product: The button is labelled 'View Response' and appears only on rows that read as verified and were not manually verified (frontend/src/pages/BillingAuthPage.tsx:6586-6604).
  - Proposed: Click View Response to open the saved 271 in a modal. The button appears only on verified rows that were checked through Stedi.
- **elig-09** — live: “You can re-verify at any time. The most recent attempt wins on the record — including a fresh Failed or Timeout, which correctly replaces a stale Verified.”
  - Product: The status column takes the latest attempt, but on a transport failure (timeout / 5xx) the legacy verified flag is left as it was (verifyInsuranceCore.ts:352-356), and the screen treats verified=true as Verified (frontend/src/utils/insuranceStatus.ts:13). So a fresh timeout does NOT replace a stale Verified on screen; only a payer answer (active or not) does.
  - Proposed: You can re-verify at any time. A payer answer always replaces the previous result, including an inactive answer replacing an old Verified. A timeout records the attempt but keeps an earlier verification.
- **elig-19** — live: “A verified row unblocks pre-service checks in the Work Queue, feeds copay/deductible into the biller-facing claim summary, and preserves the exact 271 for audit.”
  - Product: No billing Work Queue component reads verification_status or isInsuranceVerified (frontend/src/components/billing has no hit), and the claim editor initialises copay_amount to null rather than reading the verified copay (frontend/src/pages/NewBillingSubmitPage.tsx:2450). Only the 271-preserved part holds (verifyInsuranceCore.ts:358-369).
  - Proposed: A verified row keeps the exact 271 so you can open it with View Response.
- **elig-21** — live: “Troubleshooting: View Verification Response disabled → No 271 response is saved on the row. Click Verify again to run a fresh 270.”
  - Product: The button is 'View Response' and is hidden (not disabled) unless the row reads as verified and the method is not manual; it is disabled only while a response is being parsed (frontend/src/pages/BillingAuthPage.tsx:6586-6604).
  - Proposed: No View Response button → the row is not verified (or was verified manually). Run the check again.
- **elig-22** — live: “Status stuck at Timeout → Stedi timed out; existing verification is preserved on purpose. Retry after a minute.”
  - Product: The screen has no Timeout status; a timed-out row shows '⚠ Expired' (or still Verified if the old verified flag is true) and the notes read 'Verification timed out. Retry later.' (BillingAuthPage.tsx:6110-6134; parseBenefits.ts:270-272).
  - Proposed: Notes say "Verification timed out. Retry later." → Stedi timed out; an earlier verification is kept on purpose. Retry after a minute.
- **elig-24** — live: “Copay is $0.00 but the payer's card shows a copay → The 271 either had no Co-Payment (EB01 B) line or listed only family coverage.”
  - Product: A family-only Co-Payment line is still used: ranking only orders candidates, it never drops one, so a lone family B line becomes the copay (backend/supabase/functions/verify-insurance/parseBenefits.ts:182-192). When no copay is found the column is left unchanged rather than set to $0 (verifyInsuranceCore.ts:371).
  - Proposed: Copay is blank or old but the payer's card shows a copay → the 271 had no Co-Payment (EB01 B) line. Open View Response and read the benefits.

## PTAN and payer enrollment — 11

https://help.medipyxis.com/modules/billing/ptan-and-payer-enrollment/

- **ptan-02** — live: “PTAN is Medicare-only. Commercial payers, Medicaid, TRICARE, ChampVA — none of them use PTAN. The field is optional at the transaction level and is only checked by Medicare intermediaries.”
  - Product: Payer/regulatory fact, not product behavior. The product does not restrict PTAN to Medicare payers: any payer with a PTAN in its box gets providerTransactionAccessNumber (request-provider-enrollment/enrollment-identity.ts:44-82).
- **ptan-03** — live: “PTAN is MAC-specific. Medipyxis stores one PTAN per facility today, which matches the wound-care norm (a facility bills one MAC).”
  - Product: Medipyxis stores a group PTAN on the facility (facility.ptan, backend/supabase/migrations/20260810120000_add_ptan_to_facility.sql) AND a PTAN per payer enrollment (stedi_enrollments.provider_ptan, request-provider-enrollment/handler.ts:420); the enrollment page has optional per-payer PTAN boxes (frontend/src/components/billing/stedi/PayerPtanFields.tsx).
  - Proposed: PTAN is MAC-specific. Medipyxis keeps one group PTAN on the location and can store a different PTAN for each payer enrollment.
- **ptan-05** — live: “PTAN lives in facility_billing_settings.ptan.”
  - Product: PTAN lives in facility.ptan (backend/supabase/migrations/20260810120000_add_ptan_to_facility.sql; read at frontend/src/services/billingConfigService.ts:60-66; written by request-provider-enrollment handler.ts:191, 342-360) and per enrollment in stedi_enrollments.provider_ptan.
  - Proposed: The location's group PTAN lives in facility.ptan; each payer enrollment also stores the PTAN it was sent with.
- **ptan-07** — live: “On Admin → Billing Setup — same underlying field, different surface. Either place updates the same row.”
  - Product: No 'Billing Setup' screen exists at v1.1.345 and no other UI edits PTAN: outside the enrollment components the only PTAN code is a save-error message in facilityService.ts:716. The enrollment page fills facility.ptan only when it is empty and never replaces a saved value (request-provider-enrollment/enrollment-identity.ts:101-129).
  - Proposed: The Enrollment page is the only place to enter a PTAN. It fills the location's PTAN only when none is saved; it never replaces a saved one.
- **ptan-09** — live: “PTAN is sent on Medicare enrollment requests to Stedi as provider_ptan. It travels with the enrollment record and is written to stedi_enrollments when the enrollment lands.”
  - Product: Stedi receives the PTAN as providerTransactionAccessNumber (request-provider-enrollment/handler.ts:449-451), for any payer whose PTAN box is filled, not only Medicare. provider_ptan is the field name the page sends to the edge function and the stedi_enrollments column (StediEnrollmentPage.tsx:377; handler.ts:420).
  - Proposed: The PTAN is sent to Stedi as providerTransactionAccessNumber on the enrollment for each payer whose PTAN box is filled, and is saved on that enrollment record (stedi_enrollments.provider_ptan).
- **ptan-13** — live: “Transaction type(s) — check the ones you want registered: professional_claim_submission (837P), eligibility (270/271), claim_status (276/277), remittance (835).”
  - Product: There are three options, not four: 'Professional Claims (837P)', 'ERA / Remittance (835)', 'Eligibility (270/271)' (frontend/src/components/billing/stedi/EnrollmentTypesCard.tsx:6-10), mapped to Stedi professionalClaimSubmission / claimPayment / eligibilityCheck (request-provider-enrollment/handler.ts:95-99). No claim-status option. Claims and Eligibility are pre-checked; ERA is off by default because ERA enrollment moves ERAs away from any other clearinghouse (EnrollmentTypesCard.tsx:12-18).
  - Proposed: Transaction type(s): Professional Claims (837P), Eligibility (270/271), and ERA / Remittance (835). Claims and Eligibility are checked by default; ERA is off by default because enrolling ERA with Stedi stops ERA delivery through any other clearinghouse.
- **ptan-17b** — live: “The Current Enrollments panel below the form [...]”
  - Product: Layout is not grep-checkable, and the code contradicts it: the Current Enrollments card is rendered above the form cards (frontend/src/pages/StediEnrollmentPage.tsx:493-497 vs EnrollmentTypesCard/ProviderInfoCard/ContactInfoCard at ~611-646).
  - Proposed: The Current Enrollments panel above the form refreshes after submit.
- **ptan-20** — live: “PTAN entered with a hyphen or space. The validator rejects anything outside [A-Za-z0-9]{4,10}.”
  - Product: On the Enrollment page hyphens and spaces are silently removed, not rejected: cleanPtanInput (frontend/src/components/billing/stedi/payerPtans.ts:13) and cleanPtan in the edge function (request-provider-enrollment/enrollment-identity.ts:22-24) strip non-alphanumerics, then only the length (4-10) is checked. The DB CHECK on facility.ptan rejects them only on a direct facility save.
  - Proposed: PTAN entered with a hyphen or space: the Enrollment page removes them; the remaining letters and numbers must be 4–10 characters.
- **ptan-21** — live: “NPI/PTAN mismatch with Medicare is the most common enrollment reject. MAC processing can legitimately take 4–8 weeks. Stedi sometimes needs a form signed manually before Medicare will finalize.”
  - Product: Payer/Stedi process facts; not checkable from code.
- **ptan-22** — live: “Wrong tax ID shape. The field accepts SSN or EIN. Medipyxis strips dashes and whitespace before sending, so 12-3456789 and 123456789 both work — but 12-345678 (8 digits) fails.”
  - Product: Dashes are stripped (handler.ts:181), but nothing in the enrollment page or function checks for 9 digits; an 8-digit tax ID is sent to Stedi and fails there, if at all. The field label is 'Tax ID (EIN)' (EnrollmentFormCards.tsx:117).
  - Proposed: Medipyxis strips dashes and spaces before sending, so 12-3456789 and 123456789 are the same. It does not check the digit count — count the digits before you submit.
- **ptan-24** — live: “Enroll all four transaction types the first time — submission, eligibility, claim status, remittance.”
  - Product: Only three types exist (EnrollmentTypesCard.tsx:6-10), and ERA is deliberately off by default because enrolling ERA with Stedi stops ERA delivery through a previous clearinghouse (EnrollmentTypesCard.tsx:12-18). Advising everyone to enroll remittance on day one contradicts that.
  - Proposed: Enroll Professional Claims and Eligibility the first time. Add ERA / Remittance only when this practice is ready to receive ERAs through Stedi instead of another clearinghouse.

## Retired CPT guard — 11

https://help.medipyxis.com/modules/billing/retired-cpt-guard/

- **rcpt-01** — live: “the coder can never pick one from a dropdown or receive one as a suggestion, but the system will still recognize a retired code on a signed historical note so old records resolve correctly.”
  - Product: Suggestions/recommendations exclude 99343 and recognition keeps it. But the claim code picker (BillingCodeEntry, used by the Coding Review drawer) lists the facility's client_superbill_code rows with no retired-code filter (frontend/src/components/claims/BillingCodeEntry.tsx:175-176); whether 99343 can be picked depends on facility data.
  - Proposed: The system never suggests or recommends a retired code, but still recognizes one on a signed historical note so old records resolve correctly.
- **rcpt-02** — live: “The code is removed from every dropdown, suggestion, and recommender. Coders cannot select it.”
  - Product: No dropdown filter exists: BillingCodeEntry searches client_superbill_code (facility data) and accepts typed codes with no retired-code check (frontend/src/components/claims/BillingCodeEntry.tsx:175). The coded suggestion list (medicalCodingService.ts:55) and recommender do exclude it.
  - Proposed: The code is removed from the coded suggestion list and the E/M recommender. The claim code picker lists the facility's superbill codes and does not block retired codes, so keep them out of the facility's superbill list.
- **rcpt-09** — live: “Removed from the coder dropdown (frontend/src/utils/dropdownOptions.ts) — the E/M home-visit block skips 99343 explicitly.”
  - Product: dropdownOptions.ts holds no E/M codes at all (no 9934x/99350). The claim code picker reads the facility's superbill codes (frontend/src/components/claims/BillingCodeEntry.tsx:175).
  - Proposed: There is no fixed E/M dropdown to edit: the claim code picker lists the facility's superbill codes (Charge Master → Templates codes).
- **rcpt-11** — live: “Removed from the downcode suggestion (s13_emLevel.ts W9 gate) — a note billed too high for its documented time is downcoded to 99344, not 99343.”
  - Product: W9 is a warning only and does not change the code (frontend/src/services/perfectNote/s13_emLevel.ts:634-645). When documented minutes fall short it names the highest code those minutes meet, chosen only from recommended entries (frontend/src/services/perfectNote/emTimeStatement.ts:320-330) — so never 99343, but not necessarily 99344.
  - Proposed: Excluded from the W9 time warning: when documented minutes fall short of the billed code, the warning names a code those minutes meet, picked only from recommended codes, so never 99343. The warning does not change the code.
- **rcpt-13** — live: “Kept in the recognition set (s11_codingLedger.ts EM_CODES_NEW_HOME, s13_emLevel.ts NEW_PATIENT_CODES / TIME_THRESHOLDS / EM_MDM_LABELS). A biller opening a historical note billed with 99343 sees "New patient, home visit, moderate MDM (CPT retired 2023-01-01)".”
  - Product: Those tables no longer exist. Since the SNF Phase 4a refactor, the recognition set is the shared EM_CATALOG in frontend/src/utils/billing/emFamily.ts:104-143, read by s11 (s11_codingLedger.ts:47, :58) and s13 (s13_emLevel.ts:61-71). The description string is right.
  - Proposed: Kept in the recognition set: the shared visit-code table EM_CATALOG (frontend/src/utils/billing/emFamily.ts), which s11_codingLedger.ts and s13_emLevel.ts both read. A note billed with 99343 shows "New patient, home visit, moderate MDM (CPT retired 2023-01-01)".
- **rcpt-15** — live: “Production carried three real notes billed with 99343 between 2026-07-04 and 2026-07-21, before the code was removed from the recommender. Those notes are signed clinical records tied to submitted claims.”
  - Product: Production data fact; needs a DB query. The code only records that 'prod still holds notes billed with it' (frontend/src/utils/billing/emFamily.ts:119), with no count or dates.
- **rcpt-17** — live: “When the AMA retires a code: Remove the code from the dropdowns (frontend/src/utils/dropdownOptions.ts).”
  - Product: dropdownOptions.ts holds modifiers and place-of-service options, not CPT codes (frontend/src/utils/dropdownOptions.ts:36, :162-168). The coder's picker reads client_superbill_code.
  - Proposed: Remove the code from the facility superbill code lists the claim code picker reads (client_superbill_code, managed in Charge Master → Templates).
- **rcpt-18** — live: “Remove the code from the recommender surface — for E/M codes, that is frontend/src/services/perfectNote/s13_emLevel.ts (the "NEW_" and "ESTABLISHED_" maps that get read by recommendEMCode), plus the downcode suggestions in the W9 gate.”
  - Product: recommendEMCode calls emCodeFor over EM_CATALOG (s13_emLevel.ts:304-309, emFamily.ts:152-155); the W9 alternative also reads EM_CATALOG (emTimeStatement.ts:320-330). No NEW_/ESTABLISHED_ maps remain in s13.
  - Proposed: Set recommend: false on the code's EM_CATALOG entry in frontend/src/utils/billing/emFamily.ts. recommendEMCode (s13) and the W9 time warning read only recommended entries.
- **rcpt-19** — live: “Remove the code from the deterministic coding service (frontend/src/services/procedureBillingService.ts) if it is offered there.”
  - Product: The suggestion list is medicalCodingService.ts (where 99343 was removed). procedureBillingService.ts still carries a 99343 rate row ($155.00, line 119); it is a rate lookup, and no code path emits 99343 from it.
  - Proposed: Remove the code from the suggestion list in frontend/src/services/medicalCodingService.ts and from the rate table in frontend/src/services/procedureBillingService.ts.
- **rcpt-20** — live: “Do not remove the code from the recognition sets — EM_CODES_*, EM_MDM_LEVEL, EM_MDM_LABELS, EM_DESCRIPTIONS, TIME_THRESHOLDS, NEW_PATIENT_CODES, ESTABLISHED_PATIENT_CODES. Add a comment naming the retirement date.”
  - Product: None of those tables exist at v1.1.345; recognition is the single EM_CATALOG in frontend/src/utils/billing/emFamily.ts, where 99343 keeps its entry with recommend: false and a dated comment (emFamily.ts:118-123).
  - Proposed: Do not remove the code's EM_CATALOG entry in frontend/src/utils/billing/emFamily.ts; set recommend: false, and put the retirement date in its description and a comment.
- **rcpt-22** — live: “Adding a code to a claim. The dropdown skips retired codes. If a coder types the retired code directly, the field validates against the current ladder and rejects with a message naming the current equivalent.”
  - Product: The claim code field (frontend/src/components/claims/BillingCodeEntry.tsx) has no retired-code validation or message; it lists facility superbill codes and accepts typed codes.
  - Proposed: Adding a code to a claim: the code picker lists the facility's superbill codes and does not check for retired codes. Keep retired codes out of the facility's superbill list.

## Run bulk inventory workflows — 11

https://help.medipyxis.com/modules/inventory/bulk-operations/

- **inv-bo-01** — live: “Open Inventory Management → Bulk to reach /inventory-management/bulk; /inventory-management/bulk/{category} (amniotic, biologics, or conservative) gives a category-specific variant.”
  - Product: Both routes exist (user-routes.tsx:2148, 2156) but nothing in the app links to them: no hub tile and no other navigate/href to /inventory-management/bulk. Users must type the URL. Without a category, Upload Shipment and Upload Receiving are disabled (BulkOperationsPage.tsx:57-62, disabled={categoryEnum == null}).
  - Proposed: Bulk Inventory is at /inventory-management/bulk (no menu link yet; type the URL). Use /inventory-management/bulk/{category} (amniotic, biologics, or conservative): Upload Shipment and Upload Receiving stay off without a category.
- **inv-bo-02** — live: “You need the inventory_manager, vendor_coordinator, or admin role for shipment and receiving; provider assignment is available to any role with In Stock access.”
  - Product: There is no inventory_manager role anywhere in the code. The bulk page and its modals have no role check; access is the Inventory feature (user-routes.tsx:2148-2160). Server-side, inventory roles are listed in ROLE_PERMISSIONS (INVENTORY_MANAGEMENT: admin, vendor_coordinator, clinical_manager, medical_director).
  - Proposed: Anyone whose role has the Inventory feature can open Bulk Inventory.
- **inv-bo-05** — live: “Upload Shipment: the template is pre-filled with sample rows for the current category; fill in one row per shipped line — SKU, quantity, ship date, tracking number.”
  - Product: Templates have no ship date or tracking columns. Conservative shipment template: SKU, Lot Number, Expiration Date, Quantity (order_sent_sample.xlsx); amniotic/biologics: Order ID, SKU, Lot Number, Tissue ID, Expiration Date, Size, HCPCS/Q Code, Quantity (bulkTemplates.ts:40-90).
  - Proposed: Fill in one row per shipped line — SKU, lot number, expiration date and quantity (amniotic and biologics also need Order ID, tissue ID, size and HCPCS/Q code).
- **inv-bo-07** — live: “Upload Receiving: download the receiving template — it's pre-populated with the order's line items, so you only correct discrepancies.”
  - Product: The receiving modal's Sample Template uses fixed sample rows (buildBulkUploadTemplate; BulkUploadOrderModal.tsx:381-388). The order pre-filled template (vendor_template_<order>.xlsx) is downloaded from the Orders tab (OrdersList.tsx:306).
  - Proposed: Download the sample template from the modal, or the order's pre-filled vendor template from the Orders tab.
- **inv-bo-08** — live: “After upload, the modal shows a preview split into Perfect matches and Exceptions (short quantity, wrong SKU, expired lot); perfect matches land directly in In Stock; exceptions appear in the Receiving History tab under Needs review.”
  - Product: The result summary reads "Received and stocked: N item(s) now in In Stock" or "Received with issues — N matched, N partial/missing, N exception(s)"; matched items are auto-stocked and the rest wait "for operator review in Receiving History" (BulkUploadOrderModal.tsx:1593, 1796-1803). There is no "Perfect matches" or "Needs review" label; Receiving History shows status Exception with a Resolve Exceptions action. Expired items go to exceptions (line 2089).
  - Proposed: After upload, the summary shows matched, partial/missing and exception counts. Matched items go straight to In Stock; the rest wait in Receiving History (status Exception) for review.
- **inv-bo-09** — live: “Manual Receive: click Manual Receive and the picker opens with your active orders filtered by category; pick the order, then the line item; enter quantity, lot and expiry.”
  - Product: On the Bulk page the card only navigates to the category page with ?tab=receiving, which is ignored, and no modal opens. Defect: ProductBatchesManagement.tsx imports useSearchParams (line 2) but never reads it; the initial tab is Products, or Receiving History when facility setup is required (lines 59-61). BulkOperationsPage.tsx:93 and :101 navigate to ?tab=receiving and ?tab=active (the latter is not even a valid tab id; valid is active-inventory), so both cards land on the Products tab. The Manual Receive button on the category page does open the modal, which lists Shipped/Partial Shipped orders for that category and also offers Direct to Main Stock.
  - Proposed: Click Manual Receive on the category page. Choose Receive Against Purchase Order (Shipped or partially shipped orders for that category) or Direct to Main Stock, then enter lot, expiration and quantity.
- **inv-bo-10** — live: “Manual Receive: save, and the item lands in In Stock and the order's remaining quantity is updated.”
  - Product: A manual receive is stocked only if it auto-matches; otherwise it is created with a status such as Pending Approval and must be approved on the Receiving tab (ManualReceiveModal.tsx:461-467).
  - Proposed: Save. A matched receipt is stocked into In Stock; otherwise approve it on the Receiving History tab.
- **inv-bo-11** — live: “Bulk Assign to Provider: the page routes to In Stock with the assign panel open; pick items, then pick the destination provider from the dropdown.”
  - Product: Defect: ProductBatchesManagement.tsx imports useSearchParams (line 2) but never reads it; the initial tab is Products, or Receiving History when facility setup is required (lines 59-61). BulkOperationsPage.tsx:93 and :101 navigate to ?tab=receiving and ?tab=active (the latter is not even a valid tab id; valid is active-inventory), so both cards land on the Products tab. On Active Inventory, selecting lots shows an Assign to Provider button; the modal has a searchable provider list, not a dropdown (AssignToProviderModal.tsx:160-200).
  - Proposed: Open the category's Active Inventory tab, select the lots, click Assign to Provider, and search for the provider.
- **inv-bo-12** — live: “Each assigned item appears on that provider's dashboard for them to accept in Received.”
  - Product: The Received button shows only for conservative items in Transferred or Shipped status (ProviderInventoryView.tsx:980-990). Amniotic and biologic assignments have no Received action.
  - Proposed: Assigned conservative items appear in the provider's My Inventory, where they accept them with Received.
- **inv-bo-16** — live: “Troubleshooting: an unmatched SKU shows an error like "Row 4: SKU not found".”
  - Product: The error reads "Validation failed: N product(s) not found in order." (BulkUploadOrderModal.tsx:906-912).
  - Proposed: "Validation failed: N products not found in order" — a SKU in the file isn't on the order; check it in Product Catalog, fix the file and re-upload.
- **inv-bo-17** — live: “Leave a row's quantity as zero if that item did not arrive.”
  - Product: Not verified: the receiving parser's handling of zero quantities was not traced to a definitive line.

## Track Insurance Verification Requests (IVRs) — 11

https://help.medipyxis.com/modules/inventory/ivr-tracking/

- **inv-ivr-01** — live: “The vendor_coordinator or practice_admin role is required to create and update IVRs.”
  - Product: No practice_admin role exists. IVR Tracking is gated by the Inventory feature only (user-routes.tsx:2164-2168); status changes go through update_ivr_order_status_v2 with no role list in the page.
  - Proposed: Anyone whose role has the Inventory feature can update IVRs in IVR Tracking.
- **inv-ivr-02** — live: “The product must exist in the Product Catalog with a valid HCPCS code; the Product dropdown lists only Active products with a HCPCS code, and the HCPCS populates automatically.”
  - Product: The IVR request product list filters by facility, category, vendor, status 0 and is_deleted — not by is_active or HCPCS (IVRInventoryRequestModal.tsx:467-476).
  - Proposed: Pick a product from the selected vendor's catalog for the chosen category; its HCPCS shows when the catalog has one.
- **inv-ivr-03** — live: “IVR statuses move Submitted → Pending → Approved, or → Declined → Agreed.”
  - Product: The statuses are Pending, Incomplete, Agreed, Approved, Declined (IVRStatusUpdateModal.tsx statusOptions; update_ivr_order_status_v2 allows pending|incomplete|agreed|approved|declined). There is no Submitted status, and the page omits Incomplete. A new request starts as Pending (no outcome).
  - Proposed: IVR statuses: Pending (new), Incomplete, Approved, Declined, and Agreed.
- **inv-ivr-04** — live: “Agreed means the patient and provider agreed to proceed at the patient's financial responsibility after a Declined decision, or the payer issued a formal agreement letter.”
  - Product: The code stores Agreed as an outcome with no stated meaning (IVRStatusUpdateModal.tsx; update_ivr_order_status_v2). The definition cannot be checked from code.
- **inv-ivr-06** — live: “Create an IVR with New IVR in the upper-right of the IVR Tracking table: select the patient (search by last name or DOB), select the product, enter the planned date of service, attach documents with Attach Documents, and click Submit IVR.”
  - Product: IVR Tracking has no create button (only Refresh, Filters, View, Update Status, Upload Response). IVR requests are created from the Wound Cockpit (WoundCockpitPage.tsx:51 lazy-loads IVRInventoryRequestModal) for the wound's patient: pick Product Category (Amniotic or Biologics), vendor, product, wound area, ICD-10, Clinical Justification, notes, then "Submit IVR Request". No date-of-service or Attach Documents step.
  - Proposed: Create an IVR from the patient's wound in the Wound Cockpit: pick the category, vendor and product, enter the wound area, diagnosis and clinical justification, and click Submit IVR Request. Track it in IVR Tracking.
- **inv-ivr-07** — live: “When the payer acknowledges, set the status to Pending and enter the payer's reference number; when approved, set Approved and enter the authorization number.”
  - Product: The status modal has the five status buttons, Outcome Notes, and a vendor-response file upload; no reference-number or authorization-number field (IVRStatusUpdateModal.tsx:300-470).
  - Proposed: Open Update Status, pick the new status, add Outcome Notes (e.g. reference or authorization numbers), and optionally upload the vendor response.
- **inv-ivr-09** — live: “Setting Approved clears the product for use at the scheduled visit.”
  - Product: Approval auto-creates an inventory order and a pending receiving row (update_ivr_order_status_v2, migration 20261021120000 'On approval, auto-create the inventory order AND a pending receiving'). No code gates Visit Wizard use on an Approved IVR, so 'cleared for application' cannot be confirmed.
  - Proposed: Setting Approved creates an inventory order and a pending receiving for the product.
- **inv-ivr-10** — live: “With an Approved or Agreed IVR, the product is highlighted at step 13 (Procedure Supplies) of the Visit Wizard.”
  - Product: Procedures & Supplies is section 11 (section_11_procedures_supplies, VisitWizardV4.tsx:845-848); section 13 is Medication Management. No IVR-based highlight in ProcedureSuppliesVisit.tsx was found.
  - Proposed: Remove, or: Approved IVR stock allocated to the patient is offered in the Visit Wizard's Conservative Care & Interventions picker.
- **inv-ivr-11** — live: “The IVR Tracking table supports filtering by status, payer, and date range.”
  - Product: Filters are status, submission method (Fax, Email, Manual) and date range (IVRTrackingDashboard.tsx:443-485); no payer filter.
  - Proposed: The IVR Tracking table can be filtered by status, submission method, and date range, and searched by patient, wound, vendor, order ID, request ID, or product.
- **inv-ivr-12** — live: “An IVR is a prior-authorization record tracking whether a payer approved a graft product for a patient encounter.”
  - Product: The product describes IVR Tracking as "Inventory Vendor Requests" — "Monitor and manage inventory vendor requests for wound care products" (IVRTrackingDashboard.tsx:377-379; hub tile text). Outcomes come from the vendor response; no payer field exists on the tracking screens.
  - Proposed: An IVR is a request to the product vendor to verify coverage for a graft for a patient; IVR Tracking records the vendor's outcome and response.
- **inv-ivr-13** — live: “Status cannot be advanced from Declined to Approved until the payer issues a reversal.”
  - Product: Transitions are enforced by is_ivr_status_transition_allowed_v2 (raises IVR_STATUS_TRANSITION_INVALID), whose definition was not found in v1.1.345 migrations; cannot confirm which transitions are allowed.

## How your progress note is written — 11

https://help.medipyxis.com/modules/visit-wizard-ehr/progress-note/

- **pn-05** — live: “The note cites only the two verified wound-care policies.”
  - Product: The note's citation table holds six verified LCDs: debridement for Novitas, WPS and CGS, and skin substitutes for Novitas, First Coast and CGS (lcdReferences.ts at v1.1.345). A note cites only the one for the patient's own Medicare contractor, and none when that contractor has no verified entry.
  - Proposed: The note cites an LCD only from a short table of verified wound-care LCDs (debridement and skin substitutes), and only the one for the patient's own Medicare contractor.
- **pn-06** — live: “Allergies: "Not documented." on each allergy item, until you record it.”
  - Product: Drug allergies and Latex / other print "Not documented." until recorded, but the "Reconciled this visit" row is hard-wired to "Not documented." on every note (perfectNoteRenderer.ts renderAllergies at v1.1.345); no field fills it.
  - Proposed: Allergies: "Not documented." for drug allergies and for latex / other until you record them. The "Reconciled this visit" row always says "Not documented." — there is no field to record it.
- **pn-08** — live: “Pressure-injury risk: "Prevention plan: Not documented." The Braden score and risk band print as documented.”
  - Product: No "Prevention plan" line prints anywhere. The Braden line prints the score and risk band only (perfectNoteRenderer.ts at v1.1.345); a prevention plan prints under "Additional Risk Assessment" only when one was written, and nothing prints when it is blank.
  - Proposed: Pressure-injury risk: the Braden score and risk band print as documented. A prevention plan prints under Additional Risk Assessment only when you write one; nothing prints in its place when you leave it blank.
- **pn-13** — live: “Describe how you taught — for example teach-back or a return demonstration — in the understanding assessment; otherwise the teaching method prints "Not documented."”
  - Product: The education block has no teaching-method row and does not read the understanding text for a method. It prints Topics taught, Materials, Understanding / response and Next-visit education goals, each "Not documented." when blank, or "Patient education not documented this visit." when topics, understanding and goals are all blank (perfectNoteRenderer.ts:1469-1474 at v1.1.345).
  - Proposed: Each blank education row — topics taught, materials, understanding, next-visit goals — prints "Not documented." If you record none of topics, understanding or goals, the note says "Patient education not documented this visit." Describe how you taught (for example teach-back) in the understanding assessment so it prints.
- **pn-14** — live: “The debridement section does not include Pathology sent, Tissue present pre, or Post-procedure dressing, because no screen in Medipyxis asks for them.”
  - Product: Pathology sent and Post-procedure dressing are indeed absent, but the debridement table does print "Tissue present (pre-procedure)", from this visit's wound-bed assessment, or "Not documented." when the wound bed was not assessed this visit (perfectNoteRenderer.ts tissuePresentPreRow, s09_debridement.ts at v1.1.345).
  - Proposed: The debridement section does not include Pathology sent or Post-procedure dressing, because no screen in Medipyxis asks for them. Tissue present (pre-procedure) prints from this visit's wound-bed assessment, or "Not documented." when the wound bed was not assessed this visit.
- **pn-20** — live: “Nothing is required. Continue anyway is always available.”
  - Product: Nothing in the checklist is required, but the button differs by where you open it: from the billing line the window offers only Close; Continue anyway appears in the window that opens from Continue to Review (DocumentationAssistModal.tsx:733-745 at v1.1.345).
  - Proposed: Nothing is required. Opened from the billing line, the list just closes; at Continue to Review, Continue anyway is always available.
- **pn-24** — live: “Your answer prints in the note with a small label showing whether you typed it, dictated it, or adapted an example.”
  - Product: Typed and dictated answers get the same stamp (source "clinician") and print as "Clinician-typed" (provenanceLabels.ts at v1.1.345); only an adapted example prints differently ("AI-assisted draft, edited and affirmed by provider").
  - Proposed: Your answer prints in the note with a small label. Answers you wrote yourself, typed or dictated, are labelled Clinician-typed. An example you adapted is labelled as an AI-assisted draft.
- **pn-27** — live: “To use your own wording instead, type it in the intervention's Notes field and check Use My Exact Procedure Note — it is kept exactly as written and carried into Section 13 — Procedures & Supplies.”
  - Product: The checkbox 'Use my exact procedure note (skip AI/template regeneration).' sits under the Procedure Note box that appears below Generate Procedure Note (ConservativeCareInterventionVisit.tsx:3799-3846 at v1.1.345); it uses the Procedure Note text, not an intervention Notes field. The text is copied verbatim into the procedure entries (narrative_source "manual", :2779-2795) and kept by Procedure Supplies (ProcedureSuppliesVisit.tsx:974). Step 13's header reads 'Procedure Supplies' (VisitWizardV4.tsx:18355).
  - Proposed: To use your own wording instead, edit the Procedure Note box under Generate Procedure Note and tick Use my exact procedure note. The text is kept exactly as written and carried into Section 13 — Procedure Supplies.
- **pn-28** — live: “In Section 13 you can also click Generate Compliance Note for an additional structured narrative. It is optional: leave it blank if your procedure note already documents the procedure fully.”
  - Product: The Compliance Narrative box is the procedure's own narrative (procedure.narrative), not an extra one, and it is on Section 13's required-field list for every billable intervention (wizardRequiredFields.ts:614-621 at v1.1.345): left blank, Section 13 lists it as missing (a warning, not a block, since validation does not stop signing). It is filled from your exact procedure note when you ticked Use my exact procedure note, otherwise from the template (ConservativeCareInterventionVisit.tsx:2779-2795; ProcedureSuppliesVisit.tsx:5590-5625).
  - Proposed: In Section 13, the Compliance Narrative box holds the procedure narrative for each billable intervention. It fills from your procedure note when you ticked Use my exact procedure note, otherwise from a template; click Generate Compliance Note to redraft it. If it is blank, Section 13 lists it as missing — a warning, not a block.
- **pn-30** — live: “After you click Continue Review in step 17, the Wound Care Progress Note Preview shows the PDF.”
  - Product: The button is 'Continue to Review' in the wizard footer, outside step 17 (VisitWizardV4.tsx:19062-19086 at v1.1.345); after any documentation-gaps window, the screen headed 'Preview — Review Before Signing' shows the PDF (ProgressNotePreview.tsx:92).
  - Proposed: After you click Continue to Review at the bottom of the wizard, the Preview — Review Before Signing screen shows the actual PDF that will be stored.
- **pn-40** — live: “Medipyxis is documentation support software. It does not decide coverage, and it never blocks a clinician from signing a note.”
  - Product: The documentation checklist never blocks, but three things do hold signing: Continue to Review stops with 'Provider attestation is incomplete' until step 17 is attested (VisitWizardV4.tsx:9465-9497 at v1.1.345); the preview's Looks Good, Continue stays disabled until carried-forward free text is confirmed (ProgressNotePreview.tsx:84, 'The one item here that DOES hold signing'); and Continue to Review is disabled while Smart Import warnings are unresolved (VisitWizardV4.tsx:19063, useImportWarnings.ts).
  - Proposed: Medipyxis is documentation support software. It does not decide coverage, and the documentation checklist never stops a clinician from signing. To sign, you must complete Provider Attestation (step 17), confirm any carried-forward text the preview asks about, and resolve any Smart Import warnings.

## Biller cheat sheet — 11

https://help.medipyxis.com/quick-reference/biller/

- **qbl-03** — live: “The Work Queue's Claim Status dropdown is set by the biller.”
  - Product: Claim Status writes require status_write, which the biller role lacks (billingRoleGuard.ts backend/supabase/functions/_shared/billingRoleGuard.ts:17); a biller's change fails with an error.
  - Proposed: The Work Queue's Claim Status is a working status set on the claim by the billing team. Values: Eligibility Needed · Ready · In Progress · Flag Clinical · Hold · Billed · Paid · Denied · Appealed · Corrected · Partial Pay · Patient Responsibility · Write-Off · Void · Needs Coding. Users with the Biller role currently cannot change the Claim Status, from the row or with bulk actions: the change fails with an error. A fix is being tracked. Until then, ask a billing lead or admin to set it.
- **qbl-06** — live: “Auto-coding source: ICD-10 comes from Wound Assessment + History of Present Illness.”
  - Product: pullCodesMapper.ts maps ICD-10 from wound etiology/location and comorbidities; it never reads the HPI (no runningHpi/hpi_text reference).
  - Proposed: In the Visit Wizard's billing step, Pull Codes fills billing codes from the documentation with a rule-based mapper. There is no AI code fallback.
- **qbl-07** — live: “Auto-coding source: CPT/HCPCS comes from Procedures & Supplies + graft UIN applied.”
  - Product: pullCodesMapper.ts has no UIN reference; Medipyxis tracks grafts by lot, not UIN.
  - Proposed: In the Visit Wizard's billing step, Pull Codes fills billing codes from the documentation with a rule-based mapper. There is no AI code fallback.
- **qbl-08** — live: “Modifiers come from the rule engine: LT/RT from wound location, 25 from E/M + procedure same day, 59 when bundling conflict.”
  - Product: pullCodesMapper.ts adds no LT/RT (no "RT"/"LT" literal); the clinician checks modifiers in the billing step.
  - Proposed: The clinician reviews and edits every line, and checks the E/M level, modifiers (25, 59, KX, JW, JZ) and place of service code.
- **qbl-09** — live: “Place of service: facility default, overridden by visit location.”
  - Product: POS is looked up from the visit setting and defaults to 12 (Home) (placeOfService.ts frontend/src/utils/placeOfService.ts:32).
  - Proposed: Place of service is looked up from the visit setting and defaults to 12 (Home) when the setting is unknown.
- **qbl-10** — live: “Units: graft size in cm² (auto-calculated from L × W measurements).”
  - Product: Add-on units come from the summed debrided area documented for the procedure (pullCodesMapper.ts frontend/src/services/billing/pullCodesMapper.ts:595), not wound L × W.
  - Proposed: Units for area-based codes come from the documented debrided area, summed across wounds (each additional 20 sq cm).
- **qbl-14** — live: “Speed tip: jump to a claim with ⌘K + claim number.”
  - Product: ⌘K opens Quick Jump (AppShell.tsx frontend/src/components/AppShell.tsx:1141), which searches pages only; CommandBar.tsx has no claim_number search.
  - Proposed: ⌘K / Ctrl+K (Quick Jump), then type the page name, goes to a page such as Billing Operations, ERA/EOB or A/R Aging.
- **qbl-15** — live: “Speed tip: copy a fixed claim for resubmit with Claim detail → ⌘D.”
  - Product: No 'd' key handler exists in frontend/src.
  - Proposed: In the Coding Review drawer, ⌘S / Ctrl+S saves and ⌘↵ / Ctrl+Enter saves and goes to the next claim.
- **qbl-16** — live: “Speed tip: open ERA quickly with G then E.”
  - Product: No 'g' key handler exists in frontend/src.
  - Proposed: ⌘K / Ctrl+K (Quick Jump), then type the page name, goes to a page such as Billing Operations, ERA/EOB or A/R Aging.
- **qbl-17** — live: “Speed tip: add a note to a claim with N on claim detail.”
  - Product: No 'n' key handler exists in frontend/src.
  - Proposed: In the Coding Review drawer, ⌘S / Ctrl+S saves and ⌘↵ / Ctrl+Enter saves and goes to the next claim.
- **qbl-20** — live: “Denial evidence: each claim and denial keeps a full activity trail.”
  - Product: Denial records keep only the current appeal status and notes (useBillingDashboard.ts frontend/src/utils/hooks/useBillingDashboard.ts:991); there is no denial status history, and denial records are not created from payer denials.
  - Proposed: Track appeals on the Denials tab of Billing Operations. A denial record shows its current appeal status and the notes billers add; earlier statuses are not kept. Medipyxis does not yet create denial records from payer denials automatically.

## Invoices and AR — 11

https://help.medipyxis.com/vendor-portal/invoices-and-payment/

- **vpi-02** — live: “You are signed in to the vendor portal as vendor_admin or vendor_user. Terms are read-only for vendor_user; setting or changing the terms behind these invoices requires vendor_admin.”
  - Product: The Terms page route is admin-only (<VendorAdminOnly><VendorTermsPage /> in VendorRoutes.tsx at v1.1.345), so a vendor_user cannot open terms at all; it is not read-only for them. A third role, vendor_sales, also exists.
  - Proposed: You are signed in to the vendor portal. Every vendor role can open Invoices. Only an Admin can open and edit a clinic's terms.
- **vpi-04** — live: “There are two paths — same table, same downstream flow, different origin. A nightly job (invoice-draft-run) walks every current vendor_clinic_terms row that has auto_invoice = true and groups uninvoiced product use events into one draft per vendor × clinic per cadence.”
  - Product: The draft job is scheduled daily at 06:10 UTC (migrations/20260727130100_invoice_draft_and_webhook_cron.sql:28) but shouldFireCadence only returns true between 02:00 and 02:59 UTC for every cadence (invoice-draft-run/index.ts:328-351), and nothing bypasses it, so no automatic drafts are produced at v1.1.345.
  - Proposed: Medipyxis can draft invoices from the use events of your products, for clinics where your terms have Auto-invoice on. A draft groups use events not yet on another invoice, one draft per clinic per run. In the current release, automatic drafting is not producing drafts. Use New invoice instead.
- **vpi-05** — live: “Cadence table: per_use — every night, due Net 45; weekly — Mondays, 30 days; monthly — 1st of the month, 45 days; net_30 — every night (accumulating), 30 days; custom_day — every night (grouped by your terms), 30 days.”
  - Product: The cadence and due-date rules match the code, but the job never fires inside its window: The draft job is scheduled daily at 06:10 UTC (migrations/20260727130100_invoice_draft_and_webhook_cron.sql:28) but shouldFireCadence only returns true between 02:00 and 02:59 UTC for every cadence (invoice-draft-run/index.ts:328-351), and nothing bypasses it, so no automatic drafts are produced at v1.1.345.
  - Proposed: In the current release, automatic drafting is not producing drafts. Use New invoice instead.
- **vpi-09** — live: “Top of the page, four cards report AR Aging across all your open invoices: Current — not yet due; 1–30 days past due; 31–60 days past due; 60+ days past due.”
  - Product: The four cards are Current, 30 days, 60 days and 90+ days (VendorInvoicesPage.tsx at v1.1.345).
  - Proposed: Four cards show amounts by age: Current, 30 days, 60 days, and 90+ days.
- **vpi-10** — live: “Below that is the invoice table. Every row shows status, source (auto or manual), the clinic, invoice number, totals, and the last transition date.”
  - Product: The table has no last-transition column; its columns are Invoice #, Clinic, Issued, Due, Lines, Amount, Source and Status (VendorInvoicesPage.tsx:146-153).
  - Proposed: The table lists each invoice's number, clinic, issue date, due date, number of lines, amount, source (auto or manual), and status (draft, sent, disputed, or paid).
- **vpi-12** — live: “You can still add adjustments (line removals, credits) to a draft before you send. Apply any pre-send adjustments if needed: remove a line you should not be billing; credit a line with a documented amount and reason.”
  - Product: No Remove line or credit control exists on the invoice detail page at v1.1.345.
  - Proposed: (Remove the adjustment steps.)
- **vpi-20** — live: “The clinic can opt in per-tether to share the fuller denial detail, but the default is minimum-necessary.”
- **vpi-22** — live: “The disputed lines are highlighted on the detail page.”
- **vpi-23** — live: “Work with your clinic contact — often through the Messages thread attached to the invoice — to resolve. You can then issue a credit line, or the clinic can reverse the dispute and approve.”
  - Product: The invoice page has no Messages thread (no ThreadPanel in VendorInvoiceDetailPage.tsx at v1.1.345), and there is no credit-line control.
  - Proposed: Work with your clinic contact to resolve. The clinic can change its response and approve.
- **vpi-26** — live: “Run cadence now on the header manually triggers the draft job for your vendor.”
  - Product: The Run cadence now button has no action (no onClick handler in VendorInvoicesPage.tsx at v1.1.345); even if it called the job, the job only drafts between 02:00 and 02:59 UTC.
  - Proposed: The small notes under the age cards, the Cadence runs panel, and the Run cadence now button do not show or do anything real yet.
- **vpi-30** — live: “Troubleshooting: no drafts after use events landed — auto_invoice is false or cadence did not fire; open Terms and set auto_invoice on, or click Run cadence now.”
  - Product: Run cadence now does nothing, and auto-drafting does not fire at all in this release (The draft job is scheduled daily at 06:10 UTC (migrations/20260727130100_invoice_draft_and_webhook_cron.sql:28) but shouldFireCadence only returns true between 02:00 and 02:59 UTC for every cadence (invoice-draft-run/index.ts:328-351), and nothing bypasses it, so no automatic drafts are produced at v1.1.345.)
  - Proposed: In the current release, automatic drafting is not producing drafts. Use New invoice instead.

## Work the Billing Work Queue and submit claims — 10

https://help.medipyxis.com/modules/billing/work-queue/

- **wq-02** — live: “You have the biller or admin role.”
  - Product: A user whose role is biller cannot change a Claim Status from the queue. manual-status-update and batch-claim-status-update require the status_write operation (manual-status-update/handler.ts:225-229; batch-claim-status-update/handler.ts:121), and status_write allows only billing_lead, coder, medical_director, admin, superadmin and customersupport (_shared/billingRoleGuard.ts:17). The biller role is not on that list, so the dropdown and the bulk toolbar fail for billers.
  - Proposed: You have the billing lead, coder, medical director, or admin role. (The biller role cannot change a Claim Status.)
- **wq-04** — live: “Open Billing → Work Queue. / Open the Work Queue. Sidebar → Billing → Work Queue.”
  - Product: The sidebar item is "Billing Operations" (AppShell.tsx:737; navigation.ts:138) and has no Work Queue child. The Work Queue is opened from the Quick Actions card on the Billing Operations Overview tab (BillingDashboard.tsx:2880-2890) or by its URL /facility/{facility_uuid}/billing/work-queue.
  - Proposed: Open Billing Operations from the sidebar, then click Work Queue under Quick Actions on the Overview tab.
- **wq-08** — live: “Note Status — Derived: No Note Started · Draft Saved · In Progress · Completed · Signed.”
  - Product: The column renders "No Note Started" as "No Note" and "Draft Saved" as "Draft" (BillingWorkQueuePage.tsx:1032-1043); In Progress, Completed and Signed show as written.
  - Proposed: Note Status — Derived: No Note · Draft · In Progress · Completed · Signed.
- **wq-09** — live: “Billing Readiness — Derived: Not Ready · Pending Provider Completion · Pending Signature · Ready for Billing · Billing in Progress · Billed · Not Billable.”
  - Product: The column shows short badges: Ready for Billing → "Ready", Pending Provider Completion → "Pending Note", Pending Signature → "Pending Sig", Billing in Progress → "In Progress"; Billed and Not Billable as written (BillingWorkQueuePage.tsx:982-997). "Not Ready" is only a fallback for an unknown note status (billingReadiness.ts:224).
  - Proposed: Billing Readiness — Derived, shown as: Ready (Ready for Billing) · Pending Note (Pending Provider Completion) · Pending Sig (Pending Signature) · In Progress (Billing in Progress) · Billed · Not Billable.
- **wq-12** — live: “Provider — The rendering clinician.”
  - Product: The Provider column shows the clinician on the appointment (appointment.clinician_id → user_profile name, BillingWorkQueuePage.tsx:308-312, 497-499), not the claim's rendering provider, which can differ.
  - Proposed: Provider — The clinician on the appointment.
- **wq-24** — live: “Search — Patient or provider name / email.”
  - Product: Search matches only patient_name and clinician_name (BillingWorkQueuePage.tsx:562-567). A provider's email is matched only when the provider has no full name, because the name falls back to the email (BillingWorkQueuePage.tsx:311). The box's placeholder still says "Patient or provider name/email…" (BillingWorkQueuePage.tsx:1258).
  - Proposed: Search — Patient or provider name.
- **wq-28** — live: “Note status (filter) — No Note Started · Draft Saved · In Progress · Completed · Signed.”
  - Product: The filter lists "No Note" and "Draft" for those two values (BillingWorkQueuePage.tsx:1340-1341).
  - Proposed: Note status — No Note · Draft · In Progress · Completed · Signed.
- **wq-37** — live: “Notify is available only when the visit is Seen and the encounter isn't already ready or billed. (Troubleshooting: Notify is disabled — Visit isn't Seen, or the encounter is already ready/billed.)”
  - Product: Notify is also disabled when readiness is Billing in Progress, i.e. any claim exists that is not submitted/accepted/paid or needs-coding (BillingWorkQueuePage.tsx:1626-1631).
  - Proposed: Notify is available only when the visit is Seen and the encounter is not Ready for Billing, Billing in Progress, or Billed.
- **wq-44** — live: “Calendar opens the Fleet Calendar for the same encounters.”
  - Product: Calendar navigates to /facility/{id}/ops/fleet-calendar with no date range or filter (BillingWorkQueuePage.tsx:1072-1076); the calendar opens on its own default view, not on the queue's encounters.
  - Proposed: Calendar opens the Fleet Calendar.
- **wq-49** — live: “No Claim Status dropdown on a row — No claim exists yet for that encounter. A claim is created from the completed visit or via Edit → the claim form.”
  - Product: Edit is shown only on rows that already have a claim (BillingWorkQueuePage.tsx:1599-1611), so it cannot create one. A claim is created automatically when the visit is finalized (finalizeVisit.ts:11), or by hand with New Claim on Billing Operations (/billing/new).
  - Proposed: No claim exists yet for that encounter. One is created automatically when the visit is signed; to create one by hand, use New Claim on Billing Operations.

## Create an appointment in the Fleet Calendar — 10

https://help.medipyxis.com/modules/fleet-calendar/create-appointment/

- **lca-05** — live: “Click Create Appointment (top of the calendar) or click an empty slot in a provider's swim lane. The Create New Appointment dialog opens.”
  - Product: Create Appointment in the toolbar is true. There are no swim lanes, and clicking an empty slot does nothing by itself: hovering an empty hour in a provider's column shows a "+ Create Appointment" button (frontend/src/pages/ops/FleetCalendarCanvas.tsx:963), shown only when that hour has no visits.
  - Proposed: Click Create Appointment in the toolbar, or hover over an empty hour in a provider's column and click + Create Appointment (this fills in that provider, the day and the hour). The Create New Appointment dialog opens.
- **lca-07** — live: “Choose a Visit Type. Select from the Visit Type dropdown (options come from your organization's configured visit types).”
  - Product: fetchVisitTypes reads every active visit_type row with no tenant, organization or facility filter (frontend/src/services/schedulingService.ts:70), so every clinic sees the same shared list.
  - Proposed: Choose a Visit Type from the Visit Type dropdown. The list is the same for every clinic.
- **lca-09** — live: “Assign a Provider / Clinician (required). Choose from the Provider / Clinician list — the provider's time zone appears next to the field once selected.”
  - Product: The badge next to the field shows the facility's time zone and is shown whenever the facility has one, before any provider is chosen (frontend/src/pages/ops/FleetCalendarCanvas.tsx:4629).
  - Proposed: Assign a Provider / Clinician (required). The facility's time zone is shown next to the field; the date and time you pick are in that time zone.
- **lca-11** — live: “The Time Slot you choose is an available one (the list offers available time slots).”
  - Product: The Time Slot list is a fixed set of times from 06:00 to 19:45 every 15 minutes (frontend/src/pages/ops/FleetCalendarCanvas.tsx:2078); it does not check the provider's availability. Overlaps are caught later by a confirm prompt (frontend/src/pages/ops/FleetCalendarCanvas.tsx:3331).
  - Proposed: Choose a Time Slot (every 15 minutes from 06:00 to 19:45). The list does not check availability; if the provider already has an overlapping appointment, Medipyxis asks you to confirm.
- **lca-14** — live: “Add Route Notes (optional). Enter access instructions, parking details, or other logistics in Route Notes. These are saved on the appointment record for the visiting clinician.”
  - Product: PRODUCT DEFECT: Route Notes typed in the create dialog are silently dropped. The dialog sends purpose and route_notes (frontend/src/pages/ops/FleetCalendarCanvas.tsx:3349, frontend/src/pages/ops/FleetCalendarCanvas.tsx:3352); the service collapses them into one field as `notes: purpose ?? route_notes` (frontend/src/services/fleetCalendarService.ts:1811), and purpose is always a string (default ""), so route notes never reach the server. create-appointment has no route_notes field at all.
  - Proposed: The Route Notes box on the create dialog is not saved with a new appointment. Open the appointment, click Edit Appointment, and fill in Route Notes there.
- **lca-16** — live: “Result: the new appointment card displays in the assigned provider's swim lane (Day view) or on the correct date tile (Month view), color-coded as Scheduled.”
  - Product: There are no swim lanes; Day view shows the card in the provider's column (frontend/src/pages/ops/FleetCalendarCanvas.tsx:4203). Month tiles show a count, not cards.
  - Proposed: The new card appears in the assigned provider's column in Day view, tinted for Scheduled, and is counted on that date's tile in Month view.
- **lca-17** — live: “If you set a recurrence, the series is created through the recurrence end date.”
  - Product: A series stops at 52 occurrences (MAX_OCCURRENCES, backend/supabase/functions/_shared/recurrence-engine.ts:3), so a far-off end date does not get every date.
  - Proposed: If you set a recurrence, repeat appointments are created up to the recurrence end date, at most 52 in one series.
- **lca-18** — live: “Click the appointment card after saving to open its details, where you can attach documents (order scripts, care plans) to the visit record before the clinician departs.”
  - Product: Appointment Details (frontend/src/components/AppointmentDetailsModal.tsx:702) has no file input or attach control.
  - Proposed: Click the appointment card to open Appointment Details, where you can review it or click Edit Appointment.
- **lca-20** — live: “Troubleshooting: Cannot submit the form — a required field is empty — check Patient, Provider / Clinician, Date, Time Slot, and Duration — all are required (plus Recurrence End Date if recurrence is on).”
  - Product: Create Appointment is disabled only when there is no patient, no provider, or recurrence is on without an end date (frontend/src/pages/ops/FleetCalendarCanvas.tsx:4834). Date, Time Slot and Duration always have defaults and are not checked.
  - Proposed: Troubleshooting: Create Appointment is greyed out when no patient or no provider is chosen, or recurrence is on without an end date.
- **lca-24** — live: “Move on the Fleet Calendar: dragging a visit to a new time can reschedule it; the app confirms with a "Rescheduled to …" message.”
  - Product: Dragging in Day view does move the time (frontend/src/pages/ops/FleetCalendarCanvas.tsx:2853) but confirms with "Appointment assigned to provider successfully" (frontend/src/pages/ops/FleetCalendarCanvas.tsx:2927). "Rescheduled to …" appears only when you drag to another day in Week view with one provider selected (frontend/src/pages/ops/FleetCalendarCanvas.tsx:2793).
  - Proposed: In Day view, drag a visit to another time or another provider's column. In Week view with one provider selected, drag a visit to another day; the app confirms with a "Rescheduled to …" message.

## Fleet Calendar overview — 10

https://help.medipyxis.com/modules/fleet-calendar/overview/

- **lfo-02** — live: “Caption: Fleet Calendar — Day view. Each horizontal lane represents one provider; appointment cards are color-coded by status. (Image alt text: "showing swim lanes for each provider".)”
  - Product: Day view draws one vertical column per provider (fixed-width column cards side by side, frontend/src/pages/ops/FleetCalendarCanvas.tsx:806; section at frontend/src/pages/ops/FleetCalendarCanvas.tsx:4203), each with hour rows running down. There are no horizontal lanes or swim lanes. Status tint is true.
  - Proposed: Fleet Calendar — Day view. Each provider has a column with the day's hours running down it; each appointment card is tinted with its status color.
- **lfo-03** — live: “Views — Day: swim lanes per provider for a single date. Best for daily dispatch.”
  - Product: Day view is one column per provider for the chosen date (frontend/src/pages/ops/FleetCalendarCanvas.tsx:4203); no swim lanes.
  - Proposed: Day: one column per provider for a single date.
- **lfo-08** — live: “Colors and labels are configured for your organization, so the exact list can vary.”
  - Product: Statuses, names and colors are read from one shared reference table with no facility or organization scoping (frontend/src/services/fleetCalendarService.ts:680, select at frontend/src/services/fleetCalendarService.ts:688). Every clinic sees the same list.
  - Proposed: Each appointment card shows its status and is tinted with that status's color. The status list is the same for every clinic.
- **lfo-10** — live: “Status Draft Saved: appointment form saved but not confirmed.”
  - Product: Draft Saved is a saved, unsigned draft of the progress note, not an unconfirmed appointment form (frontend/src/components/calendar/FleetReportPanel.tsx:69).
  - Proposed: Draft Saved: the progress note was saved as a draft and is not signed.
- **lfo-12** — live: “Status Seen: visit documentation is underway.”
  - Product: Seen means the patient was seen but the note has not been started (frontend/src/components/calendar/FleetReportPanel.tsx:57); documentation underway is Progress Note In Progress.
  - Proposed: Seen: the patient was seen, but the note has not been started.
- **lfo-17** — live: “Status No Show: patient did not answer or was unavailable at the door.”
  - Product: The product defines No Show only as "Patient was a no-show." (frontend/src/components/calendar/FleetReportPanel.tsx:81); it says nothing about the door or answering.
  - Proposed: No Show: the patient was a no-show.
- **lfo-18** — live: “Status Not Seen: clinician arrived but could not complete the visit.”
  - Product: Not Seen is "Visit did not occur; reason captured." (frontend/src/components/calendar/FleetReportPanel.tsx:87) with a reason picked from a list (frontend/src/components/AppointmentDetailsModal.tsx:244); it does not require the clinician to have arrived.
  - Proposed: Not Seen: the visit did not happen; a reason is recorded.
- **lfo-19** — live: “When a referral card moves into the Assigned column in Referral Intake, it becomes eligible for scheduling in the Fleet Calendar. Select the patient when creating an appointment — the referral data pre-populates the Appointment Type and provider fields.”
  - Product: The create form has no referral link and starts empty (visitTypeKey and clinicianId default to "" at frontend/src/pages/ops/FleetCalendarCanvas.tsx:2104, frontend/src/pages/ops/FleetCalendarCanvas.tsx:2103); the patient search lists the facility's patients (frontend/src/services/fleetCalendarService.ts:422). Nothing is copied from the referral.
  - Proposed: The Patient search when you create an appointment lists the patients at your facility. The appointment form does not copy anything from the referral; choose the visit type and provider yourself.
- **lfo-20** — live: “Clicking Start Visit on an appointment routes by the patient's care specialty (selected during intake): wound care patients land in the Wound Cockpit, then the Visit Wizard; primary care patients land in the Primary Care Cockpit.”
  - Product: There is no Primary Care Cockpit anywhere in the frontend, and Start Visit does no specialty routing: it calls openVisitWizard (frontend/src/components/AppointmentDetailsModal.tsx:1473), which navigates straight to the Visit Wizard (frontend/src/utils/openVisitWizard.ts:230).
  - Proposed: Click an appointment to open Appointment Details, then click Start Visit (it reads Continue Visit or Resume Visit when a note is already in progress). The Visit Wizard opens for that patient and appointment, whatever the patient's specialty.
- **lfo-22** — live: “A View Map action opens the facility route map for the selected day.”
  - Product: View Map navigates to the map without the calendar date (frontend/src/pages/ops/FleetCalendarCanvas.tsx:3694); the Route Map starts on today (frontend/src/pages/ops/FleetMapView.tsx:141).
  - Proposed: The View Map button opens the Route Map, which starts on today's date; pick another date on the map page.

## More (Fax) overview — 10

https://help.medipyxis.com/modules/more-fax/overview/

- **fxo-02** — live: “Faxing is available to all roles.”
  - Product: Fax Center is gated by the per-role "More" feature (navigation.ts frontend/src/constants/navigation.ts:154; routes wrapped in <FeatureAccess feature="More"> at frontend/src/user-routes.tsx:1583); org admins switch it per role in Organization Role Config.
  - Proposed: Fax Center is shown to the roles that have it turned on in Administrator → Organization Role Config.
- **fxo-04** — live: “The Fax Center has three sections: Send Fax Logs, Received Fax Logs, and Fax Review Queue.”
  - Product: MorePage.tsx has four tiles: Outgoing Fax Logs (frontend/src/pages/MorePage.tsx:97), Received Fax Logs, Fax Review Queue and Fax Settings (frontend/src/pages/MorePage.tsx:154). There is no "Send Fax Logs" tile.
  - Proposed: The Fax Center item in the sidebar is where you send faxes and work with the faxes your clinic receives. The page opens with counts of Total Faxes, Successful, Failed and Pending, and four tiles.
- **fxo-05** — live: “Send Fax Logs: history of all outbound faxes sent by your facility — date, recipient number, document name, page count, and delivery status.”
  - Product: The tile is Outgoing Fax Logs (frontend/src/pages/MorePage.tsx:97); its table has 9 columns (Status, Patient, Receiving Fax, File Name, Document Type, Sent At, Created At, Sent By, Actions; frontend/src/pages/FaxLogsPage.tsx:656) and no page-count column.
  - Proposed: Outgoing Fax Logs: send a fax with New Fax, and see the faxes your clinic has sent with their delivery status. Outgoing Fax Logs columns: Status, Patient, Receiving Fax, File Name, Document Type, Sent At, Created At, Sent By and Actions.
- **fxo-06** — live: “Received Fax Logs: history of all inbound faxes received — date, sender number, page count, and whether the fax was auto-processed or required manual review.”
  - Product: ReceivedFaxLog.tsx has no auto-processed / manual-review indicator; it is the triage inbox (frontend/src/pages/ReceivedFaxLog.tsx:482).
  - Proposed: Received Fax Logs: the inbox for every incoming fax. Assign a fax to a patient, file it to the patient's chart, or attach it to one of the patient's orders.
- **fxo-07** — live: “Fax Review Queue: inbound faxes that could not be automatically matched to a patient or referral; faxes appear there when OCR confidence is below the auto-routing threshold or no matching patient record is found.”
  - Product: Every received fax (except a failed one with no stored PDF) is queued for review (backend/supabase/functions/receive-fax-webhook/index.ts:700); auto-create is hard-disabled (backend/supabase/functions/process-fax-idp/index.ts:651). There is no auto-routing threshold.
  - Proposed: Every fax your clinic receives is listed in Received Fax Logs. It is also added to the Fax Review Queue, where Medipyxis reads it and fills in the patient details it finds.
- **fxo-08** — live: “Click the row to open the fax document in the preview pane.”
  - Product: Queue rows have no click handler; the row's View button navigates to a separate fax review page (FaxReviewQueue.tsx frontend/src/components/idp/FaxReviewQueue.tsx:751, frontend/src/components/idp/FaxReviewQueue.tsx:344).
  - Proposed: Click View on the fax's row to open it on its own review page.
- **fxo-10** — live: “Take action: Link to Referral (associates the fax with an existing referral card), Create Referral (opens the New Referral form with OCR data pre-populated), Dismiss (marks the fax reviewed and non-actionable; it moves to Received Fax Logs), File to patient chart (attaches the fax to an existing patient's Documents tab).”
  - Product: FaxReviewDetail.tsx offers Save Changes (frontend/src/components/idp/FaxReviewDetail.tsx:4059), Reject (frontend/src/components/idp/FaxReviewDetail.tsx:4077) and Approve & Create Patient (frontend/src/components/idp/FaxReviewDetail.tsx:4102). Filing to a chart is done from Received Fax Logs, not the review queue.
  - Proposed: Medipyxis never creates a patient from a fax on its own. A person opens each fax in the Fax Review Queue, with the document on one side and the extracted fields on the other, and clicks Approve & Create Patient, Save Changes or Reject.
- **fxo-11** — live: “Note: Inbound fax review and referral auto-creation are handled by the Fax Review Queue in Referral Intake, a separate page from the Fax Center.”
  - Product: No auto-creation (backend/supabase/functions/process-fax-idp/index.ts:651), and Fax Review Queue is a Fax Center tile (frontend/src/pages/MorePage.tsx:133).
  - Proposed: Fax Review Queue: incoming faxes that Medipyxis has read automatically, waiting for a person to turn them into new patients. Medipyxis never creates a patient from a fax on its own. A person opens each fax in the Fax Review Queue, with the document on one side and the extracted fields on the other, and clicks Approve & Create Patient, Save Changes or Reject.
- **fxo-12** — live: “The Fax Center supports filtering by date range and fax number, and exporting to CSV.”
  - Product: Outgoing Fax Logs search covers patient name and file name (frontend/src/pages/FaxLogsPage.tsx:570); dates are Today / This Week / This Month presets. CSV export exists, capped at 5,000 rows (frontend/src/pages/FaxLogsPage.tsx:261).
  - Proposed: Search by patient name or file name, filter by status (Sent, Pending, Failed, Sending, Draft, Cancelled) and by date (Today, This Week, This Month). Export downloads the filtered list as a CSV file, up to 5,000 rows.
- **fxo-14** — live: “Failed faxes can be retried (up to 3 attempts) or cancelled, and each fax has an audit log.”
  - Product: Retry is capped at 3 (backend/supabase/functions/fax-center/index.ts:438), but Cancel is shown only for pending or draft faxes (frontend/src/pages/FaxLogsPage.tsx:782). Audit history exists (frontend/src/pages/FaxLogsPage.tsx:804).
  - Proposed: A failed fax can be retried up to 3 times. A pending or draft fax can be cancelled. Each row has an audit history, and a sent fax can be downloaded.

## How the Visit Wizard opens (route-on-arrival) — 10

https://help.medipyxis.com/modules/visit-wizard-ehr/how-the-wizard-opens/

- **hwo-02** — live: “Before you start: you are a clinician, medical director, or clinical manager at a facility that uses the wound-care wizard.”
  - Product: The /visit-wizard route is gated by FeatureAccess feature="All Patients" (user-routes.tsx:2545-2550); which roles hold that feature is configured in the database, so the role list cannot be checked from code.
- **hwo-05** — live: “Case 1 — No visit yet: the wizard opens on Section 1 with the visit type pre-selected from the appointment and the patient/wound context carried in.”
  - Product: The wizard opens with no section expanded (`useState<string>("")`, VisitWizardV4.tsx:5665-5666); the visit type and carried-forward data are loaded (openVisitWizard.ts:159, VisitWizardV2Page.tsx:584).
  - Proposed: Case 1 — No visit yet: the wizard opens with all sections collapsed, the visit type taken from the appointment, and the patient's carried-forward data pre-filled. Open Step 1 to begin.
- **hwo-07** — live: “Nothing is stored until you complete a field.”
  - Product: Autosave fires on any dirty form change (VisitWizardV4.tsx:7392-7409), and code comments record that merely expanding Step 9 was enough to make autosave insert a visit row (resolveWizardArrival.ts:299; VisitWizardV2Page.tsx:241-243); whether opening a section alone still writes a row needs a browser check, so this sentence cannot be confirmed from code.
- **hwo-11** — live: “Case 3 — If the appointment already carries a finalized (signed and locked) note on this wound, the wizard opens on a fresh Section 1.”
  - Product: When resolveWizardArrival finds a signed (visit_locked) row on the appointment, decideWizardEntry returns show:'signed-visit' (resolveWizardArrival.ts:320-329) and VisitWizardV2Page renders SignedVisitReview instead of mounting the wizard (VisitWizardV2Page.tsx:1223-1229), whichever wound the signed note is on.
  - Proposed: If the appointment already has a signed note, the wizard does not open. You see "This visit is signed and locked" with Review signed note, Add an addendum, Add a wound by addendum, and Back to patient chart. Any change goes on the signed note as an addendum.
- **hwo-13** — live: “Medipyxis permits one finalized note per wound on the same appointment, so documenting a second wound separately on the same visit is legitimate and will not be blocked.”
  - Product: finalize-visit-lock refuses to sign a second visit on an appointment that already has a signed one (oneSignedVisitPerAppointment.ts:16-19; handler.ts:1079, 1300), save-visit-data refuses a new visit row beside a finished one (_shared/oneVisitPerAppointment.ts:40-42), and the signed screen tells users to add another wound by addendum (SignedVisitScreen.tsx:78-80).
  - Proposed: An appointment holds one signed note. To document another wound you assessed at that visit, open the appointment and use Add a wound by addendum on the signed note; a second visit on the same appointment is refused.
- **hwo-14** — live: “Table: an appointment with a signed note on this wound — the wizard shows a fresh Section 1; close it, open the signed note from Progress Notes or the Wound Cockpit timeline, and use Add Addendum.”
  - Product: When resolveWizardArrival finds a signed (visit_locked) row on the appointment, decideWizardEntry returns show:'signed-visit' (resolveWizardArrival.ts:320-329) and VisitWizardV2Page renders SignedVisitReview instead of mounting the wizard (VisitWizardV2Page.tsx:1223-1229), whichever wound the signed note is on.
  - Proposed: If the appointment already has a signed note, the wizard does not open. You see "This visit is signed and locked" with Review signed note, Add an addendum, Add a wound by addendum, and Back to patient chart. Any change goes on the signed note as an addendum.
- **hwo-15** — live: “Table: an appointment with a signed note on a different wound — a fresh Section 1, ready to document the new wound; both notes will co-exist on the appointment by design.”
  - Product: When resolveWizardArrival finds a signed (visit_locked) row on the appointment, decideWizardEntry returns show:'signed-visit' (resolveWizardArrival.ts:320-329) and VisitWizardV2Page renders SignedVisitReview instead of mounting the wizard (VisitWizardV2Page.tsx:1223-1229), whichever wound the signed note is on. A second signed visit on the appointment is refused by finalize-visit-lock (oneSignedVisitPerAppointment.ts:16-19).
  - Proposed: An appointment holds one signed note. To document another wound you assessed at that visit, open the appointment and use Add a wound by addendum on the signed note; a second visit on the same appointment is refused.
- **hwo-18** — live: “Patient Chart — the Appointment Management card's Open Visit button.”
  - Product: The button text is 'Open visit' with a lowercase v (AppointmentManagementCard.tsx:926).
  - Proposed: Patient Chart — the Appointment Management card's Open visit button.
- **hwo-21** — live: “Troubleshooting: Start Visit can take you to the Primary Care Cockpit when Fleet Calendar specialty routing sends a primary-care patient to the PCP flow.”
  - Product: Fleet Calendar Start Visit always calls openVisitWizard (AppointmentDetailsModal.tsx:1473), which always navigates to /visit-wizard (openVisitWizard.ts:230); no Primary Care Cockpit exists.
  - Proposed: (Remove this row: Start Visit always opens the Visit Wizard.)
- **hwo-22** — live: “Troubleshooting: the wizard opens fresh when the appointment already has a signed note; it does not redirect you to the signed note.”
  - Product: When resolveWizardArrival finds a signed (visit_locked) row on the appointment, decideWizardEntry returns show:'signed-visit' (resolveWizardArrival.ts:320-329) and VisitWizardV2Page renders SignedVisitReview instead of mounting the wizard (VisitWizardV2Page.tsx:1223-1229), whichever wound the signed note is on.
  - Proposed: If the appointment already has a signed note, the wizard does not open. You see "This visit is signed and locked" with Review signed note, Add an addendum, Add a wound by addendum, and Back to patient chart. Any change goes on the signed note as an addendum.

## Set up an organization with multiple locations — 9

https://help.medipyxis.com/admin/multi-location-setup/

- **ml-01** — live: “Add each of your locations, give every one the identity payers expect, and make sure your staff can see the locations they work at.”
  - Product: Customers cannot add locations: Add Facility is enabled only for Medipyxis support roles (pages/FacilityDashboard.tsx:469).
  - Proposed: Get each of your locations added by Medipyxis, give every one the identity payers expect, and make sure your staff can see the locations they work at.
- **ml-f01** — live: “Do it for every location, including your first one, which starts out blank.”
  - Product: The first location need not start blank: the onboarding request that creates it carries a legal name (functions/create-client-onboarding/validation.ts:298).
  - Proposed: Do it for every location, including your first one.
- **ml-f02** — live: “Click Add Facility. Enter the NPI Code first, then fill in Facility Name, Tax Number, Phone Number, Email Address, Fax Number and the address fields. Click Save Changes. Repeat for every location.”
  - Product: Add Facility is enabled only for Medipyxis staff (superadmin, customer support) (pages/FacilityDashboard.tsx:469); for customer roles it is greyed out with "Contact Medipyxis support to add a location".
  - Proposed: New locations are added by Medipyxis staff. For your role, Add Facility is greyed out and its tip reads "Contact Medipyxis support to add a location".
- **ml-f04** — live: “If Add Facility is greyed out, you have reached the number of locations your organization is set up for. Ask your Medipyxis contact to raise it.”
  - Product: For customer roles Add Facility is always greyed out because only Medipyxis staff can add locations (pages/FacilityDashboard.tsx:470); the location limit is a second reason.
  - Proposed: New locations are added by Medipyxis staff. For your role, Add Facility is greyed out and its tip reads "Contact Medipyxis support to add a location". If your organization has used all its locations, Medipyxis has to raise the limit before another one can be added.
- **ml-f05** — live: “Wait for the blue Found in federal NPPES registry card to appear beneath the NPI. It shows the legal business name, the provider type, and the address the registry holds. Click Use this info. This copies the registry's legal name into Legal / Billing Name, updates the address to the registry's practice location, and records that the location was verified.”
  - Product: Use this info also overwrites the phone number (components/FacilityAddEditModal.tsx:394), which the page does not say; the card shows the specialty (taxonomy) rather than a provider type.
  - Proposed: Wait for the Found in federal NPPES registry card to appear beneath the NPI. It shows the name, the specialty, and the address the registry holds. Use this info copies the registry's legal name into Legal / Billing Name, updates the address and phone to the registry's, and records the NPI type, taxonomy code and the time of the lookup.
- **ml-f06** — live: “Choosing the Clinician role reveals the provider fields — NPI, taxonomy code, state licence, DEA and signature. Complete those for anyone who will sign visits.”
  - Product: The provider fields show for every role except the non-clinical list, not only Clinician (pages/HRNewUserPage.tsx:910); they are required for the Clinician role.
  - Proposed: Provider fields (NPI, taxonomy code, state licence, DEA and signature) show for clinical, management and admin roles and are required for the Clinician role.
- **ml-f08** — live: “In Provider Information, look at the Organization / Provider Name box. It is filled in with the everyday Facility Name.”
  - Product: It is filled with a previously saved provider name first and only falls back to the Facility Name (components/billing/stedi/useFacilityEnrollmentDefaults.ts:85).
  - Proposed: In Provider Information, the Organization / Provider Name box is filled in with the everyday Facility Name unless a provider name was saved before.
- **ml-res** — live: “Result: Every location exists under your organization, carries a verified legal name, and has its staff assigned. Your people see the locations they work at when they use the facility switcher, and each location is enrolled with its payers.”
  - Product: Locations are created by Medipyxis staff, not by this procedure (see ml-f02).
  - Proposed: Every location carries a legal name that matches the registry and has its staff assigned; each location is enrolled with its payers.
- **ml-f09** — live: “Troubleshooting: Add Facility is greyed out — you have reached your organization's location limit — ask your Medipyxis contact to raise it.”
  - Product: For customer roles it is greyed out because only Medipyxis staff can add locations (pages/FacilityDashboard.tsx:469).
  - Proposed: New locations are added by Medipyxis staff. For your role, Add Facility is greyed out and its tip reads "Contact Medipyxis support to add a location".

## Practice admin first hour — 9

https://help.medipyxis.com/getting-started/by-role/practice-admin/

- **pa-f02** — live: “You know your organization's billing NPI, tax ID, and clearinghouse credentials (you can add these later, but now is faster).”
  - Product: There are no customer clearinghouse credentials: the Stedi key exists only as an edge-function secret (no STEDI_API_KEY in frontend/src).
  - Proposed: Have your billing NPI, tax ID, and clinicians' credentials ready.
- **pa-f03** — live: “If not, click + Add Facility and enter the name, address, timezone, tax ID, and default place-of-service.”
  - Product: Add Facility is enabled only for Medipyxis staff (pages/FacilityDashboard.tsx:469) and the facility form has no default place of service.
  - Proposed: Facilities: check your facility is listed and Active; new locations are added by Medipyxis support; Edit fills NPI, Tax Number, fax and timezone; the facility ID is in the URL after /facility/.
- **pa-f04** — live: “Click Administrator in the sidebar. You land on Organization Role Config.”
  - Product: You land on the Administrator cockpit; Organization Role Config is a card on it (pages/administrator/AdministratorCockpit.tsx:145).
  - Proposed: Administrator → Organization Role Config card; ten roles; tick features and Save Changes.
- **pa-f05** — live: “Bulk path (20+ people): HR & Compliance → Bulk Employee Upload. Download the template, fill it in, upload. Medipyxis validates and shows any row-level errors before committing.”
  - Product: Bulk upload is disabled (components/HrBulkUploadModal.tsx:716).
  - Proposed: Bulk Employee Upload is turned off for now.
- **pa-f06** — live: “The tracker derives status automatically: Valid, Expiring (within 5 days), Expired, or Missing.”
  - Product: The label is "Expiring Soon" (HRCredentialTracker.tsx); the 5-day window is right (pages/HRCredentialTracker.tsx:281).
  - Proposed: Credential Tracker: Upload Credential with expiration date; status Valid, Expiring Soon (within 5 days), Expired, Missing.
- **pa-f07** — live: “Open Referral Intake. On first visit the system asks for your inbound Fax number and Intake email — both forward to Medipyxis's OCR pipeline.”
  - Product: No first-visit prompt or "Intake email" exists in frontend/src; inbound faxes are matched to the facility by its Fax Number.
  - Proposed: Faxes received on the facility Fax Number are filed to the facility and appear in the Fax Review Queue.
- **pa-f08** — live: “Open Billing Operations → Clearinghouse Config (gear icon, top-right).”
  - Product: There is no Clearinghouse Config screen (no such string in frontend/src).
  - Proposed: Stedi is the clearinghouse (replaced ClaimMD in May 2026) and Medipyxis runs it; enroll providers at Billing Operations → Payer Enrollment.
- **pa-f09** — live: “Delete the test data when you're done.”
  - Product: Patients cannot be deleted from All Patients (no Delete Patient control); archive the test patient instead.
  - Proposed: Test loop: referral → Fleet Calendar visit → sign off → encounter appears in Billing Work Queue; archive the test patient in All Patients.
- **pa-res2** — live: “Result: Credentials are tracked and will auto-alert.”
  - Product: No alert is sent: Send Reminder only shows a toast and HRCredentialTracker.tsx calls no function (see pa-08a).
  - Proposed: Credentials are tracked with an expiry status.

## Tour of your dashboard — 9

https://help.medipyxis.com/getting-started/your-dashboard/

- **yd-f01** — live: “It's personalized by role — a clinician sees different widgets than a practice admin.”
  - Product: The dashboard cards are the same for every role; only the sidebar differs (pages/Dashboard.tsx:298 is a fixed list).
  - Proposed: The dashboard is the first page after sign-in; the sidebar shows the modules your role can open; the dashboard cards are the same for everyone.
- **yd-f02** — live: “The home dashboard has four KPI tiles, Work Cockpits, HR Self-Service, and the Action Items + Recent Activity column.”
  - Product: The Action Items panel was removed (pages/Dashboard.tsx:1415).
  - Proposed: Four tiles: Compliance Status (credential compliance), Active Patients, Today's Schedule (today's appointments), Visits Completed. Right column: Announcements (View Announcements & Kudos) and Recent Activity with View all activity.
- **yd-f03** — live: “Welcome banner: your name, role badge ("Licensed Healthcare Professional"), and duty status (On Duty / Off Duty). The green HIPAA badge confirms your session is HIPAA-compliant.”
  - Product: Dashboard.tsx shows no "Licensed Healthcare Professional" role badge and no Off Duty state; the On Duty and HIPAA badges are static labels.
  - Proposed: Welcome banner: Welcome Back with your name, and the green On Duty and HIPAA badges.
- **yd-f04** — live: “Four live KPI tiles: My Compliance Status (completed / total required credentials); Unread Messages (Team Chat and patient-level messages); Upcoming Events (visits, meetings, trainings in the next 7 days); Team Kudos (recognition this month).”
  - Product: The tiles are Compliance Status, Active Patients, Today's Schedule and Visits Completed (pages/Dashboard.tsx:272).
  - Proposed: Four tiles: Compliance Status (credential compliance), Active Patients, Today's Schedule (today's appointments), Visits Completed.
- **yd-f05** — live: “For admins: replace these with Oversight Cockpit and HR & Compliance.”
  - Product: The Work Cockpits list is the same for every role; there is no Oversight Cockpit card on the dashboard.
  - Proposed: (remove the sentence)
- **yd-f07** — live: “Action Items — tasks assigned to you: pending signatures, credential renewals, stuck visits, unsent faxes, with a red "urgent" counter. Recent Activity — the last 20 things you did in Medipyxis.”
  - Product: The Action Items panel was removed because it never had real data (pages/Dashboard.tsx:1415); the 20-item count was not confirmed.
  - Proposed: Right column: Announcements (View Announcements & Kudos) and Recent Activity with View all activity.
- **yd-f08** — live: “If credentials are missing or expired, the card shows a yellow or red state with a Configure button that opens DoseSpot inside an in-app frame. Click Open DoseSpot to launch the prescribing console for the patient context you're working on.”
  - Product: The dashboard buttons are Set Up ePrescribing and Complete EPCS Setup; there is no Configure or Open DoseSpot button in Dashboard.tsx.
  - Proposed: Electronic Prescribing Setup shows DoseSpot ePrescribing status: ePrescribing Active or Setup needed; EPCS Active, Setup required, or Not configured; a Not confirmed badge when DoseSpot has not confirmed the prescriber; Set Up ePrescribing / Complete EPCS Setup buttons.
- **yd-f09** — live: “Knowledge Base & Resources: quick links to onboarding material, release notes, and admin references; each tile opens the matching destination inside this help center (Welcome to Medipyxis, Release notes, Module reference).”
  - Product: The tiles are Policies, Training Materials and Industry News inside the app (pages/Dashboard.tsx:1564).
  - Proposed: Knowledge Base & Resources links to Policies, Training Materials and Industry News.
- **yd-f10** — live: “Press ⌘K / Ctrl+K from anywhere to jump to a patient, visit, or page without using the sidebar. Customize which KPI tiles appear by role: Administrator → Organization Role Config.”
  - Product: Quick jump lists pages only (components/AppShell.tsx:1489); KPI tiles are not configurable in Organization Role Config.
  - Proposed: Press ⌘K / Ctrl+K from anywhere to jump to a page by name.

## Inventory Management overview — 9

https://help.medipyxis.com/modules/inventory/overview/

- **inv-ov-01** — live: “A UIN (Unique Inventory Number) is a system-generated identifier assigned to a single physical unit of a product at the moment it is received into inventory; no two units share a UIN.”
  - Product: The hub tiles route to /inventory-management/product-batches/<category> (InventoryManagement.tsx). That receiving path writes inventory_product_batches_v2, which has no UIN column (types/supabase.ts inventory_product_batches_v2 Row: lot_number, tissue_id, hcpcs_code, q_code, quantity …). A per-unit UIN exists only on the legacy amniotic_inventory_items / biologics_inventory_items tables and legacy pages. inventory_product_catalog_v2 does carry a product-level uin column (one value per catalog product, not per unit); ActiveProducts.tsx:339 and UsedProducts.tsx:152 read it but never render it (UsedProducts.tsx:219 formatUIN is never called).
  - Proposed: Each received lot is stored as an inventory record with its lot number, expiration date and quantity; amniotic and biologic receipts also carry a tissue ID, size and HCPCS/Q code.
- **inv-ov-02** — live: “The UIN travels with the item and is scanned in the Procedures & Supplies section of the Visit Wizard to link the unit to a clinical encounter.”
  - Product: Procedures & Supplies has a free-text "Box UID/UIN" input (ProcedureSuppliesVisit.tsx:5346-5363, placeholder "Enter Box UID/UIN") with no scan control and no lookup against inventory. Units are picked from stock in the Conservative Care & Interventions section's lot picker (ConservativeCareInterventionVisit.tsx), and deducted when sections are saved (VisitWizardV4.tsx updateInventoryBatchStatuses).
  - Proposed: Stock is picked by lot in the Visit Wizard's Conservative Care & Interventions section. For a graft, Procedures & Supplies also records the Box UID/UIN typed from the package.
- **inv-ov-03** — live: “When stock falls to or below the PAR level, the system surfaces a replenishment alert so a vendor_coordinator or admin can reorder before a stockout occurs.”
  - Product: The Active Inventory "Low Stock" tile is always 0: ActiveProducts.tsx:410 sets lowStock: 0 and nothing computes it. nightly-par-check reads legacy ${category}_par_levels tables (nightly-par-check/index.ts:68-70) and no cron or workflow schedules it. A PAR level can be entered on the product (AddEditProduct.tsx par_level), but no live alert fires from it.
  - Proposed: You can record a PAR level on a product. Medipyxis does not yet raise a replenishment alert when stock falls to it.
- **inv-ov-06** — live: “Biologics / Matrix tile: receiving with HCPCS + manufacturer lot-format validation.”
  - Product: Receiving requires an HCPCS/Q code for amniotic and biologics (ManualReceiveModal.tsx:402) but does not validate the lot's format. The catalog's Lot No. Suffix only makes a lot number required on bulk upload (BulkUploadOrderModal.tsx:1158-1183). The '-' + three digits format is enforced on the catalog suffix itself (AddEditProduct.tsx:159-166), not on received lots.
  - Proposed: Biologics / Matrix — receiving and management for biologic matrix products; each received unit needs an HCPCS/Q code, tissue ID, size, lot number and expiration date.
- **inv-ov-09** — live: “Clinician Inventory View tile: a read-only, role-filtered view of what's available at a clinician's facility, without cost or AP data.”
  - Product: The tile opens ProviderInventoryView ("My Inventory" / "Provider Inventory" for admins), the provider's own assigned stock. It is not read-only: it has New Product Request, Request More Inventory, and a Received button to accept transferred items (ProviderInventoryView.tsx:700, 900, 980-990). It shows no cost data.
  - Proposed: Clinician Inventory View — a clinician's own assigned stock ("My Inventory"), without cost data. Clinicians accept transferred items with Received and can request more inventory.
- **inv-ov-11** — live: “Main Inventory tile: the facility's stock and fulfillment view for what is physically on hand.”
  - Product: The Main Inventory tile is described as "Clinician Fulfillment Request queue for triage, ordering, and stock-based fulfillment" and links to /inventory/reorder-requests (InventoryManagement.tsx main-inventory-fulfillment card). On-hand stock is on each category tile's Active Inventory tab.
  - Proposed: Main Inventory — the clinician fulfillment request queue for triage, ordering, and stock-based fulfillment. On-hand stock is on each category tile's Active Inventory tab.
- **inv-ov-13** — live: “FDA HCT/P Recall Lookup is a lookup tool, not a hub tile, for checking received tissue products against FDA recall data.”
  - Product: Recall Lookup does not read any FDA recall data. You type a lot number from a recall notice and it lists every application of that lot at your facilities (inventory-recall-lookup/index.ts:81 .eq("lot_number", lotNumber)). It is not a hub tile and nothing in the app links to it; it is reached only at /inventory-management/recall-lookup.
  - Proposed: FDA HCT/P Recall Lookup — a lookup tool, not a hub tile, at /inventory-management/recall-lookup. Enter the lot number from a recall notice to find every patient who received product from that lot.
- **inv-ov-16** — live: “A shipment is received through the appropriate category tile (Amniotic / Advance Treatment, Biologics / Matrix, Conservative Care Products, PRP, or Ultrasonic Mist), generating a UIN for each unit.”
  - Product: Receiving through the five category tiles is live, but it does not generate UINs (see inv-ov-01).
  - Proposed: A shipment is received through the appropriate category tile (Amniotic / Advance Treatment, Biologics / Matrix, Conservative Care Products, PRP, or Ultrasonic Mist), creating inventory records with lot and expiration.
- **inv-ov-18** — live: “Received units appear in inventory and become selectable in the Visit Wizard's Procedures & Supplies section.”
  - Product: Procedures & Supplies does not read inventory. Received stock is selected in the Conservative Care & Interventions section (ConservativeCareInterventionVisit.tsx:718-745 reads inventory_product_batches_v2 and patient allocations).
  - Proposed: Received units appear in inventory and become selectable in the Visit Wizard's Conservative Care & Interventions section.

## Financial Performance section reference — 9

https://help.medipyxis.com/modules/oversight-cockpit/financial-performance/

- **ocf-01** — live: “Financial performance in the Oversight Cockpit is shown as Revenue by Zip — a geographic view of insurance payments received, so you can see where your revenue is concentrated. Select Revenue by Zip in the heat map's metric selector.”
  - Product: The view is Billed by zip and plots dollars billed on sent claims (heatMapDataService.ts frontend/src/services/heatMapDataService.ts:47); the page says payments received are not shown (frontend/src/pages/oversight/HeatMapOversightPage.tsx:491).
  - Proposed: Financial performance in the Oversight Cockpit is the Billed by zip view of the Heat Map: dollars billed on claims sent to payers, grouped by the patient's ZIP code. It does not show payments received. Open the Heat Map tile and select Billed by zip in the Metric selector.
- **ocf-02** — live: “Image caption: Revenue by Zip. Each ZIP code is drawn as a bubble; size and color scale with dollars received.”
  - Product: Bubbles scale with dollars billed (frontend/src/services/heatMapDataService.ts:279), labelled Billed by zip.
  - Proposed: Each bubble is one ZIP code. Size and color scale with the dollars billed there in the selected period, from small green (low billed zip) to large red (top billed zip).
- **ocf-03** — live: “Each bubble represents one ZIP code, sized and colored (green → red) by the insurance payments received there over the selected period. Hover a bubble to see its detail.”
  - Product: Size/colour (green→red, frontend/src/pages/oversight/HeatMapOversightPage.tsx:222) scale with dollars billed, not payments received; detail opens in a click popup (frontend/src/pages/oversight/HeatMapOversightPage.tsx:139), not on hover.
  - Proposed: Each bubble is one ZIP code. Size and color scale with the dollars billed there in the selected period, from small green (low billed zip) to large red (top billed zip). Click a bubble to see its billed total, city, and how many patients and claims it covers.
- **ocf-04** — live: “Status strip — Dollars received: total insurance payments posted for the period.”
  - Product: The strip shows billed dollars (frontend/src/pages/oversight/HeatMapOversightPage.tsx:462).
  - Proposed: Status strip: billed (total dollars billed on the sent claims shown on the map), zips, patients (on those claims), sent claims (shown on the map).
- **ocf-06** — live: “Status strip — Claims: number of paid claims represented.”
  - Product: The count is of sent claims (frontend/src/pages/oversight/HeatMapOversightPage.tsx:476; a claim counts once it has a submission date).
  - Proposed: Status strip: billed (total dollars billed on the sent claims shown on the map), zips, patients (on those claims), sent claims (shown on the map). A claim counts as sent once it has a submission date. Cancelled claims are left out.
- **ocf-07** — live: “Status strip — Pending claims: claims not yet paid (excluded from the received total).”
  - Product: The strip shows "Not sent yet" — claims not yet sent to a payer (frontend/src/pages/oversight/HeatMapOversightPage.tsx:482).
  - Proposed: Not sent yet: dollars and number of claims not yet sent to a payer; they are not mapped; shown only when there are some.
- **ocf-08** — live: “Status strip — Ungeocoded: claims that couldn't be mapped because their address didn't resolve.”
  - Product: The label is "claims missing zip/coords" (frontend/src/pages/oversight/HeatMapOversightPage.tsx:498).
  - Proposed: claims missing zip/coords: sent claims whose patient has no ZIP code or map coordinates, so they could not be placed; shown only when there are some.
- **ocf-09** — live: “Use the date-range selector to scope the view: Last 30 days, 90 days, 180 days, this year, or year-to-date. The map and the status strip both update to the selected window.”
  - Product: Options are Last 30d, Last 90d, Last 180d, Last year (365 days) and YTD (frontend/src/pages/oversight/HeatMapOversightPage.tsx:285); the range filters by date of service.
  - Proposed: Use the date-range selector to scope the view by date of service: Last 30d, Last 90d (the default), Last 180d, Last year, or YTD. The map and the status strip both update to the selected window.
- **ocf-10** — live: “Note: Revenue by Zip reflects insurance payments received (ERA-posted). Pending claims and payments that haven't posted yet are not counted in the received total; they appear in the pending tally.”
  - Product: The view reads billed claims, not ERA postings; the strip says "Payments received are not shown: payment posting isn't connected yet." (frontend/src/pages/oversight/HeatMapOversightPage.tsx:491).
  - Proposed: Financial performance in the Oversight Cockpit is the Billed by zip view of the Heat Map: dollars billed on claims sent to payers, grouped by the patient's ZIP code. It does not show payments received. Open the Heat Map tile and select Billed by zip in the Metric selector. The strip also says "Payments received are not shown: payment posting isn't connected yet."

## Work with a practice detail record — 8

https://help.medipyxis.com/modules/crm/practice-detail/

- **lcrp-01** — live: “View and update a practice's profile, review engagement history, and log new activity directly from the practice detail panel.”
  - Product: The detail page has no way to edit the practice: the header Edit button was removed (frontend/src/pages/CrmPracticeDetail.tsx:228) and the More (⋯) toggle sets state that is never rendered. Edit lives on the practice card's menu in the CRM list (frontend/src/pages/Crm.tsx:544).
  - Proposed: View a practice's profile and contacts, review activity history, and log activity from the practice detail page. To edit the practice, use Edit on its card menu in the CRM list.
- **lcrp-02** — live: “Before you start: the practice must already exist in the CRM. Create it with + New Practice if it does not.”
  - Product: The CRM add button is an icon-only "+" titled "Add New Practice" (frontend/src/pages/Crm.tsx:1047).
  - Proposed: The practice must already exist in the CRM. If it does not, add it with the + (Add New Practice) button.
- **lcrp-03** — live: “Go to the CRM (click CRM in the sidebar), find the practice with the search bar or a tab, and click the practice name to open the detail panel.”
  - Product: The card's View button opens the detail page (frontend/src/pages/Crm.tsx:478); the practice name is plain text.
  - Proposed: Click CRM in the sidebar, find the practice with the search bar or a tab, and click View on its card to open its detail page.
- **lcrp-04** — live: “The practice detail panel has three tabs: Overview, Activity, Docs.”
  - Product: Skilled Nursing and Assisted Living practices also get Providers, Residents and Clinical Notes tabs (frontend/src/pages/CrmPracticeDetail.tsx:3131).
  - Proposed: Tabs: Overview (address, phone, email, fax, month-to-date spend, practice contact, Additional Contacts); Activity (calls, visits, voice notes, spend, notes; type filters; Archived filter); Docs (view, send, delete, upload). Providers, Residents and Clinical Notes show only for Skilled Nursing or Assisted Living Facilities.
- **lcrp-05** — live: “Overview: practice name, specialty, address, phone, fax, NPI, assigned BD rep, and all linked contacts.”
  - Product: The detail page shows name, specialty, address, phone, email, fax, month-to-date spend, practice contact and Additional Contacts; it does not show the NPI or the assigned BD rep (no practice.npi or assigned_user in frontend/src/pages/CrmPracticeDetail.tsx).
  - Proposed: Overview: address, phone, email, fax, month-to-date spend, the practice contact and Additional Contacts.
- **lcrp-08** — live: “Quick-add actions at the top of the detail panel: Log Call, New Visit, Add Spend, and Voice recording (the recording is attached to the activity).”
  - Product: The header buttons are Call, Visit and Note (frontend/src/pages/CrmPracticeDetail.tsx:602); there is no Add Spend or voice recording there.
  - Proposed: Call, Visit and Note buttons at the top log an interaction: Call opens the call form, Visit the visit form, Note a note. On a contact, phone, email and text buttons open your phone, email or messaging app.
- **lcrp-10** — live: “Click + Add Contact in the Overview tab; fill in First Name, Last Name, Role, Phone, and Email, then click Save Contact.”
  - Product: The button is Add next to Additional Contacts; the form has Full Name, Job Title, Phone, Email, Contact Type, Notes and Set as primary contact, and the button is Add Contact (frontend/src/pages/CrmPracticeDetail.tsx:4863).
  - Proposed: Click Add next to Additional Contacts; fill Full Name (required), Job Title, Phone, Email, Contact Type and Notes, tick Set as primary contact if needed, then Add Contact.
- **lcrp-11** — live: “Archive a practice: click the Actions menu (⋯ top-right of the detail panel) and select Archive.”
  - Product: The detail page has no Archive; its More toggle renders nothing. Archive is on the practice card's ⋮ menu in the CRM list (frontend/src/pages/Crm.tsx:576).
  - Proposed: In the CRM list, open the ⋮ menu on the practice card and choose Archive; archived practices move to the Archived tab and are left out of AI Route Suggestions. Restore from the Archived tab brings it back; history and contacts are kept.

## The Dashboard at a glance — 8

https://help.medipyxis.com/modules/dashboard/overview/

- **ldo-02** — live: “It summarizes the work waiting for you today and deep-links into every module.”
  - Product: The only today's-work panel (Action Items) was removed because it had no data source (frontend/src/pages/Dashboard.tsx:1415). The Dashboard links to some work areas (Your Work Cockpits, HR Self-Service, announcements, Knowledge Base), not every module.
  - Proposed: The Dashboard is the first screen after login; it greets you, links to main work areas, and gathers HR self-service, announcements, recent activity and reference material.
- **ldo-03** — live: “Welcome Back banner: shows your name, current facility, and an On Duty pill.”
  - Product: The banner shows your name, job title and role with an On Duty pill and a HIPAA label (frontend/src/pages/Dashboard.tsx:901); it does not show the facility.
  - Proposed: Welcome Back banner: your name, job title and role, an On Duty pill and a HIPAA badge.
- **ldo-04** — live: “The HIPAA badge next to your profile confirms your session is audit-logged.”
  - Product: HIPAA is a static label in the banner (frontend/src/pages/Dashboard.tsx:944), not next to the profile and not tied to any logging state. (Page access is logged app-wide by ActivityLoggerProvider, router.tsx, but the badge does not reflect it.)
  - Proposed: A HIPAA label appears in the Welcome Back banner.
- **ldo-05** — live: “Action tiles — dynamic cards for referrals needing review, visits scheduled today, denials needing appeal, and credentials expiring.”
  - Product: No such tiles exist; the Dashboard has no denial or referral-review cards, and the Action Items panel was removed (frontend/src/pages/Dashboard.tsx:1415).
  - Proposed: Your Work Cockpits: Patient Management, Clinical Workflow and Mileage & Expenses. HR Self-Service: Time Off Requests and My Credentials & Compliance. Electronic Prescribing Setup: set up DoseSpot e-prescribing and EPCS access.
- **ldo-07** — live: “Sidebar examples: a biller will not see Fleet Calendar, a BD rep will not see Billing Operations.”
  - Product: Sidebar items come from your organization's role settings, with built-in defaults only for some roles (frontend/src/contexts/FacilityContext.tsx:108); there is no built-in biller default, so these examples depend on configuration.
  - Proposed: Your organization's role settings decide which modules each role sees.
- **ldo-08** — live: “Top bar — Organization Selector, Quick Jump (⌘K), Notifications bell, Profile menu.”
  - Product: The top bar has Quick jump, notifications and the profile menu (frontend/src/components/AppShell.tsx:1596); there is no control called Organization Selector — facilities are switched from a Switch Facility menu grouped by organization (frontend/src/components/AppShell.tsx:1706).
  - Proposed: Top bar: Quick jump search (⌘K or Ctrl+K), the notifications bell, a Switch Facility menu, and your profile menu with Sign Out.
- **ldo-09** — live: “Tiles surface by urgency, not by module: a STAT referral from 20 minutes ago beats a routine visit scheduled for next week. Red border — SLA breach or today-blocker; yellow — due today; grey — informational / caught up.”
  - Product: There are no urgency-ordered tiles on the Dashboard (no SLA logic in Dashboard.tsx; Action Items removed at frontend/src/pages/Dashboard.tsx:1415).
  - Proposed: Remove this section.
- **ldo-10** — live: “Personalize: click the gear in any tile header to hide or pin it. Click Reset in the profile menu to restore defaults.”
  - Product: There is no tile gear, pin/hide, or Reset control (no "pinned" in Dashboard.tsx, no Reset in AppShell.tsx).
  - Proposed: Remove this section.

## Review provider routes and export reports — 8

https://help.medipyxis.com/modules/fleet-calendar/route-optimization/

- **lro-05** — live: “Open the Routes panel. Click Routes (top-right panel toggle).”
  - Product: Routes is a collapsed strip on the right-hand edge of the calendar body (frontend/src/pages/ops/FleetCalendarCanvas.tsx:1200), not a top-right toolbar control; the panel is hidden outside Day view.
  - Proposed: Open the Fleet Calendar in Day view. The routes panel is shown only in Day view. Click Routes on the right-hand edge of the calendar; the Route Information panel opens.
- **lro-07** — live: “Utilization: percentage of the working day used.”
  - Product: Utilization is booked minutes divided by a fixed 480 minutes (frontend/src/services/fleetCalendarService.ts:287), not the provider's own working day.
  - Proposed: Utilization is booked visit minutes as a percentage of an 8-hour day, shown with a bar.
- **lro-08** — live: “Stops are listed in scheduled-time order. The panel is read-only — reorder a day by changing individual appointment times on the calendar.”
  - Product: The panel lists providers, sorted by visit count then distance (frontend/src/pages/ops/FleetCalendarCanvas.tsx:1220), not stops. The route itself does follow scheduled time order (frontend/src/pages/ops/FleetCalendarCanvas.tsx:337).
  - Proposed: The route always follows the scheduled times; to change the order, change appointment times. Visits with no map location are counted on the card as left out of the distance. With no base address, Distance and Est. Drive show N/A.
- **lro-09** — live: “Click View Map. The Fleet Map opens, showing each provider's stops as numbered pins in scheduled order with the connecting route drawn between them.”
  - Product: The page is titled Route Map (frontend/src/pages/ops/FleetMapView.tsx:790), and View Map does not pass the calendar date, so it opens on today (frontend/src/pages/ops/FleetMapView.tsx:141). Numbered pins and drawn route are true.
  - Proposed: Click View Map. The Route Map opens on today's date; change the date there. It shows each provider's stops as numbered pins and draws the route between them.
- **lro-11** — live: “Open the Reports panel from the Fleet Calendar.”
  - Product: The control is labelled "Reports & Export" with a Show/Hide toggle above the calendar (frontend/src/components/calendar/FleetReportPanel.tsx:287).
  - Proposed: Click Reports & Export above the calendar (Show to expand).
- **lro-15** — live: “Troubleshooting: Stop missing from the map — appointment address not geocoded — open the appointment, verify the patient address, and save.”
  - Product: The visit location comes from the patient, or the facility for a resident (frontend/src/services/fleetCalendarService.ts:1420); Appointment Details has no address field to verify or save.
  - Proposed: Stop missing from the map: the patient has no map location; check the patient's address, or for a facility resident the facility's address.
- **lro-16** — live: “Troubleshooting: Distance / drive time blank — one or more stops lack a geocodable address — add complete addresses to the affected appointments.”
  - Product: Distance and Est. Drive show N/A when the clinician has no base (home) address (frontend/src/pages/ops/FleetCalendarCanvas.tsx:1147). A stop with no location is left out of the distance and counted on the card ("… has no map location"), not blanking it (frontend/src/pages/ops/FleetCalendarCanvas.tsx:1364).
  - Proposed: Distance / drive time N/A: no base address on file. An administrator adds the clinician's home address on their profile under HR & Compliance, picking it from the suggestions so the location is saved.
- **lro-17** — live: “Troubleshooting: Map does not load — browser pop-up or content blocker — allow content from your Medipyxis domain.”
  - Product: The map script loads from api.mapbox.com (frontend/src/pages/ops/FleetMapView.tsx:314); allowing the Medipyxis domain alone does not help.
  - Proposed: Map does not load: allow content from api.mapbox.com.

## Specialty catalog tiles — Amniotic, Biologics, and Conservative Care — 8

https://help.medipyxis.com/modules/inventory/amniotic-biologics-conservative/

- **inv-abc-02** — live: “On demo and production, the legacy category tables already hold zero rows.”
  - Product: A database row count, not a code fact; the code check runner cannot query demo or prod. Needs a count(*) against amniotic_inventory_items / biologics_inventory_items (and the conservative legacy table) on both projects.
- **inv-abc-04** — live: “Amniotic / Advance Treatment tile — active units listed with UIN, lot, tissue ID, and expiration date.”
  - Product: Active Inventory shows Lot #, Tissue ID, Exp Date, Size, HCPCS, SKU, Status — no UIN column (ActiveProducts.tsx:890-950).
  - Proposed: Amniotic / Advance Treatment tile — active units listed with lot, tissue ID, and expiration date.
- **inv-abc-07** — live: “Lot # is validated against the product's LOT SUFFIX in the Product Catalog.”
  - Product: No receiving path compares the lot to the suffix. A suffix only makes the lot required on bulk upload (BulkUploadOrderModal.tsx:1158-1183).
  - Proposed: Lot # — manufacturer lot number; required at receiving.
- **inv-abc-09** — live: “Each unit entered on the receiving form generates one UIN in Main Inventory; every unit entered through a receiving form generates exactly one UIN.”
  - Product: Receiving writes inventory_product_batches_v2 rows (with quantity) and no UIN; see inv-ov-01.
  - Proposed: Each line entered on the receiving form becomes an inventory record (lot, expiration, quantity) on the category's Active Inventory tab.
- **inv-abc-10** — live: “For biologics, HCPCS is mandatory: the receiving form will not accept a unit without a valid HCPCS code.”
  - Product: Receiving requires a non-empty HCPCS/Q code for Amniotic and Biologics (ManualReceiveModal.tsx:402; manual-receive.ts:381) but does not check its format or validity.
  - Proposed: For amniotic and biologics, the receiving form will not accept a unit without an HCPCS/Q code.
- **inv-abc-11** — live: “Manufacturer lot format is enforced: if the lot string does not match the LOT SUFFIX pattern, the system rejects the entry and displays a format hint.”
  - Product: No lot-format check at receiving (see inv-abc-07). The only format rule is on the catalog suffix itself: '-' plus three digits for Amniotic/Biologics (AddEditProduct.tsx:159-166).
  - Proposed: Remove, or: In the Product Catalog, an amniotic or biologic product's Lot No. Suffix must be '-' followed by three digits.
- **inv-abc-15** — live: “When on-hand quantity reaches the PAR level set in the catalog entry, the system surfaces a replenishment alert in the Main Inventory view.”
  - Product: ActiveProducts.tsx:410 hard-codes lowStock: 0; no live PAR alert (see inv-ov-03).
  - Proposed: You can record a PAR level in a product's catalog entry; Medipyxis does not yet alert when stock reaches it.
- **inv-abc-16** — live: “When a clinician selects a product in the Procedures & Supplies section of the Visit Wizard, they scan or enter the UIN to record which physical unit was applied.”
  - Product: Products are picked by lot in Conservative Care & Interventions (ConservativeCareInterventionVisit.tsx). Procedures & Supplies only has a free-text Box UID/UIN field for skin-substitute applications, not linked to inventory.
  - Proposed: Clinicians pick the lot in the Visit Wizard's Conservative Care & Interventions section; for a skin-substitute application, Procedures & Supplies also requires the Box UID/UIN from the package.

## Create a DME order — 8

https://help.medipyxis.com/modules/orders-dme/create-dme-order/

- **dme-cr-02** — live: “You must have prescribing authority or be creating the order on behalf of a supervising provider.”
  - Product: No prescribing-authority or supervising-provider check exists on the order path; the page is gated only by the Orders & DME feature (user-routes.tsx /patients/:patientId/orders). This is a policy statement, not product behaviour.
- **dme-cr-03** — live: “From the patient's chart open Orders & DME, or reach it from the Orders & DME section (section 12) of the Visit Wizard (the link carries the patient context automatically).”
  - Product: The chart has an Orders & DME tile (PatientOverviewPage.tsx:3571). The wizard step is badged "Step 11" (VisitWizardV4.tsx:18207) and embeds its own ordering panel (OrdersDMEVisit, :18233); it has no link to the Orders & DME page.
  - Proposed: From the patient's chart, click Orders & DME. During a visit you can also order from the Orders & DME step (Step 11) of the Visit Wizard, which works inside the wizard.
- **dme-cr-05** — live: “Fill the DME order form top to bottom: select the Patient (type name or DOB, autocomplete); select Equipment Category (HCPCS codes filter by it); choose the Item (HCPCS populates automatically); set Quantity and Units; enter Duration; add Clinical Justification with an ICD-10 picker; select the Ordering Provider (NPI populates from profile); select the Vendor and optional custom form; add Notes.”
  - Product: There is no fixed DME form with these fields. The flow is: New DME Order → "Select recipient for DME Order" (vendor first, :3750) → "Choose custom form" (:3857) → the chosen form. The patient is already set (page is per patient). The standard "Durable Medical Equipment Request" form (seed 20260924120000:162) has an Equipment checklist (Wheelchair, Walker, Hospital bed, ...), free-text "HCPCS code(s), if known", Quantity, "Length of need / start date", "Diagnosis / ICD-10 code(s)", "Ordering provider / credentials" and NPI. There is no equipment category, item picker, HCPCS auto-fill, units, or ICD-10 search; vendor forms vary.
  - Proposed: Click New DME Order, pick the vendor, then pick a form (the vendor's own, or the Medipyxis Durable Medical Equipment Request). Fill in the form: equipment, HCPCS codes if known, quantity, length of need, diagnosis / ICD-10 codes, and ordering provider and NPI.
- **dme-cr-06** — live: “Choose a supplier from the enabled-vendor list for DME. If the vendor has a custom order form, select it to capture vendor-specific fields.”
  - Product: The list is all of the clinic's enabled vendors plus home health agencies, not a DME-specific list (PatientOrdersDmePage.tsx:717-751).
  - Proposed: Choose the supplier from your clinic's enabled vendors. If it has its own order form, pick that form; otherwise use a Medipyxis standard form.
- **dme-cr-07** — live: “Save the order as a Draft, or Send Fax / Send Email to dispatch it to the vendor. On sending, the order moves to Submitted.”
  - Product: Send Fax records the order and sets Submitted (ensureOrderForSend :1265, recordFaxSend :1335; status written in ordersDmeService.ts:324). Send Email (handleSendVendorEmail, PatientOrdersDmePage.tsx:1371-1517) sends the email and shows a toast but never creates or updates the order — no status change. Product defect: emailed orders leave no Submitted record.
  - Proposed: Save the order as a draft, or click Send Fax to send it to the vendor; a faxed order moves to Submitted once the fax is accepted. Send Email emails the form but does not update the order's status.
- **dme-cr-09** — live: “When results or confirmations come back, use Upload Results on the order.”
  - Product: Upload Results shows only on Provisioned orders and only raises a toast "Upload results"; nothing is uploaded (PatientOrdersDmePage.tsx:1606-1617). Product defect.
  - Proposed: Uploading results to an order is not available yet.
- **dme-cr-11** — live: “DME orders for Medicare beneficiaries must include an ICD-10 code, duration of need, and ordering provider NPI; Duration is required for Medicare compliance.”
  - Product: Regulatory statement, not product behaviour; the product does not enforce it (the standard DME form fields are free text and no required-field check for Medicare exists on the order path).
- **dme-cr-12** — live: “Troubleshooting: 'HCPCS code not shown' — change the category, HCPCS codes are category-scoped; 'Submit button disabled' — check Patient, Equipment Category, Item, Quantity, Duration, and ICD-10.”
  - Product: No Equipment Category, category-scoped HCPCS list, or Item field exists on either order surface (PatientOrdersDmePage.tsx, OrdersDMEVisit.tsx). Submit is disabled only while submitting or saving (PatientOrdersDmePage.tsx:4140).
  - Proposed: Remove these two troubleshooting rows. Keep "Patient not found — add the patient via Referral Intake".

## Team Chat overview — 8

https://help.medipyxis.com/modules/team-chat/overview/

- **tco-02** — live: “Team Chat is separate from the patient-context Chat tab in Referral Intake.”
  - Product: Referral chats are Team Chat conversations (teamChatService.ts frontend/src/services/teamChatService.ts:990; ReferralChatWidget calls findOrCreateReferralConversation) and Team Chat's loadConversations does not filter them out.
  - Proposed: The Chat tab in a Referral Intake card is a conversation about that referral. It is a Team Chat conversation, so it also appears in Team Chat.
- **tco-05** — live: “Users tab: the facility roster — pick one or more people to start a direct or group conversation. Online presence is shown here.”
  - Product: The second tab is Team (frontend/src/components/teamChat/TeamChatSidebar.tsx:182); clicking a person starts a direct chat (one person). It filters Online/Offline.
  - Proposed: Team tab: the people at your facility. Search, filter by role and by Online or Offline, and sort A-Z. Click a person to start a direct chat.
- **tco-07** — live: “Recognition messages appear as Kudos threads.”
  - Product: Kudos is a badge on conversations linked to an HR announcement (ConversationCard.tsx frontend/src/components/teamChat/ConversationCard.tsx:76); there is no kudos chat type.
  - Proposed: A conversation linked to a visit, a claim or a referral shows a Visit, Billing or Referral badge. The discussion of an HR announcement shows a Kudos badge.
- **tco-08** — live: “Sending a message: click the conversation or team channel where you want to post.”
  - Product: Team Chat has direct conversations and group chats only; there are no team channels (no 'channel' in TeamChatSidebar.tsx or ConversationCard.tsx; TeamChat.tsx shows "Team discussions and direct messages only").
  - Proposed: Click the conversation where you want to post.
- **tco-10** — live: “@mention a colleague by typing @ followed by their name — they receive a notification badge in the app and, if configured, an email alert.”
  - Product: Team Chat has no @mentions (no 'mention' anywhere in components/teamChat); every participant gets an in-app notification (frontend/src/hooks/useTeamChatNotifications.ts:29).
  - Proposed: The other people in the conversation get an in-app notification ("New message from …", or "Urgent message from …") with an Open Chat link. Team Chat messages are text and emoji. You cannot attach files or @mention people.
- **tco-11** — live: “Attach a file by clicking the paperclip icon next to the message input. Supported types: PDF, images (PNG, JPG), and common document formats. Files are stored within Medipyxis.”
  - Product: Team Chat has no file attachments: no Paperclip icon and no file input in components/teamChat.
  - Proposed: Team Chat messages are text and emoji. You cannot attach files or @mention people.
- **tco-14** — live: “Starting a new conversation: click the + icon at the top of the Conversations tab, search for or select one or more teammates, type your first message and press Enter. The thread opens immediately and appears in both participants' Conversations lists.”
  - Product: New chats start from New Conversation or New Group Chat at the top of Team Chat (TeamChat.tsx frontend/src/pages/TeamChat.tsx:853) with a title and Create Conversation, or by clicking a person on the Team tab; there is no + icon in the sidebar.
  - Proposed: Click New Conversation (one person) or New Group Chat (several people) at the top of Team Chat. You can also click a person on the Team tab. Enter a title and pick the people, then click Create Conversation.
- **tco-15** — live: “The Chat tab inside a Referral Intake detail panel is scoped to that referral — messages there appear in the referral's audit history and are visible to anyone with access to that referral. Team Chat is a general-purpose messaging tool with no patient-record linkage.”
  - Product: Team Chat includes patient-linked conversations: the chart has a Team Chat tab (PatientOverviewPage.tsx frontend/src/pages/all-patients/patient-overview/PatientOverviewPage.tsx:4799) and referral chats are Team Chat conversations.
  - Proposed: The Chat tab in a Referral Intake card is a conversation about that referral. It is a Team Chat conversation, so it also appears in Team Chat. A patient's chart has its own Team Chat tab for conversations about that patient. It reminds you that "all messages are part of the patient record".

## Visit Wizard overview — 8

https://help.medipyxis.com/modules/visit-wizard-ehr/overview/

- **ov-07** — live: “Mark as Complete — finish each section with Mark as Complete. In the section navigator, completed sections are green with a checkmark, and sections that still need documentation or review are red.”
  - Product: There is no section navigator: each section's accordion header carries a status icon (StatusIcon, VisitWizardV4.tsx:11261-11301 at v1.1.345). Complete = green check; missing required items = red warning (validation re-runs on every change, :6063-6065); flagged for review = yellow warning; otherwise a grey circle. Sections needing review are yellow, not red, and untouched sections are grey.
  - Proposed: Mark as Complete — finish each section with Mark as Complete. Each section's header shows its status: a green checkmark when it is complete, a red warning when required items are missing, a yellow warning when it is flagged for review, and a grey circle otherwise.
- **ov-19** — live: “Section 2 is titled Patient Context / Demographics.”
  - Product: The section header reads 'Patient Context & Demographics' (VisitWizardV4.tsx:17043 at v1.1.345).
  - Proposed: Patient Context & Demographics
- **ov-20** — live: “Section 2 covers visit type, chief complaint, and insurance (read-only here — edit it on the Insurance tab).”
  - Product: Section 2 has Service Date, Place of Service, Clinician Provider, Supervising Provider, Supervision Method, Home Health Agency, Facility, Chief Complaint, Running HPI and view-only insurance (PatientDemographicsVisit.tsx:901-1612 at v1.1.345). There is no visit-type field. The insurance tooltips say 'Edit it on the patient's Billing & Auth page' (:1571, :1598, :1607); there is no Insurance tab.
  - Proposed: Date and place of service, clinician and supervising provider, facility, Chief Complaint and Running HPI, and insurance (view only here — edit it on the patient's Billing & Auth page).
- **ov-24** — live: “Section 5 Functional Status & ADLs: mobility, daily activities, fall risk.”
  - Product: The section has Current Mobility Level and the ADL assessment (WoundCaseFunctionalStatusVisit.tsx at v1.1.345); no fall-risk field exists anywhere in the visit wizard (no 'fall risk' or 'Morse' under frontend/src/components/visit-wizard or VisitWizardV4.tsx).
  - Proposed: Mobility level and activities of daily living (ADLs).
- **ov-27** — live: “Section 8 Previous Treatments: prior wound care, chronicity, medical necessity statement, supporting documents.”
  - Product: Previous Treatments records each prior treatment (name, Treatment Dates, Duration (weeks), Outcome, Source), the Medical Necessity Statement and Supporting Documents (PreviousTreatmentsVisit.tsx:1579-2404 at v1.1.345). There is no chronicity field; wound age is computed from the onset date only to seed the draft text (:519-529).
  - Proposed: Prior wound care (each treatment with dates, duration and outcome), the per-wound medical necessity statement, and supporting documents.
- **ov-29** — live: “Section 13 is titled Procedures & Supplies.”
  - Product: The Step 13 header reads 'Procedure Supplies' (VisitWizardV4.tsx:18355 at v1.1.345).
  - Proposed: Procedure Supplies
- **ov-36** — live: “Section 17 Provider Attestation covers attestation, E/M time, final review, progress note preview, and Sign & Lock.”
  - Product: Step 17 holds the attestation, NPI/title, Total E/M time and Complete Provider Attestation (ProviderAttestationVisit.tsx:644-818 at v1.1.345). The final review, note preview and Sign & Lock start from the Continue to Review button in the wizard footer, outside Step 17 (VisitWizardV4.tsx:19062-19086 inside WizardLayoutFooter; preview :16532; MultiWoundReviewModal :19187).
  - Proposed: Attestation and E/M time. Then Continue to Review, at the bottom of the wizard, runs the final review, shows the progress note preview, and opens Sign & Lock.
- **ov-37** — live: “Can I customize the charting? Not per practice. The Visit Wizard's sections, fields, and templates are the same for every organization.”
  - Product: One per-facility setting changes the wizard: when facility.captures_vitals_on_followup is false, Objective Assessment (Step 4) renders nothing on follow-up visits (VitalsAssessmentVisit.tsx:3935-3940, useFacilityConfig.ts:30 at v1.1.345). No screen sets it (the column is read only by useFacilityConfig), so a practice cannot change it itself.
  - Proposed: Not by your practice. There is no screen to change the Visit Wizard's sections, fields, or templates, and they are the same for every organization, with one exception: Medipyxis can turn off Objective Assessment on follow-up visits for a facility.

## Configure organization roles and permissions — 7

https://help.medipyxis.com/admin/role-config/

- **rc-f01** — live: “Configuration is per organization — you select the organization at the top of the screen.”
  - Product: Only Medipyxis staff get the organization picker (pages/administrator/OrgRoleConfigPage.tsx:226); an organization's own admins have their organization chosen for them.
  - Proposed: Settings are per organization. If you manage one organization, it is chosen for you; Medipyxis staff pick the organization from a list at the top.
- **rc-f02** — live: “Changes take effect on an affected user's next page load.”
  - Product: Not confirmed: the saved configuration is re-read when a user's facility loads, not on every page load (no refreshOrgRoleConfig call in frontend/src).
  - Proposed: (remove the sentence)
- **rc-f04** — live: “Seeded roles and primary functions: Admin — full organization access; Clinical manager — Fleet Calendar, Visit Wizard, Oversight Cockpit; Medical director — LCD Navigator™ audit and reporting; Clinician — Visit Wizard, patient records, orders; Referral coordinator — Referral Intake kanban and Fax Review Queue; BD rep — CRM, BD Dashboard, limited patient view; BD manager — CRM, BD Dashboard, Oversight Cockpit BD metrics; Finance (AP) — Billing (read), Inventory Accounts Payable; Vendor coordinator — Product Catalog and inventory; Biller — Claims, Denials, Payments, Charge Master.”
  - Product: What each role can open is set per organization by the matrix, not fixed in the product; there is no Visit Wizard feature and no read-only Billing feature (frontend/src/constants/features.ts).
  - Proposed: The matrix has one row for each of the ten roles. You cannot add or delete roles here. Row names (role with underscores shown as spaces) and the matching names on the user form: admin/Administrator, clinical manager/Clinical Manager, medical director/Medical Director, clinician/Clinician, referral coordinator/Referral Coordinator, bd rep/Business Development Representative, bd manager/Business Development Manager, finance ap/Finance/Accounts Payable, vendor coordinator/Vendor Coordinator, biller/Biller.
- **rc-f06** — live: “Feature permission matrix (typical defaults): Dashboard — all roles; Referral Intake; Patient Management; Visit Wizard / EHR; Fleet Calendar; Inventory; Orders & DME; Billing — biller, finance (AP), admin; CRM; Business Development; Oversight Cockpit; HR & Compliance; Administrator — admin; Team Chat — all roles.”
  - Product: There is no Dashboard, Visit Wizard / EHR, Billing or Administrator column; the 14 columns are listed in features.ts (Billing access is "Billing Operations"), and defaults are per organization.
  - Proposed: There are 14 feature columns: HR & Compliance, Business Development, CRM, Team Chat, Referral Intake, Patient Management, All Patients, Fleet Calendar, Inventory, Oversight Cockpit, Facilities, Orders & DME, Billing Operations, and More. Billing access is the Billing Operations column. More controls the Fax Center link. The Dashboard is not a column: everyone can open it.
- **rc-f07** — live: “Set a permission: Open Organization Role Config and select the organization from the dropdown at the top. Find the role row and feature column. Check or uncheck the box. Click Save. A confirmation toast appears.”
  - Product: Organization admins have no dropdown, and the button is Save Changes (pages/administrator/OrgRoleConfigPage.tsx:172).
  - Proposed: Tick or untick the box, click Save Changes; a "Role configuration saved successfully" message confirms it.
- **rc-f08** — live: “Creating and editing claim codes and claim status remains governed by the same role configuration.”
  - Product: Claim codes and Claim Status are governed by a separate server-side billing role list that excludes biller (functions/_shared/billingRoleGuard.ts:17), not by Organization Role Config.
  - Proposed: A biller cannot change claim codes or the Claim Status; a fix is being tracked for the Claim Status. Until then, ask an admin to set it.
- **rc-f09** — live: “Worked example: give referral coordinators visibility into Billing so they can see claim status without creating or editing claims — find the referral coordinator row and the Billing column, check the box, click Save.”
  - Product: There is no Billing column; the box is "Billing Operations" and grants the Billing Operations pages without a view-only limit.
  - Proposed: Worked example: find the referral coordinator row and the Billing Operations column, tick the box, click Save Changes; the Billing Operations link then appears in their sidebar.

## Security settings and HIPAA compliance — 7

https://help.medipyxis.com/admin/security-and-compliance/

- **sc-f02** — live: “The timeout is approximately 30 minutes for clinical roles.”
  - Product: The 30-minute timeout applies to every signed-in user, not only clinical roles (components/AppProvider.tsx:73).
  - Proposed: Medipyxis signs you out after 30 minutes without any activity. A warning appears one minute before; clicking, typing, touching the screen or scrolling resets the timer. This applies to every signed-in user and is not a per-user setting.
- **sc-f04** — live: “If your organization requires multi-factor authentication (MFA) or single sign-on (SSO), coordinate the setup with your Medipyxis implementation contact — these are configured at the account level rather than through a self-service toggle in the app.”
  - Product: Neither MFA nor SSO exists for signing in: there is no signInWithSSO or mfa.enroll call in frontend/src, and the 2FA setting is an unimplemented stub (pages/Settings.tsx:642). Sign-in is email and password only (utils/authStore.ts:804).
  - Proposed: People sign in with their email address and password. Two-factor sign-in and single sign-on (SSO) are not available for the Medipyxis app today.
- **sc-f05** — live: “Filter the log by user, date range, and activity type. Each entry records who did what, when, and against which record.”
  - Product: The log can be filtered by user, date range and action, but the target record is not a column of the log (no record_id in HRLogs.tsx).
  - Proposed: Filter by action (Login, Role Change, User Edit, File Upload…), by date range (Today, This Week, Last 7 Days, Last 30 Days, All Time), by user, or search.
- **sc-f06** — live: “Medipyxis's Activity Logs support this requirement. Log data is covered as protected health information under your BAA with Medipyxis, and is retained per HIPAA record-retention requirements.”
  - Product: Retention of the activity log is not defined anywhere in the product code; not confirmed.
  - Proposed: HIPAA requires audit controls that record activity in systems holding PHI (45 CFR §164.312(b)).
- **sc-t1** — live: “Summary: Automatic logoff — platform-enforced idle timeout (~30 min for clinical roles).”
  - Product: The timeout applies to all signed-in users.
  - Proposed: Automatic logoff — 30 minutes without activity, for every signed-in user.
- **sc-t2** — live: “Summary: Authentication (MFA/SSO) — configured at the account level with your Medipyxis contact.”
  - Product: MFA and SSO are not available (see sc-f04).
  - Proposed: Sign-in — email and password; two-factor sign-in and SSO are not available today.
- **sc-t3** — live: “Summary: Activity logs — HR & Compliance → Activity Logs; retained per HIPAA. Role-based access — Administrator → Organization Role Config.”
  - Product: The location is right; "retained per HIPAA" is not confirmed.
  - Proposed: Activity logs — HR & Compliance → Activity Logs. Role-based access — Administrator → Organization Role Config.

## Billing / RCM first hour — 7

https://help.medipyxis.com/getting-started/by-role/billing/

- **bl-f01** — live: “Before you start: Your admin has added you with a biller role. Clearinghouse credentials are configured (Billing Operations → Clearinghouse Config).”
  - Product: There is no Clearinghouse Config screen (no such string in frontend/src); Medipyxis runs the Stedi connection. Access is the Billing Operations feature.
  - Proposed: Your role can open Billing Operations; providers are enrolled through Payer Enrollment.
- **bl-04a** — live: “The billing loop: signed visit → unbilled queue (you audit) → submit to clearinghouse → clearinghouse response (accepted / rejected) → payer response → ERA posting → denials routed to Denial Management.”
  - Product: ERA denials are not routed to Denial Management: nothing calls the denial writer (no createDenial( in frontend/src) and the ERA import never writes denial records (utils/eraPosting.ts:44).
  - Proposed: Loop: Submit Claim sends to Stedi; acknowledgment accepted or rejected; ERA payment posts to the claim's ledger.
- **bl-05a** — live: “Click Billing → Work Queue in the sidebar.”
  - Product: Work Queue is not a sidebar item; it is a card on the Billing Operations page (BillingDashboard.tsx navigates to /billing/work-queue).
  - Proposed: Click Billing Operations in the sidebar, then the Work Queue card.
- **bl-f05** — live: “Procedure lines are auto-derived from documented procedures; drag to reorder.”
  - Product: No drag-to-reorder exists on the claim form (no onDragEnd in NewBillingSubmitPage.tsx).
  - Proposed: (remove "drag to reorder")
- **bl-f02** — live: “Matched lines auto-post and advance claims to Paid.”
  - Product: Matched lines post to the claim ledger (functions/_shared/stediEraImport.ts:486) but ERA posting does not change the claim status to Paid.
  - Proposed: ERAs arrive automatically from Stedi; no file upload or sync button; matched lines post to the ledger; posting does not change the claim status.
- **bl-f03** — live: “Open Denial Management. Denials are grouped by denial reason (CARC/RARC). For each denial, Medipyxis shows the original claim, the rule evaluation from submission, and a suggested next action (corrected claim, appeal, write-off). Take an action. Everything is timestamped and added to the claim's activity feed.”
  - Product: The Denials tab lists denials with reason, category, appeal status and deadline (pages/BillingDashboard.tsx:4794); there is no CARC grouping, rule evaluation or suggested next action.
  - Proposed: Denials tab: each denial carries a reason, appeal status and deadline; ERA denials are not added automatically yet (fix tracked).
- **bl-f04** — live: “Press ⌘K / Ctrl+K from anywhere. Type a patient name, claim number, or visit date. Medipyxis ranks billing-related matches at the top when you're in the Billing workspace.”
  - Product: Quick jump lists pages by name only (components/AppShell.tsx:1489); it does not search claims or patients.
  - Proposed: Claims tab: search and filter by status, payer, date of service and rendering provider; ⌘K jumps to pages by name and does not search claims.

## Graft vendor first hour — 7

https://help.medipyxis.com/getting-started/by-role/graft-vendor/

- **gv-old-01** — live: “The vendor portal is a dedicated app at /vendor, separate from the clinical app, and never shows PHI.”
  - Product: The portal is a section of the same app (router.tsx /vendor with VendorShell), and Use Events and invoice lines show the patient's initials and year of birth (pages/vendor/VendorUseEventsPage.tsx:202; pages/vendor/VendorInvoiceDetailPage.tsx:269).
  - Proposed: The vendor portal is the part of Medipyxis at /vendor, with its own menu; patients appear only as initials and year of birth.
- **gv-old-02** — live: “Go to https://app.medipyxis.com/vendor and sign in. You land on the vendor Home page.”
  - Product: There is no vendor sign-in page; everyone signs in at /login and a vendor account then lands on /vendor/home (utils/auth/postAuthDestination.ts:21).
  - Proposed: Sign in at https://app.medipyxis.com/login; there is no separate vendor sign-in page; a vendor account opens the vendor Home page.
- **gv-old-03** — live: “The portal navigation gives you Home, Orders, Use Events, Catalog, Invoices, and Clinics. Staff appears only if you're a vendor_admin.”
  - Product: The menu also has Shipments, Requests, Verifications, Consignment, Supply Radar, CRM, Messages and Documents, and admins also see API (components/app-shell/VendorShell.tsx:62).
  - Proposed: Menu: Home, Catalog, Shipments, Orders, Requests, Verifications, Use Events, Consignment, Supply Radar, Invoices, Clinics, CRM, Messages, Documents; Admins also see Staff and API.
- **gv-old-04** — live: “Add or edit any with New SKU.”
  - Product: The button is Add Product (pages/vendor/VendorCatalogPage.tsx:91).
  - Proposed: Catalog: Add Product, or click a row to edit it.
- **gv-old-05** — live: “You own your catalog directly — there is no practice approval step.”
  - Product: Pushed products arrive at the clinic as proposals the clinic must accept (functions/vendor-catalog-push/index.ts:3).
  - Proposed: Push to clinic offers products to a clinic; the clinic reviews and accepts new products before its staff can use them.
- **gv-old-06** — live: “It completes as Delivered once the clinic confirms receipt.”
  - Product: The vendor marks the order delivered from Order Detail (pages/vendor/VendorOrderDetailDrawer.tsx:143).
  - Proposed: Accept moves the order to the In Progress tab; enter the tracking number under Mark Shipped and click Ship; when it arrives, click Mark Delivered.
- **gv-old-07** — live: “Open Invoices. Create an invoice for a shipped order and submit it.”
  - Product: The New invoice form is not tied to an order (no order_id in VendorInvoiceComposer.tsx); you pick a clinic and enter the lines.
  - Proposed: Invoices: New invoice, pick the clinic, add line items, Send Invoice; the clinic approves, disputes or holds it on its accounts payable page.

## How Medipyxis validates ICD-10 diagnosis codes — 7

https://help.medipyxis.com/modules/billing/diagnosis-code-validation/

- **dx-01** — live: “Medipyxis checks every diagnosis code on a claim against the official CDC ICD-10-CM billable catalog for FY2026 — not against a pattern. That means a code either exists as a billable leaf in the catalog or it does not.”
  - Product: A loose ICD-10 shape check (SVC004C, looksLikeIcd10) runs first, on every code, whether or not the catalog loaded; only codes that pass it are tested for catalog membership (frontend/src/services/claimValidationService.ts:709-757). So the check is a pattern AND catalog membership, not catalog alone.
  - Proposed: Medipyxis checks every diagnosis code on a claim in two steps: a loose ICD-10 shape check, then membership in the CDC ICD-10-CM FY2026 billable catalog.
- **dx-07** — live: “Catalog unavailable → Blue disclosure: ICD-10 billable-code check unavailable. The catalog failed to load. The check is skipped, not spoofed — the panel says so.”
  - Product: The check is skipped and disclosed, but the text is 'ICD-10 billability check unavailable — diagnosis codes were not verified against the billable code set.' in small gray italic (text-gray-500 italic), not a blue disclosure (frontend/src/components/claims/ClaimValidationPanel.tsx:158-162).
  - Proposed: Catalog unavailable → a gray note under the panel heading: "ICD-10 billability check unavailable — diagnosis codes were not verified against the billable code set." The check is skipped, not spoofed.
- **dx-11** — live: “The same defect existed in EditAuthorizationModal, where the regex pushed rejections into errors instead of warnings. That path BLOCKED the save. Both surfaces now use the same catalog membership check, and both now warn rather than block.”
  - Product: EditAuthorizationModal now uses the catalog, but a code not in the catalog is still pushed to `errors` (frontend/src/components/EditAuthorizationModal.tsx:231-236), and handleSubmit returns early on any error (EditAuthorizationModal.tsx:245-250). The save is still BLOCKED, not warned. Only the false rejections of valid codes were fixed. The block is skipped when the catalog did not load.
  - Proposed: EditAuthorizationModal now uses the same catalog check, so valid codes like S81.812A are no longer rejected. A code that is not in the billable catalog still blocks the authorization save there (it is a warning only on the claim). If the catalog cannot load, the modal skips the check.
- **dx-15** — live: “It does not check payer-specific coverage. A billable ICD-10 leaf can still be denied under a payer's LCD/NCD. That is a separate check.”
  - Product: Describes what SVC004A does not do and payer behavior; the separate LCD check was not traced in this pass.
- **dx-16** — live: “It does not check the ICD-10 ↔ CPT pair. The diagnosis pointer on each procedure line is validated separately (see Coding Review drawer).”
  - Product: Pointer validation lives in Validate Claim (frontend/src/services/claimValidationService.ts:17-19 imports readDiagnosisPointers; :824-830 'Diagnosis Pointer' check) and is shown in the ClaimValidationPanel. CodingReviewDrawer.tsx has no pointer logic.
  - Proposed: It does not check the ICD-10 ↔ CPT pair. The diagnosis pointer on each procedure line is checked separately in the same validation panel.
- **dx-19** — live: “Blue disclosure "ICD-10 billable-code check unavailable" → The icd10-billable-codes edge function failed to return a complete catalog. Reload the page.”
  - Product: Same label error as dx-07: the panel says 'ICD-10 billability check unavailable — diagnosis codes were not verified against the billable code set.' (ClaimValidationPanel.tsx:158-162).
  - Proposed: Gray note "ICD-10 billability check unavailable" → the icd10-billable-codes edge function failed to return a complete catalog. Reload the page.
- **dx-20** — live: “EditAuthorizationModal used to block a save on a valid code → Old regex was in errors, not warnings. Fixed since 2026-08-25. If you still see a hard block, refresh the browser to pick up the latest client.”
  - Product: A hard block still happens by design for any code not in the catalog (EditAuthorizationModal.tsx:231-236, 245-250). Refreshing will not remove it; the fix only stopped valid codes being blocked.
  - Proposed: EditAuthorizationModal used to block valid codes like S81.812A → fixed: it now uses the catalog. It still blocks a code that is not in the billable catalog; choose a billable child code.

## AI Route Suggestions — 7

https://help.medipyxis.com/modules/business-development/ai-route-suggestions/

- **lai-01** — live: “The AI Route Suggestions widget proposes a set of practices worth visiting, prioritizing accounts most likely to yield referrals given current engagement patterns.”
  - Product: There is no likelihood model and no AI call (frontend/src/utils/intelligentRouting.ts:422): fixed rules pick declining-referral, new and high-ROI practices.
  - Proposed: The AI Route Suggestions panel on the Business Development dashboard proposes up to seven practices. Despite the name, it does not use an AI model: it applies fixed rules to referral counts, activity and 30-day ROI.
- **lai-03** — live: “A refresh reflects your latest logged activity almost immediately.”
  - Product: The rules read practice.last_activity_date (frontend/src/utils/intelligentRouting.ts:361), not bd_activities, and no code in v1.1.345 (frontend or backend/supabase) writes last_activity_date when a call or visit is saved. A database trigger predating repo history could exist; it was not inspected. Not confirmed — possible product defect (logging activity may never clear the New practice badge).
  - Proposed: Suggestions are kept for about 5 minutes; reload the page to recalculate them.
- **lai-04** — live: “The algorithm looks only at practices assigned to you.”
  - Product: Only for BD reps. An administrator sees all assigned practices, or those of the rep picked in the BD rep filter (frontend/src/pages/BdDashboard.tsx:2335).
  - Proposed: Suggestions draw from practices with a BD rep assigned: a BD rep sees their own practices, and an administrator sees all assigned practices or the rep picked in the BD rep filter.
- **lai-06** — live: “2 High ROI: practices with the highest 30-day ROI (relationship maintenance).”
  - Product: Only practices with a 30-day ROI above $5,000 qualify (frontend/src/utils/intelligentRouting.ts:362).
  - Proposed: 2 High ROI: practices with a 30-day ROI over $5,000, highest first.
- **lai-09** — live: “If you deny location, suggestions still work — they're ordered by ROI instead and no distance is shown.”
  - Product: Without location the list is returned unreordered, in category order (frontend/src/utils/intelligentRouting.ts:473); only the leftover fill is sorted by ROI.
  - Proposed: With location denied, suggestions are not reordered by distance and no distance is shown.
- **lai-14** — live: “With location denied, the "closest first" ordering isn't available and stops fall back to ROI order.”
  - Product: Same as lai-09: without location the list keeps category order (frontend/src/utils/intelligentRouting.ts:473).
  - Proposed: With location denied, the closest-first ordering is not available.
- **lai-15** — live: “Because suggestions are recomputed on demand (with a short cache), logging a call or visit and refreshing updates the mix right away — you don't have to wait for an overnight run.”
  - Product: No overnight run is true, but no code in v1.1.345 updates the inputs (practice.last_activity_date) when a call or visit is logged, and the rules do not read bd_activities (frontend/src/utils/intelligentRouting.ts:361). Not confirmed.
  - Proposed: Suggestions are worked out in the app when the dashboard loads and kept for about 5 minutes; there is no overnight run.

## Business Development overview — 7

https://help.medipyxis.com/modules/business-development/overview/

- **lbo-01** — live: “The Business Development dashboard centralizes your outreach activity, spend tracking, and AI-generated route suggestions in a single screen.”
  - Product: The dashboard is real, but the suggestions are not AI-generated: generateIntelligentRoute applies fixed rules in the browser (3 declining, 2 new, 2 high-ROI; frontend/src/utils/intelligentRouting.ts:466) and calls no model.
  - Proposed: The Business Development dashboard brings together outreach activity, spend tracking, today's route and route suggestions in a single screen.
- **lbo-05** — live: “Monthly Spend: summarizes marketing and entertainment spend for the current month. Links to the full spend log.”
  - Product: The tile is Monthly Spend Reports and opens spend reports with export to Excel (frontend/src/pages/BdDashboard.tsx:4238); it does not summarize the month itself.
  - Proposed: Monthly Spend Reports opens spend reports, which you can export to Excel. New Patients Queue shows how many new patients are waiting and opens the queue.
- **lbo-06** — live: “New Patients Queue: lists recently converted referrals attributed to your outreach.”
  - Product: The tile shows a count and opens the New Patients queue (frontend/src/pages/BdDashboard.tsx:4251); nothing attributes patients to the rep's outreach.
  - Proposed: New Patients Queue opens the queue of new patients.
- **lbo-07** — live: “Next Best Action: your daily outreach queue from a round-robin cycle across your practices — it shows progress as "X of Y practices contacted".”
  - Product: The round-robin is real, but the label reads "X of Y this cycle" (frontend/src/pages/BdDashboard.tsx:4318).
  - Proposed: Next Best Action: daily outreach suggestion from a round-robin cycle; shows progress as “X of Y this cycle”.
- **lbo-09** — live: “Quick-add: Log Call opens a phone call logging form — practice, contact, outcome, next steps.”
  - Product: Log Call Activity has Practice, Call Subject, Duration, Outcome and Call Notes (frontend/src/components/bd-dashboard/BdActivityModalsWithValidation.tsx:332); there is no contact or next-steps field.
  - Proposed: Log Call: practice, call subject, duration, outcome and call notes.
- **lbo-11** — live: “Quick-add: New Visit opens an in-person visit log form — date, practice, contact, visit notes.”
  - Product: The visit form has Practice, Visit Purpose, Duration, Outcome and Visit Notes (frontend/src/components/bd-dashboard/BdActivityModalsWithValidation.tsx:1162); no date or contact field — the visit is saved with the current time.
  - Proposed: New Visit: practice, visit purpose, duration, outcome and visit notes. The visit is logged with today's date.
- **lbo-13** — live: “A voice recording option lets you capture a call or visit by voice instead of typing; the recording is attached to the activity.”
  - Product: Record Voice Note saves its own activity of type "voice" on the chosen practice (frontend/src/components/LocalVoiceRecordingModal.tsx:659); it is not attached to a call or visit.
  - Proposed: Record Voice Note records a voice note for a practice you choose; it is saved as its own Voice Note activity on that practice.

## Import your practice data — 7

https://help.medipyxis.com/whats-new/practice-data-import/

- **wnp-08** — live: “Template list: 1 patient_import_template.csv (incl. prior_ehr_system, prior_ehr_mrn, duplicate_decision, force_distinct_patient, and consent_on_file plus 7 consent_* fields); 2 insurance_import_template.csv; 3 medications_import_template.csv; 4 allergies_import_template.csv; 5 conditions_import_template.csv — Comorbidities; 6 contacts_import_template.csv; 7 wounds_import_template.csv (produces wounds_import_results.csv with wound_uid); 9 visit_history_import_template.csv.”
  - Product: The Step 5 template is comorbidities_import_template.csv, not conditions_import_template.csv (ComorbiditiesImportModule.tsx). The other template names check out.
  - Proposed: 5. Conditions (comorbidities_import_template.csv — Comorbidities): medical history and conditions with ICD-10 codes linked to patient_uid.
- **wnp-09** — live: “8. Documents & Historical Wound Photos (documents_manifest.csv / wound_photos_manifest.csv + ZIP archive): Clinical PDFs/TIFFs (stored in patient-documents under imported-records/) and historical wound photos (stored in wound-images under historical/).”
  - Product: Step 8 takes documents_import_template.csv (one row per file, by file_name) plus the attached files, not a ZIP with documents_manifest.csv / wound_photos_manifest.csv; photos are JPEG, PNG or HEIC (no WebP) (DocumentsImportModule.tsx at v1.1.345).
  - Proposed: Step 8, Documents & Historical Wound Photos: list each file in documents_import_template.csv by file_name and attach the files. Documents (PDF, JPEG, PNG, TIFF) are stored in the private patient-documents bucket under imported-records/; historical wound photos (JPEG, PNG, HEIC) go to the private wound-images bucket under historical/ and never into live wound records.
- **wnp-16** — live: “FAQ (also JSON-LD): Nine categories in dependency order ... (8) Documents & Historical Wound Photos (ZIP archive + manifest CSV), and (9) Past Visits.”
  - Product: Step 8 takes documents_import_template.csv (one row per file, by file_name) plus the attached files, not a ZIP with documents_manifest.csv / wound_photos_manifest.csv; photos are JPEG, PNG or HEIC (no WebP) (DocumentsImportModule.tsx at v1.1.345).
  - Proposed: Step 8, Documents & Historical Wound Photos: list each file in documents_import_template.csv by file_name and attach the files. Documents (PDF, JPEG, PNG, TIFF) are stored in the private patient-documents bucket under imported-records/; historical wound photos (JPEG, PNG, HEIC) go to the private wound-images bucket under historical/ and never into live wound records.
- **wnp-20** — live: “FAQ: Upload a ZIP archive together with documents_manifest.csv or wound_photos_manifest.csv. Clinical PDFs and TIFFs go to the private patient-documents bucket under imported-records/ and are indexed in prior_ehr_record; historical wound photos (JPEG, PNG, WebP, HEIC) go to the private wound-images bucket under historical/.”
  - Product: Step 8 takes documents_import_template.csv (one row per file, by file_name) plus the attached files, not a ZIP with documents_manifest.csv / wound_photos_manifest.csv; photos are JPEG, PNG or HEIC (no WebP) (DocumentsImportModule.tsx at v1.1.345).
  - Proposed: Step 8, Documents & Historical Wound Photos: list each file in documents_import_template.csv by file_name and attach the files. Documents (PDF, JPEG, PNG, TIFF) are stored in the private patient-documents bucket under imported-records/; historical wound photos (JPEG, PNG, HEIC) go to the private wound-images bucket under historical/ and never into live wound records.
- **wnp-20b** — live: “The patient-documents and wound-images buckets are private.”
- **wnp-26** — live: “JSON-LD HowTo step 5: Upload conditions_import_template.csv (Comorbidities).”
  - Product: The template is comorbidities_import_template.csv.
  - Proposed: Upload comorbidities_import_template.csv (Comorbidities) linked by patient_uid with icd10_code, description, and status.
- **wnp-27** — live: “JSON-LD HowTo step 8: Upload a ZIP archive and manifest CSV (documents_manifest.csv or wound_photos_manifest.csv).”
  - Product: Step 8 takes documents_import_template.csv (one row per file, by file_name) plus the attached files, not a ZIP with documents_manifest.csv / wound_photos_manifest.csv; photos are JPEG, PNG or HEIC (no WebP) (DocumentsImportModule.tsx at v1.1.345).
  - Proposed: Step 8, Documents & Historical Wound Photos: list each file in documents_import_template.csv by file_name and attach the files. Documents (PDF, JPEG, PNG, TIFF) are stored in the private patient-documents bucket under imported-records/; historical wound photos (JPEG, PNG, HEIC) go to the private wound-images bucket under historical/ and never into live wound records.

## Facilities reference — 6

https://help.medipyxis.com/modules/facilities/overview/

- **lfac-03** — live: “Clicking the facility name opens the facility detail panel.”
  - Product: The name is plain text (frontend/src/pages/FacilityDashboard.tsx:919); details open from the View Details action in the row (frontend/src/pages/FacilityDashboard.tsx:1023).
  - Proposed: Click View Details in the row to see a facility's details.
- **lfac-04** — live: “CONTACT column: primary contact name and phone number for the facility. STATS column: active providers, total patients, and visits in the current month. ACTIONS: context menu (⋯) with Edit, Deactivate / Reactivate, View Users.”
  - Product: CONTACT shows phone, email or fax ("No contact" otherwise); STATS shows users, patients and inventory items (frontend/src/pages/FacilityDashboard.tsx:997); ACTIONS are row buttons (open page, view details, edit, deactivate/reactivate) with no View Users.
  - Proposed: Columns: FACILITY (name, NPI, address), CONTACT (phone, email, fax or No contact), STATS (users, patients, inventory items), STATUS (Active/Inactive), ACTIONS (open page, view details, edit, deactivate/reactivate).
- **lfac-07** — live: “Inactive: no new activity can be logged against it.”
  - Product: No write path checks facility status: no edge function in v1.1.345 rejects writes for an inactive facility (no FACILITY_INACTIVE or equivalent guard found). The verified effect is that the facility drops out of users' facility lists (frontend/src/contexts/FacilityContext.tsx:388).
  - Proposed: Inactive: the facility no longer appears in anyone's facility list; its data is kept.
- **lfac-08** — live: “Users assigned only to this facility lose login access until reassigned. Deactivating a facility immediately prevents any providers assigned exclusively to that facility from logging in.”
  - Product: Sign-in does not check facility status (no facility.active check in authStore.ts); only an inactive user profile blocks login (frontend/src/utils/authStore.ts:884). A user assigned only to an inactive facility can still sign in but has no facility to work in.
  - Proposed: Active: the facility appears in users' facility lists. Inactive: it no longer appears in anyone's facility list and its data is kept; a user assigned only to it has no facility to work in.
- **lfac-11** — live: “Click the Actions menu (⋯) in the row and select Deactivate. A confirmation dialog explains the downstream effects (users, scheduling, routing). Confirm.”
  - Product: Deactivate is a row button that acts at once, with no confirmation (frontend/src/pages/FacilityDashboard.tsx:480).
  - Proposed: Click Deactivate in the row's actions; there is no confirmation step. It moves to Deactivated Facilities. Reactivate from Deactivated Facilities.
- **lfac-13** — live: “Reassign affected users in HR & Compliance → Facility Users before deactivating.”
  - Product: Facility Users cannot change a user's facilities; it edits name, job title, phone and status (frontend/src/pages/FacilityUsersPage.tsx:1292). Facilities are assigned on the user's profile form (Facility Assignment, frontend/src/pages/HRNewUserPage.tsx:2567).
  - Proposed: Before you deactivate a facility, give anyone who works only there access to another facility (Facility Assignment on their user profile).

## Add a new employee — 6

https://help.medipyxis.com/modules/hr-compliance/new-employee/

- **lne-04** — live: “Fill in Basic Info: First Name, Last Name, Email, Phone; Job Title, Role, Manager; Status, Date of Birth, Onboarding Date; Preferred Language, Timezone; NPI (for providers).”
  - Product: All these fields exist, but there is no "Basic Info" section; they are spread over Personal Information, Role & Assignment, the provider section and Onboarding & Training (frontend/src/pages/HRNewUserPage.tsx:2093).
  - Proposed: Personal Information: First Name, Middle Initial, Last Name, Job Title, Gender, Email Address, Phone Number, Date of Birth, Preferred Language and Timezone. Email, phone and time zone are required.
- **lne-06** — live: “Choose the Role from the real role set: admin, clinical_manager, medical_director, clinician, referral_coordinator, bd_rep, bd_manager, finance_ap, or vendor_coordinator.”
  - Product: The Role list also offers Biller (frontend/src/pages/HRNewUserPage.tsx:2497), and it shows display names (Administrator, Clinical Manager, …), not codes.
  - Proposed: Role choices: Administrator, Clinical Manager, Medical Director, Clinician, Referral Coordinator, Business Development Representative, Business Development Manager, Finance/Accounts Payable, Vendor Coordinator, or Biller.
- **lne-11** — live: “Assign training in Education Bundle Management; education bundles are assigned there, not on the new-employee form.”
  - Product: Education Bundle Management is for patient education bundles (frontend/src/pages/HrCockpit.tsx:192). Staff training is assigned in Training Materials.
  - Proposed: The new employee appears in Facility Users for each assigned facility. Track licenses in the Credential Tracker and assign staff training in Training Materials.
- **lne-12** — live: “There is no automated pre-start welcome email — use the Welcome Call Completed toggle to record onboarding contact.”
  - Product: On create, Medipyxis sends a branded welcome email with a set-password link (frontend/src/pages/HRNewUserPage.tsx:1852); if it fails, the user is told to resend from Facility Users.
  - Proposed: Click Create User. The account is created with a role at each facility you assigned, and Medipyxis emails the new user a welcome message with a link to set their password. If the welcome email cannot be sent, Medipyxis says so after the user is created; use Resend welcome email on Facility Users.
- **lne-13** — live: “Troubleshooting: email already in use — the person already has an account at another facility — use Facility Users to add the existing user to this facility instead of creating a new record.”
  - Product: Facility Users has no add-to-facility action; it edits name, job title, phone and status (frontend/src/pages/FacilityUsersPage.tsx:1292). create stops with "A user with email … already exists."
  - Proposed: If the email already belongs to a user, Medipyxis stops with “A user with email … already exists.” Do not create a second account.
- **lne-15** — live: “Troubleshooting: provider fields don't appear — a non-clinical role is selected — Provider Details show only for clinical roles (clinician / medical_director).”
  - Product: Provider fields show for every role not on the non-clinical list (frontend/src/services/credentialedUserService.ts:41), so Administrator and Clinical Manager also get them.
  - Proposed: For Administrator, Clinical Manager, Medical Director and Clinician, provider fields appear; they are hidden for Referral Coordinator, Business Development, Finance/Accounts Payable, Vendor Coordinator and Biller roles.

## HR & Compliance overview — 6

https://help.medipyxis.com/modules/hr-compliance/overview/

- **lho-03** — live: “Announcements: post organization-wide or facility-level messages visible to all users on their dashboard.”
  - Product: The Dashboard has a View Announcements & Kudos card that links to Company Announcements (frontend/src/pages/Dashboard.tsx:1406); announcements are not shown on the dashboard. They are stored per facility (frontend/src/services/simpleHRService.ts:44); there is no organization-wide option.
  - Proposed: Announcements: view active and past announcements, search and filter them, and post new ones.
- **lho-05** — live: “Activity Logs: audit trail of user actions across modules — logins, edits, exports, and sign-offs.”
  - Product: HR Activity Logs filters on Login, Role Change, Policy Acknowledgment, Training Update, User Edit, Announcement Read and File Upload (frontend/src/pages/HRLogs.tsx:464); exports and sign-offs are not logged there.
  - Proposed: Activity Logs: the HR Activity Logs page lists HR events such as logins, role changes, policy acknowledgments, training updates, user edits, announcement reads and file uploads. Filter by action, date range and user.
- **lho-08** — live: “Facility Users: view and manage all users active at a specific facility — adjust roles, deactivate accounts, or reassign facilities.”
  - Product: Facility Users edits name, job title, phone and status (frontend/src/pages/FacilityUsersPage.tsx:1292) and can resend the welcome email; role is not editable there and there is no facility reassignment.
  - Proposed: Facility Users: see the users at this facility. Edit a user's name, job title, phone and status (for example Active or Inactive), or resend their welcome email.
- **lho-09** — live: “Pharmacy Management: configure the approved pharmacy list for medication orders and prescriptions.”
  - Product: The page manages pharmacy partners (add, contact details, e-prescribe flag) (frontend/src/pages/PharmacyManagement.tsx:167); there is no approved list that gates orders or prescriptions.
  - Proposed: Pharmacy Management: manage pharmacy partners — add a pharmacy, keep its contact details, and filter by whether e-prescribing is enabled.
- **lho-10** — live: “Education Bundle Management: create, assign, and track completion of training modules and required competency courses.”
  - Product: Education bundles are patient education material bundles (frontend/src/pages/HrCockpit.tsx:192), not staff training. Staff training, assignment and completion are in Training Materials (frontend/src/pages/HrCockpit.tsx:201).
  - Proposed: Education Bundle Management: create and manage bundles of patient education material for common clinical scenarios. These are for patients, not staff training.
- **lho-13** — live: “Clinicians see announcements and their own assigned education on the dashboard but do not open the module directly.”
  - Product: Clinicians do not get HR & Compliance by default (fallback list at frontend/src/contexts/FacilityContext.tsx:758; an organization can change it). The Dashboard links to Company Announcements and to Training Materials (frontend/src/pages/Dashboard.tsx:1555) but has no widget showing a user's assigned education.
  - Proposed: Unless your organization's role settings say otherwise, clinicians do not open HR & Compliance. From the Dashboard they can open Company Announcements and Training Materials.

## Prescribe with DoseSpot (e-prescribing) — 6

https://help.medipyxis.com/modules/visit-wizard-ehr/medication-dosespot/

- **rx-02** — live: “You prescribe from the Medication Management section (section 13) of the Visit Wizard.”
  - Product: The wizard section is titled "Current Medication" and badged "Step 14" (VisitWizardV4.tsx:18449, :18456); Step 13 is a different section. "Section 13" is only the storage column name (section_13_medication_management).
  - Proposed: You prescribe from the Current Medication step (Step 14) of the Visit Wizard.
- **rx-06** — live: “If credentials are missing or expired, click Configure / Set Up ePrescribing.”
  - Product: The card has no Configure button: the only button when setup is not active is "Set Up ePrescribing" (Dashboard.tsx:1348); "Configure" appears only in the card subtitle "Configure DoseSpot ePrescribing and EPCS access" (Dashboard.tsx:1232).
  - Proposed: If ePrescribing is not active yet, click Set Up ePrescribing.
- **rx-09** — live: “In the Visit Wizard, open Medication Management (section 13), then Launch DoseSpot to open the prescribing console for the current patient.”
  - Product: There is no "Launch DoseSpot" button. In the Current Medication step (Step 14) you pick DoseSpot as the Delivery Method and a provider clicks "Open DoseSpot" (MedicationManagementShared.tsx:3336, :4124); the server first links the current patient into DoseSpot and opens the console on that patient. Non-providers see "Prepare Order (Provider Required)".
  - Proposed: In the Visit Wizard, open Current Medication (Step 14), choose DoseSpot as the Delivery Method, and click Open DoseSpot (providers only) to open the prescribing console for the current patient.
- **rx-10** — live: “Search the medication, choose the pharmacy, set sig/quantity/refills, and send the prescription.”
  - Product: These steps happen inside DoseSpot's own console (a third-party page in an iframe); Medipyxis code does not render them, so they cannot be confirmed from the product source.
- **rx-13** — live: “Pre-charting stays in sync with the medication list too.”
  - Product: Nothing writes medications from pre-charting: the 'pre_charting' source exists only as a type value (types/medication.types.ts:5) and a display label (MedicationAuditTrail.tsx:40); the pre-charting tabs (EnhancedPrechartingTab.tsx, PrechartingTabContent.tsx) do not call the medication sync service. Medications entered in the wizard's Clinical History Review are synced (ClinicalHistoryReviewStep.tsx:203).
  - Proposed: Medications reconcile across the chart: what you enter in the wizard (Clinical History Review and Current Medication) and on the Meds & Orders page is one shared medication list.
- **rx-15** — live: “"eRx" throughout Medipyxis means DoseSpot.”
  - Product: A naming convention, not product behaviour. The code has renamed most "eRx" labels to "DoseSpot" (comments such as MedicationManagementShared.tsx:794 "was eRx"), so the term may not appear in the UI at all; it cannot be confirmed by a check.

## AR Aging and Reports Center reference — 5

https://help.medipyxis.com/modules/billing/ar-aging/

- **ara-01** — live: “Aging buckets measure the number of days elapsed since the date of service for unpaid claims.”
  - Product: The A/R Aging page measures age from the claim's submission date, not the date of service: arAgingService.ts:143-144 computes daysInAR from claim.submitted_at (calculateDaysInAR, arAgingService.ts:30-35), and only claims with status submitted, accepted or partial_payment are counted (arAgingService.ts:105). The Overview tab's A/R Aging Breakdown also ages from the submission date (BillingDashboard.tsx:448-454). Unsubmitted claims are not in any bucket.
  - Proposed: Aging buckets measure the number of days since the claim was submitted, for submitted claims (status Submitted, Accepted or partial payment) that still carry a balance.
- **ara-02** — live: “They appear in the Account Receivable report and related AR views.”
  - Product: The Account Receivable report in the Reports Center has no aging buckets; it lists claims with an "Aging Days" column (reportsCenterArReport.ts:16). The buckets appear on the A/R Aging page (ArAging.tsx:262-372, "Aging Bucket Breakdown") and in the "A/R Aging Breakdown" card on the Billing Operations Overview tab (BillingDashboard.tsx:3035).
  - Proposed: They appear on the A/R Aging page (Billing Operations → Quick Actions → A/R Aging) and in the A/R Aging Breakdown card on the Overview tab. The Account Receivable report in the Reports Center shows each claim's Aging Days instead of buckets.
- **ara-05** — live: “Typical priority per bucket: 0–30 Monitor — within standard payer processing time; 31–60 Review — follow up if no ERA received; 61–90 Escalate — contact payer; 91–120 High priority — approaching or past many timely-filing limits; 120+ Critical — verify timely-filing status before submitting; write-off review may be required.”
  - Product: Workflow advice, not product behavior: the A/R Aging page shows no priority labels per bucket (ArAging.tsx:262-372). Note that every claim in a bucket has already been submitted (arAgingService.ts:105), so "before submitting" does not apply to the 120+ bucket as written.
- **ara-07** — live: “The AR Aging view. Each column represents one aging bucket; rows break down the outstanding balance by payer.”
  - Product: The by-payer table ("Top Payers by Outstanding Balance", ArAging.tsx:375-470) has bucket columns Current, 31-60, 61-90 and "Over 90"; 91-120 and 120+ are merged into Over 90 (ArAging.tsx:406, 430-432). Only the Aging Bucket Breakdown table shows all five buckets, and it is not broken down by payer.
  - Proposed: The A/R Aging page. The Top Payers by Outstanding Balance table breaks the outstanding balance down by payer, with columns Current, 31-60, 61-90 and Over 90; the Aging Bucket Breakdown table above it shows all five buckets for the facility.
- **ara-10** — live: “Any claim in the 120+ bucket must be reviewed against the applicable payer contract before submission.”
  - Product: Workflow advice with no product check. As written it cannot apply: the 120+ bucket holds only claims that were already submitted 120+ days ago (arAgingService.ts:105, 143-146), so there is no "before submission" step for them.
  - Proposed: A claim in the 120+ bucket was submitted more than 120 days ago and is still unpaid. Before you resubmit or correct it, check its timely-filing window; the Coding Review drawer shows the days left to file.

## September 2026 release notes — 5

https://help.medipyxis.com/release-notes/2026-09/

- **rn09-01** — live: “★ Progress Notes — The note prints only what you documented. Where a field is blank the note says "Not documented."; where you wrote something, it prints exactly what you wrote. This affects allergies, debridement, pressure-injury prevention plans, same-day E/M, medical necessity, homebound justification, and patient education.”
  - Product: Partly false. Allergies, debridement detail and same-day E/M print 'Not documented.', but a blank homebound justification is left out of the note (perfectNoteRenderer.ts: `if (!fs.homebound_basis) return;`), a blank pressure-injury prevention plan is left out, and a fully blank education section prints 'Patient education not documented this visit.' (all at v1.1.345).
  - Proposed: ★ Progress Notes — The note prints only what you documented. Where you wrote something, it prints exactly what you wrote. A blank allergy row, debridement detail or same-day E/M justification prints "Not documented." A blank homebound justification or pressure-injury prevention plan is left out of the note, and a blank education section prints "Patient education not documented this visit."
- **rn09-02** — live: “★ Progress Notes — Three debridement rows removed. "Pathology sent", "Tissue present pre" and "Post-procedure dressing" no longer appear. No screen ever asked for them, so every debridement note was answering them on the patient's behalf.”
  - Product: Two rows were removed. 'Tissue present (pre-procedure)' still prints at v1.1.345, sourced from this visit's wound-bed assessment, and prints 'Not documented.' when unassessed (perfectNoteRenderer.ts, s09_debridement.ts).
  - Proposed: ★ Progress Notes — Two debridement rows removed. "Pathology sent" and "Post-procedure dressing" no longer appear. "Tissue present (pre-procedure)" now comes from this visit's wound-bed assessment and prints "Not documented." when the wound bed was not assessed.
- **rn09-03b** — live: “The two verified wound-care policies remain.”
  - Product: The citation table holds six verified per-contractor references (debridement for Novitas, WPS, CGS; skin substitutes for Novitas, First Coast, CGS), not two (lcdReferences.ts at v1.1.345).
  - Proposed: Citations now come from a checked table: debridement for Novitas, WPS and CGS, and skin substitutes for Novitas, First Coast and CGS. For any other contractor, no citation prints.
- **rn09-09** — live: “Your answer prints with a label showing whether you typed it, dictated it, or adapted an example.”
  - Product: Provenance labels have no dictation label; a dictated answer prints with the same label as a typed one (services/perfectNote/provenanceLabels.ts at v1.1.345).
  - Proposed: Your answer prints with a label showing whether you wrote it or adapted an example.
- **rn09-13** — live: “Check Admin → About for your current app version.”
  - Product: No Admin → About screen exists. The app version shows in the always-visible build-version badge (BuildVersionBadge.tsx, bottom-left).
  - Proposed: Your current app version is shown in the build-version badge at the bottom left of the screen.

## Respond to clinic requests — 5

https://help.medipyxis.com/vendor-portal/respond-to-requests/

- **vpq-11** — live: “Their receiving team can now expect the box, and the same shipment will pre-stage in their receiving queue when it arrives.”
  - Product: Shipments created from a request have origin 'portal_request', which the clinic check-in list does not include (useClinicVendorReceiving.ts at v1.1.345), so they do not appear in the clinic's check-in panel.
  - Proposed: (Remove.)
- **vpq-17** — live: “Enter carrier, tracking number, and any lot detail on the shipment record (linked from the request).”
  - Product: The request has no link to a shipment record and Ship takes no tracking input (VendorRequestsPage.tsx).
  - Proposed: Ship does not ask for a carrier or tracking number.
- **vpq-18** — live: “Click Decline with a short reason if you cannot fulfill.”
  - Product: Decline has no reason field (VendorRequestsPage.tsx).
  - Proposed: Click Decline if you cannot fulfill. Decline does not ask for a reason.
- **vpq-19** — live: “Watch the clinic-side status column update on your next refresh. The Home page also aggregates open requests, so the queue drains as you work.”
  - Product: The vendor Home page does not load requests (no useVendorProviderRequests in VendorHomePage.tsx).
  - Proposed: Click Refresh to see status changes.
- **vpq-24** — live: “When the product is consumed at the clinic, the resulting Use Event joins the shipment lot to the patient (initials + birth year only) and eventually drives the auto-drafted invoice on your terms.”
  - Product: Auto-drafted invoices are not produced at v1.1.345: the job runs at 06:10 UTC but only drafts between 02:00 and 02:59 UTC (see live-vendor-portal-invoices-and-payment.json vpi-04).
  - Proposed: When the product is used at the clinic, the Use Event shows the patient's initials and year of birth.

## Look up FDA HCT/P recalls — 4

https://help.medipyxis.com/modules/inventory/recall-lookup/

- **inv-rc-02** — live: “Open Recall Lookup from Inventory Management.”
  - Product: No hub tile or link: nothing outside the route table references /inventory-management/recall-lookup. Reach it by URL only.
  - Proposed: Open Recall Lookup at /inventory-management/recall-lookup (there is no menu link).
- **inv-rc-03** — live: “You need the vendor_coordinator or admin role.”
  - Product: Allowed roles are INVENTORY_ACCESS (admin, vendor_coordinator, clinical_manager, medical_director, clinician, provider) plus biller, finance_ap, superadmin, customersupport (inventory-recall-lookup/index.ts:41-47; _shared/auth-helpers.ts:307). Results are limited to the caller's facilities.
  - Proposed: Anyone with the Inventory feature can run a recall lookup; results cover only your facilities.
- **inv-rc-04** — live: “You can look up by the lot number (or distinct identification code) named in the recall notice.”
  - Product: The search matches lot_number only (inventory-recall-lookup/index.ts:81). The distinct identification code is returned in the CSV but cannot be searched.
  - Proposed: Enter the lot number named in the recall notice.
- **inv-rc-05** — live: “The results table lists every application of the lot with patient (name, MRN, DOB), clinician, visit date, application timestamp, quantity, wound case, HCPCS / Q-code, size, tissue ID, distinct identification code, and batch expiration.”
  - Product: The on-screen table shows Patient, MRN, DOB, Visit Date, Clinician, Wound Case, HCPCS, Size. Quantity, Q Code, Tissue ID, Distinct ID Code, Batch Expiration and Application Timestamp are only in the CSV export (Inv_RecallLookup.tsx buildCsvContent).
  - Proposed: The results table shows patient, MRN, DOB, visit date, clinician, wound case, HCPCS and size. The CSV export adds quantity, Q code, tissue ID, distinct identification code, batch expiration and application timestamp.

## Oversight Cockpit overview — 4

https://help.medipyxis.com/modules/oversight-cockpit/overview/

- **oco-02** — live: “It is a geographic heat map: it plots your operation on a map so you can see where patients and clinicians are, and where revenue is coming from.”
  - Product: The Oversight Cockpit sidebar item opens the Analytics & Tools Cockpit, a page of six tiles (Analytics.tsx frontend/src/pages/Analytics.tsx:124); Heat Map is one tile (frontend/src/pages/Analytics.tsx:23). Its money view plots dollars billed, not revenue received.
  - Proposed: The Oversight Cockpit item in the sidebar opens the Analytics & Tools Cockpit, a page of tiles for administrators and managers. Access is gated by the Oversight Cockpit feature permission. Heat Map tile: your patients, clinicians and billing on a map. Operations KPIs: patients per day, billing per provider, cancelled and rescheduled visits, referral sources, and CPT / procedure codes, for a date range you choose. Users who can see every facility can switch the page to All facilities. Referral Network Health: referral patterns, conversion rates and network performance, for This Week, This Month or This Quarter. Download data: referrals received in a date range, with every visit and wound assessment for those patients, as one Excel file. A Read Me tab defines every column and status.
- **oco-03** — live: “Open it from the Analytics menu; the map lives at /oversight/heat-map.”
  - Product: There is no Analytics menu; the sidebar item is Oversight Cockpit (navigation.ts frontend/src/constants/navigation.ts:117, path /analytics). The map route /oversight/heat-map is correct (frontend/src/user-routes.tsx:469).
  - Proposed: Click Oversight Cockpit in the sidebar, then the Heat Map tile (the map lives at /oversight/heat-map).
- **oco-09** — live: “Revenue by Zip: insurance payments received, aggregated by ZIP code and drawn as color- and size-scaled bubbles.”
  - Product: The view is labelled Billed by zip (frontend/src/services/heatMapDataService.ts:46) and plots dollars billed on claims sent to payers; the page states payments received are not shown (frontend/src/pages/oversight/HeatMapOversightPage.tsx:491).
  - Proposed: Billed by zip: dollars billed on claims sent to payers, grouped by the patient's ZIP code and drawn as bubbles.
- **oco-11** — live: “The Revenue by Zip view includes a date-range selector — Last 30 days, 90 days, 180 days, this year, or year-to-date — so you can compare recent revenue geography against a longer window.”
  - Product: The selector is on the Billed by zip view and its options are Last 30d, Last 90d (default), Last 180d, Last year (365 days, not this calendar year) and YTD (frontend/src/pages/oversight/HeatMapOversightPage.tsx:285).
  - Proposed: The Billed by zip view has a date-range selector: Last 30d, Last 90d (the default), Last 180d, Last year, and YTD.

## Review the Fax Review Queue — 4

https://help.medipyxis.com/modules/referral-intake/fax-queue-review/

- **ri-fq-01** — live: “Open it from the Fax Review Queue item in the sidebar, or click Fax Queue on the Patient Intake board header. It is not a kanban column.”
  - Product: No Fax Review Queue item in the live sidebar (frontend/src/components/AppShell.tsx:629-756). It is reached from the board's Fax Queue button (Referrals.tsx:3313), the Fax Review Queue tile under Fax Center (MorePage.tsx:134; AppShell.tsx:751) or ⌘K "Fax review queue" (AppShell.tsx:815).
  - Proposed: Open it with Fax Queue on the Patient Intake board header, from the Fax Review Queue tile under Fax Center in the sidebar, or with ⌘K "fax review queue". It is not a kanban column.
- **ri-fq-04** — live: “Document Type shows the classified document type.”
  - Product: The Document Type cell shows the fax's subject line, or "Fax Document" when there is none (frontend/src/components/idp/FaxReviewQueue.tsx:695). It does not show a classified document type.
  - Proposed: Document Type: the fax's subject line, or "Fax Document" when the fax has no subject.
- **ri-fq-06** — live: “Status values (column and filter) are Pending, Processing, Ready for Review, Approved, Auto Created, Rejected, and Failed.”
  - Product: The filter uses these labels, but the Status column prints the raw value with only the first underscore replaced (frontend/src/components/idp/FaxReviewQueue.tsx:713, String.replace with a string pattern). Rows read "pending", "auto created", and "ready for_review" — a display defect.
  - Proposed: Use the Status filter to narrow the list: Pending, Processing, Ready for Review, Approved, Auto Created, Rejected, or Failed. (Fix the Status column first or describe it as showing the stored status in lower case.)
- **ri-fq-10** — live: “Click a row to open the fax.”
  - Product: Rows have a pointer cursor but no click handler (frontend/src/components/idp/FaxReviewQueue.tsx:657-660). The fax opens from the View button in the Actions column (:740-755, handleViewDetails at :343). View is disabled while the row is Processing.
  - Proposed: Click View in the row's Actions column to open the fax. (View is unavailable while the fax is Processing.)

## APRN as a signature credential — 4

https://help.medipyxis.com/modules/visit-wizard-ehr/aprn-credential/

- **aprn-06** — live: “States where the board issues the NP credential as APRN include Oklahoma, Texas, Georgia, Illinois, and others.”
  - Product: External licensing fact about state boards; not product behavior and not checkable from code.
- **aprn-08** — live: “The credential is picked per visit in step 17 (Provider Attestation), not from your profile; a profile default would keep being overwritten.”
  - Product: Step 17 pre-fills the credential from the provider record (provider_credentials, else job_title) when it maps to a recognised code (ProviderAttestationVisit.tsx:173 and :410 at v1.1.345); you can change it per visit.
  - Proposed: Step 17 fills the credential from your provider record when it holds a recognised code. You can change it for the visit in the Professional Title dropdown.
- **aprn-10** — live: “In step 17, open the Credential dropdown.”
  - Product: The dropdown is labelled "Professional Title *" with placeholder "Select credentials" (ProviderAttestationVisit.tsx:669, 678 at v1.1.345).
  - Proposed: In step 17, open the Professional Title dropdown.
- **aprn-12** — live: “The credential also lands on the CMS-1500 and the 837P submission when the visit becomes a claim.”
  - Product: Neither claim path reads the attestation credential: CMS-1500 Box 31 prints only renderingProviderName (cms1500PdfService.ts:826 at v1.1.345) and the 837P name splitter strips trailing credentials (_shared/nameSplit.ts:91).
  - Proposed: The credential prints on the progress note. Claims (CMS-1500 and 837P) carry the provider's name and NPI, not the credential.

## Note honesty guardrails — 4

https://help.medipyxis.com/modules/visit-wizard-ehr/note-honesty-guardrails/

- **nhl-01** — live: “Your progress note prints only what you documented in the Visit Wizard. Where you did not enter a value, the note says so. It does not fill in clinical details for you.”
  - Product: Pull Codes suggests type-specific ICD-10 codes when the type or stage was left blank: Type 2 diabetes for a foot or leg wound (comorbidityMappingService.ts frontend/src/services/comorbidityMappingService.ts:52), moderate protein-calorie malnutrition (frontend/src/services/comorbidityMappingService.ts:158) and end-stage renal disease (frontend/src/services/comorbidityMappingService.ts:187). A kept code prints in the note's diagnosis table (frontend/src/services/perfectNote/perfectNoteRenderer.ts:616).
  - Proposed: This page covers two places where the progress note used to fill in clinical details you had not entered: the post-debridement wound area, and the type or stage of a condition. In both places the note now prints only what you documented. One gap remains, in the note's diagnosis codes.
- **nhl-08** — live: “When you leave it blank, the diagnosis-code validation drawer flags the matching ICD-10 gap so the coder is not left guessing.”
  - Product: No check reads the documented diabetes type, kidney disease stage or malnutrition type: claimValidationService.ts, components/claims, documentationAssist and gapGates.ts never reference diabetes_type / kidney_disease_type / malnutrition_type; the validator only tests whether a code is billable.
  - Proposed: Medipyxis does not currently flag a missing diabetes type, kidney disease stage, or malnutrition type. Check the diagnosis codes before you sign: codes suggested by Pull Codes can still be type-specific when you left the type blank.
- **nhl-09** — live: “One rule covers these cases: the printed note states a clinical fact only when you entered it.”
  - Product: Pull Codes suggests type-specific ICD-10 codes when the type or stage was left blank: Type 2 diabetes for a foot or leg wound (comorbidityMappingService.ts frontend/src/services/comorbidityMappingService.ts:52), moderate protein-calorie malnutrition (frontend/src/services/comorbidityMappingService.ts:158) and end-stage renal disease (frontend/src/services/comorbidityMappingService.ts:187). A kept code prints in the note's diagnosis table (frontend/src/services/perfectNote/perfectNoteRenderer.ts:616).
  - Proposed: In the two places this page covers, the printed note states a clinical fact only when you entered it. Diagnosis codes you keep from Pull Codes are the exception.
- **nhl-11** — live: “Condition types and stages — printed only when you documented them.”
  - Product: Pull Codes suggests type-specific ICD-10 codes when the type or stage was left blank: Type 2 diabetes for a foot or leg wound (comorbidityMappingService.ts frontend/src/services/comorbidityMappingService.ts:52), moderate protein-calorie malnutrition (frontend/src/services/comorbidityMappingService.ts:158) and end-stage renal disease (frontend/src/services/comorbidityMappingService.ts:187). A kept code prints in the note's diagnosis table (frontend/src/services/perfectNote/perfectNoteRenderer.ts:616).
  - Proposed: Condition types and stages in the comorbidity list — printed only when you documented them. Diagnosis codes you keep from Pull Codes can still state a type or stage; remove any that you did not document.

## Vendor Portal FAQ — 4

https://help.medipyxis.com/vendor-portal/faq/

- **vpf-03** — live: “What are the two vendor roles? vendor_admin — full access, including the Staff page to invite and manage colleagues. vendor_user — everything except Staff (Orders, Use Events, Catalog, Invoices, Clinics).”
  - Product: There are three roles: vendor_admin (Admin), vendor_user (Staff) and vendor_sales (Sales) (VendorShell.tsx). Besides Staff, the API page and editing clinic terms are admin-only (VendorRoutes.tsx, vendor-terms-upsert).
  - Proposed: What are the vendor roles? Admin (vendor_admin) — every page, plus Staff (invite and manage colleagues), API (API keys and webhooks), and editing each clinic's terms. Staff (vendor_user) and Sales (vendor_sales) — every page except Staff, API, and clinic terms. The Staff page invites people as Admin or Staff.
- **vpf-06** — live: “How do I add or change a product? Manage your SKUs on the Catalog page — click New SKU or edit an existing one.”
  - Product: The button is 'Add Product'; there is no 'New SKU' button (VendorCatalogPage.tsx at v1.1.345).
  - Proposed: On the Catalog page, click Add Product, or click a row to edit it.
- **vpf-07** — live: “Changes take effect directly; there is no separate practice approval step.”
  - Product: Products pushed to a clinic land as 'proposed' catalog links that the clinic must accept (vendor-catalog-push/index.ts at v1.1.345).
  - Proposed: To offer a product to a clinic, push it from Push to clinic; the clinic reviews and accepts new products before they can use them.
- **vpf-11** — live: “Is the vendor portal the same login as the clinical app? No. The vendor portal is a separate sign-in at /vendor.”
  - Product: There is no vendor sign-in page; everyone signs in at /login and a vendor account is sent to /vendor/home (postAuthDestination.ts, VendorRoutes.tsx at v1.1.345).
  - Proposed: Yes, the sign-in page is the same. When a vendor account signs in, it opens the vendor portal home page (/vendor/home).

## Onboard a practice with the Practice Onboarding importer — 3

https://help.medipyxis.com/admin/practice-onboarding/

- **po-f02** — live: “Review the Overall Progress bar and click Start (or Import More) on 1. Patients.”
  - Product: There is no "Overall Progress" label and no Start or Import More button; the bar reads "N of M steps completed" (pages/administrator/PracticeOnboarding.tsx:406) and you click the step card (pages/administrator/PracticeOnboarding.tsx:461).
  - Proposed: Click Administrator, then the Practice Onboarding card. A bar shows how many of the 9 steps are completed. Click the Patients step card to open it. Locked steps show Locked and cannot be opened.
- **po-f03** — live: “Results — Review the counts of Imported, Skipped (existing), Warnings (Needs Follow-Up), and Errors.”
  - Product: The label is "Skipped (Reused)" (components/import/ImportResultsPanel.tsx:88).
  - Proposed: Results: Imported, Errors, Skipped (Reused) and Warnings counts, with a Needs Follow-Up list.
- **po-f04** — live: “Click Back to Overview (or Done) and repeat the flow for steps 2–9 as each step unlocks.”
  - Product: There is no Back to Overview button in the import screens; the results panel has Done (components/import/ImportResultsPanel.tsx:42).
  - Proposed: Click Done and repeat for steps 2–9. Uploading the same file again does not create duplicates: rows that match existing records are reused and counted as skipped.

## CRM overview — 3

https://help.medipyxis.com/modules/crm/overview/

- **lcro-06** — live: “Tab Assigned: practices assigned to the logged-in BD rep.”
  - Product: The Assigned tab shows every practice with any BD rep assigned (frontend/src/pages/Crm.tsx:3038); yours carry a Me badge.
  - Proposed: Assigned: practices that have a BD rep; yours show a Me badge.
- **lcro-13** — live: “New practices can be added directly in the CRM using + New Practice (top-right).”
  - Product: The CRM button is an icon-only "+" with the title "Add New Practice" (frontend/src/pages/Crm.tsx:1047); there is no "+ New Practice" label.
  - Proposed: Click the + (Add New Practice) button at the top right of the CRM.
- **lcro-14** — live: “New practices can be added inline during referral creation in Referral Intake by clicking + Add new practice in the Practice & PCP section. Both methods create the same CRM record.”
  - Product: The Referral Intake button is labelled "Add New Practice" (frontend/src/pages/ReferralsNewPage.tsx:4302), not "+ Add new practice". It opens the same Add New Practice form as the CRM, so both create the same record.
  - Proposed: Add New Practice in the CRM, or Add New Practice while creating a referral in Referral Intake; both open the same Add New Practice form.

## Manage your day as a clinician — 3

https://help.medipyxis.com/modules/fleet-calendar/my-day/

- **lmd-03** — live: “Open My Calendar. Click My Calendar in the sidebar to see the appointments assigned to you.”
  - Product: My Calendar is not a sidebar item; it is routed at /facility/:facilityId/my-calendar (frontend/src/user-routes.tsx:718) and opened from the Calendar button on the Patient Management page (frontend/src/pages/PmClinicianDashboard.tsx:163). It has no Start Visit button.
  - Proposed: Open the Fleet Calendar and use the All Providers filter to show only your own column. You can also open My Calendar with the Calendar button on the Patient Management page; it lists only your appointments, but it has no Start Visit button.
- **lmd-05** — live: “Each appointment card shows the patient, scheduled time, visit type, and status.”
  - Product: The Day view card shows the patient label, time range and status (frontend/src/pages/ops/FleetCalendarCanvas.tsx:608, frontend/src/pages/ops/FleetCalendarCanvas.tsx:636); visit type is not rendered on the card.
  - Proposed: Each appointment card shows the patient, the time, and the status.
- **lmd-08** — live: “Click Start Visit. Fleet Calendar uses specialty routing: wound-care patients open in the Wound Cockpit, then the Visit Wizard; primary-care patients open in the Primary Care Cockpit.”
  - Product: No Primary Care Cockpit exists and Start Visit does no specialty routing; it always opens the Visit Wizard (frontend/src/utils/openVisitWizard.ts:230).
  - Proposed: Click the appointment to open Appointment Details. Click Start Visit; the Visit Wizard opens for that patient and appointment, so you do not have to search for the patient.

## Monitor credentials and license expiry — 3

https://help.medipyxis.com/modules/hr-compliance/credential-tracker/

- **lhc-03** — live: “Each row shows Employee (name and role), Credential Type, Expiration Date, and Status (Valid, Expiring, Expired, or Missing).”
  - Product: The table is one row per employee with columns Employee Information, Role & Territory, Credentials Summary, Next Expiration, Overall Status, Credential Breakdown and Actions (frontend/src/pages/HRCredentialTracker.tsx:1228).
  - Proposed: Open HR & Compliance and click Credential Tracker. The tracker lists employees with their credentials, one row per employee, with columns Employee Information, Role & Territory, Credentials Summary, Next Expiration, Overall Status, Credential Breakdown and Actions.
- **lhc-05** — live: “Missing — required credential not yet on file.”
  - Product: There is no list of required credentials per role or employee; Missing is only a stored status on a credential with no expiration date (frontend/src/pages/HRCredentialTracker.tsx:274).
  - Proposed: Missing: the credential is recorded as missing and has no expiration date. Medipyxis does not keep a list of required credentials.
- **lhc-07** — live: “Attach the Document (PDF or image) and add Notes if needed. (Territory is set to National.)”
  - Product: Territory starts as National but is a dropdown you can change (frontend/src/pages/HRCredentialTracker.tsx:2141).
  - Proposed: Choose the Territory (it starts as National), attach the Document (PDF, JPG or PNG), and add Notes if needed. Save; the credential appears with its status.

## Orders & DME overview — 3

https://help.medipyxis.com/modules/orders-dme/overview/

- **dme-ov-03** — live: “For each order you pick a vendor from the enabled-vendor list for that order type (vendors are scoped per clinic).”
  - Product: The recipient list is this clinic's enabled vendors, scoped server-side by clinic_vendor_enablements, plus home health agencies (PatientOrdersDmePage.tsx:742-751). Since 2026-09-08 it is deliberately NOT filtered by order type (:717-729): every tab shows the same list.
  - Proposed: For each order you pick a recipient from your clinic's enabled vendors and home health agencies (the same list on every tab).
- **dme-ov-06** — live: “When results come back, use Upload Results on the order.”
  - Product: Upload Results appears only on Provisioned orders, and its click handler only shows a toast reading "Upload results" — nothing is uploaded (frontend/src/pages/PatientOrdersDmePage.tsx:1606-1617). The working Upload Results menu item is in OrdersTabContent.tsx, used only by OrdersDmeWizard, which nothing imports. Product defect.
  - Proposed: Uploading results to an order is not available yet.
- **dme-ov-07** — live: “During a visit, the Orders & DME section (section 12) of the Visit Wizard opens this surface with the patient context attached.”
  - Product: In the wizard, Orders & DME is badged "Step 11" (VisitWizardV4.tsx:18206-18208; "section 12" is only the stored-data key and the read-only display). It does not open the patient Orders & DME page; it embeds its own ordering panel, OrdersDMEVisit, with the patient id (VisitWizardV4.tsx:18233).
  - Proposed: During a visit, the Orders & DME step (Step 11) of the Visit Wizard lets you place orders for that patient without leaving the wizard.

## Manage orders (accept, ship, and track) — 3

https://help.medipyxis.com/vendor-portal/manage-orders/

- **vpo-01** — live: “Work the orders clinics place with your company from the Orders page of the vendor portal (/vendor/orders). You accept an order, mark it in progress, ship it with a tracking number, and it completes when the clinic marks it delivered.”
  - Product: The vendor marks the order delivered from Order Detail (Mark Delivered, VendorOrderDetailDrawer.tsx); there is no clinic confirmation on this flow.
  - Proposed: Work the orders clinics place with your company from the Orders page (/vendor/orders). You accept an order, optionally mark it in progress, ship it with a tracking number, and mark it delivered.
- **vpo-02** — live: “You are signed in to the vendor portal with a vendor_admin or vendor_user account.”
  - Product: vendor_sales accounts also pass the identity gate and can use Orders (vendor-auth.ts allowedRoles).
  - Proposed: You are signed in to the vendor portal. Every vendor role (Admin, Staff, Sales) can open Orders.
- **vpo-08** — live: “Delivered. The order completes as Delivered once the clinic confirms receipt on their side.”
  - Product: The vendor clicks Mark Delivered on a shipped order; there is no clinic confirmation step.
  - Proposed: On a shipped order, click Mark Delivered when it arrives.

## Medipyxis Help Center (home) — 2

https://help.medipyxis.com/

- **home-07** — live: “Card: Inventory — Track grafts and DME from receiving to consumption with full traceability.”
  - Product: Inventory receives and tracks grafts and supplies, but DME is not an inventory category: the categories are Amniotic, Biologics, Conservative, PRP and UM (pages/inventory-management/commons/Enums.ts:564); DME lives in Orders & DME.
  - Proposed: Inventory — Track grafts and wound-care supplies from receiving to use.
- **home-09** — live: “Card: Admin & billing — Configure facilities, roles, security, imports, and clearinghouse credentials.”
  - Product: Customers do not configure clearinghouse credentials: the Stedi key lives only in edge-function secrets (functions/_shared/__tests__/eraPdfHandler.test.ts:20) and no screen takes one. Facilities, roles, security and imports are real.
  - Proposed: Admin & billing — Configure facilities, roles, security, imports, and payer enrollment.

## Patient Management — overview — 2

https://help.medipyxis.com/modules/patient-management/overview/

- **pm-ov-01** — live: “Patient Management is your working roster for patients at the current facility — the working list a clinician uses daily, opened from the Patient Management sidebar item.”
  - Product: The Patient Management sidebar item (AppShell.tsx:674, /pm-clinician-dashboard) opens PmClinicianDashboard, headed "My Clinical Day" — "Manage your schedule, track visits, and monitor outcomes." (frontend/src/pages/PmClinicianDashboard.tsx:75-79). It is a day schedule (day selector, daily schedule, map, Needs Scheduling, overdue visits), not a patient roster. The roster is All Patients.
  - Proposed: Patient Management opens My Clinical Day: your schedule for the day, patients who need scheduling, and overdue visits. The full patient list is All Patients.
- **pm-ov-05** — live: “List columns: Name / DOB (click to open the chart), MRN (assigned when the patient is created), Status (Active · On Hold · Discharged · Archived).”
  - Product: All Patients is a grid of cards, not a list with columns. Each card shows name, status pill (upper case, e.g. "ON HOLD"), facility, flags, age, wound count, visit count and primary condition; it shows no MRN and no DOB (frontend/src/pages/all-patients/Patients.tsx:1645-1830). The chart opens from the card's View button (:1850-1866), not by clicking the name. MRN is generated at create by the database (referralApi.ts MRN retry block) and shown in the create success message.
  - Proposed: All Patients shows one card per patient with name, status (ACTIVE, ON HOLD, DISCHARGED, or ARCHIVED), age, wounds, and visits. Click View on a card to open the chart. The MRN appears in the success message after Create Patient.

## Sync patient history with ZusHealth (TEFCA) — 2

https://help.medipyxis.com/modules/patient-management/zus-tefca/

- **pm-zus-03** — live: “Provenance indicators on each row let you tell externally-sourced data from data entered in Medipyxis.”
  - Product: Medications, allergies, labs, surgeries, and vaccinations show the row's real source. Conditions always show "Manual": ConditionItem hardcodes <ZusProvenanceBadge source="manual" /> (frontend/src/components/patient/ZusHealthDataSection.tsx:857), so conditions imported from Zus are labelled as entered by hand. Product defect.
  - Proposed: Medications, allergies, labs, surgeries, and vaccinations show a source badge on each row (Zus or Manual). Conditions do not yet show where they came from.
- **pm-zus-08** — live: “This is how Medipyxis participates in nationwide interoperability (TEFCA); the contribution reaches the patient's nationwide record via TEFCA.”
  - Product: The code sends FHIR resources to the Zus API (backend/supabase/functions/zus-contribute-visit/index.ts:1-13). Whether Zus forwards them to TEFCA is a Zus network property, not visible in Medipyxis code. The only TEFCA reference in the product is a network list in frontend/src/services/zusFhirImportService.ts:425. Cannot be confirmed from code.
  - Proposed: When a visit is signed, Medipyxis sends it to Zus Health automatically, so other providers on the Zus network can see the care you delivered.

## Add a new patient from Referral Intake — 2

https://help.medipyxis.com/modules/referral-intake/new-referral/

- **ri-nr-02** — live: “First name, last name, and date of birth are the only required fields.”
  - Product: Name and DOB are the only always-required fields, but once an insurance row is added, Create Patient is blocked when a non-self subscriber has no Subscriber Date of Birth (ReferralsNewPage.tsx:2905-2913), and when the subscriber name does not match the patient until Subscriber Relationship is set (:2894-2902).
  - Proposed: You know the patient's first name, last name, and date of birth. Those three fields are always required. If you add insurance where the subscriber is not the patient, Subscriber Date of Birth is required too.
- **ri-nr-05** — live: “You can also press ⌘K (Windows: Ctrl+K) and type "new referral" — the command item is titled New Referrals and opens the form.”
  - Product: ⌘K / Ctrl+K opens the command bar (AppShell.tsx:1141), but its items come from AppShell.tsx:807-850: the sidebar labels plus a short list (Fax review queue, Clinical inventory view, CRM Home, ...). There is no New Referrals item, so typing "new referral" finds nothing. The "New Referrals" item lives in frontend/src/utils/navigationUtils.ts:46, used only by components/app-shell/AppShell.tsx, which nothing imports.
  - Proposed: You can also press ⌘K (Windows: Ctrl+K), type "referral", and choose Referral Intake to open the board.

## Referral Intake — overview — 2

https://help.medipyxis.com/modules/referral-intake/overview/

- **ri-ov-08** — live: “The card stays on this board in the Assigned column, and the card does not leave Referral Intake on its own.”
  - Product: Cards do leave the board on their own. Once a first visit is booked the patient is SCHEDULED; it still shows in the Assigned column, but when that appointment is more than 7 days in the past the card is filtered out of every column (frontend/src/pages/Referrals.tsx:2002-2006, flag set at :1487 from the 7-day window at :1444).
  - Proposed: The card stays in the Assigned column, including after the first visit is booked. When that booked visit is more than 7 days in the past, the card drops off the board.
- **ri-ov-13** — live: “Fax Review Queue — also in the sidebar as Fax Review Queue, or from the Fax Queue button on this board.”
  - Product: The live sidebar (frontend/src/components/AppShell.tsx:629-756) has no Fax Review Queue item. The queue is reached from the Fax Queue button on the board, from the Fax Center sidebar item (AppShell.tsx:751, opens /more) via its Fax Review Queue tile (frontend/src/pages/MorePage.tsx:134), or from ⌘K as "Fax review queue" (AppShell.tsx:815). The "Fax Review Queue" entry in frontend/src/constants/navigation.ts:68 only feeds components/app-shell/AppShell.tsx, which nothing imports.
  - Proposed: Fax Review Queue — open it with the Fax Queue button on this board, from the Fax Review Queue tile under Fax Center in the sidebar, or by pressing ⌘K and typing "fax review queue".

## Configure Referral Intake for your facility — 2

https://help.medipyxis.com/modules/referral-intake/setup/

- **ri-su-05** — live: “Roles you can assign include Administrator, Clinical Manager, Clinical Director, Clinician, Referral Coordinator, Business Development Representative, Business Development Manager, Finance/Accounts Payable, Vendor Coordinator, and Biller.”
  - Product: Organization Role Config lists ten roles from its own ROLES array (frontend/src/pages/administrator/OrgRoleConfigPage.tsx:26-37): admin, clinical_manager, medical_director, clinician, referral_coordinator, bd_rep, bd_manager, finance_ap, vendor_coordinator, biller. It prints the raw key with underscores replaced (:272), so the rows read "admin", "clinical manager", "medical director", "bd rep", "finance ap" and so on. There is no Clinical Director row there; the labelled list in the sentence is USER_ROLES (frontend/src/constants/roles.ts), which this page does not use.
  - Proposed: The page lists ten roles, shown by their system names: admin, clinical manager, medical director, clinician, referral coordinator, bd rep, bd manager, finance ap, vendor coordinator, and biller.
- **ri-su-08** — live: “Fax Review Queue in the sidebar (and the Fax Queue button on the board) opens the fax review page.”
  - Product: There is no Fax Review Queue item in the live sidebar (frontend/src/components/AppShell.tsx:629-756). The Fax Queue button on the board does open it (Referrals.tsx:3313). Other routes in: the Fax Review Queue tile under Fax Center (MorePage.tsx:134; Fax Center is AppShell.tsx:751) and ⌘K "Fax review queue" (AppShell.tsx:815).
  - Proposed: The Fax Queue button on the board, the Fax Review Queue tile under Fax Center in the sidebar, and ⌘K "fax review queue" all open the fax review page.

## Referral status transitions (reference) — 2

https://help.medipyxis.com/modules/referral-intake/status-transitions/

- **ri-st-04** — live: “Ready for Assignment → Assigned: drag the card, then use Assign on the card to pick a provider. A toast prompts you to select a provider to complete assignment.”
  - Product: Dragging a card to Assigned opens the provider-assignment dialog automatically (frontend/src/pages/Referrals.tsx:2265-2281) along with the toast. The Assign button only appears on Ready for Assignment cards (:546); Assigned cards show Schedule instead (:556). Closing the dialog without picking a provider moves the card back to its previous column (:2793-2810).
  - Proposed: Drag the card to Assigned (a provider dialog opens and a toast asks you to select a provider), or click Assign on a Ready for Assignment card. If you close the dialog without choosing a provider, the card goes back to its previous column.
- **ri-st-05** — live: “Assigning does not create the patient and does not remove the card from Referral Intake (card stays on the board; schedule from Fleet Calendar).”
  - Product: Assigning updates the existing patient row and keeps the card in Assigned. But the card does not stay indefinitely: after a visit is booked (status SCHEDULED, still shown under Assigned) and that appointment is more than 7 days past, it is filtered off the board (Referrals.tsx:2002-2006). Assigned cards also have their own Schedule button (:556-580), so Fleet Calendar is not the only place to book.
  - Proposed: Assigning does not create the patient. The card stays in Assigned; book the first visit with Schedule on the card or from Fleet Calendar. Once that booked visit is more than 7 days in the past, the card drops off the board.

## How the signature timestamp prints on a signed note — 2

https://help.medipyxis.com/modules/visit-wizard-ehr/signature-timestamp/

- **st-06** — live: “The timezone abbreviation — EDT, PDT, CST — is whatever the printing device's clock is set to. The abbreviation is always printed.”
  - Product: A signature value stored as a bare YYYY-MM-DD prints the day alone, with no time and no zone (formatters.ts formatSignatureTimestamp, 'date-only, no time -> the calendar day alone', at v1.1.345). Every value with a time prints the abbreviation; the Visit Wizard always stores a full timestamp (ProviderAttestationVisit.tsx 'const signedAt = new Date().toISOString();').
  - Proposed: The timezone abbreviation — EDT, PDT, CST, whatever the printing device's clock is set to. It is printed whenever the signature was recorded with a time, which is every signature made in the Visit Wizard.
- **st-15** — live: “The signature timestamp is written when the provider clicks Sign & Lock in step 17 of the Visit Wizard.”
  - Product: The printed timestamp is signed_at, written when the provider clicks Complete Provider Attestation in step 17 (ProviderAttestationVisit.tsx 'const signedAt = new Date().toISOString();' and the button at :818 at v1.1.345; s15_attestation.ts reads providerAttestation.signed_at). Sign & Lock comes later, in the review window opened from Continue to Review; step 17 says 'Not signed yet — Sign & Lock finishes it'.
  - Proposed: The signature timestamp is written when the provider clicks Complete Provider Attestation in step 17 of the Visit Wizard. Sign & Lock, at the end of Continue to Review, then signs and locks the visit.

## Document a visit offline — 2

https://help.medipyxis.com/modules/visit-wizard-ehr/work-offline/

- **wo-05** — live: “The autosave status indicator in the wizard reflects the live connection state (for example, saving or offline) for the server autosave.”
  - Product: The wizard's Status pill can only show Ready, Saving or Error: the status type includes "offline" (VisitWizardV4.tsx:1590) and the pill has an "Offline" branch (VisitWizardV4.tsx:18864), but nothing ever sets it to offline. Losing the connection shows Error, not Offline. The app header shows its own Offline badge when the device is offline (AppShell.tsx:1573-1578).
  - Proposed: The wizard header shows the autosave status (Ready, Saving, or Error) and an Auto-save On / last-saved indicator. If your device loses its connection, the app header shows an Offline badge and the wizard status shows Error until a save goes through again. Neither is an offline mode you turn on.
- **wo-07** — live: “For field visits in areas with no connectivity, complete documentation where you have a connection; coordinate with your implementation manager on the save model before your next field visit.”
  - Product: Advice to the reader, not a statement about product behaviour; nothing in code can confirm it.

## March 2026 release notes — 2

https://help.medipyxis.com/release-notes/2026-03/

- **rn03-01** — live: “This release contained no user-facing feature changes. Work shipped in March was limited to infrastructure maintenance, dependency updates, and back-end data migrations. No module documentation was affected.”
  - Product: False. User-facing feature PRs merged in March 2026 and are still in v1.1.345: Wound care progress note generator builds the note from the visit's documentation. (PR #1487, #1520, #1542); Previous treatments section added (PR #1486, #1530). Update: now the Medical Necessity & Previous Treatments section of the Visit Wizard.; Each appointment stores its time slot. (PR #1497, #1501) The check encodes the live sentence: the listed feature PR would have to be a maintenance-only change, and its title is not.
  - Proposed: Changes merged between 2026-03-01 and 2026-03-31. This is not a complete list: it covers selected user-facing changes that are still in the current release. Wound care progress note generator builds the note from the visit's documentation. (PR #1487, #1520, #1542) Previous treatments section added (PR #1486, #1530). Update: now the Medical Necessity & Previous Treatments section of the Visit Wizard. Each appointment stores its time slot. (PR #1497, #1501)
- **rn03-02** — live: “Several internal engineering tasks were resolved with resolution dates in late March (MED-1596, MED-1676, MED-1432, MED-1215, MED-1595, MED-1124, and others); those items did not produce observable UI or workflow changes for end users and are therefore not listed individually.”
  - Product: False. MED-1432 is PR #1522 (merged 2026-03-23) 'sync medications and billing to patient dashboard', a visible change; MED-1124 is PR #930 (merged 2025-11-19) 'Show assigned sales rep on referral cards', a visible change shipped in November 2025, not late March; MED-1676 is listed on the live April page as a user-facing fix (clinician title display). The other keys (MED-1596, MED-1215, MED-1595) have no PR citing them except MED-1215 → PR #1309 (2026-01-07).

## Modules — 1

https://help.medipyxis.com/modules/

- **mod-01** — live: “One folder per sidebar item in the Medipyxis app. Pick a module to see its full reference.”
  - Product: The sidebar also has Spend Reports, All Patients and Fax Review Queue, which have no module folder (constants/navigation.ts:82), and Visit wizard / EHR is not a sidebar item (it opens from Start Visit).
  - Proposed: Guides grouped by the main areas in the Medipyxis sidebar. Pick a module to see its articles.

## Oversight cockpit — 1

https://help.medipyxis.com/modules/oversight-cockpit/

- **imoc-01** — live: “Card: Financial Performance section reference (reference · 4 min) (link resolves; the screen it documents exists).”
  - Product: The Oversight Cockpit has no Financial Performance section: no page in frontend/src/pages contains that text. Its money view is the Heat Map's Billed by zip metric (frontend/src/services/heatMapDataService.ts:46), which plots dollars billed, not revenue.
  - Proposed: Card: Billed by zip map reference (the Heat Map's dollars-billed view).

## Use the referral detail panel — 1

https://help.medipyxis.com/modules/referral-intake/detail-panel/

- **ri-dp-02** — live: “Chat: conversation on this referral, separate from Team Chat.”
  - Product: The Chat tab (ReferralChatWidget) creates and reads a Team Chat conversation: teamChatService.findOrCreateReferralConversation inserts into team_conversations with chat_type "referral" (frontend/src/services/teamChatService.ts:990; called from frontend/src/components/ReferralChatWidget.tsx:255). TeamChatService.loadConversations, which the Team Chat page uses (frontend/src/pages/TeamChat.tsx:481), does not filter out chat_type "referral", so participants also see the thread in Team Chat.
  - Proposed: Chat: a conversation about this referral. It is a Team Chat conversation, so participants can also open it from Team Chat.

## January 2026 release notes — 1

https://help.medipyxis.com/release-notes/2026-01/

- **rn01-01** — live: “This release contained no user-facing feature changes. Work shipped in January was limited to infrastructure maintenance, dependency updates, and back-end data migrations. No module documentation was affected.”
  - Product: False. User-facing feature PRs merged in January 2026 and are still in v1.1.345: Family history records can be edited. (PR #1335, #1343); TIFF images can be uploaded to a referral's documents. (PR #1320, #1323); A voice intake button was added to the microphone control. (PR #1342) The check encodes the live sentence: the listed feature PR would have to be a maintenance-only change, and its title is not.
  - Proposed: Changes merged between 2026-01-01 and 2026-01-31. This is not a complete list: it covers selected user-facing changes that are still in the current release. Family history records can be edited. (PR #1335, #1343) TIFF images can be uploaded to a referral's documents. (PR #1320, #1323) A voice intake button was added to the microphone control. (PR #1342)

## February 2026 release notes — 1

https://help.medipyxis.com/release-notes/2026-02/

- **rn02-01** — live: “This release contained no user-facing feature changes. Work shipped in February was limited to infrastructure maintenance, dependency updates, and back-end data migrations. No module documentation was affected.”
  - Product: False. User-facing feature PRs merged in February 2026 and are still in v1.1.345: Nine patient and caregiver education bundles were added, with a preview. (PR #1368, #1376); Future dates are blocked in Historic Measurements. (PR #1456); A pre-charting service reads a patient's external record from ZusHealth. (PR #1345) The check encodes the live sentence: the listed feature PR would have to be a maintenance-only change, and its title is not.
  - Proposed: Changes merged between 2026-02-01 and 2026-02-28. This is not a complete list: it covers selected user-facing changes that are still in the current release. Nine patient and caregiver education bundles were added, with a preview. (PR #1368, #1376) Future dates are blocked in Historic Measurements. (PR #1456) A pre-charting service reads a patient's external record from ZusHealth. (PR #1345)

## Rounding at a nursing facility, start to finish — 1

https://help.medipyxis.com/whats-new/snf-rounding/

- **wns-14** — live: “FAQ (also JSON-LD FAQPage): Book facility day books every resident's visit back to back, and each visit records the facility, so the claim carries place of service 31 and names the facility in Box 32.”
  - Product: The building does not set the place of service. The visit records 31 or 32 (Part A stay vs not), and Box 32 names the facility (constants/practiceTypes.ts MLN MM13767 note; facility-day/handler.ts sets no place of service).
  - Proposed: Book facility day books every resident's visit back to back, and each visit records the facility it happens at. The visit records place of service 31 or 32, and the claim names the facility in Box 32.
