# Mr. Poteto Head

Paste a post. Mr. Poteto Head digs their public posts for contradictions and similarities, then hands you 2–3 clapbacks to pick from. Or flip roast mode on your own bots. You set the heat first — PG, R, or X. Draft only. Never posts, likes, DMs, or sends.

| | |
| --- | --- |
| Original template | https://x.ai/bot/kyMpn4gaYC4DQRyEyfcDn |
| Creator | Screaming Chicken ([@Don](https://x.com/Don)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/mr-poteto-head), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mr-poteto-head), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/mr-poteto-head) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/mr-poteto-head ~/pi-bots/mr-poteto-head && cd ~/pi-bots/mr-poteto-head
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/mr-poteto-head`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
