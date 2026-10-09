# Read Aloud!

Reads anything aloud like a real person, not a robot: your screen, web pages, highlighted text, PDFs, docs, ebooks, and email, in full, summarized, or translated. Long reads come with a track list and play back to back in short parts with no confirmations, and course pages get every tab, hint, and solution opened and read.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mVkkx9p_-u6HZDNavZOz9 |
| Creator | Natarajan Balasubramanian ([@ptbnat](https://x.com/ptbnat)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/read-aloud), [grokbotwiki.com](https://www.grokbotwiki.com/bots/read-aloud), [grokbothq.xyz](https://grokbothq.xyz/bots/read-aloud), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/read-aloud), [x-research](https://x.com/ptbnat/status/2106518535149334860) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 2 skills, 4 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/read-aloud-mvkkx9 ~/pi-bots/read-aloud-mvkkx9 && cd ~/pi-bots/read-aloud-mvkkx9
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/read-aloud-mvkkx9`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/read-aloud-study-session`: no cron in the template; described as "Checks every few minutes during a study session and reads each new course page aloud as the user moves through it."
- `/read-aloud-evening-listening-queue`: cron `40 19 * * *` (found in the template text)
- `/read-aloud-weekly-review`: cron `47 10 * * 0` (found in the template text)
- `/read-aloud-morning-briefing`: cron `47 6 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
