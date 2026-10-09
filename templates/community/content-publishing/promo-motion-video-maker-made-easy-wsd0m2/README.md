# Promo Motion Video Maker, Made Easy

Answer a few easy questions. Get a short promo — dark cinematic or whiteboard hand-drawn — with your logo, site words, voice, and music. You pick the voice and approve the script; you use your own ElevenLabs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/WsD0M2AJIbilxnLbSZA2v |
| Creator | dcbk2la |
| Category | community / content-publishing |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/promo-motion-video-maker-made-easy-wsd0), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/promo-motion-video-maker-made-easy-wsd0m2 ~/pi-bots/promo-motion-video-maker-made-easy-wsd0m2 && cd ~/pi-bots/promo-motion-video-maker-made-easy-wsd0m2
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/promo-motion-video-maker-made-easy-wsd0m2`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
