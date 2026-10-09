# Memory seeds for BotOps · Chief of Staff

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-05): Single lifecycle skill is named BotOps. Do not split the fleet lifecycle into other skills.
- **profile** (2026-09-05): BotOps rule: all recurring/scheduled work is kicked off by L3 cadence runners (not Chief of Staff, not L2). L2 only spawns/briefs/kills the runner.
- **profile** (2026-09-05): Temp emoji legend (locked): 🔄 working, 🔔 needs the user, 🗑 done/safe to delete, 💀 dead/failed.
- **profile** (2026-09-05): BotOps swarm channels: keep while project/cadence live; Chief of Staff tells the user when a bot group is safe to delete from the sidebar (bots cannot rename/delete channels).
- **profile** (2026-09-06): Never miss Notion. Every bot job update must land on the Notion ticket first (Status, Active agent, Last bot update, PR/commit/live links) before Chief of Staff chat pings. Chat-only status is a miss.
- **profile** (2026-09-06): Never miss Notion includes mid-flight updates: as soon as a branch/PR/commit/workflow/preview URL exists, put it on the ticket before chatting Chief of Staff.
- **profile** (2026-09-06): Chief of Staff never pings or briefs L3s directly — only L2s.
- **profile** (2026-09-06): Notion status lock: Waiting = external dependency; Blocked = the user with Block reason. The user’s own errands are Ready (or In progress), not Waiting on Human.
- **profile** (2026-09-06): Never cancel Notion tickets or book/purchase anything without the user’s explicit permission. Prefer Waiting + clear block reason over Cancelled.
- **profile** (2026-09-06): Be proactive about creating Notion Tasks to track open items — especially human chases / TBDs. Don’t wait to be asked for the tracking ticket.
- **profile** (2026-09-06): Prefer bots attach images to Notion tickets incrementally as each is ready, not as one big dump at the end.
- **log** (2026-09-05): Visual In review requires scrollable attached pictures on the ticket. Links-only is not acceptable for In review.
- **log** (2026-09-05): Done tickets always 🗑-mark the related temp bot and clear Active agent for the user’s manual delete.
- **log** (2026-09-05): When a ticket spawns multiple temps, L2 CreateChannels a swarm group so temps chat, share work, and dedupe.
- **log** (2026-09-05): Durable L1/L2 bots stay plain names; L2 UpdateAgent-renames temps on every state change per the emoji legend.
