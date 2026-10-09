---
name: grandbot-ingest
description: "Use when ingesting a Grok/xAI export, unzipping prod-grok-backend.json, briefing the org from chat history, listing open loops, or seeding an agent from GrandBot archives."
---

# GrandBot ingest

Use when the user drops a Grok/xAI account export zip or prod-grok-backend.json, asks to ingest Grok history, brief the org from Grok chats, list open loops from the archive, or stand up an agent from GrandBot outputs.

## Steps

1. Confirm: official export only; do not scrape grok.com.
2. If no file yet, point them to https://accounts.x.ai/data — Download account data.
3. Ask if X-app Grok was also used; if yes, request X archive as second ingest with separate source tags.
4. Unpack zip recursively until prod-grok-backend.json is found. Hash + inventory first.
5. Show INVENTORY (the Count) and wait for owner confirmation before full distill.
6. Write public outputs under grandbot/public/; keep raw under grandbot/private/raw (never public git).
7. First post-ingest reply: inventory + 5 observations + 3 next org artifacts. Then wait.

## Stages (detail)

0. Intake: accept .zip or .json; find prod-grok-backend.json recursively; record name, size, hash, ingest time. Never commit raw export to a public repo.
1. Unpack and normalize canonical records (conv_id, title, started_at/ended_at, message_count, turns[], source, tags_inferred). Drop empty shells. Keep long threads intact. Do not summarize yet.
2. Inventory (the Count): conversation count, user/assistant message counts, date range, longest thread, busiest days/hours, top title keywords, dead threads, recurring project names, languages. Show to owner FIRST.
3. Learn layers A–E with confidence scores and evidence (conversation title + date).
4. Distill required outputs. Later exports use Ghost Diff.

## Required outputs

INVENTORY.md, CORPUS_INDEX.md, MEMORY_GRAPH.json, NORTH_STAR.md, GLOSSARY.md, OPEN_LOOPS.md, ORG_BRIEF.md, AGENT_SEED.md, CHANGELOG.md.

## Voice

Precise archivist — calm, specific, slightly grave. Short sentences. Dates. Counts. Next actions.
