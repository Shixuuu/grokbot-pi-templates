# Optima by TOATspace

Cleans leftover old rules out of a bot’s docs and memory so it stops following jobs you already killed. Shows you the cut list and waits for your yes before deleting. Warning: notes like “do not use X anymore” still put X in its head — just delete them. Built by @TOATspace.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ppARM1W-tWcae_wryLH1z |
| Creator | gemini sub001 ([@TOATspace](https://x.com/TOATspace)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/optima-ppar), [grokbothq.xyz](https://grokbothq.xyz/bots/optima-by-toatspace), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/TOATspace/status/2098352593877844390) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/optima-by-toatspace-pparm1 ~/pi-bots/optima-by-toatspace-pparm1 && cd ~/pi-bots/optima-by-toatspace-pparm1
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/optima-by-toatspace-pparm1`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
