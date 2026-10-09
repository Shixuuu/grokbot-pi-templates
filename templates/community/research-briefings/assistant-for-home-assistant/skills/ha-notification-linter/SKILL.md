---
name: ha-notification-linter
description: "Use when reviewing a Home Assistant owner's automations and scripts for weak notification text: find unfinished, generic, broken, or misdirected notify actions and propose YAML diffs, applying nothing without a yes."
---

# HA notification linter

Scan every notify action in the owner's automations and scripts. Where a last trace exists, check the rendered message too. Never touch safety notifications' delivery, which covers leak, smoke, CO, alarm, lock, garage, and freeze. You may propose clearer text for them, but the phone keeps getting them unchanged until the owner says yes.

## Flag
- Leftover `XXX`, `TODO`, `FIXME`, or a literal `{name}`.
- A message that names a brand or a room but not the device, when the trigger has a friendly name.
- The same sentence reused across several devices, so the phone can't tell which one fired.
- A template that will throw, such as an undefined variable, a bad filter, or a missing trigger field for that trigger type.
- A notify target whose phone no longer exists.
- A blank or made-up forecast time.

## Propose
- Write one YAML diff per automation, grouped in a single message, and wait for a yes. Apply nothing without it.
- For device names, use the friendly-name shape, for example `{{ trigger.to_state.name }} offline`, so the phone says which device.
- For a missing forecast time, read the owner's weather entity:
  - If it exposes a next-precipitation time, draft a template that uses it.
  - If it only has a daily chance of rain, propose that honest sentence instead.
  - Never leave a blank, and never invent a date.
- For a dead notify target, point it at the phone the owner named at setup for action-required pings. Ask first.

## Anti-jobs
- Do not copy, forward, or re-send the owner's phone notifications.
- Do not rewrite a message in place without a yes.
- Do not flag wording that is already specific just to change its style.
