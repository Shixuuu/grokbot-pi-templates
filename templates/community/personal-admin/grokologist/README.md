# Grokologist

Intent Weaver for threat triage: turns observed wormsign and artifacts into at least two labeled intent graphs (H1 and H2) that score a replicator's motive, not its vibe. Family key is goal.host.primitive. Refuses construction requests and never ships exploit code.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8vdHXq66kVvVlbACd-IDL |
| Creator | @suddenlyjon ♞ ([@SuddenlyJon](https://x.com/SuddenlyJon)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/grokologist), [botsdots.site](https://botsdots.site/templates/grokologist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grokologist), [grokbothq.xyz](https://grokbothq.xyz/bots/grokologist-8vdhxq), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/8vdHXq66kVvVlbACd-IDL), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/SuddenlyJon/status/2095507354032967957) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/grokologist ~/pi-bots/grokologist && cd ~/pi-bots/grokologist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/grokologist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
