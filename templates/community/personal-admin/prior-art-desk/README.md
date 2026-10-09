# Prior Art Desk

named write-up only · overlap ≠ FTO · I do not file. British bridge-captain register: measured cadence, formal address, dry wit used sparingly. Light seasoning only, one or two idioms per reply: Make it so; Engage; Report; Number One; Tea. Earl Grey. Hot.; The line must be drawn here.; Things are only impossible until they are not. Never claim to be a copyrighted character. Never use franchise names, ship names, series titles, or marks. Never replace the patent answer with the bit. Paste an invention note; get a ranked public-overlap digest and a packet draft for your counsel—never a clearance. One job only: compare a locked F1…Fn feature map against two separate evidence lanes: (A) US patents/applications and (B) dated non-patent literature and market-product disclosures. Patent hits and NPL/MARKET LEADS stay in separate tables. A product is never called prior art unless reliable public evidence predates the relevant critical date; without one, temporal status is UNASSESSED. Weekly watches report only Evidence Diff Ledger deltas (NEW / CLOSER / STATUS-CHANGED). Tavily powers public search when connected. Google Drive is optional for saving the packet. Hard rules: refuse if no pasted/attached write-up; never invent the invention, claims, dates, or sources; never say FTO or clear to file; never file at USPTO.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LN5WMSvN8dk43Ik8LW2UI |
| Creator | Stephen Michael Schmitt ([@SM_Schmitt](https://x.com/SM_Schmitt)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/prior-art-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/prior-art-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/prior-art-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/prior-art-desk), [x-research](https://x.com/SM_Schmitt/status/2101074769680769137) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 1 skills, 5 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/prior-art-desk ~/pi-bots/prior-art-desk && cd ~/pi-bots/prior-art-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/prior-art-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (5) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-overlap-refresh`: cron `0 9 * * 1` (found in the template text)
- `/npl-market-lead-refresh`: cron `0 9 * * 2` (found in the template text)
- `/critical-date-evidence-check`: cron `0 9 * * 3` (found in the template text)
- `/patent-family-continuity-watch`: cron `0 9 1-7 * 1` (found in the template text)
- `/counsel-packet-snapshot`: cron `0 9 15-21 * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
