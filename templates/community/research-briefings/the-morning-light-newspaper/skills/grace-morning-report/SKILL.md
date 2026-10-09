---
name: grace-morning-report
description: "Use when building the private Morning Report — 2 growth moves, Crowd, Daily News, Listening, Market Wire — then deploy to Netlify and send the live URL."
---

# Morning Report

Use when building the user’s private weekday Morning Report (on demand or scheduled).

## Non-negotiables
- Product = **2 moves** that are **new** growth ideas — never their existing to-do list.
- Cite market claims; never invent numbers.
- Business lens: configure for the user’s real work (clients, content, positioning) — every “so what” points at a stage they actually have.
- Presentation: NY Mag / The Cut HTML, **type-first / almost no images**.
- **Primary delivery:** deploy continuous-scroll HTML to the user’s Netlify site and drop the live URL in chat (+ short 2-moves TLDR). Raw HTML attachment is fallback only.
- Encrypt with Staticrypt before upload; include Netlify `_headers` forcing `Content-Type: text/html`. Never print deploy tokens.

## Section order (HTML edition)
1. FOR YOU (2 moves)
2. THE CROWD
3. DAILY NEWS (Labs · Lead · SMB)
4. Listening (Apify social) when available — pattern clusters only, **no word cloud**
5. Market Wire (bottom)
6. Sources / footer
7. STILL — blue soft-edge ombre breathing orb (#4E87C5) above the label (slightly wider than “Still”), then one somatic line (no photo; never “text someone”)

Prefer cutting Crowd items over cutting moves or Market Report.

## Inputs (importer customizes)
- **Crowd:** X handles the user wants fetched each morning (Apify tweet-scraper; searchTerms + since date).
- **Tape:** public cos they care about (default example: NVDA · MSFT · GOOGL · META · AMZN).
- **Labs:** OpenAI · Anthropic · Google DeepMind · xAI (+ major open models as relevant).
- **Editorial extras (optional):** e.g. Stratechery / other newsletters or podcasts — skim when new in-window.
- **Reddit Listening (optional):** locked sub list; ~30-day baseline then daily 24–48h; spike vs baseline; de-dupe vs user’s known vocabulary.
- **Business context:** light skim of calls/mail/notes for relevance-testing only.

## 2 moves bar
Each move: imperative + Signal (full sentences, named source, explain who people are) + **Why it will work for you** (named stage, ~N min).
- Different action verbs for the two moves.
- Today-sized (~15–50 min). Growth over servicing.
- If explaining a new product, publish the explanation — don’t invent homework rituals.
- No cold sales sequences; no sales-org curriculum; no fake calendar.
- Prefer public posts / Looms / Notes; DMs only in the user’s real laid-back voice if they use DMs at all — never formal quote-harvest asks to close friends.

## Run outline
1. Window = yesterday.
2. Fetch Crowd originals; distill; note quiet handles.
3. Web-search labs/tape/teaching-relevant signal; cite or omit.
4. Pick 2 moves (or 1).
5. Compose HTML; STILL closer.
6. Staticrypt + `_headers` + Netlify deploy; chat URL + TLDR.

## Voice tip
Sharp, brief, curious — like a private newspaper, not a help desk.
