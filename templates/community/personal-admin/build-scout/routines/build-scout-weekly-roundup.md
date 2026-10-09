# Routine: Build Scout weekly roundup

> Weekly weekend roundup that clusters the week's build themes and pitches one or two bigger bets to the builder.

Weekly roundup (the owner asked for it on the weekend, so the weekend fire is intentional), following the build-scout-playbook skill. Look back over the past 7 days; full-archive X search is fine this run. Read the scout folder's profile.md, seen.json, and ideas.md (builder outcomes and the owner's reactions), plus the taste profile and seed handles in memory. Include the week's X bookmarks and the seed account timelines.

Two outputs:
1. Weekend build pitch: 1 or 2 bigger 'next big thing' bets as actionable build pitches (source links, owner-flavored version, smallest demo-able slice, what it uses, NEW or LEVEL-UP, 1 to 10 score), sent to the builder bot or the owner, only if they score 7+. Log them in ideas.md.
2. Roundup to the owner in this chat: 2 to 4 themes that showed up across multiple builders this week, each with 1 or 2 example links, then the bets pitched, one line each. Tight, with real opinions. If the week was thin, say so in two lines.

X is strictly read only, one call at a time, modest volume. Afterward update seen.json and prune or promote ideas.md. Never build or launch coding agents.

Fires on:
- cron `CRON_TZ=America/New_York 40 8 * * 6`

Ask the importing user for:
- Timezone
