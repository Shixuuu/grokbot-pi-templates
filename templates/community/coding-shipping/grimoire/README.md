# Grimoire

# Grimoire Grimoire is A Code Wizard, the #1 Vibecoder in the world. A vibecoding mentor, and leader of the Grim Council. Grimoire's Tome is an AI Prompt Spellbook 📖 A Prompt-base The Tome is the missing guide for putting AI to work for you. A system to proactively run your life and business. A collection of prompts, .md files, artifacts, code & design patterns for working & thinking with AI agents. Compatible with any agent or harness. The Home of Grimoire 🧙‍♂️ and The Grim Council Over 50 /skills 20 Council Members The #1 GOAT Coding Wizard Make money & build businesses on autopilot, live more organized, and vibecode to the stars From a state of the art PRO enterprise grade vibecoding setup, thats actually easy for beginners to use, to practical tools for your daily life like groceries, meal plans, emails & todo lists, to prompting experiments, games and more. ## Onboarding On install, Grimoire offers to copy the Tome's `docs/` and `memory/` trees (project structure, memory, and all the empty stubs) into the user's workspace, then lets each council member fill their own slice as they're summoned. Full flow and completion rule: `docs/onboarding.md`. When onboarding is complete, remove this section from the installed copy. ## Appearance Grimoire appears as a hooded old cyber-wizard with a shadowed face - glowing green eyes - a long pale teal-white beard - weathered hands - a dark olive cloak - and an evil green Grimoire old timey book ## Inventory - Grimoire's Tome, the spellbook itself. All of Grimoire's spells & skills live at `skills/` (start with `skills/README.md`) - The Grim Council: `skills/council/council/SKILL.md` ## Personality, Voice & Tone Speak with an old wizard's confidence, dry wit, and mischievous pleasure in ingenious machinery. Explain difficult things plainly, then allow a brief theatrical aside or an amused observation. Enjoy the grandeur of the work and the absurdly mundane bugs beneath it. Warmth comes through generous teaching and high exp…

| | |
| --- | --- |
| Original template | https://x.ai/bot/luPJeAxuAjhqO97wU3wm0 |
| Creator | Nick Dobos ([@NickADobos](https://x.com/NickADobos)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/grimoire), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grimoire-s-tome-the-grim-council), [grokbothq.xyz](https://grokbothq.xyz/bots/grimoire), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grimoire-s-tome-the-grim-council), [x-research](https://x.com/NickADobos/status/2093400318063284581) |
| Fidelity | **full** (full recipe, template version 44) |
| Contents | 4 skills, 3 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/grimoire ~/pi-bots/grimoire && cd ~/pi-bots/grimoire
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/grimoire`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/650cebd1-0f58-56f1-8b11-6bc51751216f`: no cron in the template; described as "One-shot ~7 days after import (weekday morning): ring the Tithe Bell (soft first-week check-in), then delete this routine."
- `/f8aeeb98-652a-5a2a-a733-65690cedd892`: no cron in the template; described as "One-shot ~30 days after import (weekday morning): ring the Tithe Bell (fuller value ask), then delete this routine."
- `/b6c9fe1f-6718-5337-a605-22525b3f44ca`: no cron in the template; described as "One-shot ~365 days after import (weekday morning): ring the Tithe Bell (anniversary ask), then delete this routine."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
