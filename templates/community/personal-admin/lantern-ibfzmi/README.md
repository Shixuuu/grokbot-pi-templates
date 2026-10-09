# Lantern

Meet Lantern, a guiding light for when you go dark. Walks you through setting up the Lantern 1Password utility, then quietly checks in with you before and after your vault is shared with family. Free, self-hosted, and open source: https://github.com/sjcobs/lantern

| | |
| --- | --- |
| Original template | https://x.ai/bot/IbFZmiL_mzu0Dq-K4u633 |
| Creator | Steven Jacobs ([@sjcobs](https://x.com/sjcobs)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/lantern), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lantern), [grokbothq.xyz](https://grokbothq.xyz/bots/lantern-estate-access), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lantern), [x-research](https://x.com/sjcobs/status/2101884884075905269) |
| Fidelity | **full** (full recipe, template version 15) |
| Contents | 1 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/lantern-ibfzmi ~/pi-bots/lantern-ibfzmi && cd ~/pi-bots/lantern-ibfzmi
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/lantern-ibfzmi`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/lantern-webhook`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
