---
name: autostart-persistence-audit
description: "Use this when baselining or re-scanning a computer for persistence: every autostart entry an attacker could use to survive a reboot, reporting only new or changed entries."
---

# Autostart persistence audit

Find every way something could survive a reboot on the watched computer, save a baseline, and on later runs report only what is new, removed, or changed.

## Rules
- STRICTLY READ-ONLY on the watched computer. Never delete, disable, move, or modify any entry. For each finding, propose the exact removal command and let the owner approve and run it.
- Commands run on the owner's computer need their approval, so batch enumeration into a few well-built read-only scripts (one per OS, JSON output) instead of dozens of small calls. Pass scripts inline; don't write files onto the watched computer.
- Log every command you run on the computer (local start time, exact launch arguments, SHA-256 of any inline script) to a `commands_log.txt` beside the run, so teammates can tell your sessions apart from anything else.
- If the team runs decoys or honeytokens, load the decoy inventory before every scan and skip those paths completely. If an autostart entry references a decoy, record the path only (never open it) and rate it High.
- Never invent data. If a field couldn't be collected (needs admin, access denied), say so.

## 1. Detect the OS
Try `uname -a`; if that fails, query the Windows version. Adapt from there.

## 2. Enumerate
- **Windows:** HKLM/HKCU (and WOW6432Node) Run, RunOnce, RunOnceEx, Policies\Explorer\Run; per-user and all-users Startup folders (resolve .lnk targets); scheduled tasks (actions, triggers, author, run-as, registration date); services and drivers (path, start type, account, odd paths like Temp, AppData, ProgramData root, Users\Public); WMI event subscriptions (filters, consumers, bindings); Winlogon Shell/Userinit/Notify, Image File Execution Options debuggers and SilentProcessExit, AppInit_DLLs, AppCertDlls, LSA packages, BootExecute, Active Setup StubPath; HKCU COM InprocServer32/LocalServer32 entries; Explorer shell extensions; browser extensions for every profile (id, name, version, permissions).
- **macOS:** LaunchAgents and LaunchDaemons (user and system; summarize Apple-signed ones), login items, cron and periodic, shell rc files, `authorized_keys`, configuration profiles, system and kernel extensions, browser extensions.
- **Linux:** systemd units and timers (system and user), cron, rc.local and init.d, XDG autostart, shell rc and profile.d files, `authorized_keys` for all users, `/etc/ld.so.preload`, udev rules, modules-load.d, sudoers.d, browser extensions.
- For every referenced binary that exists: full path, signature status and signer, SHA-256, created and modified times.

## 3. Save
Save a dated baseline JSON (category, location, name, command/path, args, signer, sha256, created, modified) plus a `baseline-latest.json`, the raw outputs, the exact collection scripts (so the next run reuses them), and a README with the schema and known gaps. Keep all of this on your own computer, not the watched one.

## 4. Triage
On the first run, flag entries that look suspicious on their own merits: unsigned or untrusted signers, user-writable paths, encoded PowerShell, script hosts or LOLBins (mshta, rundll32, regsvr32, wscript) with URLs or odd arguments, non-default WMI consumers, IFEO debuggers, non-default Winlogon/AppInit/LSA values, HKCU COM hijacks, entries pointing at missing files, entries created in the last 30 days, broad-permission browser extensions, unexpected `authorized_keys`. On re-scans, diff against `baseline-latest.json` and report only new, removed, or changed entries. New entries that launch powershell, python, node, npx, uvx, or binaries from user-writable paths start at High. Only promote a new snapshot to `baseline-latest.json` when nothing is rated Medium or higher.

Rate each finding Info, Low, Medium, High, or Critical with evidence (location, command/path, signer, created/modified time) and a false-positive assessment, plus the exact remediation command (not run).

## 5. Report
Send findings to your IDS lead: urgent for High or Critical, informational otherwise. Give the owner a short summary when something changed. Use the scannable format: a bold header per finding with a severity emoji (🔴 Critical, 🟠 High/Medium, 🟡 Low, ✅ Clear), one or two plain sentences on what it is and why it matters, short bullets for evidence, likely cause, and fix, blank lines between sections, raw IDs and paths in code spans, never one long paragraph.
