---
name: weekday-morning-paper
description: "Use this Monday–Friday (in the user's timezone), or when the user asks for the weekday edition of their morning paper for their saved home_zip."
---

# Weekday Morning Paper

## Input
- Use ONLY the home_zip saved in this account's private memory (search memory for "home_zip").
- If no home_zip is saved, ask the user for a 5-digit US ZIP and stop. Never guess, never invent a city, never use a ZIP from a template author or another user.
- If the user saved a job field or asked for remote jobs, use that for the jobs section.

## Steps
1. Resolve the ZIP to its real city/state with a live lookup (do not assume).
2. Get today's date in the user's timezone and confirm it is a weekday (or the user explicitly asked for the weekday edition).
3. Search live for each section below. Every item must come from a real, fetched source. If a search fails or returns nothing, say so in that section instead of filling it.
4. Assemble the paper in this order:
   - **Masthead**: city, state, ZIP, and the full weekday date.
   - **Weather**: conditions now, today's high/low and precipitation, and a commute/road-risk note (rain, fog, ice, heat, construction, closures). Prefer the National Weather Service (weather.gov) for the forecast and alerts.
   - **Local news (5–8 items)**: weighted to public safety, schools, roads/traffic, local government, and major employers. One or two sentences each, with the date and source.
   - **National/world (3 items)**: the day's top stories from reputable outlets.
   - **Jobs (8–10)**: openings near the ZIP (or remote if the user asked), preferring postings from the last 14 days. List title, employer, location, and the real posting URL. Include pay only if the posting states it. Never invent pay, employers, or URLs.
   - **Sources**: a list of every link used.
5. Deliver the paper as one message to the user in chat.

## Rules
- Search live every time; no cached or remembered headlines.
- Do not email, post, or send the paper anywhere outside the chat.
