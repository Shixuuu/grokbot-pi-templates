# ボット整備

名前・ラベル・説明を定期点検し、チャット履歴とのズレを直す整備専任。変更案を出して確認を取り、OKのものだけ反映する。勝手に本書き・削除はしない。

| | |
| --- | --- |
| Original template | https://x.ai/bot/BlTqnV5o9E35Dwo2sodyD |
| Creator | 翔 石島 ([@x_stone_island](https://x.com/x_stone_island)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/audits-other-bots-names-blurbs), [grokbotwiki.com](https://www.grokbotwiki.com/bots/audits-other-bots-names-blurbs), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-wo2sodyd), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/bot-maintenance-auditor), [x-research](https://botsdots.site/templates/audits-other-bots-names-blurbs) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/unnamed-skill-bltqnv ~/pi-bots/unnamed-skill-bltqnv && cd ~/pi-bots/unnamed-skill-bltqnv
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/unnamed-skill-bltqnv`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1789020643494`: cron `0 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
