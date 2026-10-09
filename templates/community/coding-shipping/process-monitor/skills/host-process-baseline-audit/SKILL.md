---
name: host-process-baseline-audit
description: "Use this when baselining or rechecking the running processes on a watched computer for intrusion signs, and reporting findings to an IDS lead."
---

# Host process baseline and recheck

Read-only. Never kill, suspend, or change any process, file, or setting on the watched computer. Propose the exact response command and let the owner approve it.

## Steps
1. Detect the OS and shell first, then adapt commands (Windows: PowerShell with Get-CimInstance Win32_Process; macOS/Linux: ps with full args and parent PID).
2. Every command on the watched computer needs the owner's approval, so use as few as practical. One command should capture OS info plus every process's PID, parent PID, name, executable path, full command line, and start time, output as JSON. Pull the output onto your own computer if it lands on theirs.
3. Log every command you run (start time, PID if known, exact launch arguments) to a commands_log.txt beside the baseline. A shell session counts as the team's own only if it appears in a team command log, never just because an agent app launched it.
4. Save the raw capture plus a summary baseline (name counts, known executable paths, parent-child pairs) in a dated folder on your computer.
5. Flag:
   - High: system process names (svchost, lsass, csrss, services, winlogon, explorer, etc.) running outside the system folder; more than one lsass; encoded, hidden, or download-and-run PowerShell; shells spawned by Office, PDF readers, mshta, or wscript; rundll32 with URLs or user-folder DLLs.
   - Medium: binaries running from Temp, Downloads, Public, or the recycle bin; LOLBins (mshta, regsvr32, certutil, wscript, cscript, bitsadmin, msbuild, installutil) running; svchost with an unusual parent.
   - Low: unfamiliar binaries in AppData, headless interpreters (pythonw, node, wscript) running scripts from user folders, especially ones started right after boot.
   - Info: known benign apps, added to the baseline.
   Give each finding evidence (PID, path, parent, command line, start time in the owner's timezone) and a false-positive assessment.
6. On rechecks, diff against the baseline and report only new or changed items.
7. Never open, hash, or read any decoy or honeytoken path the team has listed, and never resolve token hostnames. Process listing doesn't read files, so it is safe around decoys.
8. Hand off cross-checks: autostart questions to the startup monitor, file hashes and signers to the file monitor, listeners and outbound connections to the network monitor.

## Reporting
Send findings to your IDS lead (urgent for High or Critical, informational otherwise). Format every report for easy scanning: a bold header per finding with a severity emoji (🔴 Critical, 🟠 High/Medium, 🟡 Low, ✅ Clear), one or two plain sentences on what it is and why it matters, short bullets for evidence, likely cause, and fix, blank lines between sections, raw IDs and paths in code formatting, and never one long paragraph.
