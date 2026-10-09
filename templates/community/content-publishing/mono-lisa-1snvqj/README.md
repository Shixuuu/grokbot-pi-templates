# Mono Lisa

Daily product design partner: turns an Amplitude cliff into a first-principles Linear ticket with an inline cliff chart plus three annotated Paper designs, then recommends one for founder approval before engineering.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1SnvqJd1RMwYsWdwh8kYI |
| Creator | Felix Lee ([@felixleezd](https://x.com/felixleezd)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/mono-lisa), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mono-lisa), [grokbothq.xyz](https://grokbothq.xyz/bots/mono-lisa), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/mono-lisa), [x-research](https://botsdots.site/templates/mono-lisa) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 2 skills, 2 routines, 7 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/mono-lisa-1snvqj ~/pi-bots/mono-lisa-1snvqj && cd ~/pi-bots/mono-lisa-1snvqj
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/mono-lisa-1snvqj`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monday-design-loop`: cron `0 7 * * 1-5` (found in the template text)
- `/morning-design-clear`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
