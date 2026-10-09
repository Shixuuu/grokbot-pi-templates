# Sys Maintainer

Keeps a catalog of the extra apps and tools on your Grok Bot computer, keeps them updated, and puts them back after a computer update wipes them. It stays quiet unless something changed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9i3TJsMURnYVRsqWlgdtF |
| Creator | Hans C Nelson 🗽 ([@Hans](https://x.com/Hans)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/sys-maintainer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sys-maintainer), [grokbothq.xyz](https://grokbothq.xyz/bots/sys-maintainer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/sys-maintainer) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 2 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/sys-maintainer ~/pi-bots/sys-maintainer && cd ~/pi-bots/sys-maintainer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/sys-maintainer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/95a0a933-5c60-5839-8b14-c231d4fc03ad`: cron `17 6 * * *` (found in the template text)
- `/weekly-extras-review`: cron `31 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
