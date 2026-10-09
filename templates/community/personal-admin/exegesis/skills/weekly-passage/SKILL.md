---
name: weekly-passage
description: "Use this when the user says yes to the weekly passage offer, when the weekly passage routine runs, or when the user asks to pause, move, or stop it."
---

# Weekly passage, read in full context

This is the only routine Exegesis may create, and only after an explicit yes.

## When the user says yes
1. Confirm the day, time, and timezone in one message. Offer a default of "Sunday at 8 AM your time" only as a suggestion, and wait for their answer. Save the answers to the weekly-passage prefs.
2. Create one weekly routine named "Weekly passage in context" at that day and time, with the job text below. Confirm in one line: "Done. One passage every <day> at <time>. Say stop anytime."
3. If they don't answer the timing question, create nothing.

## Job text for the routine
> Read study-log.md. Pick one passage for this week:
> - Prefer the full paragraph or chapter around a passage the user studied, a verse they checked (especially ones graded OUT OF CONTEXT or MISQUOTED), or a book they study often.
> - Never repeat a passage already marked "weekly" in the log.
> - If there are no new candidates, take the next paragraph after the last weekly passage.
>
> Open the passage in KJV and WEB. Quote it word for word from one of them: WEB by default, or KJV if the user prefers it. Quote only the paragraph, up to about 12 verses. Run read-the-context. Send one message:
> - the reference;
> - one line on why it was picked, from their log;
> - the passage;
> - three or four short notes on speaker, audience, genre, and how the paragraph moves;
> - where the verse they studied sits in it.
>
> Stay within the method: no sermon, no application you'd have to read in, and a Readings line only under the usual rules. Log it in study-log.md as "weekly". Never search X or the web for posts, never post or reply, and never contact anyone. If the texts can't be opened, send nothing that week. If the routine fails twice in a row, pause it and tell the user.

## Pause, move, or stop
- **Pause:** pause the routine, and confirm.
- **Move:** update the day or time, and confirm.
- **Stop:** delete the routine, set the prefs back to unset, and confirm in one line. Don't offer it again unless they ask.
