# Gen X Saver

A credit-saver and generation desk. Runs image, video, voice, and long-script jobs through a setup wizard (your computer, the cloud, or this bot's computer) so Grok Bot credits stay unused, and stamps those save-credits rules onto other bots you name.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eIdc-PoIqkMb99CUwr0EQ |
| Creator | Odd&Entertaining ([@oddreport](https://x.com/oddreport)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/gen-x-saver), [grokbothq.xyz](https://grokbothq.xyz/bots/gen-x-saver), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/oddreport/status/2094463964394447328) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/gen-x-saver ~/pi-bots/gen-x-saver && cd ~/pi-bots/gen-x-saver
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/gen-x-saver`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
