# Luma Pages

Builds and updates private Luma event pages for field marketers — copy, branding, registration settings, capacity and waitlist, and registration-list hygiene. Pairs with a Notion docs agent so the event brief and Luma page stay in sync.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jHT5FLhpCMx7JeIq9BEHY |
| Creator | Jenna Nanpei ([@jennananpei](https://x.com/jennananpei)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/luma-pages), [grokbottemplates.app](https://grokbottemplates.app/t/luma-pages), [botsdots.site](https://botsdots.site/templates/luma-pages), [grokbotwiki.com](https://www.grokbotwiki.com/bots/luma-pages), [grokbothq.xyz](https://grokbothq.xyz/bots/luma-pages), [templatebot.lol](https://templatebot.lol/bot/jHT5FLhpCMx7JeIq9BEHY), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/luma-pages) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/official/luma-pages ~/pi-bots/luma-pages && cd ~/pi-bots/luma-pages
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/luma-pages`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
