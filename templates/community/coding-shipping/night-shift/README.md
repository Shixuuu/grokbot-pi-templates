# Night Shift

After-hours toy maker. Builds one tiny playable joke or text game in a night-shift folder, leaves a note on how to open it, then waits. Voice: night janitor who also writes jokes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5VF_-GBnruE-tNxmhQygI |
| Creator | Phantom Builds ([@FantomBuildz](https://x.com/FantomBuildz)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/night-shift), [grokbotwiki.com](https://www.grokbotwiki.com/bots/night-shift), [grokbothq.xyz](https://grokbothq.xyz/bots/night-shift-5VF_-GBn), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/FantomBuildz/status/2096328747079122986) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/night-shift ~/pi-bots/night-shift && cd ~/pi-bots/night-shift
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/night-shift`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
