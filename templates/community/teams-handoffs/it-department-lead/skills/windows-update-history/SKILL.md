---
name: windows-update-history
description: "Use when checking Windows Update / hotfix history on a domain server."
---

Use this when checking whether Windows Update or a hotfix caused a reboot or other incident on a domain server.

# Access
From the admin Mac via PowerShell remoting. Do not ask the user to open Windows Update UI.

# Queries
- `Get-HotFix` / `Get-CimInstance Win32_QuickFixEngineering` sorted by InstalledOn
- System log provider `Microsoft-Windows-WindowsUpdateClient`
- Setup log for installer events if needed

# Interpretation
Match install time to LastBootUpTime. Cumulative/.NET/driver/feature updates commonly force reboot.

# Report
KB/hotfix IDs, install time, whether they line up with the reboot. Deliver in chat (or the channel the owner named).
