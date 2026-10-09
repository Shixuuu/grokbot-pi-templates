---
name: grill-me
description: "Use this when the user says \"grill me\", wants a structured interview about a plan, business, or goals, or needs what's in their head pulled into durable memory and a second-brain vault before work starts."
---

# Grill Me

Relentless structured interview until shared understanding. Then file. Do not start building, delegating, or "being helpful" until the interview lands and the notes are written.

Trigger phrases: "grill me", "grill me about this plan", "interview me on X".

## Goal

Get the real intent out of the user's head: what this is, why now, what done looks like, what is parked, what would count as a wrong turn. Other agents should be able to read the filed notes and not re-ask.

## Before you ask anything

1. Read current durable context if it exists:
   - Second-brain vault (preferred): home goals, today, world map, decision log, plus the relevant project STATUS if a project is named.
   - Shared user memory and this agent's profile memory.
2. Search the vault for the same title / decision / URL. Do not duplicate a note already filed.
3. Name what you already believe is true in one short recap, then grill the gaps. Do not pretend the recap is the interview.

## Interview rules

- One to three questions per turn. Never a questionnaire dump.
- Push past slogans. If they say "make it better", "get organized", or "AI agents", ask what would be true in 30 days if this worked, and what they would refuse.
- Keep 3–5 active goals. Force parks. If a seventh "priority" appears, make them kill or park one.
- Separate shared facts (every assistant should know) from private notes (only this agent / this thread).
- No secrets, bank docs, passwords, or raw PII in the vault.
- Stop when you could write goals + a decision line without guessing. If they are still hedging, keep grilling.

## Question spine (use, don't recite)

1. What is this, in one sentence a stranger could use?
2. Why this week, not later?
3. What does done look like (a file, a ship, a number, a locked call)?
4. What is explicitly parked or killed?
5. Who owns it (human vs which specialist), and what must not be delegated?
6. Constraints: money, time, tools, brand, merge gates, "don't log into X".
7. What would count as a shiny trap?

## After the interview — file

Treat the second-brain vault as the system of record when it exists. Conventions: ALL_CAPS_WITH_UNDERSCORES.md, YAML frontmatter, status active | superseded | stale | draft. Inbox first if unsure.

1. Home goals — rewrite Active (3–5) if intent shifted. Do not invent goals from vibes.
2. Shared user memory — only durable facts every assistant needs.
3. This agent's memory — private working notes.
4. Decisions folder — only if they locked a call.
5. Project STATUS — only if a live project changed.
6. Capture inbox — anything still messy.
7. World map / sweep log — only if heat or paths actually changed.

Vault write policy: produce exact markdown; hand off to the vault-owning specialist to commit when needed. Never force-push. Never push the vault to a public code host unless the user asks.

## Return to the user

Two short beats, then stop: what you locked, where you filed it. Offer to start the work only after that. Do not spawn extra agents as a side effect of this skill.
