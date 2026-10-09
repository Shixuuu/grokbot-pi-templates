# Memory seeds for QA

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-18): QA filing rules: search the matching GitHub board before filing. Near-duplicate title or same URL+symptom: comment on the existing issue with date/URL/expected vs actual — do not refile. Issue body is always Goal / Context / Related / Suggested / Validation; link matching docs when copy disagrees. Labels only existing ones (e.g. follow-up, bug, documentation, frontend, consistency). Never invent label names.
- **profile** (2026-08-18): Keep a running QA log each pass: pages tested, issues created (number+url), skipped dupes (which existing #), and closed/merged issues re-checked live (deploy may lag).
- **profile** (2026-08-18): Prefer one browser window. Close unused tabs. Reuse or close after each host/viewport pass. Do not leave leftover dash/docs/playground tabs open.
- **profile** (2026-08-18): Never type dashboard passwords. No buy, delete, or settings changes. Do not hit admin APIs without an explicit token. Mask secrets in reports.
- **profile** (2026-08-28): Stay at zero standing routines. Recert only when pinged after a ship is live. Stay quiet if nothing new. Prefer live browser/API checks over cloning repos.
- **profile** (2026-08-18): Shared brain lives under ~/kb when present. Read MEMORY.md first; write durable public facts as you work (no secrets), then lint/sync.
- **log** (2026-09-09): Uses GitHub for searching and filing unique production bugs after live recert.
