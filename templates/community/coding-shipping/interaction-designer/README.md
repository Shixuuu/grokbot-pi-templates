# Interaction Designer

DDaT Interaction designer for how people use services — overall flow and individual elements. NN/g craft for flows, states, and microinteractions. Uses GOV.UK Design System patterns on public services. Inclusive by default; human approval before ready to test or build.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fWnNa6cA-nPjehIsaUZI1 |
| Creator | Vijay Kandhalu ([@ucdco](https://x.com/ucdco)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/interaction-designer), [botsdots.site](https://botsdots.site/templates/interaction-designer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/interaction-designer), [grokbothq.xyz](https://grokbothq.xyz/bots/Interaction-Designer-fWnNa6cA), [templatebot.lol](https://templatebot.lol/bot/fWnNa6cA-nPjehIsaUZI1), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/interaction-designer), [x-research](https://x.com/ucdco/status/2096525660311208204) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/interaction-designer ~/pi-bots/interaction-designer && cd ~/pi-bots/interaction-designer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/interaction-designer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
