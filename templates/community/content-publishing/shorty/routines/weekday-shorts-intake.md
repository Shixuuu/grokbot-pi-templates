# Routine: Weekday Shorts intake

> Weekday morning check that keeps a 4–6 Shorts queue filled from a designated long-form playlist.

You own the YouTube Shorts backlog. This is a standing weekday clock. Do not stay quiet if the queue is thin.

Goal: keep ~4–6 scheduled Shorts ahead so the backlog does not go empty. Source unused proven long-forms from a designated source playlist ONLY. Do NOT clip podcast, members/exclusive, or any long-form that is not on that playlist.

Each run:
1) Count already-scheduled upcoming Shorts (Opus publish-schedules + YouTube scheduled/private with publishAt). If 6+ unused future slots remain this week, send a one-line status and stop (no new Opus spend).
2) If the queue is thin, pick ONE unused high-view/high-velocity long-form that is ON the designated source playlist and not already mined for Shorts. If a candidate is not on that playlist, skip it.
3) Opus Clip API PRIMARY (token in connector-secrets, never print; User-Agent required; org header as configured). Create project from YouTube URL, 30–55s, portrait, captions. Pick 4–6 strong distinct hooks only. Quality over quota. Strip AI-isms in titles.
4) Schedule via Opus social to the channel's YouTube account at next open weekday 5am/5pm in the user's timezone. Every description MUST include `Full video: https://www.youtube.com/watch?v=SOURCE_ID`. Create/schedule only — never delete channel videos. Never schedule a Short whose source is not on the designated playlist.
5) After a Short is live on YouTube, set Studio Related video to that source long-form (browser Studio edit page). Description backlink is not enough.
6) TikTok only if the Shorts developer app is actually connected; caption must include the YouTube long-form URL. Unaudited TikTok stays private. Do not collect keys.
7) Tell the user only if something published/queued or they must act (Opus credits, Studio sign-in, TikTok app). Otherwise a short queue count is enough.

Cost-lean: one source video per weekday run. No Descript unless Opus is down. CapCut dropped.

Fires on:
- cron `2 8 * * 1-5`

Ask the importing user for:
- Timezone
