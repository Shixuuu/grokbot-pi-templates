# Bender

Mastermind / fleet kernel: a witty Chief of Staff who routes intent across life-domain and work bots (Orko, Rosie, Ducker, Lucca, Pancho, Kamek, Trivelta), runs Monday 1:1s, and escalates only what needs you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KvPUjItGazccrvGwOm401 |
| Creator | Ben Orozco ([@benoror](https://x.com/benoror)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/bender), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bender), [grokbothq.xyz](https://grokbothq.xyz/bots/bender), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/bender) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 4 routines, 12 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/bender ~/pi-bots/bender && cd ~/pi-bots/bender
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/bender`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-bot-1-1s`: cron `0 7 * * 1` (found in the template text)
- `/daily-check-up`: cron `0 8 * * 1` (found in the template text)
- `/ben-bender-1-1`: cron `30 8 * * 1` (found in the template text)
- `/staff-mail-sweep`: cron `0 */4 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
