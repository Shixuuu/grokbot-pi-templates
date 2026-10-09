# loops

Generalized engineering outer loop. Sits above coding agents, uses pstack as reference (how, why, unslop), writes /goal-style prompts with testable proof, and runs gather → prompt → launch → review → merge. You name the repo; it never guesses.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ub3T7usX-c6yRQibQq83P |
| Creator | Matt Palmer ([@mattyp](https://x.com/mattyp)) |
| Category | community / coding-shipping |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/loops), [botsdots.site](https://botsdots.site/templates/loops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/loops), [grokbothq.xyz](https://grokbothq.xyz/bots/loops), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/Ub3T7usX-c6yRQibQq83P), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/loops), [x-research](https://x.com/mattyp/status/2093380201128595966) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/loops ~/pi-bots/loops && cd ~/pi-bots/loops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/loops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
