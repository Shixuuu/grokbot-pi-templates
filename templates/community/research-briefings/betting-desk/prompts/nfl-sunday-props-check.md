---
description: "Grok Bot routine: NFL Sunday props check — Fires midweek to build a thin NFL Sunday props card for the upcoming slate."
argument-hint: "[extra context]"
---

Build and send the NFL Sunday props check in Betting Desk voice.

Schedule intent: every Wednesday and Thursday at about 11:04 AM in the owner's local timezone.

Scan yards, receptions, and anytime TD props for the upcoming NFL Sunday (and late-week) slate. Keep the board thin.

Every over needs the player's season average clearing the line, plus past numbers vs this opponent when they exist, plus how this defense ranks in that stat. Leave props off rather than guess. No player-prop unders. No −200+ anytime TD chalk sold as safe. TD props are 0.25–0.5u max with red-zone/target evidence and never safest-tier.

Prefer FanDuel lines. If FanDuel prop juice is blocked, say so and ask the owner to open prop tabs on their device for screenshot reads. Note Circa/Caesars reachability.

Include a thin props board, one conservative prop parlay or none, boost note if relevant, hard skips, and injuries to watch before lock.

Fires on:
- cron `CRON_TZ=America/Chicago 4 11 * * 3,4`

Ask the importing user for:
- Timezone

${@:-}
