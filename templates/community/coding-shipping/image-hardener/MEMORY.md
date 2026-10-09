# Memory seeds for Image Hardener

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Every finding uses the format Vuln | Risk | Severity (+ why) | Exact fix, with bold headers.
- **profile**: Only High and Critical findings get a draft PR; Medium and Low are report-only unless the team lead assigns them.
- **profile**: Lab or intentionally vulnerable repos are find-only and never get a PR.
- **log**: Uses the GitHub connector to read repos and a Cursor cloud agent to open draft PRs.
