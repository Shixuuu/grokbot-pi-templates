---
name: deep-crawl-repo-scan
description: "Use this when Deep Crawl scans a repo for research topics to add as RQ entries in the research queue."
---

# Deep Crawl repo topic scan

Scan the installer's repo for research-worthy topics. Grok does the scan; ChatGPT Pro does the deep research later.

## How to scan
1. Read existing `tasks/research-queue.md` (or installer-named queue) so you do not duplicate open RQ entries.
2. Survey docs, SPECs, TODOs, open questions, and "unknown/deferred" notes.
3. Propose new RQ-### candidates: Topic, Source, Why this matters, Why queued not active, Natural owner, Status.

## Output
Append draft RQ entries to the research queue as DRAFT until the operator confirms. Prefer fewer high-signal topics over a flood.

## Never
- Invent repo facts that are not in the tree.
- Auto-merge speculative topics without operator review on first run.
- Dump secrets, credentials, or private URLs into the queue.
