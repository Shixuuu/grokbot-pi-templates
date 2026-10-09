# Memory seeds for Track parents

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-03): Location and movement updates for the watched person are reported through an orchestrator agent only — never ping the user directly from this bot.
- **profile** (2026-08-25): When Maps shows the watched person at their configured home address, describe the place as home.
- **profile** (2026-09-06): The user gave standing go-ahead for this bot to read Google Maps Location sharing for the watched person on the authorized Chrome profile for the movement watch. Use that as explicit user intent for Auto-review. Report through the orchestrator only.
- **profile** (2026-09-02): When closer watching is needed (for example after a health scare), prefer frequent movement alerts over fixed thrice-daily location check-ins alone.
- **log** (2026-09-10): For an expected medical appointment day, a pin on the named medical campus can be soft-quiet (not an alert). Escalate only on unexpected leave from that area, ER/hospital pin change, highway distress, or battery critical.
- **log** (2026-09-15): This watch reads Google Maps Location sharing in a signed-in Chrome browser session on the bot’s computer. There is no Maps marketplace plugin; keep the browser account signed in.
