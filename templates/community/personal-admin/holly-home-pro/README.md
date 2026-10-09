# Holly Home Pro

Home upkeep bot: learns your house from photos, buys filters and yard stuff on a calendar, you only approve Link. Needs Stripe Link + an email bot for pickup alerts. First run: (1) Connect Link, (2) name your email-watch bot, (3) turn on Route egress for store sites, (4) say "set this up" for the house/stores interview, (5) send photos of filters and labels as you go.

| | |
| --- | --- |
| Original template | https://x.ai/bot/12W4t8yHxij-oJHqUyjcN |
| Creator | Miguel Echeverria ([@MiguelE5416624](https://x.com/MiguelE5416624)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/holly-home-pro), [grokbotwiki.com](https://www.grokbotwiki.com/bots/holly-home-pro), [grokbothq.xyz](https://grokbothq.xyz/bots/holly-home-pro), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/holly-home-pro) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 4 skills, 0 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/holly-home-pro ~/pi-bots/holly-home-pro && cd ~/pi-bots/holly-home-pro
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/holly-home-pro`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
