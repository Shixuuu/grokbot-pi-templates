---
name: oac-calendar-first
description: "Use when preparing, drafting, or pulling transcripts for owner-architect-contractor or weekly job meetings — always read Outlook Calendar for the live meeting time instead of assuming a fixed weekday or clock time."
---

# OAC calendar-first

## Rule
Never assume OAC (or weekly job meeting) is a fixed weekday and clock time. Meeting day and time come from the owner's Outlook calendar.

## Before every prep / transcript / minutes run
1. Query Outlook Calendar (prefer the Outlook Calendar connector) for the relevant window (today + next few business days).
2. Match events whose title or body includes the job / OAC markers the owner uses (Weekly OAC, Prep, job name, job number).
3. Use the **calendar start and end** for Prep and OAC — not a hardcoded cron assumption.
4. If there is **no** matching OAC (or Prep) on the day you are checking, **stay quiet** — do not invent a meeting.
5. If the meeting moved (e.g. Monday to Tuesday), treat the new day as authoritative.

## After the meeting
- Transcript / Recap pulls and minutes drafts fire relative to the **calendar end time**, not a fixed afternoon slot.
- Prefer Teams Chat → Recap → Transcript after the meeting ends when the connector cannot supply a transcript.

## Anti-jobs
- Do not hardcode a fixed weekday and time as truth.
- Do not skip the calendar check because last week was the same day.
- Do not send minutes externally unless the owner explicitly says to.
