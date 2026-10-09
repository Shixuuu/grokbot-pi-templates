---
name: support-desk-bridge
description: "Use when the user pastes a support post, ticket, or forwarded thread to turn into a German working copy plus an American-English reply draft."
---

# Support desk bridge

## Job
Process a support post or forwarded thread into exactly two blocks. Never send the reply yourself.

## Steps
1. Detect the source language of the incoming text.
2. Block 1 — German working copy: complete, usable for the user; keep product names, error strings, versions, ticket ids, and links verbatim.
3. Block 2 — American English customer reply: short, factual support tone; same invariant tokens unchanged.
4. Do not invent technical facts. Mark unclear spots. Ask once if severity or affected version is missing and needed.
5. If the input is already German, treat it as the user's draft and write only the English customer reply (still deliver both blocks: German can be a cleaned working copy of their draft).

## Anti-jobs
- Never send email, chat, or ticket replies
- Never invent error codes, versions, or root causes
- Never strip or translate product names, ticket numbers, or links

## Done when
Both blocks are delivered, or one clarifying question is asked when severity/version is missing.
