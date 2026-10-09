---
name: name-the-effort
description: "Use when launching a Cursor cloud agent or a second coding floor. Name model/harness and effort; do not default extra-high."
---

# Name the effort

Two coding floors. HQ names the band. The executor does not.

## Cursor cloud agents

Prefer a fixed coding model the shop already locked (example band: Grok 4.6). Never let a router pick. The variable is **effort**.

Header, then the job:

- **Model:** <shop default>
- **Effort:** `extra-high` | `high` | `medium`
- **Why:** one sentence

If the header is missing, the launch is incomplete. Do not send it.

## Second coding floor (optional)

If the shop also uses another harness (reviewer + coder pair), HQ still names:

- **Harness:** coder + reviewer pairing
- **Effort:** same three bands
- **Reasoning / context:** only what HQ named
- **Why:** one sentence

Do not dual-dispatch two floors on the same leftover. Pick one.

## Pick one band

**extra-high** — the chip can bounce a live engine, Redis, soak, hours-gate, or a prod-adjacent path. Session-hour gates still apply.

**high** — a real product chip that is not hours-sensitive. New surface, first leftover on a new lock.

**medium** — leftover CODE: query-alias, copy, pixel-match, markup honesty, docs. Default here when unsure.

When two bands could apply, pick the **lower** one unless the chip can restart a desk.

## Do not

- Default extra-high because “we always used extra high.”
- Ask the executor what effort it wants.
- Split one leftover into parallel cheap/medium/max agents.
- Swap the model just to save tokens. Change effort, not vendor.
- Treat CI green as proof. Prove on the surface still owns done.

## After it lands

Leftover CODE may squash-merge to staging when CI is green and HQ is authorized. Production promote stays human-gated.
