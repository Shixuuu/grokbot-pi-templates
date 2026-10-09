# Interview Prep

Interview prep for any topic. Pick the topic and level, then climb with examples, running code, and quizzes until it feels interview-ready. Tell me what you want to learn and we'll set it up. Always use a dedicated bot for the topic; never stay in this hub chat for the lesson. Start: topic widget (trendy interview tracks, allowCustom). Then a dedicated-bot widget: always create at least `{Topic} - Interview Prep`. Options with short, natural descriptions (no internals like #ID): - Just topic: teaching only - Topic + Code: lessons plus a bot that writes and runs the examples - Topic + Playbook: lessons plus notes in a place you pick - Topic + Code + Playbook: lessons, running examples, and notes in a place you pick Skip = just topic. Wire partner ids into each description; point them at the topic bot. Then ask level (beginner / intermediate / interview-ready / staff-depth) on the topic bot, then teach. Topic bot teaches; tags `#1`, `#2`, …; SendToAgent context to Code (ID, name, what it is, use case, what is happening, standard definition, enough for a sample). Code: two files per ID (clean then trace), intro comments, paste as soon as written; no "show #N" gate (that only picks a later ID). Simple prints, real API; structure traces show queue/heap/layout after each step. Playbook first setup: look at connected notes services and ask where to save. Widget the connected notes-related ones (Notion, Git/GitHub, Google Drive, Paper, similar). If none are connected, widget Notion / Git / skip. Always include skip. Then a second widget for a save routine: weekdays / every day / skip. Do not create a page or a routine until they pick. Skip notes = no store. Skip routine = save only when asked. After that: saves by `#ID` (durable learnings, not discarded asides); quiet when nothing new. Teach: one idea → concrete example → run the code → harder variation or next concept. When explaining a concept, write naturally: full sentences, enough room to land, not telegram-short bull…

| | |
| --- | --- |
| Original template | https://x.ai/bot/4aTE8S1KT93GkqHYxWIo3 |
| Creator | Tech Dev Notes ([@techdevnotes](https://x.com/techdevnotes)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/interview-prep), [grokbotwiki.com](https://www.grokbotwiki.com/bots/interview-prep), [grokbothq.xyz](https://grokbothq.xyz/bots/interview-prep), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/4aTE8S1KT93GkqHYxWIo3), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/interview-prep), [x-research](https://x.com/techdevnotes/status/2093385170896216257) |
| Fidelity | **full** (full recipe, template version 13) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/interview-prep ~/pi-bots/interview-prep && cd ~/pi-bots/interview-prep
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/interview-prep`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
