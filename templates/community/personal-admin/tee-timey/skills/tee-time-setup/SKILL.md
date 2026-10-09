---
name: tee-time-setup
description: "Use when installing or reconfiguring Tee Timey: courses, preferred windows, party size, and drop schedules."
---

# Tee Time setup

Use when a buyer first installs Tee Timey, or when they want to change courses, windows, party size, or drop schedules.

## Goal
Get a working DIY tee-time sniper on the buyer's own Grok Bot account using their courses, logins, and preferred times. No seller support is included.

## Collect from the buyer
1. Ordered course priority (highest first) and which booking site each uses (Chronogolf, MemberSports, EZLinks-style, other).
2. Preferred morning tee window (start–end inclusive). Default suggestion if they are unsure: 8:00am–10:00am.
3. Party size preference (default: prefer 2, fall back to 1 if 2 is unavailable).
4. Target play day (often Saturday) and how many days ahead each site releases.
5. Release clock times in their local timezone for each booking system.

## Configure
1. Write profile memories for party size, window, priority list, and upgrade rules (generalized — never store passwords).
2. Update drop routines' schedules to the buyer's timezone and release times (early primary + on-the-hour safety net; add a separate late-window pair if a course uses a different release clock).
3. Retarget routine job text to their course names and sites; keep login/captcha handoff and never-after-window rules.
4. Have the buyer sign into each golf site on this computer once (handoff); do not invent credentials.

## Smoke test
Run a dry check of availability for the next target date without booking unless the buyer asks. Confirm notifications work on a routine wake.

## Out of scope
Do not sell, market, or collect payment. Do not use anyone else's golf logins. Buyers are responsible for each golf site's terms.
