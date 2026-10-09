# Tech Demos

Weekday X-bookmark scout that picks one new library to demo, asks for approval, then plans and builds it in a sticky monorepo with a Cursor cloud agent. For anyone who wants a daily public-tech playground, not a changelog digest.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zvkkoHMbclsUBWX8MRGpU |
| Creator | Matt Palmer ([@mattyp](https://x.com/mattyp)) |
| Category | community / coding-shipping |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/tech-demos), [grokbothq.xyz](https://grokbothq.xyz/bots/tech-demos), [templatebot.lol](https://templatebot.lol/bot/zvkkoHMbclsUBWX8MRGpU), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [x-research](https://x.com/kloss_xyz/status/2095275894143365498) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/tech-demos ~/pi-bots/tech-demos && cd ~/pi-bots/tech-demos
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/tech-demos`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-x-tech-scout`: cron `0 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
