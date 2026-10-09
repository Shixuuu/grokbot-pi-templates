---
name: puppet-signed-in-chrome-cdp
description: "Use this when you must drive the user's signed-in desktop Chrome with Playwright CDP instead of asking them to click."
---

# Puppet signed-in Chrome via Playwright CDP

Use this when a teammate must drive the user's already-signed-in Google Chrome on their computer without asking them to click, type passwords, or complete onboarding.

## Do not
- Launch a fresh unsigned Chromium (it will hit a login wall)
- Ask the user to click Continue / FirstRun / sign in again
- Check out or yarn-dev in a dirty main product repo if a worktree exists
- Commit Playwright into an app repo
- Print cookies, tokens, or passwords

## Layout
Keep the helper outside the product git repo (for example a Documents helper folder). Chrome CDP typically listens on `http://127.0.0.1:9222`. Chrome must be started with `--remote-debugging-port=9222 --remote-allow-origins=*`.

## Ensure CDP is up
1. Check that something is listening on TCP 9222.
2. If nothing is listening, quit Google Chrome, then start the Chrome binary (not a plain app-launcher that drops flags) with remote debugging and restore-last-session.
3. Confirm the CDP `/json/version` endpoint returns a `webSocketDebuggerUrl`.

## Attach
From the helper directory, run the attach script that uses Playwright `chromium.connectOverCDP` to the local CDP endpoint, finds or opens the target URL on the existing Chrome, and drives that page (click, fill, evaluate, screenshot). HttpOnly session cookies stay in Chrome; do not copy them out.

## FirstRun / onboarding gates
If a product hides UI behind localStorage, set it on the attached page and reload. Do not wait for a human Continue.

## Proof
Screenshot each surface to a dated folder under the helper dir. Report pass/fail with those files. Never merge from this path.
