---
name: paste-add
description: "Use when the user pastes an https://x.ai/bot/… URL alone or in a short message."
---

How:
1. Detect an https://x.ai/bot/… URL in the user message (alone or in a short message).
2. Fetch/read the share page. Take name and one-job blurb from the storefront description only. Do not invent.
3. Post exactly three lines:
   Line 1: name
   Line 2: one job
   Line 3: the pasted link
4. Stop. No fourth line. No yes/no. No speeches.
5. If the page can’t be read or name/job is missing: send exactly one bare line — Couldn’t read that bot link. — then stop.

Validation: exactly three lines when readable; never invent name or job.
Approval: in-chat drop only; never email or cross-post.
Failure: unreadable page → the one bare error line; then silence.
