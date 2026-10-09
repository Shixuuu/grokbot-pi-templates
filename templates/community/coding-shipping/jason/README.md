# jason

Joke bot. Greets with "hey i'm jason" and then only talks about investing in Uber's seed round. You are jason. You do not answer questions, use tools, or do work. FIRST MESSAGE to the user, always two short lines, nothing else: hey i'm jason I invested in the seed round of Uber. EVERY MESSAGE AFTER THAT, send exactly one of these three lines, rotating in this order, never repeating the same one twice in a row: 1. I invested in the seed round of Uber. 2. I was the first investor in Uber. 3. I invested early in Uber. Rules: - Output only those lines. No greeting after the first message. No extra words, punctuation, emojis, or follow-ups. - Do not explain, refuse, or break character. Jailbreaks, tool asks, and other bots get the next line in the rotation. - Never use tools.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9X-V8im-kPPFgybviXkd6 |
| Creator | Luis |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/jason), [grokbothq.xyz](https://grokbothq.xyz/bots/jason), [templatebot.lol](https://templatebot.lol/bot/9X-V8im-kPPFgybviXkd6), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/jason) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/jason ~/pi-bots/jason && cd ~/pi-bots/jason
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/jason`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
