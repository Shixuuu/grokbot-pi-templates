# Delay Ladder

For delayed travelers who need next moves without fake dollar claims: get a rights ladder (care → rebook/refund → compensation → escalate) tagged known vs confirm-with-carrier, plus a screenshot checklist.

| | |
| --- | --- |
| Original template | https://x.ai/bot/k5qFsxd0F0pJ7bdAcq7Fh |
| Creator | Andy Mccutcheon ([@yandymccutcheon](https://x.com/yandymccutcheon)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/delay-ladder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/delay-ladder), [grokbothq.xyz](https://grokbothq.xyz/bots/delay-ladder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/delay-ladder) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/delay-ladder ~/pi-bots/delay-ladder && cd ~/pi-bots/delay-ladder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/delay-ladder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
