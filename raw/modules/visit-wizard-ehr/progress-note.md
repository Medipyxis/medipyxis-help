---
id: visit-wizard-ehr-progress-note
title: How your progress note is written
module: visit-wizard-ehr
audience: [clinician, billing, admin]
roles: [clinician, medical_director]
type: concept
estimated_minutes: 7
last_reviewed: 2026-10-29
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

## Why the note prints only what you documented

Medicare's Program Integrity Manual — the chapter that tells reviewers how to read a medical record — says three things that apply directly to your note:

- A reviewer judges the service by **your** documentation. Sentences the software wrote carry no weight.
- Reviewers are told to be suspicious of **template and cloned language**, meaning the same sentence appearing on every note.
- An attestation on its own — "I confirm this was medically necessary" — proves nothing.

See also [Note honesty guardrails](./note-honesty-guardrails.md).

The note cites only the two verified wound-care policies.

---

## What you will notice

### Blank means blank

| Where | What prints |
|---|---|
| **Allergies** | "Not documented." on each allergy item, until you record it |
| **Debridement** | "Not documented." on each detail you leave blank. The depth is whatever you recorded |
| **Pressure-injury risk** | "Prevention plan: Not documented." The Braden score and risk band print as documented |
| **Same-day visit and procedure** | "Separate E/M evaluation: Not documented." — unless you answer the checklist item |
| **Medical necessity** | The findings themselves, for example "Devitalized tissue present: Yes — slough 20% on left heel" |
| **Home visits** | Nothing, unless you typed a homebound justification — which prints exactly as you wrote it |
| **Patient education** | "Not documented." for the teaching method. There is no field in which to record a method |

The debridement section does not include **Pathology sent**, **Tissue present pre**, or **Post-procedure dressing**, because no screen in Medipyxis asks for them.

---

## The checklist before the note is created

When you stage billing codes, a line appears — for example **"3 documentation items open — Resolve."** Opening it shows one screen listing each item, what is missing, which wound it concerns, and a button that takes you straight there.

- **Items you can answer in a sentence** — why the visit was necessary, what you evaluated separately from the procedure, your assessment and decision-making — open a small box. It shows the facts already documented for this visit, offers an example you can adapt, and reminds you to put it in your own words. To dictate instead of typing, press the microphone, speak, and your words are added to the box.
- **Items that belong on a form** — missing debridement elements, or a billing code not linked to a wound — take you to the right screen, and to the right wound.
- **Nothing is required.** **Continue anyway** is always available.

### Continuing past an item that affects a claim

If an item affects what can be billed — a debridement missing the elements the policy requires, or a billed code with no documented wound — choosing **Continue anyway** asks you to tick a box confirming you understand. That is the only friction, and it is deliberate: the decision stays yours, and it goes on the record.

---

## Why the visit was necessary

Medicare's rule for home visits is that **each visit** needs its medical necessity documented, or a reviewer treats it as a social visit. Medipyxis asks once per visit: *"Why did this patient need you — not a nurse — today?"* Your answer prints in the note with a small label showing whether you typed it, dictated it, or adapted an example.

The question is **not** asked per wound. If a wound's necessity note is word-for-word identical to the last visit's, a separate item says so — identical text visit after visit is what a reviewer calls cloned documentation. Update it or clear it; either resolves the item.

---

## Preview before you sign

The review screen shows the actual PDF that will be stored, rather than a separate on-screen version of it. What you see is what gets signed. See [Sign Off](./sign-off.md) for the attestation step itself.

---

## Common questions

**Why is my note shorter on some visits?** Where fields were left blank, the note is shorter, and says so. A shorter honest note defends better than a longer one full of sentences you did not write.

**Can my signed note change?** No. The note you signed is a permanent file, and opening it from the patient's **Progress Notes** list shows you that exact file, unchanged.

The **Download Clinical Note** action builds a fresh provider copy from the visit's recorded data, following the rules on this page, so it can read differently from the version you signed. Your signed note is still the signed note; the fresh copy is a fresh copy.

**What if a signed note contains a sentence I did not write?** File an addendum naming the specific kind of sentence being corrected. The addendum reason list covers each kind — for example *Procedure tolerance was a template default* or *LCD citation was wrong (cited policy does not govern this service)*. See [Sign Off](./sign-off.md).

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
Medipyxis is documentation support software. It does not decide coverage, and it never blocks a clinician from signing a note. The criteria it references come from CMS manuals and your MAC's published policies.
</Compliance>

## Related

Auto-rendered from `related:` in frontmatter.
