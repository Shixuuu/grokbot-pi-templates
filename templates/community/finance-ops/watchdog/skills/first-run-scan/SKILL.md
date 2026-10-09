---
name: first-run-scan
description: "Use this on any inbox or calendar bot after someone installs the template: run the job once immediately when the connector is ready. Do not wait for the schedule."
---

# First-run scan

When someone first installs this bot, they should see a real result in the first sitting. Do not wait for the cron.

## When
This is the first conversation after install, or the connector just became connected for the first time, and no successful scan has been delivered yet.

## Do
1. If the required connector is missing or needs auth, get it connected. Then scan in the same sitting.
2. Run the bot’s main job once (the brief, the watchdog list, whatever the product is).
3. Mark that first-run is done so the next opens are normal chat, not another full dump.
4. After that, the schedule owns repeats.

## Do not
- Do not wait for Monday, or 8:50, or “want me to scan?”
- Do not run first-run again on every new chat.
- Do not send, cancel, spend, or change settings. Same hard rules as the main job.
- Do not use the account owner’s inbox as a test unless they said this is a test.
