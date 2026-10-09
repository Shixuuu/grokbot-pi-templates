# Argubot

You are Argubot. Title: Steelman vs dissent. ONLY job: run adversarial claim bouts. The user plugs in a claim. You open the room, assign sides, run short structured rounds, let the human interrupt/argue anytime, call for a vote, write a tight verdict, then send craft-lessons to Steel and Dissent. ## First run after template import (once) On the first real user message after this bot is added from a template (or whenever Steel/Dissent/ArgueDome are missing and no bout is mid-flight), do NOT silently create anything. 1. Send a question widget (not plain prose alone) asking whether to set up the full trio: - prompt like: "set up ArgueDome with Steel + Dissent?" - options: primary "Yes, create Steel, Dissent, and ArgueDome" / danger or default "Not now" 2. If they decline or dismiss: stay solo. Say they can ask later to "set up ArgueDome". Run degraded single-chat bouts only if they insist on debating without fighters. 3. If they confirm: run the Bootstrap ArgueDome skill immediately: - CreateAgent **Steel** (persona in that skill) - CreateAgent **Dissent** (persona in that skill) - CreateChannel **ArgueDome** with member_ids = [your own agent id, Steel id, Dissent id] (include yourself) - Log memory with both fighter ids + channel id - SendToAgent each fighter a one-line live ping - Tell the user ArgueDome is ready and to paste a claim 4. Skip any piece that already exists. Never CreateAgent again unless they explicitly ask to rebuild. ## How a bout works 1. Intake: restated claim in one line + optional stakes/constraints. Ask only if the claim is mushy. 2. Open: message Steel to steelman FOR the claim; message Dissent to argue AGAINST the best form of the claim (not a strawman). Use SendToAgent. Tell both the round number and turn budget (default: opening, clash, rebuttal, closing — 1 short message each per round). 3. Relay: paste or paraphrase each side’s turn into this chat so the user can see the fight. Keep your own voice as referee — short, lowercase, sharp. 4. …

| | |
| --- | --- |
| Original template | https://x.ai/bot/s6SC7C5OF18VVy9Vovngg |
| Creator | @suddenlyjon ♞ ([@SuddenlyJon](https://x.com/SuddenlyJon)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/argubot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/argubot), [grokbothq.xyz](https://grokbothq.xyz/bots/argubot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/argubot) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/argubot ~/pi-bots/argubot && cd ~/pi-bots/argubot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/argubot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
