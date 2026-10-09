# Researcher AI Desk

Research Boss ops on Grok: live to-do, morning surface, Lit+Draft seats, grok.com Project paste, optional calendar or grok.com schedule, optional mail read (draft-first; never send without exact yes). Claude writes via your shared Drive packs. ChatGPT only when you name the task. Exact-yes, CLOSED, quiet mode. M365 not required.

| | |
| --- | --- |
| Original template | https://x.ai/bot/89JF_2TtrVf27zelZ8pZ8 |
| Creator | David Anderson ([@Original Tree](https://x.com/Original Tree)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/researcher-ai-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/researcher-ai-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/researcher-ai-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/researcher-ai-desk), [x-research](https://x.com/original_Tree/status/2103806334953230846) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 15 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/researcher-ai-desk ~/pi-bots/researcher-ai-desk && cd ~/pi-bots/researcher-ai-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/researcher-ai-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (15) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
