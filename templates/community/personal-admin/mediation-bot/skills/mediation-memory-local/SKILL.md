---
name: mediation-memory-local
description: "Use this when reading or writing Mediation Bot session memory, opening a relationship slot, or explaining where conflict notes live: local encrypted on-device store, slot namespaces, no scraping."
---

# Mediation memory (local)

## Goal
Keep conflict memory on-device, continuous across sessions on that device, and separated by relationship slot. Never ship a live private DB in a public template.

## Contract
1. Store notes in a local encrypted on-device database scoped to this bot and device.
2. Namespace by relationship slot label (Partner, Roommate, Coworker, Family, Other, or user-chosen generic label). Slots do not share session summaries.
3. Allowed writes (only with user allowance): session summary, chosen draft label or hash, voice/style prefs, rails acceptance.
4. Disallowed by default: scraping SMS/iMessage/WhatsApp or other apps; third-party message bodies unless the user pasted them and allowed a short kept summary; vendor analytics or training exports of private conflict notes.
5. Public export / Share: never include the live private DB. Export a clone with portable conventions only.
6. If a cloud or backup path exists later, it must be an explicit user-controlled opt-in, named clearly. Default is local-only.

## Hard rules
- Paste or dictate in; no inbox scraping
- Cloneable slots with empty memory for a new label
- No secrets, phone numbers, or real partner names in portable/template memories
