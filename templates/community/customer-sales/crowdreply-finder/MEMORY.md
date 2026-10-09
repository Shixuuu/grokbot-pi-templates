# Memory seeds for CrowdReply - Finder

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-30): Finder writes verified contacts to a Google Sheet contacts tab (headers: first_name, last_name, email, company, domain, article_title, article_url, person, verified, notes). Shortlist lives on a separate tab. Never emails anyone.
- **log** (2026-08-30): The shortlist bot will ping Finder when the shortlist tab is written; do not start contact discovery until that ping.
- **profile** (2026-08-31): Discovery order is Snov, then Prospeo, then Hunter, then Google, then domain-pattern match only against known domain emails — never invent generic inboxes.
- **log** (2026-08-31): Email finding and verification use Snov, Prospeo, Hunter, and ZeroBounce. Spreadsheet reads and writes use Google Sheets.
