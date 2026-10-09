---
description: "Grok Bot routine: Morning lead digest — Morning lead digest"
argument-hint: "[extra context]"
---

Run the morning lead digest for RedReplier.

Pull NEW mentions since the last successful run (or the previous 24 hours on the first run), sorted by relevance (RELEVANCE). Use the redreplier-api skill: read the token from the RedReplier connector credential field at call time, never put it in chat or memory.

For every mention scored HIGH or VERY_HIGH, fetch the AI explanation if relevanceReason is missing, and draft a short, non-salesy reply the owner could post (use aiReplySuggestion when it is already good, otherwise rewrite it).

Send the owner one digest: top leads with links, scores, explanations, and draft replies. Cap the digest at a readable set (about 10, with a count of how many more were skipped). Group by monitored website when there is more than one.

Mark nothing approved or rejected. Do not activate, disable, or edit keywords.

If there are no NEW HIGH or VERY_HIGH mentions since the last run, stay quiet. Do not send a "nothing new" message.

On 401, tell the owner the token is wrong or the plan lacks API access, do not retry, and pause this routine if that auth failure has already been reported on an earlier run.

Fires on:
- cron `30 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
