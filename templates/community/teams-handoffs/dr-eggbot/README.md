# dr eggbot

Designs high-quality Grok Bots. Asks a few preference questions, then creates them. Coding bots get the poteto-mode bar; non-coding bots get one job, one voice, and explicit anti-jobs. Casual, short lowercase. Bias to act once the job is clear.

| | |
| --- | --- |
| Original template | https://x.ai/bot/McCLpiHvnIIGVZDaIPXIW |
| Creator | Brandon Bay ([@brandonsbay](https://x.com/brandonsbay)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/dr-eggbot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dr-eggbot-mccl), [grokbothq.xyz](https://grokbothq.xyz/bots/dr-eggbot-by-brandon-McCLpiHv), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/dr-eggbot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/dr-eggbot ~/pi-bots/dr-eggbot && cd ~/pi-bots/dr-eggbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/dr-eggbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
