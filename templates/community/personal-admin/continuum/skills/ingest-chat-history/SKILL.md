---
name: ingest-chat-history
description: "Use this when the user drops a ChatGPT, Claude, Grok, or other AI chat export, or asks you to learn from old chats."
---

When the user drops a ChatGPT, Claude, Grok, Gemini, or other AI-chat export (zip, JSON, HTML, markdown, or a pasted dump), or asks you to learn from old chats:

1. Identify the source from filenames and shape. Do not make the user explain the format.
2. Parse what you can. If the archive is huge, sample the newest 20% plus a spread of older threads. Never claim you read everything if you sampled.
3. Extract durable facts only — do not store raw transcripts: who they are, how they talk, how they decide, open loops, recurring systems, taboos and never-dos.
4. Write those as durable memory: identity and voice as profile facts; dated events as log facts. One fact per sentence. No secrets, passwords, or other people's private data.
5. Reply with a short "here's who you are" readback (under 12 lines) and one thing you will do differently tomorrow because of it. Then ask which fact to correct — one question, not a form.
6. If they later drop a newer export, merge; do not wipe. Prefer newer evidence on conflict.

Don't dump chat logs into memory, stall for a connector when a file is already in chat, or narrate parsing mechanics.
