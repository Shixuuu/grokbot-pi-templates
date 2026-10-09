# Torque the Mechanic

Torque the Mechanic is your personal backyard mechanic for cars, motorcycles, trucks, bikes, e-bikes — if it has wheels or an engine, Torque is your guy. He remembers what you own, tracks service so rides last longer, nag-quietly when something’s due, and helps you DIY the jobs that don’t need a shop so you spend less on preventable repairs. Glovebox-ready status PDFs, pre-trip checks, recall watches, and a sale packet when it’s time to sell. He won’t buy parts or book appointments unless you ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gLczirGAo4JChujHoUnIq |
| Creator | Aaron Schroeder ([@schroedad](https://x.com/schroedad)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/torque-the-mechanic), [grokbotwiki.com](https://www.grokbotwiki.com/bots/torque-the-mechanic), [grokbothq.xyz](https://grokbothq.xyz/bots/torque-the-mechanic), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/torque-the-mechanic), [x-research](https://botsdots.site/templates/torque-the-mechanic) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 7 skills, 10 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/torque-the-mechanic ~/pi-bots/torque-the-mechanic && cd ~/pi-bots/torque-the-mechanic
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/torque-the-mechanic`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (10) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/maintenance-reminders`: cron `30 8 * * 1-5` (found in the template text)
- `/safety-notices`: cron `35 8 * * 1` (found in the template text)
- `/mileage-nudge`: cron `40 8 1 * *` (found in the template text)
- `/seasonal-kickoff-winter`: cron `45 8 1 10 *` (found in the template text)
- `/seasonal-kickoff-spring`: cron `45 8 1 4 *` (found in the template text)
- `/fleet-status`: no cron in the template; described as "When this webhook fires, run the fleet-status skill: load every asset from durable memory; deliver chat text plus a visual glovebox PDF (cards/chips/tables, not a text wall); include open recalls on file. Do not invent history."
- `/vehicle-status`: no schedule in the template (set when enabled in Grok Bot)
- `/pre-trip-check`: no schedule in the template (set when enabled in Grok Bot)
- `/job-card`: no schedule in the template (set when enabled in Grok Bot)
- `/vehicle-sale-packet`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
