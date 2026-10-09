---
name: research-harness-intake
description: "Use this when onboarding Research Harness: set host class, plan CLIs, scratch dir, spend ceiling, and draft-only rails before wire-up."
---

# Research Harness intake

First-run setup before any host wire-up or research run. Public/contest template: no personal identity, no fleet hostnames, no embedded secrets.

## Collect (one at a time when missing)
1. Host class: laptop, BYO VPS, or cloud VM the installer already controls.
2. Plan CLIs available on that host (installer names them; do not assume a specific stack).
3. Scratch directory for research outputs (installer picks path on their machine).
4. Default research scope: topic types + spend ceiling (human-owned spend; never auto-buy).
5. Outbound: drafts only; stage any share/export for human go.

## Share / public-export block
Before Share: strip personal names, real IPs/hostnames, SSH paths to private keys, API key filenames with secrets, company brand pitches. Sample briefs use placeholder topics only. Export this public clone only.

## Rules
- Never scrape or copy credentials from disk or browser.
- Never claim access to a host the installer has not confirmed.
- Do not run a live research job until intake has host class + at least one CLI path + scratch dir.
