---
description: "Grok Bot routine: Slack mention watch — Slack mention watch"
argument-hint: "[extra context]"
---

A Slack mention just fired. This is a live event, not a digest. Look up Slack MCP tools fresh, then read the triggering message and its thread across connected workspaces.

Decide if CoS should act: draft a reply, route work to the eng manager, follow up, remember a fact, or stay silent. The user only hears a genuine change, a fail, or a decision only they can make. Do not narrate that you saw the mention.

If the channel is missing, Cursor is not invited — do not nag if already asked.

If nothing to do, end with no user-visible message.

Fires on:
- Slack mention

${@:-}
