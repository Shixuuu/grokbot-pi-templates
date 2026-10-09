---
name: ethan-competitor-intelligence
description: "Use when named companies or products need a like-for-like comparison of current pricing, features, and positioning with cited evidence and explicit gaps."
---

# Ethan Competitor Intelligence

Compare named companies or products on a consistent criteria set. Current evidence only. Do not invent pricing, features, customers, or market share.

## When to use

Use when two or more named companies or products must be compared for a decision. Do not use for a general industry explainer (`ethan-deep-research-brief`), isolated claim checks (`ethan-claim-verifier`), time-series change detection (`ethan-trend-monitor`), or auditing an existing pack (`ethan-research-quality-gate`).

## Required inputs

- Named subjects (companies and/or products). Do not invent extra competitors.
- Comparison criteria (default if unspecified: offering, pricing model, published price points, key features, positioning, geography, notable limitations)
- Buyer or audience
- Geography (default: subjects’ stated home markets plus any named expansion markets)
- Time window (default: current public materials; flag anything older than 6 months)
- Decision this comparison supports
- Source constraints

Never include user identity, account names, credentials, or private customer lists.

## Source hierarchy

- **A:** official pricing pages, product docs, filings, IR, help centers, legal terms
- **B:** reputable independent reviews or news that cite or reproduce official facts
- **C:** social posts, unverified “leaked” pricing, forum screenshots

Pricing and feature claims need A where the vendor publishes them. Sales-call rumors and social posts are C discovery only. Record publication date and event date (for example, “price page retrieved 2026-08-28” vs “plan launched 2026-03”). Detect circular roundups that copy each other.

Label **VERIFIED FACT / ESTIMATE / INFERENCE / UNKNOWN**. Unpublished price = UNKNOWN, not a guessed number.

## Allowed tools

- Default: native web search and browser/page fetch
- Use Context.dev automatically when already available
- Treg and Ahrefs optional for public SEO/visibility context, never required and never treated as market-share proof
- Do not authenticate, create trial accounts, scrape behind login, install, connect, publish, contact, or spend

If a pricing page is geo-gated or login-gated, record that limitation.

## Steps

1. Lock the subject list and criteria. Do not add unnamed competitors unless the requester asked for “nearest alternatives,” and then label them as additions.
2. For each subject, collect official pages first: product, pricing, docs, legal, IR.
3. Capture each criterion in a matrix with source, link, publication date, event date, and grade.
4. Convert currencies or units only when the source states the figure; show the original figure beside any conversion and date it.
5. Use B sources only to fill gaps or challenge A. Mark B-only cells.
6. Triangulate consequential claims (market leadership, customer counts, funding, legal status).
7. Write positioning in the vendor’s own public language, then a separate inference row if useful.
8. List gaps: missing price, unpublished limits, regional SKUs, stale pages.
9. Hand off the matrix. No sales outreach.

## Validation checklist

- [ ] Every named subject appears in the matrix
- [ ] Criteria are consistent across subjects
- [ ] Price and feature cells cite A when A exists
- [ ] No C-only proof for price, share, or “best”
- [ ] Dates recorded; pages older than the time window are labeled stale
- [ ] UNKNOWN used for unpublished items
- [ ] No invented customers, logos, or win rates

## Output schema

```
STATUS: COMPLETE | PARTIAL | BLOCKED
EXECUTIVE ANSWER: <who leads on which criterion, with uncertainty>
FINDINGS:
- <criterion-by-criterion>
COMPARISON MATRIX:
- criterion | subject | value | VERIFIED FACT|ESTIMATE|INFERENCE|UNKNOWN | source | link | publication date | event date | grade
CLAIM LEDGER:
- claim | status | source | link | publication date | event date | source grade
CONTRADICTIONS: <or none>
GAPS: <login walls, missing SKUs, stale pages>
CONFIDENCE: high | medium | low
IMPLICATIONS: <decision-relevant>
NEXT HANDOFF: REQUESTER | COORDINATOR | WRITER | INDEPENDENT QA REVIEWER
```

## Failure, no-data, and stale-data handling

- Official page missing: UNKNOWN for that cell; do not borrow a competitor’s number
- Geo/login wall: PARTIAL; name the wall
- Stale pricing page with no newer A: keep the figure, label stale, lower confidence
- Conflicting official pages: CONTRADICTIONS; prefer the more recently published A and say so
- Optional SEO tool unavailable: omit visibility metrics; do not estimate traffic

## Approval boundaries

Never publish, contact companies, spend, authenticate, connect accounts, install software, open trials, expose private data, or modify an external system. Comparison is research only.
