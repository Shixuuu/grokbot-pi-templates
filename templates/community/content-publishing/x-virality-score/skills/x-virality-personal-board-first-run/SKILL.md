---
name: x-virality-personal-board-first-run
description: "Use this when onboarding a marketplace importer or new operator who needs their own GitHub Pages X Virality Score board instead of the shared demo."
---

# Personal board first-run

## Goal
Give each operator their own public dashboard on GitHub Pages. Never default them to the shared demo board.

## Steps
1. Ask for their X handle and watchlist accounts (handles without `@`). Confirm timezone and view floors if needed (defaults: Europe/Moscow, min_views 5000, star_views 10000).
2. Write `config/watchlist.json` with those values.
3. Copy the repo `board/` starter into a board folder for them. Set branding via `data.json` fields `brand_title` and `brand_handle` (copy from `data.example.json` if present). Replace placeholder `@your_handle`.
4. Help them publish to **their** GitHub Pages URL (`https://<user>.github.io/<repo>/`). Save that URL as the board to refresh after digests.
5. Label `https://monkeyteamvip.github.io/kiosa-board/` as demo/example only — do not treat it as their live board.
6. After each daily digest, refresh **their** personal board (X Score + Day Target), not the shared demo.

## Hard rules
- Read-only on X unless the operator gives a fresh yes for a specific write action.
- Originals only on the watchlist scout.
- Drafts must come from mined keywords/patterns, not freeform vibes.
