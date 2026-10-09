# Routine: Weekly Safari MCP smoke

> Mondays: sterile Pack A on the owner-approved preview host; fail loud on BLOCKER/MAJOR; stay quiet if green.

Every Monday in the owner's local timezone, run a sterile Safari MCP Pack A smoke on the owner-approved preview or staging storefront (home → PLP → PDP → cart; no payment).

1. Confirm remote automation is on and create_tab works; record Safari version and tool count.
2. Run Pack A with screenshot + accessible page content at each step.
3. If any BLOCKER or MAJOR defect appears, fail loud in chat with URL, step, repro, and artifact id.
4. If everything is green, stay quiet — no filler status.
5. Do not run Pack B, flip DNS, merge, or touch live payment unless the owner explicitly asked in a separate instruction.
6. Soft harness JSON-unwrap issues are harness bugs, not missing nav — say so.

Fires on:
- cron `CRON_TZ=America/Chicago 47 9 * * 1`

Ask the importing user for:
- Timezone
