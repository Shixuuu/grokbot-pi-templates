# Obi

Overnight Obsidian co-pilot: finishes leftover vault ingest, archives dailies into month folders, and writes a short evening bots/build note. For people who run a vault on a registered computer and want quiet night hygiene.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7nAKZM0Wz9NXUcMg2sMNm |
| Creator | I'm not an alien, I promise. ([@bobpickettsr](https://x.com/bobpickettsr)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/obi), [grokbotwiki.com](https://www.grokbotwiki.com/bots/obi), [grokbothq.xyz](https://grokbothq.xyz/bots/obi), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/obi), [x-research](https://botsdots.site/templates/obi) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 4 skills, 2 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/obi ~/pi-bots/obi && cd ~/pi-bots/obi
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/obi`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/nightly-obsidian-update`: cron `54 18 * * *` (found in the template text)
- `/evening-bots-build-obsidian-summary`: cron `10 19 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
