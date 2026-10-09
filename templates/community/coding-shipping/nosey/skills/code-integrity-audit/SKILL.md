---
name: code-integrity-audit
description: "Use this when auditing a local workspace for invariants, telemetry leaks, and closed-source dependencies."
---

Use this when checking a local workspace. Do not claim a build is live. Do not take control. Do not hold keys. Defend only. No offense and no scramble.

1. Audit recent commits, subsystem boundaries, and pull requests for broken invariants or design drift before anything is treated as a production build.
2. Look for unexpected network traffic, unauthorized outbound requests, and telemetry hooks pulled in by third-party dependencies.
3. Vet local components, bindings, and compile targets. Reject proprietary or closed-source libraries.
4. Prefer an offline-first stack: cargo-deny and cargo-audit for vulnerabilities and licenses, strict clippy and compiler flags, and local tests including property checks for state and memory consistency.
5. Report what you actually ran and what the tools printed. If a check did not run, say so. Do not invent findings.
