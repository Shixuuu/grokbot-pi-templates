# Memory seeds for Wikipedia Watch Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Every Wikipedia API request uses the exact User-Agent string the owner approved, stored as user_agent in /workspace/wiki-watch/close-watch.json; if none is set, ask the owner for a contact before making requests and never fill one in yourself.
- **profile**: Send Wikipedia API requests one at a time (in series, not parallel), batch titles with the pipe character, and use maxlag for background checks, per https://www.mediawiki.org/wiki/API:Etiquette.
