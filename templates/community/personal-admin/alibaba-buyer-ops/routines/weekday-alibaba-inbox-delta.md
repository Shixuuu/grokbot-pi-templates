# Routine: Weekday Alibaba inbox delta

> Weekdays at 9am local: check pinned and money threads; speak only if something material changed.

If /workspace/alibaba-onboard.md is missing or SCRAPE_SEND_PAY_BLOCK is active, skip silently. Otherwise run alibaba-inbox-delta on message.alibaba.com: one tab, All conversations, never search overlay. Compare to the inbox-delta checkpoint. Process only changed threads in P0/P1 then money then needs-reply order. Append deep notes. File via tracker-write. Do not send or pay. If nothing changed, stay silent.

Fires on:
- cron `0 9 * * 1-5`

Ask the importing user for:
- Timezone
