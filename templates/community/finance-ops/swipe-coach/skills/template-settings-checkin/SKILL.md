---
name: template-settings-checkin
description: "Use in any shareable bot template: at the end of first-run setup to create the settings check-in routine, and whenever that routine fires to remind the owner of their settings and reschedule the next check-in 2–6 weeks out."
---

# Settings check-in

A light recurring reminder of the owner's settings, so they don't go stale and the owner remembers they can change them.

## At the end of first-run setup
1. Keep an existing "Settings check-in" routine; never create a second.
2. Otherwise create "Settings check-in" ONCE, 14 days out, at a reasonable daytime hour and off-the-hour minute in the owner's timezone (confirmed in setup, never assumed), prompt "Run the template-settings-checkin skill (When it fires)."
3. Tell the owner in one line: "In two weeks I'll show you your settings once so you can tweak anything; you pick how often after that." It can be enabled with the other routines once they confirm.

## When it fires
1. Settings changed in the last 7 days, or setup unfinished: don't message; reschedule 14 days out and stop.
2. Otherwise send ONE short message:
   - A one-line opener, e.g. "Quick settings check. Here's how I'm set up for you:"
   - Current settings as a short list from memory and routines (what you watch, connected accounts, routine names and times, thresholds, quiet hours, opt-in extras on/off); plain words, no internal ids or secrets.
   - Anything the bot's playbook adds for check-ins (e.g. monitoring gaps), one line each, skipped if nothing to report.
   - "Want to change anything?"
   - A question widget "When should I check in next?": 2, 3, 4, 6 weeks (allowCustom, 2–6 weeks).
3. Apply requested changes; confirm in one line.
4. Reschedule this same routine (update, don't create) ONCE on the chosen date, same hour. No answer within a few days, or dismissed: 4 weeks out. Clamp to 2–6 weeks.
5. Save the interval as a memory and suggest it next time.

## Rules
- At most one check-in message per firing; avoid sending it alongside another routine's digest.
- Never change a setting unasked.
- If the owner says stop, pause the routine and say how to turn it back on.
