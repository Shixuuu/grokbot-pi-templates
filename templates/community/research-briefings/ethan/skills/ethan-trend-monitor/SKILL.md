---
name: ethan-trend-monitor
description: "Use when a topic needs a dated baseline, material-change detection, signal-vs-noise filtering, and a cited change log rather than a one-off explainer."
---

# Ethan Trend Monitor

Establish a baseline, detect material changes, separate signal from noise, and produce a dated change log. Do not treat social volume as proof of a real-world event.

## When to use

Use when the requester wants monitoring, “what changed,” or a refresh against a prior baseline. Do not use for a first-look explainer with no time comparison (`ethan-deep-research-brief`), a static claim list (`ethan-claim-verifier`), a point-in-time competitor matrix (`ethan-competitor-intelligence`), or an audit of someone else’s pack (`ethan-research-quality-gate`).

## Required inputs

- Topic, entity, metric, or URL set to watch
- Baseline (prior brief, date, or “create first baseline now”)
- Material-change rules (default: new official announcement; numeric move beyond a stated band; contradiction of a prior VERIFIED FACT; new regulation or pricing)
- Geography
- Time window (since last baseline, or a named start date)
- Decision the change log supports
- Source constraints

If no baseline exists, this run creates one and labels it BASELINE, not a change alert. Never store personal identities or private accounts in the skill.

## Source hierarchy

- **A:** official announcements, filings, product changelogs, regulator notices, primary datasets
- **B:** reputable independent confirmation
- **C:** social posts, influencer takes, unsourced recaps

C can surface a lead. A change is not material until A or triangulated B confirms it. Record publication date and event date. Detect circular amplification (many posts linking one unsourced item).

Label **VERIFIED FACT / ESTIMATE / INFERENCE / UNKNOWN**.

## Allowed tools

- Default: native web search and browser/page fetch
- Use Context.dev automatically when already available
- Treg and Ahrefs optional for public visibility shifts, never required and never treated as demand proof
- Do not authenticate, install, connect, publish, contact, spend, or modify external systems
- Do not create a standing routine unless the requester later asks for one

## Steps

1. Load or create the baseline: prior claims, dates, and sources.
2. Define material-change tests in writing before collecting new items.
3. Collect candidates in the time window. Prefer A changelogs, IR, and official blogs.
4. Deduplicate. Cluster items that describe the same event.
5. For each cluster, confirm with A or independent B. Drop C-only noise into a dismissed list.
6. Compare each confirmed item to the baseline: new, changed, contradicted, unchanged, or stale.
7. Write a dated change log. Keep unchanged material in a short “still true” note so silence is not mistaken for no check.
8. Update confidence. Hand off. Do not page anyone and do not start a cron.

## Validation checklist

- [ ] Baseline date is stated
- [ ] Material-change rules were fixed before scoring items
- [ ] Each logged change has source, link, publication date, event date, and grade
- [ ] C-only items are not in the material change log
- [ ] Circular amplification is named
- [ ] Unchanged checks are visible
- [ ] No implied alert, publish, or standing watch was created

## Output schema

```
STATUS: COMPLETE | PARTIAL | BLOCKED
MODE: BASELINE | CHANGE LOG
EXECUTIVE ANSWER: <what materially changed, or that the baseline was set>
FINDINGS:
- <material items only>
CHANGE LOG:
- date | event date | change | vs baseline | VERIFIED FACT|ESTIMATE|INFERENCE|UNKNOWN | source | link | grade
DISMISSED NOISE:
- <C-only or circular items and why dropped>
CLAIM LEDGER:
- claim | status | source | link | publication date | event date | source grade
CONTRADICTIONS: <or none>
GAPS: <unmonitored sources, tool limits>
CONFIDENCE: high | medium | low
IMPLICATIONS: <decision-relevant>
NEXT HANDOFF: REQUESTER | COORDINATOR | WRITER | INDEPENDENT QA REVIEWER
```

## Failure, no-data, and stale-data handling

- No new A/B in the window: CHANGE LOG empty is valid; STATUS COMPLETE; say “no material change found”
- Missing baseline artifacts: create BASELINE this run; do not invent prior values
- Stale official page with no changelog: label last-seen date; do not treat absence as a cancellation
- Social spike without A/B: DISMISSED NOISE, not a finding
- Tool outage: PARTIAL; list unchecked sources

## Approval boundaries

Never publish, contact anyone, spend, authenticate, connect an account, install software, expose private data, or modify an external system. Do not create routines, alerts, or monitors unless separately requested. This skill is a single dated pass.
