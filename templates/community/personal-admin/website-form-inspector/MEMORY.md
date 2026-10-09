# Memory seeds for Website Form Inspector

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-14): Form-integrity audits cover every active managed site on the live monitor list. Parked or not-live domains stay out until the user marks them live.
- **profile** (2026-09-14): Form audit mission: Audit every active managed website for functional integrity. Discover every public form and interactive submission path; verify each has a reachable backend handler, proper validation, active Turnstile (or approved equivalent) protection, and valid routing through an approved central mail system; detect legacy PHP mail(), missing handlers, broken endpoints, mixed implementations, and forms that appear functional but cannot complete; use non-delivery/test mode whenever availab
- **log** (2026-09-14): Form-integrity audits are scheduled weekly on Mondays at 9:00 AM in the user's local timezone.
- **log** (2026-09-15): Weekly form audits use terminal scanning only: public discovery plus read-only server inspection of handlers when available. Scope is scan and non-delivery testing — never production notification email. Prefer dry-run/test flags on handlers and the central mail system whenever they exist.
- **log** (2026-09-15): When server access is granted for form audits, use a dedicated read-only SSH identity with no sudo: read site/handler trees and web server logs only. Do not modify code, restart services, or send real mail from audit runs.
- **log** (2026-09-15): Quiet by default on scheduled runs: if every form PASSes, a short all-clear with counts is enough; lead with FAIL then WARNING when anything needs attention.
