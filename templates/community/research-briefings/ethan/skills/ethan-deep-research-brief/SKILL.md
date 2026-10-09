---
name: ethan-deep-research-brief
description: "Use when a question, company, topic, URL, or file needs a decision-ready cited research brief with a claim ledger, dates, source grades, and explicit unknowns."
---

# Ethan Deep Research Brief

Turn one research target into a current, decision-ready cited brief. Do not invent sources, quotes, statistics, or first-person experience.

## When to use

Use for a new research question, company, topic, URL, or file that needs findings, implications, and evidence. Do not use for a single isolated claim check (`ethan-claim-verifier`), a named competitive comparison (`ethan-competitor-intelligence`), ongoing change detection (`ethan-trend-monitor`), or an audit of an existing pack (`ethan-research-quality-gate`).

## Required inputs

Collect before searching. If an input is missing, proceed with stated defaults and list the gap.

- Research question or target (question, company, topic, URL, or file)
- Decision this brief must support
- Audience
- Geography (default: global, note if unspecified)
- Time window (default: last 12 months unless the question is historical)
- Source constraints (languages, excluded domains, required primary sources)
- Deadline or freshness requirement, if any

Never put user identity, chat history, account names, credentials, personal memories, or private file contents into the saved skill or into any reusable note.

## Source hierarchy

- **A — primary/official:** issuer filings, official product pages, statutes, court dockets, original datasets, official transcripts, company IR, standards bodies
- **B — reputable independent secondary:** established newsrooms, peer-reviewed papers, regulator summaries, analyst notes that cite primaries
- **C — unverified signal:** social posts, forums, unsourced blogs, rumor, anonymous tips

Important claims need an A source where one exists, plus triangulation when the claim is consequential. Record **publication date** and **event date** separately. Detect circular citations (B citing B citing the same unsourced C). X/social posts are discovery signals only, never standalone proof.

Separate every finding as **VERIFIED FACT / ESTIMATE / INFERENCE / UNKNOWN**. No reliable source means UNKNOWN, not a guess.

## Allowed tools

- Default: native web search and browser/page fetch
- Use Context.dev automatically when that connector is already available
- Treg and Ahrefs are optional specialist sources, never required
- Local file read only when the requester attached or named a file for this task
- Do not authenticate, install, connect tools, publish, contact anyone, spend, or modify an external system

If a preferred tool is unavailable, say so and continue with allowed tools. Do not imply a source was checked if it was not.

## Steps

1. Restate the question, decision, audience, geography, and time window in one short brief.
2. Decompose the question into independent checks. Cap the first pass at the smallest set that can support the decision.
3. Search for A sources first, then B. Use C only to find leads.
4. Open and read candidate sources. Capture title, URL, publisher, publication date, event date, and the exact claim supported.
5. Triangulate each important claim with a second independent source when consequential.
6. Grade each source A/B/C. Flag stale items (outside the time window or superseded) and circular citation chains.
7. Classify each claim: VERIFIED FACT, ESTIMATE, INFERENCE, or UNKNOWN.
8. Write implications that follow from the evidence only. Mark confidence.
9. Hand off. Do not write final public copy unless the REQUESTER or COORDINATOR explicitly asks for a rough angle.

## Validation checklist

- [ ] Every important factual claim has a source, link, publication date, event date, and grade
- [ ] Publication date and event date are distinct when they differ
- [ ] Consequential claims are triangulated or explicitly marked single-source
- [ ] Circular or weak evidence is called out
- [ ] No C-only proof for an important claim
- [ ] UNKNOWN is used instead of guesses
- [ ] No fabricated quote, statistic, or first-person experience
- [ ] No private identity, credentials, or unrelated personal data in the brief

## Output schema

```
STATUS: COMPLETE | PARTIAL | BLOCKED
EXECUTIVE ANSWER: <3–6 sentences>
FINDINGS:
- <finding> — VERIFIED FACT | ESTIMATE | INFERENCE | UNKNOWN
CLAIM LEDGER:
- claim | status | source | link | publication date | event date | source grade
CONTRADICTIONS: <or none>
GAPS: <missing data, stale coverage, unpaid/paywalled sources>
CONFIDENCE: high | medium | low — <one-line reason>
IMPLICATIONS: <decision-relevant only>
NEXT HANDOFF: REQUESTER | COORDINATOR | WRITER | INDEPENDENT QA REVIEWER
```

## Failure, no-data, and stale-data handling

- No reliable source: STATUS PARTIAL or BLOCKED; claim = UNKNOWN; do not fill the gap
- Paywall or fetch failure: record the URL and limitation; do not quote from memory
- Stale source: keep it only if labeled stale and superseded by a newer source, or if no newer source exists
- Conflicting A sources: keep both in CONTRADICTIONS; do not pick a winner without evidence
- Tool outage: report the outage and what could not be checked

## Approval boundaries

Never publish, contact anyone, spend, authenticate, connect an account, install software, expose private data, or modify an external system. Research only. Final public copy is out of scope unless the REQUESTER or COORDINATOR explicitly requests a rough angle.
