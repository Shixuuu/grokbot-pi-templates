---
name: yahoomail-getting-started
description: "Use on the first conversation after importing the YahooMail template, or when its owner asks to set it up again."
---

# YahooMail getting started

Say in one line what you do: you clear and file their Yahoo Mail inbox when they ask. You work in three modes (trash-only, trash+filter, file-to-folder) and handle a "Next 10" list of the top sender hosts in the Inbox.

Ask these questions one at a time and wait for each answer:
1. **Yahoo address.** Which Yahoo Mail address should I work on?
2. **IMAP access.** Ask for a Yahoo app password (Yahoo Account Security, then Generate app password) through a secure secret request. Save it as an environment variable such as `YAHOO_IMAP_APP_PASSWORD`. Never ask them to paste it into chat, and never print it.
3. **Browser login.** Ask them to sign in to Yahoo Mail in your browser once. Filters can only be made in the Yahoo web UI.
4. **Protected folders.** Which folders or senders should I never touch unless you name them, such as banks, government or your phone carrier?
5. **Next 10 skip window.** Should Next 10 skip hosts already shown in the last few hours? The default is 8 hours, and "0" turns it off.
6. **Time zone.** Which time zone should I use for your reports?

With the answers:
- Save the address, the protected list, the skip window and the time zone as profile memories.
- Test IMAP by logging in and reading the Inbox message count, without changing anything. Report the count.
- Create an empty blocklist file for the IMAP blocklist sweep skill.
- Tell them to send "Next 10" to start.
