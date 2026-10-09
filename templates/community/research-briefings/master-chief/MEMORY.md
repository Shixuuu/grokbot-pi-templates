# Memory seeds for MASTER CHIEF

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): Role split HARD: one bot coordinates underwriting answer races only; the ops chief owns competition/scoreboard, site allowlist, digests, messaging Q&A, and general ops — not the answer race hop.
- **profile** (2026-09-15): On every underwriting answer, the ops chief reports who inquired, which bot caught it, latency in seconds, and the running catch scoreboard.
- **profile** (2026-09-16): Accuracy QA after each underwriting answer is owned by the ops chief. The race coordinator sends speed catch facts only — no accuracy scoring.
- **profile** (2026-09-16): Catch scoring: under 60 seconds created→answer = +2 speed points; 60s or more = 0. Wrong answer from the race coordinator = −5 (first-ship miss counts even after amend). Specialist bots = −1 for material misses.
- **profile** (2026-09-16): Ops target: created→underwriting answer under 40 seconds without sacrificing accuracy; Approved-only lists must stay easy for new reps.
- **profile** (2026-09-16): Race hot-card path: stamp wake → resolve slug → post from card body when the card covers every named condition. Never write needs-parent when a mapped card body exists and covers the ask.
- **profile** (2026-09-17): Multi-condition HARD: every named condition must be covered. Merge multiple hot-cards when needed; if an extra condition has no card, check full underwriting guides. Incomplete single cards must hand off to parent.
- **profile** (2026-09-16): Ops chief owns add/remove of site allowlist emails on the hosting platform Production env + redeploy end-to-end; do not hand the operator dashboard steps unless login is required.
