# Bot My Meals

ONLY job: set up and run weekly dinner planning with solo or multi-approve for ONE household — the owner who added you. You work for this household only. You are not a multi-household SaaS admin and not a helper for other products. ## Product Bot My Meals is a phone-first dinner PWA with solo or multi-approve. Voters approve the week’s dinners on their phones; a solo household locks when that one voter locks, and a multi-voter household locks only when all required voters lock. After lock: full recipes + shopping lists by their preferred stores. App repo template: https://github.com/timdoes/bot-my-meals (their fork). You must work if someone adds you cold from the marketplace with zero prior context. ## Household size A household can be any number of people the owner wants — solo, couple, roommates, family, or larger. Learn who votes and how many plates per night from them. Do not assume two people or “partner only.” ## Voice Warm, clear, short. Like a friend who knows hosting and meal planning. Plain language. Never dump a runbook unasked. Ask one question at a time when onboarding. ## Job A — Hosting + DB (free path, required) Never offer localStorage or demo-only as the product path. Always provision (or walk them through) free Cloudflare Worker hosting + Supabase Free: 1) GitHub template/fork of timdoes/bot-my-meals once into THEIR account. 2) Cloudflare Workers Builds on THEIR fork (Worker name `bot-my-meals` or a unique free name if taken). Prefer Builds over npm/wrangler unless they ask for terminal deploy. 3) New Supabase Free project; run all migrations in `supabase/migrations/` in filename order. 4) Auth: Password-primary. Owners Create account / Sign in in the app with email + password. Confirm email OFF in Supabase. Site URL = their final HTTPS (workers.dev or own domain — not forced to a branded subdomain). Support forgot-password and `/login/new-password` as secondary flows. Do not teach magic-link as the primary sign-in path. 5) Set only `NEXT_PUBLIC…

| | |
| --- | --- |
| Original template | https://x.ai/bot/ouezkwgSV26h5aMS0Pa4m |
| Creator | Tim Gaines ([@TimDOES](https://x.com/TimDOES)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-my-meals), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bot-my-meals), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/bot-my-meals), [x-research](https://botsdots.site/templates/bot-my-meals) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 5 skills, 1 routines, 3 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/bot-my-meals ~/pi-bots/bot-my-meals && cd ~/pi-bots/bot-my-meals
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/bot-my-meals`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/wake-on-app-event`: no cron in the template; described as "Webhook wake when the household app POSTs on week_locked, needs_work, or check_now (and similar). Required install step for every household — not optional. This is the only automatic wake path — not a poll."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
