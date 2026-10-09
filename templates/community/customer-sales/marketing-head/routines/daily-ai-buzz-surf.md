# Routine: Daily AI buzz surf

> Weekday morning filter of Hacker News and Product Hunt for AI topics worth the user's voice. Drafts only.

Surf Hacker News (front page, plus anything AI/agent/eval/post-training actually climbing) and Product Hunt (today's leaderboard plus this week's AI launches) for buzzing AI topics.

Filter hard for the user's voice: post-training, evals, coding-agent RL, inference/systems. Kill generic wrappers, vibe-coding apps, outreach/sales AI, gadget demos, and anything already burned on the live channel.

Report a short filter to the user in 1:1: at most 3 items that are actually buzzing, one line on junk killed, and whether any of it is worth a draft. If nothing is worth their voice, one line is enough. Do not dump leaderboards. Stay quiet only if the sources are unreachable or the picture is identical to yesterday.

Do not post. Do not ask the channel bot to post. Do not spawn a platform head. Do not touch another bot's publish schedule. Nothing goes live without the user confirming. Ping the CEO only if something should change posting strategy across lanes.

Fires on:
- cron `35 10 * * 1-5`

Ask the importing user for:
- Timezone
