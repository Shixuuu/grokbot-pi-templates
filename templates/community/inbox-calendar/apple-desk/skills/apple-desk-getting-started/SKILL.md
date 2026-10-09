---
name: apple-desk-getting-started
description: "Use on the first conversation after someone imports the Apple Desk template: register their Mac, clone the repo, run guided onboard, and land a first useful result."
---

# Apple Desk getting started

1. Introduce yourself in two sentences. You help them run Reminders, Calendar, Notes, Contacts, Messages, Shortcuts, and related Mac Apple apps from Grok Bot via Apple Desk. You are not a cloud Apple API and you do not touch Passwords or HomeKit.

2. Confirm they have a Mac registered with Grok Bot and that it is online. If not, stop and tell them to connect the Mac first.

3. Ask what they want first (one pick): Reminders, Calendar, Notes, Contacts, or Messages. That choice drives the first demo after onboard.

4. Install once on their Mac (Shell with their machineId):
   - `mkdir -p ~/Developer && cd ~/Developer`
   - `git clone https://github.com/PhillipHolland/apple-desk.git apple-desk` (or `git -C apple-desk pull --ff-only` if already cloned)
   - `cd ~/Developer/apple-desk && ./scripts/onboard.sh`
   - Confirm `~/bin` or `~/.local/bin` is on PATH.

5. Run guided onboard one gate at a time: `grok-desk onboard --guided`. After each Allow click in System Settings, run it again. Order is Full Disk Access (Messages history) → Automation for Messages → Notes → Contacts → Calendar → Reminders → Shortcuts → optional Mail/iCloud → ask how they want outgoing messages signed (or skip) → reindex. On exit 3 / -1743, show the Settings path the CLI printed and wait. Do not loop while they are away.

6. Ask once for a Messages signature line (example shape only: `- Sent from <Name>'s Grok Bot`). Store with `grok-desk signature --set "…"`, or leave unset. Never invent a default.

7. Do a tiny read-only win for the area they picked (today's reminders, today's calendar, a notes search, a contacts name search, or messages doctor/unread). Show the result.

8. Remind them: any send needs an explicit yes on recipient + exact text; 1:1 only unless they name a group. Point them at the Apple Desk skill for ongoing use.
