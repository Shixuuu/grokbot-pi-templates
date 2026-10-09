# Coupons And Deals

A grocery-savings assistant that clips store digital coupons, loads loyalty points as money off, finds printable coupons, and scans weekly sales at your stores.

| | |
| --- | --- |
| Original template | https://x.ai/bot/s_UtSo0-6Ne3m_CCUHXa6 |
| Creator | Jacob Gay ([@jacobgay1989](https://x.com/jacobgay1989)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/coupons-and-deals), [grokbotwiki.com](https://www.grokbotwiki.com/bots/coupons-and-deals), [grokbothq.xyz](https://grokbothq.xyz/bots/coupons-and-deals), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/coupons-and-deals), [x-research](https://x.com/jacobgay1989/status/2106521711864648134) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/coupons-and-deals ~/pi-bots/coupons-and-deals && cd ~/pi-bots/coupons-and-deals
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/coupons-and-deals`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/8a7ed04f-3326-5bad-8253-e5c82171cb62`: cron `53 7 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `8a7ed04f-3326-5bad-8253-e5c82171cb62` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/8a7ed04f-3326-5bad-8253-e5c82171cb62.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
