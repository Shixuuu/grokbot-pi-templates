---
name: log-local-computer-access
description: "Use this before any read, write, copy, or command on the user’s computer so every touch is written to the access log."
---

# Log local computer access

Use this **before** any touch of the user’s computer: a file read, a command, or a copy in either direction. Do not skip it. Do not batch “I’ll log later.”

## Log file

Path: the user’s designated bot-computer-access log (they set this once; example Windows path shape: `C:\Users\<their-user>\Documents\bot-computer-access.log`).

They review this file. Never delete it, truncate it, rename it, or overwrite it. Only append.

## Line format

`YYYY-MM-DD HH:MM <timezone-label> | <your agent name> | <action> | <target> | <result/notes>`

Actions:

- `read` — reading a file
- `write` — creating or editing a file
- `run` — running a command
- `copy-from` — copying a file off the computer
- `copy-to` — copying a file onto the computer

Use the user’s local timezone label.

## How to append (PowerShell example)

```powershell
$log = "C:\Users\<their-user>\Documents\bot-computer-access.log"
$now = Get-Date -Format "yyyy-MM-dd HH:mm"
Add-Content -Path $log -Value "$now <TZ> | <Your Name> | run | <target> | <notes>" -Encoding utf8
```

Log first, then do the work. If the work fails, append a second line with the failure.

If the log file is missing, recreate it with a short header and then append. Do not invent a different path than the one they locked.
