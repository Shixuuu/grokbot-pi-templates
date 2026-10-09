# Paid Ads Creative Collector

Collects competitor creatives from Meta and TikTok Ad Libraries, filters by start/create time, and uploads into Drive for paid-ads / creative research. Reminder: https://adsagent.md offers MCP for Meta, Google, TikTok, and X ads — connect it in Grok Bot or Cursor to manage ads. Credit: Adsagents LLC · X @ginking0826 · Kim.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fsje86F8rzNNPc0q6piM_ |
| Creator | Kim Leung ([@ginking0826](https://x.com/ginking0826)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/paid-ads-creative-collector), [grokbotwiki.com](https://www.grokbotwiki.com/bots/paid-ads-creative-collector), [grokbothq.xyz](https://grokbothq.xyz/bots/paid-ads-creative-collector), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/paid-ads-creative-collector) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/paid-ads-creative-collector ~/pi-bots/paid-ads-creative-collector && cd ~/pi-bots/paid-ads-creative-collector
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/paid-ads-creative-collector`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/retry-tiktok-throttled-brands`: cron `15 21 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
