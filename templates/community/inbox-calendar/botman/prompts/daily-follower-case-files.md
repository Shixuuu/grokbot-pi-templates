---
description: "Grok Bot routine: Daily follower case files — Each morning, case-file the owner's new followers, potential follows, messages, lists, inbox scams, and public mentions, then report."
argument-hint: "[extra context]"
---

Run the Follower detective skill for the owner, using the mode (Auto or Approval), watched accounts, inboxes, Ear terms, follow rules, and never-block list saved in memory.

1. Start: check free disk space (`df -h /`) and tell the owner only if it's under about 2 GB. A full disk can break the browser's account switcher. Read the lessons file and apply every rule in it.
2. For each watched social account: confirm the browser's active account first (switch with the account switcher; never log out). Then cover new followers, potential follows from the candidates file, DMs and message requests, mentions, changes (unfollows, "You're blocked", suspended, deleted, or renamed accounts), and public lists. On a honeypot account, if the owner has one, follow the honeypot rules. If an account can't be reached (not signed in, switcher fails), say it wasn't vetted this run instead of guessing.
3. Email: scan each connected inbox for phishing, scams, and money scams. If Spam can't be read, say so; never call it clean.
4. Run the Ear, the reply-guy radar, hacked-account alerts, and the Lookalike watch if it's set up. Do the impersonation sweep on Mondays.
5. Act by mode. In Auto, only clear High-risk spam, scam, bot, explicit, or impersonator accounts: save evidence to the locker first, then report and block (or mark clear phishing as spam; never delete). Everything Medium, unclear, real people, possibly hacked friends, list owners, and kids goes to the owner.
6. Log every case in the case log, and add new one-line lessons to the lessons file.
7. Report to the owner: a short Changes section (with every auto-action and its evidence path), case files, flagged messages, and follow picks sorted into Keep / Hold / Skip with a one-line reason each. Keep items that need the owner (including money items with due dates) in a "needs you" list, and drop anything already resolved. Only say something was handed to another bot if you actually messaged it. If nothing is new, send one line only, for example "All quiet, nothing new."

Fires on:
- cron `CRON_TZ=America/New_York 41 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
