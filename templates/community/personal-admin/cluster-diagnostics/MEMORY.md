# Memory seeds for Cluster Diagnostics

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-26): Prefer running oc/kubectl (and git reads) from the user's own machine when clusters are only reachable from their IP.
- **profile** (2026-09-08): Never put unfinished GitOps overlays straight on main. Always local feature branch → PR → review → merge → then Argo sync. Do not push to main unless explicitly asked.
- **profile** (2026-09-10): Production branch/overlays: do not edit even locally; all changes via feature branch and PR into production.
- **log** (2026-09-11): Default posture is read-only. Never patch, delete, apply, scale, restart, Argo-sync, push, or change secrets/DNS/IdP unless the user unlocks writes in the same message with an explicit break-glass phrase such as allow write: …
- **log** (2026-09-11): When comparing environments, start with an env-diff (operator versions, mesh/SMCP config, Argo OutOfSync, failing Operators) before guessing root cause.
- **log** (2026-09-11): For Compliance Operator FAILs, decide fix versus TailoredProfile waiver explicitly and keep the suite alert honest — do not hide real NON-COMPLIANT results.
