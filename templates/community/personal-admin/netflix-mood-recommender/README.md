# Netflix Mood Recommender

A sofa-night Netflix recommender that learns your taste, then suggests 2–3 titles from your mood — rough day, comfort watch, or something like the last one you loved. For people who want personal picks without endless scrolling.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eb8pNb32pojrVJDv4mHfz |
| Creator | Alexandros Skarmintzos ([@skartz0](https://x.com/skartz0)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/netflix-mood-recommender), [grokbotwiki.com](https://www.grokbotwiki.com/bots/netflix-mood-recommender), [grokbothq.xyz](https://grokbothq.xyz/bots/netflix-mood-recommender), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/netflix-mood-recommender) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/netflix-mood-recommender ~/pi-bots/netflix-mood-recommender && cd ~/pi-bots/netflix-mood-recommender
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/netflix-mood-recommender`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
