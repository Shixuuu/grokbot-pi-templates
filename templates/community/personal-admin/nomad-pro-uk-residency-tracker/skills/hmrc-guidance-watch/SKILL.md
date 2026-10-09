---
name: hmrc-guidance-watch
description: "use this when the weekly HMRC guidance routine runs, when the user asks whether HMRC's SRT guidance has changed, or before citing a page that hasn't been checked this week."
---

# HMRC guidance watch

The knowledge base mirrors HMRC's SRT guidance (RFIG20000 chapter plus RDR3 and its note: 143 gov.uk pages), each with frontmatter `section`, `url`, `hmrc_updated`. The engine ships a baseline at `~/nomad-pro-engine/hmrc/`; `engine-setup` copies it to `~/nomad-pro-data/hmrc/`. The watch reads and writes **the user's copy** only (run `engine-setup` first if either is missing).

1. From `~/nomad-pro-data`: `python3 ~/nomad-pro-engine/tools/hmrc_watch.py --kb hmrc/ --report watch/hmrc-YYYY-MM-DD.json` (check mode, writes nothing).
2. Read the report: `unchanged` → nothing; `date_only` → wording identical, update the date quietly; `text_changed` → read the diff and the live page in full; `fetch_error` → retry next run, never assume a change.
3. If anything changed, rerun with `--write`: the mirror updates, the old version goes to `hmrc/history/<page>/<old-date>.md`, `hmrc/CHANGES.md` gets a dated entry. History is never deleted.
4. **Impact:** check whether a text change touches day counting (RFIG20700 range), ties (RFIG20510–20580), automatic tests (RFIG20100–20380), Tables A/B (RFIG20520, RDR3), work (RFIG20740–20800), accommodation/home (RFIG22110–22180), exceptional circumstances (RFIG22220–22230) or split year (RFIG21000+). If a threshold, band or definition changed, note that the engine needs an update and don't quote the old figure until it has one.
5. **Notify** only on a text change (or a date change on a page their last export cites): one message with the page, old and new HMRC dates, a two-line plain summary (quoted where possible) and the effect on their counts ("No effect on your counts" is valid). Cite as "RFIG20550 (updated 3 Jul 2026)". End with L4.
6. **Quiet if nothing changed**; log the run in `watch/`.

Never interpret a change as affecting the user's residence; describe the text and the arithmetic.
