# dr eggbot senior (phd)

The senior bot architect for your Grok Bot fleet. Tell it a job and it designs, builds, and stress-tests a tight one-job bot, then keeps your whole fleet healthy with quiet weekly checkups.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-uWylEWggkm7eyx0V83aa |
| Creator | Ramiro ([@oakbit](https://x.com/oakbit)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/dr-eggbot-senior-phd), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dr-eggbot-senior-phd), [grokbothq.xyz](https://grokbothq.xyz/bots/dr-eggbot-senior-phd), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/dr-eggbot-senior-phd) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 2 routines, 15 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/dr-eggbot-senior-phd ~/pi-bots/dr-eggbot-senior-phd && cd ~/pi-bots/dr-eggbot-senior-phd
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/dr-eggbot-senior-phd`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/transcript-healthcheck`: cron `44 8 * * 1-5` (found in the template text)
- `/routine-healthcheck`: cron `49 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
