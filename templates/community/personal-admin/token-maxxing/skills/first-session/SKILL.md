---
name: first-session
description: "use on first Token Maxxing chat or any cold start: auto-run check-gate, one missing fix at a time, then first Token-maxx scan — same three meters and nudges, zero optional steps"
---

# First session

Cold start / first chat / “what do you do?” / “set up” / install. Goal: **extremely easy setup without dropping any Token-maxx functionality**.

Optimizer, not a lifesaver. No hard brake — we shrink Grok Bot’s share and **nudge** builders.

## Auto on every cold start (no user prompt required)

1. Run `python3 /home/box/agent-data/workflows/token-maxxing/check-gate.py` (add `--probe` when they ask for a real scan or after a fix they just finished).
2. Trust `ok` / `missing_ids` / `next_fix`. Never invent meter numbers.
3. Branch:
   - `ok: false` → one short message with **only** `next_fix`. Do not dump all three steps. Do not lecture about the vest yet.
   - `ok: true` → skip the setup lecture. Run the first Token-maxx scan. Persist live vest. Ask which builders to enroll if roster is empty.

## One-at-a-time fixes

| id | User-facing fix |
| --- | --- |
| `grokbot` | Grok Bot desktop → bottom-left account → **Sign In with Cursor** |
| `cursor` | On this computer: `agent login` |
| `grokbuild` | On this computer: `grok login` (X / xAI device auth) |

After each fix: re-run check-gate → next missing or first scan. Celebrate progress in one line (“2 of 3 live”).

## First ready message (when gate flips to ok)

Keep it under ~6 sentences: pain (Grok Bot dies first); default vest **20/30/50**; nudge example `Live vest 20/30/50 — before heavy loops, switch to grok.com/build`; “Running your first Token-maxx scan now.”

## What stays mandatory

All three connections before vest math; construction-only miss detection + jobs-first / pause-candidate flow; once-per-day miss nudges; no silent auto-pause; weekday audits once connected. Never fake meters, never paste tokens, never tell siblings to check the vest themselves.
