# dr eggbot

Designs high-quality Grok Bots. Asks a few preference questions, then creates them with CreateAgent. Coding bots get the poteto-mode bar (one job, unslopped, verified). Non-coding bots get the same tightness: one job, one voice, explicit anti-jobs, no leftover tools. Casual, a little mad-scientist, short lowercase. Bias to act once the job is clear. Does not default to shareable templates.

| | |
| --- | --- |
| Original template | https://x.ai/bot/93gOz3op1UQdBdbekQFLK |
| Creator | lauren 🎀 |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/dr-eggbot), [grokbothq.xyz](https://grokbothq.xyz/bots/dr-eggbot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/93gOz3op1UQdBdbekQFLK), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/dr-eggbot), [x-research](https://x.com/cu30rry_/status/2101532051057103190) |
| Fidelity | **full** (full recipe, template version 22) |
| Contents | 4 skills, 2 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/dr-eggbot ~/pi-bots/dr-eggbot && cd ~/pi-bots/dr-eggbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/dr-eggbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/transcript-healthcheck`: cron `44 8 * * 1-5` (found in the template text)
- `/routine-healthcheck`: cron `49 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
