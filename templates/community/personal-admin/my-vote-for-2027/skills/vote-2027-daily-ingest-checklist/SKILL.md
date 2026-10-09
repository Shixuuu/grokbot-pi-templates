---
name: vote-2027-daily-ingest-checklist
description: "use this when delivering Vote 2027 daily ingest lots — ingest first; video; HTML quatre profils then the daily top-4 history chart (exact points), movers and Mileistes compared with the previous day; X bookmarks at end; then delete day’s videos/audio; Mileistes uses X handles"
---

# Vote 2027 daily ingest checklist

Preferred term: **X bookmarks** (never « saved posts ») for the end-of-morning cleanup.

**Obligatoire** whenever this bot proposes new Vote 2027 ingest lots — especially the daily 7am civic watch.

Compile target: the Vote2027 Lattice folder.

## Morning order (LOCKED — chart lock 3 oct. 2026, media cleanup 5 oct. 2026, Mileistes handles 5 oct. 2026, tableau + history layouts 8 oct. 2026, comparisons + second wave 9 oct. 2026)
1. **Ingest checklist first** — short holes line + multiSelect page 1. Full scoreboard **after** compile.
2. The owner picks → **compile** checked lots (scoring v2.1).
3. **Full internal note** — vote du jour, Base/News_14j/Affiché/Tête, opens, Lattice size. Do not auto-post. Full names here. Include a « Changements par rapport à hier » block (see Comparisons).
4. **Quatre-profils HTML** (LOCKED 3 oct. 2026; layout LOCKED 8 oct. 2026, owner’s choice) — send `assets/quatre-profils-YYYY-MM-DD.html` matching `assets/quatre-profils-LOCKED.html` (8 Oct layout: rank + surname columns with full name in `title`, fixed color thresholds, Lecture du jour cards; see vote-2027-daily-cinq-profils). Change badges and Lecture du jour cards compare with the previous day. Do not send a PNG as the tableau.
5. **Daily top-4 history chart** (LOCKED 8 oct. 2026, owner's choice; replaces the 3 oct. lock) — immediately after the tableau. HTML only, matching `assets/tete-top4-LOCKED.html` (title « Historique des notes finales », subtitle « Quatre à suivre · 22 septembre – <today> »). Series from 22 September 2026 through today, real data days only. Four highest Tête that day, excluding Bardella. **Every point exact from the Lattice** (`wiki/TeteTop4.md`), never from an image; verify markers before sending. Surname + today's note at the end of each top-4 line, legend, one « Lecture » line, two cards for #1 and #2. Also write `assets/tete-top4-2026-09-22-YYYY-MM-DD.points.md` (every exact point, for Grok Imagine). Send the HTML file. Skip only if the tableau is skipped.
6. **Movers brief** (LOCKED 23 sept., full names) + **Brief Mileistes** (LOCKED 26 sept., ~178 mots; **X handles only** — LOCKED 5 oct.). Both compare with the previous day (LOCKED 9 oct.).
7. **X bookmarks** cross-check checklist (never auto-delete). Prefer term « X bookmarks » never « saved posts ».
8. **Delete day’s videos and audio** (LOCKED 5 oct. 2026) — after compile and delivery, remove downloaded media in the day’s media folder (videos/audio and loose source mp4 from that watch, including a second-wave folder). Keep notes, transcripts, lots.md, scores, wiki, and chart HTML/PNG. Do **not** delete promo material. Quiet morning with no download: nothing to delete.
9. Skip ≤280 recap (retired).

Holes to prefer when proposing: candidates with missing budget or IA evidence, until a compile closes them.

## Comparisons (LOCKED 9 oct. 2026)
- Always compare with the **previous day's final notes** (e.g. 9 Oct vs 8 Oct), never only with an earlier wave of the same day. A same-day wave comparison may be added, but never replaces the previous-day one.
- State explicitly: new vote du jour if it changed; who **enters** and who **leaves** the top 4 (excluding Bardella); every rank change with yesterday's rank.
- Before sending, recompute yesterday's and today's ranks from the wiki (yesterday's QuatreProfils page + TeteTop4 line) and check every comparative claim (ranks, entries/exits, deltas, « inchangé », « reste »). Never write « top 4 inchangé » without that check.

## Second wave the same day (LOCKED 9 oct. 2026)
- If the owner asks for more articles after the morning compile, propose a new checklist, compile on top, **replace** today's line in TeteTop4 (never add a second), keep the morning files as `-vague1` copies, and back up before.
- Regenerate the tableau, history chart and .points.md, and resend note, tableau, history, .points.md, movers and Mileistes in the locked order.

## Fragile lead and speaker check (LOCKED 9 oct. 2026)
- If the #1 lead depends on a single lot, or a video seems spoken by someone other than the candidate scored, flag it and ask the owner whether to keep the lot (widget) before final delivery.
- A lot the owner removes: cancel its effects, keep the raw file with « Retiré par le propriétaire le <date> : <raison> », log it, recompile and resend everything.

## Two briefs with every tableau
- **Movers** (LOCKED 23 sept.): fluent FR 2–4 paragraphs; **full names**; open with what changed since yesterday (vote du jour, entries and exits of the top 4); skip only quiet morning.
- **Mileistes** (LOCKED 26 sept. + handles 5 oct.): ~178-word fluent French alignment to Mileistes français + daily évolution vs the previous day, including any top-4 entry or exit; **name candidates by X handle only** (`@knafo_sarah`, `@JLMelenchon`, …); no personal data; no method jargon. Handles: see vote-2027-daily-cinq-profils. Never invent a handle.

Only a quiet morning with no compile and no tableau change may omit tableau, daily chart, and both briefs.

## Video rule (locked 13 sept. 2026)
If a candidate lot’s X/source post **includes a video**: obtain a **video summary first** before proposing quality deltas, and check who is speaking. If video unreachable: say so; no invented video deltas.

## Cap and paging
Widget max **6**. Up to **18** lots in **3 pages** (5 + nav; last page ends with Rien pour l’instant).

## After the owner publishes
When the owner shares their published X post, read it and append URL, angle and final top 4 to `log.md` (heredoc).

## Do not
- Send a PNG as the daily tableau or as the daily top-4 chart
- Omit the daily top-4 chart when a tableau is sent
- Copy chart values or curve shapes from an image
- Omit movers or Mileistes when a tableau is sent
- Use full names in the Brief Mileistes (handles only)
- Compare only with an earlier same-day wave, or claim the top 4 is unchanged without checking yesterday
- Add a second TeteTop4 line for the same day
- Say « saved posts »
- Hardcode qualitative badges
- Lead with the scoreboard before the checklist
- Auto-compile or auto-delete X bookmarks
- Keep day’s source videos/audio after compile (delete them; keep transcripts and notes)
- Delete promo material or chart HTML/PNG
- Send the ≤280 recap
- Plot a day with no written Tête note, or a candidate outside that day’s top 4, as zero
