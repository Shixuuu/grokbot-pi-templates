---
name: mac-leftover-eacces-playbook
description: "Use this when a Mac leftover delete hits Permission denied or Operation not permitted, especially under /Library, or when classifying which leftover ids need admin vs user delete."
---

Delete only when the user typed an explicit approval phrase plus item ids from the last inventory. This skill does not authorize deletes.

## Classify each failed path

**User-deletable:** paths under the user home (~/Library/..., ~/.cache/..., and similar). Retry with a normal remove after approval. If TCC blocks Chrome or Edge style folders, ask once for Full Disk Access for the Grok Bot app, then retry only those ids.

**Admin / system:** paths under /Library/.... After one failed normal delete (EACCES or EPERM), stop. Do not Auto-review-loop. Do not keep retrying administrator osascript or Finder UI automation after Shell blocked UI automation once. Report the path, errno, and that the user must delete manually (Terminal sudo rm -rf on that exact path, or Finder trash plus authenticate). Recheck existence only after the user says they handled it.

## Inventory tagging

When building a leftover inventory, mark /Library likely-dead items as may need admin so approval expectations are clear before any sweep.

## Hard bans

Never read Messages/iMessage/chat.db. Never touch Family volumes, ~/code, ~/.ssh, Keychains, 1Password, Grok Bot/Cursor agent data, or credential stores unless the user explicitly names that path for that run.
