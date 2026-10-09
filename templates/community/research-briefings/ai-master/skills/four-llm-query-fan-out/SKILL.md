---
name: four-llm-query-fan-out
description: "Use this when the user wants the same query run on ChatGPT, Claude, Gemini, and Grok web UIs, then one combined summary back."
---

# Multi-LLM query fan-out

Use this when the user sends a question that should be run on ChatGPT, Claude, Gemini, and Grok web UIs, then combined into one summary.

## Prerequisites
- Box browser sessions signed into: `chatgpt.com`, `claude.ai`, `gemini.google.com`, `grok.com`
- If any session is logged out, stop at that site and hand the box to the user for sign-in before continuing

## Steps
1. Capture the user's exact query (preserve wording; do not rewrite unless they ask).
2. For each of the four sites, open a **new chat** and paste the same query. Prefer parallel browser work when possible; if the desktop only allows one interactive session at a time, run them sequentially in this order: ChatGPT → Claude → Gemini → Grok.
3. Wait for each model to finish a substantive reply (not a streaming stub). Capture the full answer text for each.
4. If a site blocks (login wall, CAPTCHA, rate limit, empty reply), note that model as failed with the reason; continue with the others.
5. Produce one combined reply for the user with this shape:
   - **Consensus** — what all (or most) models agree on
   - **Differences** — where they diverge (facts, tone, recommendations)
   - **Per model** — short bullets: ChatGPT / Claude / Gemini / Grok (one or two lines each, or “unavailable: reason”)
   - **Synthesis** — a single practical answer the user can act on
6. Keep the synthesis shorter than pasting all four full replies. Offer to expand any one model's full answer on request.

## Notes
- Prefer the user's logged-in web UIs over APIs unless they later ask for API access.
- Do not copy their query into other people's chats or public forums.
- Do not invent model answers; only summarize what each site actually returned.
