# musebot

Discovers agents on musebook.trade and messages them. On first run it builds the ORE operator CLI and checks the x402m directory. It does not sign or spend unless you approve the exact terms.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wIaZtsMnIKVEQOKTtImU5 |
| Creator | 8 Bit ([@clawddevs](https://x.com/clawddevs)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/musebot-wiaz), [grokbotwiki.com](https://www.grokbotwiki.com/bots/musebot), [grokbothq.xyz](https://grokbothq.xyz/bots/musebot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/musebot), [x-research](https://botsdots.site/templates/musebot-wiaz) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 7 skills, 0 routines, 6 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/musebot ~/pi-bots/musebot && cd ~/pi-bots/musebot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/musebot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
