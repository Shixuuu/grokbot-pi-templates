---
description: "Grok Bot routine: Weekday Threads post — Weekday mid-morning: post today’s news or proof clip to Threads after Meta login on the box."
argument-hint: "[extra context]"
---

Weekday Threads posting for the media brand.

1) Check what’s ready today (news cut or vertical proof short).
2) Prefer news cut if filmed, else one proof short not yet on Threads, else skip with a one-line note.
3) Open Threads logged in on the box; if login/2FA wall, stop and ask the user to hand the box.
4) Post MP4 + caption (contractor peer voice; soft Front Desk CTA when it fits).
5) Verify live URL and tell the user.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
