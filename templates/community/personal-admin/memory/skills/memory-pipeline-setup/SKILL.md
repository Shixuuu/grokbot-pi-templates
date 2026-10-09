---
name: memory-pipeline-setup
description: "Use when setting up or reconfiguring the Memory vault: interview, folder layout, file schemas, dry-run, then daily routine."
---

# Memory pipeline setup

Use when initializing a new Memory bot or when the user asks to scaffold/reconfigure the vault.

## Goal
Daily personal memory pipeline over an Obsidian-style markdown vault:
1. FETCH from pluggable MCP/sources
2. INGEST Event markdown
3. ANALYZE (summary / decisions / actions / mentions)
4. UPDATE People, Topics, Projects, Daily
5. REGENERATE People/_index.md + Focus.md
6. Changelog + git commit (+ push if remote)

Pipeline stages stay fixed. Only the FETCH adapter changes per source.

## Setup interview (ask before assuming)
One short round; wait for answers:
1. Vault location: registered local computer (path?) vs Grok Bot's computer
2. Sync/backup: git local-only, git + remote (URL?), iCloud/Dropbox only, or none
3. First source: which MCP they have or will connect (e.g. Wispr Flow meetings, Linear issues, later Slack/email)
4. Timezone + daily run time (tip: end-of-day after meetings often beats morning)
5. Seed Projects/People now, or start empty?
6. If git+remote: always push after successful commit?

Do not invent paths, remotes, or sources. Confirm, then scaffold.

## Vault layout (create if missing)
```
Vault/
  README.md                 # plan of record
  Focus.md                  # living dashboard; regen each run
  Events/
  People/
    _index.md               # full regen each run
    {slug}.md
  Projects/
    {slug}.md
    {slug}-board.md         # optional volatile snapshot
  Topics/
    {slug}.md
  Daily/
    YYYY-MM-DD.md
  .memory-state/
    last_run_at
    event-log.json
    unprocessed-events.json
    changelog/
  .gitignore                # Obsidian junk only; never ignore markdown or .memory-state
  share/                    # optional
```

## FILE SCHEMAS — WRITE vs NEVER overwrite

### Events/{file}.md
Filename: YYYY-MM-DD-HHMM-{type}-{slug}.md (omit HHMM if unknown; collision → -2/-3). Never overwrite existing event_id.
Frontmatter: event_id, type, date, time?, source, people[], project[], topics[], status (ingested→analyzed→linked)
- meeting: Summary | Attendees | Decisions | Action Items | Raw Transcript (or pointer)
- delta: What changed | Entity (id+URL) | Before → After | Why it matters

### People/{slug}.md
## Who they are / ## How I'm connected — HUMAN-OWNED (empty stub once; never overwrite)
## Latest interactions / Ongoing threads — pipeline append only
Never invent biography or create title-fragment people.

### People/_index.md
Full regenerate each run.

### Topics/{slug}.md
Summary, Current state, Open questions, Next steps, Related events, Related — keep filled, not link-dumps.

### Projects/{slug}.md
What this is (human-owned after first fill); Status/Open items pipeline; optional *-board.md full overwrite snapshot for volatile trackers.

### Daily/YYYY-MM-DD.md
Highlights (signal, not event list), Events, People touched, **Open items required**.

### Focus.md
Full regen: What I'm working on | Recent interactions | Topics in focus | Projects in focus | Open across the board.

### .memory-state/
last_run_at; event-log.json (append-only dedupe); unprocessed-events.json; changelog/*.json. Never delete event-log entries.

## Source rules
- Point-in-time (meetings): full Event
- Volatile trackers: thin deltas; event_id `{source}:{entityId}:{isoTimestamp}:{kind}`
- Wispr: meetings/notes/calendar only — no dictations via MCP
- Multiple sources: all FETCHes then one shared ingest/analyze pass

## After setup
1. Scaffold + README with these schemas
2. Connect first MCP; confirm tools
3. Dry-run one event (volatile: thin delta + rollup)
4. Only then enable daily routine; commit (+ push if opted in)

## Hard rules
Never post/email/spend/apply to jobs. Idempotent on event_id. Ping on push failure.
