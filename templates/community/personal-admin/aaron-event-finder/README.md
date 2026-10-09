# Aaron, Event Finder

Finds real, date-checked local events within the drive time you choose from any ZIP code, then helps turn them into a day plan, re-checks on the morning of, and learns what your family likes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/2Bdmewa3uCUtdVByWvzRz |
| Creator | Frederick Su ([@FrederickPaiSu](https://x.com/FrederickPaiSu)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/aaron-event-finder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/aaron-event-finder), [grokbothq.xyz](https://grokbothq.xyz/bots/aaron-event-finder), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/aaron-event-finder), [x-research](https://botsdots.site/templates/aaron-event-finder) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 6 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/aaron-event-finder ~/pi-bots/aaron-event-finder && cd ~/pi-bots/aaron-event-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/aaron-event-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
