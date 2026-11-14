---
id: visit-wizard-ehr-progress-note
title: How your progress note is written
module: visit-wizard-ehr
audience: [clinician, billing, admin]
roles: [clinician, medical_director]
type: concept
estimated_minutes: 7
last_reviewed: 2026-11-13
app_route: /facility/{facility_uuid}/visit-wizard-v2-page
related:
  - visit-wizard-ehr-sign-off
  - visit-wizard-ehr-overview
  - visit-wizard-ehr-lcd-navigator
  - visit-wizard-ehr-start-a-visit
  - visit-wizard-ehr-note-honesty-guardrails
tags: [progress-note, documentation, Medicare, medical-necessity, debridement, addendum]
---

# How your progress note is written

Your progress note prints what you documented. Where you left a field blank, it says **"Not documented."** It does not write clinical sentences on your behalf. Before the note is created, Medipyxis shows you a short list of anything a Medicare reviewer would look for, and lets you fix it in a click.

Nothing on that list blocks you. You can always continue.

---

## Why the note prints only what you documented

Medicare's Program Integrity Manual — the chapter that tells reviewers how to read a medical record — says three things that apply directly to your note:

- A reviewer judges the service by **your** documentation. Sentences the software wrote carry no weight.
- Reviewers are told to be suspicious of **template and cloned language**, meaning the same sentence appearing on every note.
- An attestation on its own — "I confirm this was medically necessary" — proves nothing.

See also [Note honesty guardrails](/modules/visit-wizard-ehr/note-honesty-guardrails/).

Where the note cites a Medicare coverage policy, it cites only a verified policy that applies to the patient's Medicare contractor and to the services billed on the visit. Citations appear in the billing section, which provider copies leave out.

---

## What you will notice

### Blank means blank

| Where | What prints |
| --- | --- |
| **Allergies** | Drug allergies and Latex / other print what you recorded, or "Not documented." The **Reconciled this visit** line always prints "Not documented." for now — no field in the wizard fills it yet |
| **Debridement** | "Not documented." on each detail you leave blank. The depth is whatever you recorded |
| **Pressure-injury risk** | The Braden total and risk band print as documented. Write the prevention plan in the risk-assessment notes box — the wizard reminds you when the Braden total is 12 or below — and it prints under **Additional Risk Assessment** |
| **Same-day visit and procedure** | "Separate E/M evaluation: Not documented." — unless you answer the checklist item |
| **Medical necessity** | The findings themselves, for example "Devitalized tissue present: Yes — slough 20% on left heel" |
| **Home visits** | Nothing, unless you typed a homebound justification — which prints exactly as you wrote it |
| **Patient education** | What you write in **Education Topics Covered Today** and **Patient Understanding Assessment** (Section 12), printed as topics taught and understanding / response, with materials and next-visit education goals. A blank item prints "Not documented."; if no education is documented at all, the note says "Patient education not documented this visit." Describe how you taught — for example teach-back or a return demonstration — in the understanding assessment. |

The debridement section does not include **Pathology sent** or **Post-procedure dressing**, because no screen in Medipyxis asks for them. **Tissue present (pre-procedure)** prints from this visit's wound-bed assessment. Post-debridement area prints "Not measured."

---

## The checklist before the note is created

When you stage billing codes, a line appears — for example **"3 documentation items open — Resolve."** Opening it shows one screen listing each item, what is missing, which wound it concerns, and a button that takes you straight there.

- **Items you can answer in a sentence** — why the visit was necessary, what you evaluated separately from the procedure, your assessment and decision-making — open a small box. It shows the facts already documented for this visit, offers an example you can adapt, and reminds you to put it in your own words. To dictate instead of typing, press the microphone, speak, and your words are added to the box.
- **Items that belong on a form** — missing debridement elements, or a billing code not linked to a wound — take you to the right screen, and to the right wound.
- **Nothing is required.** When the list opens from **Continue to Review**, **Continue anyway** is always available. When you open it from the billing line, it has only **Close**.

