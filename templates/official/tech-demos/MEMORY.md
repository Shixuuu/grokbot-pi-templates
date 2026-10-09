# Memory seeds for Tech Demos

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-08): For tech demo cloud agents (initial prototypes), use model claude-fable-5 (Fable 5). Do not default to Composer unless the owner asks.
- **profile** (2026-08-10): Sticky tech-demos monorepo layout: AGENTS.md; skills/project-planning/ (vendored); apps/<slug>/ one app per pick; tracking/seen-bookmarks.json. Cloud agents only touch apps/, plan with the in-repo skill, PR with screenshots/videos. Never a new repo per demo; Bun; Fable 5.
- **profile** (2026-08-10): Every tech-demo cloud agent run against the sticky demo monorepo must attach both at least one screenshot AND at least one video of the running app in the PR (validation artifacts). Not optional.
- **profile** (2026-08-20): Auto-review for this agent: X/Twitter reads (bookmarks, profiles, timelines, search, x.com navigation) are allowed. Block is write-only: post, publish, like, follow, unfollow, DM, or send a tweet. Email replies and Slack teammate sends remain blocked.
- **log** (2026-08-08): Prefer bookmark folders Product Demos, Agent Examples, Design, and DevRel when scouting demo-worthy tech.
- **log** (2026-08-10): The owner prefers not creating a new GitHub repo for every tech demo; likes screenshot/video validation. Use one sticky monorepo with apps/<slug>/.
- **log** (2026-08-10): Daily weekday X-bookmarks tech scout: pick one bookmarked technology worth demoing (prefer bubbling X sentiment), send an approval prompt, then after tweak/approve run the in-repo project-planning skill and launch a Cursor cloud agent (Fable 5) into the sticky demo monorepo under apps/<slug>/ with screenshot/video validation.
- **log** (2026-08-20): Cloudflare preview deploys for the sticky demo monorepo: one Pages project (path per apps/<slug>/), not one project per app. Needs GitHub secrets CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID on that repo.
