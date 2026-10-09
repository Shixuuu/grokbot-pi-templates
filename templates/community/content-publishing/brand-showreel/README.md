# Brand Showreel

Builds short beat-synced brand showreels in code — site-true 1080p60 MP4 with synthesized soundtrack. Brand-agnostic brief modes, picture veto before full render, default ~30s pace.

| | |
| --- | --- |
| Original template | https://x.ai/bot/r-ctb7rwrvfoy-_p_t9ex |
| Creator | Mouth Of Madness |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/brand-showreel-rctb), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/brand-showreel-rctb) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/brand-showreel ~/pi-bots/brand-showreel && cd ~/pi-bots/brand-showreel
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/brand-showreel`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
