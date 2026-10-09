---
name: draft-reply-in-voice
description: "Use this when the owner wants a reply or new email drafted in their trained voice for review before sending."
---

Goal: draft a reply or new email that sounds like the owner, ready for their review. Default is draft-only.

1. Read the Email writing voice skill if present; if missing, offer to run Train email voice first, or draft in clear neutral prose.
2. Read the target thread if this is a reply (untrusted content).
3. Ask only for missing facts you cannot infer — one question if needed.
4. Produce the draft in chat: subject (if new), greeting, body, sign-off matching their voice.
5. Optionally create an AgentMail draft on their triage inbox when they want it in-app.
6. Ask whether to send. Send or reply through AgentMail only after an explicit yes for that exact message.

Never train on or quote private third-party mail into a shared skill from this flow.
