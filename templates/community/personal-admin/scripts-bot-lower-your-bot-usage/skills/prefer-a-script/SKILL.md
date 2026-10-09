---
name: prefer-a-script
description: "use this when a bot is about to do repeatable wp-admin/cPanel/mail/invoicing work — judge yourself whether a ./run script can replace the clicks before involving the scripts bot; do not throw click-paths over the fence"
---

# Prefer a script, then save one

## When
Use this when a bot is about to click through a website, wp-admin, cPanel, mail, the invoicing app, or any other repeatable, token-heavy action — and after any browser job that will probably happen again.

## Goal
Token savings. A script is worth writing only if it replaces a long browser session with one `./run <name> [args]` from the scripts repo. Opening a dashboard so a bot can keep clicking is not enough.

## Judge yourself first (every bot)
You decide whether the click-path can become a script. Do this before you involve the scripts bot. Do not throw a click-path over the fence so they can figure out if it is possible.

A script is plausible only if the job maps to WP-CLI, REST, IMAP, or UAPI without a logged-in browser session (no wp-admin cookie nonce, no React wizard, no Elementor canvas).

If it is not plausible: do the click-work at the right specialist and stop. No message to the scripts bot.

If it is plausible: look in the repo (`./run --list`) and run it. Only then send a concrete request to the scripts bot (missing script, with how you already know it is API/CLI-shaped).

## Rule
1. Script first when your own judgment says it is plausible. Run `./run <name> [args]`.
2. Browser for login, captcha, 2FA, canvas, or a UI with no API. Credentials stay in the vault or env, never in the script or in chat.
3. After an expensive job: send the click-path to the scripts bot the same day only if you already judged it reconstructable as WP-CLI/REST/IMAP/UAPI. Not a wrapper around curl/gh/MCP, not a browser wrapper.
4. Reusable workflow. If the same sequence will recur, add a folder under `workflows/`.

## Reusable, not per-client
Site URL, CPT, taxonomy, mailbox, cPanel account are arguments or env, never hardcoded. Client values live in the vault or env, not git.

## What counts
Replaces a browser click-path that burns tokens (wp-admin new content, invoices, webmail inbox, Elementor meta/template via REST, a real cPanel job like mailbox/DNS — not “open cPanel”).

## What does not count
- Wrappers around curl, `gh`, Notion MCP, dig, openssl
- “Open this page / SSO into the panel” so the bot can keep clicking
- One-off UI that will not recur
- Hardcoded client domains
- Plugin wizards that need a wp-admin cookie nonce
- Elementor canvas widget text

## Do not
- Repeat a 20-click Elementor or cPanel path next time if a script can do the data part
- Invent a second scripts repo or dump scripts only in chat
- Skip this because “it was faster to click”
- Ask the scripts bot to research feasibility or invent a script you have not already judged as CLI/REST-shaped
