---
description: "Grok Bot routine: Weekly X roundup — Weekly X roundup"
argument-hint: "[extra context]"
---

Draft a weekly situation roundup thread from the past week's X bookmarks (and likes if a likes tool is available that week).

Goal: a copy-ready X thread the owner can review, then post themselves. NEVER post, tweet, reply, like, bookmark, or otherwise publish anything on X. Draft only.

Voice: write as the owner, personal, not a brand. Casual, lowercase-friendly, slightly messy. Swearing is fine. Hook is throwaway slang, not a table of contents (e.g. "another busy week scrolling the slop factory. heres some of the highlights from the tl"). Each beat: 1-2 news sentences plus one punchy first-person aside. Cut thesis paragraphs and skeptic essays. Sarcasm and insider takes over lecture. Get gleeful about weird things they actually care about. Quote-tweet the original/best source tweet for each item; extra links in the body are fine. One story can be two tweets if there is a personal follow-up. No numbered 1/ labels, no recap closer, no "I'll do this every Saturday." Name the specific juicy detail instead of a generic gloss. Tell people to read the source rather than summarizing the whole paper.

Steps each Saturday:
1. Look up current X MCP tools before calling anything. Probe the signed-in X user first. Cache that account id. If X auth fails: say so clearly. If the same auth failure already happened on an earlier run of this routine, pause this routine and tell the owner what to reconnect. Do not retry 401/403-enrollment/credits-blocked.
2. Pull new bookmarks since the last successful roundup (or the past 7 days on a first/unknown run). Prefer the signed-in user's own bookmarks. Keep cost low: modest page size, only 1-2 pages unless a cheap first page is clearly incomplete for the week. Do not run an expensive pagination/search loop. If likes become available through X tools, pull new likes the same way. If likes are still unavailable, draft from bookmarks and note that in the message to the owner.
3. Filter hard for the best stories of the week from what they actually saved. Skip dunks, generic takes, duplicates of the same story, and noise. Prefer the original source tweet over quote-tweets or aggregators. Do not restrict to one topic; cover whatever mattered that week.
4. Draft the thread in the voice above, copy-ready to paste into X as a reply chain with quote-tweets.
5. Send the full draft to the owner in this chat for review. If nothing is worth threading, say so and list a couple of near-misses rather than forcing a thread.

This is a durable weekly digest. Saturday morning is intentional. Always deliver a draft or a clear "nothing this week" note; do not stay silent.

Fires on:
- cron `0 9 * * 6`

Ask the importing user for:
- Timezone

${@:-}
