---
name: x-about-country-watch
description: "Use this when watching X interactions and classifying About-this-account based-in / Connected via against the owner’s home country — alert on all foreign accounts, optional hide via reply More → Hide reply, after X browser login. Use on purge. Handles surges with API-first discovery, per-run caps, and a persistent backlog."
---

Watch who someone talks to on X. Classify each account from About this account (Account based in and Connected via), then alert — and optionally hide replies — when the account is foreign relative to the owner’s home country.

## Inputs (caller / routine / memory — never hard-code a country)

- Watch handle: X username whose interactions to scan
- Home country: the owner’s own country (the only allowed baseline). Match case-insensitively against About fields, including {Country} App Store and {Country} Android App
- Match mode (default for National Dialogue): foreign — flag when either About field indicates a country/region that is not the home country
- Directions: outbound (accounts they reply to or @), inbound (accounts that reply to / mention them), or both
- Hide-replies mode: off by default. When toggled on, for inbound replies from accounts classified foreign, manually hide those replies in the signed-in browser using the verified UI path below. When off, alerts only — never hide. Confirm toggle from memory each run
- Cadence / delivery: routine owns schedule; alert only on new classifications/actions unless the owner wants a digest
- Per-run caps (defaults; override from memory if the owner set different numbers): About scrape cap 30 unique new handles per run; hide cap 20 hide actions per run when hide-replies is on; brief pause between About opens and between hides

## On-demand trigger: purge

When the owner says purge in chat (or invokes /purge), run this skill now — same steps as a scheduled run, not waiting for the routine:

1. Process the next capped batch from the backlog (or collect new targets if the queue is empty).
2. Alert on new foreign hits.
3. If hide-replies mode is on, hide matching foreign inbound replies up to the hide cap. If hide is off, alerts only — say hide is off in one line so they can toggle it.
4. Do not ask should I run? — purge means run now.
5. If work remains queued, say so plainly and that another purge (or the next scheduled run) continues the backlog.

Scheduled routines keep running on their own cadence; purge is additive.

## Prerequisites (order matters)

1. Sign the owner into X on the agent computer first (browser session) before any About scrape or hide action. If not signed in, stop and complete login.
2. X connector connected (Grok Bot plugin OAuth as the owner — not a separate developer API key). Authenticated account should match the watch handle.
3. Persist checkpoints and a backlog queue under a workspace folder for this watch so runs stay incremental.

## Surge / backlog (required every run)

X never guarantees every reply is visible in one UI pass, and About/hide work is slow. Treat volume as a rolling queue, not a promise to clear a viral thread in one shot.

1. API first, browser second — collect candidate authors via the X connector (mentions, recent posts, conversation/reply pulls with pagination). Do not rely on scrolling a thread UI to discover everyone. Open the browser for About pages and for hide actions (reply permalinks), not for bulk discovery.
2. Newest first — order unread candidates by recency. Prefer hot / high-reply posts when the queue is large.
3. Dedupe by handle — one About scrape per unique author. Many replies from the same account → one classification; hide each new inbound reply URL still in the hide queue (up to hide cap).
4. Hard caps — stop About scrapes at the scrape cap and hides at the hide cap. Persist remaining handles / reply URLs as backlog.
5. Honest reporting — if the run hit a cap or the connector/UI could not surface more replies, tell the owner: processed N, foreign M, hidden K, queued Q remaining. Never claim all replies cleared unless the backlog is empty and no further pages were available.
6. UI / rate pressure — if captcha, login wall, or repeated failures appear, pause the run, keep the backlog, and alert. Do not hammer the session.
7. Next run continues — scheduled runs and purge both drain the same backlog before (or while) pulling brand-new targets.

## Steps each run

1. Confirm browser X session is live. If login wall, stop and re-auth.
2. Resolve the watch user via X connector; confirm identity.
3. Load checkpoint + backlog. Drain backlog first (up to caps), then pull new interaction targets via the connector since last checkpoint. Exclude self. Dedupe against already-scraped handles.
4. Do not treat API location or bio as About proof.
5. For each handle in this run’s batch (up to scrape cap), open https://x.com/{username}/about and read Account based in and Connected via.
6. Classify home vs foreign (any non-home based-in or Connected via signal = foreign). Report concrete country strings.
7. Alert on new foreign accounts. Stay quiet when nothing new and backlog empty if the routine says so (purge always reports a one-line result, including queued remaining).
8. If hide-replies mode is on, hide inbound replies from foreign authors (up to hide cap) using How to hide a reply below. Record reply URLs/ids hidden; queue the rest. Never choose Block on the follow-up dialog unless the owner explicitly asked to block. Never hide when mode is off. If the UI is missing, alert the owner — do not fake success.
9. Persist checkpoint, classifications, hide actions, and updated backlog counts.

## How to hide a reply (verified UI)

Works from the parent post thread or the reply permalink. Hide is on the reply’s menu, not the parent post’s.

1. Open the owner’s post thread (or the specific reply URL).
2. On the third-party reply, click its More button.
3. Click Hide reply. X hides immediately.
4. If an Also block @user? dialog appears with Block / No, click No unless the owner explicitly requested blocking.
5. To undo: open the post’s Hidden replies link, then that reply’s More, then Unhide reply.

## Toggle commands (chat)

- Owner turns hide-replies on or off; save to memory and confirm in one line.
- Changing home country or handle updates memory and routine inputs.
- purge = process the next capped batch now (and hide if on).
- Optional: owner can raise/lower scrape or hide caps in chat; save to memory.

## Notes

- Goal: identify all non-home countries so the owner can control the conversation — over multiple runs when needed.
- You perform hide manually in the browser for them; the connector has no hide/block.
- No developer.x.com or pasted API keys — connector OAuth only.
