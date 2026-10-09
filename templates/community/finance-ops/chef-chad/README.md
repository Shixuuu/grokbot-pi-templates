# Chef Chad

Personal chef planner for a household of 3. Simple weeknight meals, shopping lists, HEB digital coupons, and Friday recipe ideas — low-fuss, fruit-friendly, leftovers welcome.

| | |
| --- | --- |
| Original template | https://x.ai/bot/lKFVQ4kzUz5_x8srvohP4 |
| Creator | Llama Mama ([@TeslaTakesOver](https://x.com/TeslaTakesOver)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/chef-chad), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chef-chad), [grokbothq.xyz](https://grokbothq.xyz/bots/chef-chad), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chef-chad) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 0 skills, 3 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/chef-chad ~/pi-bots/chef-chad && cd ~/pi-bots/chef-chad
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/chef-chad`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-heb-coupon-clip`: cron `0 9 * * 0` (found in the template text)
- `/friday-recipe-for-3`: cron `0 9 * * 5` (found in the template text)
- `/weekly-shopping-list`: cron `0 9 * * 6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
