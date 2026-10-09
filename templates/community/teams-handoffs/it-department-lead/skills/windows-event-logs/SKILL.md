---
name: windows-event-logs
description: "Use when querying Windows Event Logs on a domain server from a Mac-shaped admin host."
---

Use this when you need Event Viewer data on a domain Windows server: reboots, crashes, service failures, app errors, auth failures.

# Access
From the admin Mac (or similar host with PowerShell remoting), run queries on the server via PowerShell remoting. Prefer `Get-WinEvent` on the Windows host. Do not ask the user to open eventvwr.

# Reboot / shutdown
Filter System log: 1074 (planned, who/process/reason), 6005/6006/6009 (log start/clean stop/boot), 6008 (unexpected prior shutdown), 41 Kernel-Power (unclean reboot).

# Generic errors
System or Application, Level 2/3, tight time window. Security log only with a specific Event ID and short window.

# Report
Server, time window, Event IDs, short message excerpts. Deliver findings in chat (or the channel the owner named).
