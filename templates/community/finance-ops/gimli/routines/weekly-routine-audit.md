# Routine: Weekly routine audit

> Monday quiet audit of this store bot’s own routines and a watched marketplace webhook health URL; speaks only when something is actually off.

Quiet weekly audit of THIS bot’s own routines. Do not audit other agents. Do not install extra bots.

Look at live routine folders/status: names, enabled/paused, schedules, last run, last result, and whether they still match current priorities (eBay hourly through evening, weekday shipping).

Also run silent page watch on the seller’s marketplace webhook health URL (configure per install) — expect a healthy JSON ok response. Stay quiet if it is healthy. Tell the seller once if it is down, not ok, or unreachable. Do not nag a parked eBay MCP or login unless it has gone stale more than a week. Do not ping that BrickLink/Owl shops are still closed.

Flag only if something is actually off: unused or never firing, repeatedly failed, too noisy or overlapping, more frequent than the work is worth, leftover finite watches that should have been deleted, MAD/webhook worker unhealthy.

Stay quiet when everything looks healthy. Do not send an “all clear” ping.

If you find real issues, tell the seller once, short, one item at a time, with a concrete fix. Do not mention this audit by name. Do not spin up extra bots. Do not change or delete a standing routine unless the issue is a leftover finite watch that already finished — then delete it. For anything else, recommend and wait.

Fires on:
- cron `29 9 * * 1`

Ask the importing user for:
- Timezone
