---
name: tearsheet-earnings-review
description: "Use when a watched ticker has a new earnings print, or the owner asks for a tearsheet or earnings review. Word document only."
---

# Tearsheet Earnings Review

Output contract (do not change): sections a–g, 6-phase tag, yes / kind-of / no plus Bull/Base/Bear price box, structured tables (quarter-on-quarter, year-on-year, 2-year CAGR, current quarter and year-ago quarter highlighted, loss-ratio colors inverted), GAAP leads, Word document only.

## Desk header

Do not ask. Infer industry. If no KPI file matches, use the fallback table and state the inference in the doc. Continue.

Chat: ticker and period on line 1, then a two-line brief, then attach the Word file. Stay quiet if nothing new printed.

## Pack

Read before drafting. Do not run from memory.

- This skill
- The industry KPI file for the inferred industry (inside this skill’s references, if present)
- A Word builder script if one was dropped in after import. Reuse it. Do not write a new script per ticker.
- The valuation engine file if it exists. If missing, apply the engine rules inlined below. Do not invent new math.

## Workflow

### 0. Filing inventory (in the doc, not chat)

Build it. Put it under Sources in the document. Do not paste it in chat. Most recent first: latest earnings letter or current report (primary), latest quarterly filing, most recent annual report, prior-period earnings letter, earnings call transcript, investor presentation, and IPO date with an overlay if the company has been public under 24 months.

Non-US: use the country source (local regulator or exchange filings).

### 1. Industry

Infer, then match one of ten packs: insurance, SaaS, banks, neobanks, REITs and data centers, e-commerce, semiconductors, AI/robotics/EV, healthcare, defense. Never pause a scheduled run. Hardware-led storage maps to semiconductors. Software-led security maps to SaaS. Multi-bucket: dominant business, flag the rest in prose.

### 2. Phase

Six-phase GAAP model: 1 R&D, 2 Market Entry, 3 Self-Funding, 4 Operating Leverage, 5 Cash Generation, 6 Slow Growth. Tag on page 1. Phase plus sector sets which KPIs lead, which multiple governs (sector override first: price to tangible book for banks, price to AFFO for REITs, price to book for insurers, price to NAV for holdcos; otherwise the phase ladder from sales to earnings to free cash flow), and whether GAAP profit is the headline (phases 4–6) or the path to it is (phases 1–3).

### 3. Cross-verification

Before a number goes in: quarterly revenue sums to the annual total; GAAP is the structural anchor and adjusted sits beside it; conglomerates get segment breakouts only; figures older than 90 days are dated and sourced; concentration and regulatory items come from the annual risk factors and the transcript.

### 4. Recent IPO overlay

If public under 24 months, the verdict page carries lock-up date, offering-commitment tracker, dilution math, and a SPAC or direct-listing note if applicable.

### 4.5 Valuation, verdict, entry

Read the valuation engine before any price box, including the trend-shift step. This section is not a second engine.

Before the box, in this order:

1. Trend-shift test on every print. Compare the last four sequential growth rates and gross margin versus this print versus the official next-quarter guide. A shift is a run-rate step-off. A beat-and-raise with the same sequential and margin shape is not a shift.
2. If shifted: Base is the new-trend official next-print guide, annualized, times the phase-normal band midpoint when peers still price the old trend. Street out-years, second-half promises, and peak-cycle peer medians sit in Bull. Bear is the shift deepening (band floor).
3. If not shifted: Base is the same-phase, same-subsector peer median times the official this-year or next-print guide midpoint on the primary metric. Never the stock’s own current multiple. Never leftover-year street plus a quarter of the year after.
4. Peer hygiene. Do not pad a thin peer set with a more-mature name to manufacture a median. If fewer than three clean peers, mixed phase, or peers still on the old trend, the Base multiple is the phase-normal band midpoint. Cyclicals and semiconductors: a peak-cycle peer multiple cannot set Base.

Verdict, entry, and the color scale come from the engine. The color is context only, never a veto.

### 5. Pages

Phases 1–3: 5–6 pages. Phase 4: 4–5. Phases 5–6: 4.

Page 1 headline and verdict. Page 2 demand, beat versus estimate and versus guidance. Page 3 profits and margins. Page 4 balance sheet, guidance, call. Page 5 remaining call themes for phases 2–4. Page 6 strengths, risks, scorecard, ten watchpoints, and a short take. Sources include the filing inventory.

Footer every page, bottom right: Created by the owner.

### 6. Verify

Every major figure traces to a filing. GAAP discipline holds. Phase matches the company. Page count matches the phase.

## Verdict scale

- Yes when base is at least 15% above spot, the thesis is intact, and spot is already at or below entry.
- Kind of (hold) when the thesis is intact, bull is above spot, and base is under 15% above spot. Hold; add at entry.
- No when the thesis is broken, or bull is at or below spot.

Always pair an entry line. If spot is above entry: yes below the entry, no to chase the spot. If spot is at or below entry: yes here, no to chase above the entry.

## Tables

Navy header, white text. Highlight the current quarter and the year-ago quarter. Bold row labels. Alternate row shading. Green means good and red means bad, including inverted colors on lower-is-better rows (loss ratio, credit losses, churn, vacancy, default rate, acquisition cost, operating expense over revenue, debt to equity, lead time).

## Delivery

Word document only. No PDF. No per-run script. Save to the owner’s earnings Drive folder. Name it ticker, Tearsheet, and the print date. Attach the same file in chat.

## Pitfalls

- Base case on the stock’s own multiple is forbidden.
- Skipping the trend-shift test is forbidden.
- Using the phase band on a beat-and-raise with no sequential or margin step-off is forbidden.
- Putting a homemade next-twelve-months figure, a second-half promise, or peak-cycle peer multiples inside Base is forbidden.
- Padding a thin peer set with a more-mature name is forbidden.
- Do not invert loss-ratio colors the wrong way, mix a prior actual with prior guidance, use adjusted profit as the headline without GAAP beside it, treat insurer cession-driven growth as structural, leave consensus undated, use consolidated revenue for a conglomerate, skip the filing inventory, treat a two-name average as a median, or state a growth rate the print did not deliver.
