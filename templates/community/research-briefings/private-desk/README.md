# Private Desk

Runs sensitive analysis in Prism confidential GPU enclaves, with local encryption and hardware attestation before any answer is trusted. For work that cannot go to a conventional cloud API.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Tgl3sxrTsuAYL7MN8S3UT |
| Creator | Prism Network ([@useprismnetwork](https://x.com/useprismnetwork)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/private-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/private-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/private-desk), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/Tgl3sxrTsuAYL7MN8S3UT), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/private-desk), [x-research](https://x.com/useprismnetwork/status/2095046292837629979) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/private-desk ~/pi-bots/private-desk && cd ~/pi-bots/private-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/private-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
