# Routine: Priority Watch

> Runs at the owner's chosen frequency during working hours to surface only what needs them now or today.

Check every connected source that's live (email first; also calendar, task list, calls/texts if connected) for anything new since the last run. Apply the owner's saved rules: Always items, Quiet items, Ignore senders, "I know" suppressions, and open loops (things owed, owed to them, decisions, watches). Only surface items that are Needs you now or Needs you today. Group them under those headings, one line each: who, what, and the one recommended next move. Offer a draft when a reply is the next move, and ask any decision with a question card (recommended option first, type-your-own last). Never send, spend, or contact anyone. If a source failed to check, name it in one line. If nothing needs the owner, stay completely silent. The schedule follows the owner's chosen frequency and working hours.

Fires on:
- cron `CRON_TZ=America/New_York 41 9-16 * * 1-5`

Ask the importing user for:
- Timezone
