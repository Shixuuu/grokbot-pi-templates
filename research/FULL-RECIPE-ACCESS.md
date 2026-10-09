# Can full Grok Bot template contents be read without a login? (2026-10-09, SGT)

Short answer: **no.** Tested on `14O3EsptD43aAhoAzvfq3` (Video Editor) and `NIEguoGUjA648fUPle8F5` (Overheard, official marketplace).

| Route | Result |
| --- | --- |
| `api2.cursor.sh` `GrokBotService/GetPublicGrokBotTemplate` (no auth) | 200, metadata only: name, description, avatar, `blobObjectKey` (e.g. `templates/57341-83552`), activeVersion, ownerType. No instructions, skills, routines, or memories. |
| `GrokBotService/GetGrokBotTemplateImportDetails` (the route that returns `blobGetUrl` for the recipe) | **401 `ERROR_NOT_LOGGED_IN`** without a Cursor session |
| Guessed public RPCs (`GetPublicGrokBotTemplateDetails`/`Recipe`/`Blob`/`Preview`, `ListPublicGrokBotTemplates`, `SearchBotTemplates`, `SearchGrokBotTemplates`, `GetGrokBotTemplate`, `GetGrokBotMarketplaceTemplate`) | 404 route not found |
| Recipe blob by key on `grok-bot-marketplace-public-assets.s3.amazonaws.com` | 403 AccessDenied (bucket only serves images) |
| Share page `x.ai/bot/<id>` (+ `/details`, `/export`, `?view=details`, `Accept: text/markdown`) | Server-rendered; the only data is the `["bot-template", id]` metadata. Client JS calls no template API. |
| Official marketplace detail `x.ai/bot/marketplace/bots/<slug>` (90 bots) | **Partial:** full **memories** text (619 total), skill **names + one-line descriptions** (441; `content` equals the description, no SKILL bodies), routine **names + summaries** (146; no prompt or schedule), integration names (321). `instructions` is empty on all 90. |
| Local box agent-data (`dr eggbot` is installed here from the marketplace) | Only profile.json (name, description, avatar); no skills, memories, or routines on disk. The recipe lives server-side. |
| Community directories (botsdots, grokbotwiki, grokbothq, grokbot-templates.com, grokbottemplates.app, templatebot.lol, GrokBotDev, awesome-* repos, Side's X research) | Links plus metadata or editorial text only. Several say outright that they do not rehost prompts or configs. |
| templatesgrokbot.com (7,116 "definitions") | Its own paste-in markdown briefs, not exports of x.ai templates, and copying them needs an account there. Not a source for real template contents. |
| SearchBotTemplates (first-party tool) | Not exposed to this agent. No `cursor` namespace in GetDynamicTools. |

**Only routes to full recipes:** (a) a Cursor account session that calls `GetGrokBotTemplateImportDetails`, then `blobGetUrl`, or (b) Adding each bot to a Grok Bot account and exporting it. Option (b) was not tried, per instructions.

## Resolution

The user signed in to a (free) Cursor account. `scripts/02-enrich.mjs` then fetched each template's full recipe with `GetGrokBotTemplateImportDetails` and `blobGetUrl`, at about 3 requests in parallel with backoff. Results are cached in `data/raw/full-recipes/` (gitignored). Recipe shape: `profile{name,title,description,avatar*}`, `memory[{kind,createdAt,content}]`, `skills[{name,description,content}]`, `routines[{name,slug,description,content}]`, `plugins[{pluginId,name,description}]`, `gettingStarted{skill}`. There is no structured schedule or trigger field; cadence and cron appear only inside routine text.
