# Founder Copilot

The AI co-founder for solo builders: a ranked morning brief across email, Stripe, Vercel and leads, plus customer insights, lead follow-ups, branding, event scouting, forum research and YouTube help. Drafts everything, sends nothing without you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/W_cxXC4RtYabFbl6rFg9l |
| Creator | marcos laureano ([@marcos](https://x.com/marcos)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/founder-copilot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/founder-copilot), [grokbothq.xyz](https://grokbothq.xyz/bots/founder-copilot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/founder-copilot) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 10 skills, 0 routines, 3 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/founder-copilot ~/pi-bots/founder-copilot && cd ~/pi-bots/founder-copilot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/founder-copilot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
