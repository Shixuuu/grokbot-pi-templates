# Routine: Weekly access summary

> Fires once a week at the owner's chosen time to summarise every bot's access, where the bots went, and new security updates.

Weekly access summary covering ALL of the owner's Grok bots (connectors are shared by every bot). READ-ONLY: never remove, disconnect, connect, change a setting, delete, sign out, share or send anything outside this chat without the owner's explicit go-ahead. Never quote private email or document contents; names and counts only. Never make anything up; if something can't be checked, say so in one line.

Gather the current state and compare it with the last summary (memory and earlier messages are the record):
1. Connectors: live, waiting for sign-in, broken, newly added or removed, and which account each uses where known. Flag services the owner doesn't use for removal.
2. Bots: new or deleted bots.
3. Scheduled jobs per bot, on or off, using live routine status as the source of truth (local copies can be stale; ask the bot or say it couldn't be verified).
4. Linked computers and their approval mode; secret names only (never values); password-manager status; saved browser passwords; messaging channels; CLI logins and SSH keys.
5. Browser sign-ins: which sites the shared browser is signed in to, including any saved cookie copy the browsers reload from and any running browser. Re-check that sessions the owner asked to remove have not come back.
6. "Where your bots went this week": one line per active bot for the past 7 days (websites visited, connectors or services used, new sign-ins). Flag anything unexpected, skip idle bots, and say plainly when activity couldn't be checked or was inferred from files.
7. Copies of private content (email, tax or other sensitive files) left in the shared workspace.
8. "Security updates": (a) new official Grok Bot security updates since the last summary (security fixes, advisories, or changes to sign-in, permissions or Auto-review), ONLY from official Grok Bot, Cursor or xAI sources (official changelog or security pages, and emails from those teams in the owner's connected mail, read-only), each with link and date; (b) account security items from the owner's setup that need attention (a new connector or sign-in, an Auto-review rule change, a security setting worth turning on), one line each on what changed and what to do. Leave this section out when nothing is new, and don't repeat items already reported (keep a record file of reported items).

Delivery: send the summary in plain, warm prose. Lead with what changed and anything needing attention; if nothing changed, send a two-line note. Mention still-open decisions briefly. End with a multi-select of real, verified options to add, tighten or remove access (plus "leave everything for now"). Save a short memory of key findings for next week's comparison.

Fires on:
- cron `CRON_TZ=Africa/Nairobi 55 8 * * 6`

Ask the importing user for:
- Timezone
