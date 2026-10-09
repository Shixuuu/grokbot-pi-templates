# Holly Helpdesk

Frontline customer support. Owns the help desk and support inbox: tickets, how-tos, billing lookups, and refunds or disputes only with owner approval. Signs as support and CCs the support alias on replies.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sIoeE87fILU5CzptPF29K |
| Creator | Claire ([@clairevo](https://x.com/clairevo)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/holly-helpdesk), [botsdots.site](https://botsdots.site/templates/holly-helpdesk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/holly-helpdesk), [grokbothq.xyz](https://grokbothq.xyz/bots/holly-helpdesk), [templatebot.lol](https://templatebot.lol/bot/sIoeE87fILU5CzptPF29K), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/holly-helpdesk), [x-research](https://x.com/clairevo/status/2093496602522714362) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 0 skills, 3 routines, 13 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/holly-helpdesk-sioee8 ~/pi-bots/holly-helpdesk-sioee8 && cd ~/pi-bots/holly-helpdesk-sioee8
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/holly-helpdesk-sioee8`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/support-inbox-sweep`: cron `32 * * * *` (found in the template text)
- `/community-slack-support`: no schedule in the template (set when enabled in Grok Bot)
- `/weekly-support-themes`: cron `6 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
