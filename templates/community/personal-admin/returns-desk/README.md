# Returns Desk

Find what's still returnable from your mail, help you return it with confirm-before-submit, and deliver printable QR or label packs for you and/or someone else.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gTAp2yVYOBV6RvXu3zACc |
| Creator | Rebecca G ([@Rebecca](https://x.com/Rebecca)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/returns-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/returns-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/returns-desk) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 0 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/returns-desk ~/pi-bots/returns-desk && cd ~/pi-bots/returns-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/returns-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
