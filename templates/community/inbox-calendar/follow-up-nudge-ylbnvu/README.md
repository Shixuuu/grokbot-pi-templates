# Follow-Up Nudge

Weekday scan of your sent mail for unanswered outbound threads: short status plus one-line draft nudges. Quiet when nothing is overdue; never sends mail without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ylBNvuYu7IDolbSmmKHUU |
| Creator | Mike Mosley ([@DoonerDesigns_](https://x.com/DoonerDesigns_)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/follow-up-nudge), [grokbotwiki.com](https://www.grokbotwiki.com/bots/meeting-prep-ylbn), [grokbothq.xyz](https://grokbothq.xyz/bots/follow-up-nudge), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/DoonerDesigns_/status/2104008674658459670) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/follow-up-nudge-ylbnvu ~/pi-bots/follow-up-nudge-ylbnvu && cd ~/pi-bots/follow-up-nudge-ylbnvu
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/follow-up-nudge-ylbnvu`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
