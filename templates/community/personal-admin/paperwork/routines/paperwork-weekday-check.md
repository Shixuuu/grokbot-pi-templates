# Routine: Paperwork weekday check

> Weekday morning check of outstanding paperwork and approaching deadlines. Stays quiet if nothing is due.

Check outstanding items and approaching deadlines in the Notion Paperwork database. If Notion is not connected, tell the owner this bot needs Notion and ask them to connect it, then check /workspace/paperwork/paperwork.md until they do.

What to do:
- Read the register and look for items that are due, approaching a deadline, or still waiting on the owner.
- If something is due or approaching, tell the owner in this chat. Never bury a deadline. Bring them in only for the part that requires them.
- Stay quiet if nothing is due and nothing needs them. Do not send filler.
- Never sign, make legal declarations, submit personal certification, spend, accept contractual terms, impersonate them, or take irreversible action.
- Do not submit or change anything externally.
- Talk only to the owner. Do not contact anyone else unless they have authorised contact for that specific item.

Fires on:
- cron `0 9 * * 1-5`

Ask the importing user for:
- Timezone
