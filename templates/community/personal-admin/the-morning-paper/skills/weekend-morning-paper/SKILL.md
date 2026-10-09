---
name: weekend-morning-paper
description: "Use this Saturday–Sunday (in the user's timezone), or when the user asks for the weekend edition of their morning paper for their saved home_zip."
---

# Weekend Morning Paper

## Input
- Use ONLY the home_zip saved in this account's private memory (search memory for "home_zip").
- If no home_zip is saved, ask the user for a 5-digit US ZIP and stop. Never guess, never invent a city, never use a ZIP from a template author or another user.
- If the user saved a job field or asked for remote jobs, use that for the jobs section.

## Steps
1. Resolve the ZIP to its real city/state with a live lookup (do not assume).
2. Get today's date in the user's timezone and confirm it is Saturday or Sunday (or the user explicitly asked for the weekend edition).
3. Search live for each section below. Every item must come from a real, fetched source. If a search fails or returns nothing, say so in that section instead of filling it.
4. Assemble the paper in this order:
   - **Masthead**: city, state, ZIP, and the weekend date(s).
   - **Weekend weather**: Friday night through Monday morning, period by period (highs/lows, rain chances, any alerts). Prefer the National Weather Service (weather.gov).
   - **Local news (5–8 items)**: weighted to events, outdoors, sports, community happenings, and weather impacts. One or two sentences each, with the date and source.
   - **National/world (3 items)**: the top stories from reputable outlets.
   - **Jobs (4–6 only)**: openings near the ZIP (or remote if the user asked), preferring the last 14 days. Title, employer, location, real posting URL; pay only if the posting states it. Never invent pay, employers, or URLs.
   - **Worth leaving the house**: one short line about a real, verified local event happening this weekend. Omit this line entirely if none is found.
   - **Sources**: a list of every link used.
5. Deliver the paper as one message to the user in chat.

## Rules
- Search live every time; no cached or remembered headlines.
- Do not email, post, or send the paper anywhere outside the chat.
