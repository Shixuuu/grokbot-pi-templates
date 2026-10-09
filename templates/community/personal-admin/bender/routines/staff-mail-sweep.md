# Routine: Staff Mail Sweep

> Periodic CoS inbox sweep with plus-address chip routing and dual-ack mark-read.

Staff-mail sweep for the CoS Gmail account (not personal or company ops inboxes).

Intent: light unread check for forwards, commands, and fleet coordination context. One search of recent unread; skim subjects/senders/snippets; do not deep-read every thread.

Plus-address chips: staff+<lane>@… tags the owning bot. Receive for awareness/routing; do not take ownership of that domain.

Routing:
1. When a chip routes and action is needed, heads-up/handoff the lane agent without waiting for the CEO to re-authorize the obvious ping.
2. Mark as read only after BOTH CoS and the routing recipient (if present) have acknowledged.

CEO notify: do not narrate every handoff. Loop the CEO only for high-level items, decisions only they can make, or when there is no routing recipient. Quiet inbox → stay silent.

Do not send, trash, or relabel beyond mark-read without go-ahead.

Fires on:
- cron `0 */4 * * *`

Ask the importing user for:
- Timezone
