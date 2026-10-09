---
name: steward-house-a-bot
description: "Use this when the owner says \"new bot named...\", \"house this bot\", first run names bots in its plan, a bot-designer bot (if the owner has one) hands over a finished design, or a housed bot's profile or skills changed."
---

## When to use
- A Grok Bot needs a home on GitHub.
- A finished design arrives from a bot-designer bot, if the owner has one. Steward houses it; Steward never redesigns it.
- Update a home: the owner, a designer bot, or a fleet message says a bot's profile or skills changed, or the weekly drift check finds a home's profile copy differs from the live profile.

## Inputs
- Display name and one-line purpose.
- Repo owner: the org if one exists, else personal.
- Profile text from the owner or the designer: job, anti-jobs, voice, connectors.
- Look up the live connector tools for repo search, repo create, multi-file push, issues, Project items, secret scanning.

## Steps
House a new bot:
1. Design handoff only: check job, anti-jobs, voice, and connectors are present. If one is missing, ask the designer one question where the handoff happened. Do not fill it in. Copy the text as given.
2. Slug: `bot-` + lowercase name, hyphens only.
3. Reuse check: repo search for OWNER/bot-<slug>, and the slug map in the snapshot.
   - Exists and is this bot: reuse, skip to step 6.
   - Taken by something else: add a suffix (`-2`). Never overwrite.
4. One-line confirm: "Private folder bot-<slug> for PURPOSE. Reply yes."
5. Create the repo: private, auto-init with README, in the org if available.
6. Scan the three files per steward-secrets (scan gate). Any hit: stop, steward-secrets.
7. Seed in one commit to the default branch:
   - README.md: what the bot does, who it serves, board link.
   - PROFILE.md: the published brain (job, anti-jobs, voice), exactly as given.
   - SETUP.md: connectors it needs and once-only gates. No tokens, no keys.
8. No workflows. bot-* repos are docs-only.
9. Bot home issue: reuse one, else create "Bot home: DISPLAY". Add it to the board.
10. Slug map row (snapshot): display | slug | repo | item | coding | living.
11. Roles: Steward administers org, board, labels, PRs, merges. A coding bot pushes only to its own repo. A designer bot is not a GitHub admin.
12. Handoff: reply where the handoff happened, with the receipt.

Update a home (mirror sync):
1. Read the home: its profile copy (`mirror/PROFILE.md` if a `mirror/` folder exists, else `PROFILE.md`), `mirror/skills/`, `CHANGELOG.md`, `SYNC.md`.
2. If the home copy was edited on GitHub after the last sync, ask the owner which wins before overwriting. Otherwise the live profile wins.
3. Refresh the profile copy. Scrub box-specific lines (internal file paths, key fallbacks, anything secret) and leave "(box-specific line omitted from the mirror)" in their place.
4. Add or refresh `mirror/skills/<slug>/SKILL.md` for each changed skill, copied exactly.
5. Add a CHANGELOG entry at the top (create `CHANGELOG.md` if missing): date, version, what changed in plain words, who asked.
6. If the home has `SYNC.md`: set the sync time (owner's timezone) and a sha256 for each mirrored file.
7. Scan every file per steward-secrets (scan gate). Any hit: stop, steward-secrets.
8. Commit in one push. The bot's own home and other docs-only `bot-*` homes (private, no code): straight to the default branch, pre-approved. Anything else: steward-land-a-change (draft PR, merge on yes).

## Validate
- Reading files returns README.md, PROFILE.md (matching the given text), SETUP.md.
- A repo search shows it private.
- Board items include the Bot home issue.
- Update a home: the profile copy and each synced skill read back matching the live text (after scrubbing); CHANGELOG shows the new entry.

## Return
- One sentence: "DISPLAY now has a private home, bot-<slug>, on your board."
- Repo link as receipt.
- One next step, for example "Want the next bot housed?"
- Update a home: "DISPLAY's home is up to date." with the commit link.

## Needs approval
- The one-line "Reply yes" for a new private repo.
- Mirror commits (profile, skills, changelog) to docs-only `bot-*` homes: pre-approved. Any other change to a home: draft PR, merge on yes.
- Making a bot public is a separate yes (steward-protect-and-share). Never default bots to public.
