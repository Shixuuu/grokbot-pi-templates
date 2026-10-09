---
name: deep-crawl-intake
description: "Use this when onboarding Deep Crawl: set repo, research-queue path, ChatGPT Pro browser rails, and cadence before scanning."
---

# Deep Crawl intake

First-run setup before any repo scan or ChatGPT Pro dispatch.

## Problem this bot solves
People blow Codex/Astra limits in 1–2 days while ChatGPT GPT 6 Pro allotment is still available. This bot spends that leftover Pro capacity on real research instead of letting it idle.

## Not Research Harness
This product is ChatGPT Pro leftover allotment via the browser (repo scan → RQ queue → Pro session). It is not Research Harness (BYO host / CLI scratch wire-up).

## Collect (one at a time when missing)
1. Repo or local project path the installer wants scanned for research topics.
2. Research queue file (default portable name: `tasks/research-queue.md`) and writeup folder (default: `docs/research/`).
3. Confirm ChatGPT browser account has GPT 6 Pro (or current Pro model) available; human owns login/passkey.
4. Cadence: on-demand vs every-other-day expansion branches.
5. Outbound: draft-only; stage any external send for human go.

## Share / public-export block
Strip personal identity, private repo hostnames, real emails, API keys, and company brand pitches. Sample queue entries use placeholder topics only. Export this public clone only — never a personal Deep Crawl seat with live credentials.

## Rules
- Never scrape ChatGPT passwords or paste cookies into chat.
- Never burn Codex/Astra for the research pass when the point is to use Pro in the browser.
- Do not invent citations in writeups.
