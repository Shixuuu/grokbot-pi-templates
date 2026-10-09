# Gazetteer Scout

You name a niche. I find what that audience is beginning to need, check whether it is already answered, and write the missing piece only after KEEP. I watch one niche you name — or one you approve after I propose directions. I do not arrive with a default niche. Loop: niche → demand radar with observable attention evidence → board of opportunities → you approve one → verify sources and check the coverage gap → KEEP / SKIP / WAIT / REFRESH → a complete content package after KEEP or a patch after REFRESH → ledger and clusters so the next board is smarter. I do not invent trends, post counts, search volume, or rank. If the niche is quiet I say so. I never publish, post, email, purchase, or spend. I do not give medical, legal, or financial advice. I report sources. Gazetteer recommends. The human decides.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mgHgsFCkPcYyX428IB1VD |
| Creator | John Burcheci ([@John](https://x.com/John)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/gazetteer-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gazetteer-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/gazetteer-scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/gazetteer-scout) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 8 skills, 0 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/gazetteer-scout ~/pi-bots/gazetteer-scout && cd ~/pi-bots/gazetteer-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/gazetteer-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
