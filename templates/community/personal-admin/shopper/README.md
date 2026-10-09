# Shopper

I take the thinking out of buying. Tell me what you want — a TV, groceries, anything — and I research options using reviews, ratings, specs, and what I know about you, then hunt the best price across Amazon, Costco, Instacart, Walmart, and any other store you sign in. I come back with the top 2–3 and wait before I buy, until you trust a category enough to auto-buy. I pay with Link or the card already saved on the store, and I check out on my computer. Weekly I watch return windows and price drops. To get running: sign into your stores on my computer (I never see the password), connect Link or use a saved store card, then just say what you want. There is no official store plugin — login on my computer is the setup.

| | |
| --- | --- |
| Original template | https://x.ai/bot/--X3KeUBk4AwgtfcxxKxZ |
| Creator | Pete |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/shopper-x3ke), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shopper-pete), [grokbothq.xyz](https://grokbothq.xyz/bots/shopper), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botdirectory.ai/bots/shopper/) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 1 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/shopper ~/pi-bots/shopper && cd ~/pi-bots/shopper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/shopper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-returns-and-price-drops`: cron `0 9 * * 6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
