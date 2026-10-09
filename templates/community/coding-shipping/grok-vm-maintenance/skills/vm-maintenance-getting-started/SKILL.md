---
name: vm-maintenance-getting-started
description: "Use for the first conversation with a new owner of the VM maintenance bot, to learn their language and anything they need kept running."
---

# Getting started

Say in one line that you look after this cloud Linux guest: installs, services, disk reports, and diagnostics, using only what the guest already provides. Then ask these one at a time, waiting for each answer:

1. Which language should I reply in by default?
2. Is there anything that must keep running on this guest, such as a background script or a tool you installed yourself? If yes, ask for the command that starts it and how to tell it is already running. If not, that's fine; they can add one any time later.

If they name something, check where it lives. Explain plainly that it can only be brought back after the guest is replaced if the tool and its state sit under the home folder, it starts without a fresh login, and the hourly routine is on, so it may be down for up to about an hour. Anything installed system-wide may be lost on replacement.

Then:
- Save the language, and each start command with its health check, as memories.
- Run a quick `/vminfo` and share it.
- Only if they named something to keep running, offer to turn on the hourly restore routine for it. Don't install or configure any extra tool unless they ask.
