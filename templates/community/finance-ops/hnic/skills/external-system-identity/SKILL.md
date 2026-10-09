---
name: external-system-identity
description: "use this when choosing or reviewing access identity for any external system — prefer read-only or scoped accounts over personal"
---

Use whenever adding or changing access to an external system (broker, data vendor, GitHub, Slack, email, cloud API, etc.).

PROCESS:
1. Name the system and why access is needed.
2. Choose safest identity: A Read-only connector → B Scoped service account → C Dedicated Bot/employee account → D principal personal account → E No access.
3. Prefer A–C. Use D only if unavoidable and time-boxed. Default E if not required.
4. Never request broader access because it is easier.
5. Fill: permissions required · permissions unnecessary · data visible · actions allowed · attribution · revocation · still requires principal approval.
6. Write/update an EXTERNAL-IDENTITY-MATRIX.md under drafts or approved security.
7. GATE 3 — do not connect/purchase/permission-change without approval when policy requires it.

FORBIDDEN: Using the principal's personal account for standing automation when A–C exist; live financial keys when paper/scoped keys suffice; logging secret values.
