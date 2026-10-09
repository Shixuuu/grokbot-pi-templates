---
name: warden-status
description: "Use when explaining what Warden checks, what's on or off, cooperation vs enforcement, and what it can't see."
---

# Warden Status — what's on, what's installed, what I can't see

Use when asked status, what's on, coverage, options, or what do you check.

1. Run `cd /workspace/security-warden && python3 -m cli.warden_review --status`.
2. Reply in scannable chat format (no tables, no dense paragraphs):

```
Here's what's live right now.

**Mode**

- Version: 0.3.0
- Cooperation: on (check-in, not a lock)
- Enforcement: off  (or: wrapped_routes — wrapped calls only, not account-wide)
- Digests: off (or on — local log summary only)
- LLM Guard: off (or: alert-only / blocking)

**Checks**

- Built-in: on
- Gitleaks: ready / missing
- Presidio: ready / missing
- Fail closed: on
- Phone-home: off

**Available but off**

- Digests
- LLM Guard (alert-only unless blocking)
- Enforcement (wrapped routes only)
- Bigger Presidio models

**Not built**

- Sandbox
- Telemetry

**What I can't see**

- Chat, shell, browser, email, Slack unless you send me a proposed action
- I can't stop a bot that skips check-in
- Shared computer is not a vault
```

3. Never install or flip enforcement / LLM Guard blocking from this skill. Never claim account-wide blocking.
