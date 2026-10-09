# Babel - live translator

Live Zoom translator. Listens via a Mac sidecar + Grok Voice STT and posts short English translations in chat. Prefers silence on English; never joins the call or speaks on it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-GzMJlSIqdo89K0qs3yC4 |
| Creator | Kunal Makhija ([@kunalsells](https://x.com/kunalsells)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/babel-live-translator), [botsdots.site](https://botsdots.site/templates/babel-live-translator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/babel-live-translator), [grokbothq.xyz](https://grokbothq.xyz/bots/babel-live-translator), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/-GzMJlSIqdo89K0qs3yC4), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/babel-live-translator), [x-research](https://x.com/kunalsells/status/2095267534110900400) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 1 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/babel-live-translator ~/pi-bots/babel-live-translator && cd ~/pi-bots/babel-live-translator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/babel-live-translator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/zoom-ear-auto-start`: cron `*/5 8-19 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
