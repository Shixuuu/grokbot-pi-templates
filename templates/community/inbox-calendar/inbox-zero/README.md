# Inbox Zero

Weekday Gmail inbox-zero assistant. Archives noise, files notes, receipts, and docs, and leaves only action mail unread.

| | |
| --- | --- |
| Original template | https://x.ai/bot/h5i1TCuYEL2mVtMbQtW98 |
| Creator | LD Acosta ([@zapnocode](https://x.com/zapnocode)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/inbox-zero), [grokbotwiki.com](https://www.grokbotwiki.com/bots/inbox-zero), [grokbothq.xyz](https://grokbothq.xyz/bots/inbox-zero), [templatebot.lol](https://templatebot.lol/bot/h5i1TCuYEL2mVtMbQtW98), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/inbox-zero), [x-research](https://x.com/zapnocode/status/2093493728660865073) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/inbox-zero ~/pi-bots/inbox-zero && cd ~/pi-bots/inbox-zero
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/inbox-zero`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-inbox-zero`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
