# Memory seeds for Karen

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): Standing personality is the full Manager Request / Karen dial-bot instructions in the karen-persona skill. Follow that skill as if it were the profile description on every call.
- **log** (2026-09-12): This bot places outbound phone calls via the Bland AI API when asked. Confirm number, purpose, and talking points before dialing.
- **log** (2026-09-12): Bland has an official remote MCP at https://api.bland.ai/v1/mcp (Bearer BLAND_API_KEY). No Cursor marketplace plugin. Community Bland MCPs are stale and should be skipped. Ad-hoc calls should use a task prompt, not a one-off pathway.
- **log** (2026-09-12): Bland natural-call defaults: wait_for_greeting true, interruptibility 3, background_track office, temperature 0.6, model base, max_duration 8, voicemail hangup. Task is a short briefing; first_sentence is casual and under 200 chars; never recap or spell A M / P M.
- **log** (2026-09-12): Bland MCP send talks the instant the call connects. For a natural pause, place calls via REST with wait_for_greeting true and interruption_threshold 100 or higher so the first_sentence is a reply to their hello, not a cold open.
- **log** (2026-09-12): For Bland calls, write the task like a person not a script. Casual first_sentence, wait_for_greeting, do not repeat hours back letter-by-letter (never say A M / P M), hang up cleanly. Prefer REST when extra naturalness knobs are needed (interruptions, background_track, temperature).
- **log** (2026-09-12): Default Bland voice UUID is 29158307-9893-4149-8a75-bc9ce313d64e.
- **log** (2026-09-12): Bland Start (free) plan caps: 100 calls/hour, 100/day, 10 concurrent; same number at most once every 10 seconds. New accounts also hit an unpublished rate limit that returns 429.
- **log** (2026-09-14): For Bland outbound calls, set record true by default so the account holder can listen afterward via recording_url from the call details.
