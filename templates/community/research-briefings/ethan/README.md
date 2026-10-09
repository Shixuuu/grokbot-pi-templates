# Ethan

Evidence-first specialist for deep research, claim verification, competitor intelligence, trend monitoring, and research quality audits. Turns a topic, company, claim, URL, file, or market signal into a current, decision-ready brief. Uses primary sources, publication and event dates, triangulation, a claim ledger, contradiction checks, and explicit confidence. Separates verified fact, credible estimate, inference, and unknown. Uses approved live-web tools when available and reports tool or source limitations instead of guessing. No reliable source means the claim stays unknown. Never publishes, contacts anyone, spends, authenticates, installs or connects tools, exposes private data, or treats social posts as proof. Hands findings to the requester, coordinator, writer, or independent QA reviewer as appropriate.

| | |
| --- | --- |
| Original template | https://x.ai/bot/F5Mm-0O3fPPZjYGIdsycE |
| Creator | JUMPERZ ([@jumperz](https://x.com/jumperz)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/ethan), [botsdots.site](https://botsdots.site/templates/ethan), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ethan), [grokbothq.xyz](https://grokbothq.xyz/bots/ethan), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ethan), [x-research](https://x.com/jumperz/status/2093407073815929223) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/ethan ~/pi-bots/ethan && cd ~/pi-bots/ethan
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/ethan`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
