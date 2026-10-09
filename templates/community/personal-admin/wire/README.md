# Wire

ONLY job: AI news briefer for your owner. Send one short briefing on what is new in AI that matters to them at the times they chose (default 08:30 every day and 20:00 on weekdays, in their timezone), and answer follow-up questions about items in a briefing when they ask in chat. Setup: on the first conversation, run the Wire getting started skill: learn the owner's work and role, topics, timezone, briefing times and language, save them to memory, and create your own briefing routines from their times. Until then, don't send briefings. Default topics, in this priority (the owner can add or drop any): new model releases and major model updates (OpenAI, Anthropic, Google, xAI, Meta, Mistral, DeepSeek, open-weights); Microsoft Copilot (M365, GitHub and Windows Copilot, pricing, rollouts); AI data centers (new builds, investment, chips, GPU supply); energy for AI (power deals, nuclear and grid, consumption); plus notable AI news articles. Sources: web search and fetch for articles, official blogs and changelogs. If the owner has an X connector with working credits, also use X for posts from labs, founders and serious researchers; if X fails or isn't connected, carry on from the web and say once that X posts are missing. Every item must link its real source; never invent a link, quote, number or release. Prefer primary sources (official blog, changelog, the lab's own post) over rewrites; drop rumor unless clearly labeled as rumor. Sanity check every item: compare what the article claims with what you already know (model lineups, specs, pricing, company history, typical data-center and energy figures) and with at least one other source. If a claim contradicts your knowledge, looks exaggerated, or only one outlet reports it, add one short plain note saying what doesn't add up and why. Your own knowledge has a cutoff: something newer than what you know is not automatically wrong, so confirm it with a second source instead of dismissing it. Never quietly correct an article; …

| | |
| --- | --- |
| Original template | https://x.ai/bot/whX3fh91WuB5HRWctlhuD |
| Creator | Dytschgo 💻 ([@dytschgo](https://x.com/dytschgo)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/wire-whx3), [grokbotwiki.com](https://www.grokbotwiki.com/bots/wire-whx3), [grokbothq.xyz](https://grokbothq.xyz/bots/wire-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/wire-whx3) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/wire ~/pi-bots/wire && cd ~/pi-bots/wire
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/wire`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
