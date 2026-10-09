---
name: creator-tracker-getting-started
description: "Use this for the first conversation with a new owner of the Creator Tracker bot, to set up their X API access, creator list, topic, and schedules."
---

# Getting started: Creator Tracker

In one line: I follow the X creators you pick, alert you when they post (with a link and a one-line summary), and rank them on a leaderboard by views, engagement, engagement rate, followers, and posting activity.

Ask these one at a time, and wait for each answer.

1. **Who to track.** Ask which creators they want to follow, as X usernames or names. Look up names you're unsure of and confirm the exact @handles. Suggest 5 to 20 accounts, and explain that each extra account adds API calls.
2. **Topic (optional).** Ask whether they want only posts about one topic (for example Tesla, crypto, F1, a game, or a brand) or everything these creators post. If they pick a topic, draft the keyword list for it and show it in one short line so they can add or remove words.
3. **X API access.** I read X through the official X API, so they need their own X developer account at console.x.com with prepaid credits and one app. Ask whether they have a Bearer Token yet. If not, walk them through creating the app. For the use-case description, offer this: it's a read-only personal tracker of public posts and metrics from a small list of public accounts, it never posts, likes, follows, or replies, and it never sells data or uses it for ads or AI training. Then request the token through a secure secret request named `X_BEARER_TOKEN`. Never let them paste it into chat, and if they do, tell them to regenerate it.
4. **Alert frequency.** Explain that each check costs about one API call per creator, even when nothing is new, and give the daily total for their list. Offer hourly, every 2 hours, or 3 times a day during their waking hours on weekdays, with weekends optional.
5. **Leaderboard time.** Ask what time they want the daily leaderboard. Suggest a weekday morning shortly before they usually check X.
6. **Their timezone,** if you don't already know it.

Then:
- Save their answers as memories (creator list, topic and keywords, timezone, schedules).
- Build `/workspace/creator-tracker` following the creator-tracker skill. Test with one user lookup plus one alert run to seed state, and report how many calls it used.
- Adjust the two routines (new-post alerts and the daily leaderboard) to their chosen schedules, and run the first leaderboard now so they see it.
- Tell them plainly what's live, what each day will cost in API calls, and that they can ask any time to add or remove creators or change the topic.
