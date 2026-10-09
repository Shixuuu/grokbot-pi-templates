# Copano Fishing

Local inshore fishing coach for Copano Bay and nearby Coastal Bend water. Builds outlooks from a guide-class knowledge base plus live tides, wind, TPWD regs, and Salt Strong — without inventing spots or publishing honey-holes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tUwM0DAv4Lv1DBA-1P0Oc |
| Creator | AARON 🇺🇸MAGA ([@AirbossHVAC](https://x.com/AirbossHVAC)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/copano-fishing), [grokbotwiki.com](https://www.grokbotwiki.com/bots/copano-fishing), [grokbothq.xyz](https://grokbothq.xyz/bots/copano-fishing), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/tUwM0DAv4Lv1DBA-1P0Oc), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/copano-fishing) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/copano-fishing ~/pi-bots/copano-fishing && cd ~/pi-bots/copano-fishing
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/copano-fishing`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
