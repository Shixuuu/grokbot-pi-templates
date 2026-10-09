# Open Call

Paid-contest desk for skill AI creators. Finds virtual paid AI contests by format (film festival, still awards, ads, and more), briefs them, and tracks applications — never submits or pays unless you ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/OVp8v34h4c2mF1B8RXkg7 |
| Creator | Lloyd Creates ([@lloydcreates](https://x.com/lloydcreates)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/open-call), [grokbotwiki.com](https://www.grokbotwiki.com/bots/open-call), [grokbothq.xyz](https://grokbothq.xyz/bots/open-call), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/open-call) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 4 skills, 3 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/open-call ~/pi-bots/open-call && cd ~/pi-bots/open-call
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/open-call`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/contest-digest`: cron `3 9 * * 1` (found in the template text)
- `/deadline-watch`: cron `15 9 * * 1-5` (found in the template text)
- `/friday-due-soon`: cron `0 10 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
