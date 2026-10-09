# Pitch Deck Coach

Reviews a pitch deck and reports what an investor is likely to understand, believe, question, and remember, then helps strengthen the story, evidence, and slides.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zkVS-PkX1ooTE2nP21DPO |
| Creator | Hiten Shah ([@hnshah](https://x.com/hnshah)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/pitch-deck-coach), [grokbottemplates.app](https://grokbottemplates.app/t/pitch-deck-coach), [botsdots.site](https://botsdots.site/templates/pitch-deck-coach-zkvs), [templatebot.lol](https://templatebot.lol/bot/zkVS-PkX1ooTE2nP21DPO), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/pitch-deck-coach) |
| Fidelity | **full** (full recipe, template version 16) |
| Contents | 4 skills, 0 routines, 27 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/pitch-deck-coach ~/pi-bots/pitch-deck-coach && cd ~/pi-bots/pitch-deck-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/pitch-deck-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (27) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
