---
name: look-up-live
description: "Use when a Look Up routine fires (the daily sky check, a \"Look Up one-shot\" reminder or look-now, or the nightly moon note), or when the user asks \"anything tonight?\", \"what's up tonight?\", \"remind me\", or \"when's the next ISS pass?\". Computes tonight's sky for their location and viewing gear (passes, moon, planets, meteors, aurora, bright comets, eclipses, daytime moon and Venus), labels each moment daytime/twilight/night, stays quiet when it's cloudy or nothing's worth it, sends at most one heads-up, and schedules short-lived reminders."
---

# Look Up: live sky alerts
Voice: calm planetarium guide (rules in look-up-getting-started). Send engine text as written; it already has its one fact. Never add a sighting, change a time, or call something visible unless the engine lists it. Times are already in the location's zone. Keep each line's (daytime), (twilight) or (night) label.

**Engine:** unless `cat /workspace/look-up/ENGINE` prints `look-up v1.0.0`, do look-up-getting-started's Install first. If `python3 /workspace/look-up/core.py show` has no `home` or `onboarded` is false, run look-up-getting-started.

`N=/workspace/look-up/night.py` (JSON). Data is cached and on a refusal (403/429) the engine backs off to the cache; never work around that.

## Daily sky check ("Look Up daily sky check: run the look-up-live skill's daily check.")
1. `python3 $N cleanup`; delete every routine it lists that still exists, plus any "Look Up one-shot <date> ..." dated before today. Nothing else.
2. `python3 $N plan`. If `error` says no location, run look-up-getting-started.
3. `say_back_home` present: make it the first line of any message today, then `python3 /workspace/look-up/core.py ack-home`.
4. `paused`, `send_headsup` false, or `already_sent`: end silently. No "nothing tonight" messages.
5. Send `headsup` as one message, attaching `card_url` if set (SendToUser needs the `file://` `card_url`, never the bare path).
6. For each `reminders` item whose `name` isn't in `already_scheduled`: read the routines skill, create a routine with exactly that `name`, `cron` (keep it exactly, CRON_TZ prefix and minute included) and `prompt`, then `python3 $N mark reminder <date> <name> --events <its events, comma-separated>`. (The engine caps it at 3 a night, skips already-nudged events and merges close ones.) Declined save: don't retry.
7. `python3 $N mark headsup <date>`.
Cloudy nights stay quiet unless a major event (aurora, big meteor peak, eclipse, nearby night launch) is clouded out: then `headsup` is one short "Clouds win tonight" line, no reminders.

## One-shots (prompt starts "Look Up one-shot")
Each deletes itself; past its deadline, delete without sending. Never recreate one or make more than the plan listed.
- reminder: `python3 $N reminder --events <ids>`. If `send`: send `text` (+ `card_url`). If not and `reason` says it's no longer predicted, send `text` only if today's heads-up mentioned it. Delete the routine.
- look-now: `python3 $N look-now --events <id>`. Not `send`: delete silently. Else shell `sleep <sleep_seconds>` (about a minute), send `text`, delete the routine.

## Nightly moon note ("Look Up moon note: run the look-up-live skill's moon note.")
`python3 $N moon`. `skip`: end silently. Else send `text` (one line).

## Questions in chat
- "anything tonight?": `python3 $N plan`. If `send_headsup`, reply with `headsup` minus its last "I'll send a reminder" line (unless you create the reminders). Else one or two lines: nothing worth stepping out for in their hours, plus the weather verdict and moon line. Create reminders only if asked ("remind me"), via step 6.
- "next ISS pass" / "Tiangong": `python3 $N next iss` or `next stations`. Up to 3: when, where it peaks, brightness, whether it's in their hours; clouds aren't checked that far ahead. Empty: "No good ISS passes in the next 10 days from here; its visible passes are too low or in daylight."
- Another night: `plan --date YYYY-MM-DD`. Overview ("what's in my sky tonight?"): `python3 $N preview`, send `text` + `card_url`.
- Comets, eclipses, showers, gear targets: look-up-events. Starlink: mention a train only when the engine lists one; never promise one.

## Accuracy notes for answers
Visible means the satellite is sunlit, the sky dark (sun 6+ degrees down), 10+ degrees up, peaking at 20+ (ISS, Tiangong) or 30+ (others); ISS times match heavens-above within seconds. Other satellites' brightness is an estimate. Eclipses are announced once, on the day; solar lines carry the eclipse-glasses warning. Aurora needs NOAA's forecast Kp to reach their magnetic-latitude level (about Kp 8 near 35°N, 5 near Minneapolis); with eye gear, within 1 of it gives a "phone night mode may catch it" line.
