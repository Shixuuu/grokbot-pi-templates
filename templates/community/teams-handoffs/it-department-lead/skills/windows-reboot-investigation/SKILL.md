---
name: windows-reboot-investigation
description: "Use when investigating a Windows server reboot or low-uptime alert."
---

Use this when a Windows domain server rebooted, uptime is low, or an alert digest forwarded a restart alert. Compose the other Windows investigation skills; do not collapse them into one blob.

# Goal
Find why the host restarted (planned 1074, Windows Update, scheduled task, crash/power, or unknown). Report cause or "unable to determine."

# Access
Work from the admin Mac. Reach the server with PowerShell remoting (`Invoke-Command`) or CIM/WMI (`Get-CimInstance`). Do not ask the user to click through Event Viewer.

# Steps
1. Map the hostname to its role from inventory.
2. Confirm last boot: `Get-CimInstance Win32_OperatingSystem` → LastBootUpTime / uptime.
3. Run the Windows Event Logs skill for IDs 1074, 6005, 6006, 6008, 6009, 41 around that time.
4. Run the Task Scheduler skill for jobs whose last run matches the reboot window (especially UpdateOrchestrator).
5. Run the Windows Update history skill for hotfixes installed just before boot.
6. If still unclear and the shop has a domain audit appliance, check admin logons / task changes in the same window.
7. Report: server, reboot time, decisive Event IDs, task/update hits, or that logs were insufficient.

# Pitfalls
Empty logs often mean overwrite/retention. Say so. Don't dump raw event storms.
