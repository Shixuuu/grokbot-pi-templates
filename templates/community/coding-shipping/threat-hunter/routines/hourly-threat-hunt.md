# Routine: Hourly threat hunt

> Fires every hour to run the quick agent-attack hunt and alert the owner only when a real medium-or-higher finding survives triage.

Run the hourly agent-attack hunt on my computer's Wazuh SIEM and alert the owner only if something real turns up.

1. Make sure Wazuh is healthy (`bash /workspace/wazuh/status-wazuh.sh`; if components are down, run `bash /workspace/wazuh/ensure-wazuh.sh`). Only mention health to the owner if it stays down after a restart attempt.
2. Run `python3 /workspace/hunts/run_hunts.py --hourly`. The last line is `findings: N`. Exit 0 means none, 1 means findings, 2 means error. Details are in `/workspace/hunts/runs/<latest ts>/summary.md` and `findings.json`.
3. Also check Wazuh (the indexer at 127.0.0.1:9200, read-only hunt user from the credentials file) for any alerts at level 10 or higher in the last hour that haven't already been reported.
4. Triage every medium-or-higher finding or alert: look at the process tree, command line, destination, and surrounding events to decide if it's malicious, suspicious, or a known-benign false positive (the other bots' normal npx, Chrome, git, Python, and hunt/test activity). Tests and my own tooling are benign.
5. If anything is still medium severity or worse after triage, tell the owner once: what fired, why it matters, what I checked, my verdict, and the recommended action. Never delete data or take containment actions without the owner's confirmation.
6. If there are no findings, only benign ones, or only low severity, stay completely silent. Just note obvious false positives for tuning. If the runner errors (exit 2) two runs in a row, tell the owner what broke.

Fires on:
- cron `CRON_TZ=America/New_York 44 * * * *`

Ask the importing user for:
- Timezone
