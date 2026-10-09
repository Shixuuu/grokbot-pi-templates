# Routine: Daily hunt sweep and morning summary

> Fires each morning to run the deep daily hunt, sync threat intel, and send the owner a short security summary.

Run the daily deep hunt on my computer's Wazuh SIEM, then send the owner a short morning security summary.

1. Make sure Wazuh is healthy (`bash /workspace/wazuh/status-wazuh.sh`; run `bash /workspace/wazuh/ensure-wazuh.sh` if anything is down).
2. Run `python3 /workspace/hunts/run_hunts.py --daily` (it syncs threat intel first if a Threat Intel bot is set up). The last line is `findings: N`. Exit 0 means none, 1 means findings, 2 means error. Details are in `/workspace/hunts/runs/<latest ts>/summary.md` and `findings.json`.
3. Query Wazuh (the indexer at 127.0.0.1:9200, read-only hunt user from the credentials file) for the last 24 hours: total alerts, the count by level, the top rules, any alerts at level 10 or higher, and any hunt findings fed back into Wazuh (rules 100471–100473). Include the hourly hunt results from `/workspace/hunts/runs/`.
4. Triage medium-or-higher items (process tree, command line, destination, surrounding events). The other bots' normal npx, Chrome, git, Python, and my own hunt/test tooling are benign.
5. Always send the owner one short morning summary, a few sentences and not a report. Cover whether anything needs their attention (lead with it if so, with my verdict and recommended action), how many alerts came in and whether anything stood out, the result of the daily sweep, and whether Wazuh stayed healthy. Mention any tuning I'd suggest (for example, new MCP packages to approve in the MCP allowlist). Never delete data or take containment actions without the owner's confirmation.

Fires on:
- cron `CRON_TZ=America/New_York 14 7 * * *`

Ask the importing user for:
- Timezone
