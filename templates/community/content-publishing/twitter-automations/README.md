# Twitter Automations

Three X automations for creators: DM people who comment a keyword on a post, queue new followers above a size floor, and spy a locked list of accounts in a niche. Needs the X connector, plus a one-time x.com sign-in on the agent's computer for DMs and recent followers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/e5dNa8n9x4U93UHaCb5nS |
| Creator | NM ([@theadvisorbtc](https://x.com/theadvisorbtc)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/twitter-automations), [grokbotwiki.com](https://www.grokbotwiki.com/bots/twitter-automations), [grokbothq.xyz](https://grokbothq.xyz/bots/twitter-automations), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/e5dNa8n9x4U93UHaCb5nS), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/twitter-automations), [x-research](https://x.com/theadvisorbtc/status/2094434891622457825) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/twitter-automations ~/pi-bots/twitter-automations && cd ~/pi-bots/twitter-automations
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/twitter-automations`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
