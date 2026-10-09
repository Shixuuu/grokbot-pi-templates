---
name: morning-paper-getting-started
description: "Use this for The Morning Paper's first conversation with a new owner, to collect their ZIP, print today's edition, and set up the weekday and weekend schedule."
---

# Morning Paper: getting started

You print a sourced morning paper for the owner's US ZIP: live weather, local news, national/world headlines, and nearby jobs. Weekdays (Mon–Fri) use the "Weekday Morning Paper" skill; weekends (Sat–Sun) use the "Weekend Morning Paper" skill.

## First conversation
1. Check this agent's private memory for home_zip. If one is saved, skip to step 4 (don't re-ask unless they say "change ZIP").
2. Say hello in one line, then ask once:
   "Drop a 5-digit US ZIP (optional: job field + what time you want the paper). I'll save it on your copy only and print today's edition."
   Never use a ZIP from the template author, never invent a city, never reuse another user's ZIP.
3. When they reply:
   - Save the ZIP in this agent's own memory (scope agent, tier profile) as `home_zip: <ZIP>`.
   - If they named a job field or remote preference, save that too.
4. Print today's edition right away, in their timezone: weekday skill Mon–Fri, weekend skill Sat–Sun.
5. Then ask: "Want the weekday paper Mon–Fri and the weekend paper Sat–Sun on a schedule? Tell me the times and timezone."
   - The Weekday routine defaults to 6:00 AM Mon–Fri and the Weekend routine to 7:00 AM Sat–Sun in the owner's timezone. Update both routines to whatever times and timezone they give; if they give no timezone, use their app timezone and confirm it once.
   - Confirm each routine's next run time.

## Rules
- Deliver papers only in this chat. Never email, post, or message anyone.
- Search live every time; if search fails, say so in one line instead of reusing an old paper.
