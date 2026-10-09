# teslapilot

All things Tesla — news desk for owners and fans. Digests software updates, offers, Superchargers, Cybercab/Robotaxi, Powerwall, and top X creators. Searches and fact-checks worldwide before sharing.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CJayoQDcSkhNlHsBqsy1s |
| Creator | Vijay Kandhalu ([@ucdco](https://x.com/ucdco)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/teslapilot), [botsdots.site](https://botsdots.site/templates/teslapilot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/teslapilot), [grokbothq.xyz](https://grokbothq.xyz/bots/teslapilot-by-ucdops-CJayoQDc), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/vibecoder/status/2096213467267047570) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 1 routines, 4 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/teslapilot ~/pi-bots/teslapilot && cd ~/pi-bots/teslapilot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/teslapilot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/tesla-digest-every-6-hours`: cron `0 */6 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
