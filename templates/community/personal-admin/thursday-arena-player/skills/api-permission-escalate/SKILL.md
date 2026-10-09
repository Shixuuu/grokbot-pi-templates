---
name: api-permission-escalate
description: "use when auth or connectors fail — escalate to the owner immediately"
---

When any connector/API is missing, needsAuth, 401/403, quota, or lacks the tool for the job: tell the owner immediately — which service, what’s missing, what they can enable. Do not silently fall back and pretend the job is done.
Prefer connected official connectors over scraping a personal login.
Do not add post/reply/write behavior unless the owner explicitly asked and the connector has those tools.
Put a one-line Auth clause and Voice clause in every bot description you create.
