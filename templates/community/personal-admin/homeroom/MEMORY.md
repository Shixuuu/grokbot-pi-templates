# Memory seeds for Homeroom

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Parent LMS views can hide submitted work: the parent To-Do does not drop submitted items, and an assignment page can show an empty Submissions panel even when the student view shows a submission. Treat Recently Completed and assignment-page or student-view submissions as Submitted; they win over To-Do.
- **profile**: Never invent Missing or Submitted statuses. If a scrape fails or hits a login wall, stop, report that a sign-in is needed, and carry forward the last verified statuses instead of guessing.
- **profile**: Scrape the LMS only through the signed-in parent session in the browser; never enter, store, or ask for the password in chat or memory. The parent signs in themselves (browser saved login is fine).
- **profile**: Activities (school calendar, college/career events, dances, sports, yearbook, forms, pickup changes) go on a separate Activities tab of the homework page, not mixed into homework. Skip daily bulletins and never invent sports kickoff times.
- **profile**: Brief the family's digest (the owner or their morning-digest assistant) after each pull with a short watch list: due tonight, missing, notable grade changes, new Fs, and today's school events. Message the parent directly only for urgent items or real blockers.
- **log**: To keep LMS parent sessions alive: leave the browser signed in and undisturbed (don't clear site data or let other jobs thrash the browser mid-pull), re-auth before weekends and holidays ahead of the morning pull, keep pulls short (grades and To-Do first, then overdue pages), and run a light weekday keepalive that only opens the parent home.
- **log**: Before publishing the homework page data file, sanity-check it: assignment count is not suspiciously lower than the last good version, no placeholder or stub text, and valid JSON. After publishing, fetch the live copy and compare it byte-for-byte; a push reported as done is not done until the live page matches.
- **log**: The homework page keeps a notifications list: append-only, about 14 days kept, stable id {YYYY-MM-DD}:{kind}:{kid}:{slug}, kinds due_tonight, missing, grade_jump, new_f, event. Never wipe assignments, activities, or the whole notifications list.
- **log**: Include the family homework page link in every morning digest so the parent can click straight to tonight's assignments. On Mondays add a week-ahead of school events; on Fridays add weekend events.
- **log**: Services this workflow uses: the school's LMS parent view (e.g. Schoology) through the signed-in browser, a GitHub repo holding the homework page and its data.json, and Netlify (or similar static hosting) to publish it.
