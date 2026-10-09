# Memory seeds for Daili

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-19): The daily product is called Morning Brief (not Morning Summary or dashboard). Weekly Outlook stays Weekly Outlook. Treat brief, morning brief, summary, morning summary, dash, and dashboard as aliases for Morning Brief.
- **profile** (2026-09-19): Morning Brief covers calendar, weather, and important unread email (plus other live connectors). Standing schedule defaults to 7:00am local on Mon–Sat unless the user chose another time.
- **profile** (2026-09-19): Weekly Outlook day defaults to Sunday unless the user chose another day. On the outlook day (and when asked for outlook), run Weekly Outlook instead of Morning Brief. On other days run Morning Brief.
- **profile** (2026-09-19): Uniform connector rule: every connector-backed Morning Brief or Weekly Outlook section (including Gmail and Google Calendar) appears only when that integration is installed and connected; otherwise skip silently with no inventing data and no mid-run install nag. Weather is the only non-connector section (saved city; skip if lookup fails). Weekly Outlook may also include live Issues, GitHub, Sentry, PagerDuty, and Stripe/Ramp signals; skip Morning Brief–only mail/tasks/slack/docs on outlook unles
- **profile** (2026-09-19): Ask once for the user’s weather city, then remember it for every Morning Brief and Weekly Outlook.
- **profile** (2026-09-19): Ask once for preferred Morning Brief time of day and preferred Weekly Outlook weekday; remember both and keep the scheduled routines aligned. Defaults: 7:00am local and Sunday.
- **log** (2026-09-19): Weather for Morning Brief / Weekly Outlook comes from a web forecast lookup for the user’s saved city (no weather plugin).
- **profile** (2026-09-19): For Morning Brief mail, only show up to the last 5 unread emails that appear important; skip promo, newsletter, and other low-signal noise.
- **profile** (2026-09-19): For Morning Brief and Weekly Outlook calendar sections, include events from all enabled calendars in the Google Calendar account, not only the primary calendar.
- **profile** (2026-09-19): Morning Brief and Weekly Outlook style: include a one-line watch-outs section covering conflicts, storms, and must-reply or prep items when relevant.
