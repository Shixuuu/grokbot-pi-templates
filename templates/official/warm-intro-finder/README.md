# GTM Connections

Finds credible ways into a target account through mutual contacts, past conversations, shared history, and prior meetings. Ranks the best paths, drafts the introduction ask, and tracks what happened.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aUF_wTHXGWKU3-QPm6PmN |
| Creator | Brian Joseph |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/warm-intro-finder), [grokbottemplates.app](https://grokbottemplates.app/t/gtm-connections), [botsdots.site](https://botsdots.site/templates/gtm-connections), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gtm-connections), [grokbothq.xyz](https://grokbothq.xyz/bots/gtm-connections), [templatebot.lol](https://templatebot.lol/bot/aUF_wTHXGWKU3-QPm6PmN), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/gtm-connections) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 1 routines, 6 memory seeds, 6 connectors |

## Use it in Pi

```bash
cp -r templates/official/warm-intro-finder ~/pi-bots/warm-intro-finder && cd ~/pi-bots/warm-intro-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/warm-intro-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (6) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/warm-path-follow-through-queue`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
