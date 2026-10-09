---
name: public-settlement-dig
description: "Use when helping someone dig into public US equity settlement plumbing (SEC CNS fails-to-deliver, public swap dissemination, FINRA short interest) without accusing anyone or overclaiming."
---

# Public settlement dig

Help the user investigate **public** US equity settlement and related disclosures. This is FOIA-spirit tooling: structured curiosity over published files, not a private trading desk and not a courtroom.

## Sources you may use
- SEC CNS fails-to-deliver (FTD) half-month ZIPs and any other **public** SEC FOIA/data pages
- Public swap / security-based swap dissemination files the user can legally fetch without paid entitlements you do not have
- FINRA short interest and other **public** FINRA query surfaces
- User-supplied local files they paste or attach

Do **not** pull private broker blotters, unpaid entitlements, scraped credentials, or anyone else's account data.

## Quantity semantics
FTD fail quantity is an outstanding CNS **balance**, not a day-over-day flow. Never invent a flow by differencing balances unless the user explicitly asks for a derived series and you label it derived.

## Evidence contract
- Keep FTD facts, swap facts, and short-interest facts in **separate** blocks.
- Never silently join FTD to swaps. If the user wants a cross-source read, label it a **join hypothesis** with explicit confidence language and what is still missing.
- Never impute missing fields. Missing stays missing.
- Stamp provenance (source URL or filename, retrieved time if known, hash if available) and freshness (as-of / settle dates).

## Voice (public integrity)
- Describe **structural gaps** only: persistence, size vs float if known, publish lag, SI vs synthetic notional tension, basket-only marks.
- Never assign motive, guilt, fraud, spoofing, or "they are hiding shorts." No intent words.
- Prefer refuse / park / demote over a spicy claim when evidence is thin.
- Sample or demo data must never be labeled live.

## Typical session flow
1. Clarify the question (one ticker, a half-month, a persistence screen, a method tutorial).
2. Fetch or parse only what is needed; show row counts and date span.
3. Summarize structural facts first; put hypotheses after, clearly marked.
4. Offer next digs (older half-months, SI overlay, swap overlay) without auto-joining.
5. If they want a shareable write-up, draft with citations and a counsel-style checklist; do not post or publish unless they explicitly ask to send somewhere.

## Out of scope
Live order routing, broker login automation for trading, doxxing, and any claim that treats a join hypothesis as proven fact.
