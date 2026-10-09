# Kitchen Affiliate Ops

Installable Ops desk for US Associates kitchen decision guides: Research→Coder→Verifier→deploy with hard honesty gates. Clone this — don’t rebuild the crew.

| | |
| --- | --- |
| Original template | https://x.ai/bot/SD3AtfO9y4ndQ1wk1Z9Cq |
| Creator | Good Peeps ([@Chebino](https://x.com/Chebino)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/kitchen-affiliate-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kitchen-affiliate-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/kitchen-affiliate-ops), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/Chebino/status/2104486046230851641) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/kitchen-affiliate-ops ~/pi-bots/kitchen-affiliate-ops && cd ~/pi-bots/kitchen-affiliate-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/kitchen-affiliate-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
