# Findings: live Visit Documentation pages (help main 70c2736) vs prod v1.1.345

MEDA-379 bot verification. **Parked for review — nothing here is published.** The live pages are unchanged.
Each item quotes the live sentence, says what the product does, and gives replacement wording whose checks already pass against v1.1.345.
Full check output: `verification/reports/2026-11-11-live-70c2736-v1.1.345.md`. Claim files: `verification/claims/vd-*.json`.

## Visit Wizard overview — 8 not confirmed

Page: https://help.medipyxis.com/modules/visit-wizard-ehr/overview/

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

## Walk through a visit in the Visit Wizard — 36 not confirmed

Page: https://help.medipyxis.com/modules/visit-wizard-ehr/start-a-visit/

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

## Sign off on a visit with Provider Attestation (step 17) — 17 not confirmed

Page: https://help.medipyxis.com/modules/visit-wizard-ehr/sign-off/

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

## How your progress note is written — 11 not confirmed

Page: https://help.medipyxis.com/modules/visit-wizard-ehr/progress-note/

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

## How the signature timestamp prints on a signed note — 2 not confirmed

Page: https://help.medipyxis.com/modules/visit-wizard-ehr/signature-timestamp/

- **st-06** — live: “The timezone abbreviation — EDT, PDT, CST — is whatever the printing device's clock is set to. The abbreviation is always printed.”
  - Product: A signature value stored as a bare YYYY-MM-DD prints the day alone, with no time and no zone (formatters.ts formatSignatureTimestamp, 'date-only, no time -> the calendar day alone', at v1.1.345). Every value with a time prints the abbreviation; the Visit Wizard always stores a full timestamp (ProviderAttestationVisit.tsx 'const signedAt = new Date().toISOString();').
  - Proposed: The timezone abbreviation — EDT, PDT, CST, whatever the printing device's clock is set to. It is printed whenever the signature was recorded with a time, which is every signature made in the Visit Wizard.
- **st-15** — live: “The signature timestamp is written when the provider clicks Sign & Lock in step 17 of the Visit Wizard.”
  - Product: The printed timestamp is signed_at, written when the provider clicks Complete Provider Attestation in step 17 (ProviderAttestationVisit.tsx 'const signedAt = new Date().toISOString();' and the button at :818 at v1.1.345; s15_attestation.ts reads providerAttestation.signed_at). Sign & Lock comes later, in the review window opened from Continue to Review; step 17 says 'Not signed yet — Sign & Lock finishes it'.
  - Proposed: The signature timestamp is written when the provider clicks Complete Provider Attestation in step 17 of the Visit Wizard. Sign & Lock, at the end of Continue to Review, then signs and locks the visit.

## Wound Cockpit overview — 12 not confirmed

Page: https://help.medipyxis.com/modules/visit-wizard-ehr/wound-cockpit/

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
