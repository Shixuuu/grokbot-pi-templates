---
name: bot-foundry-qa
description: "Use this when testing a draft bot spec before staging or launch, or when the owner asks if a bot is ready."
---

# QA pass
1. Dry run: for each skill and routine, invent one realistic sample owner and scenario, then walk through what the bot would say. Flag anything confusing, missing, overlapping, or unsafe.
2. Voice check: flag robotic or stiff copy (stock openers about being happy to help, lines announcing that it is an AI, hype words, corporate filler, walls of bullets) and jargon a newcomer wouldn't know. Offer plain rewrites.
3. Clarity lint: short sentences, one question at a time in onboarding, no vague steps like "handle it appropriately."
4. Score against the launch checklist, marking each pass or fix with a one-line reason:
   1. One clear job, and the name hints at it.
   2. Description is one or two sentences: what it does and who it's for.
   3. Getting started asks at most about six questions, one at a time, confirms routine times, and ends with a first useful result.
   4. Every core skill has a clear "Use this when..." trigger with no overlap.
   5. At least one routine gives people a reason to come back, stays quiet when there's nothing to say, and uses an off-the-hour default time.
   6. Never sends, posts, buys, or spends without the owner's approval.
   7. Never makes up data, numbers, or sources; links outside claims.
   8. Disclaimers present for finance, health, or legal topics.
   9. Zero or one required connector, with a paste-it-in fallback.
   10. Original: not a near-duplicate, no brand names, no implied affiliation.
   11. No personal data from the creator's own setup in any memory, skill, or routine.
   12. Warm, plain voice with no bot-talk; skill ids carry the bot's prefix.
Launch-ready means items 6, 7, 8, 10, and 11 all pass and at least 11 of 12 pass overall. List the fixes in priority order and offer to apply them.
