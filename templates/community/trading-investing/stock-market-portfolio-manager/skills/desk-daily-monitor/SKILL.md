---
name: desk-daily-monitor
description: "Use this when Ken's Research Desk runs daily monitoring (the weekday morning portfolio check, or \"daily monitoring\" / \"morning check\" on demand): triage the owner's held names and watchlist, deep-check the priority names against each company's two-layer Monitor, write back only under the write rules, and roll the earnings cycle forward after a report. Never trades."
---

# desk-daily-monitor (Ken's weekday morning check)

Ken runs this alone; the analysts aren't needed. Always triage first, then deep-check. Never deep-check without a completed triage.

## Where the rules live
- **Working rules:** the Monitor File Template section of Research Output Templates in the owner's own Research Playbook copy (two layers, write rules, material new item rule, selection rule). Follow the owner's copy.
- **Public source** (read-only): https://app.notion.com/p/Research-Playbook-3e7b6e777fa7812eb46ffea41707140f?source=copy_link
- **Monitor file** = each company's `Monitor` page (or `monitor.md` if the owner saves research as files) under its entry in the owner's Companies list.

## Inputs
- **Held names:** from the owner's connected brokerage, read-only (the accounts they chose as "the book" at onboarding), or the book they pasted and Ken saved. Include underlying names of option positions. Deduplicate.
- **Watchlist:** Companies entries with Book role = Watchlist, plus tickers the owner named.
- **State note:** `Today's Selection` + a `Rotation Log` mirror, kept in the owner's storage (or a file on Ken's computer). The Monitor pages remain the source of truth for Last checked.
- **Delivery:** the owner's chat with Ken.

## Hard rules
- **Never trade.** Never place, preview, cancel or exercise orders, and never write watchlists or alerts, even if the owner enabled the trading setup. Brokerage tools are read-only here. Report actions are recommendations only (add / hold / trim / exit; buy / keep watching / remove).
- Never fabricate companies, prices, dates, bars or findings. Unknown = DATA GAP + the fact that would close it.
- Tag every finding **FACT-CHECKED** (filing form + date, company PR date + link, or outlet + date + link), **INFERRED** ("Inferred from X, Y, Z") or **DATA GAP**. A checklist item passes only on FACT-CHECKED evidence.
- Up to **5 web searches per selected company**. Triage uses no web.
- Search only for open Layer 2 indicators, Layer 1 milestones (due-and-unchecked first) and company updates (PRs, filings such as 8-K / 10-Q / S-3 / 424B / Form 4, launches, contracts, guidance changes, earnings-date confirmation). Analyst changes only when named as an indicator. No generic news; no price monitoring.
- **Due-and-unchecked:** Due / catalyst date on or before today, Last checked earlier than that date, Status not Met / Missed. Period-only dates map to the last day of the period.
- Write only to the selected companies' Monitor pages and their `Earnings cycle — Qx YYYY` subpages. Never edit Overviews, Verticals, Sources, Theses or Research Runs. Never erase entries; supersede with a dated note.
- No Monitor for a name: flag **"no Monitor — needs research kickstart"**. Never create a Monitor here.
- Never pad watchlist slots with held names.

## Phase A: Triage (read-only, no web)
1. Build the held and watchlist universes.
2. Find each company's Monitor. Missing → flag and exclude from scoring.
3. From each Monitor read the Layer 2 cycle header (next earnings date, Confirmed / Tentative, Last checked), Layer 1 milestones (Due / catalyst date, Status, Last checked) and dated catalysts. Cross-check earnings dates against the brokerage's earnings calendar when available; note mismatches.
4. Score:
   - **T1:** earnings within 14 days, or a post-report scorecard due (settle window over, scorecard empty).
   - **T2:** a Layer 1 milestone due and unchecked.
   - **T3:** a dated catalyst today or within 14 days.
   - **T4:** everything else, oldest Last checked first (never checked first).
   Within a tier: nearest date first (T1, T3), earliest overdue date first (T2), then oldest Last checked.
5. Select up to **3 held** names (if 4 or more held names report in the same week, cover all of them that week) and up to **2 watchlist** names, only those in T1–T3.
6. Overwrite the state note (`Today's Selection`: company | held / watchlist | tier | reason | Monitor link; `Rotation Log`).
7. Send a short **Triage** report: picks with tier and reason, "Watchlist: no dated triggers" if none, names needing a research kickstart. If the selection is empty, stop here.

## Phase B: Deep check (web allowed)
1. For each selected company read Layer 1 (milestones, breakers, change log) and Layer 2 (cycle header, checklist, Daily Check log), plus held / watchlist context and any open option exposure (read-only). A Monitor with no Layer 2: run Layer 1 checks only and flag "no Layer 2 — needs research kickstart".
2. Research within the search cap.
3. Update item leans (Toward pass / Toward fail / No change); update Layer 1 rows (Status, Last checked, one change-log line) when a finding relates to them or they're due and unchecked. A due date passing with no disclosed outcome counts as a Layer 1 move. A company PR confirming or changing the earnings date updates the cycle header.
4. **Write rules:** add a dated `YYYY-MM-DD — Daily Check` log entry only when a lean moves, a sourced fact confirms or kills an indicator, a Layer 1 milestone moves, a new catalyst gets a date, or a material new item is added. Otherwise update Last checked only. Never log generic news, price moves, facts already on the page, or empty searches.
5. **Material new items:** a new sourced fact material to the thesis or upcoming quarter (guidance change, major contract or customer loss, launch slip, financing / dilution, M&A, regulatory action, management change) that no existing item or milestone covers becomes a new dated Layer 2 item (or a Layer 1 milestone if multi-quarter) with bar, source and tag, marked "added by daily monitor YYYY-MM-DD". Max 2 per company per day; the checklist may flex to ~9, beyond that flag "research refresh needed".
6. **Post-earnings step** (settle window of ~5 trading days ended): fill the scorecard (item | bar | actual | Pass / Fail / Mixed | tag + source), write the stock reaction once, tick Pass items, carry thesis-relevant results to Layer 1, move the finished cycle into a new `Earnings cycle — Qx YYYY` subpage (confirm it landed before removing it), and open the next cycle with bars from the new guidance (no sourced number = DATA GAP), flagged "new bars set by daily monitor — review at next research refresh". A missed milestone, evidenced breaker or thesis-changing guidance → flag for a research Refresh; don't rewrite thesis milestones.
7. Reopen each edited Monitor to confirm the writes.
8. Send one **Deep Check** report. Per company: name (ticker) | held / watchlist | tier + reason | recommendation; earnings date, timing, Confirmed / Tentative, days to report; Layer 2 items leaning pass / fail / open and today's changes; Layer 1 changes (or "none"); material new items (or "none"); trajectory (strengthening / stable / weakening / breaking); what was written ("Daily Check entry added" or "Last checked only"); next focus.

Research only, not financial advice.
