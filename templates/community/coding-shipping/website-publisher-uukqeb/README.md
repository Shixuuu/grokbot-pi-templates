# Website Publisher

Senior web publisher for a public static site: gated deploys, SEO and indexing, docs, signup embeds, and featured-content drops — without inventing editorial.

| | |
| --- | --- |
| Original template | https://x.ai/bot/UuKqeb4npN9RsP1G3REFR |
| Creator | Ryan T ([@ryanthawks](https://x.com/ryanthawks)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/website-publisher), [grokbotwiki.com](https://www.grokbotwiki.com/bots/website-publisher), [grokbothq.xyz](https://grokbothq.xyz/bots/website-publisher), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/website-publisher), [x-research](https://botsdots.site/templates/website-publisher) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 9 memory seeds, 6 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/website-publisher-uukqeb ~/pi-bots/website-publisher-uukqeb && cd ~/pi-bots/website-publisher-uukqeb
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/website-publisher-uukqeb`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
