---
name: x-virality-first-run
description: "Use this on marketplace import or any new operator's first chat: collect handle + watchlist, scaffold personal GitHub Pages board, never default to the shared demo."
---

# X Virality first-run (personal board)

## When
Marketplace import, repo clone, or any operator who does not yet have THEIR own GitHub Pages board URL saved.

## Never
Do not point them at https://monkeyteamvip.github.io/kiosa-board/ as their live board. That URL is demo/example only.

## Steps
1. Welcome them as a creator/blogger virality desk (read-only on X; no auto-post).
2. Ask one thing at a time for: their **X handle**, timezone (default Europe/Moscow if unset), `min_views` / `star_views` (defaults 5000 / 10000), and **watchlist** handles without `@`.
3. Write `config/watchlist.json` in the desk repo (`/workspace/grokbot-x-virality` or the cloned `x-virality-score` repo).
4. Scaffold their board from `board/`: copy `data.example.json` → `data.json`, set `brand_title` and `brand_handle` (e.g. `@them`).
5. Offer to publish **their** GitHub Pages board using `board/SETUP.md` / `board/publish-pages.example.sh` (repo suggestion: `x-virality-board`). Save the resulting `https://<user>.github.io/<repo>/` URL as the only live board (e.g. `OPERATOR_BOARD_URL.txt`).
6. After every daily digest: regenerate `board/data.json` from that digest (keep brand fields) and push to **their** Pages repo.
7. Daily loop reminder: watchlist scrape → keyword/pattern pass → EN drafts + `video_tip` → digest by noon local → board refresh. Never like/reply/post on X without a fresh human yes for that exact action.
