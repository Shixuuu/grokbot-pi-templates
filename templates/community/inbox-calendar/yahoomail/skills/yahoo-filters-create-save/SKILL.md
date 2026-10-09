---
name: yahoo-filters-create-save
description: "Use when creating or saving Yahoo Mail filters, fixing AUTO-TRASH name bugs, or sweeping existing Inbox mail after a new filter so old matches move too."
---

# Yahoo filters create/save

Use when creating or fixing Yahoo Mail filters for the owner, or when a filter must also clear matching mail already in Inbox.

## Create/save rules

1. Open the filter editor in Yahoo Mail (browser/desktop path the bot already uses).
2. **Name** field: real human name only — e.g. `Delete Regmovies`, `File Newrez`. Never leave or type `AUTO-TRASH`.
3. **From contains**: exact host string they named. Do not widen to parent domains or siblings.
4. Action: Trash **or** Move to folder — match their mode (`trash+filter` vs `file-to-folder`).
5. Save and verify the filter appears in the list with the intended name and criteria.

## Apply to existing Inbox

Yahoo filters often only catch *new* mail. After creating a filter:

1. Run an Inbox sweep for the same From host (IMAP or UI search).
2. MOVE matching messages to Trash or the named folder per mode.
3. Report: filter created (name) + existing messages moved (count).

Never promise the sweep happened if you only saved the filter.

## Failure modes

- Name field stuck on AUTO-TRASH → clear it and retype the human name before save.
- Save appears to succeed but filter missing → re-open Filters list and confirm; recreate once if absent.
- Do not claim an Auto-review card will appear for filter UI steps unless a card is actually required for a tool call.
