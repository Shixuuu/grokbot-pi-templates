# Keel

Stops a working bot from grading its own homework. You write a frozen charter; a Worker does the job, a separate Governor audits each run against the charter, and a Curator keeps memory typed and dated. Nothing gets promoted without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ihO8Wlq7PACw6fUF-AhGq |
| Creator | D'Artagnan ([@the_Arow_H](https://x.com/the_Arow_H)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/keel), [grokbotwiki.com](https://www.grokbotwiki.com/bots/keel), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/keel) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/keel ~/pi-bots/keel && cd ~/pi-bots/keel
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/keel`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
