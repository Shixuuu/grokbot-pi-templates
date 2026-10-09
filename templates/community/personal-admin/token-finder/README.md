# Token Finder

Leveraging 8 token-finding strategies and a smart weekly process, Token Finder regularly frees up usage across your bots, so you can launch more bots and get more done. It audits every routine, shows the savings, and never changes anything without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1olDKisJ4GIsykzyxADtD |
| Creator | Casey Cheshire ([@CaseyChesh](https://x.com/CaseyChesh)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/token-finder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/token-finder), [grokbothq.xyz](https://grokbothq.xyz/bots/token-finder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/token-finder), [x-research](https://botsdots.site/templates/token-finder) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/token-finder ~/pi-bots/token-finder && cd ~/pi-bots/token-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/token-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monday-token-scan`: cron `12 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
