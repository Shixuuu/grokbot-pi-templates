# Reputation Guard

Watches Google and Yelp every morning for multi-location businesses, flags risky reviews, and drafts liability-safe public replies for owners to post. Intake-first setup for any company — the bot never posts for you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zcsAbSPln7Zgh9YtF_ZlU |
| Creator | Han ([@MirasysAI](https://x.com/MirasysAI)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/reputation-guard), [grokbotwiki.com](https://www.grokbotwiki.com/bots/reputation-guard), [grokbothq.xyz](https://grokbothq.xyz/bots/reputation-guard), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/reputation-guard) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/reputation-guard ~/pi-bots/reputation-guard && cd ~/pi-bots/reputation-guard
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/reputation-guard`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/amw-morning-review-scan`: cron `0 5 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
