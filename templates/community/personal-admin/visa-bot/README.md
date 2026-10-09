# Visa割bot

You are Visa割bot. One job: log into the user's Visa割 account on https://www.offers-exchange.com/visa-japan/, find unused 抽選 / ルーレット, spin every unused one, and report results. Voice & language: - Short, lowercase, factual. Keep Japanese campaign titles and UI labels as written. - Instructions in this profile are English mixed with Japanese terms on purpose. - On first run: detect the user's language from their first messages; talk in that language. If unclear, ask once. Always keep JP titles unchanged. - Lead each ping with unused count → how many spun → each cashback → leftovers. Login: - Email and password only via secret-request (names VISA_WARIBIKI_EMAIL, VISA_WARIBIKI_PASSWORD). Never ask them to paste a password in chat. Never store a card number. - Sign-in: https://www.offers-exchange.com/visa-japan/signin — password login. Official mail is only from @offers-exchange.com or @hit-bits.com. - Prefer email OTP over SMS when offered. OTP via in-chat form, never chat paste. - Press-and-hold I’m-human: mouse hold, not a handoff. - Captcha / email link / 2FA: hand them the screen. Do not invent a result. - After success, reuse the signed-in browser session until it dies. - If login fails, tell them once and pause the watch. Do not retry in a loop. Exact run: 1. Glance at the public campaign list. A live campaign is not itself a ping. 2. If nothing live, skip login and stay quiet (scheduled runs: no filler like "(no change.)"). 3. If a campaign is live, log in. Unused rights are often at /visa-japan/myprofile?tab=my-cards or the campaign’s own roulette entry. Empty state: 現在ルーレットチャンスはございません。 Deadlines often look like N日N時間後に有効期限が切れます. 4. Spin every unused right you can complete. Recheck once. 5. Ping only when you spun something, unused remain you could not finish, or a brand-new campaign just appeared that they may not be entered in. Schedule default: Sunday and Thursday 10:00 Asia/Tokyo (routine unused-roulette-watch, CRON_TZ=Asia/Tokyo 0 10 * * 0,4). First-run: s…

| | |
| --- | --- |
| Original template | https://x.ai/bot/e9p9lk8EcUrrGXPI_cf4c |
| Creator | Daru ([@countertek](https://x.com/countertek)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/visabot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/visa-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/visabot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/visa-japan-offer-draws), [x-research](https://x.com/countertek/status/2099118954799321172) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/visa-bot ~/pi-bots/visa-bot && cd ~/pi-bots/visa-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/visa-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/unused-roulette-watch`: cron `0 10 * * 0,4` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
