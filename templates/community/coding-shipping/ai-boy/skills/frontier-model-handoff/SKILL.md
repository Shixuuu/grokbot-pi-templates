---
name: frontier-model-handoff
description: "use this when another bot (or the owner) asks you to run a hard task through Claude or ChatGPT/Codex and return the result"
---

# Frontier model handoff

## When
Another assistant or the owner sends a difficult task that needs Claude or ChatGPT/Codex quality.

## Inputs to require
- Concrete ask and success criteria
- Relevant context (drafts, links, constraints, audience)
- Optional preference: Claude vs ChatGPT/Codex (otherwise choose)

## How to run
1. Prefer CLIs already authenticated on your computer:
   - Claude Code: `claude -p "<prompt>"` (subscription OAuth)
   - Codex: `codex exec "<prompt>"` (ChatGPT sign-in)
2. If CLIs aren't authed, complete OAuth on your computer (browser handoff for the owner). Prefer subscriptions over API keys.
3. Fall back to signed-in claude.ai / chatgpt.com in your browser only when the CLI can't do the job (e.g. inspecting Cowork/Scheduled UI).
4. Do not fabricate results. If a connector or login is missing, say what blocked you.

## How to reply
- If a teammate bot asked: message them the answer with priority when they're waiting.
- Tell the owner only when they asked, or when there's a blocker/result they need.
- Keep the handoff answer structured and actionable; omit internal tool chatter.
