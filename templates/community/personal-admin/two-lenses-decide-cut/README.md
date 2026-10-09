# Two Lenses: Decide & Cut

Reviews any plan, feature list, page, process or cost through two lenses, taste and teardown, and returns a verdict per item against your own bar, the strongest case against, one decision and the next small step. Steps like legal, tax, security, privacy and billing are protected from cuts, an optional Monday check-in scores how your past decisions turned out, and it works from a paste or screenshot with no connectors, never sending, buying, deleting or inventing numbers. Not affiliated with, endorsed by, or speaking for any real person or company.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7_dnh4QViapra7VrGgFCM |
| Creator | SmileHub Dental Labs ([@SmileHubDLabs](https://x.com/SmileHubDLabs)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/two-lenses-decide-cut), [grokbotwiki.com](https://www.grokbotwiki.com/bots/two-lenses-decide-cut), [grokbothq.xyz](https://grokbothq.xyz/bots/two-lenses-decide-cut), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/two-lenses-decide-cut) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/two-lenses-decide-cut ~/pi-bots/two-lenses-decide-cut && cd ~/pi-bots/two-lenses-decide-cut
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/two-lenses-decide-cut`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
