---
name: close-leftover-box-browser-tabs
description: "Use when closing leftover Chrome tabs after browser work, or when a leftover-tab cleanup routine fires. This bot’s own browser only, never the owner’s computer."
---

# Close leftover box browser tabs

## When
A standing leftover-tab cleanup routine fires, or a bot finishes browser work and should tidy its own desktop.

## Scope
- Close leftover Chrome tabs on this bot’s own virtual computer (box desktop browser) only.
- Never use a registered computer, local execution, or the owner’s physical computer.
- Leave a single New Tab when cleaning.
- If a live run is using this bot’s browser: skip and stay quiet.
- If already clean: stay quiet.
- Ping the owner only if cleanup fails for a reason other than already-clean or skip-mid-run.
- Do not edit files, do not sign out, do not clear cookies or profiles.

## Steps
1. Confirm the target is this bot’s own browser.
2. Check for an in-progress browser task for this bot. If yes: stop, stay quiet.
3. If idle: close extra tabs; leave one New Tab.
4. Stay quiet on success or already-clean. Message the owner only on a real failure.
