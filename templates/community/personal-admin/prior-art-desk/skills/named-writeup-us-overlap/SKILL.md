---
name: named-writeup-us-overlap
description: "Use when mapping US patent and dated public-product/NPL overlap against a named invention write-up the user pasted or attached."
---

# Named write-up → public overlap map

Use when the user has a named invention write-up (paste or attachment) and wants a structured overlap map.

## Refuse gate
1. If no named write-up is pasted or attached, ask once for it and stop.
2. Never invent the invention, claims, dates, or sources.
3. Never say clear to file. Never claim FTO.

## Scope lock
1. Extract a numbered feature map F1…Fn (usually 3–7 claim-like elements).
2. Restate the map. Do not search until it is locked. Save `map-locked = true` only after confirmation.
3. Ask for the relevant filing/critical date only when the user wants a temporal prior-art assessment. If none is supplied, report temporal status as UNASSESSED.

## Evidence lane A — US patent documents
1. Search public US patents and applications (Google Patents / USPTO public).
2. Prefer Tavily search + extraction when connected; otherwise use built-in web tools.
3. Rank closest overlap first. Return Top-N real hits; never pad.

Required columns: number · title · assignee (if shown) · publication/filing date · overlap vs Fx · gap · confidence · DIE/KEEP/FLAG.

## Evidence lane B — NPL and market-product disclosures
1. Search dated public product pages, manuals, datasheets, conference papers, technical videos, archived pages, credible reporting, and other public disclosures matching F1…Fn.
2. Keep this table separate from patent hits.
3. Required columns: product/disclosure · company/author · source type · source URL · earliest supported public date · overlap vs Fx · gap · confidence · status (`NPL CANDIDATE`, `MARKET LEAD`, or `TEMPORAL STATUS UNASSESSED`).
4. Never call a product prior art unless reliable public evidence predates the supplied critical date. A launch date alone is not proof of first public use.

## Evidence Diff Ledger
1. After every successful search package, save a compact ledger snapshot in agent memory (log tier): date, locked Fx list, Top-N patent keys (pub/app · Fx · confidence · DIE/KEEP/FLAG), Top-N NPL/market keys (URL or title · earliest supported date · Fx · temporal status), and a one-line gap summary. No full PDFs, no client names, no secrets.
2. On scheduled refreshes, compare the new result set to the latest ledger snapshot before messaging the user.
3. Stay quiet when nothing material changed (no new keys, no confidence/DIE-KEEP-FLAG moves, no earlier supported public date, no closer Fx mapping).
4. When messaging, send deltas only: NEW, CLOSER, or STATUS-CHANGED rows in separate PATENT HITS and NPL / MARKET LEADS tables, plus last-ledger date.
5. Include the last ledger date in every counsel packet draft.

## Package out
1. Scope + locked feature map
2. Top-N US patent-document table
3. Top-N NPL / market-product table
4. Short packet draft for counsel: questions, IDS candidates, dated product leads, evidence gaps, last ledger date
5. Footer: Overlap ≠ FTO. NPL/market lead ≠ a prior-art determination. Not legal advice. Do not file.
6. Google Drive save is optional when connected and the user wants a file.

## Handoffs
Pass short evidence summaries only. Never pass full chats or entire patent/product corpora to another bot.
