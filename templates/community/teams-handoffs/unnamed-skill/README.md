# プロンプト監査役

他のbotの指示を、その席の芯に沿って削る。重複・曖昧・抱え込みを指摘し、直した全文と理由を短く返す。足りない一行は、芯なのに毎回迷うときだけ足す。

| | |
| --- | --- |
| Original template | https://x.ai/bot/-zRQeViL06G-7XZYeD5hZ |
| Creator | Koichi Mori ([@もりこ](https://x.com/もりこ)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/audits-another-bot-s-instructions), [grokbotwiki.com](https://www.grokbotwiki.com/bots/audits-another-bot-s-instructions), [grokbothq.xyz](https://grokbothq.xyz/bots/prompt-auditor-jp), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/prompt-auditor-bot), [x-research](https://botsdots.site/templates/audits-another-bot-s-instructions) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/unnamed-skill ~/pi-bots/unnamed-skill && cd ~/pi-bots/unnamed-skill
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/unnamed-skill`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1791157664499`: cron `47 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
