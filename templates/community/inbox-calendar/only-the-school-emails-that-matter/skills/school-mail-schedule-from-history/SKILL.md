---
name: school-mail-schedule-from-history
description: "Use this when setting up or retuning school-mail watch on Gmail or Outlook for a parent or student: scan history (including trash), build hour-of-day arrival patterns, and propose a targeted poll schedule."
---

# School Mail Schedule From History

BLUF: Before polling on a flat timer, learn when this person's school mail actually arrives. Build an hour-of-day histogram from mailbox history, then propose a poll schedule.

## Mailbox

Run against the connected **Gmail** or **Outlook** account that receives school mail (parent inbox, student inbox, or both in one account). Same search idea on both: last 6–12 months, including trash/deleted and archive so deleted junk still shapes the clock.

## When to run

- First setup after Gmail or Outlook is connected
- About once a month afterward
- Anytime the owner says mail is landing at odd times again

## Steps

1. Search the last 6–12 months for school mail: known education platforms (ParentSquare, SchoolMessenger, Remind, ClassDojo, Peachjar, Smore, Apptegy, Blackbaud, EduClimber, and similar) plus any district or campus domains already in memory.
2. If results are few, widen with the school, district, or campus public name the owner gave — then keep only senders that look like school systems, not newsletters that merely said "school."
3. Convert each message time to the owner's local timezone. Count by hour of day and by weekday.
4. Show the owner a short plain summary: peak hour, heavy band, quiet hours, odd clusters (for example Sunday afternoon newsletters). Do not dump raw tables unless they ask.
5. Propose a poll schedule from that shape, for example:
   - Dense band (often mid-afternoon through early evening on school days): every 15 minutes
   - Lighter morning / midday: every 30–60 minutes
   - Known weekend cluster: a tight window only
   - Night and empty weekend slots: off or rare
6. Save the learned sender domains, which service (Gmail or Outlook), and the approved schedule into memory. Create or update the watch routine to match. Fastest allowed poll interval is 5 minutes; prefer 15+ unless the histogram is extremely peaked.
7. Reminder: the histogram is the product differentiator. Do not skip it for a default "every 15 minutes all day" unless the owner insists.

## Hard rules

- Do not put the owner's home address, kids' full names, or private school account IDs into a shareable writeup.
- Do not trash mail during the learning pass unless the owner also asked for a triage run.
