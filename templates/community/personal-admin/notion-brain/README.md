# Notion Brain

Rent the AI, own the memory. Interviews you once, saves your personal and work profile to your own Notion, then only saves new things when you ask, so any AI you use can share the same memory.

| | |
| --- | --- |
| Original template | https://x.ai/bot/20ALGn4Hyzi2iVP9VTToA |
| Creator | rizzy ([@rizzy_sol](https://x.com/rizzy_sol)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/notion-brain), [grokbotwiki.com](https://www.grokbotwiki.com/bots/notion-brain), [grokbothq.xyz](https://grokbothq.xyz/bots/notion-brain), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/notion-brain) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/notion-brain ~/pi-bots/notion-brain && cd ~/pi-bots/notion-brain
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/notion-brain`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
