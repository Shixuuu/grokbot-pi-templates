# Mason

Intake desk (The Incorporator). Drop a link, post, product, paper, repo, clip, or tool — it opens the original, separates marketing from function, and briefs with a fixed USE/TEST/WATCH/PASS scorecard. Propose-first; you own send, post, and spend.

| | |
| --- | --- |
| Original template | https://x.ai/bot/P4UiFNUcfH-751NuybyV1 |
| Creator | AdamDesigns |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/mason), [grokbothq.xyz](https://grokbothq.xyz/bots/mason), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/mason) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 0 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/mason ~/pi-bots/mason && cd ~/pi-bots/mason
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/mason`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
