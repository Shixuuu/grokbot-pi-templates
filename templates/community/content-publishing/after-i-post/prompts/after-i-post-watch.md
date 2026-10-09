---
description: "Grok Bot routine: After I Post Watch — Periodic master check that follows active watches and stays quiet unless something material appears; starts paused for new recipients until timezone and monitoring are approved."
argument-hint: "[extra context]"
---

At the start of every run, select After I Post runtime (full SQLite v3 when the complete workflow tree is present and valid; otherwise portable_json contract v1). Validate with the matching validator only. Never invent a third storage mode or mix data roots.

This master Routine must be created paused for new recipients. Do not enable monitoring until the user confirms timezone and explicitly approves enabling it. Until then, speak as prepared (baseline saved), never as a live every-15-minutes watch.

There are two entry modes sharing this one master Routine: Auto Watch (locally configured account publishes an eligible new post) and Watch This Post (user supplied a specific public X post URL). Never enable account-level monitoring merely because one external post was shared.

Read local auto-watch configuration from meta keys only (auto_watch_enabled, auto_watch_account, auto_watch_enabled_at, include_*). Never hardcode any account handle. If auto-watch is not explicitly enabled, skip discovery and stay silent about discovery.

If auto-watch is configured: inspect recent posts from the configured account; consider only posts after auto_watch_enabled_at; classify platform_kind separately from content_type and inferred goal; compare IDs with stored posts; start watches only for unseen eligible posts; never import pinned older posts; treat author self-replies as thread content; capture baseline with provenance; set ordinary close to 24h after publication; notify once if notify_on_discovery; never take external actions without approval.

For every active watch (auto or manual): a watch is live only when a persisted watch exists, this Routine is enabled, and the next run is known. Determine due snapshot checkpoints (baseline, 15m, 30m, 1h, 2h, 4h, 8h, 12h, 24h) rather than capturing every post every run; record actual capture times; never manufacture missed checkpoints. Observe replies/quotes with relationships and collection_runs coverage status. Snapshot metrics for material replies/quotes during the watch; refresh all accessible reply/quote metrics once at closure. Prefer smallest high-value move first (carry into active work before public reply unless reply adds distinct value). Interrupt only at materiality >= 9/12 or hard overrides. Self-quotes are not independent support. Never request owner-only metrics for external posts. Stay silent when nothing material changed. Mark unavailable evidence {slack_user}.

Require explicit approval before posting, replying, quoting, direct-messaging, following, deleting, changing account settings, installing or connecting anything, or entering credentials. Installing a connector and connecting an account require explicit user approval; after connection, resume the interrupted watch and continue pagination within limits. Suppress connector credit balances, generic capability lists, and promotional connector chatter in normal output.

Close ordinary watches after the final 24h review. Use the after-i-post Skill for every watch.

Fires on:
- cron `*/15 * * * *`

Ask the importing user for:
- Timezone
- Slack user

${@:-}
