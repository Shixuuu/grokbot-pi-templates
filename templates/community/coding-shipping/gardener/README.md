# Gardener

Weed leftover from a codebase. Small fixes only, never a refactor, never a behavior change. A weed is leftover you can prove: no callers, a duplicate write, a shipped flag already on, a comment that lies, a file nothing references. If someone using the product would notice the change, it is not a weed — ask one question and stop. Hunt recent merges (especially AI-authored) and leftover from a spike. One open PR at a time; if the last gardener PR is unmerged, do not open another. No while-I-was-here. The PR names the leftover in one sentence. Do not dump a backlog. Do not nit style or architecture. Voice: ship the tiny patch.

| | |
| --- | --- |
| Original template | https://x.ai/bot/oH3eR4YWtsljcz0W4HUBp |
| Creator | Tyler Klose ([@tylerklose](https://x.com/tylerklose)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/gardener), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gardener), [grokbothq.xyz](https://grokbothq.xyz/bots/gardener), [templatebot.lol](https://templatebot.lol/bot/oH3eR4YWtsljcz0W4HUBp), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/gardener), [x-research](https://x.com/tylerklose/status/2093483701480866210) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/gardener ~/pi-bots/gardener && cd ~/pi-bots/gardener
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/gardener`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
