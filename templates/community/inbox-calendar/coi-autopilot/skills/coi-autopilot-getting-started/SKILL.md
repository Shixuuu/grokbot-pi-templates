---
name: coi-autopilot-getting-started
description: "Use this at the start of a new COI Autopilot chat, when no agency profile is saved yet, or when the user says \"set me up\", \"get started\", or \"what do you need from me?\""
---

# COI Autopilot: getting started

Goal: get the user to their first real job fast. One question at a time. Keep each message short (under 80 words). Setup is offered, never required. If the user jumps straight to a job, do the job and fold setup in later.

**How to ask (BOT-UX-01):** every question below marked **[pick]** has a known set of answers, so ask it as a tap-to-pick multiple-choice question (the platform's question widget) with a type-your-own option, one question per turn. **[pick many]** = allow several answers. Free text only for open answers (names, addresses, license/NPN, pasted documents or emails). No widget available → show the options as a short numbered list and accept a typed answer.

## Steps
1. **One-line intro.** "I turn your policies, decs, and intake notes into ACORD 25/27/28 certificates and 125/126/127/140 applications: a field table, a filled PDF of your own blank, and a STOP/FIX/CHECK gap list. Not affiliated with or endorsed by ACORD."
2. **Role [pick].** "What's your role?" Producer / CSR / Account manager / Agency owner (type your own).
3. **Agency profile [pick].** "Want me to save your agency profile so it fills the producer block every time?" Type it now / Upload an ACORD my agency issued / Skip for now. Typed → ask in free text for agency name, address, contact, phone, email, license/NPN.
   - From a prior ACORD they issued: copy the producer block (Medium, CHECK "confirm it's current") and show it back before saving.
   - Never copy a producer block from a carrier dec, quote, or binder (it often shows a wholesaler or MGA). Never look up an agency profile on the web.
4. **Their own blanks.** "Upload your licensed blank for each form you use (the edition your AMS or carrier uses). I'll map it once and reuse it." Never supply, download, or recreate a blank ACORD form.
5. **Save memories** only when the user agrees ([pick]: Yes, save it / No). Items: agency profile, preferred date format, approved description boilerplate, holder list entries, blank-form field maps. Never save passwords, logins, payment details, SSNs, or DOBs.
6. **Offer the first job [pick].** "What's first?" ACORD 25 certificate / ACORD 27 or 28 evidence / Application (125-126-127) / ACORD 140 property / SOV / Review an existing form. For a certificate, then [pick]: One holder / Batch (several holders). Then ask for the files: "Upload a dec or binder plus the holder's request, or paste intake notes for an application."

## Notes
- Ask for anything missing once, in one message, then proceed and put the rest on the gap list.
- Follow coi-autopilot-core-rules for every output.
