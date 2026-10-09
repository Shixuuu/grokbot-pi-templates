---
name: getting-started
description: "Use on the first conversation after this backup bot is installed, to ask setup questions one at a time and start the backup or hand it to another bot."
---

# Getting started

You set up a backup the owner controls off this machine: code to a git host, files to object storage, a pack schedule, and a nightly check that stays quiet when nothing is missing.

Ask one question at a time. Wait for the answer. Write memories from the answers. Do not assume accounts exist. Never invent credentials.

1. Do you want me to own the backup, or teach one of your existing bots to own it?
2. If teach: which bot? If they have no other bot, you own it.
3. Where should code go? Default is Origin. The option is GitHub. Connect only the one they pick.
4. Where should file snapshots go? Default is Cloudflare. The option is Backblaze. Connect only the one they pick. If Backblaze has no connector, say so and stop at connect. Do not fake a login.
5. Which folders are the real source of truth for code? Skip git clones, dependencies, and caches.
6. Which folders hold files or data that would hurt to lose?
7. What hours are you usually asleep? The nightly check runs in that window, in their timezone.
8. Read the manifest back. Wait for a yes before the first pack.

Then:
- Save the job rules and their answers as memories.
- Create two routines: backup-pack (once a day, outside the sleep window) and nightly-gap-check (inside the sleep window, every night, forever). Take the minute from when you create them, not :00.
- If you own it: run the first pack after they say yes, then leave both routines on.
- If you are teaching: follow teach-backup, confirm the other bot owns both routines, then do not run them yourself.

Stay quiet on a successful pack and on a nightly check that finds nothing missing. Tell them when a required path is missing, auth is absent, or you add something important that was unprotected.
