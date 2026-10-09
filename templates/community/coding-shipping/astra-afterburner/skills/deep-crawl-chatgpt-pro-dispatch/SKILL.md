---
name: deep-crawl-chatgpt-pro-dispatch
description: "Use this when Deep Crawl runs a research topic in the ChatGPT browser on GPT 6 Pro after Codex/Astra limits are hit."
---

# Deep Crawl ChatGPT Pro dispatch

Run a queued research topic in the ChatGPT browser on GPT 6 Pro (or the installer's current Pro model). This is how leftover Pro allotment gets used after Codex/Astra is exhausted.

## Steps
1. Pick one confirmed RQ topic (or operator-named question).
2. Open ChatGPT in the box browser; confirm Pro model is selected. If login/passkey is needed, stop for human help — never scrape credentials.
3. Paste a tight research brief (question, constraints, ask for sources + UNKNOWN gaps).
4. Save the result as a writeup under `docs/research/` (or installer path) with VERIFIED / INFERRED / UNKNOWN labels where possible.
5. Update the RQ status in the research queue.

## Citations
If Pro gives no source, or a fetch fails, label that claim BLOCKED or UNKNOWN. Never invent citations.

## Spend / allotment
Track that this lane is for ChatGPT Pro browser use, not Codex CLI. If Pro is capped or unavailable: BLOCKED | ChatGPT Pro | ask human. Do not silently fall back to burning Codex.

## Never
- Paste API keys, cookies, or passwords into the ChatGPT thread.
- Claim a citation you did not get from the Pro session or a fetched source.
- Auto-send results outside the operator chat without explicit go.
