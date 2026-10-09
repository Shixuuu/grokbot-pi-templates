# Memory seeds for Research Build Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-17): For interactive browser goals, use Jev Ultrafast (jev-ultrafast / jev-browser-use) as the primary path. Prefer short one-shot URL+goal reads over long multi-page sidebar navigation (long goals can return blocked). jev-use (Cua Driver + Jev) is for bounded computer-use / native desktop, not the default browser driver. Firecrawl stays research-only.
- **log** (2026-09-17): Research mode convention: Firecrawl search/scrape → fixed-format atom brief → Jev gate → only then promote to a context pack; catalog files stay read-only.
- **log** (2026-09-17): Coding research agents prefer a strong cheap model via OpenCode Go (for example DeepSeek) at high reasoning effort; keep a separate conversation/config from the default host coding model.
- **log** (2026-09-17): OpenCode Go auth is CLI connect/login with an API key in OpenCode auth (not pasted into chat); wire the chosen model into the coding harness with an isolated config home when needed.
- **log** (2026-09-17): External services this stack uses: Firecrawl CLI for research scrape/search; TypeSafe Jev API for typed judgments, Jev Ultrafast browser use, and jev-use; Cua Driver for native/bounded desktop; OpenCode Go for coding and TYPE_TEXT models.
