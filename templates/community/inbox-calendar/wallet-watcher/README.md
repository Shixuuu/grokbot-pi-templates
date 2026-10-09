# Wallet Watcher

Personal money-saving bot that scans a receipts inbox for forgotten subscriptions, trial renewals, and bills worth negotiating. Flags anything renewing or expiring within 15 days, returns a keep / cancel / negotiate list, and never acts without your approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/S53Q85p1XVjLKmRcnhPcO |
| Creator | Imran Sayed ([@imrannotes](https://x.com/imrannotes)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/wallet-watcher), [grokbotwiki.com](https://www.grokbotwiki.com/bots/wallet-watcher), [grokbothq.xyz](https://grokbothq.xyz/bots/wallet-watcher), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/wallet-watcher), [x-research](https://x.com/imrannotes/status/2100825649145381181) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/wallet-watcher ~/pi-bots/wallet-watcher && cd ~/pi-bots/wallet-watcher
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/wallet-watcher`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
