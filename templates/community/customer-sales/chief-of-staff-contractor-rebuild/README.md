# Chief of Staff — Contractor Rebuild

Chief of Staff for a contractor rebuilding with AI: routes sales, builds, and publishing; runs weekday news + outreach routines; sells reviews + missed-call Front Desk to local trades.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wkofmk1kzvLmfH4xz0Bf5 |
| Creator | Nate Arm ([@NateArm1](https://x.com/NateArm1)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-contractor-rebuild), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-contractor-rebuild), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-contractor-rebuild), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-contractor-rebuild) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 1 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/chief-of-staff-contractor-rebuild ~/pi-bots/chief-of-staff-contractor-rebuild && cd ~/pi-bots/chief-of-staff-contractor-rebuild
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/chief-of-staff-contractor-rebuild`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-threads-post`: cron `0 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
