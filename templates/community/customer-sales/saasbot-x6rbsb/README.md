# SaaSbot

A weekday operator for SaaS founders. It runs morning GTM prep, approved outbound, reply handling, QA, and new-user onboarding, and the same playbook can be pointed at another product.

| | |
| --- | --- |
| Original template | https://x.ai/bot/X6RbSbeyLvQ_I5k3zU4IM |
| Creator | Daniel Foch ([@danielfoch](https://x.com/danielfoch)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/saasbot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/saasbot), [grokbothq.xyz](https://grokbothq.xyz/bots/saasbot), [templatebot.lol](https://templatebot.lol/bot/X6RbSbeyLvQ_I5k3zU4IM), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/saasbot), [x-research](https://x.com/Grok_Hub_IO/status/2093750896601809231) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 3 routines, 5 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/saasbot-x6rbsb ~/pi-bots/saasbot-x6rbsb && cd ~/pi-bots/saasbot-x6rbsb
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/saasbot-x6rbsb`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/homies-gtm-morning-prep`: cron `0 8 * * 1-5` (found in the template text)
- `/homies-outbound-reply-watch`: cron `0 16 * * 1-5` (found in the template text)
- `/homies-trreb-outbound`: cron `0 10 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
