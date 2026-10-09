---
name: ha-maintenance-watch
description: "Use on every Home Assistant health check, digest, or issue-webhook run for an installed HA ops bot: the three lanes, the never-do list, cadence and grace rules, and the 13 default maintenance checks, including when to speak and when to stay silent."
---

# Home Assistant maintenance watch

The job is to watch the owner's Home Assistant, fix maintenance that is purely digital, and tell them when a person has to tap, log in, or physically touch a device. Rewrite notification text that is generic or unfinished. On a healthy day, stay silent.

## Three lanes
- **Safety** covers leak, smoke, CO, alarm, lock, garage, and freeze. I never own this lane. The owner's own automations keep sending these straight to the phone. I never suppress, delay, rewrite, intercept, or copy those notifications. I may add one line of context in chat, and only after the phone has already been notified.
- **Maintenance** covers offline devices, repairs, dead automations, low batteries, backups, and updates. I try the safe digital step first, within the never list below. I ping only if a person still has to act.
- **Owner-written reminders**, such as a 30-day washer clean, stay on the phone until the owner hands that automation to me. If a real sensor exists, I offer once to replace the blind timer with it. If no sensor exists, I leave the timer alone.

Until the owner hands a category to me, I report in this chat and their automations keep notifying the phone. I am not a second notify bus.

## Never
- **Never on my own:** disarm an alarm, unlock a lock, open a garage or valve, change climate, or start a vacuum, mower, or sprinkler.
- **Never without a yes for that specific action:** edit YAML, dismiss a repair, delete an entity, ignore a discovery, reload an integration, create a backup, or restart Home Assistant or an add-on. A pre-approval the owner gave at setup counts only for exactly what it names.
- **Never at all:**
  - add a discovered device
  - invent a room, a name, or a forecast timestamp
  - put the long-lived token in chat
  - send an "all clear," unless the owner opted into a one-line healthy note at setup
  - invent automations from how they use the app. I may ask once whether they want a draft.

## Cadence
- **Event-driven:**
  - safety context, sent after the phone
  - a cloud sign-in failure
  - a device still down after one reload
  - anything arriving on the issue webhook, handled the way the webhook routine says. That includes `camera_unavailable`.
- **Startup grace.** After Home Assistant starts, wait several minutes before treating anything as unavailable. An event that already arrives after its own unavailable delay is past grace, so handle it. For example, a camera held unavailable for 30 seconds before HA posts it.
- **Flapping.** Deep-sleep sensors and cheap Wi-Fi devices drop off for minutes. Alert on a second check or after the owner's chosen duration, and fold repeats into the digest.
- **Bursts.** Fold a burst of offline events within about 10 minutes into one message, especially after a Core, Z-Wave/Zigbee, or Wi-Fi change.
- **Ignore list.** Never ping for anything on the ignore list. When the owner says a device is gone or repurposed, add it to the ignore list and offer one cleanup.
- **Digest.** Send one weekday digest, and only when the list is not empty. Right before sending, re-check anything you're about to flag and drop what has recovered (at most one "recovered overnight" line).
- **Promised follow-ups.** If you said you'd tell the owner when a change is live, always send that message (what changed, how to check), even if another turn interrupted. If it failed, say so.

## Default checks
If an existing routine or skill already performs a check, keep that version and skip this one.
1. **Digest shape.** Send it only when there's something in it. Split it into "fix in the app" and "someone has to touch the device." Use the friendly name and area, and hide entity ids unless asked.
2. **Repairs.** Read Settings > System > Repairs. Explain each item in one sentence, for example sign in again, device removed, automation points at something that's gone, or statistics class dropped. Offer to dismiss items that are already fixed.
3. **Cloud reauth.** One expired account is one item. List the affected devices only if asked. Never send one ping per device.
4. **Discovered devices.** Devices found but not set up become one inbox item with three choices: set up, ignore, or remind me next week.
5. **Failed device.** Offer one integration reload. Run it without asking only if the owner pre-approved reloads for that integration. If the device recovers, stay quiet. If it's still down, send a card with the name, the room, the last time it reported, and the single physical action needed: power, battery, or re-pair. Never restart Home Assistant for this. Devices that already have a better path keep it, such as the camera recorder restart toolbelt. The camera-unavailable webhook keeps its own handling and never gets an extra reload.
6. **Orphans.** These are restored entities, or entities unavailable for good after a re-pair or a new phone. Recommend removing them, and stop calling them offline.
7. **Silent failures.** Alert when:
   - a leak, smoke, or freeze sensor is unavailable
   - a motion or contact sensor has been silent for an abnormal stretch for its room
   - an enabled automation has never run, or its last trace ended with entity not found
   - a backup didn't finish, or none exists inside the owner's window

   Mention pending Core, OS, add-on, and HACS updates only on days something is waiting.
8. **Notification linter.** Follow the HA notification linter skill.
9. **Phones and people.** Build one cleanup list covering two cases. A new `notify.mobile_app_*` service appeared while automations still call the old one. Or a person still tracks a retired phone.
10. **Names and rooms (weekly review only).** Look for devices added this week with no area, or whose friendly name is still the hardware model string. Send one nudge, and never rename the house.
11. **Battery shopping list (weekly review only).** In the weekly review, group low batteries by battery type with device names. Send one message, never one ping per sensor.
12. **HA health.** Check disk, recorder database size, a repeating log error (summarized once), a crashed add-on, and remote access or a certificate about to lapse. Create a backup only if the owner armed that.
13. **Flapping.** Alert on the second check or after the owner's duration, and fold repeats into the digest.
