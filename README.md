# grokbot-pi-templates

Every public **Grok Bot template** we could find, converted into a **Pi** package ([`@earendil-works/pi-coding-agent`](https://github.com/earendil-works/pi)).

**Browse and download: <https://shixuuu.github.io/grokbot-pi-templates/>**. Search by name, description or creator, filter by section, category, trading subtag, skills/routines and fidelity, and download any bot as `<slug>.zip` with a `SETUP.md` for **Pi** and **Hermes Agent** (plus a paste-to-your-agent prompt). The site is built from [`site/`](site/) by [`scripts/06-site.mjs`](scripts/06-site.mjs) and deployed by GitHub Actions; zips are assembled in the browser from `raw.githubusercontent.com`, so no template files are duplicated. To install straight into Pi, use the [`pi-grokbot-import`](https://github.com/Shixuuu/pi-grokbot-import) extension (`grokbot install <slug>`, no GitHub login needed).

Three sections:

- **Official**, `templates/official/<slug>/`: exactly the bots listed on the marketplace, https://x.ai/bot/marketplace (all category tabs).
- **Built-in**, `templates/builtin/<slug>/`: the starter templates in the Grok Bot app's own template picker ([research/in-app-builtin-starters.txt](research/in-app-builtin-starters.txt)). One starter, SWE, is also on the marketplace; it stays in `official/` and is tagged `builtin` in the catalog and its `package.json`. `templates/builtin/primary-bot/` is the user's own Primary Bot, written by the bot from its own setup (fidelity `self-export`, no x.ai link). It is a plain Pi package: `pi install ./templates/builtin/primary-bot`.
- **Community**, `templates/community/<category>/<slug>/`: everything not on the marketplace and not a built-in starter, from community directories, awesome-lists and X posts. Each one is tagged with the sources it was found in. `community/trading-investing/` holds the stock, crypto, options and other market bots from Side's X sweep ([research/x-trading-findings.json](research/x-trading-findings.json)). Each one carries a subtag (`stocks`, `crypto`, `options`, `portfolio`, `earnings`, `macro`, `other-markets`) in `catalog.json` and its `package.json`. One share id from that sweep (`NsCDfZMFctaP1WIp_48k4`) now resolves to a different bot, so it is filed by its current content.
- [CATALOG.md](CATALOG.md) / [catalog.json](catalog.json): the index (name, creator, original `x.ai/bot/<id>` link, category, fidelity, contents, sources).

## Counts

<!-- counts:start -->
_Generated 2026-10-09 by `scripts/04-index.mjs`._

- **3959** unique share ids found, **3928** live, **32** dead links
- **3921** converted from the full recipe, **6** metadata-only (full fetch failed), **1** hand-written self-export (the user's Primary Bot, no share link)
- **90** official (listed on x.ai/bot/marketplace), **56** built-in (55 in-app starters + the user's Primary Bot self-export) (SWE is also on the marketplace and stays in official/, tagged builtin), **3783** community (not on the marketplace)
- Totals: 8202 skills, 2031 routines (1898 with a cron expression in the text), 19062 memory seeds, 2318 connector references

### By section and category

| Section / category | Templates | Full | Skills | Routines |
| --- | --- | --- | --- | --- |
| **official** (x.ai/bot/marketplace) → `templates/official/` | 90 | 90 | 448 | 146 |
| **builtin** (in-app starters) → `templates/builtin/` | 56 | 55 | 9 | 1 |
| **community** (not on the marketplace) → `templates/community/` | 3783 | 3777 | 7752 | 1884 |
| &nbsp;&nbsp;community/coding-shipping | 326 | 326 | 669 | 74 |
| &nbsp;&nbsp;community/content-publishing | 405 | 404 | 845 | 114 |
| &nbsp;&nbsp;community/customer-sales | 242 | 241 | 501 | 159 |
| &nbsp;&nbsp;community/finance-ops | 242 | 241 | 465 | 131 |
| &nbsp;&nbsp;community/inbox-calendar | 302 | 302 | 546 | 259 |
| &nbsp;&nbsp;community/personal-admin | 1305 | 1304 | 2833 | 582 |
| &nbsp;&nbsp;community/research-briefings | 586 | 584 | 1080 | 335 |
| &nbsp;&nbsp;community/teams-handoffs | 232 | 232 | 460 | 129 |
| &nbsp;&nbsp;community/trading-investing | 94 | 94 | 218 | 84 |
| &nbsp;&nbsp;community/uncategorized | 49 | 49 | 135 | 17 |

### By source (a template can appear in many sources)

| Source | Ids listed | Live here | Full |
| --- | --- | --- | --- |
| xai-marketplace | 90 | 90 | 90 |
| grokbottemplates.app | 429 | 428 | 428 |
| botsdots.site | 3776 | 3770 | 3765 |
| grokbotwiki.com | 3382 | 3373 | 3367 |
| grokbothq.xyz | 3242 | 3239 | 3238 |
| grokbot-templates.com | 2751 | 2725 | 2719 |
| templatebot.lol | 573 | 569 | 569 |
| kydlikebtc/awesome-grokbot | 3522 | 3519 | 3513 |
| majiayu000/awesome-grok-bot | 3661 | 3647 | 3641 |
| Maimuzamilhu/awesome-grok-bot-templates | 3776 | 3770 | 3765 |
| cs68614-hash/awesome-grokbot-templates | 2740 | 2717 | 2711 |
| ZeroPointRepo/GrokBotDev | 1577 | 1566 | 1564 |
| x-research | 3886 | 3879 | 3874 |
| x-trading-research | 95 | 95 | 95 |

### Validation (Pi 1.0.4, 2026-10-09)

- Resource load with Pi's own `DefaultResourceLoader`: **3928/3928** templates load with every skill, prompt, AGENTS.md and APPEND_SYSTEM.md and no diagnostics
- CLI end-to-end (`pi -p --approve` against a local mock model): **182/182** (90 official, 55 builtin, 37 community): persona in the system prompt, all skills advertised, routine prompt expanded with arguments
- Details: [validation/results.json](validation/results.json)
<!-- counts:end -->

## What a template folder contains

| File | From the Grok Bot template |
| --- | --- |
| `AGENTS.md` | Persona (profile name, title, description), getting-started pointer, skill/routine/connector index, and a short conversion note on Grok-only tools |
| `.pi/APPEND_SYSTEM.md` | Persona appended to Pi's system prompt (Pi's tool prompt is kept, not replaced) |
| `MEMORY.md` | Memory seeds, verbatim (`profile` rules and dated `log` notes) |
| `skills/<name>/SKILL.md` | Each skill with its **full body**. Frontmatter is normalised to Pi's `name`/`description` rules; other original keys are kept in a comment |
| `routines/<name>.md` | Each routine's full prompt, verbatim |
| `prompts/<name>.md` | The routine as a Pi prompt template (`/name [extra context]`) |
| `cron/<name>.cron`, `systemd/<name>.{service,timer}` | Schedule sketches. If the routine text has a cron expression it is used as-is; otherwise the described cadence is quoted and left for you to fill in (templates don't carry a machine-readable schedule) |
| `CONNECTORS.md`, `connectors.json` | Plugins/connectors the bot uses (name, Grok plugin id, purpose). Pi MCP servers aren't auto-configured |
| `package.json` | Pi package (`"pi": { "skills": ["./skills"], "prompts": ["./prompts"] }`) plus `grokbot` provenance (share id, url, version, sources, fidelity) |
| `.pi/settings.json` | Makes `skills/` and `prompts/` load when you run `pi` inside the folder |
| `README.md` | Original link, creator, sources, fidelity, schedules, and what didn't translate |

**Fidelity:** `full` means the folder was built from the template's complete recipe (profile, memory, skills, routines, plugins) as returned by the Grok Bot template import API. `metadata-only` means that fetch failed (e.g. a team-only template), so the folder has only the public name and description, clearly marked. **Nothing is invented.**

## Install a template into Pi

```bash
# Option 1: run the bot as a project (persona + memory + skills + routines)
cp -r templates/official/overheard ~/pi-bots/overheard   # or templates/builtin/<slug>, templates/community/<category>/<slug>
cd ~/pi-bots/overheard
pi --approve            # trust the folder so .pi/ and AGENTS.md load
/overheard-setup        # skills are also /skill:<name>; routines are /<routine-name>

# Option 2: install just the skills + routine prompts globally
pi install ./templates/official/overheard
```

Routines on a schedule: Pi has no scheduler. Use the line in `cron/<routine>.cron` (`crontab -e`) or the `systemd/` units, which run `pi -p "/<routine>"` in the bot folder.

Connectors: add MCP servers for the plugins in `CONNECTORS.md` with `pi mcp add` or `.pi/mcp.json` ([Pi MCP docs](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md)).

## What doesn't translate

- Grok Bot runtime: shared box computer and browser desktop, channels (Slack/iMessage/email send-as), team bots and multi-bot wake, built-in X/Grok data tools, Grok tools such as `CreateAgent` or routine APIs. Skill text that calls these keeps its original wording; the AGENTS.md conversion note tells Pi to say what's missing.
- Routine schedules and event triggers: become prompt templates plus cron/systemd sketches.
- Connector credentials: never part of a template; reconnect them yourself.
- `{{PLACEHOLDER}}` fill-ins in templates are left as-is (Grok Bot asks for them on import).

## Reproduce

Needs Node ≥ 22.19, `gh`, and Pi (`npm i -g @earendil-works/pi-coding-agent`).

```bash
node scripts/01-enumerate.mjs        # scrape all sources -> data/candidates.json (raw snapshots in data/raw/, gitignored)
node scripts/02-enrich.mjs           # public metadata, official marketplace details, and full recipes (needs a Cursor session, below)
node scripts/03-convert.mjs          # -> templates/, catalog.json
node scripts/05-validate.mjs --community-sample 30   # Pi resource-load for all + CLI e2e sample
node scripts/04-index.mjs            # -> CATALOG.md + counts above
node scripts/06-site.mjs _site       # static site: data/index.json + per-template file manifests (m/*.json); deployed by .github/workflows/pages.yml
```

Full recipes come from `GrokBotService/GetGrokBotTemplateImportDetails` and its recipe blob. That API needs a Cursor account session at `~/.pi/agent/grokbot-import/cursor-session.json` (created with `/grokbot-cursor-login` from [pi-grokbot-import](https://github.com/Shixuuu/pi-grokbot-import); a free account works). Without one, `02-enrich` only collects public metadata. Raw recipe blobs and tokens are never committed. `vendor/pi-grokbot-import-src/` is a copy of that converter (v1.2.0); the scripts reuse its API client, slug rules and Pi mapping.

## Sources

See [research/SOURCES.md](research/SOURCES.md) for every marketplace and directory checked, and [research/x-findings.md](research/x-findings.md) for X/Twitter research. Templates belong to their creators; this repo is a format conversion for personal use with Pi.
