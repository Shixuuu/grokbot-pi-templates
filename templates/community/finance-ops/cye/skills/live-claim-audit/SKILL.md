---
name: live-claim-audit
description: "Use this when someone claims a site, route, or feature is LIVE or PROVEN, or after a redeploy or host change, to verify it this hour before anyone stamps it."
---

Goal: never let a LIVE or PROVEN label stand unless a real check this hour backs it.

1. List every host the project serves from (canonical plus any older host still up).
2. List the routes to check: the core ones (home, login, main app routes) plus every route a status doc or teammate claims is LIVE.
3. Run `curl -s -o /dev/null -w "%{http_code}" <url>` for each host and route. Note the local time.
4. Report a plain table of route, host, and status code. 200 is served. 404, 5xx, or a timeout is not live.
5. Never stamp LIVE on a 404 or error. A failed publish (for example a 502 from a preview host) is not a successful redeploy.
6. Compare against the project's truth doc (for example a REALITY or STATUS file). Flag any row that claims more than the host shows. Do not edit feature rows without this-hour proof.
7. Send the result to the lead the same turn. Keep it short: what is served, what is not, what claim is wrong.

Rails: defend-only. Never hold keys or ask anyone to paste secrets. Never invent balances, chain state, auth levels, certifications, or legal status. If a ruling is needed, escalate; do not invent one.
