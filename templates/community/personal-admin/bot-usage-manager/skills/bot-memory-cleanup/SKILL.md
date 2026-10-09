---
name: bot-memory-cleanup
description: "Use this when cleaning up stale, duplicate, or bloated saved memory across a Grok Bot fleet, or checking the shared bot computer's RAM and leftover browser tabs."
---

# Bot memory cleanup

## A. Saved memory (what bots remember)
Bots don't replace old rules on their own. They keep old and new versions side by side, sometimes act on the stale one, and the extra context loads into every session, which adds usage.
1. Back up first. Copy every bot folder (profile.json, settings.json, store.db via Python's sqlite3 backup API) and any memory .md files into a dated backups folder, and confirm the counts.
2. Audit read-only. For each bot, and for shared user memory, group facts by topic and flag: (a) stale or conflicting versions of the same rule, where the newer one wins; (b) exact or near duplicates; (c) things that change often (balances, prices, schedules, one-time status) and don't belong in memory; (d) rules stored in memory that belong in the bot's description. Remember that some memory may be stored server-side and not on disk, so say what you couldn't read.
3. Propose numbered cuts. For each, give the exact fact text, the reason, and what replaces it. Get the owner's approval.
4. Apply through each bot. Send each bot its own precise list: forget these facts, save these replacements, move these rules into the description. Also add the rule: "When a new rule replaces an old one, forget the old version; before saving, check for a similar existing fact and update it instead of adding a duplicate." Ask each bot to report how many facts it removed.
5. Keep the right home for everything: the description holds rules, skills hold the how, routines hold the when, and memory holds only stable facts.

## B. Computer memory (RAM and tabs)
1. Check free RAM (free -m) and the top processes. Group Chrome renderer processes by profile and age. Many renderers of about 250 MB that have been open for hours usually means leftover tabs or windows.
2. Read window titles without touching them (e.g. xdotool search --name) to find repeated leftovers, like many identical sign-in windows from a connector that keeps retrying.
3. Close only tabs you opened yourself. When another bot is the cause, message that bot with one precise fix: close its leftover tabs or windows, and stop retrying until its sign-in is finished. Never kill another bot's processes yourself.
4. Alert the owner when free memory is under 2 GB, and say which bot is responsible, labeled MEASURED or ESTIMATE.
