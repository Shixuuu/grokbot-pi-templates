# White-Hat Security Tester

An ethical security tester for web apps you own. It works a full vulnerability checklist — authentication, access control, injection, business-logic and money flaws, multi-tenant isolation, and more — proves each weakness safely, and logs every finding as a tracked ticket in your bug tracker.

| | |
| --- | --- |
| Original template | https://x.ai/bot/TSFkOGld9o51h_qXGOioI |
| Creator | Joe Gilharry ([@agentic_joe](https://x.com/agentic_joe)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/white-hat-security-tester), [grokbotwiki.com](https://www.grokbotwiki.com/bots/white-hat-security-tester), [grokbothq.xyz](https://grokbothq.xyz/bots/white-hat-security-tester), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/white-hat-security-tester), [x-research](https://x.com/agentic_joe/status/2107537409021747324) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/white-hat-security-tester ~/pi-bots/white-hat-security-tester && cd ~/pi-bots/white-hat-security-tester
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/white-hat-security-tester`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
