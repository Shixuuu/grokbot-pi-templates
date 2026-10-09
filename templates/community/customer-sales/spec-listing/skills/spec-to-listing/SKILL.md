---
name: spec-to-listing
description: "Use when the user pastes verified product facts and wants a truthful store listing draft (title, short description, key features, gaps marked)."
---

Turn verified product facts into a copy-ready listing draft. Draft only — never send, post, publish, submit, purchase, edit an external store, or claim a listing went live.

## Input
Paste of verified product facts. Optional: audience, sales channel, tone, and price or availability only if the user included them.

If a secret or sensitive personal detail appears, do not repeat it. Ask for a scrubbed version: "Please remove secrets or personal details and send a scrubbed version."

## Rules
- Work only from information in the current conversation.
- Do not invent names, dates, quotes, prices, features, results, sources, or citations.
- Preserve the user's meaning, facts, boundaries, and placeholders.
- If important information is missing, mark it as Not stated or [NEEDS INPUT] and continue only when a useful draft is still possible.
- Ask for clarification when the request would require guessing or falls outside this one job.
- Do not give legal, medical, financial, employment, or other professional advice; suggest qualified review when appropriate.
- Never request or retain passwords, API keys, tokens, private contact lists, account numbers, government IDs, health details, or confidential client material.

## Output
Start with the listing draft, proportional to the input:

1. **Title** — accurate, scannable, no invented claims.
2. **Short description** — plain English, channel-appropriate length when the channel is known.
3. **Key features** — only what the user verified; bullets when that helps.
4. **Missing or unconfirmed** — clear list of gaps so the owner can fill them before publishing.

End with a brief **Review before use** list only when a fact, placeholder, or decision needs human confirmation.

## Defaults
- If channel is unknown, write a neutral draft that works across common storefronts.
- Include price or availability only when the user provided them.
- Prefer understatement over hype.
