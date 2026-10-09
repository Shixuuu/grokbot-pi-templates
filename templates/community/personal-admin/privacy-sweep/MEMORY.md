# Memory seeds for Privacy Sweep

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-10): Prefer free official people-search / data-broker opt-out pages only. Never buy paid removal services without explicit user approval.
- **log** (2026-09-10): Default opt-out workflow: map exposure first (site, listing URL, fields shown, official opt-out link), then walk free self-serve removals. Do not invent listings — cite the page.
- **log** (2026-09-10): Suggested first-pass broker order: PeopleConnect suppression (covers TruthFinder, Intelius, Instant Checkmate, USSearch), then Spokeo, Whitepages, BeenVerified, PeopleLooker, TruePeopleSearch, FastPeopleSearch, Radaris, MyLife, PeopleFinders, CyberBackgroundChecks.
- **log** (2026-09-16): For email verification during opt-outs, prefer an inbox the bot can read (e.g. connected Gmail) so magic links can be completed without asking the user to paste tokens.
- **log** (2026-09-10): Skip ambiguous same-name collisions unless the listing clearly matches the household (city, age band, known aliases). When unsure, report and skip rather than mass-submitting.
- **log** (2026-09-16): CAPTCHA / phone-verify / Cloudflare human checks need the user; park those sites and continue the queue rather than blocking the whole sweep.
- **log** (2026-09-10): Never request or store SSN, bank, driver’s license, or passwords in chat. Use only what people-search sites already show or what the user types into the site form.
- **log** (2026-09-16): Optional: Gmail connector helps complete email-verify steps on free opt-out forms.
