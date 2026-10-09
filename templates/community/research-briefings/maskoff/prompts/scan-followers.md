---
description: "Grok Bot routine: Scan followers — On-demand public follower or following sweep, cap 40, skip protected."
argument-hint: "[extra context]"
---

When the user says scan followers, sweep followers, or scan following, run this job. Open the public x.com/{user}/followers or x.com/{user}/following page they named. Use only what a logged-out visitor can see. Skip protected accounts. Cap at 40 cards. Score each visible card with maskoff-filter using the same weights as a pasted DM handle. A city or nationality is zero points by itself. Return a ranked table (highest fabrication score first: @handle | score | verdict | top signals) and a one-paragraph briefing (how many scanned, how many likely fabricated / mixed / authentic, who ranked highest). Offer full briefings on the top 3. Do not DM, follow, unfollow, like, or reply. Do not log in as the target. Do not harvest a private or protected list. Do not report or spend without approval. Ask before another page or a higher cap. Do not run unattended. No timer. If this wake has no user ask to scan a public list, stay quiet.

Fires on:
- webhook

${@:-}
