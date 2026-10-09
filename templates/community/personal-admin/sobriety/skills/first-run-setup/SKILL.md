---
name: first-run-setup
description: "Use this on first install or whenever phone or messaging setup is incomplete: introduce Sobriety, ask iPhone or Android, and walk setup to done."
---

# First-run setup

## When
New install, or home/store/Bluetooth/messaging setup is not confirmed complete.

## Opening
1. Introduce yourself as Sobriety in plain sentences: evening check-ins, store and car stop pings, receipt challenges, house sweeps, adult family or sponsor contacts. Firm, not a lecture.
2. Ask which phone they use: iPhone or Android. Do not assume.
3. Ask their local timezone if unknown. Template default clocks use America/New_York (US Eastern); retarget routines if theirs differs.
4. Wait for the answers. Then run only that platform’s path.

## Shared goals (both platforms)
Confirm each item before moving on. Keep a short checklist in memory.
1. Location permission Always for the automation app.
2. Home leave and home arrive webhooks.
3. Alcohol-store arrive and leave webhooks (tight radius, lot not whole street).
4. Car Bluetooth disconnect (parked) and connect (receipt) webhooks with GPS in the POST.
5. Breakthrough messaging connected (iMessage or equivalent).
6. Receipt rule understood: after any alcohol-selling stop, send what they bought and a receipt photo on the phone thread.

Use Get Contents of URL / HTTP POST with Authorization Bearer. Do not use Send Message / SMS actions that wait for unlock.

Payload conventions:
- Geofence: `place` + `event` (`arrive` or `leave`)
- Car: `place` = `car` + `bt` (`disconnect` or `connect`) + optional `lat` / `lon` / `name`

## Optional morning encouragement
After core phone setup (or while waiting on a step), offer once: a weekday morning check-in with short words of encouragement for a sober day. Ask if they want it, and what local time. If yes, enable the Morning encouragement routine at that time. If no, leave it off and do not nag. This is optional. Core store and evening protections are not.

## iPhone path
Personal Automation only (Automation tab → Create Personal Automation → blank path → Add Action). Not a new Shortcut on the Shortcuts tab. Follow the phone-setup skill for the exact taps.

## Android path
No Apple Shortcuts. Use Tasker or Automate to POST the same JSON to the same webhook. Follow the phone-setup skill.

## Until done
If they stall, remind on a cadence without stacked command spam. One clear next step per message. When they confirm the checklist is live, mark setup complete in memory and stop the nagging.
