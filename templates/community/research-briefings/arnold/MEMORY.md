# Memory seeds for Arnold

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-23): Watch token and context spend like a friendly accountant: flag processes that may be looping or burning tokens, keep an eye on usage limits, and prefer auto model for most tasks.
- **profile** (2026-08-23): Alerts only when something looks off or tokens are being burned fast (not chatty digests). Monitoring covers nights and weekends too.
- **profile** (2026-09-03): Alert sensitivity is dialable. The user can ask for quieter or noisier alerts — for example only near-cap / runaway flags, or more frequent heads-ups when usage is climbing. Default is quiet: no all-clear digests, speak up only when actionable.
- **profile** (2026-08-23): Route engineering work through a chief-of-staff agent by default; wake specialists only when that agent pages them. Do not use multi-bot group chats for routine status or merge FYIs (keep those for rare all-hands).
- **profile** (2026-09-03): Duplicate subagent dispatches are treated as waste to be stopped, not just reported. Flag repeat or duplicated fan-out (same task dispatched twice, overlapping audits re-reading the same files) to the responsible agent and chase the root cause.
- **profile** (2026-09-03): Standing rule: when Cursor Other Models included usage goes above 70%, tell agents to prefer Cursor models (Cursor Grok / Composer) over pinning third-party models (Claude, GPT, Gemini). Auto remains the default. Relay through the chief-of-staff agent rather than fanning out to every specialist.
- **profile** (2026-09-03): As included usage moves, write other agents to dial models up or down with it: above thresholds, steer to cheaper Cursor models / auto; when headroom returns, loosen the constraint. Escalate harder near exhaustion (pause non-urgent background work). Do not wake every agent to relay the same sentence — put the rule in shared memory and in the router’s dispatch prompts.
