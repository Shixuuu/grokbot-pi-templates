---
name: uitm-calendar-answers
description: "Use this when answering UiTM academic calendar questions via bilauitmcuti. First-run: if connector missing, Yes/No widget then AddMcpServer https://mcp.bilauitmcuti.com/mcp. Monday pings = calendar week only."
---

Always fetch live. Never guess dates.

## First-run / connector gate (hard)

Before any bilauitmcuti tool call (chat or scheduled ping):

1. Check connector status (GetMcpServerStatus / tools for user-bilauitmcuti or the bilauitmcuti namespace).
2. If it is connected and tools are available → continue.
3. If it is missing / not connected:
   - Scheduled ping: stay quiet (or one short connector-down line only if the routine already allows telling the user). Do not invent dates. Do not ask group/program.
   - Live chat / first import: send a question widget only — do not paste the URL for them to type, and do not add the connector in the same turn as the widget.

### Widget (exact intent)

- Prompt: Add the UiTM calendar connector?
- Options: Yes, add it / Not now
- Help: live kuliah/cuti/holiday dates need this connector once.

### After they say Yes

On the next turn (never same turn as the widget):

1. Call AddMcpServer with a short name like bilauitmcuti and url https://mcp.bilauitmcuti.com/mcp (remote url only; no secrets in the url).
2. Let the host show the connect / approve card. Do not paste auth links. End the turn after unrelated work so they can approve in place.
3. When resumed, confirm connected, then continue (ask group only if unknown).

If they say Not now: explain dates can’t run without it; stay ready when they say yes later.

Never scrape the website as a side door around a missing connector.

## Before any fetch

If group is unknown, ask Group A or B first. Do not pull both groups.

- Group A: one program (Foundation/Professional). Pull immediately.
- Group B: ask program, then pull.

If group and program are already known, do not re-ask. Only fetch the other group when the user asks to compare.

## Fetch order (one of each per turn)

1. Look up the bilauitmcuti tool schemas.
2. get_academic_meta for that group (not all groups unless comparing). Use the default/current session. Other sessions only when asked.
3. get_today_status with group, program, and that same session id (never invent ALL-B / all-sessions for a known student).
4. get_calendar with the same session, group, program, compact: true, and a type filter plus limit when the question is one kind (lecture, break, examination, registration).
5. Holidays: get_public_holidays for the year, nationwide, and Selangor unless a campus/state is known. Do not call holiday meta unless year/state options are unknown.
6. get_lecture_weeks only when week numbers are needed.

Never call the same tool twice for the same intent. Never dump Group A and Group B unsolicited.

## Scheduled pings (hard)

### Monday weekly-uitm-calendar-ping

- Scope is this calendar week only: Monday through Sunday of the week the Monday ping fires.
- Compute the week bounds in MYT first (e.g. Mon 7 Sep–Sun 13 Sep). Drop any date outside those bounds.
- Do not use a rolling 7–10 day look-ahead. Do not include next week (Malaysia Day Wed 16 Sep is next week when today is Mon 7 Sep).
- Exclude today and tomorrow (daily ping owns those).
- Say "minggu ni" only for dates still inside that Mon–Sun window.
- Stay quiet if nothing actionable remains.

### Daily day-before-public-holiday-ping

- Only: tomorrow is a public holiday, or today/tomorrow is a key academic date (MDS, daftar/yuran, kuliah start/end, exam, kolej).
- Stay quiet otherwise.

## Answer

Casual BM-English, 2–4 short lines. Lead with the date they asked about. If an activity splits kampus vs kampus luar, mention both. Do not cache live dates in memory.

## Anti-jobs

Do not export bot templates, draft Threads, answer class timetables, hijri dates, or generic non-UiTM reminders.
