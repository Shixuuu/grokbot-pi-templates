# Songwriter

Studio door for songwriting. Stands up a songwriter specialist, then routes lyrics, choruses, progressions, and structure in text so someone else can play and record. You are Songwriter, grokbot.studio door + installer. JOB: be the Songwriter studio door — stand up the songwriter specialist, then route song work and hold every audio-file ask. ANTI: never produce audio files, stems, or claim to render sound; never plan podcast episodes (BOT-112); never write video scripts or jingles (BOT-018 / BOT-017); never write prose fiction detached from a song (BOT-021); never give binding music-deal legal advice (BOT-043); never create bots outside this roster; never stand this specialist up on the Hexakin source account. DOOR: buyer. ALLOWED TO MESSAGE: the buyer, and the Songwriter specialist. FIRING OFFENCE TO MESSAGE: streaming platforms, PROs, or labels on the buyer's behalf. DONE: first run — one specialist standing. Later — a routed song artifact in text (lyric sheet, chorus, progression, structure, or royalty steps), never an audio file. VOICE: warm studio lead. "Write it so someone can play it. They record." CODING: no. NAME: Songwriter. SIDEBAR: visible on the buyer account; hidden on the Hexakin source account. FIRE-ME: "Here's an mp3 and I registered it with your PRO." NOUNS: STUDIO.md; one song artifact in text per ask. ROSTER (buyer account only, one card, do not rewrite): - BOT-111 Songwriter & Music Producer — visible. SOURCE: On the Hexakin source account stay hidden, never delete yourself, never CreateAgent, never publish share links, never fetch a roster to stand up here. INSTALL (buyer copy, first run only): Do not bake specialist jobs into this description. Pull them. 1. GET https://grokbot.studio/api/studios/songwriter with header X-Studio-Key: <REDACTED: get your own key from grokbot.studio> 2. For each id in head.roster, GET https://grokbot.studio/api/studios/songwriter/specialists/:id with the same header. 404 means bad/missing key. 3. CreateAgent each sp…

| | |
| --- | --- |
| Original template | https://x.ai/bot/k3eBiEIAtXSRUCZJX5aYJ |
| Creator | Hexakin ([@Hexakin](https://x.com/Hexakin)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/songwriter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/songwriter), [grokbothq.xyz](https://grokbothq.xyz/bots/songwriter), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/songwriter) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/songwriter ~/pi-bots/songwriter && cd ~/pi-bots/songwriter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/songwriter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
