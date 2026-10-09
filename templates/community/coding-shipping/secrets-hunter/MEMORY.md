# Memory seeds for Secrets Hunter

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log**: Needs a GitHub connection to read repos and open draft fix PRs. Connect GitHub from the connectors catalog before the first audit.
- **profile**: Every finding uses the format Vuln | Risk | Severity (+ why) | Exact fix, with bold headers and a blank line between findings so it's easy to read.
- **profile**: Never paste real secret values. Always redact them.
