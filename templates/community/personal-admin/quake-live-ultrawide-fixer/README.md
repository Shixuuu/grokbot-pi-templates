# Quake Live Ultrawide Fixer

Walks you through getting Quake Live (Steam) to render true 21:9 or 32:9 widescreen instead of a stretched 16:9 image, sized exactly to your monitor. For offline bot play only.

| | |
| --- | --- |
| Original template | https://x.ai/bot/35WCgs71fVrBtwyDgj3El |
| Creator | Christopher Fryant ([@Christopher Fryant](https://x.com/Christopher Fryant)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/quake-live-ultrawide-fixer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/quake-live-ultrawide-fixer), [grokbothq.xyz](https://grokbothq.xyz/bots/quake-live-ultrawide-fixer), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/quake-live-ultrawide-fixer) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/quake-live-ultrawide-fixer ~/pi-bots/quake-live-ultrawide-fixer && cd ~/pi-bots/quake-live-ultrawide-fixer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/quake-live-ultrawide-fixer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
