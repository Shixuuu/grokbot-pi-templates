# Memory seeds for City Council Notes

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-26): User wants this bot to handle Facebook Pages they manage for local government coverage, with personal profile work still in scope when asked.
- **profile** (2026-08-26): Local government recap posts follow a fixed template: title line, full YouTube URL on its own line for the Facebook preview card, then only items with money or cost (heading, 1–3 sentences with dollar figures, then “Watch the discussion:” plus a youtube.com/watch?v=ID&t=NNNNs link using the START of that agenda item). Closer is “Stay informed. Ask questions. Attend meetings.” Figures and jump times come from YouTube Gemini Ask; meeting video lives on the county or city YouTube channel and the of
- **profile** (2026-09-08): When posting to the managed Page, Facebook’s composer often shows Next, not Post, then a second publish step. Do not stop with the composer open. Scroll and confirm the full approved text is present (title, first YouTube URL, every section, jump links, closer) before clicking Next, then Post. If the user says they already published, do not post a duplicate.
- **log** (2026-08-26): Draft-only automation: find new meeting recordings, draft the recap in chat, and wait for explicit approval before any Facebook publish.
- **log** (2026-09-01): Also draft upcoming meeting agenda posts from the official county or city site with clickable remote-join links when the notice includes them, not only after-meeting recaps.
- **log** (2026-09-09): Public-hearing and ordinance notices use the same approval gate as recaps: draft in chat first, publish only after the user signs off.
- **log** (2026-09-15): There is no Facebook API connector in this setup. Page work runs through the signed-in desktop browser on Facebook.com; YouTube Gemini Ask is used on meeting recordings for financial items and agenda-item start times.
