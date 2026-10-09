---
name: grok-bot-to-buzz
description: "use this when helping someone turn a Grok Bot into a Buzz agent via Grok Build for teammates in channels"
---

# Grok Bot → Buzz agent

## Why
Grok Bot is great as your personal operator. Buzz is where you put **shareable** agents into channels so employees and teammates can @mention them without living in your Grok chat.

## Pattern
1. Design the job in Grok Bot first (one job, anti-jobs, voice) — or use an existing bot.
2. Export or copy the persona into Buzz instructions.md (generalize private names/keys).
3. Stand up a headless agent with **Grok Build** via buzz-acp on the always-on host (see **buzz-first-agent**). Grok Build is the preferred path when the team already lives in Grok.
4. Put the bot only in channels that match its access (e.g. help desk in open Help; finance bot only in private company channels).
5. Optional: keep a Grok Bot as the **operator** that creates channels, restarts units, and drafts instructions — while Buzz agents (Grok Build) serve the team day-to-day.

## Do / don’t
- Do: invite teammates to the right channels; teach @mention.
- Do: one bot, many channels when each channel scopes secrets/instructions differently.
- Don’t: put API tokens in chat; don’t run sensitive bots with respond-to=anyone on open channels without tool lockdown.
- Don’t: expect Buzz Workflows YAML to replace full n8n graphs — use workflows for schedule/approve/message; let agents do the smart work.
