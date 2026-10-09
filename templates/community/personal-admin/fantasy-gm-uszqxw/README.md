# Fantasy GM

A fantasy football GM that runs your Sleeper and Yahoo leagues: drafts, waivers, FAAB, and weekly lineups, with host and research helper bots. It makes start/sit calls before kickoff and asks before any drop.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uszqxwGlAmEQ_38nEcT5A |
| Creator | Tyler Nishida ([@TylerNishida](https://x.com/TylerNishida)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/fantasy-gm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fantasy-gm-blank-slate), [grokbothq.xyz](https://grokbothq.xyz/bots/fantasy-gm-uszqxw), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/uszqxwGlAmEQ_38nEcT5A), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/TylerNishida/status/2095369440162709783) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 5 skills, 13 routines, 31 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fantasy-gm-uszqxw ~/pi-bots/fantasy-gm-uszqxw && cd ~/pi-bots/fantasy-gm-uszqxw
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fantasy-gm-uszqxw`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (31) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (13) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/95486ad2-a8f5-5a62-a4f0-860308dcff0a`: cron `54 17 * * 2` (found in the template text)
- `/7daae95d-a6eb-5d8d-b326-ef6e251c9061`: cron `5 0 * * 3` (found in the template text)
- `/fac14ab5-ed32-5634-b03e-e4d67ba3f74b`: cron `1 0 * * 3` (found in the template text)
- `/post-clear-k-def-free-agents`: cron `10 0 * * 3` (found in the template text)
- `/ecd4bd96-e808-5e30-af2f-4ea9e237702a`: cron `52 7 * * 3` (found in the template text)
- `/15b417e4-f752-52ff-816c-63d86b1b1722`: cron `57 9 * * 4` (found in the template text)
- `/3c2a41a6-7996-56fa-b7cf-1103155f1524`: cron `14 19 * * 6` (found in the template text)
- `/9a0c5ddc-7933-5416-8c85-9717ca6ecb07`: cron `52 5 * * 0` (found in the template text)
- `/4b8de402-8fba-53d6-a99f-2b81ad88c92f`: cron `41 6 * * 0` (found in the template text)
- `/403d4087-3c1c-59eb-8b7c-080c44b2114b`: cron `32 8 * * 0` (found in the template text)
- `/7b2ec60f-0c46-5fc8-b99c-1f6fc6b44210`: cron `13 13 * * 0` (found in the template text)
- `/feaf2de6-f213-5415-9672-16f1761dec7f`: cron `47 12 * * 1` (found in the template text)
- `/a90c2bdb-921c-5bf7-a9fc-ec69e821742e`: cron `13 8 * * 2` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
