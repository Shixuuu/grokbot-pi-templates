# Routine: Fortnite Drop Brief

> Fires once a day shortly before the owner's chosen brief time to research and send that day's Fortnite Drop Brief.

Research and send today's Fortnite Drop Brief.

SAME-DAY RULE: if a full brief was already sent today (owner's timezone), stay silent unless servers are down or going down, a major patch just shipped, or a shop reset includes a wishlist skin. If a hotfix dropped after today's brief, send a short "Hotfix add-on" with only the new lines.

SCOPE: Battle Royale for the current chapter and season. Patch notes, hotfixes, downtime; weapons, items, movement, builds, heals, vehicles, map, ranked; Item Shop standouts (new, long-return, collabs, Crew); Battle Pass, Mini Pass, Sprites, Overrides when relevant; confirmed events and timed modes; leaks and datamines. Skip Save the World, UEFN/Creative deep-dives, and Rocket Racing unless something huge happened.

SOURCES (check every run): fortnite.com/news, Epic patch notes for the current version, status.epicgames.com, @Fortnite and @FortniteStatus on X; fortnite.gg/shop, fortnite.gg/leaks, fnbr.co/shop; leakers @HYPEX, @ShiinaBR, @SamLeakss, @FNBRLeaks. Search the last 24 hours first, then 48 if the day is empty.

LABELS: [OFFICIAL], [LIKELY], [RUMOR]. If sources disagree, say so in one line.

NORMAL DAILY BRIEF (most days, phone-short):
Fortnite Drop Brief, [Day, Date], [chapter/season + version]
1. Play today if: 3 bullets max, only things that change how they queue.
2. Live now: shop standouts with why they matter (no full dump), modes or events starting or ending in 48h, downtime in the owner's timezone (ET in parentheses).
3. Coming / leaked: name, one line, label.
4. Tomorrow watch: 1 to 3 things.
5. Sources: 4 to 8 real links or accounts.
If nothing happened, say "Quiet day" and still give shop highlights and the next expected update.

PATCH EXPLAINER (when a new version, hotfix, or what's-new notes drop, or servers come back up). Never paste Epic's notes; translate them into what changes when you land.
Fortnite Patch Explainer, [version], [date], [chapter/season]
- TL;DR: 3 to 6 bullets plus one line on who this buffs or nerfs.
- Loot pool: added or unvaulted, vaulted or removed, real changes. Compare to yesterday's pool.
- Guns and items: for each change, name, NERF/BUFF/TWEAK/VAULT/{slack_user}, what changed (numbers when Epic gives them, otherwise "exact number not listed"), and one sentence on how it plays. Skip microscopic changes.
- Also healing, mobility, builds, storm, mythics/bosses/POIs, ranked, and audio/UI/performance only if they affect play.
- How to play this patch: 4 bullets max, plus a dead loadout and a strong loadout.
- Shop and cosmetics in this update, and whether a wishlist item hit.
- Known issues, downtime, and the next expected patch window.
- Sources, official notes first.
Group changes by type; summarize bug fixes as "plus a pile of crash/UI fixes". If notes only say "balance adjustments", say so and mark leaker breakdowns [LIKELY].

ALWAYS: no essays, never invent skins, dates, prices, or damage numbers, never tell them to buy anything, don't repeat a leak unless its status changed. Afterwards, save a one-line memory of what was sent and the current version so tomorrow can avoid repeats.

Fires on:
- cron `CRON_TZ=Europe/Paris 46 13 * * *`

Ask the importing user for:
- Timezone
- Slack user
