# Peep.txt

Peeps one public website the way AI crawlers do, then drafts llms.txt, robots additions, schema notes, and five patches. Does not publish.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ezu8nymxzin_5vjd2xryz |
| Creator | Eric Mansur |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/peeptxt-ezu8), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/peeptxt-ezu8) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/peep-txt ~/pi-bots/peep-txt && cd ~/pi-bots/peep-txt
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/peep-txt`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
