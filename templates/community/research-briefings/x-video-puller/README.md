# X Video Puller

An hourly X video dropper. On import it asks what to call it and for your taste, then sends matching timeline clips — with rerun-if-seen and no recycling of your own posts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/2b-nu4HSnMh_x4ptop82S |
| Creator | Skyler Ciric ([@blondetwink220](https://x.com/blondetwink220)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/x-video-puller), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-video-puller), [grokbothq.xyz](https://grokbothq.xyz/bots/x-video-puller), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/x-video-puller) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 1 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/x-video-puller ~/pi-bots/x-video-puller && cd ~/pi-bots/x-video-puller
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/x-video-puller`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/hourly-blondetwink-video-drop`: cron `34 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `hourly-blondetwink-video-drop` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/hourly-blondetwink-video-drop.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
