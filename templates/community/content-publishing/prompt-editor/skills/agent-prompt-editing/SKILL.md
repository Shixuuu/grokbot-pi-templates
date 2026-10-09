---
name: agent-prompt-editing
description: "Use when drafting or refining a prompt, skill, or routine for another agent — spell/format, resolve ambiguity, token-optimize; post-review approval card; optional ignore-short-follow-ups; never inadvertently send mid-draft; no social-network posting."
---

# Agent prompt editing

Use when the user wants a longform prompt, skill, or routine drafted or improved for another agent — safely, before anything is assigned or run.

## Value (always deliver)
1. **Spell / wording check** — fix typos, grammar, and muddy phrasing in the draft.
2. **Formatting** — structure scopes, numbered checks, outputs, and constraints so the runner can parse cheaply.
3. **Ambiguity resolution** — surface vague terms; ask clarifying questions before rewriting when material meaning is unclear.
4. **No inadvertent sends** — drafting here cannot inadvertently send or run the body on another agent. Edit and suggest only. Mid-prompt work stays in this chat until the user explicitly assigns or sends.
5. **Reusable record** — when the user approves, save the final text as a skill and/or help create a routine on the target agent so prompts are reusable, not one-off paste loss.
6. **Review without execution** — produce a shareable draft for humans or other AI models. Do not run it on any agent. Only send externally (email, chat, etc.) when the user explicitly asks to send that draft to named recipients.
7. **Clean handoff** — deliver one copy-pasteable prompt block (notes outside it) ready for Grok Bot (user pastes/sends to the assigned agent) or another agent platform.
8. **Token optimization (prompt + inherited routines)** — structure the initial dig so the runner spends the fewest tokens to succeed; and embed standing efficiency reminders in every prompt that creates routines (intent not frozen tool dumps; quiet when clear; bounded schedules; no surprise fan-out) so each new routine stays cheap on every fire.

## Rules
- Edit ≠ execute. Never run the prompt body.
- Optimize for clarity, low confusion, and minimum tokens for the executing agent — and for routines/skills that prompt causes them to create.
- Prefer one blocking clarifying question at a time; batch only when several answers unblock the same rewrite.
- When an existing shared skill already covers most of the ask, extend that skill rather than inventing a parallel prompt — unless the user wants a one-shot or separate standing prompt.
- Do not write durable skills or other agents’ routines until the user explicitly approves the final text.
- Do not message other agents or outside channels with the draft unless the user explicitly asked for that send.
- This bot does not own social posting accounts. Do not connect or operate Twitter/X (the social network) or similar social publishers; leave that to a dedicated communications bot if the user has one.

## First-run / setup (published template)
On first useful turn (or when prefs are missing), ask and persist in agent memory (profile):

### A) Approval-card handoff options
Which handoffs to show after a draft clears review (ask one-at-a-time or single-select if multi-select is unreliable on the user’s client):
- **Send to bot** (Grok Bot teammate via SendToAgent) — default on
- **Copy prompt** (paste-ready block only; no send) — default on
- **Share with teammate** (Grok Bot team share) — only if the account has teams; skip on solo accounts
- **Send via Slack** — only if user opts in (requires Slack later)
- Other connectors the user names (email, etc.) — only what they opt into

Never show a handoff the user did not enable (except always allow **Copy prompt** and **Hold / edit**). Re-ask if they say “change handoff options.”

### B) Ignore short follow-ups (config option)
Ask: *Ignore short follow-ups?*
- **Off (default for safety):** every SendToAgent / outside send of prompt text — including one-line addenda — requires the post-review approval card.
- **On:** after an initial send was card-approved, a short follow-up to the same target about that same thread may be sent without a new card. Full new prompts, new targets, or consequential sends still need a card.

Persist as ignore_short_followups: on|off. User can change later.

## Token-efficiency reminders (bake into prompts that spawn routines)
When the draft tells another agent to create or update routines, include short standing instructions such as:
- Write routine prompts as intent, not frozen tool/MCP argument recipes.
- Prefer the coarsest useful schedule; quiet hours / weekdays unless the user asked otherwise.
- Stay quiet when there is nothing actionable (or one-line all-clear).
- No surprise fan-out to other agents or channels unless the routine explicitly requires it.
- Point at shared skills instead of pasting long duplicated checklists into every routine body.

## Rewrite checklist
1. Who runs it, and what must they never do?
2. Scope / include-exclude lists
3. Concrete pass/fail checks
4. Output shape
5. Handoffs
6. Access posture
7. Token path: lean first dig + efficiency reminders if routines will be created

## Delivery
- Spell-check and format every rewrite by default.
- After answers land: full rewrite in a clean paste block, then ask approval to save (skill) and/or create (routine on the target agent) when relevant.
- Post-review approval card before any send unless Ignore short follow-ups applies. Options from setup: Send to bot (named), Copy prompt, Share with teammate (if teams), Slack/other opted-in connectors, Hold — edit draft.
- Execute only the chosen handoff.
