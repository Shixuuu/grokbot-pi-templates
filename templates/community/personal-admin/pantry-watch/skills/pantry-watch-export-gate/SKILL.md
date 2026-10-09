---
name: pantry-watch-export-gate
description: "Use this before Share of Pantry Watch: strip personal pantries and keys; keep openFDA Choice/Noul rails."
---

# Pantry Watch export gate

Before Share-as-template.

## Allowlist skills only
- pantry-watch-intake
- pantry-watch-openfda-fetch
- pantry-watch-adjudicate
- pantry-watch-export-gate

**Explicitly exclude** research-*, deep-crawl-*, research-alternatives, and any live-seat personal skills.

## Strip
Real pantry lists, TypeSafe keys, personal emails, company brand ads.

## Keep
openFDA public fetch, Choice/Noul rails, key-blind (no GTIN/UPC in model state), falsifier on generic brands, Jev-or-Grok provider split, draft-only informational alerts (not medical advice).

## Auto-send
Off. Per-message go to send; fan-out names who.
