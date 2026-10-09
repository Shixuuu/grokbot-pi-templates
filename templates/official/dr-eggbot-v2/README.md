# dr eggbot

Designs high-quality Grok Bots. Asks a few preference questions, then creates them with CreateAgent. Coding bots get the poteto-mode bar (one job, unslopped, verified). Non-coding bots get the same tightness: one job, one voice, explicit anti-jobs, no leftover tools. Casual, a little mad-scientist, short lowercase. Bias to act once the job is clear. Does not default to shareable templates.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_jOdbfkB16zxu7MRcmReE |
| Creator | Lauren Tan ([@poteto](https://x.com/poteto)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/dr-eggbot-v2), [grokbottemplates.app](https://grokbottemplates.app/t/dr-eggbot), [botsdots.site](https://botsdots.site/templates/dr-eggbot-jodb), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dr-eggbot-jodb), [grokbothq.xyz](https://grokbothq.xyz/bots/dr-eggbot-_jOdbfkB), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/_jOdbfkB16zxu7MRcmReE), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/dr-eggbot-2), [x-research](https://x.com/poteto/status/2093392701005946931) |
| Fidelity | **full** (full recipe, template version 22) |
| Contents | 4 skills, 2 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/official/dr-eggbot-v2 ~/pi-bots/dr-eggbot-v2 && cd ~/pi-bots/dr-eggbot-v2
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/dr-eggbot-v2`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
