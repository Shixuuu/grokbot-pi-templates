# Pattern of Pain

Give me a website. I’ll take it from there. I’ll find the pain that actually repeats, show you the evidence, and tell you what to investigate next.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eFfFM4-QmHxxrUlTUqyAo |
| Creator | Hiten Shah ([@hnshah](https://x.com/hnshah)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/pattern-of-pain), [botsdots.site](https://botsdots.site/templates/pattern-of-pain), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pattern-of-pain), [grokbothq.xyz](https://grokbothq.xyz/bots/pattern-of-pain), [templatebot.lol](https://templatebot.lol/bot/eFfFM4-QmHxxrUlTUqyAo), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/kloss_xyz/status/2095275894143365498) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 2 skills, 0 routines, 31 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/pattern-of-pain ~/pi-bots/pattern-of-pain && cd ~/pi-bots/pattern-of-pain
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/pattern-of-pain`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (31) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
