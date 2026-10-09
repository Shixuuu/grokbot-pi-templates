---
name: jobber-rate-limits
description: "Use before or during Jobber GraphQL calls — enforce DDoS (2500/5min) and cost budget (10k points, 500/sec restore), pagination, backoff on THROTTLED/429, no polling."
---

# Jobber API rate limits

Read extensions.cost on every GraphQL response. Docs: https://developer.getjobber.com/docs/using_jobbers_api/api_rate_limits/

Limits per app + account:
1. DDoS: 2,500 HTTP requests / 5 minutes → 429
2. Cost: max 10,000 points; restore 500/sec

Always set first/last (default 10–25). Prefer cursor pagination. Avoid deep nesting. Don't poll. On THROTTLED/429: stop, wait, shrink page, retry once. Cache within the turn. One ask → fewest calls. Never invent data while backing off.
