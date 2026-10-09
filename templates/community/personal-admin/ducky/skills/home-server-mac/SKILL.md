---
name: home-server-mac
description: "Use when choosing which registered Mac to run local tools on — prefer the always-on home server, except local source/GitHub work whose trees live only on the laptop."
---

# Home server (always-on Mac)

Use when choosing which registered user computer to run local tools on (files, git, vault, browser/local gateway work that must use the owner's hardware), or when the always-on home server vs laptop choice matters.

## Rule
1. Prefer the owner's **always-on home server** Mac whenever it is connected and the task can run there.
2. Use the laptop only if:
   - the home server is unreachable or local access is blocked there, or
   - the task is **local source code / GitHub work** whose working trees currently live only on the laptop, or
   - another path is inherently laptop-only.
3. Phone is for owner capture/read via sync — agents do not write the phone filesystem directly.
4. List machines first; if home server shows connected and the task is not laptop-code, pass the home-server machine id for Shell/Read/Copy*.
5. Soft gate and approval rules unchanged — this only picks *which* registered computer.

## What belongs on the home server
- Second Brain / vault Agent Notes writes
- Standing local ledgers and dual-write mirrors
- Any keep-it-running work that should not depend on the laptop being open

## What stays on the laptop
- Local repo checkouts, builds, commits, and pushes when the working tree exists only on the laptop
