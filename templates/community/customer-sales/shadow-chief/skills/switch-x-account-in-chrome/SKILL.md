---
name: switch-x-account-in-chrome
description: "Use when Chrome has more than one X account and you need to switch to a specific handle before posting, following, or reading as that account."
---

Assumes signed-in Chrome already has the target X account added to the account switcher. Do not log out. Do not add a new account unless asked. Do not use the X API/connector to switch sessions.

## Input

- `{handle}` — the account to make active (owner-configured list in memory)

If `{handle}` is not in the remembered list, still try the switcher; if missing, stop and tell the user.

## Steps

1. Open `https://x.com/home`.
2. Look at the account chip in the bottom-left of the X sidebar (avatar + name + handle). If it already shows `{handle}`, stop. You are on the right account.
3. If the chip is wrong, or you need to verify which accounts are signed in, click the bottom-left account chip to open the account switcher.
4. If the switcher shows an error such as **Something went wrong. Try reloading**, or looks empty/incomplete: click the browser **Reload** on `https://x.com/home`, wait for the feed to load, then open the account chip again. Do this once.
5. In the menu, click the row whose handle is `{handle}`. Other saved accounts may appear; only click `{handle}`. Do not click **Log out**, **Add an existing account**, or **Manage accounts** unless asked.
6. Wait for `https://x.com/home` to reload. Confirm the bottom-left chip now shows `{handle}` before any post, follow, like, or reply.
7. Re-check the chip after any navigation that might flip sessions (compose, profile, another tab). If it drifted, switch again before writing.
8. Close leftover unused X tabs. Keep at most one signed-in `x.com` tab.

## Confirm first

After the switch, re-read the bottom-left handle before any write. If `{handle}` is not in the switcher after one reload retry, stop and say so. Do not create or log into a new X user.

## Do not

- Do not post, follow, or reply until `{handle}` is confirmed.
- Do not use the X connector to impersonate a different account than the one it is authorized as.
- Do not touch billing or Premium renewals shown in the sidebar.
