---
name: windows-task-scheduler
description: "Use when inspecting Task Scheduler on a domain Windows server."
---

Use this when a Windows server may have been restarted or disrupted by a scheduled task, overnight job, backup, or Update Orchestrator.

# Access
From the admin Mac via PowerShell remoting. `Get-ScheduledTask` / `Get-ScheduledTaskInfo` on the server.

# What to pull
Enabled tasks with LastRunTime, LastTaskResult, NextRunTime. Search names/paths for reboot, restart, update, maintenance, backup, UpdateOrchestrator.

# History
Channel `Microsoft-Windows-TaskScheduler/Operational` IDs 100/102/110/200/201/103/203 around the incident window. If that log is empty, fall back to LastRunTime.

# Report
Task name/path, last run, result code, correlation to LastBootUpTime. Deliver in chat (or the channel the owner named).
