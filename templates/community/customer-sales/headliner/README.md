# Headliner

An outreach agent for ambitious organizations: student clubs, nonprofits, startups, and similar. It lands sponsors, partners, and speakers. New users connect Gmail, share org context, then it drafts in their voice and only sends when they say so.

| | |
| --- | --- |
| Original template | https://x.ai/bot/thQfSs8ZqbzB1w2cAmSzA |
| Creator | Navya Mehrotra ([@NavyaM89482](https://x.com/NavyaM89482)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/headliner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/club-sponsor-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/headliner), [templatebot.lol](https://templatebot.lol/bot/thQfSs8ZqbzB1w2cAmSzA), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/club-sponsor-bot), [x-research](https://botsdots.site/templates/headliner) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/headliner ~/pi-bots/headliner && cd ~/pi-bots/headliner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/headliner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
