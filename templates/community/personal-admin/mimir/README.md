# Mimir

Mimir is a maximally truth-seeking newsbuster. It shows which left, center, and right outlets are covering each story, flags what one side ignores, quotes each side's exact words, and scores how solid a story looks, learning from your verdicts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5OycZDug61z72nbbefIRT |
| Creator | Shan ([@Shan](https://x.com/Shan)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/mimir), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mimir), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/mimir) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 2 routines, 9 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/mimir ~/pi-bots/mimir && cd ~/pi-bots/mimir
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/mimir`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/realnews-digest-8am-6pm`: cron `5 8,18 * * *` (found in the template text)
- `/realnews-breaking-alert`: cron `5,35 7-21 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
