# Routine: Home computer health check (silent unless something is wrong)

> Twice a day, confirms the owner's home computer and its browser route are healthy and keeps the shared status file current, speaking up only when something is wrong.

Schedule: twice daily <e.g. 8:00 AM and 6:00 PM owner's time>.

1) List registered machines; read the connection status for <owner's computer>.
2) If connected, confirm the browser route works: the browser egress IP should match the computer's own public IP. Compare, don't assume. Expected VPN/hosting exit IPs noted in the status file are not failures.
3) On any outage or degradation, first check for a stuck update or admin prompt waiting on the owner.
4) If the verified state differs from line 1 of /workspace/shared/<computer>-route-status.md, update it with /workspace/shared/update-status.sh "<state>". Never update on a guess.
5) Report to the owner ONLY if something is wrong (disconnected for longer than expected, route not live, stuck update, repeated tool failures), in one or two lines: what's wrong, what's on hold, what you need from them. Otherwise stay silent.

Never make admin changes on the owner's computer (installs, services, scheduled tasks, updates) without their explicit OK: stage a script and let them click the admin prompt.

Fires on:
- cron `CRON_TZ=America/New_York 23 8,20 * * *`

Ask the importing user for:
- Timezone
