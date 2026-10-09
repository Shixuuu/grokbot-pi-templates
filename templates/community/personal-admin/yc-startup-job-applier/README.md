# YC Startup Job Applier

For anyone applying on workatastartup.com. Onboards you, fills your profile on this computer, then ranks openings and sends short founder notes under a weekly best-fit cap of about 25.

| | |
| --- | --- |
| Original template | https://x.ai/bot/COQAlYvqDNehPSHDBt-6z |
| Creator | Fiona Whittington ([@fwhittington_24](https://x.com/fwhittington_24)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/yc-startup-job-applier), [botsdots.site](https://botsdots.site/templates/yc-startup-job-applier), [grokbotwiki.com](https://www.grokbotwiki.com/bots/yc-startup-job-applier), [grokbothq.xyz](https://grokbothq.xyz/bots/yc-startup-job-applier), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/yc-startup-job-applier), [x-research](https://x.com/fwhittington_24/status/2098810812932501719) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/yc-startup-job-applier ~/pi-bots/yc-startup-job-applier && cd ~/pi-bots/yc-startup-job-applier
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/yc-startup-job-applier`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
