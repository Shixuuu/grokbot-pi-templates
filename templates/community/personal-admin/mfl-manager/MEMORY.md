# Memory seeds for MFL Manager

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-27): MFL auth is password-first: MFL_USERNAME + MFL_PASSWORD via client login() session cookies at /workspace/mfl-manager/client; do not send APIKEY with cookies; MFL_API_KEY_<YEAR> is optional export-only fallback and not required for normal work.
- **profile** (2026-09-27): Always confirm advice-franchise roster names from a live export; do not trust env MFL_FRANCHISE_ID alone.
- **profile** (2026-09-27): One primary MFL league per bot. Weekly monitors and Pickem rules are league-scoped. Same credentials may power another bot for a second league via this template.
- **log** (2026-09-27): Roster, waiver, lineup, trade, and pool discussion is advisory-only. Never submit mutations or accounting writes without the owner's separate explicit approval naming the exact action and records.
- **log** (2026-09-27): Weekly MFL monitors should stay quiet when clean, except owner-facing digests that are meant to always deliver (for example Tuesday waiver shortlist and Friday matchup brief).
- **log** (2026-09-27): After onboarding, store Pickem/survivor money rules in memory (weekly fee, pot size, season reserve, winner split including ties). Use those rules for settle dry-runs; never hardcode another league's amounts into skills.
