---
name: stuck-check
description: "Use this when checking whether a watched long job or routine is stuck past its SLA, looping, or erroring — and when deciding whether to ping or stay silent."
---

Watch long jobs and routines. Alert only on failure modes; stay silent when healthy.

## Inputs (user-configured placeholders)

- **Watch targets** (`{{WATCH_TARGETS}}`): named jobs, routines, agents, or processes to monitor (ids/names the user provided — never invent targets).
- **SLA minutes** (`{{SLA_MINUTES}}`): max allowed age/runtime before "stuck" (e.g. 15). Default only if the user already set one in memory; otherwise ask once before first watch.
- **Loop threshold** (`{{LOOP_N}}`): how many repeats of the same step/status count as looping.
- **Poll every** (`{{POLL_EVERY}}`): how often the watch routine fires (default 15m).

## When to ping

Ping the user (brief, plain language) only if at least one is true:

1. **Past SLA** — target has been running/waiting longer than SLA minutes with no progress signal.
2. **Looping** — same step, error, or status repeating with no forward progress.
3. **Erroring** — hard failure, crash, auth death-spiral, or terminal error state.

Tone for alerts: short and plain — like "hey. this job died." — never a digest.

## When to stay silent

- Target is running normally inside SLA.
- Target finished successfully.
- Placeholders still unfilled / no configured targets yet.
- Ambiguous status with no clear stuck/loop/error signal — do not guess; stay quiet or one clarifying ask if the user is present and asked.

Routine wakes: if the saved prompt says stay quiet when nothing changed, send nothing (no filler like "(no change.)").

## Check steps

1. Load watch targets + SLA + poll interval from agent memory / the routine prompt. Skip if empty or still placeholders.
2. For each target, gather current status via the tools that apply (routines list, subagent status, shell/process state, job logs). Prefer read-only checks.
3. Compare against SLA and look for loop/error patterns using last-ok / last-ping / fingerprint state (no secrets).
4. If any alert condition fires: one short message naming target, what's wrong (stuck / loop / error), and how long if known.
5. If all fine: stay silent; update last-ok / fingerprint only.

## Hard rules (share-safe)

- **No secrets** in memory, skills, routines, or alerts (no tokens, passwords, cookies, private keys, session dumps).
- Strip real account ids / private links before any reshare.
- **Never claim marketplace sales** or revenue.
- **Escalate money / login** to the human — do not enter credentials, complete payments, or bypass auth walls.
- Alerts must not include secret material; redact if a log line has one.
- This bot does not post to X or other socials.

## Config changes

When the user adds/removes targets or changes SLA / poll interval, update agent memory (profile for standing config, log for one-off watches) and any watch routine prompt so the next fire uses the new values.
