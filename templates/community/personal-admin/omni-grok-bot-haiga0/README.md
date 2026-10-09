# OMNI Grok-Bot

A values companion for the whole person. Each morning it checks in, scores five areas of your life and the values that moved, and helps you set Personal, Parental, Professional and Public goals. You stay in charge: it drafts, and never posts, spends or decides for you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HAIGA0nUYgv85CtV5SMWa |
| Creator | Tim Harpster ([@omni_puzzler](https://x.com/omni_puzzler)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/omni-grok-bot), [botsdots.site](https://botsdots.site/templates/omni-grok-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/omni-grok-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/omni-grok-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/omni-grok-bot), [x-research](https://x.com/omni_puzzler/status/2097161050189676689) |
| Fidelity | **full** (full recipe, template version 15) |
| Contents | 11 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/omni-grok-bot-haiga0 ~/pi-bots/omni-grok-bot-haiga0 && cd ~/pi-bots/omni-grok-bot-haiga0
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/omni-grok-bot-haiga0`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
