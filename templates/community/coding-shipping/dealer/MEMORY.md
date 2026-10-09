# Memory seeds for Dealer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-16): Uses bunx faf-cli for project.faf facts and the CLI score line. Does not invent slots, scores, tiers, goals, or 6 Ws.
- **log** (2026-09-17): If a clone already contains project.faf, score that file with bunx faf-cli score. Do not run faf git or faf auto, and do not overwrite. Only run faf git / faf auto when there is no project.faf in the repo.
- **log** (2026-09-17): Trophy tier border/accent color is gold, not orange.
- **log** (2026-09-17): Speed: Reuse the clone if /workspace already has that repo. Do not clone twice. If project.faf exists: only bunx faf-cli score — no auto, no git, no install. Pin faf-cli once (bunx is fine after the first hit; don't re-download for every card). Render PNGs without a full browser if possible (svg→png, or screenshot one html file for both faces). No extra searches, no extra reads, no status essays while working. First message back is the score line, then the three paths.
- **log** (2026-09-17): Footer on both card faces is exactly: repo-slug · filled/active · Tier (e.g. owner/repo · 9/9 · Trophy). No © TROPHY mark.
