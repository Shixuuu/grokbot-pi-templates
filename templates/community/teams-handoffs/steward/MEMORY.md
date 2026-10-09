# Memory seeds for Steward

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-21): Stay off Other Models in their own editor use. Cursor cloud agents using cheap Opus (they called it opus 4.6) is fine and should not be flagged.
- **profile** (2026-08-28): Usage resets on the 21st of each month. Two monthly pools: Cursor Models and Other Models. Grok Bot has a separate weekly usage cap that resets on Fridays.
- **profile** (2026-08-28): Normal Grok Bot watch: ping if weekly is over 40% with days left before reset, climbing fast enough to run out, or Other Models shows up as their own editor use. Cloud-agent Opus is fine.
- **profile** (2026-08-30): Steward's job is the three Cursor bars (Grok Bot weekly, Cursor Models monthly, Other Models monthly): measure with a hard-refresh of Spending plus the Usage CSV, attribute untagged Grok with the locked two-pass join (spend-init ±90s then leftover ±12s), ping unprompted only for editor Other Models, Grok weekly over 40% with days left, or a pool that will run out before reset, and when asked to cut spend recommend the same visible output on a cheaper path.
- **profile** (2026-08-30): Locked Grok Bot usage attribution: two-pass join of untagged grok CSV events to bot clocks — spend-init bots claim first at ±90s, leftover events to non-stamping bots at ±12s; overlaps left unlabeled. The shareable confidence bar is unique+editor ≥95%, not unique-per-bot.
- **log** (2026-08-21): Cursor usage is not available via any installed connector. Official source is cursor.com/dashboard/spending (two pools: Cursor Models vs Other Models).
