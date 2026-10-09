---
name: app-release-workflow
description: "Use when building, fixing, versioning, staging or deploying an app release or hotfix, so legal docs, security checks, backups and the deploy go-ahead are never skipped."
---

# App release workflow

## Principles
- Build and stage first. Deploy only when the owner gives the agreed go-ahead word (default: "Deploy"). A go-ahead given before the build is finished means: deploy as soon as all tests pass, and hold and report if any fail.
- Deleting anything (files, data, accounts, backups) needs the owner's explicit confirmation.
- Prefer small, dependency-free code. Keep the server, client and service worker versions in sync.
- Never print, commit or ship secrets. Keys live in locked folders on the server, never in public web folders or app packages.

## Every version or hotfix
1. Build the change in the staging copy of the app, never on the live server.
2. Bump the version everywhere it appears (API version and date, the what's-new list, the changelog, the HTML cache-busting references, the service worker). Replace each occurrence deliberately, then run a syntax check.
3. Docs: update How to use for anything a user will see differently. Re-read Terms and Privacy and update them whenever data use, permissions, roles, third-party services or retention change. Say explicitly when they needed no change.
4. Security and integrity checks: every new endpoint gives 401 when unauthenticated, 403 for the wrong role and 400 for bad input, with a rate limit where abuse is possible. Role and ownership rules are enforced on the server. Tokens are stored hashed, expire, and are revoked on sign-out, role change and deletion. No secrets appear in client code, packages or public paths. Check for regressions in sign-in and data visibility.
5. Test: run API tests against a local copy with realistic data, plus headless-browser checks at phone width with no page errors, for each affected role. State plainly what could not be tested.
6. Mirror the staged release into its versioned folder and report the list of files to deploy.

## Deploy (only after the go-ahead)
1. Back up every file being replaced, plus the data file if the release migrates data, to a timestamped backups folder.
2. Upload the server file under a temporary name and syntax-check it on the server before swapping it in.
3. Upload the public files, swap the server file in, fix ownership, restart the service, and confirm it is active with a clean log.
4. Verify over public HTTPS on every domain: health, the version endpoint, checksums against staging, and new downloads.
5. If a CDN sits in front, check for stale cached copies of the service worker and downloads, tell the owner the URLs to purge, and set no-cache headers at the origin where needed.
6. On any failure, restore the backups, restart, and report.
7. Record a short log of what went live, the backup timestamp and anything left to check.

## Reporting
Lead with the state (staged, live, blocked), then what changed for users, then anything the owner must decide or do.
