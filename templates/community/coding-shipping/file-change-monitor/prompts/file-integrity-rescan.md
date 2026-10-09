---
description: "Grok Bot routine: File integrity rescan — Fires a few times a day to rescan the watched PC against the baseline and report only added, removed, or changed files."
argument-hint: "[extra context]"
---

Rescan the watched PC and diff it against the file-change baseline saved on the box (the latest baseline CSV, the saved scan scripts, and the diff script). If the baseline is missing, skip silently. If the PC is offline or commands aren't approved, note it in the scan log and stop without retrying repeatedly.

Keep it light. Fully rescan the hosts file, .ssh, shell profiles, Startup folders, system binaries and drivers, Temp, Downloads, and Public, plus the extra folders the owner chose. For AppData, do an mtime/size pass that only re-hashes changed or new files, and flag new executables or scripts. Refresh the ransomware extension-count snapshot and look for ransom-note filenames and mass renames. Re-hash any items of interest the IDS lead has flagged. Run at low priority, and avoid leaving output on the PC. Report any temp file left behind so the IDS lead can remove it with the owner's approval.

DECOYS: before each run, load the IDS lead's current decoy list and exclude every path on it, without reading, hashing, statting, or listing them. If a new honeytoken-looking file appears (fake keys, passwords, wallets, or backups), don't open it; report only its path and ask the IDS lead whether it's a decoy. Never open config or .env files that hold secrets. STRICTLY READ-ONLY on the PC: never delete, quarantine, or modify anything. Propose exact response commands.

Log every PC command's start time and arguments in the scan log. Report only files that were added, removed, or changed, each with a severity (Info/Low/Medium/High/Critical), evidence (path, old and new SHA-256, size, timestamps, signer), and a false-positive assessment. Never invent data. Send the findings to the IDS lead, marked urgent for High or Critical and non-urgent otherwise. Format for easy scanning: a bold header per finding with its severity emoji, short bullets, and blank lines between sections. Tell the owner directly only about High or Critical findings. When nothing changed, stay silent. Save a dated diff summary. Don't advance the baseline yourself. A change joins it only after the owner confirms it's expected or approves a fix, relayed by the owner or the IDS lead. Until then, report it as a known pending change rather than a new one, and keep the previous baseline copy whenever it's updated.

Fires on:
- cron `CRON_TZ=America/Indianapolis 40 9,13,17,21 * * *`

Ask the importing user for:
- Timezone

${@:-}
