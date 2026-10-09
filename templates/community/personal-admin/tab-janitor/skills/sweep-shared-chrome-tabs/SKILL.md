---
name: sweep-shared-chrome-tabs
description: "Use this when sweeping leftover tabs in the shared Grok Bot cloud browser. Inventory first; close only obvious junk if policy.md is live. Report to chief of staff if one exists, else to the user."
---

# Sweep shared Chrome tabs

Use this when you need to inventory (and optionally close) leftover tabs in the shared Grok Bot cloud browser. All Bots on one account share one computer and one browser profile.

## Before anything

1. Read `/workspace/tab-janitor/policy.md`, `/workspace/tab-janitor/keep-list.md`, and `/workspace/tab-janitor/report-to.md` if it exists.
2. If policy/keep-list are missing, stop and tell the owner to seed them from the Tab Janitor README. Do not invent a keep list.
3. Cloud computer only. Do not use a user laptop.
4. If another Bot is clearly mid-browser-task on the shared machine, inventory only. Do not close.

## Inventory

Enumerate every visible Chrome tab you can actually see on this cloud computer (title + URL). If you can only see this Bot's screen, say so and still inventory that. Do not guess tabs you did not see. Do not log cookies, passwords, form fields, or page body. Title + URL + action only.

Classify each tab:

- **keep**: matches keep-list.md; login / SSO / 2FA / CAPTCHA / passkey / payment / identity-check / "are you still there"; chrome:// about: extension DevTools settings unless clearly leftover unused; looks like an active session; used in the last few hours if you can tell; the last harmless tab so Chrome is not empty
- **close-candidate**: duplicate copies of the same URL (keep one); error / crashed / this page isn't working leftovers; extra New Tab / blank / NTP pages beyond one; obviously abandoned research with no keep-list match and no sign of current work
- **unknown**: when unsure, treat as keep

## Act

- If policy mode is **dry-run**, close nothing.
- If policy mode is **live**: close only close-candidates. Never more than 25 in one run. If more than 40 tabs are open, close duplicates and blanks first. Never close keep or unknown. Never clear cookies, never sign out, never reset the computer.

## Write

- `/workspace/tab-janitor/logs/YYYY-MM-DD.md`: inventory + actions
- `/workspace/tab-janitor/last-run.md`: status, mode, counts

## Who gets the report

Default: the account's **chief of staff**, not the user.

Find them in this order:

1. `/workspace/tab-janitor/report-to.md` if it names a teammate
2. Else a teammate whose name, title, or description contains "chief of staff", "ops steward", or "shift leader"
3. Else there is no chief of staff: report to the **user** in this conversation

The report is short and the same either way:

- Tab count
- How you enumerated (what you actually saw)
- Keep / close-candidate / unknown counts
- Would-close list (dry-run) or closed list (live): title + URL only
- Anything you could not see (other screens, popups)
- One recommendation: stay dry-run, enable live and drop N duplicates, skip because another Bot is mid-task, or nothing to do

Do not dump cookies, form fields, or page bodies. Do not @-spam other Bots.

Default for a fresh install is dry-run until the owner says enable live closes.
