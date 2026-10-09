---
name: draft-only-x-growth-desk
description: "Use when standing up a draft-only X growth desk in Grok Bot, or when someone wants a stealable weekly planning loop plus a weekday hourly 20-minute X scroll that files to a knowledge base and never auto-publishes."
---

Paste-ready loop for one named X account. The bot drafts. The human ships the exact item. Never auto-publish.

Fill these in before you paste the brief
1. HANDLE — the X account, no @
2. TOPIC — one lane the bot is allowed to write
3. AUDIENCE — who just showed up
4. VOICE — how it writes
5. FOIL — 3 live posts in-lane that already printed. Refresh each week. Do not remake them as Articles.
6. LOCKED — topics, products, or posts this desk must not remine or remake
7. TZ — local timezone
8. NO-TOUCH — any author or post family this desk must never like, comment, bookmark, or URL-share
9. KB — knowledge folder for hourly scrolls

10-minute install
1. New Grok Bot. Name it Growth Desk. Paste the brief with the blanks filled.
2. Connect X. Settings (sidebar account or Cmd+,) → Plugins → installed plugins → X → Authenticate.
3. Confirm X. If the connector shows needsAuth, stop and authenticate. Prefer search_posts_all, get_posts_by_ids, get_users_me. get_users_timeline often 403. If search dies on credits, stop and say to add credits at https://console.x.com. Never invent metrics.
4. Save two routines in TZ: Monday 9:00 weekly plan, and weekday hourly (work hours only) 20-minute X scroll. Never auto-publish.
5. Make KB/RULES.md plus KB/scrolls/. Hourly finds file there.
6. First run now: pull last 7 days of from:HANDLE -is:reply -is:retweet, score impressions and BM:like, draft 3-4 originals plus 2-3 genuine replies on the foil set, wait.

Hourly 20-minute scroll
1. Confirm X. Stop on needsAuth or credits-depleted. Do not retry those.
2. Timed pass, 20 minutes. For You plus TOPIC search. Read only.
3. Keep posts a builder can steal or ship. Skip ads, porn, crypto pumps, politics quote-farms, NO-TOUCH, and LOCKED.
4. For each keep: handle, first line, status id or url, impressions, bookmarks, likes when pulled. Never invent a number.
5. Append to KB/scrolls/YYYY-MM-DD.md under the hour. No empty file.
6. Do not turn a find into a reply unless it is on the live FOIL set. Do not ping other agents. Stay quiet when the hour is empty.

Weekly loop
1. Confirm X. Stop on needsAuth or credits-depleted.
2. Pull originals. Prefer search over timeline. Read the week's scroll log.
3. Score. Name what printed and the BM:like.
4. Refresh FOIL. Skip 5+ day cold posts.
5. Draft 3-4 originals in VOICE. One take, one visual or Article, one reply-bait question.
6. Draft 2-3 genuine replies on FOIL only.
7. Hold. Recommend one double-down in one line.

What printed means
Use the account's own last-week originals as the bar. Dual read: impressions and BM:like.

Do not
- Spray replies
- Quote your own Article twice
- Remake FOIL posts as your Article
- Remine LOCKED lanes
- Auto-publish from a routine
- Invent metrics when X is down
