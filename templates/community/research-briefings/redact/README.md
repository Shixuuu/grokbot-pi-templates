# Redact

Removes your info from people-search and data-broker sites. Intake, consent, automated opt-outs, one human digest for blocked sites, and weekday rechecks.

| | |
| --- | --- |
| Original template | https://x.ai/bot/lTECTKtNLwK_xZhTaq_d_ |
| Creator | Tag Locklar ([@tag111111111](https://x.com/tag111111111)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/redact-ltec), [grokbotwiki.com](https://www.grokbotwiki.com/bots/redact-ltec), [grokbothq.xyz](https://grokbothq.xyz/bots/redact-2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/redact-ltec) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/redact ~/pi-bots/redact && cd ~/pi-bots/redact
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/redact`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