### Continuing past an item that affects a claim

If an item affects what can be billed — a debridement missing the elements the policy requires, or a billed code with no documented wound — choosing **Continue anyway** asks you to tick a box confirming you understand. That is the only friction, and it is deliberate: the decision stays yours, and it goes on the record.

---

## Why the visit was necessary

Medicare's rule for home visits is that **each visit** needs its medical necessity documented, or a reviewer treats it as a social visit. Medipyxis asks once per visit: *"Why did this patient need you — not a nurse — today?"* Your answer prints in the note with a small label showing how it was written — for example *Clinician-typed*, or *AI-assisted draft, edited and affirmed by provider* when you adapted the example.

The question is **not** asked per wound. If a wound's necessity note is word-for-word identical to the last visit's, a separate item says so — identical text visit after visit is what a reviewer calls cloned documentation. Update it or clear it; either resolves the item.

---

## Your procedure note wording

In Section 9 — Interventions & Treatments, **Generate Procedure Note** builds a procedure narrative from the intervention details you entered. The narrative appears in a **Procedure Note** box. To use your own wording, edit the text in that box and check **Use my exact procedure note (skip AI/template regeneration)** under it — your text is kept exactly as written and carried into Section 13 — Procedure Supplies.

In Section 13, each billable procedure also has a **Compliance Narrative** box, and it is on the section's list of required items. Click **Generate Compliance Note** for a starting draft, or write it yourself, and review it. A blank box is flagged but doesn't stop you.

---

## Preview before you sign

After you finish step 17 and click **Continue to Review** at the bottom of the wizard, the **Preview — Review Before Signing** screen shows the actual PDF that will be stored, rather than a separate on-screen version of it. What you see is what gets signed. See [Sign Off](/modules/visit-wizard-ehr/sign-off/) for the attestation step itself.

---

## Common questions

**Why is my note shorter on some visits?** Where fields were left blank, the note is shorter, and says so. A shorter honest note defends better than a longer one full of sentences you did not write.

**Can my signed note change?** No. The note you signed is a permanent file, and opening it from the patient's **Progress Notes** list shows you that exact file, unchanged.

The **Download Clinical Note** action builds a fresh provider copy, without the billing sections, from the visit's recorded data. It keeps the format your note had when you signed it. Your signed note is still the signed note; the fresh copy is a fresh copy.

**What if a signed note contains a sentence I did not write?** Add an addendum correcting the statement, using the ordinary addendum flow. Choose *Correction*, describe the sentence, and submit the addendum. See [Sign Off](/modules/visit-wizard-ehr/sign-off/).

**Do I have to answer the checklist?** No. Every item is advisory and none of them stop you signing.

**Is the AI writing my note?** No. Where an example is offered, it is built only from facts already documented in that visit, and it is checked before you ever see it — any draft that invents a number, a cause, or a negation, or that uses conclusion language, is discarded. It is never placed in your note automatically. You copy it into a box, edit it, and insert it, and the note records that you did.

**Does dictation get rewritten?** Not in the checklist box. The microphone there types what you said, word for word, and adds it to whatever is already in the box.

---

## What the checklist commonly flags

- **Debridement notes flag missing elements**, tissue removed in particular. That is a gap the policy asks for, not a software error.
- **Home visits without a necessity sentence show the necessity item.**
- **Visits coded on medical decision-making ask for your assessment narrative.**

---

## Where to get help

For questions about what a particular item is asking for, or whether something should be documented differently for your payer, contact your Medipyxis contact. If something in the note looks wrong for a real patient, say so — with the patient and the visit date — and it will be investigated.

<Compliance>
Medipyxis is documentation support software. It does not decide coverage, and the documentation checklist never blocks a clinician from signing a note. The criteria it references come from CMS manuals and your MAC's published policies.
</Compliance>
