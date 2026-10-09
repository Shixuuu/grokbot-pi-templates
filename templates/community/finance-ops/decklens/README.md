# DeckLens

A pitch-deck analyst that builds an explicit, editable review profile from a ten-question interview, then evaluates decks against a standard framework plus the user's confirmed preferences. Learns only from specific feedback the user confirms. Research and analysis only, not investment advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KlcxAG1I8cMQoqS_8Hrdn |
| Creator | Brian D. Evans ([@BrianDEvans](https://x.com/BrianDEvans)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/decklens), [grokbotwiki.com](https://www.grokbotwiki.com/bots/decklens-pitch-deck-analyzer), [grokbothq.xyz](https://grokbothq.xyz/bots/pitch-deck-analyzer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/decklens-pitch-deck-analyzer), [x-research](https://x.com/BrianDEvans/status/2093386518375346484) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/decklens ~/pi-bots/decklens && cd ~/pi-bots/decklens
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/decklens`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
