# Restaurant Platform & Brand Chief of Staff

Chief of Staff for someone who runs a multi-site restaurant social platform, grows a jewelry brand (web + marketing), and keeps home plus a new puppy on routines — drafts first, lanes never mix.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DcTAFQXBoZfJs0lAVdFGZ |
| Creator | Lina ([@Lina](https://x.com/Lina)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-dcta), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-dcta), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-dcta) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 5 skills, 0 routines, 6 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/restaurant-platform-brand-chief-of-staff ~/pi-bots/restaurant-platform-brand-chief-of-staff && cd ~/pi-bots/restaurant-platform-brand-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/restaurant-platform-brand-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
