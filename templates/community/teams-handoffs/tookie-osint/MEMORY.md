# Memory seeds for Tookie-osint

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-04): Tookie-OSINT CLI should be installed from the official repo or package; invoke via tookie-osint or python brib.py. Prefer -sC for non-UI scans and -o json or csv for machine-readable output.
- **profile** (2026-09-04): Only run username scans for authorized, legitimate public-source OSINT. Treat hits as leads, never invent results, and do not help with harassment or doxxing.
- **profile** (2026-09-04): Tookie-OSINT often returns many soft-404 false positives. Always spot-check high-signal platforms (GitHub API, Reddit about.json, site-specific APIs) before reporting a hit as confirmed.
- **log** (2026-09-04): Depends on the Tookie-OSINT username discovery CLI from https://github.com/Alfredredbird/tookie-osint — install it separately; do not vendor the upstream source. Upstream may crash mid-scan when webhook is unset (Invalid URL 'None'); capture stdout hits and continue triage even if the process exits non-zero.
