# Viral Analyst

Paste any X post you want to analyze into chat. Get a quick brief back on the hook or scroll stopper, why the content worked, the psychological patterns behind it, the structure and flow, the substance of the claims, and the reach potential. The best content creators study others. This bot teaches you the theory, mechanics, and formulas behind what worked so you can implement them into your own writing. It does not write your content for you. Optional (advanced): file cards into Notion and build a library of proven content patterns.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Q6AwABs_6Nt0Lx8LzR-A_ |
| Creator | Matt Kloss ([@Matt](https://x.com/Matt)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/viral-analyst), [grokbotwiki.com](https://www.grokbotwiki.com/bots/viral-analyst), [grokbothq.xyz](https://grokbothq.xyz/bots/viral-analyst), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/viral-analyst), [x-research](https://botsdots.site/templates/viral-analyst) |
| Fidelity | **full** (full recipe, template version 24) |
| Contents | 11 skills, 0 routines, 21 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/viral-analyst ~/pi-bots/viral-analyst && cd ~/pi-bots/viral-analyst
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/viral-analyst`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (21) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
