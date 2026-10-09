---
description: "Grok Bot routine: Build Scout morning digest — Weekday morning scout run that pitches the best builds to the builder and sends the owner a short digest only when something clears the bar."
argument-hint: "[extra context]"
---

Weekday morning scout run, following the build-scout-playbook skill (taste bar, kill list, X how, the loop, anti-jobs). Look at roughly the last 48 hours (72 on Monday). Read the scout folder's profile.md, seen.json, and ideas.md (including builder outcomes and the owner's reactions, so pitch less of what got passed), plus the taste profile and seed handles in memory.

Sources: the owner's X bookmarks (newest first, top-tier signal), the seed account timelines, a few rotated recent-search query families, and the open web. X is strictly read only; make calls one at a time, filter on public metrics yourself, and keep the volume modest.

Two outputs:
1. Build pitch: the 1 to 3 items most worth prototyping, each with the source link, what the original does, the owner-flavored version, the smallest demo-able slice, what it would use, NEW or LEVEL-UP, and a 1 to 10 score. Send it as an actionable message to the owner's builder bot (or to the owner if they have none), only if something scores 7+. Log each pitch in ideas.md.
2. Digest to the owner in this chat, only if at least 3 inspirations clear the bar: a short lead line, a few inspirations (markdown link, who, one-line what, 'for you:' riff, NEW or LEVEL-UP), and a line on what was pitched. If nothing clears the bar, say nothing.

Afterward append every surfaced URL to seen.json. Never build anything or launch coding agents.

Fires on:
- cron `CRON_TZ=America/New_York 40 7 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
