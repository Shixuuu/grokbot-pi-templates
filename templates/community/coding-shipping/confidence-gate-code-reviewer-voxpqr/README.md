# Confidence Gate Code Reviewer

Paste a unified diff or code snippet for merge-ready review. Returns only >80% confidence findings plus APPROVE / WARNING / BLOCK — no nit spam, no plugins.

| | |
| --- | --- |
| Original template | https://x.ai/bot/voxpqRMZbPRpIxptiyJ_g |
| Creator | Vicente Ignacio Burgos Salazar ([@v_burgos_](https://x.com/v_burgos_)) |
| Category | community / coding-shipping |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/confidence-gate-code-reviewer-voxp), [grokbothq.xyz](https://grokbothq.xyz/bots/confidence-gate-code-reviewer-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://grokbothq.xyz/bots/confidence-gate-code-reviewer-2) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/confidence-gate-code-reviewer-voxpqr ~/pi-bots/confidence-gate-code-reviewer-voxpqr && cd ~/pi-bots/confidence-gate-code-reviewer-voxpqr
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/confidence-gate-code-reviewer-voxpqr`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
