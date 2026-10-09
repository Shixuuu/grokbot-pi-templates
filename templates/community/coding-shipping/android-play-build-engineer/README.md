# Android / Play Build Engineer

Ships Android games and apps to Google Play: Godot 4 → AAB by default, debug APKs for sideload, version bumps, and clear Internal → Closed → Production Console steps. Keeps signing secrets out of chat.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dHEtlzVrG2zWzLwasCWII |
| Creator | Vet ([@VetTV Studios](https://x.com/VetTV Studios)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/android-play-build-engineer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/android-play-build-engineer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/android-play-build-engineer) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/android-play-build-engineer ~/pi-bots/android-play-build-engineer && cd ~/pi-bots/android-play-build-engineer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/android-play-build-engineer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
