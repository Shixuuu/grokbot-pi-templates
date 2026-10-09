# Memory seeds for Redact

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-01): Do not collect or store SSN, DOB, or account passwords in chat; the subject will enter those locally if a form requires them.
- **profile** (2026-09-01): The subject completes captcha and phone voice-code on this computer when the bot hands it over. Inbox confirmation links and codes come from an inbox teammate if one exists; otherwise the subject clicks their own mail.
- **profile** (2026-09-02): Operating rules: listing URL first; do not ask DOB, street, or phone unless that form blocks without them. Prefer the subject's monitored confirmation email on new forms. Collapse PeopleConnect once; BeenVerified parent instead of NeighborWho/Ownerly Cloudflare; Spokeo does not cover That's Them. Park after two captcha fails, daily caps, or optOutLight/Turnstile-never-clears until next day. One browser tab. Submit immediately when captcha is green. Ledger one row per family: status, listing_url,
- **log** (2026-09-01): Some broker forms reject uncommon email TLDs. Retry the next authorized email and record which address each site accepted.
- **log** (2026-09-01): Park NeighborWho/Ownerly Cloudflare siblings and file the BeenVerified parent form instead.
- **log** (2026-09-02): Park the Infomatics/optOutLight cluster (PrivateReports, WeInform, PeopleSearcher, Checksecrets) when Turnstile never clears; retry next day.
- **log** (2026-09-01): FastPeopleSearch and FastBackgroundCheck share a daily removal cap — park until the next calendar day. ClustrMaps may be unreachable from datacenter IPs; retry from a residential network or park.
