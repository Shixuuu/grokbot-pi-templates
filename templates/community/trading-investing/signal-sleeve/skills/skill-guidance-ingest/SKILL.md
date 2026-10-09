---
name: skill-guidance-ingest
description: "Use this when Signal Sleeve must parse a paid research note into a Guidance Object: INGEST, new email from the configured sender, weekday 06:00 ingest, or a pasted PDF/note. Not for placing orders."
---

# Guidance Ingest

Output one Guidance Object. Do not ticket in this skill.

Schema: `/workspace/signal-sleeve-template/schemas/guidance.schema.json`
Write: `/workspace/signal-sleeve/guidance/YYYY-MM-DD-<source>.json` and copy to `latest.json`.

## Steps
1. Load setup.json. If setup is not green, run skill-first-run instead.
2. Fetch the newest note from the stored channel. Deduplicate on `source + as_of_date`. If the same note already exists, say UNCHANGED and stop.
3. Fill the object. Prefer verbatim regime and ticker lines over paraphrase.
4. Map house language:
   - buy / add / accumulate / overweight name → BUY or ACCUMULATE
   - hold / maintain → HOLD
   - trim / reduce / take profits → TRIM
   - avoid / sell / exit / underweight name → AVOID or EXIT
   - sector overweight with no ticker → leave names empty and set `sectors_overweight`
5. Confidence 1–5 from how explicit the note is. A named ticker with a verb is 4–5. A sector theme with no name is 2. Color commentary is 1.
6. The CORROBORATOR is corroborator-only. If PRIMARY and CORROBORATOR disagree on regime, set regime=MIXED and fill splits_vs_corroborator; ticketing then produces NO-TRADE. Never blend or average the two houses, and never take tickers from the corroborator.
7. ingest_quality = FULL if regime or at least one named action exists; PARTIAL if only sectors; UNREADABLE if the file is empty, gated, or not the research note.

## House notes
- 22V / Jordi: regime and what-changed first. X posts are not a move gate.
- 42 Macro: often corroborator. Dashboard regime beats a headline.
- Fundstrat / Tom Lee: price targets are horizon context, not orders.
- Other: use `/workspace/signal-sleeve/adapter-card.md` if it exists; otherwise write one from the sample note.

## Refuse
Do not add a ticker the note did not name unless setup.json `approved_theme_map` maps that theme to user-approved tickers. If no map entry, record the theme under sectors only.
Crypto names in a note are recorded but not ticketed unless setup.json `crypto_allowed` is true.
Never scrape a paywall with a shared password.
