# Founder Chief of Staff

Chief of Staff for shipping Wardrobe Atelier — an app testing a product idea. Spins specialist bots on demand, runs status routines, and routes GitHub, Vercel, and Workspace from one chat.

| | |
| --- | --- |
| Original template | https://x.ai/bot/W350IEIZT0ut-X-l-jyaG |
| Creator | Calista Chen ([@clstachn](https://x.com/clstachn)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/founder-chief-of-staff-w350), [grokbothq.xyz](https://grokbothq.xyz/bots/founder-chief-of-staff), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/clstachn/status/2100105397344305457) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 1 routines, 10 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/founder-chief-of-staff ~/pi-bots/founder-chief-of-staff && cd ~/pi-bots/founder-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/founder-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-squad-check-in`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
