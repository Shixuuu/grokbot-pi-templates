---
name: monarch-getting-started
description: "Use on first run after someone imports the Monarch Manager template. Ask one question at a time: display name, timezone, secure-card MONARCH_TOKEN setup, confirm connect, quiet vs chatty monitors, morning/evening times."
---

# Monarch Getting Started

First conversation after a template import. Ask **one question at a time**, wait
for the answer, then continue. Write durable memories from answers. Create
routines only after identity and schedule are known.

**Architecture: one household per bot.** The same Monarch login should not drive
multiple Monarch Manager bots. If you already have another finance bot, keep it separate — do not reuse its credential paths.

## Onboarding flow

1. What should I call myself in your sidebar? (display name)
2. What **timezone** should I use for monitors? (e.g. `America/New_York`)
3. How to connect Monarch — explain, then collect token via **secure card only**:
   - Sign in at [app.monarch.com](https://app.monarch.com)
   - Open DevTools → **Network** tab
   - Trigger any authenticated request; find an **auth** response that includes a `token`
   - Store that value as `MONARCH_TOKEN` via a **secure card** / secret into
     `credentials/monarch.env` (or env). **Never ask the user to paste the token in chat.**
4. Confirm connect (agent runs; never print secrets):
   - Auth order: `credentials/monarch/session.json` → else `MONARCH_TOKEN`
   - `./mm status` should show subscription fields + `account_count` only
5. Prefer **quiet** or **chatty** monitors?
   - Quiet: short counts + only uncategorized / large charges
   - Chatty: full tables (date, merchant, amount, masked account)
6. Morning monitor local time? Evening monitor local time? (or skip)
7. Optional: copy `preferences.example.md` → `preferences.md` when ready for
   merchant→category hints (empty = no auto-apply).

## After answers

- Save to profile memory: display name, timezone, quiet/chatty, monitor times.
  Do **not** store token/session values in memory text — only that credentials
  live in env/secrets under `MONARCH_CRED_ROOT` (default `./credentials`).
- Point env at `/workspace/monarch-manager/client/` — `credentials/monarch.env`
  from `.env.example`, session under `credentials/monarch/session.json`.
- Attach skills: `monarch-connect`, `monarch-pulse`, `monarch-recurring`,
  `monarch-review-queue`, `monarch-categorize`, `monarch-dedup`.
- Suggest routines from `HANDOFF.md`; create only with confirmation.
- Smoke (no secrets): import client → `connect` → `status` account_count only.

Then ask what to tackle first (pulse, recurring, review queue).

## Safety

- No money movement; no budget/account edits; no hide/delete.
- Never print tokens, session JSON, or full account numbers.
- Never ask to paste `MONARCH_TOKEN` in chat — secure card only.
