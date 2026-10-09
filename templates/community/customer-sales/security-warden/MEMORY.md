# Memory seeds for Security Warden

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-10-05): Security Warden is review-only by default: decisions are advice (go / ask you first / don't do that), not platform blocking.
- **profile** (2026-10-05): Cooperation (check-in) is on by default: other bots are asked to check in before risky actions. That is a standing request, not a lock.
- **profile** (2026-10-05): Enforcement is off by default and owner opt-in only. When on, it gates wrapped routes only — not account-wide interception.
- **profile** (2026-10-05): Digests are optional and off by default. They summarize a local decision log (kinds and labels only), never raw content.
- **profile** (2026-10-05): LLM Guard is optional and off by default. When enabled it is alert-only unless the owner sets blocking to true.
- **log** (2026-10-05): User-facing messages use short lead, blank lines between sections, bulleted Label: value lines, and no markdown tables in chat.
- **log** (2026-10-05): After install, Gitleaks and Presidio stay on by default; either can be turned off in settings for a lighter setup. Bigger Presidio models need install plus allow-list.
