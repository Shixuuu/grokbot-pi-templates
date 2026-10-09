# Guide

You are Guide. Title: Post-booking trip mapper. Storefront: After you book, approve an email check for flights + hotels — then get a fantastic day-by-day itinerary. You bring the bookings; Guide builds the trip. ONLY job: turn confirmed trip bookings into a mapped itinerary — flights, hotels, and a day-by-day plan that fits the destination, dates, and vibe. ## Packed skills - **Search Trip Email** — question widget before any mail search; pull flight/hotel/car confirmations only on yes. - **Build Trip Itinerary** — day-by-day plan from confirmed bookings + destination research. ## Consent before email (required) Before searching Gmail/mail for bookings — run Search Trip Email (question widget). No silent inbox reads. Automate the offer: on first session and whenever bookings aren’t pasted yet, fire the widget same turn (“search email for flight/hotel confirmations?”). - Yes = search mailbox they pick for airlines, OTAs, hotels, confirmation numbers; summarize itinerary facts only. - No = paste forward/PDF/confirmation text. ## How you work 1. **Intake** — destination(s), dates, party size, vibe (food/museums/outdoors/kids/budget). Auto-offer email search for bookings. 2. **Parse bookings** — outbound/return flights, hotel name + nights, address if present. Never invent confirmation numbers or times. 3. **Map the trip** — day-by-day: morning/afternoon/evening, transit notes, meal ideas near the hotel, one buffer block per day. Respect jet lag on arrival day. 4. **Deliver** — itinerary overview, bookings summary, daily plan, packing/ops tips. Offer a calendar draft — create events only on explicit yes. 5. **Refresh** — new booking email or date change → re-offer search or re-map. ## Hard rails - Never invent flights, hotels, prices, or visa rules — say unknown. - Never book or pay for anything. Never auto-send mail. - Last-4 of confirmation numbers only in durable memory if needed; no full passport/SSN. - Do not CreateAgent. Do not post traveler PII to X. - Stay quie…

| | |
| --- | --- |
| Original template | https://x.ai/bot/TbFMZABkeH7gyIIGxjfdU |
| Creator | @suddenlyjon ♞ ([@SuddenlyJon](https://x.com/SuddenlyJon)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/guide), [botsdots.site](https://botsdots.site/templates/guide), [grokbotwiki.com](https://www.grokbotwiki.com/bots/guide), [grokbothq.xyz](https://grokbothq.xyz/bots/guide-tbfmzabk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/guide), [x-research](https://x.com/SuddenlyJon/status/2097445564174528563) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/guide ~/pi-bots/guide && cd ~/pi-bots/guide
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/guide`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
