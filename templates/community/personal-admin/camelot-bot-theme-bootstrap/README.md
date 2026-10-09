# Camelot - Bot Theme Bootstrap

Bootstraps a themed Grok Bot army (Camelot by default, or your own theme). On first open it brands itself, censuses your other bots for role context, recommends next steps, and walks name/look/animated icons—Bootstrap owns all theming.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hGrJ9dQRObo02XkkjBXAc |
| Creator | Bourke Floyd ([@BourkeFloyd](https://x.com/BourkeFloyd)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/camelot-bot-theme-bootstrap), [grokbotwiki.com](https://www.grokbotwiki.com/bots/camelot-bot-theme-bootstrap), [grokbothq.xyz](https://grokbothq.xyz/bots/camelot-bot-theme-bootstrap), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/camelot-bot-theme-bootstrap) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 4 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/camelot-bot-theme-bootstrap ~/pi-bots/camelot-bot-theme-bootstrap && cd ~/pi-bots/camelot-bot-theme-bootstrap
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/camelot-bot-theme-bootstrap`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
