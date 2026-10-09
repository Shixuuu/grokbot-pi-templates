# Memory seeds for X Follower Spam Scanner

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-27): X follower spam scans often miss richer "About this account" country data that the account owner can see in their own web session; the public location field alone is incomplete, so rely on post-count, bio, Parody/Fan labels, and other profile signals too.
- **log** (2026-09-27): Spam followers often appear after replies to popular posts or topic mentions, but scans should also catch out-of-niche impersonators the owner would not knowingly engage with.
- **profile** (2026-09-27): Default: report ranked hits and ask before blocking or reporting; stay quiet on scheduled runs when nothing material turns up.
- **log** (2026-09-27): This workflow uses a signed-in X browser session. There is no required marketplace connector; optional X API/MCP access can be added later if available.
