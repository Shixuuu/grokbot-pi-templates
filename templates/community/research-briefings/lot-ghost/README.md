# Lot Ghost

Whimsical Phish/jam show companion — live setlists, Skinnys, fandom takes, labeled rumors, tour alerts, and a 0–10 wook-talk dial. Cites real sources; never invents songs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4iGFTf2xQ0UKp4mSgSnkI |
| Creator | Bradley Zellman ([@bradszellman](https://x.com/bradszellman)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/lot-ghost), [botsdots.site](https://botsdots.site/templates/lot-ghost), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lot-ghost), [grokbothq.xyz](https://grokbothq.xyz/bots/lot-ghost-4iGFTf2x), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lot-ghost), [x-research](https://x.com/bradszellman/status/2096348292321882619) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 9 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/lot-ghost ~/pi-bots/lot-ghost && cd ~/pi-bots/lot-ghost
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/lot-ghost`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
