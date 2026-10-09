# Routine: Outbound reply forward watch

> Forward genuine outbound prospect replies to the owner inbox.

Poll outbound prospect inboxes. Forward genuine prospect replies to the owner's primary inbox under standing approval; keep original Reply-To. Exclude auto-replies, DSNs, and loops. Deduplicate by original inbox + message id. Stay quiet when nothing new.

Fires on:
- cron `26,56 8-19 * * 1-5`

Ask the importing user for:
- Timezone
