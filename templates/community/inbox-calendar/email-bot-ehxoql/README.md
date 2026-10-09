# Email Bot

A friendly Gmail assistant that sends you a daily summary of the emails that actually matter and drafts replies for you to review and send.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Eh-OqlRNqTiMZcAqhwa5l |
| Creator | degen4lyfe_ ([@degen4lyfe_](https://x.com/degen4lyfe_)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/email-bot-ehoq), [grokbotwiki.com](https://www.grokbotwiki.com/bots/email-bot-ehoq), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/email-bot-ehoq) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/email-bot-ehxoql ~/pi-bots/email-bot-ehxoql && cd ~/pi-bots/email-bot-ehxoql
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/email-bot-ehxoql`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-email-summary`: cron `22 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
