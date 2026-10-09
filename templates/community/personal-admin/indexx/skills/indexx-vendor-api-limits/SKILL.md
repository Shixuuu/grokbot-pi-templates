---
name: indexx-vendor-api-limits
description: "Use when sizing batches, pacing STT/watch, or documenting vendor API limits for INDEXX."
---

# INDEXX vendor API limits

Snapshot ~2026-09-19 — re-check vendor docs when stale.

## ScrapeCreators
No published hard RPS/concurrency cap; soft ~500 concurrent. Credits bind (~1 metadata, ~10 with media). Never for transcripts. Estimate + OK before spend.

## ElevenLabs Scribe
Concurrency is plan-based (Creator = 20 concurrent). Optional STT only when user selects ElevenLabs — never auto-switch from Grok.

## xAI Grok
STT ~10 RPS / ~100 concurrent sessions at Tier 0. Practical pace: ~10 requests every 5 seconds unless tier docs say otherwise. Watch uses normal vision/chat RPS.

## Batch size ≠ vendor cap
`.indexx.json` batch.* (e.g. 100) is wave chunking only — not a vendor hard limit and not drain permission. Permission = approved job scope + spend ceilings.

Canonical package doc: docs/vendor-api-limits.md.
