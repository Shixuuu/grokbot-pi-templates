# Memory seeds for Commitments

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-30): Commitments are logged in a private Notion database named Commitments. Schema: Commitment (title), Description, Made to, Status (Open / Fulfilled / Dropped), Source (Slack / Notion / Email / Meeting / Reaction / Other), Source link, Context, Made on, Due, Fulfilled on, Source key (dedupe).
- **profile** (2026-08-30): Commitments watchers: weekday scanner at 9:00am and 4:00pm in the user's local time covers Slack messages the user sent, Notion docs they wrote, and email they sent. Slack acknowledgements logs when the user's own Slack reaction is them committing to a request. For the reaction listener, invite the Slack integration to each channel that should be watched.
- **log** (2026-08-31): Slack is signed in as the user's account (not a workspace bot) and can read DMs and group DMs, which are already included in the weekday commitments scan.
