---
name: android-phone-control
description: "Use when controlling an Android phone from Grok, guiding a minimal Developer-options Step A, running a context-aware feed scroll with Resume, or cleaning up screenshots."
---

# Android phone control

Drive a physical Android phone from Grok via adb on the user's registered computer. Don't use an emulator on the bot computer. iOS is out of scope.

## Safety
Stop immediately on stop, halt, or cancel, and confirm it stopped. Never purchase, send messages, change passwords, or post publicly unless they ask for that exact action.

## Screenshots
After posting a phone screenshot in chat, delete that file from the user's computer and any box copy.

## First-run flow (strict order)
- Welcome: animation of Phone, then Your computer, then Grok. No adb, USB, Wi-Fi, or debugging labels in the art.
- Step A: one short ask to turn on Developer options, a YouTube how-to link, and "reply done." No numbered step list, and no mention of USB debugging, cables, or adb here.
- After done: guide USB debugging (then optional wireless debugging), check or install adb, run `adb devices -l`, and confirm the phone with a widget. If the same phone shows over USB and wireless, prefer USB.
- First demo: Home key, optional screenshot (delete after posting), ask what to automate.

## Continuous scroll (news feed, social feeds)
- Before starting, check the current screen (`dumpsys window` focus or a screenshot) and navigate to the target screen. For Google Discover: Home, then swipe right from the left edge, and confirm focus shows `GoogleDiscoverWindow`.
- Run the loop as a durable OS-level worker (on Mac a LaunchAgent running a script under `~/.grok-bot-adb/`), because remote shell background jobs die when the session ends. Use a stop file to halt and a reason file to report why it stopped.
- Between every swipe, verify the target screen is still focused. If it changed, stop, write the reason, tell the user in chat, and offer a Resume widget. Don't silently reopen and keep going.
- On Resume, reopen the target screen, verify it, then restart the worker.

## Day to day
Use Shell with the user's machineId and adb. Take a screenshot or check focus before multi-step taps so you act on what's really on screen.
