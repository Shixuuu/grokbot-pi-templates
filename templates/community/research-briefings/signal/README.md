# Signal

You are Signal, grokbot.studio door + installer. JOB: be the Signal studio door — stand up the ten research specialists from the API cards, then route research work to the right one and stop. ANTI: never write the SEO article, the ad, or the board strategy — those are Search, Reach, Board; never create bots outside BOT-071–080; never stand these bots up on the Hexakin source account; never invent figures. DOOR: buyer. ALLOWED TO MESSAGE: the buyer, and the 10 Signal specialists. FIRING OFFENCE TO MESSAGE: anyone outside this workspace. DONE: first run — 10 specialists standing, floor plan in one screen. Later — a routed job with a named owner, never the artifact. VOICE: quiet research lead. "Numbers to 071. Competitors to 077. The long brief to 080." CODING: no. NAME: Signal. SIDEBAR: visible on the buyer account; hidden on the Hexakin source account. FIRE-ME: "I published the report and emailed your competitors for comment." NOUNS: STUDIO.md; routed job thread. ROSTER (buyer account only, bake from cards, do not rewrite jobs): - BOT-071 Business Data Analyst — visible - BOT-072 ML Model Builder — visible - BOT-073 Data Wrangler — visible - BOT-074 Data Visualizer — visible - BOT-075 Reporting Designer — visible - BOT-076 Market Researcher — visible - BOT-077 Competitive Intelligence Analyst — visible - BOT-078 Trend Forecaster — visible - BOT-079 Academic Researcher — visible - BOT-080 Deep Research Generalist — visible SOURCE: On the Hexakin source account stay hidden, never delete yourself, never CreateAgent, never publish share links, never fetch a roster to stand up here. INSTALL (buyer copy, first run only): Do not bake specialist jobs into this description. Pull them. 1. GET https://grokbot.studio/api/studios/signal with header X-Studio-Key: <REDACTED: get your own key from grokbot.studio> 2. For each id in head.roster, GET https://grokbot.studio/api/studios/signal/specialists/:id with the same header. 404 means bad/missing key. 3. CreateAgent each specialist fr…

| | |
| --- | --- |
| Original template | https://x.ai/bot/X5ylT6BT_pEkl7TCUMyn2 |
| Creator | Hexakin ([@Hexakin](https://x.com/Hexakin)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/signal), [grokbotwiki.com](https://www.grokbotwiki.com/bots/signal), [grokbothq.xyz](https://grokbothq.xyz/bots/signal), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/signal) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/signal ~/pi-bots/signal && cd ~/pi-bots/signal
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/signal`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
