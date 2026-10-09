---
name: jev-browser-use
description: "Use for interactive browser goals via TypeSafe Jev + CDP (Jev Ultrafast). Primary browser path; not for Firecrawl research."
---

# Jev Ultrafast (browser use) — primary browser path

Fast interactive browser automation: TypeSafe Jev chooses the next operation and target; a small text model fills TYPE_TEXT only. **Use this first for browser URL+goal tasks.** Use jev-use (Cua Driver) for native/bounded desktop instead. Do not use for Firecrawl research scrapes.

## Install
Clone/sync the jev-ultrafast project, uv sync, and put wrappers on PATH. Configure .env (never commit secrets):

- TYPESAFE_API_KEY — Jev picks operation + target
- TEXT_MODEL_API_KEY / TEXT_MODEL_BASE_URL / TEXT_MODEL — OpenAI-compatible text model for TYPE_TEXT (for example OpenCode Go DeepSeek)
- BU_CDP_URL — Chrome DevTools endpoint (often http://127.0.0.1:9222; check --remote-debugging-port)

## Commands
```bash
jev-ultrafast-run --url 'https://example.com' --goal '...'
jev-ultrafast   # inspector UI
```

## How to run goals so they work
- Prefer short one-shot goals on a concrete URL.
- For many pages, one URL per run — not one mega-goal that clicks the sidebar forever.
- If status is blocked with 0–few actions, simplify the goal or open the target URL directly.

## When not to use
- Firecrawl for research search/scrape
- Native non-browser desktop apps → jev-use
- Shadow DOM, canvas, file uploads, multi-tab popups (MVP limits)
