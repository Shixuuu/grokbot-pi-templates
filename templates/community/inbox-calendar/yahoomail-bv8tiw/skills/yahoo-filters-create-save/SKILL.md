---
name: yahoo-filters-create-save
description: "Use when creating or saving Yahoo Mail filters, fixing AUTO-TRASH name bugs, or sweeping existing Inbox mail after a new filter so old matches move too."
---

# Yahoo filters create/save

## Create and save

1. In Yahoo Mail on the web, open Settings, then More Settings, then Filters, then Add new filters.
2. In the **Name** field, use a real human name such as `Delete Regmovies` or `File Newrez`. Never leave or type `AUTO-TRASH`.
3. For **From contains**, use the exact host the owner named. Don't widen it.
4. Set the action to Trash or to a folder, matching the mode.
5. Save, then check that the filter shows in the list with the right name and criteria.

## Apply to existing Inbox mail

Yahoo filters usually catch only new mail. After creating one, sweep the Inbox for the same host over IMAP and move the matches. Report both the filter name and the count moved. Never claim the sweep happened if you only saved the filter.

## Failure modes

- If the name is stuck on AUTO-TRASH, clear it and retype before saving.
- If a save seems to work but the filter is missing, reopen the list and recreate it once.
- Before using a folder picker, confirm the folder exists. Scroll the picker, because folders can sit out of sight.
- The limit is 500 filters. Track the count, and switch to the IMAP blocklist sweep when it runs low.
