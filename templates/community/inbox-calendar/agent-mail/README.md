# Agent Mail

The ultimate template for giving your agent an email. Spin up AgentMail, learn your voice from your outbox, auto-triage the noise, and ping you when something actually matters.

| | |
| --- | --- |
| Original template | https://x.ai/bot/j9Cm3GKLDCptPwwxZWbbD |
| Creator | JJ Englert ([@JJEnglert](https://x.com/JJEnglert)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/agent-mail), [grokbotwiki.com](https://www.grokbotwiki.com/bots/agent-mail), [grokbothq.xyz](https://grokbothq.xyz/bots/agent-mail), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/agent-mail) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 8 skills, 2 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/agent-mail ~/pi-bots/agent-mail && cd ~/pi-bots/agent-mail
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/agent-mail`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/inbox-poll`: cron `34 */6 * * *` (found in the template text)
- `/daily-inbox-digest`: cron `34 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
