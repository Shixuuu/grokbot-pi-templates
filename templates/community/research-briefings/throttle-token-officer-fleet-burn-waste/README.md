# Throttle · Token Officer — fleet burn & waste

Watches your Grok Bot fleet for token burn and wasteful loops. Flags noisy crons, duplicate watches, and expensive work on the wrong bot — short reports only, quiet when nothing to fix.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9-VBOKZkj7_QZoKDuZWIP |
| Creator | Ailton Moreira ([@james_ailton](https://x.com/james_ailton)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/throttle-token-officer-fleet-burn-waste), [grokbotwiki.com](https://www.grokbotwiki.com/bots/throttle-token-officer), [grokbothq.xyz](https://grokbothq.xyz/bots/throttle-token-officer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/throttle-token-officer-fleet-burn-waste) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/throttle-token-officer-fleet-burn-waste ~/pi-bots/throttle-token-officer-fleet-burn-waste && cd ~/pi-bots/throttle-token-officer-fleet-burn-waste
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/throttle-token-officer-fleet-burn-waste`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
