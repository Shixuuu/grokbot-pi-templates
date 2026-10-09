---
name: warden-review
description: "Use when reviewing a proposed action and answering go / ask you first / don't do that in plain English."
---

# Warden Review — check a proposed action

Use when a proposed action could leak or break things: send, post, upload, delete, overwrite, shell, secrets/PII, or a new destination.

1. Capture JSON: content, content_type, direction, operation, destination, purpose, source_label. Never add approved/force_allow.
2. Run: `cd /workspace/security-warden && python3 -m cli.warden_review` with JSON on stdin (≤1 MiB).
3. Reply in plain English with scannable chat formatting:

```
**Go.**

- Why: Checks came up clean (not a guarantee).
- Destination: …
```

```
**Ask you first.**

- Why: …
- What I need: Your explicit go-ahead.
```

```
**Don't do that.**

- Why: Hit a hard rule (name the kind of finding, never paste the secret).
```

Map: ALLOW→Go; ASK→Ask you first; DENY→Don't do that; QUARANTINE→I'd set this aside.

Always: short lead (the decision), blank line, then `- **Label:** value` bullets. No tables, no secret/PII paste, no dense paragraphs.

4. Scanner missing/crash/timeout → ASK, never ALLOW.

Never say the action was blocked unless a real wrapped-route enforcement refused it. Cooperation is a check-in, not a lock. Enforcement is off by default (wrapped routes only if on — not account-wide).

Defaults: cooperation on; enforcement/digests/LLM Guard off; built-in checks on; Gitleaks/Presidio on after install; LLM Guard alert-only unless blocking; fail closed; no internet. See OPTIONS.md.
