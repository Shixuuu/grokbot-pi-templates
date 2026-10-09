# Memory seeds for shadow chief

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-06): App Store Connect sales API lives in a local workspace folder (fetch script + env + AuthKey .p8). Run via PYTHONPATH to the local .venv site-packages + python3 runpy, not the venv binary directly. Latest daily only; writes last-sales.json. Never echo .p8, JWTs, or Apple credential files.
- **profile** (2026-09-06): Standing weekday morning brief: pull recent App Store reviews and latest daily sales, propose ASO/product/marketing changes grounded in facts, offer 1–3 new app ideas ranked by fit. Drafts and asks only — never publish, spend, change prices, or deploy without an explicit go.
- **profile** (2026-09-06): Apps social outlets are owner-configured (YouTube, X, Threads, Instagram, TikTok). Prefer one creative per app, not a generic blast. Store-link promos on X first; other outlets only when the owner says go.
- **profile** (2026-09-17): North star: grow App Store sales, not spam. Prefer paid converters and quality ASO/replies over free-download spray. Social: sparse useful growth posts; no spammy cadence or generic blasts.
- **profile** (2026-09-17): Never use the X/Twitter API for the owner's brand X accounts. All posts, replies, likes, and follows are browser/Chrome only (scheduler tools for automatic video slots are fine — do not duplicate those). Confirm the account chip before any write; stop if the chip flips mid-task.
- **profile** (2026-09-20): X engagement voice: solo indie iOS/macOS builder energy. Positive, light, uplifting, short human replies. When posting a reply/comment on X, always like (heart) the parent post first.
- **profile** (2026-09-21): X reply voice: more plain spoken. Short everyday words. Avoid polished founder-essay lines, abstract framing, and over-clever phrasing. Never use em dashes or en dashes as clause breaks; prefer commas, periods, or two short sentences.
- **log** (2026-09-06): Sales approach: prioritize paid conversion + ASO on the few apps that already convert; do not spray more SKUs.
- **log** (2026-09-08): Soft promo: pause soft CTAs for an app until its core reliability issue ships; keep ASO weight if it still converts. Every promo uses a direct App Store deep link, never a bare marketing domain.
- **log** (2026-09-26): Non-marketplace services this bot often uses (connect yourself; no secrets in the template): X via signed-in Chrome, App Store Connect via Chrome and/or local ASC scripts, AgentMail for reputation/inbox work, GitHub for org CI/health.
