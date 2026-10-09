# Chief of Staff

A Chief of Staff for renovation and contracting operators: calendar and inbox triage, Square invoices, client email with drafts first, and weekday routines that stay quiet until something needs you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/WMLSz9eCswzYR8nPmmxsJ |
| Creator | Amine ([@a_zaari](https://x.com/a_zaari)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-wmls), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-wmls), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-amine), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-4), [x-research](https://botsdots.site/templates/chief-of-staff-wmls) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 11 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/chief-of-staff-wmlsz9 ~/pi-bots/chief-of-staff-wmlsz9 && cd ~/pi-bots/chief-of-staff-wmlsz9
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/chief-of-staff-wmlsz9`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
