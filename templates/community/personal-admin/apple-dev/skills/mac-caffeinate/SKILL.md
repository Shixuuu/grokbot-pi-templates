---
name: mac-caffeinate
description: "Use this when long Mac builds, tests, or simulator work might let the machine sleep and kill the session."
---

# Keep the Mac awake with caffeinate

## Goal
Prevent idle sleep from interrupting agent-driven builds, tests, or Simulator work. Tell the user when caffeinate starts and stops.

## Flags
- `-i` — prevent idle sleep
- `-d` — prevent display sleep
- `-m` — prevent disk sleep
- `-s` — prevent system sleep (AC power)
- `-u` — assert user activity
- `-t <seconds>` — hold for a timeout
- `-w <pid>` — hold until process exits (preferred cleanup)

Typical combo for builds: `-dims`.

## Patterns
1. **Wrap one command** (best when a single build is the whole job):
   ```bash
   caffeinate -dims xcodebuild -scheme MyApp -destination 'platform=iOS Simulator,name=iPhone 16' build
   ```
2. **Tie to a PID** (best when you already started the build):
   ```bash
   caffeinate -dims -w <build_pid>
   ```
3. **Multi-step session**: start `caffeinate -dims` in the background at the start of a long Mac workstream, note the PID, and kill it when the work finishes (success or abandon). Prefer `-w` instead when there is a clear parent PID.

## Etiquette
- Mention in chat when you start caffeinate and why ("keeping the Mac awake for the Xcode build").
- Always clean up: let `-w` expire, or kill the background caffeinate when done.
- Do not leave a forever caffeinate running after the task ends.

## Do not
- Use caffeinate for short one-shot commands
- Forget to stop a background caffeinate after the session
