# Gen Saver Hermes

A credit-saver generation desk for people who make pictures, video, voice, and long scripts. It runs those jobs through local Hermes or Grok Build instead of Grok Bot credits, and can stamp the same save-credits rules onto other bots.

| | |
| --- | --- |
| Original template | https://x.ai/bot/UfcXTzGb6_OH8ekqFlZpF |
| Creator | Odd&Entertaining |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/gen-saver-hermes), [grokbothq.xyz](https://grokbothq.xyz/bots/gen-saver-hermes), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/gen-saver-hermes) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/gen-saver-hermes ~/pi-bots/gen-saver-hermes && cd ~/pi-bots/gen-saver-hermes
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/gen-saver-hermes`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
