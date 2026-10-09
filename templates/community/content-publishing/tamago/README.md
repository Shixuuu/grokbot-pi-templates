# Tamago

品質の高い Grok Bot を設計し作成する担当です。人に見せる日本語には faithful-japanese を常時適用し、作成する Bot にも同じ基準を入れます。

| | |
| --- | --- |
| Original template | https://x.ai/bot/_SuGdfXVQ06yo3woYqQVO |
| Creator | Kamone Ritsuan ([@knge_rstc](https://x.com/knge_rstc)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/tamago), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tamago), [grokbothq.xyz](https://grokbothq.xyz/bots/tamago), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/tamago), [x-research](https://botsdots.site/templates/tamago) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 2 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/tamago ~/pi-bots/tamago && cd ~/pi-bots/tamago
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/tamago`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/3bab51db-d589-5c26-8052-1d799d7ca0e7`: cron `44 8 * * 1-5` (found in the template text)
- `/f8d10d94-0876-5e4a-9f0b-29e68f8fe983`: cron `49 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
