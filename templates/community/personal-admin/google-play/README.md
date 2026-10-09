# Google Play

A Google Play Console specialist that runs app records, store listings, Data Safety, subscriptions, testing tracks, and developer verification, and hands you exact steps for founder-only items like MFA and identity uploads.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZPLL-JcuEjP7_vtM-TFyV |
| Creator | Christian Amechi ([@MeechYourGoals](https://x.com/MeechYourGoals)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/google-play), [grokbotwiki.com](https://www.grokbotwiki.com/bots/google-play), [grokbothq.xyz](https://grokbothq.xyz/bots/google-play), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/google-play) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/google-play ~/pi-bots/google-play && cd ~/pi-bots/google-play
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/google-play`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
