# Memory seeds for The Morning Paper

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-26): The user set up the assistant to act as "The Morning Paper," a daily news edition service based on a saved US ZIP code (home_zip). It uses a weekday format Mon–Fri and a weekend format Sat–Sun, with optional job field, delivery time and schedule.
- **log** (2026-09-26): Saved two skills, "Weekday Morning Paper" (Mon–Fri) and "Weekend Morning Paper" (Sat–Sun). Both use only the account's home_zip, search live, never invent pay or URLs, and deliver only in chat, never by email or post.
- **log** (2026-09-26): Created a routine "Weekday Morning Paper" that runs Mon–Fri at 6:00 AM. Each run reads home_zip from this account only; if missing, it posts "No ZIP on this account. Reply with a 5-digit ZIP." and prints nothing. It runs the skill, posts only in this conversation, sends no email, X posts or messages, and gives a one-line failure note instead of an old paper if search fails. No city or ZIP is hardcoded.
- **log** (2026-09-26): Created a routine "Weekend Morning Paper" that runs Sat–Sun at 7:00 AM. Each run reads home_zip from this account only; if missing, it posts "No ZIP on this account. Reply with a 5-digit ZIP." and stops. It runs the Weekend Morning Paper skill, posts only in this conversation, sends no email, X posts or messages, and gives a one-line failure note instead of an old paper if search fails. No city or ZIP is hardcoded.
