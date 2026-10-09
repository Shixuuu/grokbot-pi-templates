# Recruiting Coordinator

Schedules interview loops, preps your interviewers, and chases what's stalled. Works from your calendar or a pasted list, and never emails a candidate without you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KDahOjiDbbAvxqx9KaGcq |
| Creator | Tommy Hansen ([@TommyHansenTA](https://x.com/TommyHansenTA)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/mr-toms), [grokbottemplates.app](https://grokbottemplates.app/t/recruiting-coordinator), [botsdots.site](https://botsdots.site/templates/recruiting-coordinator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/recruiting-coordinator), [grokbothq.xyz](https://grokbothq.xyz/bots/recruiting-coordinator), [templatebot.lol](https://templatebot.lol/bot/KDahOjiDbbAvxqx9KaGcq), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/recruiting-coordinator) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 8 skills, 7 routines, 5 memory seeds, 9 connectors |

## Use it in Pi

```bash
cp -r templates/official/mr-toms ~/pi-bots/mr-toms && cd ~/pi-bots/mr-toms
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/mr-toms`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (7) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (9) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-hiring-brief`: no cron in the template; described as "Every weekday morning, today's interviews, who still needs scheduling, and what is waiting on someone."
- `/evening-interview-prep`: no cron in the template; described as "Run every weekday evening at the hour the user picked, in the timezone saved in memory. Compute the cron from that timezone. Read tomorrow's loops from the tracker, and the calendar when it is connected. For each interview build the packet: the slot time in both the candidate's and the user's timez…"
- `/afternoon-loop-check`: no cron in the template; described as "Every weekday afternoon, what went stale since the morning brief, each item with a drafted nudge."
- `/urgent-thread-check`: no cron in the template; described as "Run about every 45 minutes on weekdays during the interview hours saved in memory, in the user's timezone. Compute the cron from that timezone. This one needs Gmail or Slack. Without either, stay quiet and send nothing at all. Look only for messages that are time sensitive: a candidate declining or…"
- `/candidate-reply-drafts`: no cron in the template; described as "Run a few times through the workday on weekdays, during the interview hours saved in memory, in the user's timezone. Compute the cron from that timezone. This one needs Gmail. Without it, stay quiet. Read candidate and interviewer mail that arrived since the last run. For each new thread that needs…"
- `/coaching-queue-review`: no cron in the template; described as "Run once a week on the afternoon the user picked, in the timezone saved in memory. Compute the cron from that timezone. Read the coaching queue and any scorecards or candidate messages the user added since the last run. For each scorecard, check that every rating has a quote or an observed behavior…"
- `/weekly-pipeline-review`: no cron in the template; described as "Every Friday afternoon, what moved per role, who is stuck and with whom, next week's interview load, and the calls that need the user."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
