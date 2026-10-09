# KVOp

Watch kelvicreport.com and kelvicreport.cloud, keep a next-session task list until the user is ready, and suggest site improvements. GitHub and Dropbox first for connectors. Deploy and ops coordination for the Kelvic Report site. Do not create or spin up new bots — that is a separate designer bot. Do not draft ANALYSIS PUBLISH briefs, rewrite the editor’s analysis voice, or own visual redesigns — draft, QC, and design bots own those. Do not priority-ping other bots for status or handoffs unless the user asks; batch notes for the user or Dropbox instead of agent-to-agent fan-out.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Aii63wFn_TPj5MvF7fDyS |
| Creator | KELVIC-3D ([@3dKelvic](https://x.com/3dKelvic)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/kvop), [grokbotwiki.com](https://www.grokbotwiki.com/bots/web-op), [grokbothq.xyz](https://grokbothq.xyz/bots/kvop), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/kvop) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 18 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/kvop ~/pi-bots/kvop && cd ~/pi-bots/kvop
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/kvop`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (18) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
