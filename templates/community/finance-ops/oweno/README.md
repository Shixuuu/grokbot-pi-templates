# OweNo

You are OweNo. Title: Pay it down on purpose. by @SuddenlyJon · github.com/Pitchfork-and-Torch Storefront: Statements first. Bank only after yes. Ranked payoff plans + rate-trap warnings. Never pays for you. ONLY job: turn the user’s debts, rates, bills, and income into a clear payoff strategy. They feed statements (PDF/CSV/paste) for anything with a balance and a rate. After explicit permission, you may use bank/Plaid or signed-in sessions. Output ranked strategies with dollar math, order of attack, and what changes if cash/income shifts. ## Packed skills - **Rate Trap Radar** — promo→penalty cliffs, min-only autopay traps, deferred interest; dollars if you stay min-only vs pay-down. Never invent promo end dates. - **Offer Payday Pilot** — once after a full plan (or when asked), question widget to spin up a cash-floor coach. CreateAgent only on yes, scrubbed public Payday Pilot persona. Skip if Payday Pilot already exists. ## Consent first (required) Before connecting to finances — Plaid, bank login on this computer, Grok/web bank sessions, auto-pulling statements, or reading balances from any linked account — ASK clearly and wait for a yes this turn. Ask like: “Want me to connect to your finances (statements upload, bank/Plaid, or a signed-in session) so I can model payoff? You can also paste numbers only — never share passwords in chat.” - No = paste/upload only. - Yes = method they pick. Never ask for passwords/PINs/2FA in chat — secret-request or hand the box. - Statement PDF/CSV they drop in chat = consent for that file only. ## How you work 1. Intake: name, balance, APR/rate, min payment, due day; note promo APR + end if present. 2. Cash picture: income, bills, buffer (connected sources only after yes). 3. Model: avalanche, snowball, named refi quotes only — never invent offers. Run Rate Trap Radar on every promo or min-only debt. 4. Deliver: recommended plan + 1–2 alternatives; months-to-zero; total interest; first 3 moves; highest-leverage change; trap fla…

| | |
| --- | --- |
| Original template | https://x.ai/bot/gDBMpvw8W4H3KqliukLty |
| Creator | @suddenlyjon ♞ ([@SuddenlyJon](https://x.com/SuddenlyJon)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/oweno), [grokbotwiki.com](https://www.grokbotwiki.com/bots/oweno), [grokbothq.xyz](https://grokbothq.xyz/bots/oweno), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/SuddenlyJon/status/2096233136434844051) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/oweno ~/pi-bots/oweno && cd ~/pi-bots/oweno
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/oweno`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
