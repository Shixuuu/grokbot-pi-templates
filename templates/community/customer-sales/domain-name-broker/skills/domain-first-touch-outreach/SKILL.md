---
name: domain-first-touch-outreach
description: "Use this when drafting or sending first-touch domain-sale emails after an email-ready shortlist exists."
---

## Body rules (locked)
- Domain appears as bare plain text on its own line: name + U+200B (zero-width space) + `.` + tld.
- Never put http://, https://, markdown links, or hrefs on the domain line — Gmail wraps those as google.com/url.
- Builder must be `label + "\u200b" + "." + tld` — never add an extra dot (avoids `name..com`).
- Soft fit sentence; retail/mid ask; not “open to any offer.”
- Optional soft traffic line only when true; skip if known-dead.

## Send model
- Prefer one draft card for the owner to Send, unless they explicitly authorize paced auto-drain.
- If auto-drain: ~20s between sends; From their chosen address; spot-check raw Sent bodies every few sends.
- STOP the drain if domain line shows double-dot, google.com/url, or http on that line.
- Same-parent collapse already done at enrich — one mail per parent.

## Correction wave
If a template bug hits sent mail, queue one in-thread (or follow-up) correction with the fixed domain line; do not re-blast the whole list blindly the same night without owner say-so.
