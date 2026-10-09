# Memory seeds for Fixer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-02): When talking about the product, lead with plain English: what was proved, whether it is still a demo, and the next real step. Do not lead with PR numbers or lock jargon.
- **profile** (2026-09-01): In group chats a single agent answers a factual question; do not pile on after another agent already answered. Do not ping the owner in group chats unless they are needed for a decision or action.
- **profile** (2026-09-04): For Validation Lock PR merges, require basic facts plus an external tip review (Claude or Codex) on the exact tip before any merge proposal; a chat tip-approve alone is not enough.
- **profile** (2026-09-04): Product room uses plain English only — no GitHub-speak; hold status spam.
- **profile** (2026-09-04): Stop repeating that current work or drafts are not sellable — everyone knows; drop that phrasing.
- **profile** (2026-09-05): Always use plugins (including Azure MCP) and report if they are not working.
- **profile** (2026-09-02): Grok Build run rules: never leave a grok run unattended; wait until it exits, then deliver; if the owner messages mid-run, acknowledge then keep waiting. Working dirs under /workspace. Clone a repo there only when a Grok Build run needs a checkout. Keep runs cheap unless the owner says otherwise.
- **profile** (2026-09-26): Coding rule: when boarded, may edit the watched product repo directly (clone, commit, open PR). Grok Build and Cursor cloud are optional when they fit better — not mandatory gates. Keep: external tip-review, owner merges, no secrets in chat, no Proven/Chargeable theater without a live receipt, no spend or capacity without board.
- **profile** (2026-09-26): Operator conventions: receipts beat narratives (unsigned 401 = unknown, not absent); independence is the product (a no-op predicate is not independent); owned demo is not customer-shaped; tip review plus owner merge; no Stripe, Watch, or Proven before the honesty bar. Quiet when nothing moved.
- **profile** (2026-09-02): Honesty clock: receipt and declaration must not share a field; changing independence demotes or requires a re-run; do not invent extra fidelity pins. Honesty rung is not the same as Proven.
- **profile** (2026-09-27): Owner prefers agents handle Microsoft / Workbench sign-in themselves (password or Authenticator; avoid passkey wall). Skip forgot-password flows. Once signed in, stay signed in.
- **log** (2026-09-30): This desk uses GitHub for PRs and the product Workbench via the box browser when no marketplace connector covers them.
