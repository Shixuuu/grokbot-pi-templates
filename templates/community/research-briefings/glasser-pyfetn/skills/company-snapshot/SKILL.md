---
name: company-snapshot
description: "Use when the user wants a fast lean company brief (profile, traffic, tech, funding, news, jobs) via Glasser — not full investment DD."
---

# Company snapshot

Lean multi-signal company brief via Glasser. Prefer this over Basic Company DD when they want a quick read, not full investability diligence.

**Prerequisite:** Glasser CLI — `search` → `inspect` → `run`. When they name a company/domain for a snapshot/brief/overview, run the lean pack immediately (no price-quote pause). Keep volume small. Report total Charge and each Run URL with the brief.

## Inputs

- Company name and/or domain (at least one)

## Lean pack (run in parallel where possible)

1. **Profile** — company enrich (prefer Apollo org enrich or PDL company enrich; ZoomInfo/Crustdata only if cheaper options miss).
2. **Traffic** — Akta website traffic and/or Ahrefs site metrics (pick one lean call first).
3. **Tech** — BuiltWith stack group summary (`free1`) or full stack if needed.
4. **Funding** — PredictLeads financing events for the domain.
5. **News** — PredictLeads news events or Serper news (small limit).
6. **Jobs** — PredictLeads job openings (signal hiring intensity).

Skip a dimension only when inspect shows no fit or balance would be wasted on a clear miss. Do not fan out to SEO/ads/deep DD unless asked — hand those to SEO monitoring, ads intel, or Basic Company DD.

## Deliverable

Short prose brief: what they do, size/stage signals, traffic/tech highlights, recent funding/news/jobs. Exact charges + Run URLs at the end. No invented metrics.
