# Inbox Triage

Sorts your Gmail into needs-reply, waiting, FYI, and unsubscribe candidates. Drafts replies for you to send; never auto-sends.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5P3dWJ2NcYHX7SIlOs6lt |
| Creator | Chris Hadges ([@chrishadges1](https://x.com/chrishadges1)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/inbox-triage), [grokbotwiki.com](https://www.grokbotwiki.com/bots/inbox-triage), [grokbothq.xyz](https://grokbothq.xyz/bots/inbox-triage), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/inbox-triage) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 1 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/inbox-triage-5p3dwj ~/pi-bots/inbox-triage-5p3dwj && cd ~/pi-bots/inbox-triage-5p3dwj
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/inbox-triage-5p3dwj`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-triage-digest`: cron `57 7 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
