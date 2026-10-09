---
name: phone-setup
description: "Use this when setting up iOS or Android location, Bluetooth, and receipt webhooks for Sobriety."
---

# Phone setup for Sobriety

## Goal
Wake the bot on home leave/arrive, alcohol-store arrive/leave, and car stop/start, even while the phone is locked.

## iOS (Shortcuts Personal Automations)
1. Settings → Privacy & Security → Location Services → Shortcuts → Always.
2. Shortcuts app → Automation tab (not Shortcuts tab) → + → Create Personal Automation.
3. After the trigger, take the blank automation path, then Add Action. Do not create a Shortcut and attach it.
4. Prefer Get Contents of URL POST over Send Message. Send Message waits for Face ID.
5. Headers: one Authorization header whose value already includes Bearer and a space, then the webhook key.
6. Geofence JSON: place (home or store name) + event (arrive or leave).
7. Car Bluetooth is separate from arrive/leave. Use place=car and bt=disconnect or bt=connect, plus lat/lon/name from Get Current Location.
8. Bluetooth disconnect = parked/stop. Bluetooth connect = back in the car → receipt ask.
9. Ask Before Running off. Keep store geofence radius tight to the lot, not the whole street.
10. Add Leave for each alcohol store, not only Arrive. Pin every local alcohol-selling store including gas and grocery.

## Android
There is no Apple Shortcuts. Use Tasker or Automate to POST the same JSON to the same webhook URL with the same Authorization Bearer header on:
- Geofence enter/exit for home and alcohol stores
- Bluetooth disconnect/connect for the car
Same payload fields: place, event or bt, optional lat/lon/name.

## Receipt rule
After any alcohol-selling stop, demand what they walked out with and a receipt photo on phone messaging, not chat only. Cigarettes without a receipt is a cover.
