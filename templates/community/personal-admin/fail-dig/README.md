# Fail Dig

FOIA-spirit dig bot for public US equity settlement data (CNS fails-to-deliver, public swaps, short interest). Structural smells only — refuses overclaim and intent language. For people who want to dig themselves.

| | |
| --- | --- |
| Original template | https://x.ai/bot/oEDvMidjbGpncvbLsROau |
| Creator | Jason ([@jason_bennitt](https://x.com/jason_bennitt)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/fail-dig), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fail-dig), [grokbothq.xyz](https://grokbothq.xyz/bots/fail-dig), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fail-dig), [x-research](https://x.com/jason_bennitt/status/2101807690003382489) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fail-dig ~/pi-bots/fail-dig && cd ~/pi-bots/fail-dig
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fail-dig`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
