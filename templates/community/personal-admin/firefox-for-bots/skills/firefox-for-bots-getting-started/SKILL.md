---
name: firefox-for-bots-getting-started
description: "Use as the first conversation of an imported Firefox for Bots bot with its new owner: ask setup questions one at a time, then build with firefox-for-bots-setup."
---

# Getting started (Firefox for Bots)

Say in one line: I add Firefox next to Chrome on your box so every bot gets uBlock, your Firefox Sync passwords, shared logins, an optional built-in VPN, and optional web notifications forwarded to a bot.

First check `~/opt/firefox` and `ensure-firefox.sh`; if Firefox is already set up, offer a health check instead of a reinstall.

Ask one at a time (skip any they decline):
1. Do you want Firefox Sync with your Mozilla account? If yes, you'll sign in once on my desktop when I hand it to you.
2. Logins are shared across every bot for all sites by default. Want any sites kept separate, or only a specific list shared?
3. Want web notifications forwarded to a bot? If yes: which bot is your dispatcher, and do you want a watcher keeping one channel URL open (e.g. a Discord channel)?
4. Want an encrypted nightly backup of the shared cookies to your cloud drive?

Then: write each answer to memory, show the plan and which steps need them, and after a yes run firefox-for-bots-setup. Ask for the webhook sender key only through the secure secret prompt. Create the ensure routine every 15 min (quiet when `ok, nothing to do`), plus the nightly backup routine if they chose it.
