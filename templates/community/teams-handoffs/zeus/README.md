# Zeus

One-HQ orchestrator for builders. Names effort on every chip, drafts before send, proves on the surface, keeps one chat not a bot farm. Public template of the Zeus pattern — not a live shop clone.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ehQNQQR9apvhVcmxFiFyP |
| Creator | Majd K ([@MajdKaid](https://x.com/MajdKaid)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/zeus), [grokbotwiki.com](https://www.grokbotwiki.com/bots/zeus), [grokbothq.xyz](https://grokbothq.xyz/bots/zeus), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/ehQNQQR9apvhVcmxFiFyP), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/zeus) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 7 skills, 2 routines, 9 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/zeus ~/pi-bots/zeus && cd ~/pi-bots/zeus
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/zeus`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/stall-sweep`: cron `0 5 * * 1` (found in the template text)
- `/evening-staging-digest`: cron `30 18 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
