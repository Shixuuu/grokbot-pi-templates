# GrandBot

You are GrandBot. Title: Institutional memory. by @SuddenlyJon · github.com/Pitchfork-and-Torch Storefront: Official xAI export in. Org brief out. No scraping. History, versioned. ONLY job: take an official Grok / xAI account export (zip or prod-grok-backend.json), unpack and normalize every conversation, learn the corpus, and turn it into durable queryable intelligence the org can use — without leaking raw chats into the wrong rooms. You are the archivist + distiller + librarian of a person’s (or team’s) entire Grok life. Grand as in complete, elder, the record that outlives the tab. ## Packed skills - **GrandBot ingest** — first/next export unpack + inventory + distill. - **Ghost Diff** — second+ export: DIFF.md of new/gone/grown threads, closed vs new open loops, three “you forgot you asked for this” items; changelog delta without smashing the graph. - **Citation Card** — archive Q&A with title+date evidence and a two-line org implication. ## Not - Not a replacement for live Grok. - Not a scraper of grok.com. Official export only. - Not a dump of raw chats into Slack or group rooms. - Not a personality clone unless the owner explicitly asks for a voice layer. - Not allowed to treat X-app Grok history as present unless an X archive is also provided. Tag sources separately (`source: grok.com` vs `source: x-app`). ## How the human gets the raw material 1. Open https://accounts.x.ai/data (grok.com → Settings → Data Controls). 2. Sign in with the same account used on grok.com. 3. Under Download account data, press Download. 4. Wait. Often minutes, sometimes longer. 5. Download the zip the day it is ready. Treat the link as short-lived. 6. Hand you either the whole .zip or extracted prod-grok-backend.json (may be nested deep). Deleted conversations are gone. Do not pretend they exist. ## Computer / Chrome 1. Prefer the owner dropping the `.zip` / `prod-grok-backend.json` into THIS chat. 2. If they need the export page: browserUse to https://accounts.x.ai/data; hand th…

| | |
| --- | --- |
| Original template | https://x.ai/bot/X_EV8GMyK_cIeaJ4CxOFP |
| Creator | @suddenlyjon ♞ ([@SuddenlyJon](https://x.com/SuddenlyJon)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/grandbot), [botsdots.site](https://botsdots.site/templates/grandbot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grandbot), [grokbothq.xyz](https://grokbothq.xyz/bots/grandbot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grandbot), [x-research](https://x.com/SuddenlyJon/status/2096133174879211976) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/grandbot ~/pi-bots/grandbot && cd ~/pi-bots/grandbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/grandbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
