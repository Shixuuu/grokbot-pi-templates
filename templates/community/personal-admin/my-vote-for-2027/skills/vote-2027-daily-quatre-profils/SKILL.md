---
name: vote-2027-daily-quatre-profils
description: "use this when building or sending Vote 2027 quatre-profils — LOCKED 8 oct HTML layouts (owner's choice) for the tableau and the daily top-4 history chart with exact points; monthly Tête chart; movers + Mileistes with every tableau; Mileistes uses X handles"
---

# Vote 2027 daily quatre profils tableau

**LOCKED 3 oct. 2026 — HTML is the tableau. Layout LOCKED 8 oct. 2026 (owner’s choice).** Canonical layout: `assets/quatre-profils-LOCKED.html` in the Lattice. Each morning copy the LOCKED file to `assets/quatre-profils-YYYY-MM-DD.html` and change only the day’s date, the four columns (rank, surname, title attribute, note, delta), the twenty score cells and their color classes, and the four Lecture du jour cards. Same CSS, same labels, same icons. **Send the HTML file.** Do not send a PNG as the tableau. A PNG may be kept only as an archive. The file stays self-contained (no external images or fonts; icons, flag and fleur-de-lis are inline SVG/CSS). Do not change the layout without an explicit unlock.

Layout of the 8 Oct lock, top to bottom: navy header with « Les quatre profils 2027 », gold subtitle, French flag top-right; four columns, each with a navy rank band (gold 1–4, « EN TÊTE » on 1), the surname in large serif, the Tête note in large green with a French decimal comma, and the change versus the previous tableau underneath (green if up, red if down, « = » if unchanged); five criterion rows (navy icon cell: heart, handshake, columned building, shield, brain; bold criterion name + small grey gloss in parentheses; weight in %; four colored Tête cells in rank order); color legend; navy « LECTURE DU JOUR » band with four cards; navy footer « Servir la France · sources publiques » centered with a small gold fleur-de-lis and « Mileistes français » in gold italic bottom-right.

Earlier locks still apply inside that HTML: top 4 excluding Bardella, Tête cells, green up / red down, semicolons, French flag top-right, Mileistes français in the footer. Brief Mileistes LOCKED 26 Sept + handles lock 5 Oct. Movers LOCKED 23 Sept.

## Who / scores
Top 4 Tête-weighted excl. Bardella, ranked 1 to 4 left to right. Cells + note = **Tête** uncapped (v2.1). Subtitle: `<day> <month> <year> · base + 14 jours · poids 30 / 20 / 20 / 20 / 10` (e.g. `8 octobre 2026 · base + 14 jours · poids 30 / 20 / 20 / 20 / 10`). Never Affiché / « note sur 20 » as the cell. The note appears once, under each surname (no separate NOTE FINALE row).

Score colors (fixed thresholds on each cell’s Tête value; never adjust per day; documented in a comment inside the LOCKED file, and its small script recolors cells from these same thresholds):
- ≥ 45 → `.tf` dark green `#14462a` — Très favorable
- 30–44 → `.fa` green `#5b8a50` — Favorable
- 20–29 → `.mo` light green `#a0c06c` — Modéré / Neutre
- 14–19 → `.vg` amber `#c47a14` — Faible / Vigilance
- 8–13 → `.vo` orange `#e2681a` — Faible / Vigilance
- < 8, including negatives → `.df` red `#b01a14` — Déficient / Défavorable
Negative values use the true minus sign (`−33`).

## Score-table headers
Rank band (1–4; « EN TÊTE » on rank 1) + **surname** in large serif (Le Pen, Knafo, Attal, Mélenchon…). Put the **full name** in the column’s `title` attribute, on each score cell’s `title`, on each Lecture du jour card’s `title`, and in the page `<title>`. Never initials, monogram letter circles, or `1)` `2)` `3)` `4)`.

## Quality rows
Icon + bold name + grey gloss in parentheses, then the weight in its own cell (`30%`):
1. ♥ Amour du peuple français — (attachement ressenti, proximité avec les Français) — 30%
2. handshake · Tenir ses engagements — (parole donnée, cohérence entre promesses et actes) — 20%
3. columned building · Équilibre du budget national — (dette, déficit, sérieux des finances publiques) — 20%
4. shield · Fonctions régaliennes d’abord — (sécurité, justice, frontières, souveraineté de l’État) — 20%
5. brain · Surfer le tsunami de l’IA — (ambition industrielle et stratégie intelligence artificielle) — 10%

## Lecture du jour — four cards (LOCKED 8 oct. 2026)
One card per column, same order as the ranks: navy rank box + surname, then 3–5 short sentences in plain political French: where they stand today (e.g. « Repasse en tête », « Progresse mais passe deuxième »), what they said or proposed that counts, and what is weak or still missing. Use French non-breaking spaces before `;` and `:`. Never method jargon (saturation, Affiché, lots, roll-off, Tête, −1, lot codes, base, news). Recompute the four cards after every compile; never reuse an old day’s text when the top 4 or the facts change.

## Brief Mileistes (LOCKED 26 sept. 2026; handles LOCKED 5 oct. 2026)
**Obligatoire avec chaque tableau envoyé.** About **178 words**, fluent French, title « Brief Mileistes ». Link the four columns to **Mileistes français**: lighter state and a real cut in spending; purchasing power without blanket handouts; borders and régalien; AI as productivity, not bureaucracy. For each profile: what is close, what diverges, what is still unclear. Daily evolution versus the previous tableau. No personal data. No method jargon. Skip only a quiet morning with no compile and no tableau change.

