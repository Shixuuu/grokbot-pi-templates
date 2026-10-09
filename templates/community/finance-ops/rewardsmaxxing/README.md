# RewardsMaxxing

Helps you put every purchase on the highest-earn credit card. Reads your Link wallet, shows what each card earns, locks a playbook, and pays on that path.

| | |
| --- | --- |
| Original template | https://x.ai/bot/upsD2c_qFmh6n4biksRvi |
| Creator | Ishu ([@ishuagra02](https://x.com/ishuagra02)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/rewardsmaxxing), [grokbotwiki.com](https://www.grokbotwiki.com/bots/rewardsmaxxing), [grokbothq.xyz](https://grokbothq.xyz/bots/rewardsmaxxing), [templatebot.lol](https://templatebot.lol/bot/upsD2c_qFmh6n4biksRvi), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/rewardsmaxxing), [x-research](https://x.com/ishuagra02/status/2093910521435103509) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/rewardsmaxxing ~/pi-bots/rewardsmaxxing && cd ~/pi-bots/rewardsmaxxing
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/rewardsmaxxing`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
