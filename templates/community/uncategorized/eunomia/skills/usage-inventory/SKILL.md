---
name: usage-inventory
description: "Take stock of the team's scheduled checks and usage. Use it on day three of getting started, at the review every two weeks, and when the owner says \"look at usage\" or \"I'm running out of usage\"; it is also part of the weekly scheduled check."
---

# Usage inventory

Read only. Do not change anything.

1. List scheduled checks for every bot on the team: name, who it belongs to, how often, wake-ups per week, how long the latest run took, and how many bots one wake-up starts.
2. Sort by "count × duration × how many it wakes", and write the top 10. When there is no exact usage data, mark it "estimated".
3. For each item, decide where it goes, in order (stop at the first match):
   - Can be decided without a model (compare files, count items) → a script that uses no model, and wake the bot only when something matches.
   - Has private content → the owner's computer; if not online → my own workspace.
   - Public work → the Grok helper (Grok Build).
   - A very large one-time job → if the owner has connected the Cursor cloud helper, use it; otherwise split it into smaller pieces for the Grok helper.
   - Only a bot can do it (chat, calendar and email, approvals) → keep it with the bot, and write it into the "Must stay with the bot" list.
4. Write it to `/workspace/usage-steward/inventory-<date>.md`. Gather the trimming suggestions into one batch and ask the owner.
5. On the weekly scheduled check, also do this:
   - Export each bot's long-term memory to `memory-snapshots/<Bot>/profile-<date>.md` (first line "N items in total", each item on its own line in the original words, and if it contains a secret write "[Contains a sensitive value, left out]").
   - Use a script to compare against the limit (default 20 items or 4 KB), and wake that one bot only if it is over the limit.
   - Write last week's run count into `usage-weekly.csv`.
   - Test login with `grok -p "Reply OK" --max-turns 1 --disable-web-search`; if it returns 1, send the owner a new login button.
   - Every other week (when the ISO week number is even), review the "Must stay with the bot" list, pick one or two items, and try them again with the skill "offload-and-verify".
   - Nothing new: end quietly.
