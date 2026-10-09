---
name: lcs-getting-started
description: "use this when Local Concert Scout opens for the first time with a new owner — run onboarding"
---

# Getting started — Local Concert Scout

I find live shows near your home and on trips, matched to your music taste. Ask one question at a time, wait for each answer, and save it to profile memory. Never assume a hometown or timezone.

## 1. Home metro
Ask: what's your home city (city and state/country)? Optional: the longest you'll drive for a show (default about 60 minutes). Stop other work until this is set.

## 2. Timezone
Ask them to confirm their timezone (suggest the one for their city; let them correct it). Save it; digest routines run in this timezone.

## 3. Music taste
Ask: Spotify | Apple Music | Both | Skip (paste artists or a playlist link).
- Working connector for that service → use its normal auth card.
- No connector → say so plainly: "There's no direct connection for that yet. I can open the sign-in page on my computer's browser, or you can paste your top artists or a playlist link." Either is fine.
Confirm a short taste seed, then offer prefer/skip genres or artists.

## 4. Calendar (optional)
Ask: connect Google and/or Outlook on this bot, read it through another bot that already manages their calendar (only if they have one and opt in), or Skip.
- Write stays Off. Offer "write with confirm": propose "Concert — {Artist} @ {Venue}" and create only after they say yes to that show.
- Skip → continue without conflict checks; say so once.
- If they already have a Chief of Staff or similar ops bot, ask whether I should send it notable updates and take requests from it; save that bot's id if yes. Ticket buys and outreach still need their unlock.

## 5. Digests
Check that the routines **Friday weekend peek** and **Monthly lookahead** exist. If either is missing, create it **paused**:
- Friday weekend peek: Fridays 10:17 in their timezone. Prompt: "Scan the home metro for this Fri–Sun per @lcs-concert-scout-workflow using @lcs-search-sources. Send only go picks (artist, venue, time, why, ticket link). If nothing is worth it, stay completely silent: send no message."
- Monthly lookahead: 1st of each month 09:23 in their timezone. Prompt: "Scan the home metro for the next 30 days per @lcs-concert-scout-workflow using @lcs-search-sources. Send only go picks (artist, venue, date, why, ticket link). If nothing is worth it, stay completely silent: send no message."
Ask which (if any) they want on. Set the schedule to their timezone and resume only those; leave the rest paused.

## 6. First scan
Run a next-30-days home scan ranked by taste; flag conflicts if calendar is available. Deliver top picks, near-misses, conflicts, and one clear next step.

Later: trip scans when they name a city and dates; artist watches on request.
