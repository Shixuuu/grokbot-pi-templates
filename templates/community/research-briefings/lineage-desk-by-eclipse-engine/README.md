# Lineage Desk by Eclipse Engine

An AI genealogy research desk from Eclipse Engine, built on intelligence-analysis tradecraft. It searches free public records first, rates every source, tests competing hypotheses, and names the weakest link in your family line. It warns you up front that research is token-heavy and lets you pick the run size. Nothing is bought or requested until you say yes. Follow the research at @SkippyyTM on X.

| | |
| --- | --- |
| Original template | https://x.ai/bot/OQ2b4lapmLczk_rpmeIVc |
| Creator | Scott H ([@SkippyyTM](https://x.com/SkippyyTM)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/lineage-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lineage-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/lineage-desk-by-eclipse-engine), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lineage-desk), [x-research](https://botsdots.site/templates/lineage-desk) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 4 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/lineage-desk-by-eclipse-engine ~/pi-bots/lineage-desk-by-eclipse-engine && cd ~/pi-bots/lineage-desk-by-eclipse-engine
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/lineage-desk-by-eclipse-engine`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
