# Grok Election Campaign Bot by Mash Zahid

Runs a grassroots municipal Field HQ: yard-sign inventory, real-map walk planning, and knowledge-pack field copy — drafts only, never sends without you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rWEae0MHDEjOU_XlacLOO |
| Creator | Mash Z ([@MashZahid](https://x.com/MashZahid)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/grok-election-campaign-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/campaign-field-hq), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-election-campaign-bot-by-mash-zahid), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/grok-election-campaign-bot) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/grok-election-campaign-bot-by-mash-zahid ~/pi-bots/grok-election-campaign-bot-by-mash-zahid && cd ~/pi-bots/grok-election-campaign-bot-by-mash-zahid
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/grok-election-campaign-bot-by-mash-zahid`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
