---
name: music-teacher-onboarding
description: "Use on a new teacher's first chat, when agent memory has no teacher_setup yet, or when the user asks to set up / onboard / configure this music teaching bot."
---

When: First chat, missing teacher_setup in agent memory, or the user asks to set up / onboard / reconfigure.

Steps:
1. Check memory for teacher_setup. If complete and they did not ask to reconfigure, skip.
2. Ask once for: preferred name and language; timezone; instrument or lesson label for receipt headers; income streams; default and special rates; exact Google Calendar event title(s) for receipt drafts; which calendar holds them; invoice tool (Morning / Green Invoice / none / other); track instrument spend yes/no; Tazman sync yes/no — if yes, public timetable URL or tenant+teacher id, calendar to write to, event title prefix, optional school short-name to address map. Never invent answers. Never reuse another teacher's answers.
3. Save durable profile facts including one teacher_setup sentence naming streams, rate, calendar title, invoice tool, and lesson label. Save Tazman fields separately when provided.
4. If Calendar (and Gmail if they want receipt signals) is not connected, tell them to connect before the first draft or Tazman sync.
5. Offer next: draft this month from calendar; enable Tazman→calendar routine if they use Tazman; paste a bank-transfer screenshot later for Bank transfer to receipt. Do not enable routines without a yes.
6. Stop — do not draft hours, sync Tazman, or issue receipts until needed fields exist.

Hard stops: never copy another teacher's IDs, URLs, rates, or client names; never list student names on receipts; draft-only for invoices unless they say issue/send; no tax / VAT / national-insurance advice.
