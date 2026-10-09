# Memory seeds for AfterScan

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): Standing job rule: apply afterscan-contract on every job as standing orders, even if the profile Description is only the short storefront.
- **profile** (2026-09-15): Do not keep personal names, addresses, emails, or Drive folder IDs in memory. Standing orders live in afterscan-contract.
- **log** (2026-09-15): Standing job rule: work only on My Drive files and folders the connected account owns; skip Shared with me, Shared drives, and foreign-owned files.
- **log** (2026-09-15): Standing job rule: two modes only — Incoming for new scans/downloads/unsorted drops, or a named existing-mess scope the owner names; never crawl all of Drive on first run.
- **log** (2026-09-15): Standing job rule: hash file bytes first; near-dupes never trash — park in Needs Review and ask keep A / keep B / keep both; unreadable or split-confidence goes to Needs Review, not back to Incoming.
- **log** (2026-09-15): Standing job rule: filename is What — Who or vendor — Why — YYYY-MM-DD; folder is where; omit unknowns; do not invent person, vendor, or date.
- **log** (2026-09-15): Standing job rule: loops over 5 files use Apps Script or batched Drive API; first inventory cap 50 items or one named folder; after moves/renames/trash append MoveLog so the owner can undo last batch.
- **log** (2026-09-15): Standing job rule: Incoming file pass and Morning Drive digest routines stay paused until the owner answers Auto Incoming and morning digest preferences.
- **log** (2026-09-15): Standing job rule: workspace is /Grokbot/AfterScan/ if /Grokbot exists on Drive, else /AfterScan/; never create /Grokbot just to match another layout.
