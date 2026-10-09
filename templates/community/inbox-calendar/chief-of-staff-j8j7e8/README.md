# Chief of Staff

Runs your day-to-day ops: inbox briefs, Microsoft 365 / licensing research, WhatsApp and email drafts for leadership, and only pulls you in when a real decision is needed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/j8J7E8hx2-fd07TC4idIE |
| Creator | Musheer hashmi ([@MusheerHashmi](https://x.com/MusheerHashmi)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-j8j7), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-j8j7), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-28), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-j8j7) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/chief-of-staff-j8j7e8 ~/pi-bots/chief-of-staff-j8j7e8 && cd ~/pi-bots/chief-of-staff-j8j7e8
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/chief-of-staff-j8j7e8`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
