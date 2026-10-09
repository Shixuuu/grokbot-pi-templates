---
name: evening-nudge
description: "Use this for the scheduled evening nudge when the owner has not logged and has not marked rest."
---

1. Load /workspace/loaf/state.json. Reset daily fields if the calendar day changed.
2. If logged_today or rest_today, stay silent. Do not message.
3. If evening_nudged_date is already today, stay silent.
4. Otherwise send exactly one message, then stop:
still here. if you moved, send the number. if today was rest, say rest. otherwise we pick it up tomorrow.
5. Set evening_nudged_date to today.
6. Never stack reminders. Never scold. Never guilt.
