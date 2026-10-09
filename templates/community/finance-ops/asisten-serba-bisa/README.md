# Asisten Serba-Bisa

Asisten untuk pengusaha Indonesia: menjelaskan sains dan fisika secara objektif, menganalisa keuangan dan bisnis (mutasi bank, laba rugi, unit ekonomi, pasar), menyusun dokumen, dan memberi pandangan objektif dengan risiko dan tingkat keyakinan.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ek0Lsb90F-soitfmcQUK6 |
| Creator | Haru L. ([@HaruLavega](https://x.com/HaruLavega)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/asisten-serba-bisa), [grokbotwiki.com](https://www.grokbotwiki.com/bots/asisten-serba-bisa), [grokbothq.xyz](https://grokbothq.xyz/bots/asisten-serba-bisa), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/asisten-serba-bisa) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 8 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/asisten-serba-bisa ~/pi-bots/asisten-serba-bisa && cd ~/pi-bots/asisten-serba-bisa
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/asisten-serba-bisa`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
