# Routine: Daily trial Reels loop

> Every day at 9:00 AM, cut trial Reels, spin overlay variants, and report outliers.

Daily trial-Reels loop, all 7 days, in the owner's local timezone. Weekends included when the owner asked for them.

This bot cuts trial Reels. It is not a harvest/repurpose scaler that posts to a multi-dest map.

Fill-ins the owner names after import:
- Dest: one Instagram account they explicitly add (handle)
- Analytics: Metricool (or the connected analytics API) for that dest; token in a secret field, never chat
- Clipper: Overlap company and a library-only workflow that can convert to vertical; token in a secret field
- Safe vertical workflow id
- Safe horizontal workflow id (library/email only)
- Forbidden live-publish workflow ids (do not trigger)
- Source: the owner's long-form channel; only videos published in the last 14 days, duration ≥ 8 minutes. If none, skip the cut that day. Prefer newest uncut eligible pillar.
- Bar: 2x that day's dest median (metric = views). If today n=0 or last_24h n<3, use last_48h views median.
- Test surface: native Instagram Trial Reels. The owner posts exported mp4s as Trial from the Instagram app (or Instagram Edits). Do not use scheduler drafts as the test — drafts get zero views. Do not auto-publish to the main grid.
- Promote: when a Trial clears 2x dest median, ping the owner to Share to everyone in Instagram. Do not republish an already-live post.
- Variants: 1 cut → 3 overlay-hook variants (same keep-ranges, swap overlay line, re-render). Stagger one variant per day. A 2x winner can remix 2 new hooks.
- Output both true vertical (9:16) and horizontal (16:9). Send actual mobile-sized H.264 mp4 previews in chat, never thumbnail screenshots.

9:16 gate: do not trust API aspectRatio. After a vertical run, call the clipper's render endpoint per clip, download the file, then probe. Vertical files must probe height > width and ~9:16. If a labeled-vertical file probes 16:9, fail that clip (do not send it as vertical). Run the local eval runner after a cut batch; a fail blocks sending.

Keep-ranges: use start/end aliases on the extended transcript clock (0 = pre-roll first word). Visible clip-relative 0 is the wrong phrases. Cuts need longer coherent beats, a scroll-stopping overlay, and captions — not abrupt jumps.

Hard gates:
- Do not invent dests. Do not post to accounts the owner did not add.
- Do not harvest another bot's clip libraries or dest map.
- Do not auto-publish anything that is not 2x that day's dest median.
- Idempotent: do not re-promote a clip already promoted. Do not recut a pillar already cut this 14-day window.
- Do not trigger live-publish workflows. Library/save-only only.

When running:
1. Pull dest Reels last ~24–48h. Compute dest median (views) with the n<3 → last_48h rule. Flag 2x outliers. If one clears, ping the owner to Share to everyone. Do not republish.
2. If an eligible source exists, cut vertical + horizontal via the safe workflows from the newest uncut pillar. For vertical: render per clip, then probe. Produce 3 overlay-hook variants. Send labeled mobile mp4s in chat for the owner to post as Instagram Trial (one today, rest the next two days).
3. Report outliers glance-style only if something clears 2x or a new cut batch landed. Otherwise stay quiet.
4. Write a receipt. After the run, extract at most one lesson if evidence exists. Task progress goes to the receipt, not memory. A run that repeats with no operating-system change is a hamster wheel — change a gate, a source rule, or a workflow pick when the lesson is real.
5. Stop: no 2x, no eligible source, auth dead, dest ambiguous, or vertical batch failed the 9:16 eval. Pause and tell the owner only if auth is dead.

Glance. At most one human decision packet.

Fires on:
- cron `0 9 * * *`

Ask the importing user for:
- Timezone
