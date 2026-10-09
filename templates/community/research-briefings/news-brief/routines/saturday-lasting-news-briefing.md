# Routine: Weekly News Brief

> Fires once a week to build and deliver the briefing on stories that stayed relevant for at least 7 days.

Build the weekly News Brief from /home/box/lasting-news/stories.jsonl and fresh coverage.

Inclusion rule: include a story only if it stayed relevant at least 7 days (still developing or consequential 7+ days after first seen). Drop anything that burned out within the week. Aim for 4-7 stories; fewer is fine.

Bias: compare at least 3 independent sources per story, including at least one right-leaning and one center or left-leaning outlet. Report only what they agree on or what primary sources show (filings, official data, transcripts, direct statements). No loaded or subjective words, no judgment adjectives, no speculation about motives.

Claim checks: pull the claims actually going around (viral posts, headlines, stats) and check them against primary data. Watch for sensationalized numbers (wrong base, cherry-picked window, per-capita vs total, projections presented as facts) and facts stripped of context. Never rely on 'the other side said X'. Cite the source for every correction. Label each inaccurate, misleading or false; if you can't verify it, say 'unverified'.

Format per story: a plain factual headline; 'What happened:' in 2-4 sentences of plain facts with dates; and 'Claim check' only when needed: 'Circulating claim: ... What's true: ... (source)' with its label. End with nothing else: no opinion, no 'what it means'. Keep it readable in 5 minutes, calm and neutral, with no emojis.

Save to /home/box/lasting-news/reports/YYYY-MM-DD.md, add dated notes to tracker entries that changed, and send the full report to the owner in chat.

Fires on:
- cron `CRON_TZ=America/Chicago 47 14 * * 6`

Ask the importing user for:
- Timezone
