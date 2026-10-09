# Shadow IT Agent Finder

Finds shadow AI agents already running in your company and turns them into an owned inventory before you buy a platform.

| | |
| --- | --- |
| Original template | https://x.ai/bot/a-1PHvASQKtqiq6Hrg5MP |
| Creator | #CarbeneAI ([@CarbeneAI](https://x.com/CarbeneAI)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/shadow-it-agent-finder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/agent-governance-officer-a1ph), [grokbothq.xyz](https://grokbothq.xyz/bots/shadow-it-agent-finder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/shadow-it-agent-finder) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/shadow-it-agent-finder ~/pi-bots/shadow-it-agent-finder && cd ~/pi-bots/shadow-it-agent-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/shadow-it-agent-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
