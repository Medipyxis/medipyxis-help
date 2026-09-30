---
id: visit-wizard-ehr-progress-note
title: How your progress note is written
module: visit-wizard-ehr
audience: [clinician, billing, admin]
roles: [clinician, medical_director]
type: concept
estimated_minutes: 7
last_reviewed: 2026-09-30
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

Nothing blocks you. You can always continue.

---

## Why the note changed

Medicare's Program Integrity Manual — the chapter that tells reviewers how to read a medical record — says three things that applied directly to this note:

- A reviewer judges the service by **your** documentation. Sentences the software wrote carry no weight.
- Reviewers are told to be suspicious of **template and cloned language**, meaning the same sentence appearing on every note.
- An attestation on its own — "I confirm this was medically necessary" — proves nothing.

The note was doing all three. It filled blank fields with clinical findings such as "no known drug allergies", "tolerated the procedure well" and "hemostasis achieved with direct pressure", and it closed sections with conclusions like "these findings establish medical necessity". Those sentences looked helpful. Under audit they were a liability, because you signed for them and no one could show where they came from.

This change, shipped on 2026-09-18, finishes work that began in August with the [Note honesty guardrails](./note-honesty-guardrails.md), which stopped the note inventing a post-debridement measurement and an undocumented diabetes type or kidney-disease stage.

Six Medicare policy citations in the note were also incorrect. Three pointed at policies that do not govern this service — tracheostomy supplies, seat-lift mechanisms, and surgical dressings supplied as DME — and three cited policy numbers that do not exist. All six have been removed. The two verified wound-care policies remain.

---

## What you will notice

### Blank means blank

| Where | It used to print | It now prints |
|---|---|---|
| **Allergies** | "NKDA (No Known Drug Allergies)", "No known latex allergy", and "Reconciled this visit: Yes — confirmed with patient and caregiver" | "Not documented." on each, until you record it |
| **Debridement** | "Tolerated well", "Achieved with direct pressure", "Applied per wound care protocol", and a default tissue depth | "Not documented." on each. The depth is whatever you recorded |
| **Pressure-injury risk** | A prevention plan listing a pressure-redistribution mattress, heel offloading, repositioning, nutrition, and moisture management | "Prevention plan: Not documented." The Braden score and risk band still print |
| **Same-day visit and procedure** | "E/M service is significant and separately identifiable from procedure(s)…" | "Separate E/M evaluation: Not documented." — unless you answer the checklist item |
| **Medical necessity** | "These findings establish medical necessity for ongoing skilled wound management…" | The findings themselves, for example "Devitalized tissue present: Yes — slough 20% on left heel" |
| **Home visits** | An automatically written homebound paragraph | Nothing, unless you typed a homebound justification — which prints exactly as you wrote it |
| **Patient education** | "Verbal instruction and demonstration" as the teaching method | "Not documented." There was never a field in which to record a method |

Three rows have disappeared from the debridement section entirely, because no screen in Medipyxis ever asked for them: **Pathology sent**, **Tissue present pre**, and **Post-procedure dressing**. Every debridement note used to answer those questions on your behalf.

---

## The checklist before the note is created

When you stage billing codes, a line appears — for example **"3 documentation items open — Resolve."** Opening it shows one screen listing each item, what is missing, which wound it concerns, and a button that takes you straight there.

- **Items you can answer in a sentence** — why the visit was necessary, what you evaluated separately from the procedure, your assessment and decision-making — open a small box. It shows the facts already documented for this visit, offers an example you can adapt, and reminds you to put it in your own words. To dictate instead of typing, press the microphone, speak, and your words are added to the box.
- **Items that belong on a form** — missing debridement elements, or a billing code not linked to a wound — take you to the right screen, and to the right wound.
- **Nothing is required.** **Continue anyway** is always available.

### Continuing past an item that affects a claim

If an item affects what can be billed — a debridement missing the elements the policy requires, or a billed code with no documented wound — choosing **Continue anyway** asks you to tick a box confirming you understand. That is the only new friction, and it is deliberate: the decision stays yours, and it goes on the record.

---

## Why the visit was necessary

Medicare's rule for home visits is that **each visit** needs its medical necessity documented, or a reviewer treats it as a social visit. Medipyxis asks once per visit: *"Why did this patient need you — not a nurse — today?"* Your answer prints in the note with a small label showing whether you typed it, dictated it, or adapted an example.

The question is **not** asked per wound. If a wound's necessity note is word-for-word identical to the last visit's, a separate item says so — identical text visit after visit is what a reviewer calls cloned documentation. Update it or clear it; either resolves the item.

---

## Preview before you sign

The review screen shows the actual PDF that will be stored, rather than a separate on-screen version of it. What you see is what gets signed. See [Sign Off](./sign-off.md) for the attestation step itself.

---

## Common questions

**Will my note look emptier?** On a visit where you documented normally, almost nothing changes. On a visit where fields were left blank, yes — the note is shorter, and says so. That is the point: a shorter honest note defends better than a longer one full of sentences you did not write.

**Are my already-signed notes changed?** No. The note you signed is a permanent file, and opening it from the patient's **Progress Notes** list shows you that exact file, unchanged.

There is one place the difference shows up. The **Download Clinical Note** action builds a fresh provider copy from the visit's recorded data. Downloaded from now on, that copy follows the new rules, so it reads differently from the version you signed — the written-in sentences are gone and "Not documented." stands in their place. Your signed note is still the signed note; the fresh copy is a fresh copy.

**What if an old note contains one of the removed sentences?** File an addendum naming the specific kind of sentence being corrected. The addendum reason list now covers every class that was removed — for example *Procedure tolerance was a template default* or *LCD citation was wrong (cited policy does not govern this service)*. See [Sign Off](./sign-off.md).

**Do I have to answer the checklist?** No. Every item is advisory and none of them stop you signing.

**Is the AI writing my note?** No. Where an example is offered, it is built only from facts already documented in that visit, and it is checked before you ever see it — any draft that invents a number, a cause, or a negation, or that uses conclusion language, is discarded. It is never placed in your note automatically. You copy it into a box, edit it, and insert it, and the note records that you did.

**Does dictation get rewritten?** Not in the checklist box. The microphone there types what you said, word for word, and adds it to whatever is already in the box.

**Will I get more warnings at signing?** Fewer, and better ones. One check was running against an empty form and telling you to use a new-patient code for patients who were already established. That is fixed. What remains reflects something real in the documentation.

---

## What to expect in the first week

- **Debridement notes will flag missing elements**, tissue removed in particular, because until now there was nowhere to record it. That is a gap the policy asks for, not a software error.
- **Home visits without a necessity sentence will show the necessity item.**
- **Visits coded on medical decision-making will ask for your assessment narrative.** The old note filled that table from the billing code's own definition, which is exactly what a reviewer discounts.

---

## Where to get help

For questions about what a particular item is asking for, or whether something should be documented differently for your payer, contact your Medipyxis contact. If something in the note looks wrong for a real patient, say so — with the patient and the visit date — and it will be investigated.

<Compliance>
Medipyxis is documentation support software. It does not decide coverage, and it never blocks a clinician from signing a note. The criteria it references come from CMS manuals and your MAC's published policies.
</Compliance>

## Related

Auto-rendered from `related:` in frontmatter.
