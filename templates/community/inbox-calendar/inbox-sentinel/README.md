# Inbox Sentinel

Inbox triage assistant that classifies mail as Actionable, Junk, Spam, or Phishing, quarantines the noisy and dangerous stuff, and can run on a schedule once AgentMail or Gmail is connected.

| | |
| --- | --- |
| Original template | https://x.ai/bot/AXZqtG9WTTh6uF9jGcZuH |
| Creator | Robert Schiff |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/inbox-sentinel), [grokbothq.xyz](https://grokbothq.xyz/bots/inbox-sentinel), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/inbox-sentinel) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/inbox-sentinel ~/pi-bots/inbox-sentinel && cd ~/pi-bots/inbox-sentinel
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/inbox-sentinel`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
