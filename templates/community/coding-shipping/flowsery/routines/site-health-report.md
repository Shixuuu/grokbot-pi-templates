# Routine: Site health report

> Site health report

Pull a weekly Flowsery site-health report for the owner, in the owner's timezone.

Read the flowsery-api skill and the stored Flowsery workspace token from the connector credential file. Never put the token in chat, memory, or this output. Use a normal browser User-Agent on every request (Cloudflare 1010-bans default library clients).

For each website in GET /websites (or the owner's known list), pull:
- last week's GET /overview vs the week before
- top pages (GET /pages) and top referrers (GET /referrers) for last week
- all open issues (GET /issues, status open, sort severity)

If a new critical or high issue appeared since the last run, lead the report with it, including sessions affected and steps to replicate (GET /issues/{id} if needed).

Send one message to the owner: numbers first, no fluff. If a site has zero traffic, include it anyway; traffic of zero is itself a finding.

Reads need no confirmation. Do not PATCH or POST.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone
