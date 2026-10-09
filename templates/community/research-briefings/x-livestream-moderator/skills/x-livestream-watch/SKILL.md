---
name: x-livestream-watch
description: "Use this when a streamer says they're going live on X (or asks to end a stream) and wants their replies and mentions watched for trouble, spam and bot accounts, live growth tips, a per-stream summary document, and an evidence log for serious incidents."
---

# X livestream watch

Read the X plugin guide skill before any X call, and follow its cost rules (small pages, estimate before anything over about $0.25).

## Limits to be honest about
- You can read and flag. You cannot delete, hide, mute, or block anything on X; the streamer takes every action.
- The chat inside the X live player may not come through the API. Replies to the broadcast post and mentions do. Confirm real coverage on the first watched stream and tell the streamer.
- The X connector does not list who followed; report only the follower-count change from start to end. Subscriber data is not available; add subscribers only if the streamer names them.
- You can't see gameplay. Stream-sniping signals come only from what people post.

## When the streamer says "going live"
1. Record the starting follower count (profile lookup).
2. Find the broadcast post: the streamer's newest post that looks like a live broadcast. If unsure, ask for the link.
3. Check in every few minutes: search recent replies with `conversation_id:<post id>` plus mentions of the streamer's handle since the last check. Keep pages small (10 to 25). Also check replies on the streamer's pre-stream teaser or other recent posts shared during the stream.
4. Judge each new reply against the streamer's rules and red-flag list (saved in memory).
   - Ping right away: slurs, discriminatory or hateful messages in any language (race, ethnicity, sexuality, gender, religion, disability; including misspellings, spacing, number swaps, and coded terms), threats or doxxing (real names, addresses, school, workplace), raids (a burst of new or zero-follower accounts posting the same thing), impersonators, stream-sniping signs (bragging about finding the lobby, calling out the streamer's in-game position, the same accounts turning up in matches across streams).
   - Spam and bots (ping live by default; the streamer can set recap-only): crypto, NFT, trading, and "DM me to invest" pitches; fake giveaways; growth scams ("buy viewers", "promote your stream"); cheat or boosting sellers; fake support accounts; link-only or short-link replies. Treat an account as likely automated when several signs line up: recently created, few or no followers, default or stock profile picture, a handle ending in a long string of numbers, near-identical replies across posts, or replies posted seconds after the stream starts. Say it's likely automated, not certain.
   - Each ping names the post, the account, why it's flagged, and a suggested action (hide reply, mute, block, report as spam or hateful conduct).
5. Evidence log for serious incidents only (doxxing, threats, targeted harassment or discrimination, sniping, repeat offenders): one entry per incident in a private evidence file for that stream, with the post link, account handle and id, the time in the streamer's timezone, the exact text, a screenshot if possible, and why it matters. Record only what a report needs. Never share it without the streamer's say-so.
6. Growth tips during the stream, only when useful: reply momentum, comments worth answering, and other creators posting about the same game to engage with.

## When the stream ends
Stop on "ending stream", or once the live post has gone quiet for a while. Pull reposts and quote posts of the live post, and the ending follower count. Write a summary document for that stream with these sections:
- Stream details (title, date, start and end times, platforms).
- New chatters, each listed with a warm thank-you for stopping by and chatting (leave out flagged spam and bot accounts).
- Followers (count change) and subscribers (only if the streamer provided them).
- Shares and quote posts, and notable comments.
- Flags and actions taken, including a spam and bot tally with the accounts listed, and a pointer to the evidence log if anything was logged.
- Other platforms: data from any connected platform connector, or from analytics or chat exports the streamer pasted.
- Growth notes for next time (title wording, hashtags, timing).
Send the document and a short chat recap.

## Over time
After a few streams, offer to compare live posts (titles, days, times, replies, reposts) so advice rests on the streamer's own numbers. Note spam accounts that return across streams. When a connector for another streaming platform becomes available, offer to add it.
