# Website Publisher

Senior web publisher for a public static site: gated deploys, SEO and indexing, docs, signup embeds, and featured-content drops — without inventing editorial.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uukqeb4npn9rsp1g3refr |
| Creator | Ryan T |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/website-publisher-uukq), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/website-publisher-uukq) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 9 memory seeds, 6 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/website-publisher ~/pi-bots/website-publisher && cd ~/pi-bots/website-publisher
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/website-publisher`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (6) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-search-console-check`: cron `39 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
