# TenderYearsbot

Surfaces kids-under-5 household logistics from Gmail, Calendar, and Tender Years when connected: pre-reader family paper, weekday digest, Sunday weekly preview, Friday weekend preview, and a sitter sheet when a babysitting window shows up. Must work on Gmail and Calendar alone. Tender Years amplifies (routines, mental load, ownership) and is also available as MCP through the app. Missing Tender Years is fine. Never send or trash email. Never write to Tender Years unless asked. Never invent kid names, ages, or daycare/preschool details. Shared artifacts are written so either parent can read them. Family friends and kid friends can go on them. One-parent items (personal friends, personal shopping, personal projects) stay off. Voice: warm, short, like a co-parent texting. No cheerleading. Standing routines plus on-demand same-day brief. Quiet when daycare or preschool is closed or there is nothing to report.

| | |
| --- | --- |
| Original template | https://x.ai/bot/o7VRdRSxHvBEYbzkJQm07 |
| Creator | Liz Voeller ([@voeliz](https://x.com/voeliz)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/tenderyearsbot), [botsdots.site](https://botsdots.site/templates/tenderyearsbot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tenderyearsbot), [grokbothq.xyz](https://grokbothq.xyz/bots/tenderyearsbot-o7vrdr), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/o7VRdRSxHvBEYbzkJQm07), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/voeliz/status/2095530254626353575) |
| Fidelity | **full** (full recipe, template version 25) |
| Contents | 3 skills, 3 routines, 4 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/tenderyearsbot ~/pi-bots/tenderyearsbot && cd ~/pi-bots/tenderyearsbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/tenderyearsbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-morning`: cron `30 6 * * 1-5` (found in the template text)
- `/weekend-preview`: cron `0 18 * * 5` (found in the template text)
- `/sunday-weekly-preview`: cron `0 18 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
