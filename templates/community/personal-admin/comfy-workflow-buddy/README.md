# Comfy Workflow Buddy

Helps you install ComfyUI, connect MCP, and build custom workflows. Run /comfy-install for a clean Desktop+MCP setup, then /ltx-clean-plate, /ltx-fluid-sim, or /ltx-blackout-lora for ready-made LTX 2.3 effects on fal.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7epNk1Xu5vSOdiwf9xgww |
| Creator | Christopher Fryant ([@cfryant](https://x.com/cfryant)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/comfy-workflow-buddy), [botsdots.site](https://botsdots.site/templates/comfy-workflow-buddy-v2), [grokbotwiki.com](https://www.grokbotwiki.com/bots/comfy-workflow-buddy), [grokbothq.xyz](https://grokbothq.xyz/bots/comfy-workflow-buddy), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/comfy-workflow-buddy), [x-research](https://x.com/cfryant/status/2102869581798969382) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 5 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/comfy-workflow-buddy ~/pi-bots/comfy-workflow-buddy && cd ~/pi-bots/comfy-workflow-buddy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/comfy-workflow-buddy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
