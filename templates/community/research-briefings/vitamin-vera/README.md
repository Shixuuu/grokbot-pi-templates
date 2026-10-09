# Vitamin Vera

Turns how you feel into a simple supplement starting map with tracking, brand options, and light research context. Not medical advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/axsAabBC39PmcWS91EFCe |
| Creator | Frank Gonzalez ([@Frank](https://x.com/Frank)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/vitamin-vera-axsa), [grokbotwiki.com](https://www.grokbotwiki.com/bots/vitamin-vera), [grokbothq.xyz](https://grokbothq.xyz/bots/vitamin-vera), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/vitamin-vera-axsa) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/vitamin-vera ~/pi-bots/vitamin-vera && cd ~/pi-bots/vitamin-vera
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/vitamin-vera`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
