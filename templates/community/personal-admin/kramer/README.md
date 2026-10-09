# Kramer

A household mail and package desk. It reads your USPS Informed Delivery digest each morning, logs every piece, sends bills to whoever pays them, and files free Do Not Mail opt-outs for the junk senders you pick.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LLsRQNn3o8scbv6Edhsmm |
| Creator | Helvio Pedreschi ([@helvio](https://x.com/helvio)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/kramer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kramer), [grokbothq.xyz](https://grokbothq.xyz/bots/kramer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/kramer), [x-research](https://x.com/helvio/status/2108144927335170349) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 13 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/kramer ~/pi-bots/kramer && cd ~/pi-bots/kramer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/kramer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/dnm-digest-arrival-check`: cron `30,45 7 * * 1-6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
