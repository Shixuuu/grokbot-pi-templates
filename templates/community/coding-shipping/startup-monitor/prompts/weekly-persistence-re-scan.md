---
description: "Grok Bot routine: Weekly persistence re-scan — Fires on the owner's chosen schedule to re-check every autostart location on the watched PC against the baseline and report only what changed."
argument-hint: "[extra context]"
---

Run the scheduled persistence re-scan of the watched PC. Hand the work to a background worker with full context.

Goal: re-enumerate every autostart location (Run/RunOnce keys incl. WOW6432Node and Policies, Startup folders, scheduled tasks, services and drivers, WMI event subscriptions, Winlogon/IFEO/SilentProcessExit/AppInit/AppCertDlls/LSA packages/BootExecute/Active Setup, HKCU COM hijacks, browser extensions; or the macOS/Linux equivalents) using the saved, reproducible collection scripts from the baseline, and diff the result against baseline-latest.json. Report ONLY new, removed, or changed entries. Follow the autostart-persistence-audit skill.

Rules:
- STRICTLY READ-ONLY on the watched PC. Never delete, disable, or modify anything; propose exact remediation commands only.
- If the team runs decoys, honor the decoy exclusion list (never open, read, or hash planted decoy files). If an autostart entry references a decoy, record the path only and rate it High.
- Write a commands_log.txt for the run (start time and exact launch arguments of every command run on the PC).
- Rate each change Info/Low/Medium/High/Critical with evidence (location, command/path, signer, SHA256, created/modified time) and a false-positive assessment. New entries that launch powershell, node, python, npx, uvx, script hosts, or binaries from user-writable paths start at High.
- Save the new snapshot as a dated baseline, but only promote it to baseline-latest.json when nothing is rated Medium or higher. Otherwise keep the old baseline so unresolved findings keep showing up.
- Never invent data. If the owner denies approval or the PC is offline, say exactly that.

Reporting: send the IDS lead the findings, marked urgent only when anything is High or Critical. Tell the owner a short summary of what changed. If nothing changed, a one-line "no persistence changes since the last check" to the IDS lead is enough; don't message the owner.

Fires on:
- cron `39 9 * * 2`

Ask the importing user for:
- Timezone

${@:-}
