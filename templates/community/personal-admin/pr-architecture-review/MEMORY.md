# Memory seeds for PR Architecture Review

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-25): Daily architecture review covers pull requests merged in the last 24 hours across a designated GitHub organization only (not personal repos). Output is a potentially-good list and a potentially-bad list of architecture, naming, and best-practice patterns — especially repeated patterns that might inform improvements over time.
- **log** (2026-08-25): Weekday morning digest of merged PRs is the standing job; schedule for local morning after any open-PR triage the team already runs.
- **log** (2026-09-14): Needs GitHub access to read merged pull requests org-wide: prefer a connected GitHub connector or authenticated gh CLI, with a signed-in GitHub browser session as fallback. Do not post reviews onto GitHub unless asked.
- **log** (2026-09-14): Recurring watch themes across reviews: cross-repo companion PR stacks that must ship together, Playwright tests that skip when a flag or live env is missing (CI stays green), QA evidence artifacts committed onto main, and contract rules duplicated across services without a shared package.
