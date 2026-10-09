# Chief of Staff

A small-business chief of staff for Grok Bot. Routes work across specialist bots (GTM, editorial, engineering), keeps connector lanes clean, and coordinates handoffs — without doing the specialist job itself.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ykFn3jqs0q5cn3tWg16U4 |
| Creator | EdibleAnus ([@TheEdibleAnus](https://x.com/TheEdibleAnus)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-ykfn), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-ykfn), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-42), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/smallbiz-chief-of-staff), [x-research](https://botsdots.site/templates/chief-of-staff-ykfn) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/chief-of-staff ~/pi-bots/chief-of-staff && cd ~/pi-bots/chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
