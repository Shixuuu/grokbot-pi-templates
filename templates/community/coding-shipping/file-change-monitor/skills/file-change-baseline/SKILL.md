---
name: file-change-baseline
description: "Use this when building or rebuilding a read-only SHA-256 file baseline of a user's computer for intrusion detection (hosts file, SSH, shell profiles, system binaries and drivers, drop folders, ransomware signs)."
---

# File change baseline

This builds a read-only hash baseline of the important files on the owner's computer, so later rescans can report only what was added, removed, or changed.

## Rules
- STRICTLY READ-ONLY on the watched computer. Never delete, move, quarantine, rename, or modify anything. Propose exact response commands, and let the owner (or the IDS lead the owner has authorized) approve them.
- Skip every file your IDS lead marks as a decoy or honeytoken. Never read, hash, stat, or list one. Load the decoy list fresh before each run. If a new file that looks like a honeytoken appears (fake keys, passwords, wallets, or backups), report only its path and ask the IDS lead.
- Never open files that hold secrets, such as app config files with API keys or `.env` files.
- Keep it light. Run at low priority, skip hashing files over 200 MB (record size and mtime only), never pull cloud-only placeholder files down just to scan them, limit recursion depth in AppData-style trees, and batch the work into as few commands as possible.
- Avoid leaving output on the watched computer. If a temp file is unavoidable, name it clearly, keep decoy data out of it, and tell the IDS lead its path so it can be removed with the owner's approval.
- Log every command's start time and exact launch arguments, so other monitors can rule out your sessions.

## Steps
1. Detect the OS, version, hostname, user profile path, and whether the session is elevated. Adapt the paths below to match.
2. Watched paths:
   - The hosts file
   - SSH keys and config (user `.ssh`, system sshd config)
   - Shell and PowerShell profiles
   - System binaries and drivers. On Windows: System32 top-level exe/dll/sys and `drivers\*.sys`. On macOS/Linux: bin/sbin, kernel extensions or modules, and LaunchDaemons/Agents.
   - Startup folders
   - Drop zones: Temp, AppData/Local and Roaming, Downloads, Public, plus `/tmp`, `/var/tmp`, `~/.local/bin` (executable and script extensions only)
   - Any extra folders the owner said matter most
3. For each file, record the path, SHA-256, size, created and modified times, and attributes. Record the Authenticode signer for executables, drivers, and scripts in drop zones and driver folders, and the download source (Zone.Identifier) for downloaded files.
4. Take a ransomware snapshot: count files by extension in Desktop, Documents, Downloads, and Pictures, and look for ransom-note filenames and unusual mass extensions.
5. Save the baseline CSV, extension counts, metadata (what was skipped or denied, and how long it took), the command log, and the exact scan scripts on the box under a dedicated folder such as `/workspace/ids/file-integrity/`, with `*-latest` copies for rescans to diff against.
6. Report initial observations to the IDS lead. Each gets a severity (Info/Low/Medium/High/Critical), evidence (path, hash, mtime, signer), and a false-positive assessment. Never invent data. Items join the accepted baseline only after the owner confirms they're expected.

## Report format
Use a bold header per finding with its severity emoji (🔴 Critical, 🟠 High or Medium, 🟡 Low, ✅ Clear). Follow it with one or two plain sentences, then short bullets for evidence, likely cause, and suggested fix. Put blank lines between sections, and keep paths and IDs in code formatting.