**Name candidates by their X handle only** in this brief (e.g. `@knafo_sarah`, `@JLMelenchon`), not by full name. Tableau title attributes, the history chart's JSON data, the movers brief, and the full note keep full names; the tableau headers and the chart's end labels show surnames.

Handles (from Vote2027 wiki / status URLs):
- Marine Le Pen → `@MLP_officiel`
- Gabriel Attal → `@GabrielAttal`
- Sarah Knafo → `@knafo_sarah`
- Jean-Luc Mélenchon → `@JLMelenchon`
- Jordan Bardella → `@J_Bardella`
- Bruno Retailleau → `@BrunoRetailleau`
- Olivier Faure → `@faureolivier`
- Raphaël Glucksmann → `@rglucks1`
- Éric Zemmour → `@ZemmourEric`
- David Lisnard → `@davidlisnard`
- Édouard Philippe → `@EPhilippe_LH`
- Dominique de Villepin → `@Villepin`

If a handle is missing or a new name appears, look it up from that candidate’s wiki page or a status URL before writing. Never invent a handle.

## Movers brief (LOCKED 23 sept. 2026)
**Obligatoire avec chaque tableau**: 2–4 paragraphs, everyday French, what moved. **Full names** (not handles). Same skip rule. No method jargon.

## Daily top-4 history chart (LOCKED 8 oct. 2026 — owner's choice; replaces the 3 oct. lock)
**Every morning, immediately after the HTML tableau** (before the bookmarks check). Canonical layout: `assets/tete-top4-LOCKED.html` in the Lattice. Write `assets/tete-top4-2026-09-22-YYYY-MM-DD.html` from it and **send the HTML file**. Do not send a PNG of this chart; a PNG may be kept only as an archive. The file stays self-contained (inline SVG; no external images or fonts).

**Exact points (mandatory).** Every marker is the Tête note written in the Lattice for that day (`wiki/TeteTop4.md`, cross-checked with `wiki/MonVote2027.md` and `wiki/QuatreProfils*.md`). Never copy values or curve shapes from an image (AI-generated images invent curves). Add today's line to `wiki/TeteTop4.md` first, then build the chart from that list. Keep the `<script type="application/json" id="series">` block (each day: date + the four full names and notes) and the `data-name` / `data-date` / `data-value` attributes on every marker. Before sending, check that every marker's position matches its value and that every polyline vertex is a marker. Also write `assets/tete-top4-2026-09-22-YYYY-MM-DD.points.md` listing every point (by day and by candidate, French decimal comma, scale and colors) so the owner can give exact values to Grok Imagine.

Series: from **22 September 2026 through today inclusive**. Only days with a written Tête note (no 23–25 Sept). For each day, only the **four highest Tête notes, excluding Bardella**. A candidate outside that day's top 4 has no point that day: the line stops, then resumes if they return. Never plot zero or a carried-forward value. Nothing before 22 September (older scale).

Layout, top to bottom:
- Navy header: title « Historique des notes finales »; gold subtitle « Quatre à suivre · 22 septembre – <today> » (e.g. « 22 septembre – 8 octobre »); French flag top-right.
- Cream chart: dotted horizontal gridlines with y labels; the y scale fits the real values on round steps of 10 (20–60 on 8 Oct; widen by 10 if a note goes outside). Date axis proportional to the calendar; ticks only on real data days, always including the first and last (8 Oct: 22 sept., 26 sept., 29 sept., 2 oct., 5 oct., 8 oct.). A round marker on every real data day. At the right end of each line still in today's top 4: surname + today's note (French decimal comma), bold, in its color, spaced so labels never overlap (thin leader line if moved).
- Legend row: colored line + dot for every name in the series (today's top 4 in rank order, then the others, most recent first).
- One italic line: « Lecture : évolution des notes finales quotidiennes des quatre premiers, du 22 septembre au <today>. » Never « moyennes ».
- Two cards side by side for today's #1 and #2: a shield badge with a fitting icon (scales of justice for Le Pen, euro for Knafo; choose a fitting icon for another name), surname in its color, and « (+X,XX pts) » = today's note minus that candidate's first point in the series, computed exactly. Then 3–5 short bullets with small icons naming real themes from the wiki candidate pages and recent lots, in plain French. No method jargon (Tête, lots, base, news, Affiché).
- Navy footer: « Notes finales · sources publiques » at left with a small gold icon, a thin divider, « Mileistes français » with a small gold rooster at right.

Colors, stable: Le Pen `#e07a1f`, Attal `#1aa6b8`, Retailleau `#2f8f4e`, Faure `#d46a9a`, Knafo `#8a6a2f`, Mélenchon `#9b2c2c`. A new name in the top 4 gets one distinct unused color and keeps it.

Skip only a quiet morning with no tableau.

## Monthly measures graphic (LOCKED 1 oct. 2026)
Unchanged. Separate from this tableau and from the daily top-4 chart. See `wiki/GraphMensuel.md`. No bars, no scores on that image. Do not replace that monthly PNG with HTML.

## Monthly six-name Tête chart (LOCKED 3 oct. 2026, earlier the same day)
Still produced once, at the end of each month (the 1st morning, or the first morning of the new month), for the month that just ended. Match `assets/tete-septembre-2026.html`. Six people only: Le Pen, Attal, Knafo, Mélenchon, Faure, Retailleau. No Lisnard. No Philippe. This monthly chart does **not** replace the daily top-4 chart.
