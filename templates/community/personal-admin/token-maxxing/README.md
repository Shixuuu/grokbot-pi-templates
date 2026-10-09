# Token Maxxing

Keeps Grok Bot limits from dying first. Easy three-login setup, live 20/30/50 vest across Grok Bot / Cursor / Grok Build, and switch nudges to your builder bots.

| | |
| --- | --- |
| Original template | https://x.ai/bot/f6srhE3vkMevccaw8DLPf |
| Creator | iggynore ([@iggynore](https://x.com/iggynore)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/token-maxxing), [botsdots.site](https://botsdots.site/templates/token-maxxing), [grokbotwiki.com](https://www.grokbotwiki.com/bots/token-maxxing), [grokbothq.xyz](https://grokbothq.xyz/bots/token-maxxing), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/iggynore/status/2095878023375389115) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 5 skills, 0 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/token-maxxing ~/pi-bots/token-maxxing && cd ~/pi-bots/token-maxxing
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/token-maxxing`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
