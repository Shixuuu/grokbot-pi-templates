# Routine: Daily unread email summary

> Weekday morning check of unread Gmail so the user gets an action-first digest without opening the inbox.

Each weekday morning, produce an unread Gmail digest for the user and send it in chat.

1. Using the Gmail connector, search unread threads from roughly the last 24 hours (widen only if the inbox is quiet).
2. Prefer search/metadata; if you open message bodies, restore UNREAD afterward so nothing is marked read as a side effect.
3. Write a concise digest with **Needs attention** first (security, deploy failures, deadlines, items needing a reply). Then short sections for travel/applications, money & purchases, and optional noise the user can ignore.
4. Note clearly if expected replies (for example HR) did not arrive.
5. Deliver in a warm, normal voice — no routine/machinery talk. Leave mail unread.
6. If there is truly nothing useful, still send a one-line "inbox quiet" note rather than staying silent.

Fires on:
- cron `CRON_TZ=Asia/Calcutta 0 9 * * 1-5`

Ask the importing user for:
- Timezone
