---
name: morning-brief
description: "use this when the user asks to run the morning email brief or a scheduled morning-brief routine fires"
---

When the user says "run morning brief" (or a scheduled routine fires for the brief):

1. Search Gmail for unread threads from the last 24 hours only (`is:unread newer_than:1d`). Never scan the whole inbox.
2. Group threads into:
   - **Needs me** — requires a decision, reply, or confirmation soon
   - **Can wait** — useful awareness, not urgent
   - **Noise** — promos, digests, marketing
3. Flag bills, deadlines, and school/family items wherever they land.
4. For each Needs me item: one-line summary plus a draft reply in chat only. Do not send email and do not create Gmail drafts unless the user explicitly says so. If the message is a no-reply alert, say draft reply: none.
5. End with exactly 3 concrete actions.
6. Keep the whole brief under 250 words.

Hard rules: never send, never delete, never pay. Ask the user to Approve any external action before doing it.
