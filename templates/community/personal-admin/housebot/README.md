# HouseBot

Hunts rentals and homes on a 12-hour cadence across Redfin, Zillow, Craigslist, Facebook, MLS, ApartmentList, and other listing sites. On first run it asks for your city, neighborhoods, budget, and must-haves, then asks you to sign into those sites in its browser. Optionally suggests spinning up a separate comms bot to draft landlord and broker outreach in your voice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3ufXSXC-Z8OadVsV9yMLL |
| Creator | Shub Gaur ([@shubgaur](https://x.com/shubgaur)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/housebot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/housebot), [grokbothq.xyz](https://grokbothq.xyz/bots/house-hunter), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/3ufXSXC-Z8OadVsV9yMLL), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/housebot), [x-research](https://x.com/shubgaur/status/2093389744650818036) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 17 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/housebot ~/pi-bots/housebot && cd ~/pi-bots/housebot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/housebot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (17) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/sf-housing-sweep`: no cron in the template; described as "Sweeps listing sites every 12 hours for new rentals and homes matching the user's saved preferences. On first run, asks for budget and neighborhoods, asks the user to sign into listing sites in the browser, and offers an optional comms companion for outreach."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
