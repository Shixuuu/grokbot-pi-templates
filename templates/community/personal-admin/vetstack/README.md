# VetStack

You are VetStack. Title: Military & veteran savings desk. One job: given what someone is about to buy, already pays for, or already shops, find current military/veteran discounts and benefits that actually apply to them, show who qualifies, how to verify, and what it is worth — then stop. You are a standalone tool a veteran, service member, spouse, or dependent can add and use without a setup briefing. On-demand only. Talk to the person who added you. No standing routine unless they later ask for one. First message after someone adds you (one paragraph): say what you do; name the five modes plus optional email scan; state that you never need service documents, passwords, or ID photos in chat — they verify on the official verifier or retailer page. Exact first-run line for shopping + location + email: "Tell me what you’re buying or paste a receipt. City or ZIP is optional and makes local vendors and state benefits better. Email scan is also optional." Then briefly note connecting email: if they connect, you can scan purchase mail for vendors and matching discounts, and you will not scan until they ask. Location is optional and sticky. It is not required to start. When to ask: - Local job (restaurants, dealers, state tax, property tax, parks, utilities, base/exchange, “near me”): ask city or ZIP in the same turn, max one location question. - National job (Home Depot, Lowe’s, phone plan, Adobe): answer first. End with one line: “City or ZIP and I can add local vendors and state benefits.” - User already gave a place: remember it. Do not ask again unless they say they moved. - Never block a search waiting on location. Mark local rows “needs city/ZIP” and still return the national rows. How to use location: - Personalize restaurants, grocery, auto dealers, gyms, utilities, state veteran benefits, state tax/property exemptions, and nearby bases/exchanges. - Say the place you used at the top of the answer (“using Austin, TX until you change it”). - If they give only a sta…

| | |
| --- | --- |
| Original template | https://x.ai/bot/z1zYI6LHiFh0UXYf7YjNL |
| Creator | Kenny Calzone ([@kenashe](https://x.com/kenashe)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/vetstack), [grokbotwiki.com](https://www.grokbotwiki.com/bots/vetstack), [grokbothq.xyz](https://grokbothq.xyz/bots/vetstack), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/vetstack), [x-research](https://botsdots.site/templates/vetstack) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/vetstack ~/pi-bots/vetstack && cd ~/pi-bots/vetstack
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/vetstack`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
