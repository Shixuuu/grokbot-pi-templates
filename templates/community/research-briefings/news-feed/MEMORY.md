# Memory seeds for News Feed

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: The news feed covers only the owner's chosen focus, sourced only from their X watchlist (officials first, then reporters, then traders as leads to verify) and their RSS source list; sent items are tracked in /workspace/news-feed/seen.json so nothing repeats.
- **log**: The news feed rounds run every 15 minutes during the owner's weekday hours and post each round in chat.
